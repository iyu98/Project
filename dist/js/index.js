window.onload = function () {
    $("#hasSubMenu").hover(function () {
        $(".top-menu-list li .sub-menu").show();
    }, function () {
        $(".top-menu-list li .sub-menu").hide();
    })
    $("#hasSubMenu .sub-menu li").eq(1).click(function () {
        window.open("http://iii67.cn/mwgmav", "", "height=643, width=604,top=80, left=500,z-look=yes");
    })

    function navCategory(id) {
        $(id).children().children().hover(function () {
            $(this).children("div").show().end().children("span").children("span").show()
        }, function () {
            $(this).children("div").hide().end().children("span").children("span").hide();
        });
    }
    navCategory("#top-category");
    navCategory("#nav-category");

    function jjHref(id) {
        $(id).children().children().eq(1).click(function () {
            window.location.href = "html/shoping.html"
        })
    }
    jjHref("#top-category");
    jjHref("#nav-category");



    /* Go to top */
    $(".right-window").children(".floor5").click(function () {
        $(document).scrollTop(0)
    })


    /* swiper */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}
