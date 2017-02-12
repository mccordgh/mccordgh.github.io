$( document ).ready(function() {
    $('#headshot').fadeIn(2000);
    $('#header--title').fadeIn(2000);

    $('.card').hover((event) => {
    	if ($(event.target).attr('class') !== 'card-action' && $(event.target).attr('class') !== 'card-content')
            $(event.currentTarget).css('box-shadow', '0 60px 60px #333');
    });

    $('.card').mouseleave((event) => {
    	$(event.target).css('box-shadow', ' 0 5px 15px #000');
    });
});
