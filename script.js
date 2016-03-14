

var username1;
var username2;

$(document).ready(function() {
	$('#loginButton').click(function() {
		localStorage.clear();
		window.location.href = 'list.html';

		username1 = document.getElementById("username").value;
		storeValue("user1", username1);

	});
	$('#userTable').on('click', 'tr', function() {
		window.location.href = 'chat.html';
	});
});



//speichert Werte mit einem speziefischen Schlüssel (cookie)
function storeValue(key, value) {
	if (localStorage) {
		localStorage.setItem(key, value);
	} else {
		$.cookies.set(key, value);
	}
}

//holt die gespeicherten Werte mit dem richtigen Schlüssel (cookie)
function getStoredValue(key) {
	if (localStorage) {
		return localStorage.getItem(key);
	} else {
		return $.cookies.get(key);
	}
}


function getRowInformation(content){
	//console.log(content.rowIndex);
	console.log(document.getElementById("userTable").rows[content.rowIndex].cells[0].innerHTML);
	username2 = document.getElementById("userTable").rows[content.rowIndex].cells[0].innerHTML;
	storeValue("user2", username2);
}





