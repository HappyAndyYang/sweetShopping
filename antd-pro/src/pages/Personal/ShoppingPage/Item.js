import React, { Component } from 'react';
import { Button } from 'antd';
import { getSeq } from '@/utils/utils';

import styles from './index.less';

class Item extends Component {
  onClick = () => {
    const { dispatch, values } = this.props;
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'shopping/addShoppingCar',
      payload: {
        seq: getSeq(),
        productId: values[0].id,
        userId,
      },
    });
  }

  render() {
    const {
      title,
      values,
      imgUrl,
    } = this.props;
    return (
      <div className={styles.itemContainer}>
        <div className={styles.itemTitle}>
          <h3 className={styles.title}>{title}</h3>
          <img src={imgUrl} alt="Norway" className={styles.itemImg} />
        </div>
        <div className={styles.itemDecs}>
          {
            values.map((object, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                {object.productDecs}
              </div>
            ))
          }
        </div>
        <div>
          <Button className={styles.btn} onClick={this.onClick}>添加到购物车</Button>
        </div>
      </div>
    );
  }
}

export default Item;
