$(document).ready(function(){
    $(".flip").click(function(){
       $(this).siblings('.panel').slideToggle("slow");
    });
});
