/**
 * Created by getspeed on 12.03.16.
 */

$.getJSON( "ajax/users.php", function( data ) {
    $.each( data, function( key, val ) {
        $("tbody").append("<tr><td>" + val + "</td></tr>");
    });
});




