import { routerRedux } from 'dva/router';
import { queryProductIndex, queryProductDetail } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'product',

  state: {
    seq: '1233ss',
    result: {},
    product: {
      products: [],
      decs: [],
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryProductIndex, payload);
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
    *detail({ payload }, { call, put }) {
      const response = yield call(queryProductDetail, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        yield put({
          type: 'saveDetail',
          payload: response,
        });
        yield put(routerRedux.push('/product/detail'));
      } else {
        message.error(msg);
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        product: payload.product,
      };
    },
    saveDetail(state, { payload }) {
      const detail = { ...state };
      const { product: { decs } } = payload;
      detail.product.decs = decs;
      return {
        ...state,
        product: payload.product,
      };
    },
  },
};
