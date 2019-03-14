import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import ProductMenu from '@/components/Personal/ProductMenu/index';
import { getSeq, authoryzed } from '@/utils/utils';
import { message } from 'antd';
import Decs from './Decs';

import styles from './index.less';

@connect(({ product, global }) => ({
  product, global,
}))
class Product extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
    } else {
      dispatch({
        type: 'product/query',
        payload: { seq: getSeq() },
      });
    }
  }

  render() {
    const {
      dispatch,
      global,
      product: {
        product,
      },
    } = this.props;
    return (
      <div>
        <div><Header nomal dispatch={dispatch} global={global} /></div>
        <div className={styles.container}>
          <ProductMenu className={styles.containerMenu} dispatch={dispatch} data={product} />
          <Decs data={product} />
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default Product;
