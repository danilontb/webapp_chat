/**
 * Created by getspeed on 13.03.16.
 */
$(document).ready(function() {


    users = {
        user1 : getStoredValue("user1"),
        user2 : getStoredValue("user2")
    };

    senduser = getStoredValue("user1");
    reciveuser = getStoredValue("user2");

    $.getJSON( "ajax/chats.php", users, function( data ) {
        $.each( data, function( key, val ) {
            if(val.user1 == senduser) {
                $("tbody").append("<tr ><td align='left'>" + val.user1 + ': ' + val.text + "</td></tr>");
            }else{
                $("tbody").append("<tr ><td align='right'>" + val.user1 + ': ' + val.text + "</td></tr>");
            }
        });
    });

    setInterval(callInfos, 2000);

    function callInfos() {
        $("tbody").find('tr').remove();

        $.getJSON("ajax/chats.php", users, function (data) {
            $.each(data, function (key, val) {
                if (val.user1 == senduser) {
                    $("tbody").append("<tr ><td align='left'>" + val.user1 + ': ' + val.text + "</td></tr>");
                } else {
                    $("tbody").append("<tr ><td align='right'>" + val.user1 + ': ' + val.text + "</td></tr>");
                }
            });
        });
    }

 $('#chats').scrollTop('bottom');



    $('#btnsend').click(function() {

        var text = document.getElementById("sendText").value;
        document.getElementById("sendText").value = "";



         $.getJSON("ajax/chat.php", {
            user1: getStoredValue("user1"),
            user2: getStoredValue("user2"),
            text: text
        },function(data){
             console.log(data)
         });
    });


});