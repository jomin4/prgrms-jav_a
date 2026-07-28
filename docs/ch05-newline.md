# 5강 · 

> P1. 기초 문법 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 5강

## 🎯 핵심 개념
- 은 줄바꿈 기호이다.

## 💻 실습 코드 & 실행 결과
`src/ch05-newline/Main.java`

```java
public class Main {
    public static void main(String[] args) {
    	System.out.print("안녕");
        System.out.print("안녕");
        System.out.print("안녕");
        
        // 출력
        // 안녕안녕안녕
        
        System.out.println(); // 이 코드는 System.out.print("\
"); 과 같다.
        
        // 출력
        // \

        // 추가설명 : 실제로 출력창에 \
 는 보이지 않고 줄바꿈으로 작동한다.
        
        System.out.println("안녕\
안녕안녕");
        
        // 출력
        // 안녕
        // 안녕안녕
    }
}
```

**실행 결과**
```
⏳ 요구사항 시작점(미완성) — 학습자가 완성하는 단계
```

## 🧠 메모리 시각화
- (해당 없음)

## 📝 한 줄 정리
> 
