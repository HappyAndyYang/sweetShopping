import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import Products from './Products';
import Features from './Features';
import Symbol from './Symbol';
import Customer from './Customer';
import styles from './style.less';

@connect(({ login, global }) => ({
  login, global,
}))
class Home extends Component {
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
