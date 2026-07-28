# prgrms-jav_a

자바 학습 프로젝트 (출처: [slog.gg/p/14146](https://www.slog.gg/p/14146), 총 54강)

- **학습 방식:** 강사(코드 제공·설명) → 학습자(직접 타이핑·실행) 반복
- **철학:** 메모리를 먼저 이해하고 그 위에 객체지향(OOP)을 쌓는다
- **커리큘럼:** [ROADMAP.md](ROADMAP.md)
- **구조:** `src/`(실습 코드) · `docs/`(강의별 기록) · `visuals/`(시각화 링크)

## 강의 인덱스 (54강)

| 강 | 제목 | 코드 | 시각화 |
|----|------|:----:|:------:|
| 1 | [Hello World](docs/ch01-hello.md) | — | 🖼️ |
| 2 | [main 함수는 프로그램의 시작점 입니다.](docs/ch02-main-entry.md) | ✅ | — |
| 3 | [System.out 은 표준출력(모니터) 이고, . 의 의미는 of 입니다, 프로그램은 위에서 아래로 한줄씩 실행됨](docs/ch03-stdout.md) | ✅ | — |
| 4 | [들여쓰기는 소스코드를 보기좋게 만들어줍니다. IDE의 자동 소스코드 정리 단축키를 이용하세요.](docs/ch04-indent.md) | — | 🖼️ |
| 5 | [newline](docs/ch05-newline.md) | ✅ | — |
| 6 | [변수는 저장공간으로서 작동할 때도 있고, 값으로서 작동할 때도 있다.](docs/ch06-variable.md) | ✅ | — |
| 7 | [숫자와 문장의 더하기를 하면 숫자가 문장화, 괄호와 곱하기는 더하기 보다 우선순위 높음](docs/ch07-operator.md) | ✅ | — |
| 8 | [조건문, if](docs/ch08-if.md) | ✅ | — |
| 9 | [그리고(and, &&)와 또는(or, ||)](docs/ch09-and-or.md) | ✅ | — |
| 10 | [else를 통해서 여러개의 if문들을 하나의 그룹으로 묶을 수 있고, 그렇게 하면 성능이 개선된다. 마지막의 조건식은 제거해도 된다.](docs/ch10-else.md) | ✅ | — |
| 11 | [인텔리제이에서 브레이크 포인트 잡고 디버깅](docs/ch11-debugging.md) | — | 🖼️ |
| 12 | [증감연산](docs/ch12-increment.md) | ✅ | — |
| 13 | [자바 비주얼라이저 소개](docs/ch13-visualizer.md) | — | 🖼️ |
| 14 | [while](docs/ch14-while.md) | ✅ | 🖼️ |
| 15 | [기본 자료형 8종](docs/ch15-datatypes.md) | ✅ | — |
| 16 | [지역변수는 램의 스택지역의 하단부분부터 쌓인다, 효율적인 공간사용을 위해서](docs/ch16-stack-locals.md) | — | 🖼️ |
| 17 | [자바를 포함한 현대언어는 복합체(객체)를 힙에 생성하고 레퍼런스(리모콘)으로 다루는 방식으로 작동한다, 변수에는 단일값만 넣을 수 있어서](docs/ch17-heap-reference.md) | — | — |
| 18 | [인스턴스 변수가 아닌 지역 변수기준으로 기본형 변수와 레퍼런스 변수의 저장방식 비교](docs/ch18-store-compare.md) | — | 🖼️ |
| 19 | [기본형변수와 참조형변수의 차이, 대표적으로 String 이 참조형이다, 참조형 변수의 크기는 모두 동일하다.](docs/ch19-primitive-vs-reference.md) | ✅ | — |
| 20 | [함수와 매개변수](docs/ch20-method-param.md) | ✅ | — |
| 21 | [리턴과 리턴타입](docs/ch21-return-type.md) | ✅ | — |
| 22 | [컴파일 타임 : 실행 전, 실행이 될 수 있도록 준비하는 단계, 런타임 : 실행 중](docs/ch22-compile-runtime.md) | — | — |
| 23 | [A라는 함수가 B라는 함수를 호출하면 스택에서 A의 공간위에 B의 공간이 만들어짐, B가 끝나면 B공간이 사라짐](docs/ch23-stack-frame.md) | ✅ | 🖼️ |
| 24 | [new 는 객체를 생성합니다. 객체는 힙에 위치하게 됩니다.](docs/ch24-new-heap.md) | ✅ | 🖼️ |
| 25 | [객체가 메모리에 위치하는 형태, 지역변수로 객체를 가리키는 형태, int배열은 객체의 일종이다.](docs/ch25-object-memory.md) | ✅ | 🖼️ |
| 26 | [지역변수는 함수가 끝날때 삭제되고, 객체는 외톨이가 될때 삭제된다.](docs/ch26-gc.md) | ✅ | 🖼️ |
| 27 | [객체는 결국 폴더이다. 객체로 인해서 특정 변수들이 하나로 묶일 수 있다, 무언가를 묶을 수 있다는 것은 엄청난 축복이다.](docs/ch27-object-folder.md) | — | — |
| 28 | [인스턴스와 인스턴스 변수가 지역변수와 다른점](docs/ch28-instance-variable.md) | ✅ | 🖼️ |
| 29 | [자바에는 이미 다수의 클래스가 있지만, 그것만으로는 우리가 만들려는 앱의 복잡성을 감당할 수 없다, 직접 클래스를 만들어야 한다.](docs/ch29-custom-class.md) | ✅ | 🖼️ |
| 30 | [객체는 자기자신을 조종할 수 있는 리모콘을 this 라고 부른다. new 는 객체생성 후 this 의 복사본을 리턴한다.](docs/ch30-this.md) | ✅ | — |
| 31 | [기본형 변수타입에 대응되는 래퍼타입(Wrapper Class)이 있고 주로 제너릭에 많이 사용된다.](docs/ch31-wrapper.md) | — | — |
| 32 | [배열은 고정크기, 리스트는 가변 크기](docs/ch32-array-vs-list.md) | ✅ | — |
| 33 | [리스트와 맵 비교, 리스트는 데이터 넣을 때 편하고, 맵은 데이터 꺼낼 때 편하다.](docs/ch33-list-vs-map.md) | ✅ | — |
| 34 | [static](docs/ch34-static.md) | ✅ | 🖼️ |
| 35 | [레퍼런스 변수에 값(리모콘)이 할당되는 과정](docs/ch35-reference-assign.md) | ✅ | 🖼️ |
| 36 | [상속](docs/ch36-inheritance.md) | ✅ | 🖼️ |
| 37 | [오리 시뮬레이션, 문제 1 풀이](docs/ch37-duck-sim.md) | ✅ | 🖼️ |
| 38 | [상속만으로는 복잡한 문제를 풀 수 없습니다, `상속보다 구성을 사용하라`는 말이 있습니다.](docs/ch38-composition.md) | ✅ | — |
| 39 | [`사람 a = new 홍길동();` 이 가능하려면 홍길동이 사람을 상속받아야 합니다.](docs/ch39-upcasting.md) | ✅ | — |
| 40 | [변수타입에 안 맞는 값을 넣으려는 시도가 발견되면, 자동형변환을 시도, abstract 는 리모콘 버튼 전용](docs/ch40-abstract.md) | ✅ | 🖼️ |
| 41 | [구상 클래스에서는 부모에게 받은 추상 메서드의 오버라이드를 미룰 수 없다. 추상 클래스는 그게 가능하다.](docs/ch41-abstract-class.md) | ✅ | 🖼️ |
| 42 | [객체는 인스턴스 변수를 통해서 상태를 기억할 수 있다](docs/ch42-instance-state.md) | ✅ | — |
| 43 | [샤오미TV 리모콘 보다 표준TV 리모콘이 좋다](docs/ch43-polymorphism-tv.md) | ✅ | 🖼️ |
| 44 | [하위타입으로의 형변환은 수동형변환이 필수, 수동현변환은 깐깐한 컴파일러를 안심시켜주는 사인이다. 개발자가 책임을 지게 된다.](docs/ch44-downcasting.md) | ✅ | — |
| 45 | [자바는 위험하다고 판단되면 개발자의 사인을 필요로 한다. 단 막 사인하면 실행 중 오류인 익셉션이 발생한다.](docs/ch45-exception-cast.md) | ✅ | 🖼️ |
| 46 | [전사는 들고있는 무기에 따라 공격방식이 바뀐다](docs/ch46-warrior-weapon.md) | ✅ | 🖼️ |
| 47 | [리턴은 결국 변신이다.](docs/ch47-return-transform.md) | ✅ | 🖼️ |
| 48 | [메서드 오버로딩, 생성자는 객체 생성시 자동으로 딱 1번 실행되는 특별한 메서드 이다, this. 을 생략하면 안되는 경우](docs/ch48-overloading-ctor.md) | ✅ | 🖼️ |
| 49 | [생성자를 직접 만들지 않는다면, 자동으로 인자없는 생성자가 생성된다, 생성자가 호출되면 기본적으로는 자동으로 부모 생성자 호출.](docs/ch49-default-ctor-super.md) | ✅ | 🖼️ |
| 50 | [생성자 연쇄호출 문제](docs/ch50-ctor-chaining.md) | ✅ | 🖼️ |
| 51 | [생성자 오버로딩, this() 를 통한 생성 책임 위임을 하면 super() 가 호출되지 않는다.](docs/ch51-ctor-this.md) | ✅ | 🖼️ |
| 52 | [생성자를 이용해서 무기 계열 클래스들에 있는 중복 제거](docs/ch52-ctor-dedup.md) | ✅ | 🖼️ |
| 53 | [구성을 이용한 패턴(스트레티지) 이용하여 오리들 간의 중복 제거](docs/ch53-strategy-pattern.md) | ✅ | 🖼️ |
| 54 | [100% 추상 클래스는 인터페이스로 변경하는게 좋다.](docs/ch54-interface.md) | ✅ | 🖼️ |
