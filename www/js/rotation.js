$(window).on("orientationchange",preventLandscape);
$(preventLandscape);

function preventLandscape(){
    var isLandscape = $(window).height() < $(window).width();
    var isMobile = $(window).width() <= 760;
    if(isLandscape && isMobile){
        $('body > *').hide();
        $('body').append('<p class="rotate-mess">Rotera tillbaka, please!</p>');
    }
    else {
        $('body > *').show();
        $('.rotate-mess').remove();
    }
}
