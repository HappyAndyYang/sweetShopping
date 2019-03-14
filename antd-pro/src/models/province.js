import { getAllProvince } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'province',

  state: {
    seq: '123',
    result: {},
    data: {
      list: [],
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(getAllProvince, payload);
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
