$(document).ready(function() {
    $('.post-card').hover(
        function() {
            $(this).find('.one-post-shadow').stop().animate({ opacity: 1 }, 300);
        },
        function() {
            $(this).find('.one-post-shadow').stop().animate({ opacity: 1 }, 300);
        }
    );
    $('.logo img').hover(
        function() {
            $(this).stop().animate({ width: '+=50' }, 500);
        },
        function() {
            $(this).stop().animate({ width: '-=50' }, 500);
        }
    );
});