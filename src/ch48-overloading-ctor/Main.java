public class Main {
    public static void main(String[] args) {
        사람 a사람1 = new 사람();
        사람 a사람2 = new 사람("홍길순", 55);
    }
}

class 사람 {
    String 이름;
    int 나이;

    사람() {
        this.이름 = "홍길동";
        this.나이 = 22;
    }

    사람(String 이름, int 나이) {
        this.이름 = 이름;
        this.나이 = 나이;
    }
}
