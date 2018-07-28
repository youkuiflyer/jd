
$(window).resize(function() {
    // calculate goods theme left div position
    var classify_banner_x = $(".classify-banner").offset().left;
    var classify_banner_y = $(".classify-banner").offset().top;
    classify_banner_x = classify_banner_x - 250;
    $(".goods-theme-left").css("left",classify_banner_x+"px")
    $(".goods-theme-left").css("top",classify_banner_y+"px")
});

$(function () {
    // calculate goods theme left div position
    var classify_banner_x = $(".classify-banner").offset().left;
    var classify_banner_y = $(".classify-banner").offset().top;
    classify_banner_x = classify_banner_x - 243;
    $(".goods-theme-left").css("left",classify_banner_x+"px")
    $(".goods-theme-left").css("top",classify_banner_y+"px")

    // alert("classify_banner_x:"+classify_banner_x +"  classify_banner_y:"+classify_banner_y);

    // remove  top banner div
    $("#removeTopBanner").click(function () {
        $(".top-banner").remove();
    });

    // show and hidden the  navigation context start
    $(".city li").mouseover(function () {
        $(".city li").css("background-color","#fff");
        $(".city-item-list").show();
        $(".my-item-list").hide();
        $(".enterprise-item-list").hide();
        $(".customer-service-list").hide();
        $(".web-nav-list").hide();

    });

    $(".city-item-list").mouseleave(function () {
        $(".city li").css("background-color","");
        $(".city-item-list").hide();
    });

    $(".my-item-list").mouseleave(function () {
        $(".show-list").css("background-color","");
        $(".my-item-list").hide();
    });
    $(".enterprise-item-list").mouseleave(function () {
        $(".show-list").css("background-color","");
        $(".enterprise-item-list").hide();
    });
    $(".customer-service-list").mouseleave(function () {
        $(".show-list").css("background-color","");
        $(".customer-service-list").hide();
    });
    $(".web-nav-list").mouseleave(function () {
        $(".show-list").css("background-color","");
        $(".web-nav-list").hide();
    });
    $(".phone-item").mouseleave(function () {
        $(".phone-item").hide();
    });

    $(".show-list").mouseover(function () {
        var labVal = $(this).attr("lab");
        if(labVal != "phoneLi")
        {
            $(this).css("background-color","#fff");
            // if (! $(".show-list").mouseover())
            // {
            //     $(".show-list").css("background-color","");
            // }
        }


        if (labVal !=null && labVal !="")
        {
            if (labVal == "myLi")
            {
                $(".city-item-list").hide();
                $(".my-item-list").show();
                $(".enterprise-item-list").hide();
                $(".customer-service-list").hide();
                $(".web-nav-list").hide();
                $(".phone-item").hide();
            }
            if (labVal == "enterpriseLi")
            {
                $(".city-item-list").hide();
                $(".my-item-list").hide();
                $(".enterprise-item-list").show();
                $(".customer-service-list").hide();
                $(".web-nav-list").hide();
                $(".phone-item").hide();
            }
            if (labVal == "userLi")
            {
                $(".city-item-list").hide();
                $(".my-item-list").hide();
                $(".enterprise-item-list").hide();
                $(".customer-service-list").show();
                $(".web-nav-list").hide();
                $(".phone-item").hide();
            }
            if (labVal == "webNavLi")
            {
                $(".city-item-list").hide();
                $(".my-item-list").hide();
                $(".enterprise-item-list").hide();
                $(".customer-service-list").hide();
                $(".web-nav-list").show();
                $(".phone-item").hide();
            }
            if (labVal == "phoneLi")
            {
                $(".city-item-list").hide();
                $(".my-item-list").hide();
                $(".enterprise-item-list").hide();
                $(".customer-service-list").hide();
                $(".web-nav-list").hide();
                $(".phone-item").show();
            }
        }
    });
    // show and hidden the  navigation context end

    // mouse over the goods-theme-left show the goods-theme-left
    $(".goods-theme-left").mouseover(function () {
        $(".goods-theme-right").show();
    });

    $(".goods-theme-right").mouseleave(function () {
        $(".goods-theme-right").hide();
    });

});

