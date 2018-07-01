$(document).ready(function(){


	initBannerSlider();
	

	function initBannerSlider(){
		//banner swiper effect

		
		var prodListSwiper = new Swiper ('.prod_list',{
		 	loop:true,
		 	nextButton: '.left_arrow',
    		prevButton: '.right_arrow',
    		noSwiping:true,
		});	

		//prodListSwiper.detachEvents();
	}
	

	$('.btn-gotop').hide().click(function() {
            $("body, html").animate({
                scrollTop: "0px"
            });
        });
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $('.btn-gotop').fadeIn();
            } else {
                $('.btn-gotop').fadeOut();
            }
        });
    $('select').niceSelect();
});