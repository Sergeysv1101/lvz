function toggleText1() {
    const text = document.getElementById('text_about');
    const button = document.getElementById('toggle-button_about');
    if (text.classList.contains("expended")) {
        text.classList.remove("expended");
        button.innerText = "More";
    } else {
        text.classList.add("expended");
        button.innerText = "Collapse";
    }
};
function toggleText2() {
    const text = document.getElementById('text_history');
    const button = document.getElementById('toggle-button_history');
    if (text.classList.contains("expended")) {
        text.classList.remove("expended");
        button.innerText = "More";
    } else {
        text.classList.add("expended");
        button.innerText = "Collapse";
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
        button.innerText = "More";
    } else {
        text.classList.add("expended");
        img.classList.add("display_none");
        cont.classList.add("width_auto");
        button.innerText = "Collapse";
    }
};
function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
};

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-100%";
};

new WOW().init();