$(function(){
	let bannerAction = setInterval(move, 3000);
	let position = 0;
	$("section:first").hover(function(){
		clearInterval(bannerAction);
	}, function(){
		bannerAction = setInterval(move, 3000);
	});
	
	function move() {
		position = ++position % 3;
		$(".container").stop(true).animate({"left" : -640 * position + "px"}, 1000);
	}
	
	$("button:first").click(function(){
		position = --position % 3;
		$(".container").stop(true).animate({"left" : 640 * position + "px"}, 1000);
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	

	$("button:last").click(function(){
		move();
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
});