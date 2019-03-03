import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import { message } from 'antd';
import Products from './Products';
import Features from './Features';
import Symbol from './Symbol';
import Customer from './Customer';
import { authoryzed } from '@/utils/utils';
import styles from './style.less';

@connect(({ login, global }) => ({
  login, global,
}))
class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
    }
  }

  render() {
    const { dispatch, global } = this.props;
    return (
      <div>
        <div><Header index dispatch={dispatch} global={global} /></div>
        <div className={styles.products_bg}><Products dispatch={dispatch} /></div>
        <div className={styles.features_bg}><Features dispatch={dispatch} /></div>
        <div className={styles.symbol_bg}><Symbol dispatch={dispatch} /></div>
        <div className={styles.customer_bg}><Customer dispatch={dispatch} /></div>
        <div className={styles.footer}><Footer /></div>
      </div>
    );
  }
}

export default Home;
