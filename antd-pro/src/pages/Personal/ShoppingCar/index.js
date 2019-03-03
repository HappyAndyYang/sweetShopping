import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import PersonalMenu from '@/components/Personal/PersonalMenu/index';
import { getSeq, authoryzed } from '@/utils/utils';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import ShoppingCarList from './ShoppingCarList';

import styles from './index.less';

@connect(({ shoppingcar, global }) => ({
  shoppingcar, global,
}))
class ShoppingCar extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
    }
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'shoppingcar/query',
      payload: {
        seq: getSeq(),
        userId,
      },
    });
  }

  render() {
    const { dispatch, global, shoppingcar } = this.props;
    console.log('shoppingcar=>', shoppingcar);
    return (
      <div>
        <div><Header nomal dispatch={dispatch} global={global} /></div>
        <div className={styles.container}>
          <PersonalMenu className={styles.containerMenu} dispatch={dispatch} />
          <ShoppingCarList
            className={styles.containerItem}
            shoppingcar={shoppingcar}
            dispatch={dispatch}
          />
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default ShoppingCar;
