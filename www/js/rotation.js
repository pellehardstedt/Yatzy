$(window).on("orientationchange",preventLandscape);
$(preventLandscape);

function preventLandscape(){
    var isLandscape = $(window).height() < $(window).width();
    if(isLandscape){
        $('body > *').hide();
        $('body').append('<p class="rotate-mess">Rotera tillbaka, please!</p>');
    }
    else {
        $('body > *').show();
        $('.rotate-mess').remove();
    }
    //$('body').attr('style', 'margin-top:50%;transform: rotate(' + degrees + 'deg)');
}
