/*var switchButton = false;
function buttonClick() {
    var nav = document.getElementById('nav');
    var menuButton_icon = document.getElementById('menuButton');
    switch (switchButton) {
        case false:
            nav.classList.add('navAni');
            //menuButton_icon.innerHTML = '<object id="menuButton_svg" data="style/menu_close.svg" width="32px"></object>';
            switchButton = true;
            break;
        case true:
            nav.classList.remove('navAni');
            //menuButton_icon.innerHTML = '<object id="menuButton_svg" data="style/menu_button.svg" width="32px"></object>';
            switchButton = false;
            break;
    }

}*/

window.onload = function () {
    document.body.innerHTML += '<div id="nav_bg" onclick="bgClick()"></div>'
}


// メニューバー
function bgClick() {
    var nav_bg = document.getElementById('nav_bg');
    if (switchButton == true) {
        buttonClick();
    }
}

var switchButton = false;
function buttonClick() {
    var nav = document.getElementById('nav');
    var menuButton_icon = document.getElementById('menuButton');
    var nav_bg = document.getElementById('nav_bg');
    switch (switchButton) {
        case false:
            nav_bg.style.opacity = '1';
            nav_bg.style.visibility = 'visible';
            nav.classList.add('navAni');
            //menuButton_icon.innerHTML = '<object id="menuButton_svg" data="/style/menu_close.svg" width="32px"></object>';
            switchButton = true;
            break;
        case true:
            nav_bg.style.opacity = '0';
            nav_bg.style.visibility = 'hidden';
            nav.classList.remove('navAni');
            //menuButton_icon.innerHTML = '<object id="menuButton_svg" data="/style/menu_button.svg" width="32px"></object>';
            switchButton = false;
            break;
    }

}