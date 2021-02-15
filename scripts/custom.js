//==============================================================
// CUSTOM SCRIPTS
// ==============================================================
jQuery(document).ready(function () {
    $("a#menu-icon").click(function () {
        $('.menu-open').toggleClass("opened");
    });

    $(".close-menu").click(function () {
        $(".menu-open").removeClass("opened");
    });


    $(".plus").click(function () {
        $('html,body').animate({
            scrollTop: $(".main-content").offset().top
        },
            'slow');
    });
});

$(window).on("resize", function () {
    /*If browser resized, check width again */
    if ($(window).width() < 768) {
        $('.site-nav').addClass('sticky');
    }
    else { $('.site-nav').removeClass('sticky'); }
}).resize();

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $(".down").addClass("Top");
    }
    else {
        $(".down").removeClass("Top");
    }
});

$(".down").on('click', function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('html,body').animate({
            scrollTop: $(".banner").offset().top
        },'slow');
    }
    else {
        $('html,body').animate({
            scrollTop: $(".main-content").offset().top
        },'slow');
    }

})

$(document).ready(function () {

    $('.down.Top').click(function () {
        alert('go up')
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



$(window).scroll(function () {
    if ($(window).scrollTop() >= 2) {
        $('.logo').addClass('fixed-logo');
    }
    else {
        $('.logo').removeClass('fixed-logo');
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('.logo').addClass('color-logo');
    }
    else {
        $('.logo').removeClass('color-logo');
    }
});



$(window).load(function () {
    $('.line1,.line2').addClass('go');
    $('.line1,.line2').one(transitionEvent,
        function (event) {
            $('.line1,.line2').addClass("animate");
        });

});

function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

var transitionEvent = whichTransitionEvent();


$(document).ready(function(){
        // parallax scrolling images script
            $('.main-content').parallax("right", 1.8);
        });
       

