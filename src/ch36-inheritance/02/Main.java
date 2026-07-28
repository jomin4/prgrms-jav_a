public class Main {
    public static void main(String[] args) {
        System.out.println("== 흰 고양이 ==");
        흰고양이 a = new 흰고양이();
        a.숨쉬다();
        a.야옹();
        a.목숨을_늘린다();

        System.out.println("== 검은 고양이 ==");
        검은고양이 b = new 검은고양이();
        b.숨쉬다();
        b.야옹();
        b.미래를_예지하다();

        System.out.println("== 붉은 고양이 ==");
        붉은고양이 c = new 붉은고양이();
        c.숨쉬다();
        c.야옹();
        c.빠르게_이동();
    }
}

class 고양이 {
    void 숨쉬다() {
        System.out.println("숨쉬다!!!");
    }

    void 야옹() {
        System.out.println("야옹");
    }

    void 뛰어넘다() {
        System.out.println("뛰어넘다");
    }
}

class 검은고양이 extends 고양이 {
    void 미래를_예지하다() {
        System.out.println("미래를_예지하다");
    }
}

class 흰고양이 extends 고양이 {
    void 목숨을_늘린다() {
        System.out.println("목숨을_늘린다");
    }
}

class 붉은고양이 extends 고양이 {
    void 빠르게_이동() {
        System.out.println("빠르게_이동");
    }
}
