public class Main {
    public static void main(String[] args) {
        사람 a사람1 = new 사람();
        사람 a사람2 = new 사람("홍길순", 55);

        new 노루();
    }
}

class 동물 {
    동물() {
        System.out.println("동물 생성자 호출");
    }
}

class 사람 extends 동물 {
    String 이름;
    int 나이;

    사람() {
        super(); // 이 코드는 생략해도 함수 제일 윗 부분에서 자동으로 호출된다.

        this.이름 = "홍길동";
        this.나이 = 22;
    }

    사람(String 이름, int 나이) {
        // super(); // 이 코드는 생략해도 함수 제일 윗 부분에서 자동으로 호출된다.

        this.이름 = 이름;
        this.나이 = 나이;
    }
}

class 노루 extends 동물 {
    String 이름;
    int 나이;

    // 생성자를 직접 정의하지 않는다면 아래와 같은 생성자가 자동으로 추가된다.
    /*
    노루() {
        super();
    }
    */
}
