import { routerRedux } from 'dva/router';
import { queryPay } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'pay',

  state: {
    seq: '123',
    result: {},
  },

  effects: {
    *pay({ payload }, { call, put }) {
      const response = yield call(queryPay, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        yield put({
          type: 'save',
          payload: response,
        });
        yield put(routerRedux.push('/personal/pay'));
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
