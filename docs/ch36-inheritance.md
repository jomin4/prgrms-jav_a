# 36강 · 상속

> P8. 상속 & 오리 시뮬레이션 | 출처: slog.gg/p/14146 36강

## 🎯 핵심 개념
# 36강
- 26 04 22, p 14146, 36강, 상속, 1부, 중복은 소스코드 유지보수를 점점 어렵게 하는데 상속으로 중복을 제거가능
- 26 04 22, p 14146, 36강, 상속, 2부, 문제풀이, 사람 클래스를 추가하되, 중복이 생기지 않도록 상속을 제거해주세요.
## 상속을 안쓴경우, 중복코드가 생긴다.
- 비주얼라이저+%7B%0A++++++++System.out.println(%22%3D%3D+%ED%9D%B0+%EA%B3%A0%EC%96%91%EC%9D%B4+%3D%3D%22)%3B%0A++++++++%ED%9D%B0%EA%B3%A0%EC%96%91%EC%9D%B4+a+%3D+new+%ED%9D%B0%EA%B3%A0%EC%96%91%EC%9D%B4%3B%0A++++++++a.%EC%88%A8%EC%89%AC%EB%8B%A4%3B%0A++++++++a.%EC%95%BC%EC%98%B9%3B%0A++++++++a.%EB%AA%A9%EC%88%A8%EC%9D%84_%EB%8A%98%EB%A6%B0%EB%8B%A4%3B%0A%0A++++++++System.out.println(%22%3D%3D+%EA%B2%80%EC%9D%80+%EA%B3%A0%EC%96%91%EC%9D%B4+%3D%3D%22)%3B%0A++++++++%EA%B2%80%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+b+%3D+new+%EA%B2%80%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4%3B%0A++++++++b.%EC%88%A8%EC%89%AC%EB%8B%A4%3B%0A++++++++b.%EC%95%BC%EC%98%B9%3B%0A++++++++b.%EB%AF%B8%EB%9E%98%EB%A5%BC_%EC%98%88%EC%A7%80%ED%95%98%EB%8B%A4%3B%0A%0A++++++++System.out.println(%22%3D%3D+%EB%B6%89%EC%9D%80+%EA%B3%A0%EC%96%91%EC%9D%B4+%3D%3D%22)%3B%0A++++++++%EB%B6%89%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+c+%3D+new+%EB%B6%89%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4%3B%0A++++++++c.%EC%88%A8%EC%89%AC%EB%8B%A4%3B%0A++++++++c.%EC%95%BC%EC%98%B9%3B%0A++++++++c.%EB%B9%A0%EB%A5%B4%EA%B2%8C_%EC%9D%B4%EB%8F%99%3B%0A++++%7D%0A%7D%0A%0Aclass+%EA%B2%80%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EC%88%A8%EC%89%AC%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EC%88%A8%EC%89%AC%EB%8B%A4!!%22)%3B%0A++++%7D%0A%0A++++void+%EC%95%BC%EC%98%B9+%7B%0A++++++++System.out.println(%22%EC%95%BC%EC%98%B9%22)%3B%0A++++%7D%0A%0A++++void+%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4%22)%3B%0A++++%7D%0A%0A++++void+%EB%AF%B8%EB%9E%98%EB%A5%BC_%EC%98%88%EC%A7%80%ED%95%98%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%AF%B8%EB%9E%98%EB%A5%BC_%EC%98%88%EC%A7%80%ED%95%98%EB%8B%A4%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%ED%9D%B0%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EC%88%A8%EC%89%AC%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EC%88%A8%EC%89%AC%EB%8B%A4!!%22)%3B%0A++++%7D%0A%0A++++void+%EC%95%BC%EC%98%B9+%7B%0A++++++++System.out.println(%22%EC%95%BC%EC%98%B9%22)%3B%0A++++%7D%0A%0A++++void+%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4%22)%3B%0A++++%7D%0A%0A++++void+%EB%AA%A9%EC%88%A8%EC%9D%84_%EB%8A%98%EB%A6%B0%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%AA%A9%EC%88%A8%EC%9D%84_%EB%8A%98%EB%A6%B0%EB%8B%A4%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%B6%89%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EC%88%A8%EC%89%AC%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EC%88%A8%EC%89%AC%EB%8B%A4!!%22)%3B%0A++++%7D%0A%0A++++void+%EC%95%BC%EC%98%B9+%7B%0A++++++++System.out.println(%22%EC%95%BC%EC%98%B9%22)%3B%0A++++%7D%0A%0A++++void+%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4%22)%3B%0A++++%7D%0A%0A++++void+%EB%B9%A0%EB%A5%B4%EA%B2%8C_%EC%9D%B4%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%B9%A0%EB%A5%B4%EA%B2%8C_%EC%9D%B4%EB%8F%99%22)%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)
## 상속을 사용한 경우, 중복코드가 적거나 없다.
- 비주얼라이저+%7B%0A++++++++System.out.println(%22%3D%3D+%ED%9D%B0+%EA%B3%A0%EC%96%91%EC%9D%B4+%3D%3D%22)%3B%0A++++++++%ED%9D%B0%EA%B3%A0%EC%96%91%EC%9D%B4+a+%3D+new+%ED%9D%B0%EA%B3%A0%EC%96%91%EC%9D%B4%3B%0A++++++++a.%EC%88%A8%EC%89%AC%EB%8B%A4%3B%0A++++++++a.%EC%95%BC%EC%98%B9%3B%0A++++++++a.%EB%AA%A9%EC%88%A8%EC%9D%84_%EB%8A%98%EB%A6%B0%EB%8B%A4%3B%0A%0A++++++++System.out.println(%22%3D%3D+%EA%B2%80%EC%9D%80+%EA%B3%A0%EC%96%91%EC%9D%B4+%3D%3D%22)%3B%0A++++++++%EA%B2%80%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+b+%3D+new+%EA%B2%80%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4%3B%0A++++++++b.%EC%88%A8%EC%89%AC%EB%8B%A4%3B%0A++++++++b.%EC%95%BC%EC%98%B9%3B%0A++++++++b.%EB%AF%B8%EB%9E%98%EB%A5%BC_%EC%98%88%EC%A7%80%ED%95%98%EB%8B%A4%3B%0A%0A++++++++System.out.println(%22%3D%3D+%EB%B6%89%EC%9D%80+%EA%B3%A0%EC%96%91%EC%9D%B4+%3D%3D%22)%3B%0A++++++++%EB%B6%89%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+c+%3D+new+%EB%B6%89%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4%3B%0A++++++++c.%EC%88%A8%EC%89%AC%EB%8B%A4%3B%0A++++++++c.%EC%95%BC%EC%98%B9%3B%0A++++++++c.%EB%B9%A0%EB%A5%B4%EA%B2%8C_%EC%9D%B4%EB%8F%99%3B%0A++++%7D%0A%7D%0A%0Aclass+%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EC%88%A8%EC%89%AC%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EC%88%A8%EC%89%AC%EB%8B%A4!!!%22)%3B%0A++++%7D%0A%0A++++void+%EC%95%BC%EC%98%B9+%7B%0A++++++++System.out.println(%22%EC%95%BC%EC%98%B9%22)%3B%0A++++%7D%0A%0A++++void+%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%9B%B0%EC%96%B4%EB%84%98%EB%8B%A4%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EA%B2%80%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+extends+%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EB%AF%B8%EB%9E%98%EB%A5%BC_%EC%98%88%EC%A7%80%ED%95%98%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%AF%B8%EB%9E%98%EB%A5%BC_%EC%98%88%EC%A7%80%ED%95%98%EB%8B%A4%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%ED%9D%B0%EA%B3%A0%EC%96%91%EC%9D%B4+extends+%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EB%AA%A9%EC%88%A8%EC%9D%84_%EB%8A%98%EB%A6%B0%EB%8B%A4+%7B%0A++++++++System.out.println(%22%EB%AA%A9%EC%88%A8%EC%9D%84_%EB%8A%98%EB%A6%B0%EB%8B%A4%22)%3B%0A++++%7D%0A%7D%0A%0Aclass+%EB%B6%89%EC%9D%80%EA%B3%A0%EC%96%91%EC%9D%B4+extends+%EA%B3%A0%EC%96%91%EC%9D%B4+%7B%0A++++void+%EB%B9%A0%EB%A5%B4%EA%B2%8C_%EC%9D%B4%EB%8F%99+%7B%0A++++++++System.out.println(%22%EB%B9%A0%EB%A5%B4%EA%B2%8C_%EC%9D%B4%EB%8F%99%22)%3B%0A++++%7D%0A%7D&mode=display&curInstr=0)
## 문제 : 아래와 같이 출력되도록 해주세요.
### 조건 : `숨쉬다` 기능을 중복하지 말아주세요.
### 시작코드
### 정답코드

## 💻 실습 코드
`src/ch36-inheritance/01..04/` (코드블록 4개)

## 🧠 메모리에서 무슨 일이?
시각화 자료: [visuals](../visuals/ch36-inheritance/links.md)

## ✅ 실행 결과
```
(정리 예정)
```

## 📝 회고 / 헷갈렸던 점
-
