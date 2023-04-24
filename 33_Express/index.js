const express = require('express');
const app = express(); //앱 객체를 반환한다.

const port = 3000;

app.listen(port, () => {
  console.log(`${port}번 포트로 서버가 시작되었습니다`)
})//앱이 실행된다. ( 들어오는 요청을 기다린다 )

// app.use( (req, res) => { //req는 요청객체, res는 응답객체
//   console.log("새로운 요청이 들어왔습니다")
//   res.send('<h1>이것은 response입니다.</h1>');//res.send는 HTTP response를 한다.
//   // res.send({color: 'red'});//send는 한번밖에 못함.
// })//use는 요청이 들어오면 콜백이 실행된다. (3000번 포트만!!)

// /cats => 'meow'
// /dogs => 'woof'
app.get('/', (req, res) => {
  res.send('Wlcome to the home page!');
})//일반적으로 '/' 주소를 홈이라고 한다.

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})


app.get('/r/:subreddit/:postId', (req, res) => {
  console.log(req.params);//주소에 변수
  const { subreddit, postId } = req.params;
  res.send(`<h1> postId = ${postId}Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/search', (req, res) => {
  const { q } = req.query; //쿼리스트링
  if(!q) {
    res.send('Nothing found if nothing search')
  } else {
    res.send(`<h1>Search results for : ${q}</h1>`)
  }
})

app.get('/cats', (req, res) => {
  res.send('야옹');
})
app.get('/dogs', (req, res) => {
  res.send('멍멍');
})
app.post('/cats', (req, res) => {
  res.send('POST REQUEST /cats');
})
app.get('*', (req, res) => {
  res.send('없는 페이지입니다');
})//이 코드가 가장 위에 있으면 다 여기로 연결된다.