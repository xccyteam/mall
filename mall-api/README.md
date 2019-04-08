# mall-api
## 准备工作
- node.js环境（npm包管理器）
- express-generator 脚手架构建工具
- cnpm  npm的淘宝镜像

### 搭建过程
- npm install -g express express-generator      全局安装
- mkdir api-demo
- cd api-demo
- npm init
- npm install express --save        安装express本地依赖
- express -e   
- npm install mysql 安装数据库相关，建表，连接接数据库
- 增加token https://www.cnblogs.com/hlere/p/6668159.html?utm_source=itdadao&utm_medium=referral 


## 开发运行
```
    # 安装依赖
    npm install

    # 本地开发 开启服务
    npm start
```
浏览器访问 http://localhost:3100

## 目录结构
```
├── bin                        // 构建相关  
├── routes 					   
│   ├── index.js               // 登录和首页的接口配置
│ 	├── search.js              // 搜索和全部商品接口配置
│   ├── cart.js                // 购物车接口相关配置
│   ├── user.js                // 个人中心相关接口配置   
│	├── code.js                // 状态码设置              
├── sql                     
│   ├── db.js            	   // 数据库配置
│   ├── sqlMap.js              // 数据库语句
├── views                        
│   ├── error.ejs              // 构建相关暂无用
│   └── index.ejs              // 构建相关暂无用
├── app.js                     // 入口和构建相关配置
└── package.json               // package.json
```

## 提交注释

    只有3中   ADD，MOD, DEL

    ADD：添加

    MOD：修改

    DEL：删除

    修改配置文件时，注释格式："//原因+"说明""

## 技术栈

### JavaScript

基础教程：http://www.w3school.com.cn/js/

高级教程：http://www.w3school.com.cn/js/index_pro.asp

ES6: http://es6.ruanyifeng.com/


### express
