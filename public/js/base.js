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

var validExistUser = function(message,tcolor) {
	var frm_etips = $('.frm_etips');
	frm_etips.text(message);
	frm_etips.attr("class","frm_etips");
	frm_etips.addClass(tcolor);
	frm_etips.show();
};

var validEmail = function(message) {
	if ($('.frm_msg_content').length == 0) {
		$('#error_email').append('<span class="frm_msg_content"></span>');
	}
	var frm_msg_content = $('.frm_msg_content');
	frm_msg_content.text(message);
	$('#error_email').show();
};
// 我的素材
var showInti = function() {
	if ($('#add_rules').length == 0) {
		$('body').append('<div id="add_rules"><em class="close">×</em><dl></dl></div>');
		$('#add_rules dl').append('<dt><h3>授权条件</h3></dt><dd><p>1. 拥有一个微信公众号<a>如何申请？</a></p><p>2. 公众号已开启安全助手<a>如何开启？</a></p></dd><dt><div class="space_20"></div><a class="accredit_btn" herf="#">去授权</a><a id="close" herf="#">取消</a></dt>');
	}
	
};
var showNext = function() {
	var dyList = $('.dyList');
	var dyLeft = dyList.position().left;
	if (dyLeft == -1016) {
		dyLeft = 0;
	} else {
		var dyLeft = dyLeft - 1016 + "px";
	}
	dyList.animate({left:dyLeft});
};
var showPrev = function() {
	var dyList = $('.dyList');
	var dyLeft = dyList.position().left;
	if (dyLeft == 0) {
		dyLeft = -1016 + "px";
	} else {
		var dyLeft = dyLeft + 1016 + "px";
	}
	dyList.animate({left:dyLeft});
};

var creatListInit = function(num,title,date,tips,imgurl,content,mark) {
		var pageNum = $('.current_page').text();
		var a = pageNum * 3 - 3;
		var b = pageNum * 3 - 2;
		var c = pageNum * 3;
		$('.masonry').append('<li><h3><a class="src_title" herf="#"></a></h3><div class="src_tips"><b class="src_date"></b><b class="src_tip"></b></div><div class="msgbox"><div class="src_img"><img class="src_imgurl" src="#" /></div><p class="msgbox_content"></p></div><table class="btns"><tbody><tr><td><a herf="#"><i class="edit"></i></a></td><td><a class="src_edt" href="#"></a></td><td><a herf="#"><i class="delete"></i></a></td></tr></tbody></table></li>');
		$('.masonry li').addClass("masonry-brick");
		$('.masonry-brick').slice(num).addClass(num);
		$('.src_title').parents('.'+num).find(".src_title").text(title);
		$('.src_date').parents('.'+num).find(".src_date").text(date);
		$('.src_tip').parents('.'+num).find(".src_tip").text(tips);
		$('.src_imgurl').parents('.'+num).find(".src_imgurl").attr("src",imgurl);
		$('.msgbox_content').parents('.'+num).find(".msgbox_content").text(content);
		$('.src_edt').parents('.'+num).find(".src_edt").text(mark);

		$('.masonry-brick').slice(a,c).show();
};
