$(document).ready(function(){
	$("#content").on("click","#linktodown", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});