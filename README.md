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

## DOM (Document Object Model)
웹페이지를 구성하는 JS 객체들의 집합이다.
웹페이지가 렌더링 될 때 HTML과 CSS는 JS Objects로 변환된다. 그 Objects는 트리구조이며 최상위에는 Document 객체가 있다.
getElementById, getElementsByClassName, getElementsByTag 보다 querySelector, querySelectorAll 이 더 최근에 나온 메서드들이다.
getElement~~를 쓰면 HTMLCollection을 반환하고 querySelector를 쓰면 NodeList를 반환한다.

### HTMLCollection 배열같은 객체
HTMLCollection은 배열은 아니지만 인덱스등의 배열 구문을 쓸 수는 있다.
반복 가능한 집합이지만 배열은 아니다 -> map, filter등 사용불가하지만, for...of, length 사용가능

### innerText, textContent, innerHTML
innerText와 유사한 textContent.
display:none 은 innerText에는 없지만 textContent에는 있다.

### .style
.style 보다 class명으로 스타일을 조작하는것이 더 좋은 방법이다.

### classList - add, remove, toggle
setAttribute(), getAttribute() 말고 👍classList를 쓰자.

### 한 요소에서 다른 요소로 접근하기
부모👍parentElement,
자식👍children - HTMLCollection을 반환함(인덱싱가능),
형제👍nextElementSibling, previousElementSibling - html요소가 온다.
nextSibling, previousSibling - textNode가 온다.
노드가 필요할 경우도 있겠지만 대부분 ElementSiblings를 쓴다.

### 새로운 요소 만들기
createElement

### 요소 붙이기
부모.appendChild(새로운요소) - 제일 마지막 자식으로 추가한다.
appendChild보다 append가 더 최근에 나왔고 유연하다. 
⭐append - 여러개의 요소 추가 가능하다, 문자열도 추가 가능하다.
⭐prepend - 첫번째 자식으로 추가하기.
⭐기준요소.insertAdjacentElement(position, 넣을요소) - 형제로 추가하기.
position에는 'beforebegin', 'afterbegin', 'beforeend', 'afterend' 가 있다.
비슷한 기능으로 before, after도 있다. 기준.after(넣을요소)

### 요소 제거하기
요소.removeChild(자식) - 부모를 선택해야지 제거하고싶은 요소를 제거 가능하다.
오랫동안 다들 이렇게 해왔지만 remove() 메서드가 새로 나왔다.
⭐제거하려는요소.remove();

## DOM Events
onclick, onmouseenter

## 이벤트 객체
이벤트 객체는 콜백함수에 자동으로 전달된다.
키보드이벤트에서 key와 keyCode는 다르니까 확인해가면서 쓰자.
이벤트 객체에는 preventDefault() 메서드가 있다. 기본 동작을 방지하는것.
stopPropagation() 이벤트 버블링을 막는것.
## Form 객체
preventDefault()
Form객체에서는 elements 속성에 name값을 지정한 input들에 바로 접근이 가능하다.
ex) form.elements.username
## Input 이벤트
change - blur 될때 실행된다(input을 떠날때) - select태그에서 쓰면된다.
입력값이 달라질때마다 이벤트를 발생시키고 싶으면 input 이벤트를 쓰자.
쉬프트나 값이 입력되지 않을때는 발생하지 않지만 붙여넣기, 음성 등에는 발생한다.
## 이벤트 버블링
요소에서 이벤트가 발생할 때 더 높은 레벨로 이벤트가 계속 발생한다.(공기 방울이 위로 올라오듯이, 아래로는 진행 안됨)
자식요소에 null인 이벤트가 부모요소에 있을때 자식요소에 그 이벤트 발생시 부모요소 이벤트 작동함 
ex) 자식 더블클릭 , 부모 클릭 이벤트가 정의되어있을때 자식을 클릭만해도 부모가 클릭됨.
⭐e.stopPropagation()을 써서 이벤트 버블링을 막을 수 있다.
## 이벤트 위임
이벤트 수신기를 부모에 달아서 동적으로 생성되는 자식들을 관리할 수 있다.
e.target.nodeName을 쓰자.

## The Call Stack - 자바스크립트가 함수를 호출 관리하는 방법.
스택은 컴퓨터과학의 데이터 구조 ( 후입 선출 )
스크립트가 함수를 호출하면 인터프리터는 콜 스택에 추가한다. 그리고 그 함수를 실행한다. 첫번째 함수가 호출한 함수도 콜 스택에 추가되어 실행된다. 현재 함수가 완료되면 인터프리터는 콜 스택에서 함수를 제거하고 마지막 코드 목록의 멈춘 곳에서 계속 실행한다.
*자바스크립트는 콜스택에 함수호출을 추가하고 값이 반환될때마다 삭제한다.

# AJAX

