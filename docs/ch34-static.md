# 34강 · static

> P7. static | 출처: slog.gg/p/14146 34강

## 🎯 핵심 개념
# 34강
- 26 04 22, p 14146, 34강, static, 1부, static 은 본사 직원, 인스턴스 변수는 대리점 직원
- 26 04 22, p 14146, 34강, static, 2부, static 메서드에서는 오직 static 변수만 접근이 가능하다. instance 메서드에서는 둘다 접근 가능하다.
## 개념 정리
- 본사 == 클래스
- 대리점 == 객체 == 인스턴스
- static 변수 == 클래스 변수
- static 메서드 == 클래스 메서드
- 인스턴스 변수 == 객체 변수 == 멤버 변수
- 인스턴스 메서드 == 객체 메서드 == 멤버 메서드
- 클래스 내에서 static 붙어 있다면 본사 직원
- 클래스 내에서 static 없다면 대리점 직원
## int age 를 인스턴스 변수로 만들면 각각의 객체가 하나씩 변수를 가진다.
- 비주얼라이저+%7B%0A++++++++Person+p1+%3D+new+Person%3B%0A++++++++p1.maxSpeed+%3D+100%3B%0A++++++++Person+p2+%3D+new+Person%3B%0A++++++++p2.maxSpeed+%3D+200%3B%0A++++++++Person+p3+%3D+new+Person%3B%0A++++++++p3.maxSpeed+%3D+300%3B%0A%0A++++++++System.out.println(p1.maxSpeed)%3B+//+100%0A++++++++System.out.println(p2.maxSpeed)%3B+//+200%0A++++++++System.out.println(p3.maxSpeed)%3B+//+300%0A++++%7D%0A%7D%0A%0Aclass+Person+%7B%0A++++int+maxSpeed%3B%0A%7D&mode=display&curInstr=0)
## int age 를 스태틱 변수로 만들면 각각의 객체에 age 변수가 존재하지 않는다. 오직 클래스가 변수를 가진다.
- 비주얼라이저+%7B%0A++++++++Person+p1+%3D+new+Person%3B%0A++++++++p1.maxSpeed+%3D+100%3B+//+%EC%9D%B4+%EC%BD%94%EB%93%9C%EB%8A%94+%EC%8B%A4%EC%A7%88%EC%A0%81%EC%9C%BC%EB%A1%9C+%60Person.maxSpeed+%3D+100%3B%60+%EC%9C%BC%EB%A1%9C+%EC%B2%98%EB%A6%AC%EB%90%9C%EB%8B%A4.+%EC%99%9C%EB%83%90%ED%95%98%EB%A9%B4+p1+%EA%B0%9D%EC%B2%B4%EC%97%90%EB%8A%94+maxSpeed+%EB%B3%80%EC%88%98%EA%B0%80+%EC%97%86%EA%B3%A0,+maxSpeed+%EB%B3%80%EC%88%98%EB%8A%94+%ED%81%B4%EB%9E%98%EC%8A%A4%EC%97%90+1%EA%B0%9C%EB%A7%8C+%EC%A1%B4%EC%9E%AC%ED%95%98%EA%B8%B0+%EB%95%8C%EB%AC%B8%EC%9D%B4%EB%8B%A4.%0A++++++++Person+p2+%3D+new+Person%3B%0A++++++++p2.maxSpeed+%3D+200%3B%0A++++++++Person+p3+%3D+new+Person%3B%0A++++++++p3.maxSpeed+%3D+300%3B%0A%0A++++++++System.out.println(p1.maxSpeed)%3B+//+300+//+%EC%9D%B4+%EC%BD%94%EB%93%9C%EB%8A%94+%EC%8B%A4%EC%A7%88%EC%A0%81%EC%9C%BC%EB%A1%9C+%60System.out.println(Person.maxSpeed)%3B%60+%EC%99%80+%EA%B0%99%EB%8B%A4.%0A++++++++System.out.println(p2.maxSpeed)%3B+//+300%0A++++++++System.out.println(p3.maxSpeed)%3B+//+300%0A++++%7D%0A%7D%0A%0Aclass+Person+%7B%0A++++static+int+maxSpeed%3B%0A++++int+age%3B%0A%7D%0A&mode=display&curInstr=0)
## 변수와 메서드에 static 을 붙이는게 편할 때가 있다.
- 본사에서는 대리점 직원을 부를 수 없다.
  - 대리점의 변수와 대리점의 메서드에 접근할 수 없다.
  - 객체의 변수와 객체의 메서드에 접근할 수 있다.
