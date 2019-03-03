import React, { Component } from 'react';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';

import styles from './style.less';

class Symbol extends Component {
  start = () => {
    const { dispatch } = this.props;
    dispatch((routerRedux.push('/personal/shopping/')));
  }

  render() {
    return (
      <div>
        <div className={styles.symbol_container}>
          <div className={styles.symbol_flexitem}>
            <img
              src="/symbol.jpg"
              alt="Trolltunga Norway"
              width="300"
              height="200"
            />
          </div>
          <div className={styles.symbol_flexitem}>
            <div className={styles.symbol_content}>
              <h1>农业机器人展示</h1>
              <div style={{ fontSize: '16px' }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et.
              </div>
              <Button className={styles.symbol_btn} onClick={this.start}>开始使用</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Symbol;
