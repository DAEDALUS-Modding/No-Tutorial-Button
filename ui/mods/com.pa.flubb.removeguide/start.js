$(document).ready(function () {
	$('loc').each(function () {
		if ($(this).html() == "Tutorial" || $(this).html() == 'Player Guide') {
			$(this).parent().css('display', 'none');
		}
	});
});
