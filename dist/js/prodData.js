;$(function () {

    $.ajax({
        type: "get",
        url: "http://localhost:3000/home",
        dataType: "json",
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                if(data[i].inventory !== 0) {
                    str += `
                    <li>
                        <img src="${data[i].prodImg}" alt="">
                        <span class="prod-info">${data[i].prodInfo}</span>
                        <span class="price-info">
                            <span class="label">${data[i].priceLabel}</span>
                            <span class="price">
                            ￥
                            ${data[i].price}
                            </span>
                        </span>
                        <input type="button" class="addShopBtn" data-id="${data[i].id}" value="加入购物车">
                    </li>
                    `;
                } else {
                    str += `
                    <li>
                        <span class="sold-out">已售完</span>
                        <img src="${data[i].prodImg}" alt="">
                        <span class="prod-info">${data[i].prodInfo}</span>
                        <span class="price-info">
                            <span class="label">${data[i].priceLabel}</span>
                            <span class="price">
                            ￥
                            ${data[i].price}
                            </span>
                        </span>
                        <input type="button" class="addShopBtn" data-id="${data[i].id}" value="加入购物车">
                    </li>
                    `;
                }
            }
            $("#prodList").html(str);
        }
    });

})
