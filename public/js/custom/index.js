
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".darkmode");
    toggleBtn.addEventListener("click", toggleDarkMode);

    //toggleDarkMode();
    enableToasts();
    enablTooltips();
    populateCards();
});

//enable tooltips
enablTooltips = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}
//enable toasts
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
// dark mode
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
    document.querySelectorAll(".accordion button").forEach((e) => {
        toggleBgColor(e);
        toggleTextColor(e);
        toggleClass(['blue-border', 'purple-border'], e);
    });
    document.querySelectorAll(".accordion-body").forEach((e) => {
        toggleClass(['black-border', 'yellow-border'], e);
    });
    toggleClass(['black-border', 'yellow-border'], document.querySelector(".list-group"));
}
// class toggle functions for darkmode
toggleClass = function (classList, element) {
    classList.map(v => element.classList.toggle(v))
}
toggleTextColor = function (element) {
    ["text-dark", "text-light"].map(v => element.classList.toggle(v))
}
toggleBgColor = function (element) {
    ["bg-light", "bg-dark"].map(v => element.classList.toggle(v))
}
//close card
closeCard = function (e) {
    var el = e.target.parentElement.parentElement.parentElement.parentElement;
    el.remove();
}

//project card creator
populateCards = function () {
    _card = document.querySelector(".col");
    let root = document.querySelector(".accordion-card");
    _card.remove();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            myObj.forEach(function (obj) {
                createCard(root, _card, obj);
            });
        }
    };
    xmlhttp.open("GET", "././assets/json/projects.json", true);
    xmlhttp.send();

}

createCard = function (root, card, obj) {
    var card = _card.cloneNode(true);

    let category = card.querySelector(".card-header i");
    category.className = obj.category.icon;
    category.innerHTML = ` ${obj.category.name}`

    let cardBody = card.querySelector(".card-body");
    cardBody.querySelector(".card-title").innerHTML = obj.header;
    cardBody.querySelector(".card-text").innerHTML = obj.description;

    let cardFooter = card.querySelector(".card-footer").children;
    cardFooter[0].children[0].href = obj.url;
    if (obj.hasOwnProperty("id")) {
        cardFooter[1].setAttribute("data-bs-target", obj.preview.id);
    }

    const cardDivs = card.querySelector('.close-icon');
    cardDivs.addEventListener('click', closeCard);
    root.appendChild(card)
}