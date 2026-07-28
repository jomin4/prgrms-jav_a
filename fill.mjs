// 문서 완성기 — 각 강의 실습 코드를 실제 컴파일·실행하여 결과를 docs에 채운다.
// 실행: node fill.mjs
import fs from 'fs';
import path from 'path';
import os from 'os';
import { spawnSync } from 'child_process';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');
const DOCS = path.join(ROOT, 'docs');
const VIS = path.join(ROOT, 'visuals');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'javrun-'));

const SLUG = {1:'hello',2:'main-entry',3:'stdout',4:'indent',5:'newline',6:'variable',7:'operator',8:'if',9:'and-or',10:'else',11:'debugging',12:'increment',13:'visualizer',14:'while',15:'datatypes',16:'stack-locals',17:'heap-reference',18:'store-compare',19:'primitive-vs-reference',20:'method-param',21:'return-type',22:'compile-runtime',23:'stack-frame',24:'new-heap',25:'object-memory',26:'gc',27:'object-folder',28:'instance-variable',29:'custom-class',30:'this',31:'wrapper',32:'array-vs-list',33:'list-vs-map',34:'static',35:'reference-assign',36:'inheritance',37:'duck-sim',38:'composition',39:'upcasting',40:'abstract',41:'abstract-class',42:'instance-state',43:'polymorphism-tv',44:'downcasting',45:'exception-cast',46:'warrior-weapon',47:'return-transform',48:'overloading-ctor',49:'default-ctor-super',50:'ctor-chaining',51:'ctor-this',52:'ctor-dedup',53:'strategy-pattern',54:'interface'};
function partOf(n){if(n<=7)return'P1. 기초 문법';if(n<=14)return'P2. 제어문 & 디버깅';if(n<=19)return'P3. 자료형 & 메모리';if(n<=23)return'P4. 함수 & 스택';if(n<=30)return'P5. 객체 & 힙';if(n<=33)return'P6. 표준 클래스';if(n<=35)return'P7. static';if(n<=39)return'P8. 상속 & 오리 시뮬레이션';if(n<=47)return'P9. 추상화 & 다형성';if(n<=52)return'P10. 생성자';return'P11. 패턴 & 인터페이스';}

