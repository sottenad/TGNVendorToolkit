/*fof.js*/
jQuery.easing.def = "easeInOutCubic";


$(function(){
	
	

	var slideAnimationDuration = 600;
	var fofSlide = $('.fofSlider');
	var leftRegistrationPoints = ['0px','-1324px','-2648px','-3972px','-5296px','-6620px','-7944px','-9268px','-10592px','-11916px','-13240px'/*,'-14564px'*/];
	var slideIndex = 0;
	var myPlayer1 = _V_("video1");
	var myPlayer2 = _V_("video2");
	var content_path = "http://www.thegatesnotes.com/media/video/";	
	
	var logPlay = function(){
		var myPlayer = this;
		console.log(this);
	  // Do something when the event is fired	  
	  dcsMultiTrack('DCS.dcsuri', this.el.firstChild.currentSrc , 'WT.ti', 'Future of Food', 'WT.z_type', 'Video Play', 'WT.z_name', this.el.firstChild.currentSrc, 'WT.dl', '1');
	  
	  myPlayer1.removeEvent("play", logPlay);
	  myPlayer2.removeEvent("play", logPlay);	
	  myPlayer1.addEvent("loadedmetadata", logPlay);
	  myPlayer2.addEvent("loadedmetadata", logPlay);	
	  
	};

	myPlayer1.addEvent("play", logPlay);
	myPlayer2.addEvent("play", logPlay);	


	$('.next').live('click', function(){ nextSlide() });
	$('.prev').live('click', function(){ prevSlide() });
	$('.advance').live('click', function(){ nextSlide(); return false; });
	
	function nextSlide(){
		if(slideIndex < leftRegistrationPoints.length-1){
			slideIndex++;
			animateSlide(slideIndex);
		}
	}
	
	function prevSlide(){
		if(slideIndex > 0){
			slideIndex--;
			animateSlide(slideIndex);
		}
	}
	
	/*Twitter and FB Buttons*/
	$('.twitterShare').click(function(){
		openSharingSite('twitter', 'The Future of Food - The Gates Notes');
		return false;
	});
	$('.fbShare').click(function(){
		openSharingSite('facebook', 'The Future of Food - The Gates Notes');
		return false;
	});
	
	/*Go Home Button*/
	$('.home').click(function(){
		animateSlide(0);
		return false;
	});
	
	function animateSlide(num){
		$(fofSlide).animate({'left':leftRegistrationPoints[num]},slideAnimationDuration);
		slideIndex = num;
		/*Also Pause Videos*/
		myPlayer1.pause();
		myPlayer2.pause();
		
		/*Then Check Logic to show/hide Arrows*/
		if(slideIndex > 0){
			$('a.prev').show()
		}else{
			$('a.prev').hide();
		}
		
		if(slideIndex < leftRegistrationPoints.length-1){
			$('a.next').show()
		}else{
			$('a.next').hide();
		}
		
		dcsMultiTrack('DCS.dcssip', 'www.thegatesnotes.com', 'dcsuri','/features/future-of-food','WT.ti', 'Anchor: Slide Number '+num, 'WT.dl', '1');
		
		/*Change Hash*/
		//window.location.hash = '#'+slideIndex;
	}
	
	/*Find Hash and Navigate if needed*/
	
	if(window.location.hash) {
		var hash = window.location.hash.replace('#','');
		if( isNumber(hash) && hash > 0 && hash < leftRegistrationPoints.length){
			animateSlide(hash);
		}
	}
	
	
	/*Video Code - Slide 6*/
	$('.slide6 li a').live('click', function(){
		var mp4 = $(this).attr('data-video-mp4');
		var ogv = $(this).attr('data-video-ogv');
		
		$('.slide6 li').removeClass('selected');
		$(this).parent().addClass('selected');
		
		if( typeof(mp4)!='undefined' && typeof(ogv)!='undefined'){
			myPlayer1.ready(function() {
			  $("#video1_html5_api").hide();
			  myPlayer1.pause();
			  myPlayer1.src([
				{type: "video/mp4", src: content_path+mp4}, 
				{type: "video/ogv", src: content_path+ogv}
			  ]);
			  myPlayer1.load();
			  $("#video1_html5_api").show();
			  myPlayer1.play();
			});
			return false;
			return false;
		}else{
			//console.log('Please provide both urls');
		}
		
	});
	
	/*Video Code - Slide 11*/
	$('.slide11 li a').live('click', function(){
		var mp4 = $(this).attr('data-video-mp4');
		var ogv = $(this).attr('data-video-ogv');
		
		$('.slide11 li').removeClass('selected');
		$(this).parent().addClass('selected');
		
		if( typeof(mp4)!='undefined' && typeof(ogv)!='undefined'){			
			myPlayer2.ready(function() {
			  $("#video2_html5_api").hide();
			  myPlayer2.pause();
			  myPlayer2.src([
				{type: "video/mp4", src: content_path+mp4}, 
				{type: "video/ogv", src: content_path+ogv}
			  ]);
			  myPlayer2.load();
			  $("#video2_html5_api").show();
			  myPlayer2.play();
			  
			});

			return false;
			
		}else{
			//console.log('Please provide both urls');
		}
		
	});
	
	/*Q&A Code*/
	$('.slide7 li').click(function(){
		var slide = $(this).attr('data-slide');
		$('.slide7 div').removeClass('selected');
		$('#'+slide).addClass('selected');
		$('.slide7 li').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});
	
	/*Plate Code*/
	$('.slide8 img').eq(0).css('top','180px');
	$('.slide8 li').click(function(){
		$('.slide8 li').removeClass('selected');
		$(this).addClass('selected');
		var newPlate = $(this).attr('id');
		$('.slide8 img').animate({'top': '880px'},400);
		$('.slide8 img[data-plate="'+newPlate+'"]').animate({'top': '180px'},400);
		if(newPlate == "grain"){
			$('.slide8 .source span').html('EWG.org,<br>Beyond Meat<br>USDA ERS<br>US National Chicken Council')
		}else if(newPlate == 'co2'){
			$('.slide8 .source span').html('ucsusa.org')
		}else if(newPlate = 'land'){
			$('.slide8 .source span').html('ucsusa.org,<br />Beyond Meat')
		}
		
		return false;
	});
	
});


/*For Number Validation on the Hash*/
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
