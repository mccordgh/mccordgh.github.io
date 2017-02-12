$( document ).ready(function() {
    $('#headshot').fadeIn(2000);
    $('#header--title').fadeIn(2000);

    $('.card').hover((event) => {
    	if ($(event.target).attr('class') !== 'card-action' && $(event.target).attr('class') !== 'card-content') {
    		$(event.target).css('box-shadow', '0 75px 75px #000');
    	}
    });

    $('.card').mouseleave((event) => {
    	$(event.target).css('box-shadow', ' 0 5px 15px #000');
    });
});