window.onload = function () {
    // ヘッダー
    var header = document.getElementsByTagName('header');
    var htmllang = document.documentElement.lang;
    var rootpath = location.pathname;
    var rootpath_ja;
    var rootpath_en;
    var language;

    if (/^\/en/.exec(rootpath)){
        rootpath_ja = rootpath.slice(3);
        rootpath_en = rootpath;
        //rootpath.replace(/^\/en/ ,'');
    }
    else {
        rootpath_ja = rootpath;
        rootpath_en = '/en' + rootpath;
    }

    //console.log(rootpath);

    if (htmllang == 'ja') {
        language = '';
    }
    else if(htmllang == 'en') {
        language = '/en';
    }
    var header_content = `
    <h1>
        <!-- <object data="/style/trendcreate_logo.svg" height="32px" width="32px"></object> -->
        <a href="${language}/index.html">TRENDcreate</a>
    </h1>
        <button id="menuButton" onclick="buttonClick()">
            <object id="menuButton_svg" data="/style/menu_button.svg" width="32px"></object>
        </button>
        <nav id="nav">
            <a href="${language}/index.html">Top</a>
            <a href="${language}/fixed_page/services/index.html">Service</a>
            <a href="${language}/fixed_page/contactus/index.html">Contact us</a>
            <a href="${language}/fixed_page/joinus/index.html">Join us</a>
            <a href="${language}/fixed_page/member/index.html">Member</a>
            <span class="languages">
                <a href="${rootpath_ja}">ja</a>
                <a href="${rootpath_en}">en</a>
            </span>
        </nav>
    `

    for (i = 0; i < header.length; i++) {
        header[i].innerHTML = header_content;
    }

    // フッター
    var footer = document.getElementsByTagName('footer');
    var footer_content = `
    <div id="footerBlock">
    <div id="local_links">
        <!-- headerから自動で複製されます -->
    </div>
        <div id="sns_links">
            <a href="https://twitter.com/trendcreate_jp" target="_blank">
                <img src="/images/sns_icons/2021_Twitter_logo-blue.png"></a>
            </a>
        </div>
    </div>
    <span id="copyright">
        ©2021 Team TRENDcrate | pictures: <a href="https://pixabay.com/ja/" target="_blank">pixabay</a>, <a href="https://unsplash.com/" target="_blank">unsplash</a>
    </span>
    `

    for (i = 0; i < footer.length; i++) {
        footer[i].innerHTML = footer_content;
    }


    var nav = document.getElementById('nav').innerHTML;
    var local_links = document.getElementById('local_links');
    if (local_links != null) {
    local_links.innerHTML = nav;

    }

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