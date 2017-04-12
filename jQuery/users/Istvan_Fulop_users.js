$(document).ready(function(){
    $("form").submit(function(){
        return false;
    });
    $("form").submit(function(){
        $("tbody").append("<tr><td>"+$("#first_name").val()+"</td><td>"+$("#first_name").val()+"</td><td>"+$("#first_name").val()+"</td><td>"+$("#first_name").val()+"</td></tr>");
    });

});
