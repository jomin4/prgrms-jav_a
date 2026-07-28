# 32강 · 배열은 고정크기, 리스트는 가변 크기

> P6. 표준 클래스 · 출처: [slog.gg/p/14146](https://www.slog.gg/p/14146) 32강

## 🎯 핵심 개념
- 배열은 고정크기, 리스트는 가변 크기

## 💻 실습 코드 & 실행 결과
`src/ch32-array-vs-list/Main.java`

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int[] arr = new int[3];
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        System.out.println(arr[0] + arr[1] + arr[2]);
        System.out.println(arr.length); // 고정길이

        List<Integer> al = new ArrayList<>();
        al.add(10); // 0
        al.add(20); // 1
        al.add(30); // 2
        System.out.println(al.get(0) + al.get(1) + al.get(2));
        System.out.println(al.size()); // 길이 : 3
        al.add(40); // 3
        System.out.println(al.size()); // 길이 : 4
    }
}
```

**실행 결과**
```
60
3
60
3
4
```

## 🧠 메모리 시각화
- (해당 없음)

## 📝 한 줄 정리
> 배열은 고정크기, 리스트는 가변 크기
