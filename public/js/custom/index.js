
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".darkmode");
    toggleBtn.addEventListener("click", toggleDarkMode);

    toggleDarkMode();
    enableToasts();

    const cardDivs = document.querySelectorAll('.close-icon');
    cardDivs.forEach(el => el.addEventListener('click', closeCard));

    //enable tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    console.log(tooltipList)
});

enableToasts = function () {
    var toastTrigger = document.getElementById('resumeToastBtn')
    var toastLiveExample = document.getElementById('resumeToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
    }
}

toggleDarkMode = function () {
    let displayMode = document.querySelector(".darkmode").children;
    toggleClass(["visible", "visually-hidden"], displayMode[0])
    toggleClass(["visually-hidden", "visible"], displayMode[1])
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
    document.querySelectorAll(".card-footer> .btn").forEach((e) => {
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
