
var changeTopbar = function() {


    if ($(window).scrollTop() < 200 && telescope) {

        $('#maintopbar').css('height', (245 - $(window).scrollTop()) + "px");

        $('#maintopbarbg').css('height', (245 - $(window).scrollTop()) + "px");

        $('#sidebar').css('margin-top', (235 - $(window).scrollTop()) + "px")

        $('#infopart').css('margin-top', (250 - $(window).scrollTop()) + "px")

        $('#sitename').css('margin-top', (104 - $(window).scrollTop() / 2.03) + "px");

        $('#sitename').css('margin-left', (0.5 * $(container).width() - 337) * (1 - $(window).scrollTop() / 200) + "px");



    } else {

        $('#maintopbar').css('height', "45px");
        $('#maintopbarbg').css('height', "45px");

        $('#sidebar').css('margin-top', "35px")
        $('#infopart').css('margin-top', "50px")

        $('#sitename').css('margin-top', "6px");

        $('#sitename').css('margin-left', "0px");

    }

    $('#codejoke').css('margin-top', (0.5 * (255 - $(window).scrollTop()) - 108));
    $('#codejoke').css('opacity', 1 - $(window).scrollTop() / 200)
}

$(window).scroll(changeTopbar);




var resizeVideo = function() {      
    $('.video').each(function(index, el){
        $(this).css('width', '100%');
        $(this).css('height', ($(this).width() * 9 / 16));
    })
    $('.videovert').each(function(index, el){
        $(this).css('width', '100%');
        $(this).css('height', ($(this).width() * 0.6));
        $(this).css('width', ($(this).height() * 0.7));
        $(this).css('margin-left', ($(this).parent().width() - 20 - $(this).width()) * 0.5);
    })
}

resizeVideo();

$(window).resize(resizeVideo);



var lower = function(){
    $(this).children().eq(1).slideDown(100)
}

var raise = function(){

    //if ($(this).index())

    if ($(this).index() != lastCurrentProject) {
        $(this).children().eq(1).slideUp(100)
    }
}



var adjustWidth = function() {
    //$('#container').css('width', $(window).width() + 'px')

    //$('#sidebarbg').height($('#mainpart').height() + 45)

    //$('.resumebutton').height(($('.resumebutton').parent().height() - 126) / 2)

    $('#resumebuttoncontents').css('margin-top', "0px")
    $('#resumebuttoncontents').css('margin-bottom', "0px")

    $('#resumebuttoncontents').css('margin-top', ( ($('.resumebutton').parent().height() - 160) / 2 + "px"))
    $('#resumebuttoncontents').css('margin-bottom', ( ($('.resumebutton').parent().height() - 160) / 2 + "px"))

    if ($(window).width() <= 600) {



        $('#container').width(600)
        $('#maintopbar').width(600)
        $('.mainpartsection').width(590)

        telescope = false

        $('#codejoke').hide()
        $('#sidebar').hide()
        $('#infopart').hide()

        $('#mainpart').css('margin-top', '50px')
        $('#mainpart').css('margin-left', '5px')
        //$('#sidebarbg').width(0)

        $('#resumecontainer').width(570)

    } else if ($(window).width() <= 850) {

        $('#container').width($(window).width())
        $('#maintopbar').width($(window).width())
        $('.mainpartsection').width($('#container').width() - 10)

        telescope = false

        $('#resumecontainer').width(570 + 23 * ($(window).width() - 600) / 25)

        $('#codejoke').hide()
        $('#sidebar').show()
        $('#infopart').show()

        $('#mainpart').css('margin-top', '50px')
        $('#mainpart').css('margin-left', '5px')


    } else {

        $('#codejoke').css('left', ($(window).width() - 950) / 2 + 'px')

        $('#container').width($(window).width())
        $('#maintopbar').width($(window).width())
        $('.mainpartsection').width(Math.min($('#container').width() - 10, 1190))

        telescope = true

        $('#resumecontainer').width(800)


        $('#codejoke').show()
        $('#sidebar').show()
        $('#infopart').show()

        $('#mainpart').css('margin-top', '250px')

        if ($('#container').width() < 1200) {
            $('#mainpart').css('margin-left', '5px')
        } else {
            $('#mainpart').css('margin-left', ($('#container').width() - 1210) / 2 + 'px')
        }


    }

    $('.techcontainer').width($('.mainpartsection').width() * 0.7)
    $('.techbubble').width($('.mainpartsection').width() * 0.15)
    $('.techbubble').height($('.mainpartsection').width() * 0.15 + 15)
    $('.techbubble div').css("bottom", $('.techbubble').height() + 5 + "px")

    changeTopbar();
}

$('.techbubble').hover(function() {
    $(this).parent().find('.techbubblebullets').addClass('techbubblebulletshover')
    $(this).parent().find('.techbubblebullets').width($(this).width() * 1.2 + 60)
    $(this).parent().find('.techbubblebullets').css("margin-left", ($(this).width() * -0.1 - 30) + "px")
    $(this).parent().find('.techbubblebullets').css("bottom", ($(this).height() + 8) + "px")
}, function() {
    $(this).parent().find('.techbubblebullets').removeClass('techbubblebulletshover')
    $(this).parent().find('.techbubblebullets').css("bottom", "10000px")
}
)



$(window).resize(adjustWidth);

adjustWidth();
adjustWidth();
