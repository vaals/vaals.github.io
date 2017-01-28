$(function () {
    $('.slide-toggle').click(function () {
        $('.navi').toggleClass('active');
    });
    $("a.smooth-link").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 400
            , easing: "swing"
        });
        return false;
    });
    $("a.smooth-link2").click(function () {
        return $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - $(this).parent().parent().parent().height() + "px"
        }, {
            duration: 500
            , easing: "swing"
        }), !1
    });
});