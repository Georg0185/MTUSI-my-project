$(document).ready(function() {
    var scrolled = 0;
    var $parallaxElements = $('.icons-for-parallax img');
    if ($parallaxElements.length) {
        $(window).scroll(function() {
            scrolled = $(window).scrollTop();
            $parallaxElements.each(function(i) {
                var yPosition = scrolled * 0.3 * (i + 1);
                $(this).css({ top: yPosition });
            });
        });
    }
});