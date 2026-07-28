class 동물 {
  동물(String name) {}
  동물(String name, int age) {}
}

class 사람 extends 동물 {
  동물(String name) {}
  동물(String name, int age) {}
  사람() {
    super(); // 오류 발생
    // super("홍길동"); // 이렇게 하거나
    // super("홍길동", 22); // 이렇게 해야한다.
   }
}

new 사람();
