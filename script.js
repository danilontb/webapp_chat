

$(document).ready(function() {
	$('#loginButton').click(function() {
		window.location.href = 'list.html';
	});
	$('#userTable').on('click', 'td', function() {
		window.location.href = 'chat.html';
	});

});