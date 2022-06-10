$(function() {
	var a=0;
	$('.nav-content dl').hide()
	$('.nav-content1 #cha').click(function(){
		$('.nav-content dl').fadeIn();
		$('.nav-content1 #cha .hr').css("backgroundColor","#000");
		a++;
		if(a%2==0){
			$('.nav-content dl').fadeOut();
			$('.nav-content1 #cha .hr').css("backgroundColor","#fff");
		}
	})
	
	
	
		$('.nav-content dl dd').hide();
		$('.nav-content dl dt').click(function() {
			$dds = $(this).siblings('dd');
			$(this).parent().siblings().find("dd").slideUp();
			if ($dds.is(":visible")) {
				$dds.slideUp("slow");
			} else {
				$dds.slideDown("slow");
			}
		})
		
		
	AOS.init({
	  duration: 1200,
	})
});
