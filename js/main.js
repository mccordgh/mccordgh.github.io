$( document ).ready(function() {
    $('.card').hover((event) => {
	    $(event.currentTarget).css('box-shadow', '0 15px 15px #333');
    });

    $('.card').mouseleave((event) => {
    	let cards = $('.card');
    	cards.each((item) => {
    		$(cards[item]).css('box-shadow', '0 5px 15px #000');
    	});
    });
});
