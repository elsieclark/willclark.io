<!doctype html>

<?php

$link = mysqli_connect('localhost', 'REDACTED', 'REDACTED', 'REDACTED');


$query = "SELECT * FROM poems";

$poemData = '[';

if ($result = mysqli_query($link, $query)) {

    while($row = mysqli_fetch_array($result)) {
        
        $poemData .= '["';
        
        $poemData .= $row[1];
        
        $poemData .= '","';
            
        $poemData .= $row[2];
        
        $poemData .= '","';
        
        $poemData .= $row[3];
        
        $poemData .= '"],';
        
    } 
    $poemData .= ']';
    
}

?>


<html>
<head>
    
    <title>Will Clark's Projects</title>
    
    <script src="https://use.typekit.net/kzi5zhm.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500" rel="stylesheet">
    
    <link href="//db.onlinewebfonts.com/c/9f94dc20bb2a09c15241d3a880b7ad01?family=Menlo" rel="stylesheet" type="text/css"/>
    
    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link rel="stylesheet" type="text/css" href="/stylesheets/404_style_01.css">
    

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    <script>
        var poemData = <?php echo $poemData; ?>;
        var poemNumb = Math.floor(Math.random() * poemData.length)
    </script>
    
</head>
    
    
<body>
    <div id="container">
        
        <div id="maintopbar">
            
            <ul>
                <li class="maintopbarotherpage"><a href="/projects"><p>Projects</p></a></li>
                <li class="maintopbarotherpage"><a href="/"><p>About</p></a></li>
            </ul>
            
            <a href="http://willclark.io/"><p id="sitename">Will_Clark</p></a>
            
            
            
        </div> <!-- 'maintopbar' ends -->
        
        <div id="sidebarbg"></div>

        
        <div id="mainpart">
            <div id="mainpartinner">
            
                <div class="mainparttitle"><p>Oops! You've 404'd</p></div>
                <div class="mainpartcontent">
                    <p>
                        This means that the page you are looking for does not exist, at least not at this address. Either the page has been deleted (I hope not, because I try very hard to prevent this), or it never existed in the first place.
                    </p>
                    <p>
                        I apologise for the inconvenience.
                    </p>
                    <p>
                        However, I never want to let it be said that I can't make the most of a bad situation; so for your reading pleasure, I've included here a random entry from my database of favourite poems.
                    </p>
                </div>

                <div class="poemtitle"><p>The Road Goes Ever On</p></div>
                <div class="poemsubtitle"><p>By J.R.R Tolkien</p></div>
                <div class="poemcontent">
                    <p>
                        The road goes ever on and on
                    </p>
                    <p>
                        Down from the door where it began.
                    </p>
                    <p>
                        Now far ahead the road has gone,
                    </p>
                    <p>
                        And I must follow, if I can,
                    </p>
                    <p>
                        Persuing it with eager feet,
                    </p>
                    <p>
                        Until it joins some larger way,
                    </p>
                    <p>
                        Where many paths and errands meet.
                    </p>
                    <p>
                        And whither then? I cannot say!
                    </p>
                </div>
                
                <div class="mainpartcontent">
                    <p>
                        The menu on the top bar should allow you to navigate to where you actually needed to go. If you wish to register a complaint, pay a visit to the "Contact" page above. I'll get back to you.
                    </p>
                    <p>
                        Until then, thanks for your time, and good luck on your future navigational adventures!
                    </p>
                </div>
                
            </div>
        </div>
    </div>

            
        </div> <!-- 'mainpart' ends -->
        
        <div id="lowbar">
            <p id="lowbarcopy">&copy; 2016  - Will Clark</p>
            <p id="lowbaremail"></p>
        </div>
    
    </div> <!-- 'container' ends -->
    
    
    <script>
        
        var telescope = true;
        
        var changeSidebar = function() {
            
            var heightOne = 300;
            var heightTwo = $('.mainproject').first().height() + 300;

            var projectCount = $('.mainproject').length;

            var i = 0;
            
            //console.log($(this).scrollTop() + " " + $(this).innerHeight() + " " + $('#container').height())
            
            if($(window).scrollTop() + $(window).innerHeight() >= $('#sidebarbg').height()) {
                for (i = 0; i < projectCount - 1; i++) {
                    $('.projectcatlist').eq(i).slideUp(100);
                    $('.projectlistitem').eq(i).find('.projectlistname').removeClass('projectlistnameselected');
                }
                $('.projectcatlist').eq(projectCount - 1).slideDown(100);
                $('.projectlistitem').eq(projectCount - 1).find('.projectlistname').addClass('projectlistnameselected');
                
                var j = 0
                var subDivs = $('.mainpartleft').eq(projectCount - 1).find('.projectpart').length;
                
                for (j = 0; j < subDivs - 1; j++) {
                    $('.projectcatlist').eq(i).find('li').eq(j).removeClass('projectcatlistcurrent');
                    $('.projectcatlist').eq(i).find('li').eq(j).addClass('projectcatlistother');
                }
                
                $('.projectcatlist').eq(i).find('li').eq(j).addClass('projectcatlistcurrent');
                $('.projectcatlist').eq(i).find('li').eq(j).removeClass('projectcatlistother');
                
                
            } else {
            
                for (i = 0; i < projectCount; i++){


                    if ($(window).scrollTop() + 30 > heightOne - 1 && $(window).scrollTop() + 30 < heightTwo) {
                        $('.projectcatlist').eq(i).slideDown(100);
                        $('.projectlistitem').eq(i).find('.projectlistname').addClass('projectlistnameselected');


                        var j = 0;

                        var subDivs = $('.mainpartleft').eq(i).find('.projectpart').length;

                        var subHeightOne = heightOne;
                        var subHeightTwo = heightOne + $('.mainpartleft').eq(i).find('.projectpart:eq(0)').height();

                        //console.log(subDivs + " " + subHeightOne + " " + subHeightTwo);

                        for (j = 0; j < subDivs; j++) {

                             if (($(window).scrollTop() - 20 > subHeightOne && $(window).scrollTop() - 20 < subHeightTwo )||($(window).scrollTop() < subHeightTwo && j == 0) || ($(window).scrollTop() - 20> subHeightOne && j == subDivs - 1)) {
                                 //console.log(j);

                                 $('.projectcatlist').eq(i).find('li').eq(j).addClass('projectcatlistcurrent');
                                 $('.projectcatlist').eq(i).find('li').eq(j).removeClass('projectcatlistother');

                             } else {
                                 $('.projectcatlist').eq(i).find('li').eq(j).removeClass('projectcatlistcurrent');
                                 $('.projectcatlist').eq(i).find('li').eq(j).addClass('projectcatlistother');
                             }
                            subHeightOne += $('.mainpartleft').eq(i).find('.projectpart').eq(j).height();
                            if (subDivs - j > 1){
                                subHeightTwo += $('.mainpartleft').eq(i).find('.projectpart').eq(j + 1).height();
                            }
                        }


                    } else {
                        $('.projectcatlist').eq(i).slideUp(100);
                        $('.projectlistitem').eq(i).find('.projectlistname').removeClass('projectlistnameselected');
                        
                        $('.projectcatlist').eq(i).children().each(function(index, el) {
                            $(el).removeClass('projectcatlistcurrent');
                            $(el).addClass('projectcatlistother');
                            //console.log(index);
                        })
                        
                    }
                    heightOne += $('.mainproject').eq(i).height();
                    heightTwo += $('.mainproject').eq(i + 1).height();
                }

                heightOne = 0;
                heightTwo = $('.mainproject').first().height();
                
            }
            
        }
        
        
        var changeTopbar = function() {
            

            if ($(window).width() <= 700) {
                
                $('#sidebarbg').height($('#mainpart').height() + 60)
                

            } else  {
                $('#sidebar').css('margin-left', 0 - $(window).scrollLeft() + "px")
                
                $('#mainpart').css('margin-top', -$(window).scrollTop() + 60 + "px")
                
                //$('#lowbar').css('margin-bottom', -$('#sidebarbg').height() + $(window).scrollTop() + 1050 + "px")
                
                $('#sidebarbg').height($('#mainpart').height() + 60)
                
            } 
                
            $('#maintopbar').css('height', "45px");
            $('#maintopbarbg').css('height', "45px");

            $('#sidebar').css('margin-top', "45px")
            $('#infopart').css('margin-top', "60px")

            $('#sitename').css('margin-top', "6px");

            $('#sitename').css('margin-left', "0px");
                

            
            $('#codejoke').css('margin-top', (0.5 * (355 - $(window).scrollTop()) - 108));
            $('#codejoke').css('opacity', 1 - $(window).scrollTop() / 300)
        }
        
        changeSidebar();
        changeTopbar();
        
        $(window).scroll(changeSidebar);
        $(window).scroll(changeTopbar);
        
        $(window).resize(changeSidebar);
        
        
    </script>
    
    <script>
        
        var inPageLink = function(ev) {
            
            var el = this;
            
            if (ev.metaKey) {
                
                
                
                var targetProject = "";
                
                if ($(this).hasClass('projectlistname')) {
                    targetProject = $(el).html() + "0";
                } else {
                    targetProject = $(el).parent().siblings().html();
                    targetProject += ($(el).index() + 1);
                    //console.log($(el).parent().siblings().html());
                }
                
                window.open('/?part=' + encodeURIComponent(targetProject));
                
                
            } else {
            
                if ($(el).hasClass("projectlistname")) {
                    var projectNumber = $(el).parent().index();
                    //console.log("projectNumber: " + projectNumber);

                    var runningHeight = 300;
                    var i = 0;

                    for (i = 0; i < projectNumber; i++){
                        runningHeight += $('#projectsmainlist').children().eq(i).height() + 1;
                    }

                    //console.log("runningHeight: " + runningHeight);

                    $("html, body").animate({ scrollTop: runningHeight }, 200, "swing");

                } else {
                    var projectNumber = $(el).parent().parent().index();
                    var sectionNumber = $(el).index()
                    //console.log("projectNumber: " + projectNumber + ", sectionNumber: " + sectionNumber);

                    var runningHeight = 360;
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
        }
        
        
        $('.sidebutton').click(inPageLink);
        
    </script>
    
    <script>
        
        var lower = function(){
            $(this).children().eq(1).slideDown(100);
        }
        /*var raise = function(){
            $(this).children().eq(1).slideUp(100);
        }*/
        
        //var raise = setTimeout(function() {changeSidebar();}, 99);
        
        $('.projectlistitem').hover(lower, changeSidebar);
        
        
    </script>
    
    <script>
        
        var resizeVideo = function() {      
            $('.video').each(function(index, el){
                $(this).css('width', '100%');
                $(this).css('height', ($(this).width() * 9 / 16));
            })
        }
        
        resizeVideo();

        $(window).resize(resizeVideo);
    
    </script>
    
    <script>
        var adjustWidth = function() {
            //$('#container').css('width', $(window).width() + 'px')
            
            if ($(window).width() <= 700) {
                
                $('#sidebarbg').height($('#mainpart').height() + 45)
                
                $('#container').width(700)
                $('#maintopbar').width(700)
                $('#mainpart').width(694)
                
                $('#mainpart').css('position', 'static')
                $('#mainpart').css('margin-top', '60px')
                $('#mainpart').css('margin-left', '3px')
                $('#sidebarbg').width(0)

            } else if ($(window).width() <= 900) {
                
                $('#sidebarbg').height($('#mainpart').height() + 45)
                
                $('#container').width($(window).width())
                $('#maintopbar').width($(window).width())
                $('#mainpart').width($(window).width() - 6)
                
                $('#mainpart').css('position', 'static')
                $('#mainpart').css('margin-top', '60px')
                $('#mainpart').css('margin-left', '3px')
                $('#sidebarbg').width(0)
                
                
            } else {
                
                $('#sidebarbg').height($('#mainpart').height() + 45)
                
                $('#container').width($(window).width())
                $('#maintopbar').width($(window).width())
                $('#mainpart').width(894)
                
                $('#mainpart').css('position', 'fixed')
                $('#mainpart').css('margin-top', '45px')
                $('#container').width() * 0.7
                $('#mainpart').css('margin-left', $('#container').width() / 2 - 450 + "px")
                $('#sidebarbg').css('width', 'inherit')
                
            }
            if ($('#mainpart').height() < $(window).height() - 93) {
                $('#lowbar').css('bottom', '0px')
                $('#lowbar').css('position', 'fixed')
            } else {
                $('#lowbar').css('position', 'static')
            }
            
            changeTopbar();
        }
        
        $(window).resize(adjustWidth);
    </script>

    <script>
        $('.poemtitle p').html(poemData[poemNumb][0])
        $('.poemsubtitle p').html(poemData[poemNumb][1])
        $('.poemcontent').html(poemData[poemNumb][2])
        
        adjustWidth();
        adjustWidth();
    </script>
    
    
</body>
</html>