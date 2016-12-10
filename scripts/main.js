$(document).ready(() => {
// $('head style[type="text/css"]').attr('type', 'text/less');
// less.refreshStyles();
window.randomize = function(perc) {
	$('.radial-progress').attr('data-progress', (perc * 100));
}
setTimeout(window.randomize(0.54), 200);
$('.radial-progress').click(window.randomize);
});
