# 47강 · 리턴은 결국 변신이다.

> P9. 추상화 & 다형성 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 47강

## 🎯 핵심 개념
- 리턴은 결국 변신이다.

## 💻 실습 코드 & 실행 결과
`src/ch47-return-transform/Main.java`

```java
public class Main {
	public static void main(String[] args) {
		int i = 로봇.get정수();
		boolean b = 로봇.get논리();
		사람 a사람 = 로봇.get사람();
		사람 a사람2 = 로봇.get사람2();
		사람 a사람3 = 로봇.get사람3();
		사람 a사람4 = 로봇.get사람4();
		사람 a사람5 = 로봇.get사람5(123, false);
	}
}

class 로봇 {
	static int get정수() {
		return 5;
	}
	
	static boolean get논리() {
		return true;
	}
	
	static 사람 get사람() {
		사람 a사람 = new 사람();
		return a사람;
	}
	
	static 사람 get사람2() {
		return null;
	}
	
	static 사람 get사람3() {
		return new 사람();
	}
	
	static 사람 get사람4() {
		사람 a사람 = null;
		return a사람;
	}
	
	static 사람 get사람5(int a, boolean b) {
		return null;
	}
}

class 사람 {
}
```

**실행 결과**
```
(출력 없음)
```

## 🧠 메모리 시각화
- [visuals/ch47-return-transform/links.md](../visuals/ch47-return-transform/links.md) — pythontutor 메모리 스냅샷

## 📝 한 줄 정리
> 리턴은 결국 변신이다.
