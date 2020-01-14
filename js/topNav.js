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

    $("#top-search").children(".search-input").children("span").click(function(event){
        $(".search-input").css("display","none");
        event.stopPropagation();
    });
    $("#top-search").click(function(){
        $(this).children(".search-input").css("display","block");
    });

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