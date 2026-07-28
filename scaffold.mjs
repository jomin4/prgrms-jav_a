// 뼈대 생성기 — slog.gg/p/14146(54강) 원문을 파싱해 src/docs/visuals 골격을 생성한다.
// 실행: node scaffold.mjs   (일회성; 생성 후 삭제해도 됨)
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');
const DOCS = path.join(ROOT, 'docs');
const VIS = path.join(ROOT, 'visuals');

// 강의별 영문 슬러그 (폴더명 chNN-slug)
const SLUG = {
  1:'hello',2:'main-entry',3:'stdout',4:'indent',5:'newline',6:'variable',7:'operator',
  8:'if',9:'and-or',10:'else',11:'debugging',12:'increment',13:'visualizer',14:'while',
  15:'datatypes',16:'stack-locals',17:'heap-reference',18:'store-compare',19:'primitive-vs-reference',
  20:'method-param',21:'return-type',22:'compile-runtime',23:'stack-frame',
  24:'new-heap',25:'object-memory',26:'gc',27:'object-folder',28:'instance-variable',29:'custom-class',30:'this',
  31:'wrapper',32:'array-vs-list',33:'list-vs-map',34:'static',35:'reference-assign',
  36:'inheritance',37:'duck-sim',38:'composition',39:'upcasting',
  40:'abstract',41:'abstract-class',42:'instance-state',43:'polymorphism-tv',44:'downcasting',45:'exception-cast',46:'warrior-weapon',47:'return-transform',
  48:'overloading-ctor',49:'default-ctor-super',50:'ctor-chaining',51:'ctor-this',52:'ctor-dedup',
  53:'strategy-pattern',54:'interface',
};

// 파트 구분 (docs 상단 표기용)
function partOf(n){
  if(n<=7) return 'P1. 기초 문법';
  if(n<=14) return 'P2. 제어문 & 디버깅';
  if(n<=19) return 'P3. 자료형 & 메모리';
  if(n<=23) return 'P4. 함수 & 스택';
  if(n<=30) return 'P5. 객체 & 힙';
  if(n<=33) return 'P6. 표준 클래스';
  if(n<=35) return 'P7. static';
  if(n<=39) return 'P8. 상속 & 오리 시뮬레이션';
  if(n<=47) return 'P9. 추상화 & 다형성';
  if(n<=52) return 'P10. 생성자';
  return 'P11. 패턴 & 인터페이스';
}

const html = await (await fetch('https://www.slog.gg/p/14146',{headers:{'User-Agent':'Mozilla/5.0'}})).text();

// 콘텐츠 문자열(이스케이프된 JSON 값) 경계 찾기
const start = html.indexOf('# 1강');
let end = start;
for(let i=start;i<html.length;i++){ if(html[i]==='"' && html[i-1]!=='\\'){ end=i; break; } }
let raw = html.slice(start, end)
  .replace(/\\r\\n/g,'\n').replace(/\\n/g,'\n').replace(/\\t/g,'\t')
  .replace(/\\"/g,'"').replace(/\\u0026/g,'&').replace(/\\u003c/g,'<').replace(/\\u003e/g,'>')
  .replace(/\\\//g,'/').replace(/\\\\/g,'\\');

// 강의 섹션 분리
const heads=[]; const re=/(^|\n)#\s*(\d+)강/g; let m;
while((m=re.exec(raw))) heads.push({num:+m[2], pos:m.index + (m[1]?m[1].length:0)});
const sections={};
for(let i=0;i<heads.length;i++){
  const s=heads[i].pos, e=i+1<heads.length?heads[i+1].pos:raw.length;
  sections[heads[i].num]=raw.slice(s,e).trim();
}

function shortTitle(sec){
  // 첫 "- [.., N강, <제목>...]" 에서 제목 부분 추출
  const m1=sec.match(/p 14146,\s*\d+강,\s*([^\]\[\n]*?)(?:\]|\(https|,\s*\d부)/);
  return m1?m1[1].trim().replace(/\s+/g,' '):'';
}
function extractCodes(sec){
  return [...sec.matchAll(/```(?:java|c|text|cpp)?\n([\s\S]*?)```/g)].map(c=>c[1].replace(/\s+$/,'')).filter(c=>c.trim().length>0);
}
function extractLinks(sec){
  const links=[...sec.matchAll(/https?:\/\/[^\s)\]]+/g)].map(x=>x[0]);
  const viz=links.filter(l=>/(pythontutor|java_visualize|cscircles)/.test(l));
  const img=links.filter(l=>/(imgur\.com|postimg\.cc|postimages)/.test(l));
  return {viz:[...new Set(viz)], img:[...new Set(img)]};
}
function conceptNotes(sec){
  // 코드펜스 제거, 마크다운 링크는 텍스트만 남김
  let t=sec.replace(/```[\s\S]*?```/g,'').replace(/!\[[^\]]*\]\([^)]*\)/g,'');
  t=t.replace(/\[([^\]]*)\]\((https?:[^)]*)\)/g,'$1'); // [텍스트](url) -> 텍스트
  t=t.replace(/https?:\/\/\S+/g,'').replace(/\(\s*\)/g,'');
  return t.split('\n').map(l=>l.replace(/\s+$/,'')).filter(l=>l.trim()!=='').join('\n');
}
function className(code){
  const pub=code.match(/public\s+class\s+([A-Za-z_$][\w$]*)/);
  if(pub) return pub[1];
  const any=code.match(/class\s+([A-Za-z_$][\w$]*)/);
  return any?any[1]:'Main';
}
function ensure(d){ fs.mkdirSync(d,{recursive:true}); }

