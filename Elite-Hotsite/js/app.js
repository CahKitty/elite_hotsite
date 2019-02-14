$(document).foundation();

$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        fadingEffect: true,
        scrollHorizontally: true

    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});

var windowheight = $(window).height() - 0.1;

$(this).scrollTop() > windowheight ? $('.icon_elite').addClass("active") : $('.icon_elite').removeClass("active");
$(window).scroll(function () {
    $(this).scrollTop() > windowheight ? $('.icon_elite').addClass("active") : $('.icon_elite').removeClass("active");
});

$(window).scroll(function (event) {
    $('[data-menu-link]').each(function () {
        var el = document.getElementById($(this).prop('id'));
        var distanceTop = el.getBoundingClientRect().top;
        var menuItemTarget = $(this).data('menu-link');
        if (distanceTop <= 0) {
            $('.main-nav a').removeClass('active');
            $('#' + menuItemTarget).addClass('active');
        }
    });
});

$(window).ready(function (event) {
    $('[data-menu-link]').each(function () {
        var el = document.getElementById($(this).prop('id'));
        var distanceTop = el.getBoundingClientRect().top;
        var menuItemTarget = $(this).data('menu-link');

        if (distanceTop <= 0) {
            $('.main-nav a').removeClass('active');
            $('#' + menuItemTarget).addClass('active');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $('#show-video').click(function () {
            $('#video-container').removeClass('hide');
        });

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    if ($(document).scrollTop() < '50') {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                    }
                    if ($(document).scrollTop() > '50') {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                    }
                    return false;
                }
            }
        });
    });
});