import { queryOrderList, clearCar } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'devicemanager',

  state: {
    seq: '123',
    result: {},
    data: {
      list: [{
        title: '',
        productInfo: [],
      }],
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryOrderList, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        yield put({
          type: 'save',
          payload: response,
        });
      } else {
        message.error(msg);
      }
    },
    *pay({ payload }, { call, put }) {
      const response = yield call(clearCar, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        localStorage.removeItem('shoppingContent');
        localStorage.removeItem('shoppingUrl');
        yield put({
          type: 'save',
          payload: response,
        });
      } else {
        message.error(msg);
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
