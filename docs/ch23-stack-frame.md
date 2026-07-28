# 23강 · A라는 함수가 B라는 함수를 호출하면 스택에서 A의 공간위에 B의 공간이 만들어짐, B가 끝나면 B공간이 사라짐

> P4. 함수 & 스택 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 23강

## 🎯 핵심 개념
- A라는 함수가 B라는 함수를 호출하면 스택에서 A의 공간위에 B의 공간이 만들어짐, B가 끝나면 B공간이 사라짐
- 비주얼라이저

## 💻 실습 코드 & 실행 결과
`src/ch23-stack-frame/Main.java`

```java
public class Main {
    // main == 8byte(number1 + number2)
    public static void main(String[] args) {
        int number1 = 10; // 4byte
        int number2 = 20; // 4byte

        System.out.println("call sub1(10);");

        sub1(10);

        // 이 시점(sub1(10) 함수 실행이 끝난 후)에는 스택상에 sub1 함수를 위한 공간이 회수되어 사라진다.

        System.out.println("call sub1(20);");

        sub1(20);
    }

    // sub1 == 4byte(age)
    static void sub1(int age) { // age == 4byte
        // 이 부분이 실행될 당시에는 총 12byte의 메모리 공간이 사용된다.
        // main 공간(8byte) + age 공간(4byte) = 총 12byte
        System.out.println("age : " + age);
        // 함수가 끝나면 함수를 위한 공간이 회수되어 사라진다.
    }
}
```

**실행 결과**
```
call sub1(10);
age : 10
call sub1(20);
age : 20
```

## 🧠 메모리 시각화
- [visuals/ch23-stack-frame/links.md](../visuals/ch23-stack-frame/links.md) — pythontutor 메모리 스냅샷

## 📝 한 줄 정리
> A라는 함수가 B라는 함수를 호출하면 스택에서 A의 공간위에 B의 공간이 만들어짐, B가 끝나면 B공간이 사라짐
