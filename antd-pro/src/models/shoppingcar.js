import { queryUserShoopingCar, updateShoppingCarCount } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'shoppingcar',

  state: {
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
      const response = yield call(queryUserShoopingCar, payload);
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
    *updateCount({ payload }, { call }) {
      const response = yield call(updateShoppingCarCount, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        message.info(msg);
      } else {
        message.error(msg);
      }
    },
    *updateUI({ payload }, { put }) {
      yield put({
        type: 'saveUI',
        payload,
      });
    },
    *changeStatus({ payload }, { put }) {
      yield put({
        type: 'saveStatus',
        payload,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    saveUI(state, { payload }) {
      // const states = { ...state };
      const { value, title } = payload;
      const { data: { list }, data } = state;
      const listContent = list.find(item => item.title === title);
      const { productInfo } = listContent;
      // eslint-disable-next-line array-callback-return
      productInfo.map((item) => {
        // eslint-disable-next-line no-param-reassign
        item.count = value;
      });
      data.list = list;
      return {
        ...state,
      };
    },
    saveStatus(state, { payload }) {
      const { value, title } = payload;
      const { data: { list }, data } = state;
      const listContent = list.find(item => item.title === title);
      const { productInfo } = listContent;
      // eslint-disable-next-line array-callback-return
      productInfo.map((item) => {
        // eslint-disable-next-line no-param-reassign
        item.flag = value;
      });
      data.list = list;
      return {
        ...state,
      };
    },
  },
};
