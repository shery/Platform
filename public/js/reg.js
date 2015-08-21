$(document).ready(function(){
	var currentUsername = $('#email').val();
	var currentPwd1 = $('#password').val();
	var currentPwd2 = $('#password2').val();

	$('#email').on('blur',function (data){
		showEmail(data);
	});
	
	
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
 		} else if (password != password2 ) {
 			showError('两次密码输入不匹配');
 		}
 	});

 	// $('#email').on('blur', function() {
 	// 	var email = $(this).val();
		// $.post('/validExistUser', {
		// 	email: email
		// }, function(data) {
	 // 		if (data) {
	 // 			$('#error_email').show();
	 // 		} else {
	 // 			$('#error_email').hide();
	 // 		}
		// });
 	// });

});