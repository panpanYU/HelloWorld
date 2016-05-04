/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1. 项目名称：ACY稀万国际后台管理中心
 2. 页面名称：存入资金
 3. 作者：penny.yu@acyfx.com
 4. 备注：对api的依赖：jQuery
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function funds() {
    //显示弹出层
    this.layerShow();
};
//焦点图
funds.prototype.layerShow = function () {
//显示存入资金弹出层
    $(".funds-classify #funds").on("click", function (event) {
        event.preventDefault();
        $(".layer-funds").show();
        $(".layer-funds .close-funds").on("click", function (event) {
            event.preventDefault();
            $(".layer-funds").hide();
        })
    });
    //显示网上转账弹出层
    $(".funds-classify #bankTransfer").on("click", function (event) {
        event.preventDefault();
        $(".layer-bankTransfer").show();
        $(".layer-bankTransfer .close-bankTransfer").on("click", function (event) {
            event.preventDefault();
            $(".layer-bankTransfer").hide();
        })
    })
}

$(function () {
    new funds();
})

