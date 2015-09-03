$(document).ready(function () {
	showInti();
	$.post('/swipePage', {}, function(data) {
			for (i in data) {
				creatListInit(i,data[i].h3,data[i].date,data[i].tips,data[i].imgSrc,data[i].p,data[i].a);
			};
		});
	$('.dyh_add').click(function(){
		$('#add_rules').show();
	});
	$('.close').click(function(){
		$('#add_rules').hide();
	});
	$('#close').click(function(){
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
 		var to_page = $('.in_page').val();
 		$('.current_page').text(to_page);
		showList();
 	});	
 	$('.nextPage').on('click',function(event) {
 		event.preventDefault();
 		var current_page = $('.current_page').text();
 		var total_page = $('.total_page').text();
 		if (current_page != total_page) {
 			current_page -= 0;
 			current_page += 1;
 			$('.current_page').text(current_page);
 			showList();
 		} else{
 			$('.current_page').text(1);
 			showList();
 		};
 	});
  	$('.prevPage').on('click',function(event) {
 		event.preventDefault();
 		var current_page = $('.current_page').text();
 		var total_page = $('.total_page').text();
 		if (current_page != 1) {
 			current_page -= 1;
 			$('.current_page').text(current_page);
 			showList();
 		} else{
 			$('.current_page').text(4);
 			showList();
 		};
 	});
 	$('.edit').on('click',function(event) {
 		event.preventDefault();
 		$('.src_edt').parent().append('<input class="src_edt_input" type="text" />');
 	
 	});
});