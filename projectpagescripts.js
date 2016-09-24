

var telescope = true;

var lastCurrentProject = -1

var changeSidebar = function() {

    var projectCount = $('.mainproject').length;

    var currentProject = 0
    var currentSection = 1

    var i = 0
    
    var j = 0

    for (i = 0; i < projectCount; i++){
        if ($('.mainproject').eq(i).offset().top - $(window).scrollTop() < 70) {
            currentProject = i
            
            currentSection = 1
            
            for (j = 1; j < $('.mainproject').eq(i).children().size(); j++) {
                if ($('.mainproject').eq(i).children().eq(j).offset().top - $(window).scrollTop() < 70) {
                    currentSection = j;
                }
                
                $('.projectlistitem').eq(i).find('.projectcatlistother').eq(j - 1).removeClass("projectcatlistselected")
            }
            
        } else {
            break;
        }
    }
    
    $('.projectlistitem').eq(currentProject).find('.projectcatlistother').eq(currentSection - 1).addClass("projectcatlistselected")
    
    console.log(currentSection)

    if ($(window).scrollTop() + $(window).innerHeight() >= $('#mainpart').height() + 300) {
        currentProject = projectCount - 1
    }

    $('#infopartouter').css('height', ($(window).innerHeight() - 0) + "px");


    if (currentProject != lastCurrentProject) {


        $('.projectcatlist').eq(currentProject).slideDown(100);
        $('.projectcatlist').eq(lastCurrentProject).slideUp(100);

        $('.projectlistitem').eq(currentProject).find('.projectlistname').addClass('projectlistnameselected')
        $('.projectlistitem').eq(lastCurrentProject).find('.projectlistname').removeClass('projectlistnameselected')

        lastCurrentProject = currentProject

        $('#infopart').html('<div id="projectinfoname"><p></p></div>')

        var infoSectionTitleA = '<div class="projectdatatitle"><p>'
        var infoSectionTitleB = '</p></div>'
        var infoSectionBodyA = '<div class="projectdata"><div class="projectdatainside">'
        var infoSectionBodyB = '</div></div>'

        var linkBlock = '<div class="linkblock">'



        $('#projectinfoname p').html(contentArr[currentProject][0] + " Resources")

        if (contentArr[currentProject][4].length > 0) {

            $('#infopart').append(infoSectionTitleA + "Repository Links" + infoSectionTitleB)


            var infoSectionToAdd = infoSectionBodyA

            for (i = 0; i < contentArr[currentProject][4].length; i++) {

                // infoSectionToAdd += contentArr[currentProject][4][i][0]

                infoSectionToAdd += '<a href="'
                infoSectionToAdd += contentArr[currentProject][4][i][2]
                infoSectionToAdd += '"><div class="linkblock"><img src="/images/github_logo.png" alt="'
                infoSectionToAdd += contentArr[currentProject][4][i][1]
                infoSectionToAdd += '"><p>'
                infoSectionToAdd += contentArr[currentProject][4][i][0]
                infoSectionToAdd += '</p></div></a>'
            }

            infoSectionToAdd += infoSectionBodyB

            $('#infopart').append(infoSectionToAdd)
        }

        if (contentArr[currentProject][5].length > 0) {

            $('#infopart').append(infoSectionTitleA + "File Downloads" + infoSectionTitleB)


            var infoSectionToAdd = infoSectionBodyA

            for (i = 0; i < contentArr[currentProject][5].length; i++) {

                // infoSectionToAdd += contentArr[currentProject][4][i][0]

                infoSectionToAdd += '<a href="'
                infoSectionToAdd += contentArr[currentProject][5][i][2]
                infoSectionToAdd += '"><div class="linkblock"><img src="'
                infoSectionToAdd += contentArr[currentProject][5][i][3]
                infoSectionToAdd += '" alt="'
                infoSectionToAdd += contentArr[currentProject][5][i][1]
                infoSectionToAdd += '"><p>'
                infoSectionToAdd += contentArr[currentProject][5][i][0]
                infoSectionToAdd += '</p></div></a>'
            }

            infoSectionToAdd += infoSectionBodyB

            $('#infopart').append(infoSectionToAdd)
        }

        if (contentArr[currentProject][6].length > 0) {



            $('#infopart').append(infoSectionTitleA + "Collaborators" + infoSectionTitleB)


            var infoSectionToAdd = infoSectionBodyA

            for (i = 0; i < contentArr[currentProject][6].length; i++) {

                // infoSectionToAdd += contentArr[currentProject][4][i][0]

                if (contentArr[currentProject][6][i][2] != "none") {

                    infoSectionToAdd += '<a href="'
                    infoSectionToAdd += contentArr[currentProject][6][i][2]
                    infoSectionToAdd += '"><div class="linkblock"><img src="'
                    infoSectionToAdd += contentArr[currentProject][6][i][3]
                    infoSectionToAdd += '" alt="'
                    infoSectionToAdd += contentArr[currentProject][6][i][1]
                    infoSectionToAdd += '"><p>'
                    infoSectionToAdd += contentArr[currentProject][6][i][0]
                    infoSectionToAdd += '</p></div></a>'

                } else {

                    infoSectionToAdd += '<div class="otherblock"><img src="'
                    infoSectionToAdd += contentArr[currentProject][6][i][3]
                    infoSectionToAdd += '" alt="'
                    infoSectionToAdd += contentArr[currentProject][6][i][1]
                    infoSectionToAdd += '"><p>'
                    infoSectionToAdd += contentArr[currentProject][6][i][0]
                    infoSectionToAdd += '</p></div>'

                }
            }

            infoSectionToAdd += infoSectionBodyB

            $('#infopart').append(infoSectionToAdd)


        }

        if (contentArr[currentProject][7].length > 0) {

            $('#infopart').append(infoSectionTitleA + "Technologies" + infoSectionTitleB)


            var infoSectionToAdd = infoSectionBodyA

            for (i = 0; i < contentArr[currentProject][7].length; i++) {

                // infoSectionToAdd += contentArr[currentProject][4][i][0]

                infoSectionToAdd += '<a href="'
                infoSectionToAdd += contentArr[currentProject][7][i][2]
                infoSectionToAdd += '"><div class="linkblock"><img src="'
                infoSectionToAdd += contentArr[currentProject][7][i][3]
                infoSectionToAdd += '" alt="'
                infoSectionToAdd += contentArr[currentProject][7][i][1]
                infoSectionToAdd += '"><p>'
                infoSectionToAdd += contentArr[currentProject][7][i][0]
                infoSectionToAdd += '</p></div></a>'
            }

            infoSectionToAdd += infoSectionBodyB

            $('#infopart').append(infoSectionToAdd)
        }



    }

}


