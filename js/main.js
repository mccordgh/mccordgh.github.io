let dealWithIt = false;
let dealInterval = "";
let dealMin = 0;
let dealMax = 0;
let dealLeft = 0;

let dealGlassesEl = $('#dealGlasses');
let headShot = $('#headshot');
let dtfImg = $('#dtf_img');
let chattyImg = $('#chatty_img');
let bangCliImg = $('#bangazon_cli_img');
let bangApiImg = $('#bangazon_api_img');
let battleBotsImg = $('#battle_bots_img');
let toyImg = $('#toy_img');
let wavesImg = $('#waves_img');

let dtfFlag = false;
let bangApiFlag = false;
let bangCliFlag = false;
let chattyFlag = false;
let battleBotsFlag = false;
let toyFlag = false;
let wavesFlag = false;

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
	});

	wavesImg.click((event) => {
		if (wavesFlag){
			wavesImg.attr('src', '/img/waves87_sm.png');
			wavesFlag = false;
		} else {
			wavesImg.attr('src', '/img/waves87.png');
			wavesFlag = true;
		}
	});

	bangApiImg.click((event) => {
		if (bangApiFlag){
			bangApiImg.attr('src', '/img/bangazon_api_sm.png');
			bangApiFlag = false;
		} else {
			bangApiImg.attr('src', '/img/bangazon_api.png');
			bangApiFlag = true;
		}
	});

	bangCliImg.click((event) => {
		if (bangCliFlag){
			bangCliImg.attr('src', '/img/bangazon_cli_sm.png');
			bangCliFlag = false;
		} else {
			bangCliImg.attr('src', '/img/bangazon_cli.png');
			bangCliFlag = true;
		}
	});

	battleBotsImg.click((event) => {
		if (battleBotsFlag){
			battleBotsImg.attr('src', '/img/battle_bots_sm.png');
			battleBotsFlag = false;
		} else {
			battleBotsImg.attr('src', '/img/battle_bots.png');
			battleBotsFlag = true;
		}
	});

	dtfImg.click((event) => {
		if (dtfFlag){
			dtfImg.attr('src', '/img/DTF_screenshot_sm.png');
			dtfFlag = false;
		} else {
			dtfImg.attr('src', '/img/DTF_screenshot.png');
			dtfFlag = true;
		}
	});

	chattyImg.click((event) => {
		if (chattyFlag){
			chattyImg.attr('src', '/img/chatty_sm.png');
			chattyFlag = false;
		} else {
			chattyImg.attr('src', '/img/chatty.png');
			chattyFlag = true;
		}
	});

	headShot.on('tap click', (event) => {
		whatsTheDeal();	
	});

	dealGlassesEl.on('tap click', (event) => {
		whatsTheDeal();	
	});

});

function dealWithItYo(){
	headShot.attr('src', "img/matt_goof.jpg");
	dealInterval = setInterval(pullDownTheShades, 1);
}

function unDealWithItYo(){
	dealInterval = setInterval(pullUpTheBeat, 1);
}

function pullDownTheShades() {
	currentTop = dealGlassesEl.css('top');
	setTop = parseInt(currentTop) + 2;
	dealGlassesEl.css({ top: setTop + 'px' });
	if (setTop > 146) {
		clearInterval(dealInterval);
	}
}

function pullUpTheBeat() {
	currentTop = dealGlassesEl.css('top');
	setTop = parseInt(currentTop) - 2;
	dealGlassesEl.css({ top: setTop + 'px' });
	if (setTop < -54) {
		headShot.attr('src', "img/matt_is_cool.jpg");
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
	if (!dealWithIt) {
		dealWithIt = true;
		clearInterval(dealInterval);
		dealWithItYo();
	} else {
		dealWithIt = false;
		clearInterval(dealInterval);
		unDealWithItYo();
	}
}