## HTTP status code
{
  2-- : 요청 성공
  4-- : 클라이언트에서 잘못된 정보를 요청할때
  5-- : 서버사이드 에러
}

## 쿼리스트링
?키=값&키=값&키=값

## HEADERS
요청(request)과 함께 쌍(key:value)으로 보내지는 정보,
응답과 함께 쌍으로 오는 정보.
특정 API는 사용자 정의 헤더를 보내야한다. 브라우저에서는 설정할 수 없지만 도구나 코드를 통해 요청을 할 땐 가능하다.

## request
XMLHttpRequest 객체로 요청하기 - 오래된 방법 , 잘 쓰이지 않는다. 👍Fetch를 쓰자
### Axios
axios.get('url주소');
axios.get('url주소', {headers : { 키 : 값}}); 으로 header를 설정 할 수 있다.
axios.get('rul주소', {params : { 키 : 값}}); 으로 쿼리스트링을 객체로 보낼 수 있다.

## 프로토타입
프로토타입은 자바스크립트 객체가 서로 기능을 상속하는 방식의 메커니즘이다.
객체는 템플릿 객체 역할을 하는 프로토타입 객체를 가질 수 있다.
ex) 각 배열들은 배열 메서드를 가지고 있는게 아니라 프로토타입의 메서드를 참조하는 것
Array.prototype ( 배열의 프로토타입 )
프로토타입에 사용자 정의 함수를 추가하면 다른 객체에서 그것을 사용할 수 있다. (그렇게 좋은 방식은 아니다 - 기존에 정의되었던것을 덮어쓸수도있음.)

# BackEnd
## Terminal이란 텍스트를 통해 내 기기와 상호작용할 수 있는 텍스트 기반의 프롬프트
## Shell은 Terminal에서 실행되는 소프트웨어가 있는 프로그램
mkdir(make directory) : 공백 이용해서 여러 폴더 생성가능. 다른 경로에 생성가능, 
cd(change directory) : ..(부모 폴더) /(절대 경로),
touch() : 접근 시간과 수정 시간 변경 (그 파일이 없으면 생성),
ls(list), pwd(print working directory), ~(default directory), /(root directory), rm(remove) : 파일삭제 (휴지통으로 안가고 그냥 삭제된다), rmdir : 빈폴더 삭제,
rm -rf : 폴더 삭제

# Node.js
명령어 = { node : REPL - 읽고 평가하고 출력한다. (브라우저의 js콘솔은 REPL이다),
          .help : 명령어 목록,
          .exit : REPL 종료( ctrl + c 도 된다.),
          global : global 객체 ( 브라우저에서 윈도우 같은 최상위 객체 ),
          node 파일명 : 파일을 실행함
        }

Process 객체

### 서로 다른 파일 간에 js코드를 공유하는 법
파일 불러오기 - require()
파일 내보내기 - module.exports = {}

### npm init
package.json을 만드는 생성 유틸리티인데 필수는 아니지만 쉬운 방법이다.

### npm install
package.json에 dependencies 모듈들을 한번에 받을 수 있다.

# Express - 프레임워크
설치 : npm i express
브라우저에 Cannot GET / 이라고 뜬다면 서버는 존재하지만 반환할게 없다는 것.
app.use는 요청이 들어오면 콜백함수를 실행한다. req, res 2개의 콜백함수를 매개변수로 쓴다. res는 자동으로 headers의 content-type을 설정해준다. 한번밖에 못 씀.

## 라우팅
app.get('/주소', 콜백함수(req, res){}) - get요청에만 응답한다.
app.post('/주소', 콜백함수(req, res){})
get, post, delete, put
주소 뒤에 : 를 붙여 변수를 쓸 수 있다.

## 템플레이팅 (EJS)
npm install ejs
app.set('view engine', 'ejs'); 앱 객체에 view engine 키의 값은 ejs로 설정.
Express는 views나 템플릿이 views 디렉토리 안에 있다고 설계되어있다.
views폴더에 ejs파일을 만든다.
res.send("문자열")을 보내는 대신 파일을 보낼 수 있다. res.render()메서드 사용
views경로 지정 : [
  const path = require('path');,
  app.set('views', path.join(__dirname, '/views'))
]

### <%= %>
ejs파일엔 로직이 적은게 더 나은 방법( 값을 만들어서 전달 ) - 템플릿은 가능한 멍청하게 만들자.
res.render('ejs파일', 객체); ejs파일에 객체를 전달한다. 그러면 ejs파일에서 객체의 key에 접근이 가능하다. <%= key %>

### EJS의 조건문
<% if() { %>
 <h1>lorem</h1>
<% } %>
또는 삼항연산자 <% () ? '' : '' %>

### EJS의 loop
<% for(let item of items) { %>
  <h2><%= item %></h2>
<% } %>

