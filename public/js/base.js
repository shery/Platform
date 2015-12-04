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
	$('.masonry').append('<li class="'+ num +'data masonry-brick"><h3><a class="src_title" herf="#">'+ title +'</a></h3><div class="src_tips"><b class="src_date">'+ date +'</b><b class="src_tip">'+ tips +'</b></div><div class="msgbox"><div class="src_img"><img class="src_imgurl" src='+ imgurl +' /></div><p class="msgbox_content">'+ content +'</p></div><table class="btns"><tbody><tr><td><a class="edit_a" herf="#"><i class="edit"></i></a></td><td><a class="src_edt'+ num +'" href="#">'+ mark +'</a></td><td><a class="delete_a" herf="#"><i class="delete"></i></a></td></tr></tbody></table></li>');	
};

var domEvent = function() {
	$(document).on('click',".edit_a",function(event) {
		var current_target_class = $(event.target).parents(".masonry-brick").attr('class');
		var a = Trim(current_target_class,'g');
		var num = parseInt(a);
	 	if ($('.val'+ num +'').length == 0) {
	 		$('.src_edt'+ num +'').parent().append('<input class="src_edt_input val'+ num +'" type="text" />');
	 	};
	 	$(document).on('keypress',".val"+ num +"",function(event) {
			if (event.keyCode == "13") {
				var src_edt_input_val = $('.val'+ num +'').val();
				var pageNum = $('.current_page').text();
				if (src_edt_input_val) {
					$('.src_edt'+ num +'').text(src_edt_input_val);
					$.post('/addMark', {
						pageNum: pageNum,
						num: num,
						mark: src_edt_input_val
					}, function(data) {
						$('.val'+ data.num +'').remove();
					});
					
				};
			};
		});
 	});
 	$(document).on('click',".delete_a",function(event) {
 		var current_target_class = $(event.target).parents(".masonry-brick").attr('class');
		var a = Trim(current_target_class,'g');
		var num = parseInt(a);
		var pageNum = $('.current_page').text();
		$.post('/deleteList', {
			pageNum: pageNum,
			num: num
		}, function(data) {
			if ($('.masonry-brick')) {
				$('.masonry-brick').remove();
			};
			for (i in data) {
				creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
			};
		});
		setTotalpage();
 	});	
};

var setTotalpage = function() {
	$.post('/getTotalpage', {}, function(data) {
		$('.total_page').text(data.totalPage);
		var current_page = parseInt($('.current_page').text());
	 	var total_page = parseInt(data.totalPage);
		if (current_page > total_page) {
			$('.current_page').text(data.totalPage);
		};
	});

	
};

var addList = function() {
	var title = $('#add_title').val();
	var date = $('#add_date').val();
	var tips = $('#add_tips').val();
	var imgPath = $("#add_img").val();
	var content = $('#add_content').val();
	var mark = $('#add_mark').val();
	if (title && date && tips && imgPath && content && mark) {
		$.post('/addList', {
			h3: title,
			date: date,
			tips: tips,
			imgSrc: imgPath,
			p: content,
			a: mark
		}, function(data) {
			$('.total_page').text(data.totalPage);
			$('.newmsg_dom ').hide();
		});
	} else {
		if ($('#error').length == 0) {
			$('body').append('<div id="error"></div>');
		}
		var errorDom = $('#error');
		errorDom.text("信息不能为空");
		errorDom.show();
		setTimeout(function() {
			errorDom.fadeOut('normal');
		}, 2000);
	};
	
};