/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1. 项目名称：ACY稀万国际后台管理中心
 2. 页面名称：global (每个页面的类都继承于这个类)
 3. 作者：penny.yu@acyfx.com
 4. 备注：对api的依赖：jQuery
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//接口根地址
var url = "";
var global = {
    smsSend: function (obj, count, mobi, type) {
        var count = count;
        var requiredUrl = "";
        var mobi = mobi;
        var type = type;
        var _this = obj;
        global.smsSendType(mobi, type);
        _this.val("剩余" + count).attr("disabled", "disabled");
        var sendRemainTime = setInterval(function () {
            if (count > 1) {
                count--;
                _this.val("剩余" + count);
            } else {
                _this.val("刷新余额").removeAttr("disabled");
                clearInterval(sendRemainTime);//清除定时器
            }
        }, 1000);
    },
    //发送短信验证码的请求，待接口20151110
    smsSendType: function (mobi, type) {
        console.log("成功" + mobi + "," + type)
    },


    //初始化
    init: function () {
        //global.tabShow();
    }
};

//刷新余额倒计时
$(function () {
    global.init();
})
$(".submit-refresh a").on("click", function (event) {
    event.preventDefault();
    global.smsSend($(".btnSendCode"), 10);
});
$(function () {
    $('#ad-carousel').carousel();
    $('#menu-nav .navbar-collapse a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                $('#feature-tab a[href=#' + tabId + ']').tab('show');
            }
        }
    });
});