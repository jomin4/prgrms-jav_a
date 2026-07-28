# 49강 · 생성자를 직접 만들지 않는다면, 자동으로 인자없는 생성자가 생성된다, 생성자가 호출되면 기본적으로는 자동으로 부모 생성자 호출.

> P10. 생성자 | 출처: slog.gg/p/14146 49강

## 🎯 핵심 개념
# 49강
- 26 04 ??, p 14146, 49강, 생성자를 직접 만들지 않는다면, 자동으로 인자없는 생성자가 생성된다, 생성자가 호출되면 기본적으로는 자동으로 부모 생성자 호출.
## `new 노루;`에서의 생성자 연쇄호출
$$uml
@startuml
participant "노루 생성자" as 노루
participant "동물 생성자" as 동물
participant "Object 생성자" as Object
노루 -> 동물: super
동물 -> Object: super
Object -> Object: Object 생성자 작업 수행
Object --> 동물: 작업종료
동물 -> 동물: 동물 생성자 작업 수행
동물 --> 노루: 작업종료
노루 -> 노루: 노루 생성자 작업 수행
노루 -> 노루: 객체 초기화 완료, 리모콘 리턴
@enduml
$$
## 생성자 연쇄호출
- 비주얼라이저+%7B%0A++++++++%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C1+%3D+new+%EC%82%AC%EB%9E%8C%3B%0A++++++++%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C2+%3D+new+%EC%82%AC%EB%9E%8C(%22%ED%99%8D%EA%B8%B8%EC%88%9C%22,+55)%3B%0A%0A++++++++new+%EB%85%B8%EB%A3%A8%3B%0A++++%7D%0A%7D%0A%0Aclass+%EC%82%AC%EB%9E%8C+extends+%EB%8F%99%EB%AC%BC+%7B%0A++++String+%EC%9D%B4%EB%A6%84%3B%0A++++int+%EB%82%98%EC%9D%B4%3B%0A%0A++++%EC%82%AC%EB%9E%8C+%7B%0A++++++++super%3B+//+%EC%9D%B4+%EC%BD%94%EB%93%9C%EB%8A%94+%EC%83%9D%EB%9E%B5%ED%95%B4%EB%8F%84+%ED%95%A8%EC%88%98+%EC%A0%9C%EC%9D%BC+%EC%9C%97+%EB%B6%80%EB%B6%84%EC%97%90%EC%84%9C+%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C+%ED%98%B8%EC%B6%9C%EB%90%9C%EB%8B%A4.%0A%0A++++++++this.%EC%9D%B4%EB%A6%84+%3D+%22%ED%99%8D%EA%B8%B8%EB%8F%99%22%3B%0A++++++++this.%EB%82%98%EC%9D%B4+%3D+22%3B%0A++++%7D%0A%0A++++%EC%82%AC%EB%9E%8C(String+%EC%9D%B4%EB%A6%84,+int+%EB%82%98%EC%9D%B4)+%7B%0A++++++++//+super%3B+//+%EC%9D%B4+%EC%BD%94%EB%93%9C%EB%8A%94+%EC%83%9D%EB%9E%B5%ED%95%B4%EB%8F%84+%ED%95%A8%EC%88%98+%EC%A0%9C%EC%9D%BC+%EC%9C%97+%EB%B6%80%EB%B6%84%EC%97%90%EC%84%9C+%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C+%ED%98%B8%EC%B6%9C%EB%90%9C%EB%8B%A4.%0A%0A++++++++this.%EC%9D%B4%EB%A6%84+%3D+%EC%9D%B4%EB%A6%84%3B%0A++++++++this.%EB%82%98%EC%9D%B4+%3D+%EB%82%98%EC%9D%B4%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%8F%99%EB%AC%BC+%7B%0A++++%EB%8F%99%EB%AC%BC+%7B%0A++++++++System.out.println(%22%EB%8F%99%EB%AC%BC+%EC%83%9D%EC%84%B1%EC%9E%90+%ED%98%B8%EC%B6%9C%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%85%B8%EB%A3%A8+extends+%EB%8F%99%EB%AC%BC+%7B%0A++++String+%EC%9D%B4%EB%A6%84%3B%0A++++int+%EB%82%98%EC%9D%B4%3B%0A%0A++++//+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%EC%A7%81%EC%A0%91+%EC%A0%95%EC%9D%98%ED%95%98%EC%A7%80+%EC%95%8A%EB%8A%94%EB%8B%A4%EB%A9%B4+%EC%95%84%EB%9E%98%EC%99%80+%EA%B0%99%EC%9D%80+%EC%83%9D%EC%84%B1%EC%9E%90%EA%B0%80+%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C+%EC%B6%94%EA%B0%80%EB%90%9C%EB%8B%A4.%0A++++/*%0A++++%EB%85%B8%EB%A3%A8+%7B%0A++++++++super%3B%0A++++%7D%0A++++*/%0A%7D%0A&mode=display&curInstr=0)
## `super;` 만으로는 해결이 안되는 경우

## 💻 실습 코드
`src/ch49-default-ctor-super/01..02/` (코드블록 2개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch49-default-ctor-super/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
