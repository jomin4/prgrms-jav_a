# 53강 · 구성을 이용한 패턴(스트레티지) 이용하여 오리들 간의 중복 제거

> P11. 패턴 & 인터페이스 | 출처: slog.gg/p/14146 53강

## 🎯 핵심 개념
# 53강
- 26 04 ??, p 14146, 53강, 구성을 이용한 패턴(스트레티지) 이용하여 오리들 간의 중복 제거
## 디자인 원칙이란?
- 소프트웨어를 설계할 때 더 좋은 구조와 유지보수성을 갖게 해주는 일반적인 지침입니다.
- 대표적으로 결합도(Coupling)와 응집도(Cohesion)에 대한 원칙이 자주 등장합니다.
- **결합도**는 클래스나 모듈 등이 서로 얼마나 강하게 연결되어 있는지를 나타냅니다.
    - 결합도가 높으면, 한 부분의 변경이 다른 부분에 연쇄적으로 영향을 주게 되어 유지보수가 어렵습니다.
    - 결합도가 낮으면, 각 부분을 독립적으로 변경하거나 재사용하기 쉬우며 유연한 설계가 가능합니다.
- 그래서 설계 시에는 결합도를 낮추는 것이 중요하며, 이런 목적을 위해 인터페이스, 추상화, 구성(Composition), 의존성 주입 등의 기법을 활용합니다.
## 결합도 낮추는 방법
- 클래스 간, 모듈 간에 쓸데없는 통신 채널을 최대한 줄인다.
- 가능하면 서로 몰라도 되게 만든다.
- 이것이 결합도를 낮추는 것이다.
## 응집도 높히는 방법
- 관련된 기능과 책임을 한 클래스 또는 모듈 내에 모아둡니다.
- 한 클래스가 한 가지 역할만 하도록 설계합니다(단일 책임 원칙).
- 서로 밀접하게 연관된 데이터와 메서드를 함께 배치합니다.
- 불필요한 외부 의존성을 줄이고 내부적으로 자급자족할 수 있도록 합니다.
## 디자인 패턴이란?
- 소프트웨어 개발에서 반복적으로 등장하는 문제들을 효과적으로 해결하기 위해 사용되는 코드 구조나 설계 방법입니다.
- 유지보수성과 확장성을 높여주고, 코드의 재사용성을 증가시킵니다.
- 대표적인 디자인 패턴에는 싱글턴, 팩토리, 스트래티지, 옵저버, 데코레이터 패턴 등이 있습니다.
## 디자인 원칙과 디자인 패턴의 관계
- 디자인 원칙은 소프트웨어를 설계할 때 따르는 추상적이고 포괄적인 지침입니다. 예를 들어, "결합도를 낮춰라", "변경에 유연하게 설계하라"와 같은 규칙이 여기에 속합니다. 이러한 원칙들은 다양한 상황에 적용될 수 있도록 방향성을 제시합니다.
- 반면, 디자인 패턴은 이러한 원칙을 바탕으로 실제 문제를 해결하는 구체적인 코드 구조나 설계 방법을 제시합니다. 즉, 반복적으로 마주치는 문제에 대해 검증된 해결책을 코드로 구현할 수 있도록 해 주는 일종의 템플릿입니다.
- 요약하면, 디자인 원칙은 '왜' 그렇게 해야 하는지에 대한 철학과 방향이고, 디자인 패턴은 '어떻게' 설계할 것인지에 대한 실질적인 구현 방법입니다.
- 예시: "구성을 활용해 결합도를 낮추라"(원칙) → "스트래티지 패턴을 활용해 객체의 행동을 바꾼다"(패턴)
## 시작코드
## 정답코드
- 비주얼라이저+%7B%0A++++++++%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+%3D+new+%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC%3B%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.%EB%82%A0%EB%8B%A4%3B%0A++++++++//+%EC%B6%9C%EB%A0%A5+%3A+%EC%A0%80%EB%8A%94+%EB%AA%BB+%EB%82%A0%EC%95%84%EC%9A%94+%E3%85%A0%E3%85%A0%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.%EC%88%98%EC%98%81%ED%95%98%EB%8B%A4%3B%0A++++++++//+%EC%B6%9C%EB%A0%A5+%3A+%EB%AC%BC%EA%B0%88%ED%80%B4%EB%A1%9C+%EC%88%98%EC%98%81%ED%95%A9%EB%8B%88%EB%8B%A4.%0A%0A++++++++//+%EC%9D%B4%EB%9F%B0%EC%8B%9D%EC%9C%BC%EB%A1%9C+%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C+%EA%B0%9D%EC%B2%B4%EC%9D%98+%ED%96%89%EB%8F%99%EC%96%91%EC%8B%9D%EC%9D%84+%EB%9F%B0%ED%83%80%EC%9E%84%EC%97%90+%EB%B3%80%EA%B2%BD%ED%95%A0+%EC%88%98+%EC%9E%88%EB%8B%A4.%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.set%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C(new+%EB%82%A0%EA%B0%9C%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C)%3B%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.%EB%82%A0%EB%8B%A4%3B%0A++++%7D%0A%7D%0A%0Aabstract+class+%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++public+abstract+void+%EC%9E%91%EB%8F%99%3B%0A%7D%0A%0Aabstract+class+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A%7D%0A%0Aclass+%EB%AA%BB%EB%82%98%EB%8A%94%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EC%A0%80%EB%8A%94+%EB%AA%BB+%EB%82%A0%EC%95%84%EC%9A%94+%E3%85%A0%E3%85%A0%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%82%A0%EA%B0%9C%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%82%A0%EA%B0%9C%EB%A1%9C+%EB%82%A0%EC%95%84%EA%B0%91%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aabstract+class+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A%7D%0A%0Aclass+%EB%91%A5%EB%91%A5%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%AC%BC%EC%97%90+%EB%91%A5%EB%91%A5+%EB%9C%B9%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%AC%BC%EA%B0%88%ED%80%B4%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%AC%BC%EA%B0%88%ED%80%B4%EB%A1%9C+%EC%88%98%EC%98%81%ED%95%A9%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aabstract+class+%EC%98%A4%EB%A6%AC+%7B%0A++++//+protected+%EC%A0%91%EA%B7%BC%EC%A0%9C%EC%96%B4%EC%9E%90%EB%8A%94+private+%EC%B2%98%EB%9F%BC+%EC%99%B8%EB%B6%80%EC%97%90%EC%84%9C+%EC%A0%91%EA%B7%BC%EC%9D%B4+%EB%B6%88%EA%B0%80%EB%8A%A5,+%EB%8B%A8+private+%EC%99%80+%EB%8B%AC%EB%A6%AC+%EC%9E%90%EC%8B%9D+%ED%81%B4%EB%9E%98%EC%8A%A4%EC%97%90%EC%84%9C%EB%8A%94+%EC%A0%91%EA%B7%BC+%EA%B0%80%EB%8A%A5%0A++++protected+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++protected+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A%0A++++public+void+set%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C(%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C)+%7B%0A++++++++this.a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%3D+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++%7D%0A%0A++++public+%EC%98%A4%EB%A6%AC+%7B%0A++++++++a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%3D+new+%EB%82%A0%EA%B0%9C%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++++++a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%3D+new+%EB%AC%BC%EA%B0%88%ED%80%B4%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++%7D%0A%0A++++public+void+%EB%82%A0%EB%8B%A4+%7B%0A++++++++a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C.%EC%9E%91%EB%8F%99%3B%0A++++%7D%0A%0A++++public+void+%EC%88%98%EC%98%81%ED%95%98%EB%8B%A4+%7B%0A++++++++a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C.%EC%9E%91%EB%8F%99%3B%0A++++%7D%0A%7D%0A%0Aclass+%EA%B3%A0%EB%AC%B4%EC%98%A4%EB%A6%AC+extends+%EC%98%A4%EB%A6%AC+%7B%0A++++public+%EA%B3%A0%EB%AC%B4%EC%98%A4%EB%A6%AC+%7B%0A++++++++a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%3D+new+%EB%AA%BB%EB%82%98%EB%8A%94%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++++++a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%3D+new+%EB%91%A5%EB%91%A5%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+extends+%EC%98%A4%EB%A6%AC+%7B%0A++++public+%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+%7B%0A++++++++a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%3D+new+%EB%AA%BB%EB%82%98%EB%8A%94%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++++++a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%3D+new+%EB%AC%BC%EA%B0%88%ED%80%B4%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch53-strategy-pattern/01..02/` (코드블록 2개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch53-strategy-pattern/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
