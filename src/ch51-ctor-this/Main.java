public class Main {
    public static void main(String[] args) {
        전사 a전사1 = new 전사("카니");
        System.out.println(a전사1.이름); // 출력 : 카니
        System.out.println(a전사1.나이); // 출력 : 20

        전사 a전사2 = new 전사();
        System.out.println(a전사2.이름); // 출력 : NoName
        System.out.println(a전사2.나이); // 출력 : 20
    }
}

class 전사 {
    String 이름;
    int 나이;

    // 생성자 메서드는 특수한 메서드 이다.
    // 명시적으로 개발자가 호출 할 수 없고, 객체가 생성될 때 자동으로 호출된다.
    // 생성자 메서드는 리턴타입이 없다.
    전사() {
        // this(); 와 같은 형태의 호출은 생성자에서만 가능하다.
        this("NoName"); // 아래 있는 생성자를 호출
    }

    전사(String 이름) {
        this.이름 = 이름;
        나이 = 20;
    }
}
