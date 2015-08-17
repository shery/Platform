$(document).ready(function(){
	var currentUsername = $('#email');
	var currentPwd1 = $('#password');
	var currentPwd2 = $('#password2');
	
 	$('#register').on('click', function(event) {
 		event.preventDefault();
 		var email = $('#email').val();
 		var password = $('#password').val();
 		var password2 = $('#password2').val();
 		if (email != '' && password != '' && password == password2) {
			$.post('/register', {
				email: email,
				password: password
			}, function(data) {
				showError(data);
			});
 		} else {
 			showError('验证失败');
 		}
 	});

});

