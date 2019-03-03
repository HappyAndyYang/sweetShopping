import React, { Component } from 'react';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';
import { getSeq } from '@/utils/utils';

import styles from './index.less';

class ProductMenu extends Component {
  onClick(id) {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/query',
      payload: {
        seq: getSeq(),
        id,
      },
    });
    dispatch(routerRedux.push(`/product/detail/${id}`));
  }

  buy = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/personal/'));
  }

  render() {
    const { data: { products } } = this.props;
    return (
      <div>
        <div className={styles.menu}>
          <h2 style={{ textAlign: 'left', fontSize: '20px' }}>农业机器人设备</h2>
          {
            products.map(object => (
              object.type === 1 ? (
                <Button
                  className={styles.button}
                  key={object.id}
                  onClick={() => this.onClick(object.id)}
                >
                  {object.productName}
                </Button>
              ) : null
            ))
          }
        </div>
        <div className={styles.menu}>
          <h2 style={{ textAlign: 'left', fontSize: '20px' }}>点甜农产品</h2>
          {
            products.map(object => (
              object.type === 2 ? (
                <Button
                  className={styles.button}
                  key={object.id}
                  onClick={() => this.onClick(object.id)}
                >
                  {object.productName}
                </Button>
              ) : null
            ))
          }
        </div>
        <Button style={{ marginTop: 30 }} onClick={this.buy}>点击购买</Button>
      </div>
    );
  }
}

export default ProductMenu;
