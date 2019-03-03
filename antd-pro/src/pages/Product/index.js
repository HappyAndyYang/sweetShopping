import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import ProductMenu from '@/components/Personal/ProductMenu/index';
import { getSeq } from '@/utils/utils';
import Decs from './Decs';

import styles from './index.less';

@connect(({ product, global }) => ({
  product, global,
}))
class Product extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/query',
      payload: { seq: getSeq() },
    });
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
