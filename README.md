# react-mall
## 准备工作
- node.js环境（npm包管理器） >=8.10.0
- create-react-app 脚手架构建工具
- cnpm  npm的淘宝镜像

### 搭建过程
- > npm install -g create-react-app
- > create-react-app demo
- > 提交代码后，npm run eject，显示webpack，配置相关依赖
- > react-mock配置mock数据，修改react层次


## 开发运行
```
    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm start
```
浏览器访问 http://localhost:3000

## 目录结构
```
├── build                      // 构建相关  
├── config                     // 配置相关
├── mock                       // mock相关
├── scripts                    
├── public                     
│   ├── favicon.ico            // favicon图标
│   ├── index.html             // html模板
│   ├── manifest.json
├── src                        
│   ├── api                    // 所有请求
│   ├── components             // 全局公用组件
│   ├── images                 // 图片文件
│   ├── less                   // 全局样式
│   ├── redux                  // redux 状态管理
│   ├── route                  // 路由文件
│   ├── test                   // 单元测试文件
│   ├── utils                  // 工具类
│   ├── views                  // views
│   └── App.js                 // 入口页面
├── .gitignore                 // git 忽略项
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

### react-mock 
https://www.npmjs.com/package/react-mock

### less
http://lesscss.cn/
https://less.bootcss.com/
