$(function() {

	var a = 0;
	$('.nav-content dl dd').hide()
	$('.nav-content1 #cha').click(function() {
		$('.nav-content dl').fadeIn();
		$('.nav-content1 #cha .hr').css("backgroundColor", "#000");
		a++;
		if (a % 2 == 0) {
			$('.nav-content dl').fadeOut();
			$('.nav-content1 #cha .hr').css("backgroundColor", "#fff");
		}
	});
	$('.nav-content dl dt').click(function() {
		$dds = $(this).siblings('dd');
		$(this).parent().siblings().find("dd").slideUp();
		if ($dds.is(":visible")) {
			$dds.slideUp("slow");
		} else {
			$dds.slideDown("slow");
		}
	})
	// $(window).resize(function() {
	// 	var $screenWidth =$(document.body).width();

	// 	if($screenWidth>640){
	// 		// 整体导航出现
	// 		// $('.nav-content dl dd').show();
	// 	}
	// })
	// 轮播图start

	var mySwiper = new Swiper('.swiper', {
		loop: true, // 循环模式选项
		autoplay: true,

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// type : 'custom',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
	// 轮播图end
	AOS.init({
		duration: 1200,
	});

});
