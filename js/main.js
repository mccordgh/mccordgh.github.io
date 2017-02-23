let clickCounter = 0;
let dealWithIt = false;
let dealInterval = "";

$( document ).ready(function() {
	
	$('#headshot').click((event) => {
	
		clickCounter += 1;

		if (clickCounter > 2) {
			if (!dealWithIt) {
				clickCounter = 0;
				dealWithItYo();
				dealWithIt = true;
			} else {
				dealWithIt = false;
				clickCounter = 0;
				unDealWithItYo();
			}
		}
	
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