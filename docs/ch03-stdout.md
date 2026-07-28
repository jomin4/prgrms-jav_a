# 3강 · System.out 은 표준출력(모니터) 이고, . 의 의미는 of 입니다, 프로그램은 위에서 아래로 한줄씩 실행됨

> P1. 기초 문법 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 3강

## 🎯 핵심 개념
- System.out 은 표준출력(모니터) 이고, . 의 의미는 of 입니다, 프로그램은 위에서 아래로 한줄씩 실행됨

## 💻 실습 코드 & 실행 결과
`src/ch03-stdout/Main.java`

```java
public class Main {
    public static void main(String[] args) {
    	// System.out 여기서 . 은 of 를 의미 합니다.
        // System.out.println(100); // 여기서 println(100); 와 같은 형태는 타 동사를 의미합니다.
        // System.out.println(100); // 여기서 System.out 은 주어를 의미 합니다.
        // System.out.println(100); // 여기서 100은 목적어 또는 보어 입니다.
        // System.out.println(100); // 개발자가 "System.out" 라는 녀석에게 100 을 println 하라는 의미
    
        // 프로그램의 시작점
        System.out.println(1); // 실행순서 1 : 숫자는 " 로 감싸지 않아도 됩니다.
        System.out.println("2");
        System.out.println("3");
        System.out.println("사");
        // 프로그램의 끝점
    }
}
```

**실행 결과**
```
1
2
3
사
```

## 🧠 메모리 시각화
- (해당 없음)

## 📝 한 줄 정리
> System.out 은 표준출력(모니터) 이고, . 의 의미는 of 입니다, 프로그램은 위에서 아래로 한줄씩 실행됨
