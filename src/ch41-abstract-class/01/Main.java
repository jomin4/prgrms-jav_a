public class Main {
  public static void main(String[] args) {
    칼 a칼 = new 황금칼();
    a칼.공격();
  }
}

abstract class 무기 {
  abstract void 공격();
}

abstract class 칼 extends 무기 {
  void 공격() { System.out.println("칼 공격"); }  
}

class 황금칼 extends 칼 {
}
