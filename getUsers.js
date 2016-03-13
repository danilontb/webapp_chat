/**
 * Created by getspeed on 12.03.16.
 */

$.getJSON( "ajax/users.php", function( data ) {
    $.each( data, function( key, val ) {
        $("tbody").append("<tr onclick='getRowInformation(this)'><td>" + val + "</td></tr>");
    });
});




