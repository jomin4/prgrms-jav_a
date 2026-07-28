# 29강 · 자바에는 이미 다수의 클래스가 있지만, 그것만으로는 우리가 만들려는 앱의 복잡성을 감당할 수 없다, 직접 클래스를 만들어야 한다.

> P5. 객체 & 힙 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 29강

## 🎯 핵심 개념
- 자바에는 이미 다수의 클래스가 있지만, 그것만으로는 우리가 만들려는 앱의 복잡성을 감당할 수 없다, 직접 클래스를 만들어야 한다.
- 직접 만든 클래스로 객체를 만들어서 사용한 버전
- 비주얼라이저

## 💻 실습 코드 & 실행 결과
`src/ch29-custom-class/GameCharacter.java`

```java
class GameCharacter {
	int no;
	int age;
   	int height;
}

GameCharacter person1 = new GameCharacter(); // 객체, 인스턴스가 생긴다.
person1.no = 1; // 사람 1의 번호, 인스턴스 변수
person1.age = 20; // 사람 1의 나이, 인스턴스 변수
person1.height = 170; // 사람 1의 키, 인스턴스 변수

GameCharacter person2 = new GameCharacter();
person2.no = 2; // 사람 2의 번호, 인스턴스 변수
person2.age = 30; // 사람 2의 나이, 인스턴스 변수
person2.height = 180; // 사람 2의 키, 인스턴스 변수
```

**실행 결과**
```
⏳ 요구사항 시작점(미완성) — 학습자가 완성하는 단계
```

## 🧠 메모리 시각화
- [visuals/ch29-custom-class/links.md](../visuals/ch29-custom-class/links.md) — pythontutor 메모리 스냅샷

## 📝 한 줄 정리
> 자바에는 이미 다수의 클래스가 있지만, 그것만으로는 우리가 만들려는 앱의 복잡성을 감당할 수 없다, 직접 클래스를 만들어야 한다.
