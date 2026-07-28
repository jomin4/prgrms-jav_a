import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Main {
    public static void main(String[] args) {
        System.out.println("== 리스트 ==");
        List<Integer> ages = new ArrayList<>();

        // 리스트는 데이터 넣을 때 편하다.
        ages.add(10); // 0:철수
        ages.add(20); // 1:영수
        ages.add(30); // 2:미애

        // 리스트는 데이터 꺼낼 때 불편하다.
        System.out.println(ages.get(0)); // 철수 나이
        System.out.println(ages.get(1)); // 영수 나이
        System.out.println(ages.get(2)); // 미애 나이

        System.out.println("== 리스트 순회 ==");
        for (int i = 0; i < ages.size(); i++) {
            System.out.println(i + ":" + ages.get(i));
        }

        System.out.println("== 맵 ==");
        // 데이터를 넣은 순서를 기억하고 싶다면 LinkedHashMap을 사용하면 된다.
        Map<String, Integer> agesMap = new HashMap<>();
        // 맵은 데이터 넣을 때 불편하다.
        agesMap.put("철수", 10); // 철수:10
        agesMap.put("영수", 20); // 영수:20
        agesMap.put("미애", 30); // 미애:30

        // 맵은 데이터 꺼낼 때 편하다.
        System.out.println(agesMap.get("철수"));
        System.out.println(agesMap.get("영수"));
        System.out.println(agesMap.get("미애"));

        System.out.println("== 맵 순회 ==");
        for (String key : agesMap.keySet()) {
            System.out.println(key + ":" + agesMap.get(key));
        }
    }
}
