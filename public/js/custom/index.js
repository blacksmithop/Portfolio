
document.addEventListener("DOMContentLoaded", function () {

    toggleDarkMode();
    const toggleMode = document.getElementsByClassName("darkmode")[0]
    toggleMode.addEventListener("click", toggleDarkMode);
});


toggleDarkMode = function () {
    let body = document.body;
    // darkmode
    toggleClass(['light', 'dark'], body);

    let appBody = document.querySelector(".app-body");
    // brightness
    toggleClass(['brightness-dim', 'brightness-full'], appBody);

    /* card */
    let card = document.querySelectorAll('.card');
    card.forEach((e) => {
        toggleBgColor(e);
        toggleTextColor(e);
    });

    /* buttons */
    let btn = document.querySelectorAll(".btn");
    btn.forEach((e) => {
        toggleClass(['btn-light', 'btn-dark'], e);
        toggleTextColor(e);
    });
    /*anchors*/
    let anchor = document.querySelectorAll(".btn a");
    anchor.forEach((e) => {
        toggleTextColor(e);
    });
    //.toggleClass("text-white text-dark");

    //toggleBgColor(card);
    //toggleTextColor(card);

    document.getElementsByClassName("about-me")[0]
    //.toggleClass("text-dark text-white");

    document.getElementsByClassName("btn")[0]
    //.toggleClass("btn-dark btn-light");


    document.getElementsByClassName("accordion-button")[0]
    //.toggleClass("bg-dark bg-light");
    document.getElementsByClassName("accordion-button")[0]
    //.toggleClass("text-dark text-light");
    document.getElementsByClassName("accordion-button")[0]
    //.classList.toggle("blue-border");
    document.getElementsByClassName("accordion-body")[0]
    //.classList.toggle("yellow-border");

    document.getElementsByClassName("list-group")[0]
    //.classList.toggle("blue-border");
}

toggleClass = function (classList, element) {
    classList.map(v => element.classList.toggle(v))
}

toggleTextColor = function (element) {
    ["text-dark", "text-light"].map(v => element.classList.toggle(v))
}

toggleBgColor = function (element) {
    ["bg-light", "bg-dark"].map(v => element.classList.toggle(v))
}

