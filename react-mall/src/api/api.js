
import fetch from './axiosFilter';
import url from './apiUrl';

export function test(data) {
    return fetch({
        url: url.test,
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: data
    })
}