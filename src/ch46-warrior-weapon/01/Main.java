public class Main {
	public static void main(String[] args) {
		전사 a전사 = new 전사();
		a전사.이름 = "카니";
		a전사.나이 = 22;
		a전사.a무기 = new 칼();
		a전사.공격();
		// 출력 : 전사가 칼로 공격합니다.
		
		a전사.이름 = "초코";		
		a전사.a무기 = new 활();
		a전사.공격();
		// 출력 : 전사가 활로 공격합니다.
	}
}
