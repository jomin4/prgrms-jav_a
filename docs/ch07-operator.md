# 7강 · 숫자와 문장의 더하기를 하면 숫자가 문장화, 괄호와 곱하기는 더하기 보다 우선순위 높음

> P1. 기초 문법 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 7강

## 🎯 핵심 개념
- 숫자와 문장의 더하기를 하면 숫자가 문장화, 괄호와 곱하기는 더하기 보다 우선순위 높음

## 💻 실습 코드 & 실행 결과
`src/ch07-operator/Main.java`

```java
public class Main {
    public static void main(String[] args) {
    	int x = 10;
        
        System.out.println("x"); // 출력 : x
        System.out.println(x); // 출력 : 10
        System.out.println("x" + x); // 출력 : x10
        System.out.println("x : " + x); // 출력 : x : 10
        System.out.println("x : " + x * 10); // 출력 : x : 100
        System.out.println("x : " + x + 10); // 출력 : x : 1010
        System.out.println("x : " + (x + 10)); // 출력 : x : 20
    }
}
```

**실행 결과**
```
x
10
x10
x : 10
x : 100
x : 1010
x : 20
```

## 🧠 메모리 시각화
- (해당 없음)

## 📝 한 줄 정리
> 숫자와 문장의 더하기를 하면 숫자가 문장화, 괄호와 곱하기는 더하기 보다 우선순위 높음
