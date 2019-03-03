import React, { Component } from 'react';
import { Layout } from 'antd';

import styles from './index.less';

const { Footer } = Layout;

class BasicFooter extends Component {
  render() {
    return (
      <div>
        <Footer>
          <div className={styles.container}>
            <div className={styles.flexitem}>
              <div className={styles.title}>公司概况</div>
              <div className={styles.item}>关于</div>
              <div className={styles.item}>服务</div>
              <div className={styles.item}>我们的产品</div>
              <div className={styles.item}>我们的文化</div>
              <div className={styles.item}>团队介绍</div>
            </div>
            <div className={styles.flexitem}>
              <div className={styles.title}>相关链接</div>
              <div className={styles.item}>登录</div>
              <div className={styles.item}>注册</div>
              <div className={styles.item}>联系我们</div>
              <div className={styles.item}>个人中心</div>
            </div>
            <div className={styles.flexitem}>
              <div className={styles.title}>更多产品</div>
              <div className={styles.item}>未完待续</div>
            </div>
          </div>
        </Footer>
      </div>
    );
  }
}

export default BasicFooter;
