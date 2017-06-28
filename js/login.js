$(document).ready(function($) {

    // 登录链接事件
    $("#loginLink").click(function() {
        // 显示弹出层遮罩
        $("#layer-mask").show();
        // 显示弹出层窗体
        $("#layer-pop").show();
        // 弹出层关闭按钮绑定事件
        $("#layer-close").click(function() {
            // 弹出层关闭
            $("#layer-mask").hide();
            $("#layer-pop").hide();
        });
    });
});
