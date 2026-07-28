package com.back;

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person(); // 객체가 생성되면서 만들어지는 리모콘(this)의 복사본을 p1 에 저장한다.
        p1.name = "홍길동";
        p1.introduce(); // 출력 : 제 이름은 홍길동 입니다.

        Person p2 = new Person(); // 객체가 생성되면서 만들어지는 리모콘(this)의 복사본을 p2 에 저장한다.
        p2.name = "홍길순";
        p2.introduce(); // 출력 : 제 이름은 홍길순 입니다.
    }
}

class Person {
    int age;
    int height;
    String name;

    void introduce() {
        String name = "폴"; // 여기에 하필이면 인스턴스(객체) 변수 name과 동일한 이름의 지역변수가 있기 때문에 밑에서 name 이 아닌 this.name 을 사용해야 한다.
        System.out.println("제 이름은 %s 입니다.".formatted(this.name)); // this를 통해서 객체에 접근하는 것은 객체 안에서만 가능하다. 외부에서는 this를 통해서 접근할 수 없다.
    }
}