var changeTopbar = function() {


    if ($(window).scrollTop() < 200 && telescope) {

        $('#maintopbar').css('height', (245 - $(window).scrollTop()) + "px");

        $('#maintopbarbg').css('height', (245 - $(window).scrollTop()) + "px");

        $('#sidebar').css('margin-top', (235 - $(window).scrollTop()) + "px")

        $('#infopart').css('margin-top', (250 - $(window).scrollTop()) + "px")

        $('#sitename').css('margin-top', (104 - $(window).scrollTop() / 2.03) + "px");

        $('#sitename').css('margin-left', (0.5 * $(container).width() - 149) * (1 - $(window).scrollTop() / 200) + "px");



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

$(window).scroll(changeSidebar);
$(window).scroll(changeTopbar);

$(window).resize(changeSidebar);




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



var inPageLink = function(ev) {

    var el = this;

    if ($(el).hasClass("projectlistname")) {
        var projectNumber = $(el).parent().index();

        var runningHeight = 200
        var i = 0;

        for (i = 0; i < projectNumber; i++){
            runningHeight += $('#projectsmainlist').children().eq(i).height() + 1;
        }

        //console.log("runningHeight: " + runningHeight);

        $("html, body").animate({ scrollTop: runningHeight }, 200, "swing");

    } else {
        var projectNumber = $(el).parent().parent().index();
        var sectionNumber = $(el).index()
        console.log($(el))

        var runningHeight = 260;
        var i = 0;

        for (i = 0; i < projectNumber; i++){
            runningHeight += $('#projectsmainlist').children().eq(i).height() + 1;
        }

        var j = 0;

        for (j = 0; j < sectionNumber; j++){
            runningHeight += $('#projectsmainlist').children().eq(projectNumber).find('.projectpart').eq(j).height();
        }

        //console.log("runningHeight: " + runningHeight);

        $("html, body").animate({scrollTop: runningHeight}, 200, "swing");
    }
}






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

    if ($(window).width() <= 700) {



        $('#container').width(700)
        $('#maintopbar').width(700)
        $('#mainpart').width(694)

        telescope = false

        $('#codejoke').hide()
        $('#sidebar').hide()
        $('#infopart').hide()

        $('#mainpart').css('margin-top', '50px')
        $('#mainpart').css('margin-left', '3px')
        //$('#sidebarbg').width(0)

    } else if ($(window).width() <= 950) {

        $('#container').width($(window).width())
        $('#maintopbar').width($(window).width())
        $('#mainpart').width($('#container').width() * 0.7 - 205)

        telescope = false

        $('#codejoke').hide()
        $('#sidebar').show()
        $('#infopart').show()

        $('#mainpart').css('margin-top', '50px')
        $('#mainpart').css('margin-left', '186px')


    } else {

        $('#codejoke').css('left', ($(window).width() - 950) / 2 + 'px')

        //$('#sidebarbg').height($('#mainpart').height() + 245)

        $('#container').width($(window).width())
        $('#maintopbar').width($(window).width())
        $('#mainpart').width($('#container').width() * 0.7 - 205)

        telescope = true

        $('#codejoke').show()
        $('#sidebar').show()
        $('#infopart').show()

        $('#mainpart').css('margin-top', '250px')
        $('#mainpart').css('margin-left', '186px')
        //$('#sidebarbg').css('width', '10px')
    }

    changeTopbar();
}



$(window).resize(adjustWidth);



var sideMainHTML = '<li class="projectlistitem"><p class="projectlistname sidebutton"><span class="projectpointer"></span><span class="projectlabel">Project A</span></p><ul class="projectcatlist" hidden></ul></li>';

var sideSubHTML = '<li class="projectcatlistother sidebutton"><span class="subprojectpointer"></span><p></p></li>'

var centreMainHTML = '<li class="mainproject"><div class="projectname"><p>Project A</p></div></li>'

var centreSubHTML = '<div class="projectpart"><div class="projectsubtitle"><p>Section One</p></div><div class="projectcontent"></div></div>'

var centreLabel = ['<div class="projecttypelabel labelweb"></div>','<div class="projecttypelabel labelmobile"></div>','<div class="projecttypelabel labelpc"></div>','<div class="projecttypelabel labelem"></div>']


var filterChecks = [true, true, true, true]

var filterText = true

var updateFilters = function() {
    var i = 0
    var onCounter = 0
    for (i = 0; i < 4; i++) {
        filterChecks[i] = $('.catfilter input').eq(i).prop('checked')
        
        if (filterChecks[i]) {
            onCounter++
        }
        
    }
    populate(onCounter)

}

$('.catfilter').click(updateFilters);

var populate = function(onCounter) {

    $('#projectsmainlist').html("")
    $('#projectlist').html("")

    var i = 0;
    var iTwo = 0;

    for (i = 0; i < contentArr.length; i++) {

        var checkAllowed = false
        var textAllowed = false

        var j = 0

        for (j = 0; j < 4; j++) {
            if (filterChecks[j] && contentArr[i][1][j]) {
                checkAllowed = true
                j = 4
            }
        }
        
        if (onCounter === 0) {
            checkAllowed = true
        }


        textAllowed = true


        if (checkAllowed && textAllowed) {

            $('#projectsmainlist').append(centreMainHTML)

            for (j = 3; j >= 0; j--) {
                if (contentArr[i][1][j]) {
                    $('#projectsmainlist .projectname').eq(iTwo).append(centreLabel[j])
                }
            }

            $('#projectsmainlist').children().eq(iTwo).find('p').html(contentArr[i][0])

            for (j = 0; j < contentArr[i][3].length; j++) {
                $('#projectsmainlist').children().eq(iTwo).append(centreSubHTML)
                $('#projectsmainlist').children().eq(iTwo).find('.projectsubtitle p').eq(j).html(contentArr[i][3][j][0])
                $('#projectsmainlist').children().eq(iTwo).find('.projectcontent').eq(j).html(contentArr[i][3][j][1])
            }


            $('#projectlist').append(sideMainHTML)

            $('#projectlist').children().eq(iTwo).find('.projectlabel').html(contentArr[i][0])

            var subSections = $('#projectsmainlist').children().eq(iTwo).find('.projectsubtitle p')

            for (j = 0; j < subSections.length; j++) {
                $('#projectlist').children().eq(iTwo).find('ul').append(sideSubHTML)
                $('#projectlist').children().eq(iTwo).find('ul').children().eq(j).find('p').html($(subSections).eq(j).html())
            }

            iTwo++

        }


    }
    changeSidebar()
    changeTopbar()
    resizeVideo();
    $('.sidebutton').click(inPageLink);
    $('.projectlistitem').hover(lower, raise);
}

populate()
adjustWidth();
adjustWidth();