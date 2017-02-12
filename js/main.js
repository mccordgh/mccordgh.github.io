$( document ).ready(function() {
    $('#headshot').fadeIn(2000);
    $('#header--title').fadeIn(2000);

    $('.card').hover((event) => {
    	console.log(event.currentTarget);
	    $(event.currentTarget).css('box-shadow', '0 15px 15px #333');
	    $(event.currentTarget).css('border-radius', '20px');
    });

    $('.card').mouseleave((event) => {
    	let cards = $('.card');
    	cards.each((item) => {
    		$(cards[item]).css('box-shadow', '0 5px 15px #000');
	 	 		$(event.currentTarget).css('border-radius', '10px');
    	});
    });
});
