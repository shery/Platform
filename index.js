// npm install express

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var user = {
	list:[{
		h3: "关注“演示”，领取现金红包",
		date: "05月01日",
		tips: "风一样的少年",
		imgSrc: "./images/img1.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月02日",
		tips: "风一样的少年",
		imgSrc: "./images/img2.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月03日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月04日",
		tips: "风一样的少年",
		imgSrc: "./images/img4.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月05日",
		tips: "风一样的少年",
		imgSrc: "./images/img5.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月06日",
		tips: "风一样的少年",
		imgSrc: "./images/img6.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月07日",
		tips: "风一样的少年",
		imgSrc: "./images/img7.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月08日",
		tips: "风一样的少年",
		imgSrc: "./images/img8.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月09日",
		tips: "风一样的少年",
		imgSrc: "./images/img9.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月10日",
		tips: "风一样的少年",
		imgSrc: "./images/img10.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月11日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月11日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月05日",
		tips: "风一样的少年",
		imgSrc: "./images/img5.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月06日",
		tips: "风一样的少年",
		imgSrc: "./images/img6.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月07日",
		tips: "风一样的少年",
		imgSrc: "./images/img7.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月08日",
		tips: "风一样的少年",
		imgSrc: "./images/img8.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月09日",
		tips: "风一样的少年",
		imgSrc: "./images/img9.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月10日",
		tips: "风一样的少年",
		imgSrc: "./images/img10.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月11日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月11日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月05日",
		tips: "风一样的少年",
		imgSrc: "./images/img5.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月06日",
		tips: "风一样的少年",
		imgSrc: "./images/img6.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月07日",
		tips: "风一样的少年",
		imgSrc: "./images/img7.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月08日",
		tips: "风一样的少年",
		imgSrc: "./images/img8.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月09日",
		tips: "风一样的少年",
		imgSrc: "./images/img9.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月10日",
		tips: "风一样的少年",
		imgSrc: "./images/img10.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月11日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月11日",
		tips: "风一样的少年",
		imgSrc: "./images/img3.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	},{
		h3: "关注“演示”，领取现金红包",
		date: "05月12日",
		tips: "风一样的少年",
		imgSrc: "./images/img1.jpg",
		p: "关注“演示”公众号，回复关键词【红包】，即可领取现金红包，直接打入微信账户的哦！多谢几个字，让该内容有三行，以验证瀑布流的效果~",
		a: "添加（123）",

	}],
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded())

app.post('/login', function(req, res) {
	if (user[req.body.email] == req.body.password) {
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

app.post('/validExistUser', function(req, res) {
	var email = req.body.email;
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (user[req.body.email] && regex.test(email)) {
		res.send({text:"该用户名已被使用",color:"org"});
	} else if (!user[req.body.email] && regex.test(email)) {
		res.send({text:"该用户名可以使用",color:"gre"});
	}
});

app.post('/validEmail', function(req, res) {
	var email = req.body.email;
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (email == '') {
		res.send("用户名不能为空");
	} else if (!regex.test(email)) {
		res.send("邮箱格式错误");
	}
});
app.post('/swipePage', function(req, res) {
	var pageNum = req.body.pageNum;
	var a = pageNum * 3 - 3;
	var b = pageNum * 3 - 2;
	var c = pageNum * 3 - 1;
	var listContent = [user.list[a],user.list[b],user.list[c]];
	res.send(listContent);

});
app.post('/addMark', function(req, res) {
	var pageNum = req.body.pageNum;
	var num = req.body.num;
	pageNum -= 0;
	num -= 0; 
	var mark = req.body.mark;
 	var b = (pageNum - 1)*3 + num;
 	Object.defineProperty(user.list[b], "a", { value : mark, writable : true });
	// user.list[a].a = mark;
	res.send({num: num});
});
app.post('/deleteList', function(req, res) {
	var pageNum = req.body.pageNum;
	var num = req.body.num;
	pageNum -= 0;
	num -= 0;
	
 	var e = (pageNum - 1)*3 + num;
 	user.list.splice(e,1);

 	var listLength = user.list.length;
 	var listLength_yu = listLength % 3;
 	if (listLength_yu == 0) {
 		var totalPage = listLength / 3;
 	} else{
 		var totalPage_float = listLength / 3 + 1;
 		var totalPage = parseInt(totalPage_float);
 	};
 	if (pageNum <= totalPage) {
 		var a = pageNum * 3 - 3;
		var b = pageNum * 3 - 2;
		var c = pageNum * 3 - 1;
		var listContent = [user.list[a],user.list[b],user.list[c]];
		res.send(listContent);
 	} else{
 		var a = totalPage * 3 - 3;
		var b = totalPage * 3 - 2;
		var c = totalPage * 3 - 1;
		var listContent = [user.list[a],user.list[b],user.list[c]];
		res.send(listContent);
 	};
 	
});

app.post('/getTotalpage', function(req, res) {
 	var listLength = user.list.length;
 	var listLength_yu = listLength % 3;
 	if (listLength_yu == 0) {
 		var totalPage = listLength / 3;
 	} else{
 		var totalPage_float = listLength / 3 + 1;
 		var totalPage = parseInt(totalPage_float);
 	};
 	
	res.send({totalPage: totalPage});
});

app.post('/addList', function(req, res) {
	var addList = req.body;
	var listLength = user.list.push(addList);
	var listLength_yu = listLength % 3;
 	if (listLength_yu == 0) {
 		var totalPage = listLength / 3;
 	} else{
 		var totalPage_float = listLength / 3 + 1;
 		var totalPage = parseInt(totalPage_float);
 	};
	res.send({totalPage: totalPage});
});
app.listen(80);