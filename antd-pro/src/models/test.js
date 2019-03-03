import { testPost } from '@/services/api';

export default {
  namespace: 'test',

  state: {

  },

  effects: {
    *test({ payload }, { call }) {
      const response = yield call(testPost, payload);
      console.log(response);
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
