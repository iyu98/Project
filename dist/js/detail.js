$(function(){
    $.ajax({
        type: "get",
        url: "../data/prodData.json",
        dataType: "json",
        success: function (data) {
            let id = location.search.split("=")[1];
            let str = "";
            $.each(data.home, function (i, valueOfElement) { 
                if(data.home[i].id == id) {
                    let str2 = "";
                    if (data.home[i].inventory == 0) {
                        str2 += `<input class="disableBtn" type="button" data-id="${data.home[i].id}" value="已售罄"></input>`;
                    } else {
                        str2 += `<input class="addBtn1" type="button" data-id="${data.home[i].id}" value="加入购物车"></input>`;
                    }
                    str += `
                    <div class="prod-details">
                    <div class="prodImg fl">
                        <div class="images fl">
                            <img src="${data.home[i].prodImg}" alt="主图">
                        </div> <!-- images -->
                        <div class="smallImages fr">
                            <ul class="imageMenu">
                                <li>
                                    <img src="${data.home[i].prodImg}" alt="缩略图">
                                </li>
                            </ul>
                        </div> <!-- smallImages -->
                    </div>
                    <div class="prodInfo fr">
                        <div class="desc">
                            <div class="name infoDev">
                                <span>${data.home[i].prodInfo}</span>
                            </div>
                            <div class="title infoDev">
                                <span>${data.home[i].prodDesc}</span>
                            </div>
                            <div class="sale infoDev">
                                <div class="infoDev">
                                    <span>售价：</span>
                                    <span class="price">
                                        <span class="price-rmb">￥</span>
                                        <span class="price-num">${data.home[i].price}</span>
                                    </span>
                                </div>
                                <div class="service fl infoDev">
                                    <div class="label-div fl">
                                        <span>服务：</span>
                                    </div>
                                    <div class="services">
                                        <div class="serviceItem fl">
                                            <span>·</span>
                                            <span>全场满88包邮</span>
                                        </div>
                                        <div class="serviceItem fl">
                                            <span>·</span>
                                            <span>部分地区无法配送</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="actions clean">
                            <div class="num clean infoDev">
                                <div class="specLabel">
                                    <span>数量：</span>
                                </div>
                                <div class="spacBlocks">
                                    <div class="number-input">
                                        <span class="number">
                                            <a href="javascript:void(0)" class="oper oper-munus">
                                                <i class="fa minus"></i>
                                            </a>
                                            <input type="text" id="numText" class="text" value="1">
                                            <a href="javascript:void(0)" class="oper oper-plus">
                                                <i class="fa plus"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="action">
                                <div class="btn">
                                    ${str2}
                                </div>
                            </div>
                        </div>
                    </div> <!-- prodInfo -->
                </div>
                    `;
                }
            });
            $("#prod-content").html(str);
        }
    }); /* detail-ajax */




})