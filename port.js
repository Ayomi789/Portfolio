function opentab(tabName) {
    var i;
    var tabContents = document.getElementsByClassName("tab-contents");
    var tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active-link");
}



var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right ="0"
}

function closemenu(){
    sidemeu.style.right ="-200px"
}

