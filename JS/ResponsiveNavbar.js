function showDropDownMenu() {
    var navElement = document.getElementById("dropMenu");
    if (navElement.className === "topnav")
        navElement.className += " responsive";
    else
        navElement.className = "topnav";
};