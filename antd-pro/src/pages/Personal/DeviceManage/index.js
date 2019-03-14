import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import PersonalMenu from '@/components/Personal/PersonalMenu/index';
import { authoryzed, getQueryStrFromUrl, getSeq } from '@/utils/utils';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import moment from 'moment';
import DeviceList from './List/DeviceList';
import DeviceControl from './Control/DeviceControl';

import styles from './index.less';

const MOTHED = 'alipay.trade.page.pay.return';
const SIGNTYPE = 'RSA2';
const PAYSULT = 'sucess';
@connect(({ personal, global, personalui, devicemanager }) => ({
  personal, global, personalui, devicemanager,
}))
class DeviceManager extends Component {
  componentDidMount() {
    const url = String(window.document.location.href);
    const result = getQueryStrFromUrl('payresult', url);
    const {
      dispatch,
    } = this.props;
    if (result && result === PAYSULT) {
      localStorage.setItem('shoppingUrl', url);
    }
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
    }
    const { userId } = JSON.parse(localStorage.login);
    const shoppingUrl = localStorage.getItem('shoppingUrl');
    if (shoppingUrl) {
      // eslint-disable-next-line radix
      const totalAmount = Number.parseInt(getQueryStrFromUrl('total_amount', shoppingUrl));
      const method = getQueryStrFromUrl('method', shoppingUrl);
      const signType = getQueryStrFromUrl('sign_type', shoppingUrl);
      const payresult = getQueryStrFromUrl('payresult', shoppingUrl);
      const { amount, shoppingContent } = JSON.parse(localStorage.shoppingContent);
      if (payresult && totalAmount && method && signType
        && method === MOTHED && signType === SIGNTYPE && payresult === PAYSULT) {
        if (amount === totalAmount) {
          dispatch({
            type: 'devicemanager/pay',
            payload: {
              seq: getSeq(),
              userId,
              orderPayContents: shoppingContent,
              createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
              amount,
            },
          });
        }
      }
    }
  }

  render() {
    let flag = true;
    const { dispatch, global, personalui: { selectedKeys }, devicemanager } = this.props;
    if (selectedKeys[0] === '1') {
      flag = true;
    } else if (selectedKeys[0] === '2') {
      flag = false;
    }
    return (
      <div>
        <div><Header nomal dispatch={dispatch} global={global} /></div>
        <div className={styles.container}>
          <PersonalMenu className={styles.containerMenu} dispatch={dispatch} />
          {
            flag ? <DeviceList dispatch={dispatch} devicemanager={devicemanager} />
              : <DeviceControl dispatch={dispatch} devicemanager={devicemanager} />
          }
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default DeviceManager;