### Express에 정적 Asset 사용하기
app.use(express.static('public')); express.static은 미들웨어다. 제공하고 싶은 Asset 폴더를 인수로 전달한다. 예제에서는 public 폴더
app.use는 요청을 받을때마다 실행한다. 요청을 받거나 보내는것과 관련이 없다.
사용하는 곳에서는 public 폴더는 안쓴다.
<link href="/static/app.css"> -> public/app.css 파일 참조
app.use('/static', express.static(path.join(__dirname, 'public'))) - index.js

### EJS와 파일분할
<%- include('파일경로') %> - 파일경로 시작위치는 views폴더다.

## GET요청과 POST요청
GET요청은 body를 작성할 수 없다. 쿼리스트링으로 검색, 정렬에 씀. 백엔드에 영향을 주지 않는다.
get - req.query , post - req.body 안에 데이터가 들어있다.
req.body는 문자열이 들어가기 때문에 어떤 데이터로 해석할지 정의 해줘야한다.
app.use(express.urlencoded({ extended: true })) //
req.body를 URL 암호화 데이터로 분석할 미들웨어 사용

## redirect
res.redirect('경로');

## UUID
npm i uuid

## PUT요청과 PATCH요청
PUT요청은 전체 내용을 업데이트 하는 용도(기존 내용을 전부 교체)
PATCH는 부분적으로 업데이트(사용자 ID는 두고 본문만 바꾼다던지)

## method-override
ejs파일에서는 get, post 요청밖에 할 수 없어서 method-override를 쓰면된다.
npm i method-override
index.js에서 
const methodOverride = require('method-override'); 
app.use(methodOverride('_method'));
ejs파일에서 
<form method="post" action="/comments/<%= comment.id %>/edit?_method=PATCH">


# MongoDB
NoSQL이 SQL 보다 훨씬 유연하다. 미리 스키마를 정의할 필요가 없다.
Mongo - Node 가 인기가 많은 조합이다. MEAN & MERN stacks
1년 후 쯤엔 MySQL이나 Postgres를 익히길 추천함.

### 데이터베이스 만들기
use 데이터베이스명

### Insert Methods
db.collection.insertOne({}) - 객체 전달
db.collection.insertMany([]) - 객체의 배열을 전달
_id를 빠뜨리면 자동으로 생성해준다.

### Find Methods
db.collection.find({키 : '값'}) // collection에서 키 : '값'이 일치한 항목들을 찾는다.
db.collection.findOne({키 : '값'}) // 일치한 항목 한개를 찾는다.
db.collection.find({}) // 전체 불러오기

### Update Methods
db.collection.updateOne(선택자 객체, {⭐$set : {변경할 키 : 값}}) - 키가 없으면 새롭게 추가된다.
db.collection.updateMany() - 선택자객체와 일치한 모든 값들을 업데이트한다.
$set - 필드를 대체하거나 추가. (가장 많이 쓰는 연산자)
$currentDate - 문서에 현재 날짜를 설정할 때 상요한다.

### Delete Methods
db.collection.deleteOne(선택자 객체) - 선택자와 일치한 데이터중 첫번째 데이터 삭제
db.collection.deleteMany(선택자 객체) - 선택자에 빈객체를 입력하면 전체 삭제

## Mongoose
설치하기 : npm i mongoose무

### 연결하기
mongoose 홈페이지에서 퀵스타트 참고

### schema 정의
new mongoose.schema({객체});

### Model 만들기
schema를 가져와서 model 만들기
mongoose.model('모델명', schema) //모델명은 단수형이면서 첫번째 문자는 대문자로 작성한다. 몽구스가 자동으로 모델명을 복수로 첫문자를 소문자로 한 collection을 만든다.
new 모델명({})로 데이터 인스턴스를 만든다.

1.몽구스 연결 2.스키마 생성 3.모델 생성

카테고리 정렬은 쿼리스트링으로 받아서 정렬하자.

# Express 미들웨어
미들웨어의 개념과 정의 ( 쿠키, 세션, 인증, 로그인 등에 사용)
미들웨어는 요청과 응답사이의 생명주기 내에서 실행되는 함수다.
요청객체와 응답객체에 접근할 수 있다. ex) req.body 파싱하기.
연쇄적으로 다음 미들웨어를 호출 할 수 있다.

### morgan 미들웨어
모든 요청을 log에 기록한다.

## 다음 미들웨어 호출하는 방법
app.get('/', function(req, res, next) {
  next();
})
3번재 매개변수가 다음 미들웨어다.
app.use('/dogs', callback) // app.use도 경로를 설정해서 해당 경로의 요청에만 실행하도록 할 수 있다.
가장 많이 쓰는 방법은
⭐app.get('/dogs', 미들웨어, callback) - 미들웨어에서 next()를 실행하면 다음 callback이 실행된다. 미들웨어는 여러개도 추가 가능하다.