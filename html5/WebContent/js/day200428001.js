$(function(){
	$("ul > li").click(function(){
		$("ul > li").removeClass("on");
		$(this).addClass("on");
		let index = $(this).index();
		console.log(index);
		
		$(".contentsBox > div").css("display","none");
		// $(".contentsBox > div").hide();
		
		$(".contentsBox > div").eq(index).css("display","block");
		// $(".contentsBox > div").eq(index).show();
	});
});