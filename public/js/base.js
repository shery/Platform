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