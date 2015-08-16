// npm install express

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var user = {};

app.use(express.static('public'));
app.use(bodyParser.urlencoded())

app.post('/login', function(req, res) {
	if (user[req.body.username] == req.body.password) {
		res.send('登陆成功');
	} else {
		res.send('失败！');
	}
});

app.post('/ajaxLogin', function(req, res) {
	if (user[req.body.username] == req.body.password) {
		res.send('登陆成功');
	} else {
		res.send('失败！');
	}
});

app.post('/register', function(req, res) {
	if (req.body.email != '' && req.body.password != '') {
		user[req.body.email] = req.body.password;
		res.send('注册成功');
	} else {
		res.send('失败！');
	}
});

app.listen(80);