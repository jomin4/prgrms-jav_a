# 50강 · 생성자 연쇄호출 문제

> P10. 생성자 | 출처: slog.gg/p/14146 50강

## 🎯 핵심 개념
# 50강
- 26 04 ??, p 14146, 50강, 생성자 연쇄호출 문제
## 문제 1
### 작동 예시
$$uml
@startuml
participant "청둥오리 생성자" as 청둥오리
participant "오리 생성자" as 오리
participant "동물 생성자" as 동물
participant "생물 생성자" as 생물
participant "Object 생성자" as Object
청둥오리 -> 오리: super
오리 -> 동물: super
동물 -> 생물: super
생물 -> Object: super
Object -> Object: Object 생성자 작업 수행
Object --> 생물: 작업종료
생물 -> 생물: 생물 생성자 작업 수행
생물 --> 동물: 작업종료
동물 -> 동물: 동물 생성자 작업 수행
동물 --> 오리: 작업종료
오리 -> 오리: 오리 생성자 작업 수행
오리 --> 청둥오리: 작업종료
청둥오리 -> 청둥오리: 청둥오리 생성자 작업 수행
청둥오리 -> 청둥오리: 객체 초기화 완료, 리모콘 리턴
@enduml
$$
### 시작코드
### 정답코드
- 비주얼라이저+%7B%0A++++++++System.out.println(%22%3D%3D+%EC%82%AC%EB%9E%8C%EA%B0%9D%EC%B2%B4+%EC%83%9D%EC%84%B1%EC%8B%9C%EC%9E%91+%3D%3D%22)%3B%0A++++++++new+%EC%82%AC%EB%9E%8C%3B%0A++++++++System.out.println(%22%3D%3D+%EC%82%AC%EB%9E%8C%EA%B0%9D%EC%B2%B4+%EC%83%9D%EC%84%B1%EB%81%9D+%3D%3D%22)%3B%0A%0A++++++++System.out.println(%22%3D%3D+%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC%EA%B0%9D%EC%B2%B4+%EC%83%9D%EC%84%B1%EC%8B%9C%EC%9E%91+%3D%3D%22)%3B%0A++++++++new+%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC%3B%0A++++++++System.out.println(%22%3D%3D+%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC%EA%B0%9D%EC%B2%B4+%EC%83%9D%EC%84%B1%EB%81%9D+%3D%3D%22)%3B%0A%09%09/*+%EC%B6%9C%EB%A0%A5%0A%09%09%3D%3D+%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC%EA%B0%9D%EC%B2%B4+%EC%83%9D%EC%84%B1%EC%8B%9C%EC%9E%91+%3D%3D%0A%09%09%EC%83%9D%EB%AC%BC%EC%9D%B4+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%09%09%EB%8F%99%EB%AC%BC%EC%9D%B4+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%09%09%EC%98%A4%EB%A6%AC%EA%B0%80+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%09%09%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%09%09%3D%3D+%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC%EA%B0%9D%EC%B2%B4+%EC%83%9D%EC%84%B1%EB%81%9D+%3D%3D%0A%09%09*/%0A++++%7D%0A%7D%0A%0Aclass+%EC%83%9D%EB%AC%BC+%7B%0A++++%EC%83%9D%EB%AC%BC+%7B%0A++++++++//+%EC%9D%B4+%ED%95%A8%EC%88%98%EB%8A%94+%EB%B6%80%EB%AA%A8+%ED%81%B4%EB%9E%98%EC%8A%A4+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C+%ED%98%B8%EC%B6%9C%ED%95%A9%EB%8B%88%EB%8B%A4.%0A++++++++System.out.println(%22%EC%83%9D%EB%AC%BC%EC%9D%B4+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%8F%99%EB%AC%BC+extends+%EC%83%9D%EB%AC%BC+%7B%0A++++%EB%8F%99%EB%AC%BC+%7B%0A++++++++//+super%3B+//+%EB%B6%80%EB%AA%A8+%ED%81%B4%EB%9E%98%EC%8A%A4%EC%9D%98+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%ED%98%B8%EC%B6%9C%ED%95%A9%EB%8B%88%EB%8B%A4.+%EC%83%9D%EB%9E%B5%EA%B0%80%EB%8A%A5%ED%95%A9%EB%8B%88%EB%8B%A4.%0A++++++++//+%EC%9D%B4+%ED%95%A8%EC%88%98%EB%8A%94+%EB%B6%80%EB%AA%A8+%ED%81%B4%EB%9E%98%EC%8A%A4+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C+%ED%98%B8%EC%B6%9C%ED%95%A9%EB%8B%88%EB%8B%A4.%0A%0A++++++++System.out.println(%22%EB%8F%99%EB%AC%BC%EC%9D%B4+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%0A%7D%0A%0Aclass+%EC%82%AC%EB%9E%8C+extends+%EB%8F%99%EB%AC%BC+%7B%0A%0A++++%EC%82%AC%EB%9E%8C+%7B%0A++++++++//+%EB%B6%80%EB%AA%A8+%ED%81%B4%EB%9E%98%EC%8A%A4%EC%9D%98+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%ED%98%B8%EC%B6%9C%ED%95%A9%EB%8B%88%EB%8B%A4.+%EC%83%9D%EB%9E%B5%EA%B0%80%EB%8A%A5%0A++++++++//+%EC%9D%B4+%ED%95%A8%EC%88%98%EB%8A%94+%EB%B6%80%EB%AA%A8+%ED%81%B4%EB%9E%98%EC%8A%A4+%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC+%ED%98%B8%EC%B6%9C%ED%95%A9%EB%8B%88%EB%8B%A4.%0A++++++++super%3B%0A%0A++++++++System.out.println(%22%EC%82%AC%EB%9E%8C%EC%9D%B4+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EC%98%A4%EB%A6%AC+extends+%EB%8F%99%EB%AC%BC+%7B%0A++++%EC%98%A4%EB%A6%AC+%7B%0A++++++++System.out.println(%22%EC%98%A4%EB%A6%AC%EA%B0%80+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC+extends+%EC%98%A4%EB%A6%AC+%7B%0A++++%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC+%7B%0A++++++++System.out.println(%22%EC%B2%AD%EB%91%A5%EC%98%A4%EB%A6%AC+%EC%83%9D%EC%84%B1%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch50-ctor-chaining/01..02/` (코드블록 2개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch50-ctor-chaining/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
