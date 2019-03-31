'use strict';

class ResponseCode {

}
/**
 * 操作成功
 */
ResponseCode._0000_SUCCESS = {code: '0000', msg: '操作成功'};
/**
 * 用户未登录
 */
ResponseCode._0001_NO_LOGIN = {code: '0001', msg: '用户未登录'};
/**
 * 数据不存在
 */
ResponseCode._0002_NO_DATA = {code: '0002', msg: '查询失败,请稍后再试'};
/**
 * 参数不允许为空
 */
ResponseCode._0003_PARAMS_NOT_NULL = {code: '0003', msg: '参数不允许为空'};
/**
 * 客户端传入数据不合法
 */
ResponseCode._0004_DATA_NOT_LEGAL = {code: '0004', msg: '客户端传入数据不合法'};
/**
 * 手机号未注册
 */
ResponseCode._0005_REGIST_N = {code: '0005', msg: '手机号未注册'};
/**
 * 手机号已注册
 */
ResponseCode._0006_REGIST_Y = {code: '0006', msg: '手机号已注册'};

/**
 * 密码错误
 */
ResponseCode._0007_PASSWORD_ERROR = {code: '0007', msg: '密码错误'};
/**
 * 请求超时
 */
ResponseCode._0008_NETWORK_TIMEOUT = {code: '0008', msg: '网络打盹，稍后再试'};

/**
 * 404 not found
 */
ResponseCode._0009_NOT_FOUND = {code: '0009', msg: '不知道要到哪里去了'};
global.ResponseCode = ResponseCode;
