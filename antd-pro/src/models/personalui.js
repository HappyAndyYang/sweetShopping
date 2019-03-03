export default {
  namespace: 'personalui',

  state: {
    selectedKeys: '1',
  },

  effects: {
    *select({ payload }, { put }) {
      yield put({
        type: 'save',
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
  },
};
