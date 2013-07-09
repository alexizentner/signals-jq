$(document).ready(function() {
	$('.pics-bc').on('mouseenter', function(){
			event.preventDefault();
			$('.banner').hide();
			$(this).find('.arrow-left').show();
			$('.bc-banner').show();
	});	

	$('.pics-bc').on('mouseleave', function(){
			event.preventDefault();
			$(this).find('.arrow-left').hide();
			$('.bc-banner').hide();
			$('.banner').show();
	});	
	$('.pics-hr').on('mouseenter', function(){
			event.preventDefault();
			$('.banner').hide();
			$(this).find('.arrow-left2').show();
			$('.hr-banner').show();
	});	
	
		$('.pics-hr').on('mouseleave', function(){
			event.preventDefault();
			$(this).find('.arrow-left2').hide();
			$('.hr-banner').hide();
			$('.banner').show();
	});	

		$('.pics-cf').on('mouseenter', function(){
			event.preventDefault();
			$('.banner').hide();
			$(this).find('.arrow-right').show();
			$('.cf-banner').show();
	});	
	
		$('.pics-cf').on('mouseleave', function(){
			event.preventDefault();
			$(this).find('.arrow-right').hide();
			$('.cf-banner').hide();
			$('.banner').show();
	});	

});
	



