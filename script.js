

$(document).ready(function() {
	$('#loginButton').click(function() {
		window.location.href = 'list.html';
	});
	$('#userTable').on('click', 'tr', function() {
		window.location.href = 'chat.html';
	});
});


var username;

$('#loginButton').click(function() {
	//mit diesem Username melde ich mich beim Chatprogramm an.
	 username = document.getElementById("username").value;
	console.log(storeValue("user1", username));

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



/* Hier wird herausgefunden welches Element von der Tabelle gedrückt wurde */
function findRowNumber(){
	var rowIdx;
	var rowData= [];
	var table= document.getElementById('userlist');
	var rows= table.getElementsByTagName('tr');
	var selectedRow;
	var rowCellValue;
	for(i= 0;i<rows.length;i++){
		rows[i].onclick= function(){
			rowIdx= this.rowIndex;
			selectedRow= this.cells;
			for(j= 0;j<selectedRow.length;j++){
				rowCellValue= selectedRow[j].textContent ||
					selectedRow[j].innerText;
				rowData.push('cell '+j+': '+rowCellValue);
			}
			storeValue("user3", rowCellValue);
			console.log(getStoredValue("user1"));
			console.log(getStoredValue("user3"));
		}
	}
};

function zeigean() {
//anzeige der namen
	document.getElementById("p1").innerHTML = getStoredValue("user1") + " : " + getStoredValue("user3");
};