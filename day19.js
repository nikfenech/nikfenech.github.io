$(document).ready(function(){
$('.gallerythumb').mouseover(function(){
    $(this).css('width', '100%');
    $(this).css('height', '100%');
})
$('.gallerythumb').mouseout(function(){
    $(this).css('width', '240');
    $(this).css('height', '160');
})
});
	
