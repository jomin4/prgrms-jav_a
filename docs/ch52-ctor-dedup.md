# 52강 · 생성자를 이용해서 무기 계열 클래스들에 있는 중복 제거

> P10. 생성자 | 출처: slog.gg/p/14146 52강

## 🎯 핵심 개념
# 52강
- 26 04 ??, p 14146, 52강, 생성자를 이용해서 무기 계열 클래스들에 있는 중복 제거
## 문제 1
### 시작코드
### 정답코드
- 비주얼라이저+%7B%0A++++++++%EC%A0%84%EC%82%AC+a%EC%A0%84%EC%82%AC+%3D+new+%EC%A0%84%EC%82%AC%3B%0A++++++++a%EC%A0%84%EC%82%AC.%EC%9D%B4%EB%A6%84+%3D+%22%EC%B9%B4%EB%8B%88%22%3B%0A++++++++a%EC%A0%84%EC%82%AC.%EB%82%98%EC%9D%B4+%3D+122%3B%0A++++++++a%EC%A0%84%EC%82%AC.a%EB%AC%B4%EA%B8%B0+%3D+new+%EC%B9%BC%3B%0A++++++++a%EC%A0%84%EC%82%AC.%EA%B3%B5%EA%B2%A9%3B%0A++++++++//+%EC%B6%9C%EB%A0%A5+%3A+22%EC%82%B4+%EC%A0%84%EC%82%AC+%EC%B9%B4%EB%8B%88(%EC%9D%B4)%EA%B0%80+%EC%B9%BC(%EC%9C%BC)%EB%A1%9C+%EA%B3%B5%EA%B2%A9%ED%95%A9%EB%8B%88%EB%8B%A4.%0A%0A++++++++a%EC%A0%84%EC%82%AC.%EC%9D%B4%EB%A6%84+%3D+%22%EC%B4%88%EC%BD%94%22%3B%0A++++++++a%EC%A0%84%EC%82%AC.%EB%82%98%EC%9D%B4+%3D+123%3B%0A++++++++a%EC%A0%84%EC%82%AC.a%EB%AC%B4%EA%B8%B0+%3D+new+%ED%99%9C%3B%0A++++++++a%EC%A0%84%EC%82%AC.%EA%B3%B5%EA%B2%A9%3B%0A++++++++//+%EC%B6%9C%EB%A0%A5+%3A+22%EC%82%B4+%EC%A0%84%EC%82%AC+%EC%B4%88%EC%BD%94(%EC%9D%B4)%EA%B0%80+%ED%99%9C(%EC%9C%BC)%EB%A1%9C+%EA%B3%B5%EA%B2%A9%ED%95%A9%EB%8B%88%EB%8B%A4.%0A++++%7D%0A%7D%0A%0Aclass+%EC%A0%84%EC%82%AC+%7B%0A++++String+%EC%9D%B4%EB%A6%84%3B%0A++++int+%EB%82%98%EC%9D%B4%3B%0A++++%EB%AC%B4%EA%B8%B0+a%EB%AC%B4%EA%B8%B0%3B%0A%0A++++void+%EA%B3%B5%EA%B2%A9+%7B%0A++++++++a%EB%AC%B4%EA%B8%B0.%EC%9E%91%EB%8F%99(%EC%9D%B4%EB%A6%84,+%EB%82%98%EC%9D%B4)%3B%0A++++%7D%0A%7D%0A%0Aabstract+class+%EB%AC%B4%EA%B8%B0+%7B%0A++++String+%EB%AC%B4%EA%B8%B0%EB%AA%85%3B%0A%0A++++void+%EC%9E%91%EB%8F%99(String+%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%9D%B4%EB%A6%84,+int+%EC%82%AC%EC%9A%A9%EC%9E%90_%EB%82%98%EC%9D%B4)+%7B%0A++++++++System.out.println(%EC%82%AC%EC%9A%A9%EC%9E%90_%EB%82%98%EC%9D%B4+%2B+%22%EC%82%B4+%EC%A0%84%EC%82%AC+%22+%2B+%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%9D%B4%EB%A6%84+%2B+%22(%EC%9D%B4)%EA%B0%80+%22+%2B+%EB%AC%B4%EA%B8%B0%EB%AA%85+%2B+%22(%EC%9C%BC)%EB%A1%9C+%EA%B3%B5%EA%B2%A9%ED%95%A9%EB%8B%88%EB%8B%A4.%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EC%B9%BC+extends+%EB%AC%B4%EA%B8%B0+%7B%0A++++%EC%B9%BC+%7B%0A++++++++%EB%AC%B4%EA%B8%B0%EB%AA%85+%3D+%22%EC%B9%BC%22%3B%0A++++%7D%0A%7D%0A%0Aclass+%ED%99%9C+extends+%EB%AC%B4%EA%B8%B0+%7B%0A++++%ED%99%9C+%7B%0A++++++++%EB%AC%B4%EA%B8%B0%EB%AA%85+%3D+%22%ED%99%9C%22%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)

## 💻 실습 코드
`src/ch52-ctor-dedup/01..02/` (코드블록 2개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch52-ctor-dedup/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
