new WOW().init();
function toggleText1() {
    const text = document.getElementById('text_about');
    const button = document.getElementById('toggle-button_about');
    const img = document.getElementById('about_img');
    const cont = document.getElementById('cont_about');
    if (text.classList.contains("expended")) {
        text.classList.remove("expended");
        img.classList.remove("display_none");
        cont.classList.remove("width_auto");
        button.innerText = "Детальніше";
    } else {
        text.classList.add("expended");
        img.classList.add("display_none");
        cont.classList.add("width_auto");
        button.innerText = "Згорнути";
    }
};
function toggleText2() {
    const text = document.getElementById('text_history');
    const button = document.getElementById('toggle-button_history');
    const img = document.getElementById('history_img');
    const cont = document.getElementById('cont_history');
    if (text.classList.contains("expended")) {
        text.classList.remove("expended");
        img.classList.remove("display_none");
        cont.classList.remove("width_auto");
        button.innerText = "Детальніше";
    } else {
        text.classList.add("expended");
        img.classList.add("display_none");
        cont.classList.add("width_auto");
        button.innerText = "Згорнути";
    }
};
function toggleText3() {
    const text = document.getElementById('text_edu');
    const button = document.getElementById('toggle-button_edu');
    const img = document.getElementById('edu_img');
    const cont = document.getElementById('cont_edu');
    if (text.classList.contains("expended")) {
        text.classList.remove("expended");
        img.classList.remove("display_none");
        cont.classList.remove("width_auto");
        button.innerText = "Детальніше";
    } else {
        text.classList.add("expended");
        img.classList.add("display_none");
        cont.classList.add("width_auto");
        button.innerText = "Згорнути";
    }
};

function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
};

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-100%";
};
