const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json'); //데이터파일 불러오기


app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))//이것을 하지 않으면 서버를 가동시킨 경로에서 views를 찾기 때문에 에러가 날 수 있다.

app.get('/', (req, res) => {
  // res.send('HI');
  res.render('home'); //view engine을 ejs로 했기 때문에 확장자 .ejs를 생략할 수 있다.
  //views 폴더를 default로 하기 때문에 views 폴더안에 파일을 찾는다.
})

app.get('/rand', (req, res) => {
  const num = Math.ceil(Math.random() * 10);
  res.render('random', {num}); //키,값이 동일하면 한개만 써도 된다 {num}
})

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  const data = redditData[subreddit];//객체에서 변수로 찾을땐 []를 씀.
  if(data) {
    res.render('subreddit', { ...data });//data를 펼쳐서 전달 -> data.어쩌고 안해도된다.
  } else {
    res.render('notfound', {subreddit})
  }
})

app.get('/cats', (req, res) => {
  const cats = [
    'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
  ];
  res.render('cats', {cats})
})

app.listen(3000, ()=>{
  console.log('LISTENING N PORT 3000')
})