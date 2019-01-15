var express = require('express');
var app = express();
var ejs = require('ejs');
var session = require('express-session');


app.set('views', __dirname + '/public');    //ejs 파일 연결?

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://sooohh6:tngus1127@ds117729.mlab.com:17729/suhyeon_board');

var Board = require('./models/board');
var User = require('./models/user');

app.get('/', function(req, res){
  Board.find({}, function(err, boards){
    if(!err){
      res.render('index.ejs', {results: boards, user: req.session.user});
    }
  });
});

app.get('/write', function(req, res){
  if(!req.session.user){
    res.send('로그인을 하셔야 글을 쓸 수 있습니다. ');
  }else{
  res.render('write.ejs');
  }
});

app.post('/write', function(req, res){
  var board= new Board({
    title: req.body.inputTitle,
    content: req.body.inputContent,
    author: req.session.user.id,
    create_at: (new Date()).toISOString(),
  });

  board.save(function(err){
    res.redirect('/');
  });
});


app.post('/destroy/:id', function(req, res){
  Board.remove({ _id: req.params.id }, function(err){
    res.redirect('/');
  });
});

app.get('/rewrite/:id', function(req, res){
  if(!req.session.user){
    res.send('접근 권한이 없습니다. ');
  }else{
    Board.findOne({_id: req.params.id}, function(err, board){
      if(board.author === req.session.user.id){
        res.render('rewrite.ejs', {result: board});
      }else{
        res.send('접근 권한이 없습니다. ');
      }
    });
  }
});

app.post('/rewrite/:id', function(req, res){
  Board.findOne({_id: req.params.id}, function(err, board){
    board.content = req.body.inputContent;
    board.create_at = (new Date()).toISOString();
    board.save(function(err){
      res.redirect('/show/' + board._id);
    });
  });
});

app.get('/show/:id', function(req, res){
  Board.findOne({_id: req.params.id}, function (err, board){
    board.viewnumber++;
    board.save();
    res.render('show.ejs', {results: board, user: req.session.user});
  });
});

app.get('/login', function(req, res){
  res.render('login.ejs');
});

app.get('/register', function(req, res){
  if(req.session.user){
    res.send('이미 회원가입 하셨습니다.' );
  }else{
    res.render('register.ejs');
  }
});

app.post('/register', function(req, res){
  User.findOne({id: req.body.id}, function(err, user){
    if(user !== null){
      res.send('이미 존재하는 아이디 입니다. ');
    }else{
      var newUser = new User({
        id: req.body.id,
        name: req.body.name
      });
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save(function(err){
        req.session.user = {
          id: newUser.id,
          name: newUser.name
        }
        res.redirect('/');
      });
    }
  });
});

app.post('/login', function(req, res){
  User.findOne({id: req.body.id}, function(err, user){
    if(user === null){
      res.send('존재하지 않는 계정입니다.');
    }else{
      if(user.validateHash(req.body.password) === false){  // user 랑 req.body.password가 같으면 true
        res.send('잘못된 비밀번호 입니다.');
      }else{
        req.session.user = {
          id: user.id,
          name: user.name
        }
        res.redirect('/');
      }
    }
  });
});

app.get('/logout', function(req, res){
  req.session.destroy(function(err){
    res.redirect('/')
  });
});

app.listen(3000);
