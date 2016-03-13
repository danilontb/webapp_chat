/**
 * Created by getspeed on 13.03.16.
 */
$(document).ready(function() {
    $('#btnsend').click(function() {

        var text = document.getElementById("sendText").value;
        document.getElementById("sendText").value = "";

        $.ajax({
            url: "ajax/chat.php",
            dataType: 'json',
            data: {
                user1: getStoredValue("user1"),
                user2: getStoredValue("user2"),
                text: text
            },
            success: callback
        });

        /* $.getJSON("ajax/chat.php", {
            user1: getStoredValue("user1"),
            user2: getStoredValue("user2"),
            text: text
        }, function (data) {
            console.log(data);
        }).fail(function(err){
            console.error("etwas ist fahlsch gegannen" + err);
        })*/
    });
});