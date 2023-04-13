# Udemy_Bootcamp2023

## JS
NaN은 number type이다. NaN을 연산하면 NaN이 나온다.
변수 명명은 Camel case를 쓰자. Boolean type 은 앞에 is를 붙여주자.
변수에 숫자, _ , $를 쓸 수 있다.(숫자가 첫문자여서는 안된다)
문자열은 인덱싱되어 있다.(배열처럼)
문자열엔 length가 포함되어 있다.

### For...Of
for(variable of iterable) {
  statement
}
For of는 배열에서 가장 많이 쓰이고 문자열에서도 사용 가능하다.
Iterable 한 것들에서 사용가능하다.
index가 필요할땐 for...of 말고 for 루프를 사용하자.

### For...In
for(key in Object) {
  statement
}
For in은 객체에서 키값을 반복 시켜준다.
For of는 자주 쓰이고 For in은 잘 안 쓴다!!!
객체에서 키를 나열해주는 것은 더 있다. 

Object.keys(객체) <--- 객체에서 키를 나열해줌
Object.values(객체) <--- 객체에서 값을 나열해줌
Object.entries(객체) <--- 키 + 값을 나열해줌
위 메서드들은 배열로 리턴해주는데 배열로 받아서 for of를 쓸 수 있다.
객체에는 length가 없는데 배열로 만들면 사용할 수 있다.

### splice();
splice메소드는 기존 배열을 업데이트한다.

### Functions
Reusable procedures
function scope, block scope, Lexical scope

### Methods
객체에 속성으로 함수를 추가할 수 있다. 그것을 methods라고 부른다.
메서드는 함수에 포함되어 있고 메서드 이름 앞에 점(.)을 찍어 사용한다.
모든 메서드는 함수이지만 모든 함수가 메서드는 아니다.
ex) 객체에 메소드 정의하는 법
const myMath = {
  square : function( param ) {
    return statement,
  }
} ⬅️ 기존방법
const myMath = {
  suqare(param) {
    return statement,
  }
} ⬅️ 새로운 방법  " : function "을 생략했다

### this
메소드에서 this는 같은 객체에 있는 다른 속성에 접근할 때 쓴다.
⭐this는 함수를 호출한 방법에 따라 달라진다.

### try/catch
이 둘은 별개이지만 항삼 함께 일하며 오류와 예외처리를 한다.
자바스크립트에서 오류가 발생하면 그 줄에서 멈추는데 try / catch 문은 try 안에서 오류가 발생하면 catch를 실행하고 다음 프로세스를 계속 이어나간다.

### 콜백 and 배열
ForEach, ⭐Map, ⭐Filter, Some & Every, ⭐Arrow Functions, Reduce
(함수를 넣어야 하는 배열 메서드)
forEach는 for of 루프가 등장하기 전에는 자주 쓰였다. for of를 쓰자.
⭐Map - 기존 배열의 원소들을 순환하며 실행한 결과로 ⭐새로운 배열을 만든다.
화살표함수에서 매개변수가 1개면 ()를 생략할 수 있다. 반환값을 ()로 감싸면 {return}을 생략할 수 있다. 암시적 반환!! 한줄로 되어있다면 ()도 뺄 수 있다.
⭐filter - 기존 배열의 원소가 조건에 대해 true인 것들만 모아서 새로운 배열을 만든다.
Some & Every - boolean메서드라 true or false를 반환한다.
every는 전체가 조건을 만족해야 true , some은 한개라도 조건을 만족하면 true

### setTimeout and setInterval
setTimeout은 2개의 인자를 받는다. 첫번째는 콜백, 두번째는 지연시간(ms)
지연시간 이후에 콜백함수를 실행시킨다.

setInterval은 2개의 인자를 받는다. 첫번째는 콜백, 두번째는 반복시간(ms)
반복시간마다 콜백함수를 실행시킨다.

clearInterval은 1개의 인자를 받는다. setInterval을 정의한 변수를 인자로 받아 그 interval을 종료시킨다.

### 악명높은 Reduce메서드
배열을 점자 줄여가면서 결국 하나의 값만 남긴다.
2개의 인자를 받는데 2번째 인자는 옵셔널. default로는 배열의 첫번째 요소가 들어간다. 2번째 인자가 처음값이 된다.

### default 매개변수
함수를 정의할때 파라미터 옆에 = 을 사용해서 default값을 정할 수 있다. 매개변수가 없으면 default값이 파라미터값이 된다.

### REST매개변수
spread연산자와 비슷하지만 다르다!
매개변수로 전달된 arguments는 배열이 아니다. 배열의 메소드를 사용할 수 없음
매개변수로 전달된 파라미터들은 ...매개변수를 통해 배열로 만들어짐. -> 배열의 메서드를 사용할 수 있다.

### Destructuring
배열의 구조 분해는 순서에 의존됨
객체의 구조 분해는 키값에 의존됨.
ex) const { born : bornYear } = user -> user의 born키 값을 bornYear에 저장함. 
:를 사용해 변수명을 바꿀 수 있다
ex) const { born = '1998} = user
= 를 사용해 default값을 줄 수 있다. 이미 객체에 그 키값이 있다면 default값을 무시함
매개변수에서도 구조분해가 가능하고 default값도 줄 수 있다.

### DOM (Document Object Model)
웹페이지를 구성하는 JS 객체들의 집합이다.
웹페이지가 렌더링 될 때 HTML과 CSS는 JS Objects로 변환된다. 그 Objects는 트리구조이며 최상위에는 Document 객체가 있다.

### HTMLCollection
HTMLCollection은 배열은 아니지만 인덱스등의 배열 구문을 쓸 수는 있다.
반복 가능한 집합이지만 배열은 아니다 -> map, filter등 사용불가하지만, for...of 사용가능;