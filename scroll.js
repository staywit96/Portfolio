$(document).ready(function () {

    var scroll_pos = 0;

    $(document).scroll(function () {

        scroll_pos = $(this).scrollTop();

        if (scroll_pos < 1200) {

            $(".container").css('background-color', '#121212');
            $(".scroll-btn").css('border', 'none');
            $("footer span").css('color', '#FAFAFF');
            $("footer").css('display', '');
            $("footer").css('transition', 'background-color 0.5s');


        } else if (2200 < scroll_pos) {
            $(".container").css('background-color', '#121212');
            $("footer span").css('color', '#FAFAFF');
            $(".scroll-btn").css('border', 'none');

        } else {

            $(".container").css('background-color', '#FAFAFF');
            $(".container").css('transition', 'background-color 0.8s');
            $("footer").css('display', 'none');
            $("footer").css('transition', 'background-color 0.5s');
            $("footer span").css('color', '#121212');

        }
    });

});