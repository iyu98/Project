function commonCartNum() {
    function navCategory(id) {
        $(id).children().children().hover(function () {
            $(this).children("div").show().end().children("span").children("span").show()
        }, function () {
            $(this).children("div").hide().end().children("span").children("span").hide();
        });
    }

    navCategory("#top-category");
    navCategory("#nav-category");

    $(".section .net-ease").attr("src", "../images/net_ease_logo_black.png")

    $("#prodList").children().each(function () {
        $(this).on("click", "img, .prod-info, price-info", function () {
            window.location.href = `html/detail.html?id=${$(this).parent().children(".addShopBtn").attr("data-id")}`
        })
    });

    $.each($(".addShopBtn"), function (i, val) {
        $(".addShopBtn").eq(i).click(function () {
            let id = $(this).attr("data-id");
            console.log(id);
            $.ajax({
                type: "get",
                url: "http://localhost:3000/home",
                data: {},
                dataType: "json",
                success: function (data) {
                    if (data[i].id == id && data[i].inventory != 0) {
                        let num = data[i].prodNum;
                        num++;
                        $.ajax({
                            type: "patch",
                            url: "http://localhost:3000/home/"+id,
                            data: {"prodNum": num},
                            dataType: "json",
                            success: function(data) {
                                console.log(data)
                            }
                        });
                    }
                }
            });
        });
    });

    $.ajax({
        type: "get",
        url: "http://localhost:3000/home",
        data: {},
        dataType: "json",
        success: function (data) {
            let prodNums = new Array();
            $.each(data, function (index, valueOfElement) {
                if (data[index].prodNum != 0) prodNums.push(Number(data[index].prodNum));
            });

            function doAdd(arr) {
                let len = arr.length;
                sum = len == 0 ? 0 : len == 1 ? arr[0] : arr[0] + doAdd(arr.slice(1));
                return sum;
            }
            doAdd(prodNums);
            $("#cart").children("span").text(sum);
            $(".cart-count").text(sum);
        }
    });

    $(".icon-cart, #cart").on("click", function () {
        window.location.href = "http://localhost:8080/html/shoppingCart.html";
    });
}