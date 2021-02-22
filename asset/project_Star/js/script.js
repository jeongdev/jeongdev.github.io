$(document).ready(function() {

    // 비주얼 영역에 순차 효과 넣기

    TweenMax.from($('.visual_bg'), 0.6, {
        opacity: 0,
        delay: 0.4
    });
    TweenMax.from($('.v_tit'), 0.6, {
        opacity: 0,
        delay: 2.5
    });
    TweenMax.from($('.v1'), 0.6, {
        opacity: 0,
        delay: 1
    });
    TweenMax.from($('.v2'), 0.6, {
        opacity: 0,
        delay: 1.5
    });
    TweenMax.from($('.v3'), 0.6, {
        opacity: 0,
        delay: 2
    });
    TweenMax.from($('.v_more'), 0.6, {
        opacity: 0,
        delay: 3
    });

    // 비주얼 모바일
    TweenMax.from($('.m-v_tit'), 0.6, {
        opacity: 0,
        delay: 1
    });
    TweenMax.from($('.m-v1'), 0.6, {
        opacity: 0,
        delay: 1.5
    });
    TweenMax.from($('.m-v2'), 0.6, {
        opacity: 0,
        delay: 2
    });
    TweenMax.from($('.m-v3'), 0.6, {
        opacity: 0,
        delay: 2.5
    });

    // 주메뉴 코드
    var gnbMenu = $('.gnb-list > li');
    var subMenu = $('.submenu');
    var selectIndex;

    $.each(gnbMenu, function(index, item) {
        $(this).mouseenter(function() {
            selectIndex = index;
            showSubMenu(selectIndex);
        });
        $(this).mouseleave(function() {
            showSubMenu(9999);
        });
    });
    // 서브메뉴를 보여주는 기능만들기(함수)
    function showSubMenu(_aaa) {

        $.each(subMenu, function(index, item) {
            $(this).hide();
            if (_aaa == index) {
                $(this).stop().slideDown();
            }
        });
    }
    // 스크롤바가 이동될때 모션 실행

    var header_pos = $('#header').outerHeight();
    var offsetPos = 600; //공통 보정값
    var leftAni = "left-ani"; //공통 애니메이션
    var rightAni = "right-ani"; //공통 애니메이션

    // 애니메이션 시작 위치 함수를 만들자.
    function aniPos(_div) {
        var _divPos = _div.offset().top - $(window).outerHeight();
        _divPos = _divPos + (_div.outerHeight() / 3);

        return _divPos;
    }
    // nice-good 애니메이션
    var niceGood_bean = $('.nice-good-bean'),
        niceGood_con = $('.nice-good-con'),
        niceGoodPos = aniPos($('.nice-good'));

    // 신상품 적용 애니메이션
    var newArrival_img = $('.new-arrival-img'),
        newGoodPos = aniPos($('.new-arrival'));

    // 커피메뉴 적용 애니메이션
    var fav_ttl = $('.favorite-ttl'),
        fav_txt = $('.favorite-txt'),
        fav_btn = $('.favorite-btn'),
        categoryGoodPos = aniPos($('.favorite'));

    // 매장찾기 영역
    var store_roundS = $('.store-smallround'),
        store_roundB = $('.store-biground'),
        store_bean = $('.store-bean'),
        store_ttl = $('.store-ttl'),
        store_txt = $('.store-txt'),
        store_illu = $('.store-illust'),
        store_btn = $('.store-btn'),
        storeFade = "fadein",
        storePos = aniPos($('.store'));

    //스크롤 위치에 따른 애니메이션
    // 스크롤바 위치
    var scY;
    $(window).scroll(function() {
        scY = $(window).scrollTop();
        // nice-good 모션 적용
        if (scY >= niceGoodPos) {
            niceGood_bean.removeClass(leftAni);
            niceGood_con.removeClass(rightAni);
        } else {
            niceGood_bean.addClass(leftAni);
            niceGood_con.addClass(rightAni);
        }

        // new-arrival 모션 적용
        if (scY >= newGoodPos) {
            newArrival_img.addClass(storeFade);
        } else {
            newArrival_img.removeClass(storeFade);
        }

        // cate-good 모션
        if (scY >= categoryGoodPos) {
            fav_ttl.removeClass(leftAni);
            fav_txt.removeClass(leftAni);
            fav_btn.addClass(storeFade);
        } else {
            fav_ttl.addClass(leftAni);
            fav_txt.addClass(leftAni);
            fav_btn.removeClass(storeFade);
        }
        // store 모션
        if (scY >= storePos) {
            store_roundS.addClass(storeFade);
            store_roundB.addClass(storeFade);
            store_bean.addClass(storeFade);
            store_ttl.removeClass(rightAni);
            store_illu.addClass(storeFade);
            store_txt.removeClass(rightAni);
            store_btn.removeClass(rightAni);
        } else {
            store_roundS.removeClass(storeFade);
            store_roundB.removeClass(storeFade);
            store_bean.removeClass(storeFade);
            store_ttl.addClass(rightAni);
            store_txt.addClass(rightAni);
            store_illu.removeClass(storeFade);
            store_btn.addClass(rightAni);
        }
    });

    // 검색 버튼 누르면 검색창 펼치기
    var sbtEff = $('.sbt-eff'),
        sTxt = $('.stxt'),
        sBt = $('.sbt');

    // 검색 form
    var searchForm = $('.search-form');

    sbtEff.click(function() {
        sbtEff.hide();

        sTxt.css({
            width: 0
        });
        sTxt.show();
        sBt.show();

        TweenMax.to(sTxt, 0.6, {
            width: 140
        });
    });

    // 공지사항 뉴스
    var noticeList = $('.notice-a');
    $.each(noticeList, function(index, item) {
        var temp = $(this);
        temp.css({
            position: 'absolute',
            left: 0,
            top: 100
        });

    });

    // 타이머
    var noticeTimer,
        noticeReTime = 2000,
        noticeShowIndex = 0,
        noticeTotal = noticeList.length;

    noticeList.eq(noticeShowIndex).css({
        top: 0
    });

    // 새로 시작할 때마다 반복함수 만들기
    function noticeSlide() {

        var oldA = noticeList.eq(noticeShowIndex);
        noticeShowIndex = noticeShowIndex + 1;
        if (noticeShowIndex >= noticeTotal) {
            noticeShowIndex = 0;
        }

        var tempA = noticeList.eq(noticeShowIndex);
        tempA.css({
            'z-index': noticeTotal
        });
        tempA.animate({
            top: 0
        }, 600, function() {
            oldA.css({
                top: 100
            });
            tempA.css({
                'z-index': 1
            });
        });
    }
    noticeTimer = setInterval(noticeSlide, noticeReTime);

    // 사용자가 항목을 선택하는 경우 처리
    noticeList.mouseenter(function() {
        clearInterval(noticeTimer);
    });
    noticeList.mouseleave(function() {
        clearInterval(noticeTimer);
        noticeTimer = setInterval(noticeSlide, noticeReTime);
    });


    // 프로모션 펼치기 기능
    var promotion = $('.promotion'),
        proToggleBt = $('.btn_prom'),
        btnImg = $('.btn_img'),
        openImg = "images/btn_prom_up.png",
        closeImg = "images/btn_prom_down.png",
        promoState = "close"; // close, open

    // 프로모션의 펼쳐졌을 때 높이값
    var promoH = promotion.prop('scrollHeight');

    var promoSpeed = 300;

    proToggleBt.click(function(event) {
        event.preventDefault();


        // 만약 닫혀있으면 펼쳐라
        if (promoState == "close") {
            promotion.stop().animate({
                'max-height': promoH
            }, promoSpeed, function() {
                promoState = "open";

                btnImg.attr('src', openImg);

                swiperPro.autoplay.start();
                // 최초 상태로 swiper를 리셋한다
                swiperPro.slideTo(swiperIndex);

            });

        } else {
            promotion.stop().animate({
                'max-height': 0
            }, promoSpeed, function() {
                promoState = "close";

                btnImg.attr('src', closeImg);
                swiperPro.autoplay.stop();
                // 최초 상태로 swiper를 리셋한다
                swiperPro.slideTo(swiperIndex);
            });
        }

    });

    // swiperjs 관련 코드
    var swiperPro = new Swiper('.swiper_pro', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.bt_next',
            prevEl: '.bt_prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionEnd: function() {
                // 슬라이드 선명하게 하기
                // console.log(this.activeIndex); // this.activeIndex 에 현재 슬라이드 번호가 들어있습니다
                // 선명하게 해야할 div 번호값 전달
                slideShowCon(this.activeIndex);
            },
        },

    });

    var swiperIndex = 3;

    // swiperjs 
    var swiperBt = $('.swiper-bt'),
        swiperState = "play"; // play, stop

    var swiperDiv = $('.swiper_pro .swiper-slide');
    swiperDiv.eq(swiperIndex).css({
        opacity: 1.0
    });

    function slideShowCon(_value) {
        // console.log("받은 값 : " + _value);

        $.each(swiperDiv, function(index, item) {
            var tempThis = $(this);
            if (index == _value) {
                tempThis.css({
                    opacity: 1.0
                });
            } else {
                tempThis.css({
                    opacity: 0.4
                });
            }
        });
    }

    // 자동 실행은 최초에는 실행하지 않는다
    // swiper.autoplay.stop();
    swiperBt.click(function() {

        if (swiperState == "play") {
            swiperBt.css({
                background: "url(images/main_prom_play.png) no-repeat center"
            });

            swiperState = "stop";
            swiperPro.autoplay.stop();

        } else {
            swiperBt.css({
                background: "url(images/main_prom_stop.png) no-repeat center"
            });

            swiperState = "play";
            swiperPro.autoplay.start();
        }
    });


    // 모바일 펼침메뉴
    var wrap = $('#wrap'),
        gnbmCate = $('.gnb-m-category'),
        btM = $('.gnb-m-burger'),
        gnbmBg = $('.gnb-m-bg');

    // 모바일 메뉴 펼침 상태
    var mState = false;
    btM.click(function() {
        console.log('click' + mState);
        if (mState == true) {

        } else {
            // 닫김 -> 열림
            mState = true;

            gnbmBg.show();
            TweenMax.to(gnbmBg, 0.4, {
                display: 'block'
            });
            TweenMax.to(gnbmCate, 0.4, {
                right: 0
            });
            TweenMax.to(wrap, 0.4, {
                left: '-70%'
            });
        }
    });

    // X 를 클릭하면 열림 -> 닫김
    var closeBtn = $('.gnb-m-close-btn');
    var closeX = $('.gnb-m-close-btn>img');
    closeX.click(function() {
        mState = false;
        TweenMax.to(wrap, 0.4, {
            left: 0
        });
        TweenMax.to(gnbmCate, 0.4, {
            right: '-70%',
            onComplete: function() {
                gnbmBg.hide();
            }
        });
    });
    // 모바일 gnb 닫기버튼 회전
    closeBtn.mouseenter(function() {
        closeX.css({
            'transform': 'rotate(180deg)',
            'transition': 'all 0.8s'
        });
    });
    closeBtn.mouseleave(function() {
        closeX.css({
            'transform': 'rotate(0deg)',
            'transition': 'all 0.8s'
        });

    });

    // 화면에 사이즈가 변할때 처리할 내용
    $(window).resize(function() {
        // 화면의 너비
        var winWidth = $(window).outerWidth();
        if (winWidth >= 961) {
            mState = false;
            wrap.css({
                left: 0
            });
            gnbmBg.css({
                left: '100%'
            });
            gnbmBg.hide();
        }
    });

    // 모바일 메뉴
    // 모바일 오른족 메뉴
    var mMenu = $('.gnb-m-menu');
    mMenu.click(function(e) {
        e.preventDefault();
    });

    // 화살표 이미지
    var gnbM_Last = document.getElementsByClassName("gnb-m-lastmenu"),
        gnbM_Last_arr = $(".gnb-m-lastmenu").prev();
    gnbM_Last_arr.css({
        'background-image': "url('images/mob_gnb_arrow_down_g.png')"
    });
    var gnbMtab = document.querySelectorAll(".gnb-m-menu>li>a");

    for (var m = 0; m < gnbMtab.length; m++) {
        gnbMtab[m].addEventListener("click", function() {
            this.classList.toggle("active");
            var gnbMcon = this.nextElementSibling;
            var gnbchild = gnbMcon.children;
            console.log(gnbchild);
            if (gnbMcon.style.height) { // 열려있을 때
                gnbMcon.style.height = null;

            } else { // 닫혀있을 때
                gnbMcon.style.height = 'auto';
            }
        });


        for (var p = 0; p < gnbM_Last_arr.length; p++) {
            gnbM_Last_arr[p].addEventListener("click", function() {
                this.classList.toggle("active");
                var ulChild = this.nextElementSibling;
                console.log(ulChild);
                if (ulChild.style.maxHeight) { // 열려있을 때
                    ulChild.style.maxHeight = null;
                } else { // 닫혀있을 때
                    ulChild.style.maxHeight = ulChild.scrollHeight + "px";
                }
            });
        }
    }

    // 푸터 모바일메뉴
    var footerMenu = document.getElementsByClassName("footer-m-maintit");

    for (var i = 0; i < footerMenu.length; i++) {
        footerMenu[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var menuNext = this.nextElementSibling;
            if (menuNext.style.display === "block") {
                // 열려있을 때
                this.classList.remove("active");
                menuNext.style.display = "none";
            } else {
                // 닫혀있을 때
                menuNext.style.display = "block";
            }
        });
    }
    var footerLast = document.getElementsByClassName('footer-m-lastoff');
    for (var j = 0; j < footerLast.length; j++) {
        footerLast[j].addEventListener("click", function() {
            this.classList.toggle("active");
            var lastMenu = this.nextElementSibling;
            if (lastMenu.style.display === "block") {
                // 열려있을 때
                this.classList.remove("active");
                lastMenu.style.display = "none";
            } else {
                // 닫혀있을 때
                lastMenu.style.display = "block";
            }
        });
    }

    // 모바일 어워드 슬라이드
    var swiperAward = new Swiper('.footer-award-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // widdow width >= 660px
            660: {
                slidesPerView: 3,
                slidesPerGroup: 3
            }
        }
    });
    // 화면에 사이즈가 변할때 처리할 내용
    // 화면의 너비
    if ($(window).outerWidth() <= 660) {
        swiperAward.init();
    }

    // 버튼을 누르면 플레이 또는 스탑
    var awardBtn = $(".footer-m-award-btn");
    var awardState = "play"; // play stop
    awardBtn.click(function() {
        if (awardState === "play") {
            $(this).css('background-position', 'right');
            awardState = "stop";
            swiperAward.autoplay.stop();

        } else {
            $(this).css('background-position', 'left');
            awardState = "play";
            swiperAward.autoplay.start();
        }
    });


});