ensure(SRC); ensure(DOCS); ensure(VIS);

const indexRows=[];
let codeLessons=0, docOnly=0;
for(let n=1;n<=54;n++){
  const sec=sections[n]||'';
  const slug=SLUG[n]||('lesson'+n);
  const nn=String(n).padStart(2,'0');
  const base=`ch${nn}-${slug}`;
  const title=shortTitle(sec);
  const codes=extractCodes(sec);
  const {viz,img}=extractLinks(sec);

  // ── src ──
  let srcNote='이론/환경 강의 (문서로만 기록)';
  if(codes.length>0){
    codeLessons++;
    const dir=path.join(SRC, base); ensure(dir);
    if(codes.length===1){
      const c=codes[0];
      const isC=/#include/.test(c);
      const fname=isC?'main.c':(className(c)+'.java');
      fs.writeFileSync(path.join(dir,fname), c+'\n');
      srcNote=`\`src/${base}/${fname}\``;
    }else{
      codes.forEach((c,i)=>{
        const sub=path.join(dir, String(i+1).padStart(2,'0')); ensure(sub);
        const isC=/#include/.test(c);
        const fname=isC?'main.c':(className(c)+'.java');
        fs.writeFileSync(path.join(sub,fname), c+'\n');
      });
      srcNote=`\`src/${base}/01..${String(codes.length).padStart(2,'0')}/\` (코드블록 ${codes.length}개)`;
    }
  } else { docOnly++; }

  // ── visuals ──
  let visNote='';
  if(viz.length||img.length){
    const vdir=path.join(VIS, base); ensure(vdir);
    let md=`# ${base} · 시각화 자료\n\n> 출처: slog.gg/p/14146 ${n}강\n\n`;
    if(viz.length){ md+=`## 메모리 시각화 (pythontutor / java_visualize)\n`+viz.map((l,i)=>`${i+1}. ${l}`).join('\n')+'\n\n'; }
    if(img.length){ md+=`## 이미지\n`+img.map((l,i)=>`${i+1}. ${l}`).join('\n')+'\n'; }
    fs.writeFileSync(path.join(vdir,'links.md'), md);
    visNote=`[visuals](../visuals/${base}/links.md)`;
  }

  // ── docs ──
  const notes=conceptNotes(sec);
  const doc=`# ${n}강 · ${title}

> ${partOf(n)} | 출처: slog.gg/p/14146 ${n}강

## 🎯 핵심 개념
${notes || '(정리 예정)'}

## 💻 실습 코드
${srcNote}

## 🧠 메모리에서 무슨 일이?
${visNote?`시각화 자료: ${visNote}`:'(해당 없음 / 정리 예정)'}

## ✅ 실행 결과
\`\`\`
(정리 예정)
\`\`\`

## 📝 회고 / 헷갈렸던 점
-
`;
  fs.writeFileSync(path.join(DOCS, base+'.md'), doc);

  indexRows.push(`| ${n} | [${title||slug}](docs/${base}.md) | ${codes.length?'✅':'—'} | ${(viz.length||img.length)?'🖼️':'—'} |`);
}

// README 인덱스 갱신
const readme=`# prgrms-jav_a

자바 학습 프로젝트 (출처: [slog.gg/p/14146](https://www.slog.gg/p/14146), 총 54강)

- **학습 방식:** 강사(코드 제공·설명) → 학습자(직접 타이핑·실행) 반복
- **철학:** 메모리를 먼저 이해하고 그 위에 객체지향(OOP)을 쌓는다
- **커리큘럼:** [ROADMAP.md](ROADMAP.md)
- **구조:** \`src/\`(실습 코드) · \`docs/\`(강의별 기록) · \`visuals/\`(시각화 링크)

## 강의 인덱스 (54강)

| 강 | 제목 | 코드 | 시각화 |
|----|------|:----:|:------:|
${indexRows.join('\n')}
`;
fs.writeFileSync(path.join(ROOT,'README.md'), readme);

console.log('완료. 코드 강의:', codeLessons, '| 문서 전용:', docOnly, '| docs:', 54);
