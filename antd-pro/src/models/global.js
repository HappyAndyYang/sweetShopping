export default {
  namespace: 'global',

  state: {
    defaultSelectedKeys: ['1'],
  },

  effects: {
    *menuSelect({ payload }, { put }) {
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
