let dealWithIt = false;
let dealInterval = "";
let dealMin = 0;
let dealMax = 0;
let dealLeft = 0;

let dealGlassesEl = $('#dealGlasses');
let headShot = $('#headshot');
let dtfImg = $('#dtf_img');
let MMiImg = $('#MMi_img');
let bangCliImg = $('#bangazon_cli_img');
let battleBotsImg = $('#battle_bots_img');
let wavesImg = $('#waves_img');
let toDontClientImg = $('#to_dont_client_img');
let toDontApiImg = $('#to_dont_api_img');

let MMiFlag = false;
let dtfFlag = false;
let bangCliFlag = false;
let battleBotsFlag = false;
let wavesFlag = false;
let toDontClientFlag = false;
let toDontApiFlag = false;

$( document ).ready(function() {

	window.onscroll = () => {
		checkIsNotVisible( $('.page--header') );
	};

	MMiImg.click((event) => {
		if (MMiFlag){
			MMiImg.attr('src', '/img/MMi_screenshot_sm.png');
			MMiFlag = false;
		} else {
			MMiImg.attr('src', '/img/MMi_screenshot.png');
			MMiFlag = true;
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

	toDontClientImg.click((event) => {
		if (toDontClientFlag){
			toDontClientImg.attr('src', '/img/to_dont_list_client_sm.png');
			toDontClientFlag = false;
		} else {
			toDontClientImg.attr('src', '/img/to_dont_list_client.png');
			toDontClientFlag = true;
		}
	});

	toDontApiImg.click((event) => {
		if (toDontApiFlag){
			toDontApiImg.attr('src', '/img/to_dont_list_api_sm.png');
			toDontApiFlag = false;
		} else {
			toDontApiImg.attr('src', '/img/to_dont_list_api.png');
			toDontApiFlag = true;
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
	dealInterval = setInterval(pullDownTheShades, 35);
}

function unDealWithItYo(){
	dealInterval = setInterval(pullUpTheBeat, 35);
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
		headShot.attr('src', "img/matt_is_beard.jpg");
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
