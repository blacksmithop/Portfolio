document.addEventListener("DOMContentLoaded", function (event) {
    toggleDarkMode();
    $(".darkmode").click(toggleDarkMode);

});

toggleDarkMode = function () {
    $("body").toggleClass("dark")
        .css(
            $("body").hasClass("dark") ? {
                background: "#202225",
            } :
                {
                    background: "#f9f9f9",
                }
        );
    //navbar
    $(".nav-link").toggleClass("text-white");
    //dropdown button
    $(".fa-circle-chevron-down").toggleClass("text-white");
    //card
    $(".card").toggleClass("bg-dark bg-light");
    $(".card").toggleClass("text-dark text-white");
    //buttons
    $(".btn").toggleClass("btn-dark btn-light");
    $(".btn a").toggleClass("text-white text-dark");
    //accordion
    $(".accordion-button").toggleClass("bg-dark bg-light");
    $(".accordion-button").toggleClass("text-dark text-light");
    $(".accordion-body").toggleClass("yellow-border");

}