import { addAddress, getAddress, delAddress, updateAddress } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'addressmanager',

  state: {
    seq: '123',
    result: {
      resultCode: 200,
      message: '',
    },
    data: {
      list: [],
    },
  },

  effects: {
    *addAddress({ payload }, { call }) {
      const response = yield call(addAddress, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        message.info(msg);
      } else {
        message.error(msg);
      }
    },
    *query({ payload }, { call, put }) {
      const response = yield call(getAddress, payload);
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
    *delete({ payload }, { call, put }) {
      const response = yield call(delAddress, payload);
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
    *updateAddress({ payload }, { call }) {
      const response = yield call(updateAddress, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        message.info(msg);
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
