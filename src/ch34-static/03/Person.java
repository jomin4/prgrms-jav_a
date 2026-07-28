class Person {
    int 나이;
    static int 인류평균나이; // 각각의 객체가 가질 필요없는 변수는 static 을 붙여서 `Person.인류평균나이` 와 같은 방식으로 접근하는게 좋다.
  
    void 자기소개() { System.out.println("제 나이는 " + this.나이 + "살 입니다."); }
    static void 인류평균나이소개() { System.out.println("인류평균나이는 " + 인류평균나이 + "살 입니다."); } // 각각의 객체가 가질 필요없는 메서드는 static 을 붙여서 `Person.인류평균나이소개();` 와 같은 방식으로 사용하는게 좋다.
}
