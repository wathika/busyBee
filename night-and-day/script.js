$(document).ready( function(){
    
    $("#orb").click( function(){
        if ($("#orb").hasClass("sun")) {
            $("#orb").removeClass("sun").addClass("moon");
        } else {
            $("#orb").removeClass("moon").addClass("sun");
        }
    });
    
    $("#sky").click( function(){
        if ($("#sky").hasClass("day")) {
            $("#sky").removeClass("day").addClass("night");
        } else {
            $("#sky").removeClass("night").addClass("day");
        }
    });
});