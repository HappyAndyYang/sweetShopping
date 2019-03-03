import { queryOrderList } from '@/services/api';
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
      console.log('orderlist response=>', response);
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
