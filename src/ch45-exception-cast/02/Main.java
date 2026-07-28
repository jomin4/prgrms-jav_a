package com.back;

public class Main {
    public static void main(String[] args) {
        칼 a칼 = new 칼();

        무기 a무기 = a칼;
        a무기 = new 활();

        칼 a칼2 = (칼) a무기; // 컴파일러는 이 부분을 무시하고 통과시킨다.(개발자의 수동형변환 때문에) 대신 런타임에 오류가 발생한다.
    }
}

abstract class 무기 {
    abstract void 사용();
}

class 칼 extends 무기 {
    void 사용() {
    }

    void 휘두르다() {
    }
}

class 활 extends 무기 {
    void 사용() {
    }

    void 조준하다() {
    }
}
