# 48강 · 메서드 오버로딩, 생성자는 객체 생성시 자동으로 딱 1번 실행되는 특별한 메서드 이다, this. 을 생략하면 안되는 경우

> P10. 생성자 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 48강

## 🎯 핵심 개념
- 메서드 오버로딩, 생성자는 객체 생성시 자동으로 딱 1번 실행되는 특별한 메서드 이다, this. 을 생략하면 안되는 경우

## 💻 실습 코드 & 실행 결과
`src/ch48-overloading-ctor/Main.java`

```java
public class Main {
    public static void main(String[] args) {
        사람 a사람1 = new 사람();
        사람 a사람2 = new 사람("홍길순", 55);
    }
}

class 사람 {
    String 이름;
    int 나이;

    사람() {
        this.이름 = "홍길동";
        this.나이 = 22;
    }

    사람(String 이름, int 나이) {
        this.이름 = 이름;
        this.나이 = 나이;
    }
}
```

**실행 결과**
```
(출력 없음)
```

## 🧠 메모리 시각화
- [visuals/ch48-overloading-ctor/links.md](../visuals/ch48-overloading-ctor/links.md) — pythontutor 메모리 스냅샷

## 📝 한 줄 정리
> 메서드 오버로딩, 생성자는 객체 생성시 자동으로 딱 1번 실행되는 특별한 메서드 이다, this. 을 생략하면 안되는 경우
