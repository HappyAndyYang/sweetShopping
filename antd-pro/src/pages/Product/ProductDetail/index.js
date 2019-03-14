import React, { Component } from 'react';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import ProductMenu from '@/components/Personal/ProductMenu/index';
import { connect } from 'dva';
import { message } from 'antd';
import { routerRedux } from 'dva/router';
import { getSeq, authoryzed } from '@/utils/utils';
import styles from '../index.less';

@connect(({ product, global }) => ({
  product, global,
}))
class ProductBuy extends Component {
  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
    } else {
      dispatch({
        type: 'product/query',
        payload: {
          seq: getSeq(),
          id,
        },
      });
    }
  }

  render() {
    const { dispatch, global, product: { product } } = this.props;
    const {
      product: {
        product: {
          decs,
        },
      },
      match: { params: { id } },
    } = this.props;
    const { products } = product;
    let title = '';
    if (products.length !== 0) {
      const { productName } = products.find(item => item.id === Number(id));
      title = productName;
    }
    return (
      <div>
        <div><Header nomal dispatch={dispatch} global={global} /></div>
        <div className={styles.container}>
          <ProductMenu className={styles.containerMenu} dispatch={dispatch} data={product} />
          <div className={styles.decs}>
            <div>
              <h2>{title}</h2>
              <div className={styles.detailDecs}>
                {
                  decs.map(object => (
                    <div key={object.id}>
                      {object.deviceDecs ? <p>{object.deviceDecs}</p> : null}
                      {object.deviceImg
                        ? <img src={object.deviceImg} alt="Norway" className={styles.deviceImg} />
                        : null
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default ProductBuy;
