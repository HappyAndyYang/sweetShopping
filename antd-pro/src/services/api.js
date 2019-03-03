import { stringify } from 'qs';
import request from '@/utils/request';

export async function testPost(params) {
  return request('/api/test', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function login(params) {
  return request(`/api/login?${stringify(params)}`);
}

export async function getVerifyCode(params) {
  return request(`/api/getVerifyCode?${stringify(params)}`);
}

export async function register(params) {
  return request('/api/register', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function forget(params) {
  return request('/api/forget', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function connect(params) {
  return request('/api/connect', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updatePersonalInfo(params) {
  return request('/api/updatePersonal', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function queryProductIndex(params) {
  return request(`/api/productIndex?${stringify(params)}`);
}

export async function queryProductDetail(params) {
  return request(`/api/productDetail?${stringify(params)}`);
}

export async function queryProductShooping(params) {
  return request(`/api/productShopping?${stringify(params)}`);
}

export async function queryUserShoopingCar(params) {
  return request(`/api/getUserShoppingCar?${stringify(params)}`);
}

export async function updateShoppingCarCount(params) {
  return request('/api/updateShoppingCarCount', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function addShoppingCar(params) {
  return request('/api/addShoppingCar', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function queryOrderList(params) {
  return request(`/api/orderList?${stringify(params)}`);
}

export async function getOrderList(params) {
  return request(`/api/userOrderList?${stringify(params)}`);
}

export async function getAllProvince(params) {
  return request(`/api/getAllProvince?${stringify(params)}`);
}

export async function addAddress(params) {
  return request('/api/addressManager', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function getAddress(params) {
  return request(`/api/addressManager?${stringify(params)}`);
}

export async function delAddress(params) {
  return request(`/api/delAddressManager?${stringify(params)}`);
}

export async function updateAddress(params) {
  return request('/api/delAddressManager', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}
