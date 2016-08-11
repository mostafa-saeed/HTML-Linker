$('head').append('<style type="text/css">*[link]:hover{cursor: pointer;}</style>');
$('*[link]').click(function(){
	window.location = $(this).attr('link');
	return false;
});