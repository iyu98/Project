$(function () {

    $.ajax({
        type: "get",
        url: "../data/prodData.json",
        dataType: "json",
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.home.length; i++) {
                if(data.home[i].inventory !== 0) {
                    str += `
                    <li>
                        <img src="${data.home[i].prodImg}" alt="">
                        <span class="prod-info">${data.home[i].prodInfo}</span>
                        <span class="price-info">
                            <span class="label">${data.home[i].priceLabel}</span>
                            <span class="price">
                            ￥
                            ${data.home[i].price}
                            </span>
                        </span>
                        <input type="button" class="addShopBtn" data-id="${data.home[i].id}" value="加入购物车">
                    </li>
                    `;
                } else {
                    str += `
                    <li>
                        <span class="sold-out">已售完</span>
                        <img src="${data.home[i].prodImg}" alt="">
                        <span class="prod-info">${data.home[i].prodInfo}</span>
                        <span class="price-info">
                            <span class="label">${data.home[i].priceLabel}</span>
                            <span class="price">
                            ￥
                            ${data.home[i].price}
                            </span>
                        </span>
                        <input type="button" class="addShopBtn" data-id="${data.home[i].id}" value="加入购物车">
                    </li>
                    `;
                }
            }
            $("#prodList").html(str);
        }
    });

})
