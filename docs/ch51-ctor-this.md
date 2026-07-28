# 51강 · 생성자 오버로딩, this() 를 통한 생성 책임 위임을 하면 super() 가 호출되지 않는다.

> P10. 생성자 | 출처: slog.gg/p/14146 51강

## 🎯 핵심 개념
# 51강
- 26 04 ??, p 14146, 51강, 생성자 오버로딩, this 를 통한 생성 책임 위임을 하면 super 가 호출되지 않는다.
## `new 전사("카니");` 과정
$$uml
@startuml
participant "new 전사(카니)" as 전사
participant "전사(String 이름) 생성자" as 전사생성자
participant "Object 생성자" as Object
전사 -> 전사생성자: 전사(String 이름) 생성자 호출
전사생성자 -> Object: super
Object -> Object: Object 생성자 작업 수행
Object --> 전사생성자: 작업종료
전사생성자 -> 전사생성자: 전사(String 이름) 생성자 작업 수행
전사생성자 -> 전사: 객체 초기화 완료, 리모콘 리턴
@enduml
$$
## `new 전사;` 과정
$$uml
@startuml
participant "new 전사" as 전사
participant "전사 생성자" as 전사생성자
participant "전사(String 이름) 생성자" as 전사생성자2
participant "Object 생성자" as Object
전사 -> 전사생성자: 전사 생성자 호출
전사생성자 -> 전사생성자2: this("NoName")
전사생성자2 -> Object: super
Object -> Object: Object 생성자 작업 수행
Object --> 전사생성자2: 작업종료
전사생성자2 -> 전사생성자2: 전사(String 이름) 생성자 작업 수행
전사생성자2 --> 전사생성자: 작업종료
전사생성자 -> 전사생성자: 전사 생성자 작업 수행
전사생성자 -> 전사: 객체 초기화 완료, 리모콘 리턴
@enduml
$$
## this 호출 예제
- 비주얼라이저+%7B%0A++++++++%EC%A0%84%EC%82%AC+a%EC%A0%84%EC%82%AC1+%3D+new+%EC%A0%84%EC%82%AC(%22%EC%B9%B4%EB%8B%88%22)%3B%0A++++++++System.out.println(a%EC%A0%84%EC%82%AC1.%EC%9D%B4%EB%A6%84)%3B+//+%EC%B6%9C%EB%A0%A5+%3A+%EC%B9%B4%EB%8B%88%0A++++++++System.out.println(a%EC%A0%84%EC%82%AC1.%EB%82%98%EC%9D%B4)%3B+//+%EC%B6%9C%EB%A0%A5+%3A+20%0A%0A++++++++%EC%A0%84%EC%82%AC+a%EC%A0%84%EC%82%AC2+%3D+new+%EC%A0%84%EC%82%AC%3B%0A++++++++System.out.println(a%EC%A0%84%EC%82%AC2.%EC%9D%B4%EB%A6%84)%3B+//+%EC%B6%9C%EB%A0%A5+%3A+NoName%0A++++++++System.out.println(a%EC%A0%84%EC%82%AC2.%EB%82%98%EC%9D%B4)%3B+//+%EC%B6%9C%EB%A0%A5+%3A+20%0A++++%7D%0A%7D%0A%0Aclass+%EC%A0%84%EC%82%AC+%7B%0A++++String+%EC%9D%B4%EB%A6%84%3B%0A++++int+%EB%82%98%EC%9D%B4%3B%0A%0A++++//+%EC%83%9D%EC%84%B1%EC%9E%90+%EB%A9%94%EC%84%9C%EB%93%9C%EB%8A%94+%ED%8A%B9%EC%88%98%ED%95%9C+%EB%A9%94%EC%84%9C%EB%93%9C+%EC%9D%B4%EB%8B%A4.%0A++++//+%EB%AA%85%EC%8B%9C%EC%A0%81%EC%9C%BC%EB%A1%9C+%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80+%ED%98%B8%EC%B6%9C+%ED%95%A0+%EC%88%98+%EC%97%86%EA%B3%A0,+%EA%B0%9D%EC%B2%B4%EA%B0%80+%EC%83%9D%EC%84%B1%EB%90%A0+%EB%95%8C+%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C+%ED%98%B8%EC%B6%9C%EB%90%9C%EB%8B%A4.%0A++++//+%EC%83%9D%EC%84%B1%EC%9E%90+%EB%A9%94%EC%84%9C%EB%93%9C%EB%8A%94+%EB%A6%AC%ED%84%B4%ED%83%80%EC%9E%85%EC%9D%B4+%EC%97%86%EB%8B%A4.%0A++++%EC%A0%84%EC%82%AC+%7B%0A++++++++//+this%3B+%EC%99%80+%EA%B0%99%EC%9D%80+%ED%98%95%ED%83%9C%EC%9D%98+%ED%98%B8%EC%B6%9C%EC%9D%80+%EC%83%9D%EC%84%B1%EC%9E%90%EC%97%90%EC%84%9C%EB%A7%8C+%EA%B0%80%EB%8A%A5%ED%95%98%EB%8B%A4.%0A++++++++this(%22NoName%22)%3B+//+%EC%95%84%EB%9E%98+%EC%9E%88%EB%8A%94+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%ED%98%B8%EC%B6%9C%0A++++%7D%0A%0A++++%EC%A0%84%EC%82%AC(String+%EC%9D%B4%EB%A6%84)+%7B%0A++++++++this.%EC%9D%B4%EB%A6%84+%3D+%EC%9D%B4%EB%A6%84%3B%0A++++++++%EB%82%98%EC%9D%B4+%3D+20%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch51-ctor-this/Main.java`

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch51-ctor-this/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
