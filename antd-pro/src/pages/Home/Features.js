import React, { Component } from 'react';
import { FaShoppingCart, FaTruck, FaVideo } from 'react-icons/fa';
import { routerRedux } from 'dva/router';

import styles from './style.less';

class Features extends Component {
  buy = () => {
    const { dispatch } = this.props;
    dispatch((routerRedux.push('/personal/shopping/')));
  }

  render() {
    return (
      <div>
        <div className={styles.feature_title}>
          <h1>Awesome Features</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.flexitem} onClick={this.buy}>
            <FaShoppingCart size="5em" className={styles.feature_icon} />
            <h2>购买</h2>
            <div className={styles.feature_dec}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste sunt porro delectus cum officia magnam.
            </div>
          </div>
          <div className={styles.flexitem}>
            <FaTruck size="5em" className={styles.feature_icon} />
            <h2>我的物流</h2>
            <div className={styles.feature_dec}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste sunt porro delectus cum officia magnam.
            </div>
          </div>
          <div className={styles.flexitem}>
            <FaVideo size="5em" className={styles.feature_icon} />
            <h2>视频展示</h2>
            <div className={styles.feature_dec}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste sunt porro delectus cum officia magnam.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
