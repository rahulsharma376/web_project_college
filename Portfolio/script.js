//Get tablinks and tabcontents
var tabLinks = document.getElementsByClassName("tab-links"),
tabContents = document.getElementsByClassName("tab-contents");

// On openTab function call
function openTab(tabname){
    for(item of tabLinks){
        item.classList.remove("active-link");
    }
    for(item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

//On openMenu function call
function openMenu() {
    sideMenu.style.right = "0";
}

//On closeMenu function call
function closeMenu(){
    sideMenu.style.right = "-200px";
}