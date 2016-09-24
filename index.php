<!doctype html>

<?php

$link = mysqli_connect('localhost', 'REDACTED', 'REDACTED', 'REDACTED');

$query = "SELECT * FROM projects";

$contentArr = "[";

if ($result = mysqli_query($link, $query)) {
    while($row = mysqli_fetch_array($result)) {
        $contentArr .= "['";
        $contentArr .= $row[1];
        $contentArr .= "',";
        $contentArr .= $row[2];
        $contentArr .= ",'";
        $contentArr .= $row[3];
        $contentArr .= "',";
        $contentArr .= $row[4];
        
        $contentArr .= ",";
        $contentArr .= $row[5];
        $contentArr .= ",";
        $contentArr .= $row[6];
        $contentArr .= ",";
        $contentArr .= $row[7];
        $contentArr .= ",";
        $contentArr .= $row[8];
        $contentArr .= ",'";
        $contentArr .= $row[9];
        $contentArr .= "','";
        $contentArr .= $row[10];
        
        
        $contentArr .= "'],";
        
    }
}

$contentArr .= "]";

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
    <meta name="viewport" content="width=device-width, user-scalable=0">

    
    <link rel="stylesheet" type="text/css" href="/stylesheets/wc_style_01.css">
    
    <link rel="shortcut icon" href="/images/favicon.png">
    <link rel="apple-touch-icon" href="/images/favicon.png">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
</head>
    
    
<body>
    <div id="container">
        
        <div id="maintopbar">
            
            <ul>
                <!--<li class="maintopbarotherpage"><a href="/blog"><p>Blog</p></a></li>-->
                <li class="maintopbarcurrentpage"><a href="/projects"><p>Projects</p></a></li>
                <li class="maintopbarotherpage"><a href="/"><p>About</p></a></li>
            </ul>
            
            <a href="http://willclark.io/"><p id="sitename">Will_Clark</p></a>
            
            <div id="codejoke">
                <p><span class='codestyleprefix'>mysql>   </span><span class='codestyleaction'>SELECT </span><span class='codestylekey'>* </span><span class='codestyleaction'>FROM </span>                          <span class='codestylekey'>_Projects </span><span class='codestyleaction'>WHERE </span><span class='codestylekey'>quality </span><span class='codestylekey'>= </span><span class='codestylestring'>'high'</span><span class='codestylekey'>;</span>
                </p>
            </div>
            
            
        </div> <!-- 'maintopbar' ends -->
        
        <div id="sidebar">
            
            <div id="filters">
                <p class="sidetitle">&nbsp;Filter Projects&nbsp;</p>
                <div class="catfilter">
                    <input id="cb1" type="checkbox">
                    <label for="cb1">
                        <span></span>Web Dev
                    </label>
                </div>
                <div class="catfilter">
                    <input id="cb2" type="checkbox">
                    <label for="cb2">
                        <span></span>iOS Dev
                    </label>
                </div>
                <div class="catfilter">
                    <input id="cb3" type="checkbox">
                    <label for="cb3">
                        <span></span>PC / Linux Dev
                    </label>
                </div>
                <div class="catfilter">
                    <input id="cb4" type="checkbox">
                    <label for="cb4">
                        <span></span>Electro-Mechanical
                    </label>
                </div>
                
                <!-- <input id="filtertext" type="text" placeholder="Filter by keyword..."> -->
            </div>
            
            <div class="sidetitle">
                Project List
            </div>
            
            
            <ul id="projectlist">
                
            </ul>
            


            
        </div> <!-- 'sidebar' ends -->

        
        <div id="mainpart">
            <div id="mainparttotal">
                <ul id="projectsmainlist">
                </ul>
                
            </div> <!-- 'mainparttotal' ends -->
            
        </div> <!-- 'mainpart' ends -->
        
        <div id="infopartouter">
            <div id="infopart">
            </div>
        </div>
        
        <div id="lowbar">
            <p id="lowbarcopy">&copy; 2016  - Will Clark</p>
            <p id="lowbaremail"></p>
        </div>
    
    </div> <!-- 'container' ends -->
    
    <script>
        var contentArr = <?php echo $contentArr; ?>;
    </script>

    <script src="/scripts/projectpagescripts.js"></script>
    
    <script>
        var skipToSection = function() {
            
            var skipTo = <?php echo "'".$_GET["part"]."'"; ?>;
        
            if (skipTo !== "") {
                $('.projectlabel:contains(' + skipTo + ')').click()
            }
        }
        
        setTimeout(skipToSection, 500)
    </script>
    

    
    
</body>
</html>