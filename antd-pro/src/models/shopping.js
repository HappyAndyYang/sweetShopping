// import { routerRedux } from 'dva/router';
import { queryProductShooping, addShoppingCar } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'shopping',

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
    // *update({ payload }, { call, put }) {
    //   const response = yield call(updatePersonalInfo, payload);
    //   const { status } = response;
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    //   console.log(status === 200);
    // },
    *query({ payload }, { call, put }) {
      const response = yield call(queryProductShooping, payload);
      console.log('response=>', response);
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
    *addShoppingCar({ payload }, { call }) {
      const response = yield call(addShoppingCar, payload);
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
