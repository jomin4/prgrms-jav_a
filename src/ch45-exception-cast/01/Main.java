public class Main {
    public static void main(String[] args) {
        칼 a칼 = new 칼();

        // 칼 리모콘 -> 무기 리모콘
        // 추상적으로 변화
        // 자동형변환
        무기 a무기 = a칼;

        // 무기 리모콘 -> 칼 리모콘
        // 구체적으로 변화
        // 수동형변환 필수
        칼 a칼2 = (칼)a무기;
    }
}

// 이 클래스로 리모콘 만들면 버튼 개수 : 1개(사용)
abstract class 무기 {
    abstract void 사용();
}

// 이 클래스로 리모콘 만들면 버튼 개수 : 2개(사용, 휘두르다)
class 칼 extends 무기 {
    void 사용() {
    }
    
    void 휘두르다() {
    }
}

// 이 클래스로 리모콘 만들면 버튼 개수 : 2개(사용, 조준하다)
class 활 extends 무기 {
    void 사용() {
    }
    
    void 조준하다() {
    }
}
