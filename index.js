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
	var email = req.body.email;
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (email == '' || req.body.password == '') {
		res.send('用户名或密码不能为空');
	}
	else if (!regex.test(email)) {
		res.send('邮箱格式错误');
	}
	else if (user[req.body.username] != req.body.password) {
		res.send('帐户名或者密码错误');
	}
	else if (!user[req.body.email]) {
		res.send('该帐户名不存在');
	}
	else if (user[req.body.username] == req.body.password) {
		res.send('登陆成功');
	};

});

app.post('/register', function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (email == '') {
		res.send('用户名不能为空');
	} else if (!regex.test(email)) {
		res.send('邮箱格式错误');
	} else if (user[req.body.email]) {
		res.send('该帐户名已存在');
	} else if ( password == '') {
		res.send('密码不能为空');
	} else {
		user[req.body.email] = req.body.password;
		res.send('注册成功');
	}
});

// app.post('/validExistUser', function(req, res) {
// 	var email = req.body.email;
// 	if (user[req.body.email]) {
// 		res.send(true);
// 	} else {
// 		res.send(false);
// 	}
// });

app.listen(80);