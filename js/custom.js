$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });
});
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
    });

    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });

    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });
    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext');
    });

});




$(function () {
    $('.main_content .tab_menu button').on('click', function () {
        let idx = $(this).index();
        console.log(idx);

        $('.main_content .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_content .tab_content .con').removeClass('on');
        $('.main_content .tab_content .con').eq(idx).addClass('on');

    });
});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

});

$(function () {
    $('.footer #lnk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
})