/**
 * Created by getspeed on 13.03.16.
 */
$(document).ready(function() {

    senduser = getStoredValue("user1");
    reciveuser = getStoredValue("user2");

    users = {
        user1 : senduser,
        user2 : reciveuser
    };


    function appendUsers(data) {
        $.each( data, function( key, val ) {
            if(val.user1 == senduser) {
                $("tbody").append("<tr ><td align='left'>" + val.user1 + ': ' + val.text + "</td></tr>");
            }else{
                $("tbody").append("<tr ><td align='right'>" + val.user1 + ': ' + val.text + "</td></tr>");
            }
        });
    }

    $.getJSON( "ajax/chats.php", users, function( data ) {
        appendUsers(data);
    });

    setInterval(callInfos, 2000);

    function callInfos() {
        $("tbody").empty();

        appendUsers(data);
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
