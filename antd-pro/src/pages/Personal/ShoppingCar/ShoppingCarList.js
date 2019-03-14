import React, { Component } from 'react';
import { Form, Button } from 'antd';
import moment from 'moment';
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
    const { userId } = JSON.parse(localStorage.login);
    const shoppingContent = [];
    let totalPrice = 0;
    let das = '';
    list.map((item) => {
      const { productInfo: values } = item;
      if (values[0]) {
        const content = {};
        const { flag, count, price, id } = values[0];
        if (flag) {
          totalPrice += count * price;
          content.productId = id;
          content.count = count;
          shoppingContent.push(content);
          das += `${id},`;
        }
      }
      return null;
    });
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const w = window.open('about:blank');
    const shoppingData = {};
    shoppingData.amount = totalPrice;
    shoppingData.shoppingContent = shoppingContent;
    const str = JSON.stringify(shoppingData);
    localStorage.setItem('shoppingContent', str);
    // w.location.href = `http://localhost:8080/api/pay?userId=${userId}&status=1&createTime=${time}&orderPayContent=${das}&amount=${totalPrice}`;
    w.location.href = `http://www.best-sweet.top:3012/api/pay?userId=${userId}&status=1&createTime=${time}&orderPayContent=${das}&amount=${totalPrice}`;
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
