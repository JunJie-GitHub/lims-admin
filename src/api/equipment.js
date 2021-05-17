import request from '../utils/request';
const prefix = '/prefix'

//设备列表
export const listEquipment = () => {
    return request({
        url: prefix + '/equipment/listEquipment',
        method: 'post',
    });
};

//设备申请列表
export const listEquipmentApplication = () => {
    return request({
        url: prefix + '/equipment/listEquipmentApplication',
        method: 'post',
    });
};

//设备名列表
export const listEquipmentName = () => {
    return request({
        url: prefix + '/equipment/listEquipmentName',
        method: 'post',
    });
};

//插入设备
export const insertEquipmentApplication = (param) => {
    return request({
        url: prefix + '/equipment/insertEquipmentApplication',
        method: 'post',
        data: param
    });
};

