# Udemy_Bootcamp2023

# JS
NaN은 number type이다. NaN을 연산하면 NaN이 나온다.
변수 명명은 Camel case를 쓰자. Boolean type 은 앞에 is를 붙여주자.
변수에 숫자, _ , $를 쓸 수 있다.(숫자가 첫문자여서는 안된다)
문자열은 인덱싱되어 있다.(배열처럼)
문자열엔 length가 포함되어 있다.

# For...Of
for(variable of iterable) {
  statement
}
For of는 배열에서 가장 많이 쓰이고 문자열에서도 사용 가능하다.
Iterable 한 것들에서 사용가능하다.
index가 필요할땐 for...of 말고 for 루프를 사용하자.

# For...In
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

# splice();
splice메소드는 기존 배열을 업데이트한다.

# Functions
Reusable procedures
function scope, block scope, Lexical scope

# Methods
객체에 속성으로 함수를 추가할 수 있다. 그것을 methods라고 부른다.
메서드는 함수에 포함되어 있고 메서드 이름 앞에 점(.)을 찍어 사용한다.
모든 메서드는 함수이지만 모든 함수가 메서드는 아니다.
ex) 객체에 메소드 정의하는 법
const myMath = {
  square : function( param ) {
    return statement,
  }
} ⬆️⬆️ 기존방법
const myMath = {
  suqare(param) {
    return statement,
  }
} ⬆️⬆️ 새로운 방법  " : function "을 생략했다

# this
메소드에서 this는 같은 객체에 있는 다른 속성에 접근할 때 쓴다.
this는 함수를 호출한 방법에 따라 달라진다.

# try/catch
이 둘은 별개이지만 항삼 함께 일하며 오류와 예외처리를 한다.
자바스크립트에서 오류가 발생하면 그 줄에서 멈추는데 try / catch 문은 try 안에서 오류가 발생하면 catch를 실행하고 다음 프로세스를 계속 이어나간다.