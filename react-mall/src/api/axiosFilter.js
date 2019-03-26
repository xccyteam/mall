import axios from 'axios';
import Promise from 'es6-promise';
Promise.polyfill();

axios.create({
    timeout: 300000,// 请求超时时间
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

//请求体
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    console.log('请求参数错误');
    return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) => {
    if (res.data.code === 200) {
        return res;
    }
    return Promise.reject(res);
}, (error) => {
    console.log("返回错误：" + error.message);
    return Promise.reject(error);
});


export default axios