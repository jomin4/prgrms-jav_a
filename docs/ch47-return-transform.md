# 47강 · 리턴은 결국 변신이다.

> P9. 추상화 & 다형성 | 출처: slog.gg/p/14146 47강

## 🎯 핵심 개념
# 47강
- 26 04 27, p 14146, 47강, 리턴은 결국 변신이다.
- 비주얼라이저+%7B%0A%09%09int+i+%3D+%EB%A1%9C%EB%B4%87.get%EC%A0%95%EC%88%98%3B%0A%09%09boolean+b+%3D+%EB%A1%9C%EB%B4%87.get%EB%85%BC%EB%A6%AC%3B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C+%3D+%EB%A1%9C%EB%B4%87.get%EC%82%AC%EB%9E%8C%3B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C2+%3D+%EB%A1%9C%EB%B4%87.get%EC%82%AC%EB%9E%8C2%3B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C3+%3D+%EB%A1%9C%EB%B4%87.get%EC%82%AC%EB%9E%8C3%3B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C4+%3D+%EB%A1%9C%EB%B4%87.get%EC%82%AC%EB%9E%8C4%3B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C5+%3D+%EB%A1%9C%EB%B4%87.get%EC%82%AC%EB%9E%8C5(123,+false)%3B%0A%09%7D%0A%7D%0A%0Aclass+%EB%A1%9C%EB%B4%87+%7B%0A%09static+int+get%EC%A0%95%EC%88%98+%7B%0A%09%09return+5%3B%0A%09%7D%0A%09%0A%09static+boolean+get%EB%85%BC%EB%A6%AC+%7B%0A%09%09return+true%3B%0A%09%7D%0A%09%0A%09static+%EC%82%AC%EB%9E%8C+get%EC%82%AC%EB%9E%8C+%7B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C+%3D+new+%EC%82%AC%EB%9E%8C%3B%0A%09%09return+a%EC%82%AC%EB%9E%8C%3B%0A%09%7D%0A%09%0A%09static+%EC%82%AC%EB%9E%8C+get%EC%82%AC%EB%9E%8C2+%7B%0A%09%09return+null%3B%0A%09%7D%0A%09%0A%09static+%EC%82%AC%EB%9E%8C+get%EC%82%AC%EB%9E%8C3+%7B%0A%09%09return+new+%EC%82%AC%EB%9E%8C%3B%0A%09%7D%0A%09%0A%09static+%EC%82%AC%EB%9E%8C+get%EC%82%AC%EB%9E%8C4+%7B%0A%09%09%EC%82%AC%EB%9E%8C+a%EC%82%AC%EB%9E%8C+%3D+null%3B%0A%09%09return+a%EC%82%AC%EB%9E%8C%3B%0A%09%7D%0A%09%0A%09static+%EC%82%AC%EB%9E%8C+get%EC%82%AC%EB%9E%8C5(int+a,+boolean+b)+%7B%0A%09%09return+null%3B%0A%09%7D%0A%7D%0A%0Aclass+%EC%82%AC%EB%9E%8C+%7B%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch47-return-transform/Main.java`

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch47-return-transform/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
