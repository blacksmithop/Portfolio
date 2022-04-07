
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

        $(".nav-link").toggleClass("text-white");
        $(".fa-circle-chevron-down").toggleClass("text-white");
    });


});