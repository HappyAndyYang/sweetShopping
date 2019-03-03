import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import PersonalMenu from '@/components/Personal/PersonalMenu/index';
import ProductList from './ProductList';
import DeviceList from './DeviceList';

import styles from './index.less';

@connect(({ shopping, global, personalui }) => ({
  shopping, global, personalui,
}))
class ShoppingPage extends Component {
  render() {
    let flag = true;
    const { dispatch, global, personalui: { selectedKeys }, shopping } = this.props;
    if (selectedKeys[0] === '1') {
      flag = true;
    } else if (selectedKeys[0] === '2') {
      flag = false;
    }
    return (
      <div>
        <div><Header nomal dispatch={dispatch} global={global} /></div>
        <div className={styles.container}>
          <PersonalMenu className={styles.containerMenu} dispatch={dispatch} />
          {
            flag ? <ProductList dispatch={dispatch} shopping={shopping} />
              : <DeviceList dispatch={dispatch} shopping={shopping} />
          }
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default ShoppingPage;
