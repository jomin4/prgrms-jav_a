public class Main {
    public static void main(String[] args) {
    	int x; // 변수
        x = 5; // 변수
        x = x + 10; // 좌측 x는 변수, 우측 x는 변수가 아닌 값(5)으로 취급
        
        System.out.println(x + 20); // 여기서의 x는 x가 아닌 15로 취급
    }
}
