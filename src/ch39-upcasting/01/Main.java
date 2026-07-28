public class Main {
    public static void main(String[] args) {
        // a사람 이라는 변수는 오직 사람하고만 연결될 수 있다.
        사람 a사람;
        a사람 = new 사람();

        // 자바가 홍길동을 사람이라고 판단하면 아래 코드는 가능하다.
        a사람 = new 홍길동();
    }
}

class 사람 { }
class 홍길동 extends 사람 { } // 이렇게 하면 자바는 홍길동이 사람이라고 판단합니다.
