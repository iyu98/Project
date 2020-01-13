$(function () {
    $("#fixed-top-nav").hide();
    let navTop = $("#shop-fenlei-nav").offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navTop) {
            $("#fixed-top-nav").fadeIn(500);
        } else {
            $("#fixed-top-nav").fadeOut(500);
        }
    })

    $.ajax({
        url: "http://rap2api.taobao.org/app/mock/data/1445837",
        type: "get",
        dataType: "json",
        success: function (data) {

            let jjStr = "";
            for (let i = 0; i < data.jj.length; i++) {
                jjStr += `<li class="sub-category-item">
                <img class="sub-category-icon" src="${data.jj[i].img}" alt="${data.jj[i].title}">
                <span class="display-block">${data.jj[i].title}</span>
                </li>`

            };
            let jjStr1 = `
                <div class="sub-category-container">
                    <ul class="sub-category-list fix-width">
                        ${jjStr}
                    </ul>
                </div>
            `;

            let mxStr = "";
            for (let i = 0; i < data.mx.length; i++) {
                mxStr += `<li class="sub-category-item">
                <img class="sub-category-icon" src="${data.mx[i].img}" alt="${data.mx[i].title}">
                <span class="display-block">${data.mx[i].title}</span>
                </li>`

            }
            let mxStr1 = `
                <div class="sub-category-container">
                    <ul class="sub-category-list fix-width">
                        ${mxStr}
                    </ul>
                </div>
            `;

            let smStr = "";
            for (let i = 0; i < data.sm.length; i++) {
                smStr += `<li class="sub-category-item">
                <img class="sub-category-icon" src="${data.sm[i].img}" alt="${data.sm[i].title}">
                <span class="display-block">${data.sm[i].title}</span>
                </li>`

            }
            let smStr1 = `
                <div class="sub-category-container">
                    <ul class="sub-category-list fix-width">
                        ${smStr}
                    </ul>
                </div>
            `;

            let pjStr = "";
            for (let i = 0; i < data.pj.length; i++) {
                pjStr += `<li class="sub-category-item">
                <img class="sub-category-icon" src="${data.pj[i].img}" alt="${data.pj[i].title}">
                <span class="display-block">${data.pj[i].title}</span>
                </li>`

            }
            let pjStr1 = `
                <div class="sub-category-container">
                    <ul class="sub-category-list fix-width">
                        ${pjStr}
                    </ul>
                </div>
            `;

            let fzStr = "";
            for (let i = 0; i < data.fz.length; i++) {
                fzStr += `<li class="sub-category-item">
                <img class="sub-category-icon" src="${data.fz[i].img}" alt="${data.fz[i].title}">
                <span class="display-block">${data.fz[i].title}</span>
                </li>`;

            }
            let fzStr1 = `
                <div class="sub-category-container">
                    <ul class="sub-category-list fix-width">
                        ${fzStr}
                    </ul>
                </div>
            `;

            let tsStr = "";
            for (let i = 0; i < data.ts.length; i++) {
                tsStr += `<li class="sub-category-item">
                <img class="sub-category-icon" src="${data.ts[i].img}" alt="${data.ts[i].title}">
                <span class="display-block">${data.ts[i].title}</span>
                </li>`

            }
            let tsStr1 = `
                <div class="sub-category-container">
                    <ul class="sub-category-list fix-width">
                        ${tsStr}
                    </ul>
                </div>
            `;
            let topNavStr = `
                <ul class="main-category-list clean">
                    <li class="main-category-item home"><a href="index.html">首页</a></li>
                    <li class="main-category-item"><span>居家生活<span class="triangle-top"></span></span>
                        ${jjStr1}
                    </li>
                    <li class="main-category-item"><span>手办模型<span class="triangle-top"></span></span>
                        ${mxStr1}
                    </li>
                    <li class="main-category-item"><span>数码外设<span class="triangle-top"></span></span>
                        ${smStr1}
                    </li>
                    <li class="main-category-item"><span>佩饰挂件<span class="triangle-top"></span></span>
                        ${pjStr1}
                    </li>
                    <li class="main-category-item"><span>服装服饰<span class="triangle-top"></span></span>
                        ${fzStr1}
                    </li>
                    <li class="main-category-item"><span>图书文具<span class="triangle-top"></span></span>
                        ${tsStr1}
                    </li>
                </ul>
            `;

            $("#top-category").html(topNavStr);
            $("#nav-category").html(topNavStr);
        }

    });

});
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
            $(this).children("div").show();
        }, function () {
            $(this).children("div").hide();
        });
    }
    navCategory("#top-category");
    navCategory("#nav-category");
    // search

    

}
window.onload = function(){
    function $(param) {
        if (arguments[1] == true) {
            return document.querySelectorAll(param);
        } else {
            return document.querySelector(param);
        }
    }
    let $box = $(".slider");
    let $box1 = $(".slider-box-1 ul li", true);
    let $box2 = $(".slider-box-2");
    let $box3 = $(".slider-box-3");
    let $length = $box1.length;

    let str = "";
    for (let i = 0; i < $length; i++) {
        if (i == 0) {
            str += "<span class='on'></span>";
        } else {
            str += "<span></span>";
        }
    }
    $box2.innerHTML = str;

    let current = 0;

    let timer;
    timer = setInterval(go, 1000);
    function go() {
        for (let j = 0; j < $length; j++) {
            $box1[j].style.display = "none";
            $box2.children[j].className = "";
        }
        if ($length == current) {
            current = 0;
        }
        $box1[current].style.display = "block";
        $box2.children[current].className = "on";
        current++;
    }

    for (let k = 0; k < $length; k++) {
        $box1[k].onmouseover = function () {
            clearInterval(timer);
        }
        $box1[k].onmouseout = function () {
            timer = setInterval(go, 1000);
        }
    }
    for (let p = 0; p < $box3.children.length; p++) {
        $box3.children[p].onmouseover = function () {
            clearInterval(timer);
        };
        $box3.children[p].onmouseout = function () {
            timer = setInterval(go, 1000);
        }
    }

    for (let u = 0; u < $length; u++) {
        $box2.children[u].index = u;
        $box2.children[u].onmouseover = function () {
            clearInterval(timer);
            for (let j = 0; j < $length; j++) {
                $box1[j].style.display = "none";
                $box2.children[j].className = "";
            }
            this.className = "on";
            $box1[this.index].style.display = "block";
            current = this.index + 1;
        }
        $box2.children[u].onmouseout = function () {
            timer = setInterval(go, 1000);
        }
    }

    $box3.children[0].onclick = function () {
        back();
    }
    $box3.children[1].onclick = function () {
        go();
    }
    function back() {
        for (let j = 0; j < $length; j++) {
            $box1[j].style.display = "none";
            $box2.children[j].className = "";
        }
        if (current == 0) {
            current = $length;
        }
        $box1[current - 1].style.display = "block";
        $box2.children[current - 1].className = "on";
        current--;
    }
}