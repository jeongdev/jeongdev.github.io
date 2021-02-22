$(document).ready(function() {
    // gnb
    // gnb 메뉴에 마우스를 올리면 서브 메뉴가 나타난다
    var effect = $('.effect');
    var submenu = $('.submenu');
    var subwrap = $('.submenu_wrap');

    $('.mainmenu > li').each(function(index, item) {
        var gnbH = 50; // gnb 높이
        var effH = gnbH + subwrap.eq(index).outerHeight();

        $(this).mouseenter(function() {
            subwrap.eq(index).addClass('on');
            effect.css({
                height: effH
            });
        });
        $(this).mouseleave(function() {
            subwrap.removeClass('on');
            effect.css('height', gnbH);
        });
    });
    // 알림마당 입찰정보 보도자료
    // 메뉴 오버하면 하위 메뉴가 나타난다
    var bdMenuA = $('.board_menu>li>a');
    var bdSubM = $('.board_submenu');

    bdMenuA.eq(0).addClass('menu_hover');
    bdSubM.eq(0).addClass('sub-on');

    $.each(bdMenuA, function(index, item) {
        var $this = $(this);

        $this.mouseenter(function() {
            bdMenuA.removeClass('menu_hover');
            bdSubM.removeClass('sub-on');
            bdMenuA.eq(index).addClass('menu_hover');
            bdSubM.eq(index).addClass('sub-on');
        });

    });

    // swiper 비주얼
    var vSwiper = new Swiper('.v_slide_con', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.v_slide_bullet',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.v_slide_next',
            prevEl: '.v_slide_prev',
        },
    });
    $('.v_slide_bullet').css({
        width: 'auto'
    });
    // swiper 알림존
    var nSwiper = new Swiper('.n_slide_con', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.n_slide_pag',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#n_slide_next',
            prevEl: '#n_slide_prev',
        },

    });
    // swiper 하단 슬라이드 배너
    var bSwiper = new Swiper('.b_slide_con', {
        slidesPerView: 4,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '#b_slide_next',
            prevEl: '#b_slide_prev',
        },

    });
    // swiper 버튼 동작/스탑
    $('#v_stop').on('click', function() {
        $(this).toggleClass('stop');
        if ($(this).hasClass('stop')) {
            vSwiper.autoplay.stop();
        } else {
            vSwiper.autoplay.start();
        }
    });
    $('#n_stop').on('click', function() {
        $(this).toggleClass('stop');
        if ($(this).hasClass('stop')) {
            nSwiper.autoplay.stop();
        } else {
            nSwiper.autoplay.start();
        }
    });
    $('#b_stop').on('click', function() {
        $(this).toggleClass('stop');
        if ($(this).hasClass('stop')) {
            bSwiper.autoplay.stop();
        } else {
            bSwiper.autoplay.start();
        }
    });

    // 체육시설 도로교통 문화복지
    // 아이콘을 오버하면 하위 메뉴가 나타난다
    var vrLi = $('.visual_info_ttl_icon>li');
    var vrIcon = $('.v_r_con'),
        vrList = $('.visual_info_txt_list');

    vrLi.eq(0).addClass('tri-on');
    vrList.eq(0).addClass('on');
    $.each(vrIcon, function(index, item) {
        $(this).mouseenter(function() {
            vrList.removeClass('on');
            vrLi.removeClass('tri-on');
            vrLi.eq(index).addClass('tri-on');
            vrList.eq(index).addClass('on');
        });
    });


    // 하단 네비게이션을 누르면 하위 메뉴가 나온다
    var quickMenu = $('.quick_menu>li');
    var quickSub = $('.quick_submenu');

    $.each(quickMenu, function(index, item) {
        var temp = $(this);
        temp.click(function() {
            temp.find('.quick_submenu').addClass('open');
        });
        quickSub.mouseleave(function() {
            temp.find('.quick_submenu').removeClass('open');
        });


    });


});