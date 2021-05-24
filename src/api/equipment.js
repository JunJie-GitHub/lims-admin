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

//设备维修列表
export const listEquipmentRepair = () => {
    return request({
        url: prefix + '/equipment/listEquipmentRepair',
        method: 'post',
    });
};

//插入设备维修信息
export const saveEquipmentRepair = (param) => {
    return request({
        url: prefix + '/equipment/saveEquipmentRepair',
        method: 'post',
        data: param
    });
};
