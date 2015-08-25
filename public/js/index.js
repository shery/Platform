$(document).ready(function (){
	// 切换动画
	var mod = $('.case_mod_desc_c');
	var timer, currentIndex = 0;
	$('.IconItem').mouseover(function (event){
		clearTimeout(timer);
		mod.removeClass("on");
		currentIndex = $(event.currentTarget).index();
		mod.eq(currentIndex).addClass("on");
	});
	$('.IconItem').mouseout(function (event){
		loop();
	});
	var loop = function (){
		timer = setInterval(function(){
			currentIndex += 1;
			if (currentIndex >= 7) {
				currentIndex = 0;
			}
			mod.removeClass("on");
			mod.eq(currentIndex).addClass("on");
		}, 500);
	};
	loop();
	//登陆验证
	$('.btn_login').on('click', function(event) {
		var username = $('#username').val();
		var password = $('#password').val();
		event.preventDefault();
		$.post('/ajaxLogin', {
			email: username,
			password: password
		}, function(data) {
			showError(data);
		});
	});
});