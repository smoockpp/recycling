$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    var obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};

let fill = function(el, perc) {
	el.attr('data-progress', (perc * 100));
}



$(document).scroll(function(){
	if ($(".radial-progress").inView()) {
		setTimeout(() => {
      fill($(".radial-progress"), 0.39);
    }, 600);
  }

	if ($(".radial-progress-1").inView()) {
		setTimeout(() => {
      fill($(".radial-progress-1"),0.54);
    }, 1000);
	}
	if ($(".radial-progress-2").inView()) {
		setTimeout(() => {
      fill($(".radial-progress-2"),0.79);
    }, 1540);
	}
  if ($(".re-inner").inView()) {
		setTimeout(() => {
      $('.re-heading').slideDown('normal');
      $('#reduce-rect').addClass('rect-anim');
      $('.arrows').addClass('arrows-anim');
      $('.re-paragraph').slideDown('slow');
    }, 500);

	}

});


// $('head style[type="text/css"]').attr('type', 'text/less');
// less.refreshStyles();
