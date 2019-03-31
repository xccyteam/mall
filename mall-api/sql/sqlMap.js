const sqlMap = {
    // 登录和首页
    index: {
        addUser: 'insert into user_info(user_name, user_pwd) values (?,?)',
        checkUser: 'select user_name,user_pwd from user_info'
    },
    // 全部商品页面也是搜索页面
    search: {
    },
    // 购物车页面
    cart: {
        
    },
    // 个人中心相关的页面
    user: {
        
    }
    
}
module.exports = sqlMap;