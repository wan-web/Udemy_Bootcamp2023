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