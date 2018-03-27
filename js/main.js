(function ($) {
	$(window).on("load", function () {
		$("a[rel='m_PageScroll2id']").mPageScroll2id({
			offset:100,
            scrollSpeed: 500
		});
	});
})(jQuery);

$(function () {
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	});
});


$(function () {
	$('.carousel').carousel({
  	interval: 6000
	});
});




function initMap() {
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.447926, lng: 30.522164}, 
		zoom: 8
	});
}





