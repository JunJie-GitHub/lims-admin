import request from '../utils/request'
const prefix = '/prefix'

//指导老师名列表
export const listTutors = () => {
    return request({
        url: prefix + '/teacher/listTutors',
        method: 'post',
    });
};

//用户信息列表
export const listUserInfos = () => {
    return request({
        url: prefix + '/admin/listUserInfos',
        method: 'post',
    });
};

//登录并获取用户信息
export const loginValidate = (param) => {
    return request({
        url: prefix + '/account/loginValidate',
        method: 'post',
        data: param
    });
};