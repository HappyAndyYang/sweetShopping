import React, { Component } from 'react';
import { Checkbox, InputNumber } from 'antd';
import { getSeq } from '@/utils/utils';
// import { IoIosAddCircleOutline } from 'react-icons/io';

import styles from './index.less';

function getDecsInfo(values) {
  const { deviceDecs, productDecs } = values;
  if (productDecs) {
    return productDecs;
  }
  return deviceDecs;
}
function getPrice(values) {
  if (values) {
    const { price } = values;
    return price;
  }
  return '';
}
function getCount(values) {
  if (values) {
    const { count } = values;
    return count;
  }
  return '';
}
class Item extends Component {
  handleCountChange = (value) => {
    const {
      dispatch,
      title,
      values,
    } = this.props;
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'shoppingcar/updateUI',
      payload: {
        value,
        title,
      },
    });
    if (values[0]) {
      const data = values[0];
      const { count, id: productId } = data;
      dispatch({
        type: 'shoppingcar/updateCount',
        payload: {
          seq: getSeq(),
          userId,
          count,
          productId,
        },
      });
    }
  }

  handleChange = (e) => {
    const {
      dispatch,
      title,
    } = this.props;
    dispatch({
      type: 'shoppingcar/changeStatus',
      payload: {
        value: e.target.checked,
        title,
      },
    });
  }

  render() {
    const {
      imgUrl,
      title,
      values,
    } = this.props;
    return (
      <div>
        <div className={styles.itemContent}>
          <div className={styles.itemFlag}>
            <Checkbox className={styles.itemCheckbox} onChange={this.handleChange} />
            <div className={styles.itemTitle}>
              <h3 className={styles.title}>{title}</h3>
              <img src={imgUrl} alt="Norway" className={styles.itemImg} />
            </div>
          </div>
          <div className={styles.itemDecs}>
            {
              values.map((object, index) => (
              // eslint-disable-next-line react/no-array-index-key
                <div key={index}>
                  {getDecsInfo(object)}
                </div>
              ))
            }
          </div>
          <div className={styles.itemValues}>
            <div>
              单价：¥
              {getPrice(values[0])}
            </div>
            <div className={styles.itemCount}>
              <InputNumber
                size="small"
                defaultValue={getCount(values[0])}
                onChange={this.handleCountChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
