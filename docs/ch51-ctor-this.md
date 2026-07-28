# 51강 · 생성자 오버로딩, this() 를 통한 생성 책임 위임을 하면 super() 가 호출되지 않는다.

> P10. 생성자 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 51강

## 🎯 핵심 개념
- 생성자 오버로딩, this() 를 통한 생성 책임 위임을 하면 super() 가 호출되지 않는다.
- `new 전사"카니";` 과정
- $$uml
- @startuml
- participant "new 전사카니" as 전사
- participant "전사String 이름 생성자" as 전사생성자
- participant "Object 생성자" as Object
- 전사 -> 전사생성자: 전사String 이름 생성자 호출
- 전사생성자 -> Object: super
- Object -> Object: Object 생성자 작업 수행
- Object --> 전사생성자: 작업종료
- 전사생성자 -> 전사생성자: 전사String 이름 생성자 작업 수행
- 전사생성자 -> 전사: 객체 초기화 완료, 리모콘 리턴
- @enduml
- $$
- `new 전사;` 과정
- participant "new 전사" as 전사
- participant "전사 생성자" as 전사생성자
- participant "전사String 이름 생성자" as 전사생성자2
- 전사 -> 전사생성자: 전사 생성자 호출
- 전사생성자 -> 전사생성자2: this"NoName"
- 전사생성자2 -> Object: super
- Object --> 전사생성자2: 작업종료
- 전사생성자2 -> 전사생성자2: 전사String 이름 생성자 작업 수행
- 전사생성자2 --> 전사생성자: 작업종료
- 전사생성자 -> 전사생성자: 전사 생성자 작업 수행
- this 호출 예제

## 💻 실습 코드 & 실행 결과
`src/ch51-ctor-this/Main.java`

```java
public class Main {
    public static void main(String[] args) {
        전사 a전사1 = new 전사("카니");
        System.out.println(a전사1.이름); // 출력 : 카니
        System.out.println(a전사1.나이); // 출력 : 20

        전사 a전사2 = new 전사();
        System.out.println(a전사2.이름); // 출력 : NoName
        System.out.println(a전사2.나이); // 출력 : 20
    }
}

class 전사 {
    String 이름;
    int 나이;

    // 생성자 메서드는 특수한 메서드 이다.
    // 명시적으로 개발자가 호출 할 수 없고, 객체가 생성될 때 자동으로 호출된다.
    // 생성자 메서드는 리턴타입이 없다.
    전사() {
        // this(); 와 같은 형태의 호출은 생성자에서만 가능하다.
        this("NoName"); // 아래 있는 생성자를 호출
    }

    전사(String 이름) {
        this.이름 = 이름;
        나이 = 20;
    }
}
```

**실행 결과**
```
카니
20
NoName
20
```

## 🧠 메모리 시각화
- [visuals/ch51-ctor-this/links.md](../visuals/ch51-ctor-this/links.md) — pythontutor 메모리 스냅샷

## 📝 한 줄 정리
> 생성자 오버로딩, this() 를 통한 생성 책임 위임을 하면 super() 가 호출되지 않는다.
