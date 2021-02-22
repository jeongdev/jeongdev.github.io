'use strict';

window.onload = function() {

    // aos 라이브러리
    AOS.init();

    // burger-btn을 클릭 gnb 나오게 하기 -------------------
    const bergerBtn = document.getElementById("burgerBtn"); //햄버거메뉴
    bergerBtn.addEventListener('click', function(e) {
        document.querySelector('.gnb').classList.toggle('gnb--open');
        document.querySelector('.burger-btn').classList.toggle('burger-btn--open');
    });

    // gnb 클릭 스크롤 이벤트 -------------------
    const gnbmenu = document.querySelectorAll(".gnb__menu li span");
    let aboutTop = document.getElementById("about").offsetTop;
    let skillsTop = document.getElementById("skills").offsetTop;
    let portfolioTop = document.getElementById("portfolio").offsetTop;
    let contactTop = document.getElementById("footer").offsetTop;

    let gnbArray = ['0', aboutTop, skillsTop, portfolioTop, contactTop]; //gnb position

    for (let i = 0; i < gnbmenu.length; i++) {
        gnbmenu[i].addEventListener('click', function(e) {
            window.scrollTo({
                top: gnbArray[i],
                left: 0,
                behavior: 'smooth'
            });
        });
    }


    // 돋보기 기능을 위한 magnifier 클래스 커서 생성 -------------------
    const move = document.getElementsByClassName("movewrap")[0];
    const magnifierDiv = document.createElement("div");
    magnifierDiv.setAttribute("class", "magnifier");
    document.getElementById("wrap").appendChild(magnifierDiv);

    // 마우스 움직일때마다 이미지 도는 모션 -------------------
    document.addEventListener('mousemove', function(e) {
        move.style.transform = 'translateX(' + e.pageX * -0.02 + 'px) translateY(' + e.pageY * -0.02 + 'px)';
    });

    // 돋보기 모션
    const magnifier = document.getElementsByClassName("magnifier")[0];

    let magnify = function(e) {
        const magnifierW = magnifier.getBoundingClientRect().width;
        const magnifierH = magnifier.getBoundingClientRect().height;
        let moveT = move.offsetTop;
        let moveL = move.offsetLeft;
        let mgfScale = 1.5; // 돋보기 배율
        let moveW;
        let moveH;
        moveW = move.getBoundingClientRect().width;
        moveH = move.getBoundingClientRect().height;

        magnifier.style.backgroundSize = moveW * mgfScale + "px"; //magnifier Size
        let mouseX = e.pageX - moveL; //move에 대한 마우스 좌표
        let mouseY = e.pageY - moveT; //move에 대한 마우스 좌표
        // 좌표XY / WH * 원본size = 원본일때 좌표를 구한다
        let rx = -(mouseX / moveW * moveW * mgfScale - magnifierW / 2);
        let ry = -(mouseY / moveH * moveH * mgfScale - magnifierH / 2);

        let px = mouseX - magnifierW / 2;
        let py = mouseY - magnifierH / 2;
        if (mouseX < moveW && mouseY < moveH && 0 < mouseX && 0 < mouseY) {
            magnifier.style.display = "block";
        } else {
            magnifier.style.display = "none";
        }

        if (magnifier.style.display === "block") { // 돋보기가 존재할때
            magnifier.style.left = e.pageX + "px";
            magnifier.style.top = e.pageY + "px";
            magnifier.style.backgroundPosition = rx + "px " + ry + "px";
        }
    }
    window.addEventListener('mousemove', magnify);
    window.addEventListener('resize', magnify);

    // portfolio 높이제어 -------------------
    const portList = document.querySelectorAll(".portfolio__list li");

    let imageSize = function() {
        for (let i = 0; i < portList.length; i++) {
            const portImage = document.querySelectorAll(".portfolio__item__image")[i];
            let imageW;
            let imageH;
            let imageRate = 1.605;
            imageW = portList[i].getBoundingClientRect().width;
            imageH = imageW / imageRate + 'px';
            portImage.style.height = imageH;
        }
    }

    imageSize(); //load
    window.addEventListener('resize', imageSize); //resize

    // portfolio List hover -------------------
    let fpmouseenter = function() {
        if (!this.classList.contains('portfolio--hover')) {

            for (let i = 0; i < portList.length; i++) {
                if (portList[i].classList.contains('portfolio--hover')) {
                    portList[i].classList.remove('portfolio--hover');
                }
            }
            this.classList.add('portfolio--hover');
        }
    }

    for (let i = 0; i < portList.length; i++) {
        portList[i].addEventListener('mouseenter', fpmouseenter);
        portList[i].addEventListener('mouseleave', function() {
            this.classList.remove('portfolio--hover');
        });
    }

};