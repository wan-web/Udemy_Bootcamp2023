const express = require('express');
const app = express();
const morgan = require('morgan');


// app.use(()=>{
//   console.log('HEYYYY!!!');
//})//모든 request에 실행된다. response를 하던지 다음 미들웨어를 호출해야된다.

/* app.use(morgan('tiny'))
app.use( (req, res, next) => {
  // res.send('HIJACKED BY MY APP.USE!'); 응답을 해버리면 next를 실행 할 수 없다.
  console.log('This is my first middleware')
  return next()
  console.log("이것은 첫번째 미들웨어입니다")
  //next() 아래가 반환되지 않게 하려면 next() 앞에 return을 해준다.
})
app.use( (req, res, next) => {
  console.log('this is my second middleware')
  next()
}) */
app.use(morgan('tiny'))
app.use( (req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
})
app.use('/dogs', (req, res, next) => {
  console.log('dogs페이지입니다');
  next();
})
const verifyPassword = (req, res, next) => {
  const {password} = req.query;
  if(password === 'chickennugget') {
    next();
  } else {
    res.send('SORRY YOU NEED A PASSWORD!!!');
  }
}


app.get('/', (req, res) => {
  console.log(`request DATE: ${req.requestTime}`)
  res.send('HOME PAGE!');
  
})
app.get('/dogs', (req, res) => {
  console.log(`request DATE: ${req.requestTime}`)
  console.log('이것은 독페이지입니다');
  res.send('WOOF WOOF!');
})

app.get('/secret', verifyPassword, (req, res) => {//미들웨어 콜백함수를 쓰면 이 경로로 요청이 있을때만 실행된다. next()가 실행되면 3번째 매개변수인 함수가 실행된다.
  res.send('SECRET IS : Sometimes I wear headphones in public so I dont have to talk to anyone');
})

app.use((req, res) => {
  res.status(404).send('NOT FOUND');//status에 404를 추가한다.
  // res.send('NOT FOUND'); // 그냥 응답하면 status가 200이다.
})

app.listen(3000, ()=> {
  console.log('App is running on localhost:3000');
})