
document.addEventListener("DOMContentLoaded", function () {
    toggleDarkMode();
    const toggleMode = document.querySelector(".darkmode");
    toggleMode.addEventListener("click", toggleDarkMode);

    const cardDivs = document.querySelectorAll('.close-icon');
    cardDivs.forEach(el => el.addEventListener('click', closeCard));
});

toggleDarkMode = function () {
    // darkmode
    toggleClass(['light', 'dark'], document.body);
    // brightness
    toggleClass(['brightness-dim', 'brightness-full'], document.querySelector(".app-body"));
    //card
    document.querySelectorAll('.card').forEach((e) => {
        toggleBgColor(e);
        toggleTextColor(e);
    });
    // buttons
    document.querySelectorAll(".btn").forEach((e) => {
        toggleClass(['btn-light', 'btn-dark'], e);
        toggleTextColor(e);
    });
    //anchors
    document.querySelectorAll(".btn a").forEach((e) => {
        toggleTextColor(e);
    });
    //about me
    toggleTextColor(document.querySelector(".about-me"));
    //accordion
    let accordionBtn = document.querySelectorAll(".accordion button");
    accordionBtn.forEach((e) => {
        toggleBgColor(e);
        toggleTextColor(e);
        toggleClass(['blue-border', 'purple-border'], e);
    });
    document.querySelectorAll(".accordion-body").forEach((e) => {
        toggleClass(['black-border', 'yellow-border'], e);
    });
    toggleClass(['black-border', 'yellow-border'], document.querySelector(".list-group"));

    //document.getElementsByClassName("list-group")[0]
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

closeCard = function (e) {
    var el = e.target.parentElement.parentElement.parentElement;
    var cnt = el.parentElement.childElementCount;
    var col = el.parentElement.parentElement;

    if (cnt == 1) {
        //hide cols if empty
        return col.remove();
    }
    el.remove();


}