- 본사에서는 오직 본사 직원만 부를 수 있다.
  - static 메서드에서는 오직 static 변수만 사용할 수 있다.
  - static 메서드에서는 오직 static 메서드만 호출할 수 있다.
## 정리
- 본사직원끼리는 소통 // O
- 같은 대리점에 속한 직원 끼리는 소통 // O
- 본사에서는 대리점 직원을 부름 // X
- 대리점에서는 본사직원을 부름 // O
- 비주얼라이저+%7B%0A++++++++Person+p1+%3D+new+Person%3B%0A++++++++p1.%EB%82%98%EC%9D%B4+%3D+40%3B%0A++++++++p1.%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%3B%0A%0A++++++++Person.%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4+%3D+37%3B+//+p1.%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4+%3D+37%3B+//+%EC%9D%B4%EB%A0%87%EA%B2%8C+%ED%95%B4%EB%8F%84+%EB%98%91%EA%B0%99%EC%9D%B4+%EC%B2%98%EB%A6%AC%EB%90%9C%EB%8B%A4.%0A++++++++Person.%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%EC%86%8C%EA%B0%9C%3B+//+p1.%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%EC%86%8C%EA%B0%9C%3B+//+%EC%9D%B4%EB%A0%87%EA%B2%8C+%ED%95%B4%EB%8F%84+%EB%98%91%EA%B0%99%EC%9D%B4+%EC%B2%98%EB%A6%AC%EB%90%9C%EB%8B%A4.%0A++++%7D%0A%7D%0A%0Aclass+Person+%7B%0A++++int+%EB%82%98%EC%9D%B4%3B%0A++++static+int+%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%3B+//+%EA%B0%81%EA%B0%81%EC%9D%98+%EA%B0%9D%EC%B2%B4%EA%B0%80+%EA%B0%80%EC%A7%88+%ED%95%84%EC%9A%94%EC%97%86%EB%8A%94+%EB%B3%80%EC%88%98%EB%8A%94+static+%EC%9D%84+%EB%B6%99%EC%97%AC%EC%84%9C+%60Person.%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%60+%EC%99%80+%EA%B0%99%EC%9D%80+%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C+%EC%A0%91%EA%B7%BC%ED%95%98%EB%8A%94%EA%B2%8C+%EC%A2%8B%EB%8B%A4.%0A%0A++++void+%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C+%7B%0A++++++++System.out.println(%22%EC%A0%9C+%EB%82%98%EC%9D%B4%EB%8A%94+%22+%2B+this.%EB%82%98%EC%9D%B4+%2B+%22%EC%82%B4+%EC%9E%85%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%0A++++static+void+%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%EC%86%8C%EA%B0%9C+%7B%0A++++++++System.out.println(%22%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%EB%8A%94+%22+%2B+%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4+%2B+%22%EC%82%B4+%EC%9E%85%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D+//+%EA%B0%81%EA%B0%81%EC%9D%98+%EA%B0%9D%EC%B2%B4%EA%B0%80+%EA%B0%80%EC%A7%88+%ED%95%84%EC%9A%94%EC%97%86%EB%8A%94+%EB%A9%94%EC%84%9C%EB%93%9C%EB%8A%94+static+%EC%9D%84+%EB%B6%99%EC%97%AC%EC%84%9C+%60Person.%EC%9D%B8%EB%A5%98%ED%8F%89%EA%B7%A0%EB%82%98%EC%9D%B4%EC%86%8C%EA%B0%9C%3B%60+%EC%99%80+%EA%B0%99%EC%9D%80+%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C+%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B2%8C+%EC%A2%8B%EB%8B%A4.%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch34-static/01..03/` (코드블록 3개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch34-static/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
