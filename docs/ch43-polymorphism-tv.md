# 43강 · 샤오미TV 리모콘 보다 표준TV 리모콘이 좋다

> P9. 추상화 & 다형성 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 43강

## 🎯 핵심 개념
- 샤오미TV 리모콘 보다 표준TV 리모콘이 좋다
- 문제 1
- 시작코드
- 정답코드
- 문제 2

## 💻 실습 코드 & 실행 결과
오리/무기 시뮬레이션 등 **문제→풀이 진행**. 각 단계는 `src/ch43-polymorphism-tv/NN/` 에 독립 보관.

| 단계 | 실행 결과 |
|:---:|---|
| 01 | ⏳ 요구사항 시작점(미완성) — 학습자가 완성하는 단계 |
| 02 | 샤오미Tv 켜집니다.<br>샤오미Tv 꺼집니다.<br>샤오미Tv vr켜기!<br>삼성Tv 켜집니다.<br>삼성Tv 꺼집니다.<br>삼성Tv ar켜기!<br>LGTv 켜집니다.<br>LGTv 꺼집니다.<br>LGTv 게임모드전환!<br>샤오미Tv 켜집니다.<br>삼성Tv 켜집니다.<br>LGTv 켜집니다. |
| 03 | ⏳ 요구사항 시작점(미완성) — 학습자가 완성하는 단계 |
| 04 | == 표준Tv 리모콘 들여오기 전 ==<br>샤오미Tv 켜집니다.<br>샤오미Tv 꺼집니다.<br>샤오미Tv vr켜기!<br>삼성Tv 켜집니다.<br>삼성Tv 꺼집니다.<br>삼성Tv ar켜기!<br>LGTv 켜집니다.<br>LGTv 꺼집니다.<br>LGTv 게임모드전환!<br>== 표준Tv 리모콘 들여온 후 ==<br>샤오미Tv 켜집니다.<br>샤오미Tv 꺼집니다.<br>삼성Tv 켜집니다.<br>삼성Tv 꺼집니다.<br>LGTv 켜집니다.<br>LGTv 꺼집니다.<br>LGTv 게임모드전환!<br>샤오미Tv 켜집니다.<br>삼성T |

> 전체 코드는 각 폴더의 `.java` 참고. 단계가 올라갈수록 상속·오버라이드·구성으로 리팩터링됨.

## 🧠 메모리 시각화
- [visuals/ch43-polymorphism-tv/links.md](../visuals/ch43-polymorphism-tv/links.md) — pythontutor 메모리 스냅샷

## 📝 한 줄 정리
> 샤오미TV 리모콘 보다 표준TV 리모콘이 좋다
