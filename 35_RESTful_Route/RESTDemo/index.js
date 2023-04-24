const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuid } = require('uuid'); //키가 v4의 키를 uuid로 바꾼다.
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }))//x-www-form-urlencoded 데이터 분석
app.use(express.json()); //post요청으로 온 JSON데이터를 분석
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lil that is so funny!'
  },
  {
    id: uuid(),
    username: 'Allie',
    comment: 'lol that is so sad!'
  },
  {
    id: uuid(),
    username: 'Wani',
    comment: 'I love korea!'
  },
  {
    id: uuid(),
    username: 'Terry',
    comment: "I'am cooking chicken soup"
  }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({username, comment, id : uuid() });
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params; //req.params는 문자열이라 숫자로 바꿔줌
  const comment = comments.find( element => element.id === id);//uuid()는 문자열을 반환함.
  res.render('comments/show', {comment});
})

app.get('/tacos', (req, res) => {
  console.log(req.query);
  res.send('GET /tacos response');
})

app.get('/comments/:id/edit', (req, res) => {
  const {id} = req.params;
  const comment = comments.find( element => element.id === id);
  res.render('comments/edit', {comment});
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, ${meat} ${qty}`);
})

app.patch('/comments/:id', (req, res) => {
  const {id} = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find( c => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
  const {id} = req.params;
  comments = comments.filter( c => c.id !== id);
  res.redirect('/comments');
})

app.listen(3000, ()=> {
  console.log('on port 3000!');
})