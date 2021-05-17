import request from '../utils/request';
const prefix = '/prefix'

//获取实验室列表
export const getLaboratorys = () => {
    return request({
        url: prefix + '/laboratory/listLaboratorys',
        method: 'post',
    });
};

//插入实验室申请表
export const insertLaboratoryApplication = (param) => {
    return request({
        url: prefix + '/laboratory/insertApply',
        method: 'post',
        data: param
    });
};

//实验室申请表列表
export const listLaboratoryApply = () => {
    return request({
        url: prefix + '/laboratory/listLaboratoryApply',
        method: 'post',
    });
};
//实验室处理申请
export const listLaboratoryApplyToDealWith = () => {
    return request({
        url: prefix + '/laboratory/listLaboratoryApplyToDealWith',
        method: 'post',
    });
};
