
document.addEventListener("DOMContentLoaded", function (event) {

    $(".darkmode").click(function () {
        $("body").toggleClass("dark")
            .css(
                $("body").hasClass("dark") ?
                    {
                        background: "#202225", color: "#f9f9f9"
                    }
                    :
                    {
                        background: "#f9f9f9", color: "#202225"
                    }
            );

        //navbar
        $(".nav-link").toggleClass("text-white");
        //dropdown button
        $(".fa-circle-chevron-down").toggleClass("text-white");
        //card
        $(".card").toggleClass("bg-dark bg-light");
        $(".card").toggleClass("text-white text-dark");

    });


});