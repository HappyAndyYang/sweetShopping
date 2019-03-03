import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import PersonalMenu from '@/components/Personal/PersonalMenu/index';

import AddressList from './AddressList';
import AddressAdd from './AddressAdd';

import styles from './index.less';

@connect(({ personal, global, province, addressmanager, personalui }) => ({
  personal, global, province, addressmanager, personalui,
}))
class MyAddress extends Component {
  render() {
    let flag = true;
    const { dispatch, global, personalui: { selectedKeys }, province, addressmanager } = this.props;
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
            flag ? <AddressList dispatch={dispatch} addressmanager={addressmanager} />
              : <AddressAdd dispatch={dispatch} province={province} />
          }
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default MyAddress;
