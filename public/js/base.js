var showError = function(message) {
	if ($('#error').length == 0) {
		$('body').append('<div id="error"></div>');
	}
	var errorDom = $('#error');
	errorDom.text(message);
	errorDom.show();
	setTimeout(function() {
		errorDom.fadeOut('normal');
	}, 2000);
};

var showEmail = function(message) {
	if ($('.frm_msg_content').length == 0) {
		$('#error_email').append('<span class="frm_msg_content"></span>');
	}
	var frm_msg_content = $('.frm_msg_content');
	frm_msg_content.text(message);
	frm_msg_content.show();
	setTimeout(function() {
		frm_msg_content.fadeOut('normal');
	}, 2000);
};