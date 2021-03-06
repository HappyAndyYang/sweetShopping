import { getOrderList } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'orderlist',

  state: {
    seq: '123',
    result: {},
    data: {
      list: [],
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(getOrderList, payload);
      const { result: { resultCode, message: msg }, data: { list } } = response;
      if (resultCode === 200) {
        // eslint-disable-next-line array-callback-return
        list.map((item) => {
          // eslint-disable-next-line no-param-reassign
          item.key = item.id;
        });
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
