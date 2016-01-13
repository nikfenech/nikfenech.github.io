$( document ).ready(function() {
	/*
	$('.block').click( function(){
	  $('.block').toggleClass("hidden");
	  $(this).toggleClass("hidden").toggleClass('expanded');
		$(this).find('.expContent').toggleClass("visible");
	});
	*/
	
	$('.block').click( function(){
	  
	  if( !this.tl ){
		this.tl = new TimelineMax( { paused:true, onReverseComplete:function(){$('.block').removeClass('expanded');} } );
		this.tl.to( $('.block').not(this) , .15 , {autoAlpha: 0} );
		this.tl.to( $('.splash').not(this) , .15 , {autoAlpha: 0} );	
		this.tl.to( $(this) , .25 , {width:"100%",height:"100%",left:0,top:0,rotate:.01} );
		this.tl.to( $(this).find('.expContent') , .25 , {autoAlpha:1} );
	  }
	  
	  if( !$(this).hasClass('expanded') ){
		$(this).addClass('expanded');
		this.tl.play();
	  }else{    
		this.tl.reverse();
	  }
	  
	});	
	
	$('.splash').click( function(){
	  
	  if( !this.tl ){
		this.tl = new TimelineMax( { paused:true, onReverseComplete:function(){$('.splash').removeClass('retracted');} } );
		this.tl.to( $(this) , .25 , {width:"33.3%",height:"50%",left:0,top:0,rotate:.01} );
		this.tl.to( $(this).find('.splContent') , .25 , {autoAlpha:0} );
	  }
	  
	  if( !$(this).hasClass('retracted') ){
		$(this).addClass('retracted');
		this.tl.play();
	  }else{    
		this.tl.reverse();
	  }
	  
	});	
		
});