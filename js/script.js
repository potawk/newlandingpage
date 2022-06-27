$(function(){

	$('.slide').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	$(document).on('scroll', function(){
  	let stp = $(document).scrollTop();
  	let bgp = stp / 2;
  	if(bgp){
    	$('.top').css('background-position', 'center top -'+ bgp + 'px');
  	}
	});

	$(document).ready(function(){
		$('.type').t({
			repeat: true,
			speed: 200,
			pause_on_tab_switch: false,
			delay: 5,
		})

	});

});

function fadeAnime(){
	$('.fadeInUpTrigger').each(function(){
		let elemPos = $(this).offset().top-50; 
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeIn');
		}else{
			$(this).removeClass('fadeIn');
		}
	});
	$('.fadeInRightTrigger').each(function(){
		let elemPos = $(this).offset().top-50; 
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeRight');
		}else{
			$(this).removeClass('fadeRight');
		}
	});
}

$(window).scroll(function () {
  fadeAnime();
});

