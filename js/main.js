var mainwrap = $(".page__mainwrap");

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


$(document).ready(function(){

	if ($(window).scrollTop() > 0) {
		detectFire();
	}

    $(window).scroll(function(){
    	detectFire();
    });
});


function detectFire() {
	mainWrapFire();
}


function mainWrapFire(){
	if (mainwrap.isOnScreen()) {
		mainwrap.addClass("page__mainwrap--visible");
	} else {
	   mainwrap.removeClass("page__mainwrap--visible");
	}
}



$("#industry-href").click(function() {
	console.log(mainwrap.offset().top)
    $('html, body').animate({
        scrollTop: mainwrap.offset().top - 25
    }, 800);
});


$("#product-href").click(function() {
    $('html, body').animate({
        scrollTop: $("#product").offset().top - 25
    }, 800);
});


$("#contact-href").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);
});