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
 		
		
 	});	
});