// ── 원문 재파싱 (개념 노트용) ──
const html = await (await fetch('https://www.slog.gg/p/14146',{headers:{'User-Agent':'Mozilla/5.0'}})).text();
const start = html.indexOf('# 1강');
let end=start; for(let i=start;i<html.length;i++){ if(html[i]==='"'&&html[i-1]!=='\\'){end=i;break;} }
let raw = html.slice(start,end).replace(/\\r\\n/g,'\n').replace(/\\n/g,'\n').replace(/\\t/g,'\t').replace(/\\"/g,'"').replace(/\\u0026/g,'&').replace(/\\u003c/g,'<').replace(/\\u003e/g,'>').replace(/\\\//g,'/').replace(/\\\\/g,'\\');
const heads=[]; const re=/(^|\n)#\s*(\d+)강/g; let m;
while((m=re.exec(raw))) heads.push({num:+m[2],pos:m.index+(m[1]?m[1].length:0)});
const sections={};
for(let i=0;i<heads.length;i++){ const s=heads[i].pos,e=i+1<heads.length?heads[i+1].pos:raw.length; sections[heads[i].num]=raw.slice(s,e).trim(); }

function shortTitle(sec){const m1=sec.match(/p 14146,\s*\d+강,\s*([^\]\[\n]*?)(?:\]|\(https|,\s*\d부)/);return m1?m1[1].trim().replace(/\s+/g,' '):'';}
function conceptBullets(sec,n){
  // 코드/이미지/링크 제거
  let t=sec.replace(/```[\s\S]*?```/g,'').replace(/!\[[^\]]*\]\([^)]*\)/g,'');
  t=t.replace(/\[([^\]]*)\]\((https?:[^)]*)\)/g,'$1').replace(/https?:\/\/\S+/g,'');
  const lines=t.split('\n').map(l=>l.trim()).filter(Boolean);
  const bullets=[];
  for(let l of lines){
    if(/^#\s*\d+강/.test(l)) continue;
    // "26 04 20, p 14146, N강, <핵심>, k부" → <핵심>
    let mm=l.match(new RegExp('p 14146,\\s*'+n+'강,\\s*(.+)$'));
    if(mm){ let x=mm[1].replace(/\]$/,'').replace(/,\s*\d부.*$/,'').replace(/\s*\($/,'').trim(); if(x) bullets.push(x); continue; }
    l=l.replace(/^[-*]\s*/,'').replace(/[\[\]()]/g,'').trim();
    if(l && l.length>1 && !/^\d{2}\s*\d{2}/.test(l)) bullets.push(l);
  }
  // 정제: 인코딩된 URL/코드 찌꺼기, 마크다운 헤더 기호 제거, 중복/과장길이 제거
  const seen=new Set(); const out=[];
  for(let b of bullets){
    b=b.replace(/^#+\s*/,'').trim();              // "## 문제 1" -> "문제 1"
    if(/%[0-9A-Fa-f]{2}|curInstr|code=|mode=display|java_visualize|pythontutor/.test(b)) continue; // URL 찌꺼기
    if(/^[+\-_=~`.\s]+$/.test(b)) continue;        // 기호만
    if(b.length<2 || b.length>120) continue;       // 너무 짧거나 김
    const k=b.slice(0,40); if(seen.has(k)) continue; seen.add(k); out.push(b);
  }
  return out;
}

// ── 컴파일/실행 하니스 ──
function findMainClass(dir){
  const files=fs.readdirSync(dir).filter(f=>f.endsWith('.java'));
  for(const f of files){ const t=fs.readFileSync(path.join(dir,f),'utf8'); if(/static\s+(public\s+)?void\s+main|public\s+static\s+void\s+main/.test(t)){ const pc=t.match(/public\s+class\s+([A-Za-z_$][\w$]*)/); return pc?pc[1]:path.basename(f,'.java'); } }
  return null;
}
function runDir(dir){
  const javas=fs.readdirSync(dir).filter(f=>f.endsWith('.java'));
  const cs=fs.readdirSync(dir).filter(f=>f.endsWith('.c'));
  if(cs.length) return {status:'c',out:'(C 예제 — 메모리 주소 관찰용, 시각화 참고)'};
  if(!javas.length) return {status:'none',out:''};
  const outdir=fs.mkdtempSync(path.join(TMP,'o-'));
  const jc=spawnSync('javac',['-encoding','UTF-8','-d',outdir,...javas.map(f=>path.join(dir,f))],{encoding:'utf8',timeout:60000});
  if(jc.status!==0){
    const err=(jc.stderr||'').split('\n').filter(Boolean).slice(0,2).join(' ');
    return {status:'compile-seed',out:err};
  }
  const main=findMainClass(dir);
  if(!main) return {status:'compiled-nolib',out:'(컴파일 성공 · main 없음 = 클래스 정의 모음)'};
  const jr=spawnSync('java',['-Dstdout.encoding=UTF-8','-Dfile.encoding=UTF-8','-cp',outdir,main],{encoding:'utf8',timeout:8000});
  let out=(jr.stdout||'');
  if(jr.status!==0 && jr.stderr){ out += (out?'\n':'')+'[예외] '+(jr.stderr.split('\n').filter(Boolean).slice(0,2).join(' ')); }
  return {status: jr.status===0?'ok':'runtime', out: out.replace(/\r/g,'').trimEnd()};
}
function leafDirs(base){
  // base 자체에 .java 있으면 [base], 아니면 하위 숫자폴더들
  if(!fs.existsSync(base)) return [];
  const entries=fs.readdirSync(base,{withFileTypes:true});
  if(entries.some(e=>e.isFile()&&(e.name.endsWith('.java')||e.name.endsWith('.c')))) return [base];
  return entries.filter(e=>e.isDirectory()).map(e=>path.join(base,e.name)).sort();
}

// ── docs 작성 ──
let ran=0, seeds=0, defs=0, totalRun=0;
for(let n=1;n<=54;n++){
  const sec=sections[n]||''; const slug=SLUG[n]; const nn=String(n).padStart(2,'0'); const base=`ch${nn}-${slug}`;
  const title=shortTitle(sec);
  const bullets=conceptBullets(sec,n);
  const srcBase=path.join(SRC,base);
  const dirs=leafDirs(srcBase);

  // 시각화
  const vfile=path.join(VIS,base,'links.md');
  const hasVis=fs.existsSync(vfile);

  let doc=`# ${n}강 · ${title}\n\n> ${partOf(n)} · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) ${n}강\n\n`;
  doc+=`## 🎯 핵심 개념\n`;
  doc+= bullets.length? bullets.map(b=>`- ${b}`).join('\n')+'\n' : '- (개념 강의)\n';
  doc+=`\n## 💻 실습 코드 & 실행 결과\n`;
  if(dirs.length===0){
    doc+=`> 이론/환경 강의 — 실습 코드 없음 (개념 정리 위주).\n`;
  } else if(dirs.length===1){
    const d=dirs[0];
    const jf=fs.readdirSync(d).find(f=>f.endsWith('.java')||f.endsWith('.c'));
    const code=fs.readFileSync(path.join(d,jf),'utf8').trimEnd();
    const r=runDir(d); totalRun++;
    if(r.status==='ok')ran++; else if(r.status==='compile-seed')seeds++; else if(r.status==='compiled-nolib')defs++;
    const rel=path.relative(ROOT,path.join(d,jf)).replace(/\\/g,'/');
    doc+=`\`${rel}\`\n\n\`\`\`java\n${code}\n\`\`\`\n\n**실행 결과**\n\`\`\`\n${fmtOut(r)}\n\`\`\`\n`;
  } else {
    doc+=`오리/무기 시뮬레이션 등 **문제→풀이 진행**. 각 단계는 \`src/${base}/NN/\` 에 독립 보관.\n\n`;
    doc+=`| 단계 | 실행 결과 |\n|:---:|---|\n`;
    for(const d of dirs){
      const r=runDir(d); totalRun++;
      if(r.status==='ok')ran++; else if(r.status==='compile-seed')seeds++; else if(r.status==='compiled-nolib')defs++;
      const label=path.basename(d);
      const cell=fmtOut(r).replace(/\n/g,'<br>').slice(0,300)||'—';
      doc+=`| ${label} | ${cell} |\n`;
    }
    doc+=`\n> 전체 코드는 각 폴더의 \`.java\` 참고. 단계가 올라갈수록 상속·오버라이드·구성으로 리팩터링됨.\n`;
  }
  doc+=`\n## 🧠 메모리 시각화\n`;
  doc+= hasVis? `- [visuals/${base}/links.md](../visuals/${base}/links.md) — pythontutor 메모리 스냅샷\n` : `- (해당 없음)\n`;
  doc+=`\n## 📝 한 줄 정리\n> ${title}\n`;

  fs.writeFileSync(path.join(DOCS,base+'.md'),doc);
}

function fmtOut(r){
  if(r.status==='ok') return r.out||'(출력 없음)';
  if(r.status==='runtime') return r.out||'(런타임 예외)';
  if(r.status==='compile-seed') return '⏳ 요구사항 시작점(미완성) — 학습자가 완성하는 단계';
  if(r.status==='compiled-nolib') return '✔ 컴파일 성공 (실행용 main 없음 = 클래스 정의)';
  if(r.status==='c') return r.out;
  return '(없음)';
}

console.log('docs 완성 54개 | 실행성공:',ran,'| 요구사항시작점:',seeds,'| 정의모음:',defs,'| 실행시도:',totalRun);
// tmp 정리
try{ fs.rmSync(TMP,{recursive:true,force:true}); }catch(e){}
