import React, { Component } from 'react';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';

import styles from './styles.less';

class PersonalMenu extends Component {
  onClick(value) {
    const { dispatch } = this.props;
    dispatch(routerRedux.push(`/personal/${value}`));
  }

  render() {
    return (
      <div>
        <div className={styles.menu}>
          <h2 style={{ textAlign: 'left', marginLeft: '16px' }}>个人中心</h2>
          {/* <Button
            className={styles.button}
            onClick={() => this.onClick('modify')}>
            个人信息修改
          </Button> */}
          <Button className={styles.button} onClick={() => this.onClick('addressManage')}>收货地址管理</Button>
          <Button className={styles.button} onClick={() => this.onClick('orderManage')}>订单管理</Button>
          <Button className={styles.button} onClick={() => this.onClick('deviceManage')}>我购买的设备</Button>
          <Button className={styles.button} onClick={() => this.onClick('shoppingCar')}>我的购物车</Button>
        </div>
      </div>
    );
  }
}

export default PersonalMenu;
