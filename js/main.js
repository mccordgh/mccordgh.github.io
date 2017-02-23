let clickCounter = 0;
let dealWithIt = false;
let dealInterval = "";

$( document ).ready(function() {
	
	window.onscroll = () => {
		checkIsNotVisible( $('.page--header') );
	};

	$('#headshot').click((event) => {
		if ($(document).width() > 1008)
			whatsTheDeal();	
	});

	$('#dealGlasses').click((event) => {
		if ($(document).width() > 1008)
			whatsTheDeal();	
	});

});

function dealWithItYo(){
	$('#headshot').attr('src', "img/matt_goof.jpg");
	dealInterval = setInterval(pullDownTheShades, 50);	// }
}

function unDealWithItYo(){
	dealInterval = setInterval(pullUpTheBeat, 50);	// }
}

function pullDownTheShades() {
	currentTop = $('#dealGlasses').css('top');
	setTop = parseInt(currentTop) + 2;
	$("#dealGlasses").css({ top: setTop + 'px' });
	if (setTop > 118) {
		clearInterval(dealInterval);
	}
}

function pullUpTheBeat() {
	currentTop = $('#dealGlasses').css('top');
	setTop = parseInt(currentTop) - 2;
	$("#dealGlasses").css({ top: setTop + 'px' });
	if (setTop < -54) {
		$('#headshot').attr('src', "img/matt_close_beanie.jpg");
		clearInterval(dealInterval);
	}
}

function checkIsNotVisible(element){
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	let d = $(document).scrollTop() + 500;
	
  p = element.position();
  //vertical
  if (p.top > h + d || p.top > h - d){
  	$('#dealGlasses').addClass('hidden');
  } else {
  	$('#dealGlasses').removeClass('hidden');  	
  }

}

function whatsTheDeal() {
	clickCounter += 1;

	if (clickCounter > 2) {
		if (!dealWithIt) {
			dealWithIt = true;
			clickCounter = 0;
			clearInterval(dealInterval);
			dealWithItYo();
		} else {
			dealWithIt = false;
			clickCounter = 0;
			clearInterval(dealInterval);
			unDealWithItYo();
		}
	}
}