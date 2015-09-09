$(document).ready(function () {
	showInti();
	setTotalpage();
	var pageNum = $('.current_page').text();
	$.post('/swipePage', {
		pageNum:pageNum
	}, function(data) {
		if ($('.masonry-brick')) {
					$('.masonry-brick').remove();
				};
			for (i in data) {
				creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
			};
		});
	$('.dyh_add').click(function(){
		$('#add_rules').show();
	});
	$('#add_rules .close').click(function(){
		$('#add_rules').hide();
	});
	$('#add_rules #close').click(function(){
		$('#add_rules').hide();
	});
	$('.next').click(function(){
		showNext();
	});
	$('.prev').click(function(){
		showPrev();
	});	
	$('.to_page').on('click', function(event) {
 		event.preventDefault();
 		var to_page = parseInt($('.in_page').val());
 		var total_page = parseInt($('.total_page').text());
 		if (to_page <= total_page ) {
 			$('.current_page').text(to_page);
 			$.post('/swipePage', {
				pageNum:to_page
			}, function(data) {
				if ($('.masonry-brick')) {
					$('.masonry-brick').remove();
				};
				for (i in data) {
					creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
				};
			});
 		} else{
 			alert("Error: wrong page number!");
 		};
 	});	
 	$('.in_page').on('keypress',function(event) {
		if (event.keyCode == "13") {
			var to_page = parseInt($('.in_page').val());
 			var total_page = parseInt($('.total_page').text());
	 		if (to_page <= total_page ) {
	 			$('.current_page').text(to_page);
	 			$.post('/swipePage', {
					pageNum:to_page
				}, function(data) {
					if ($('.masonry-brick')) {
						$('.masonry-brick').remove();
					};
					for (i in data) {
						creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
					};
				});
	 		} else{
	 			alert("Error: wrong page number!");
	 		};
		};
	});
 	$('.nextPage').on('click',function(event) {
 		event.preventDefault();
 		var current_page = $('.current_page').text();
 		var total_page = $('.total_page').text();
 		if (current_page != total_page) {
 			current_page -= 0;
 			current_page += 1;
 			$('.current_page').text(current_page);
	 		$.post('/swipePage', {
					pageNum:current_page
				}, function(data) {
					if ($('.masonry-brick')) {
						$('.masonry-brick').remove();
					};
					for (i in data) {
						creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
					};
			});
 		} else{
 			$('.current_page').text(1);
	 		$.post('/swipePage', {
					pageNum: 1
				}, function(data) {
					if ($('.masonry-brick')) {
						$('.masonry-brick').remove();
					};
					for (i in data) {
						creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
					};
			});			
 		};
 	});
  	$('.prevPage').on('click',function(event) {
 		event.preventDefault();
 		var current_page = $('.current_page').text();
 		var total_page = $('.total_page').text();
 		if (current_page != 1) {
 			current_page -= 1;
 			$('.current_page').text(current_page);
	 		$.post('/swipePage', {
					pageNum:current_page
				}, function(data) {
					if ($('.masonry-brick')) {
						$('.masonry-brick').remove();
					};
					for (i in data) {
						creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
					};
			});
 		} else{
 			$('.current_page').text(total_page);
	 		$.post('/swipePage', {
					pageNum: total_page
				}, function(data) {
					if ($('.masonry-brick')) {
						$('.masonry-brick').remove();
					};
					for (i in data) {
						creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
					};
			});	
 		};
 	});
 	$('.newmsg').on("click",function() {
 		$('.newmsg_dom').show();
 	});
 	$('.newmsg_dom .close').click(function(){
		$('.newmsg_dom').hide();
	});
	$('.newmsg_dom #close').click(function(){
		$('.newmsg_dom').hide();
	});
	$('.newmsg_dom .list_submit').click(function(){
		addList();
		var pageNum = $('.current_page').text();
		$.post('/swipePage', {
			pageNum:pageNum
		}, function(data) {
			if ($('.masonry-brick')) {
				$('.masonry-brick').remove();
			};
			for (i in data) {
				creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
			};
		});
	});
 	domEvent();

});

