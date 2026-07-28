/* 요구사항
- D1 요구 : 오리를 생성하고 날게하시오.
- D1 완료 : 클래스와 메서드를 만들어서 처리
*/

public class Main {
    public static void main(String[] args) {
        오리 a오리 = new 오리();
        a오리.날다();
        // 출력 : 오리가 날개로 날아갑니다.
    }
}

class 오리 {
    void 날다() {
        System.out.println("오리가 날개로 날아갑니다.");
    }
}
