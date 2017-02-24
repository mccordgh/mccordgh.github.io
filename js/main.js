let clickCounter = 0;
let dealWithIt = false;
let dealInterval = "";

let dealGlassesEl = $('#dealGlasses');
let headShot = $('#headshot');
let dtfImg = $('#dtf_img');
let chattyImg = $('#chatty_img');
let battleBotsImg = $('#battle_bots_img');
let toyImg = $('#toy_img');

let dtfFlag = false;
let chattyFlag = false;
let battleBotsFlag = false;
let toyFlag = false;

$( document ).ready(function() {
	
	window.onscroll = () => {
		checkIsNotVisible( $('.page--header') );
	};

	toyImg.click((event) => {
		if (toyFlag){
			toyImg.attr('src', '/img/toy_factory_sm.png');
			toyFlag = false;
		} else {
			toyImg.attr('src', '/img/toy_factory.png');
			toyFlag = true;
		}
	})

	battleBotsImg.click((event) => {
		if (battleBotsFlag){
			battleBotsImg.attr('src', '/img/battle_bots_sm.png');
			battleBotsFlag = false;
		} else {
			battleBotsImg.attr('src', '/img/battle_bots.png');
			battleBotsFlag = true;
		}
	})

	dtfImg.click((event) => {
		if (dtfFlag){
			dtfImg.attr('src', '/img/DTF_screenshot_sm.png');
			dtfFlag = false;
		} else {
			dtfImg.attr('src', '/img/DTF_screenshot.png');
			dtfFlag = true;
		}
	})

	chattyImg.click((event) => {
		if (chattyFlag){
			chattyImg.attr('src', '/img/chatty_sm.png');
			chattyFlag = false;
		} else {
			chattyImg.attr('src', '/img/chatty.png');
			chattyFlag = true;
		}
	})

	headShot.click((event) => {
		if ($(document).width() > 1008)
			whatsTheDeal();	
	});

	dealGlassesEl.click((event) => {
		if ($(document).width() > 1008)
			whatsTheDeal();	
	});

});

function dealWithItYo(){
	headShot.attr('src', "img/matt_goof.jpg");
	dealInterval = setInterval(pullDownTheShades, 50);	// }
}

function unDealWithItYo(){
	dealInterval = setInterval(pullUpTheBeat, 50);	// }
}

function pullDownTheShades() {
	currentTop = dealGlassesEl.css('top');
	setTop = parseInt(currentTop) + 2;
	dealGlassesEl.css({ top: setTop + 'px' });
	if (setTop > 118) {
		clearInterval(dealInterval);
	}
}

function pullUpTheBeat() {
	currentTop = dealGlassesEl.css('top');
	setTop = parseInt(currentTop) - 2;
	dealGlassesEl.css({ top: setTop + 'px' });
	if (setTop < -54) {
		headShot.attr('src', "img/matt_close_beanie.jpg");
		clearInterval(dealInterval);
	}
}

function checkIsNotVisible(element){
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let d = $(document).scrollTop() + 500;
	
  p = element.position();
  //vertical
  if (p.top > h + d || p.top > h - d){
  	dealGlassesEl.addClass('hidden');
  } else {
  	dealGlassesEl.removeClass('hidden');  	
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