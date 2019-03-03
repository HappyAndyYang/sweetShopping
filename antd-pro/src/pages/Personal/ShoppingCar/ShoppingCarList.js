import React, { Component } from 'react';
import { Form, Button } from 'antd';
import Item from './Item';

import styles from './index.less';

const FormItem = Form.Item;

function imgUrl(productInfo) {
  if (productInfo && productInfo.length !== 0) {
    const { productImg, deviceImg } = productInfo[0];
    if (productImg) {
      return productImg;
    }
    return deviceImg;
  }
}
class ShoppingCarList extends Component {
  onClick = () => {
    const {
      shoppingcar: {
        data: {
          list,
        },
      },
    } = this.props;
    let totalPrice = 0;
    list.map((item) => {
      const { productInfo: values } = item;
      if (values[0]) {
        const { flag, count, price } = values[0];
        if (flag) {
          totalPrice += count * price;
        }
      }
      return null;
    });
    console.log('totalPrice=> ', totalPrice);
  }

  render() {
    const {
      shoppingcar: {
        data: {
          list,
        },
      },
      dispatch,
    } = this.props;
    return (
      <div className={styles.titleItem}>
        <h1 className={styles.titleName}>
          我的购物车
        </h1>
        <Form>
          <FormItem>
            {
              list.map(object => (
                <Item
                  key={object.title}
                  title={object.title}
                  values={object.productInfo}
                  imgUrl={imgUrl(object.productInfo)}
                  dispatch={dispatch}
                />
              ))
            }
          </FormItem>
        </Form>
        <Button className={styles.account} onClick={this.onClick}>去结算</Button>
      </div>
    );
  }
}

export default ShoppingCarList;
