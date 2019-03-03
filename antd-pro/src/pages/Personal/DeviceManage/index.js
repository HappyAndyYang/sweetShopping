import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import PersonalMenu from '@/components/Personal/PersonalMenu/index';
import { authoryzed } from '@/utils/utils';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import DeviceList from './List/DeviceList';
import DeviceControl from './Control/DeviceControl';

import styles from './index.less';

@connect(({ personal, global, personalui, devicemanager }) => ({
  personal, global, personalui, devicemanager,
}))
class DeviceManager extends Component {
  componentDidMount() {
    const {
      dispatch,
    } = this.props;
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
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
