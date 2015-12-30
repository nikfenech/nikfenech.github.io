/*
Code taken and modified from this Stack Overflow discussion:
http://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
*/

$(document).ready(function(){
    $('#ghost').hover(function(){
		animateDiv();
    });
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('#cont').animate({ top: newq[0], left: newq[1] }, function(){
    });
    
};
