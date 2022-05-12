$(function() {
    $('.menu-btn').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');

    });

    $('.scroll-move').on('click', function(event){
        event.preventDefault();

        $('.overlay').toggleClass('hidden');

    });
});