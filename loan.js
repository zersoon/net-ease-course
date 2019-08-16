// 弱密码校验
let weakPwds = ['123456', '234567', '345678', '456789', '654321', '765432', '987654', '123321', '520131', '201314', '520520'];
export function weakPassValidator(pwd) {
    return /^(?:([\d])\1{5})$/.test(pwd) || weakPwds.indexOf(pwd) > -1;
} 

// wechat auth
var wxLogin = function () {
    var locationHref = encodeURIComponent(window.location.href);
    window.location.href = `https://opne.weixin.qq.com/connect/oauth2/authorize?appid=wx86e...f&redirect_uri=
            ${locationHref}&response_type=code&scope=snsapi_userinfo#wechat_redirect`
}

module.exports = {
    get: function (options) {
        options.isAuth === undefined && (options.isAuth = false)
        if(options.isAuth) {
            var code = base.getQueryString('code');
            if (code) {
                options.params = options.params || {};
                options.params.CODE = code
            }
        }
    }
}