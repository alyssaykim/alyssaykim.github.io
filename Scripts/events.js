var arrowIcon = document.getElementById("arrow-icon");

arrowIcon.addEventListener("mouseenter", function() {  //when your mouse hovers over arrow icon
        document.getElementById("arrow-popup").style.visibility = "visible";
})

arrowIcon.addEventListener("mouseleave", function() {  //when you mouse leaves arrow icon
    document.getElementById("arrow-popup").style.visibility = "hidden";
})

var githubIcon = document.getElementById("github-icon");

githubIcon.addEventListener("mouseenter", function() {  //when your mouse hovers over github icon
    document.getElementById("github-popup").style.visibility = "visible";
})

githubIcon.addEventListener("mouseleave", function() {  //when you mouse leaves github icon
    document.getElementById("github-popup").style.visibility = "hidden";
})