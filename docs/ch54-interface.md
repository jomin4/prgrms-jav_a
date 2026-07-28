# 54강 · 100% 추상 클래스는 인터페이스로 변경하는게 좋다.

> P11. 패턴 & 인터페이스 | 출처: slog.gg/p/14146 54강

## 🎯 핵심 개념
# 54강
- 26 04 ??, p 14146, 54강, 100% 추상 클래스는 인터페이스로 변경하는게 좋다.
## 추상클래스 인터페이스 비교 표
| 구분      | 추상 클래스                | 인터페이스        |
|-----------|---------------------------|-------------------|
| 키워드    | abstract class            | interface         |
| 상속      | 단일 상속만 가능           | 다중 구현 가능     |
| 필드      | 인스턴스 변수 가질 수 있음  | 상수(Constant)만 가능 (Java8 이전)|
| 메서드    | 구현/추상 메서드 모두 가능 | 추상 메서드만 가능 (Java8 이전, 이후 default/static 가능)|
| 접근제어자| 가질 수 있음                | public만 가능 (Java8 이전)   |
| 생성자    | 가질 수 있음                | 없음              |
| 목적      | 상속을 통해 기능 확장        | 구현 강제(표준 제시, 규약)    |
## 시작코드
## 정답코드
- 비주얼라이저+%7B%0A++++++++%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+%3D+new+%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC%3B%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.%EB%82%A0%EB%8B%A4%3B%0A++++++++//+%EC%B6%9C%EB%A0%A5+%3A+%EC%A0%80%EB%8A%94+%EB%AA%BB+%EB%82%A0%EC%95%84%EC%9A%94+%E3%85%A0%E3%85%A0%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.%EC%88%98%EC%98%81%ED%95%98%EB%8B%A4%3B%0A++++++++//+%EC%B6%9C%EB%A0%A5+%3A+%EB%AC%BC%EA%B0%88%ED%80%B4%EB%A1%9C+%EC%88%98%EC%98%81%ED%95%A9%EB%8B%88%EB%8B%A4.%0A%0A++++++++//+%EC%9D%B4%EB%9F%B0%EC%8B%9D%EC%9C%BC%EB%A1%9C+%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C+%EA%B0%9D%EC%B2%B4%EC%9D%98+%ED%96%89%EB%8F%99%EC%96%91%EC%8B%9D%EC%9D%84+%EB%9F%B0%ED%83%80%EC%9E%84%EC%97%90+%EB%B3%80%EA%B2%BD%ED%95%A0+%EC%88%98+%EC%9E%88%EB%8B%A4.%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.set%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C(new+%EB%82%A0%EA%B0%9C%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C)%3B%0A++++++++a%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC.%EB%82%A0%EB%8B%A4%3B%0A++++%7D%0A%7D%0A%0Ainterface+%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++void+%EC%9E%91%EB%8F%99%3B%0A%7D%0A%0Ainterface+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A%7D%0A%0Aclass+%EB%AA%BB%EB%82%98%EB%8A%94%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+implements+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EC%A0%80%EB%8A%94+%EB%AA%BB+%EB%82%A0%EC%95%84%EC%9A%94+%E3%85%A0%E3%85%A0%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%82%A0%EA%B0%9C%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+implements+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%82%A0%EA%B0%9C%EB%A1%9C+%EB%82%A0%EC%95%84%EA%B0%91%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Ainterface+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+extends+%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A%7D%0A%0Aclass+%EB%91%A5%EB%91%A5%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+implements+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%AC%BC%EC%97%90+%EB%91%A5%EB%91%A5+%EB%9C%B9%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%AC%BC%EA%B0%88%ED%80%B4%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+implements+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%7B%0A++++%40Override%0A++++public+void+%EC%9E%91%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%AC%BC%EA%B0%88%ED%80%B4%EB%A1%9C+%EC%88%98%EC%98%81%ED%95%A9%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aabstract+class+%EC%98%A4%EB%A6%AC+%7B%0A++++private+%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++private+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A%0A++++public+%EC%98%A4%EB%A6%AC(%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C,+%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C)+%7B%0A++++++++this.a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%3D+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++++++this.a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C+%3D+a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++%7D%0A%0A++++public+void+set%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C(%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C)+%7B%0A++++++++this.a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C+%3D+a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C%3B%0A++++%7D%0A%0A++++public+void+%EB%82%A0%EB%8B%A4+%7B%0A++++++++a%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C.%EC%9E%91%EB%8F%99%3B%0A++++%7D%0A%0A++++public+void+%EC%88%98%EC%98%81%ED%95%98%EB%8B%A4+%7B%0A++++++++a%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C.%EC%9E%91%EB%8F%99%3B%0A++++%7D%0A%7D%0A%0Aclass+%EA%B3%A0%EB%AC%B4%EC%98%A4%EB%A6%AC+extends+%EC%98%A4%EB%A6%AC+%7B%0A++++public+%EA%B3%A0%EB%AC%B4%EC%98%A4%EB%A6%AC+%7B%0A++++++++super(new+%EB%AA%BB%EB%82%98%EB%8A%94%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C,+new+%EB%91%A5%EB%91%A5%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+extends+%EC%98%A4%EB%A6%AC+%7B%0A++++public+%EB%A1%9C%EB%B4%87%EC%98%A4%EB%A6%AC+%7B%0A++++++++super(new+%EB%AA%BB%EB%82%98%EB%8A%94%EB%B9%84%ED%96%89%EC%95%84%EC%9D%B4%ED%85%9C,+new+%EB%AC%BC%EA%B0%88%ED%80%B4%EC%88%98%EC%98%81%EC%95%84%EC%9D%B4%ED%85%9C)%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch54-interface/01..02/` (코드블록 2개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch54-interface/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
