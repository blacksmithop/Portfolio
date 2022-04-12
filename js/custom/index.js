document.addEventListener("DOMContentLoaded", function (event) {
    toggleDarkMode();
    $(".darkmode").click(toggleDarkMode);

});

toggleDarkMode = function () {
    $("body").toggleClass("dark")
        .css(
            $("body").hasClass("dark") ? {
                background: "black",
            } :
                {
                    background: "white",
                }
        );
    //anchors with icons
    $(".nav-item .icon").toggleClass("text-dark text-white");
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