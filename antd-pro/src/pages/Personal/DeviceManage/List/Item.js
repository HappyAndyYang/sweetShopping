import React, { Component } from 'react';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';

import styles from '../index.less';

function getDecsInfo(values) {
  const { deviceDecs, productDecs } = values;
  if (productDecs) {
    return productDecs;
  }
  return deviceDecs;
}

class Item extends Component {
  handleOnclick = () => {
    const {
      dispatch,
    } = this.props;
    dispatch(routerRedux.push('/personal/'));
  }

  render() {
    const {
      title,
      values,
      imgUrl,
    } = this.props;
    return (
      <div className={styles.listItemContent}>
        <div className={styles.listItemTitle}>
          <h3 className={styles.listTitle}>{title}</h3>
          <img src={imgUrl} alt="Norway" className={styles.listItemImg} />
        </div>
        <div className={styles.listItemDecs}>
          <div>
            {
              values.map((object, index) => (
              // eslint-disable-next-line react/no-array-index-key
                <div key={index}>
                  {getDecsInfo(object)}
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.listItemValues}>
          <div className={styles.listItemCount}>
            <Button className={styles.listItemBtn} onClick={this.handleOnclick}>
                再次购买
            </Button>
            <Button className={styles.listItemBtn}>
                申请售后
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
