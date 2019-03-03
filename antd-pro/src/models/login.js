import { routerRedux } from 'dva/router';
import { login, register, forget, connect, getVerifyCode } from '@/services/api';
import { message } from 'antd';
import moment from 'moment';
import { setAuthority } from '@/utils/utils';

export default {
  namespace: 'login',

  state: {
    seq: '123',
    result: {},
    data: {
      list: [],
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      const { result: { resultCode }, data: { list } } = response;
      if (resultCode === 200) {
        const { userName } = payload;
        const userInfo = list.find(item => item.userName === userName);
        const { userId } = userInfo;
        const value = {
          userId,
          userName,
          loginTime: moment(),
        };
        setAuthority(value);
        yield put({
          type: 'save',
          payload: response,
        });
        yield put(routerRedux.push('/home'));
      } else {
        message.error('用户名或密码错误，请重新输入');
      }
    },
    *register({ payload }, { call, put }) {
      const response = yield call(register, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        message.info('注册成功，请登录！');
        yield put(routerRedux.push('/login'));
      } else {
        message.error(msg);
      }
    },
    *getVerifyCode({ payload }, { call }) {
      const response = yield call(getVerifyCode, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        message.info('获取验证码成功！');
      } else {
        message.error(msg);
      }
    },
    *forget({ payload }, { call, put }) {
      const response = yield call(forget, payload);
      const { result: { resultCode, message: msg } } = response;
      if (resultCode === 200) {
        message.info('找回密码成功，请重新登录！');
        yield put(routerRedux.push('/login'));
      } else {
        message.error(msg);
      }
    },
    *connect({ payload }, { call }) {
      const response = yield call(connect, payload);
      const { result: { message: msg } } = response;
      message.info(msg);
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
