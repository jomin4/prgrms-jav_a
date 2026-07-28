# 48강 · 메서드 오버로딩, 생성자는 객체 생성시 자동으로 딱 1번 실행되는 특별한 메서드 이다, this. 을 생략하면 안되는 경우

> P10. 생성자 | 출처: slog.gg/p/14146 48강

## 🎯 핵심 개념
# 48강
- 26 04 ??, p 14146, 48강, 메서드 오버로딩, 생성자는 객체 생성시 자동으로 딱 1번 실행되는 특별한 메서드 이다, this. 을 생략하면 안되는 경우
- 비주얼라이저+%7B%0A++++++++%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C1+%3D+new+%EC%82%AC%EB%9E%8C%3B%0A++++++++%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C2+%3D+new+%EC%82%AC%EB%9E%8C(%22%ED%99%8D%EA%B8%B8%EC%88%9C%22,+55)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EC%82%AC%EB%9E%8C+%7B%0A++++String+%EC%9D%B4%EB%A6%84%3B%0A++++int+%EB%82%98%EC%9D%B4%3B%0A%0A++++%EC%82%AC%EB%9E%8C+%7B%0A++++++++this.%EC%9D%B4%EB%A6%84+%3D+%22%ED%99%8D%EA%B8%B8%EB%8F%99%22%3B%0A++++++++this.%EB%82%98%EC%9D%B4+%3D+22%3B%0A++++%7D%0A%0A++++%EC%82%AC%EB%9E%8C(String+%EC%9D%B4%EB%A6%84,+int+%EB%82%98%EC%9D%B4)+%7B%0A++++++++this.%EC%9D%B4%EB%A6%84+%3D+%EC%9D%B4%EB%A6%84%3B%0A++++++++this.%EB%82%98%EC%9D%B4+%3D+%EB%82%98%EC%9D%B4%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch48-overloading-ctor/Main.java`

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch48-overloading-ctor/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
