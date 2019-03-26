
import fetch from './axiosFilter';
import url from './apiUrl';
import '../../mock/test.js';

export function test() {
    return fetch({
        url: url.test,
        method: 'post',
        // dataType: "json",
        // contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    })
}