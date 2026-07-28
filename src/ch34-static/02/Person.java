class Person {
    static int maxSpeed;
}

Person p1 = new Person();
p1.maxSpeed = 100; // 이 코드는 실질적으로 `Person.maxSpeed = 100;` 으로 처리된다. 왜냐하면 p1 객체에는 maxSpeed 변수가 없고, maxSpeed 변수는 클래스에 1개만 존재하기 때문이다.
Person p2 = new Person();
p2.maxSpeed = 200;
Person p3 = new Person();
p3.maxSpeed = 300;

System.out.println(p1.maxSpeed); // 300 // 이 코드는 실질적으로 `System.out.println(Person.maxSpeed);` 와 같다.
System.out.println(p2.maxSpeed); // 300
System.out.println(p3.maxSpeed); // 300
