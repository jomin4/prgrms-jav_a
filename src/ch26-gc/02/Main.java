public class Main {
    public static void main(String[] args) {
        int[] arr1 = new int[3];
        int[] arr2 = new int[3];

        arr1[0] = 10;
        arr1[1] = 20;
        arr1[2] = 30;

        sub1();

        System.out.println(arr1.length);

        arr1 = null;

        System.out.println("끝!");
    }

    static void sub1() {
        int[] arr3 = new int[3];
    }
}
