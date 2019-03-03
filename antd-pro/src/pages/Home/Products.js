import React, { Component } from 'react';
import { routerRedux } from 'dva/router';

import styles from './style.less';

class Products extends Component {
  robotSelect = () => {
    const { dispatch } = this.props;
    dispatch((routerRedux.push('/product/')));
  }

  openControl = () => {
    window.open('http://www.best-sweet.top:3001/login');
  }

  render() {
    let clientWidth = 0;
    if (document.body.clientWidth < 450) {
      clientWidth = document.body.clientWidth * 1;
    } else if (document.body.clientWidth < 700) {
      clientWidth = document.body.clientWidth * 0.5;
    } else {
      clientWidth = document.body.clientWidth * 0.25;
    }
    return (
      <div>
        <div className={styles.productsTitle}>
          <h1>Outstanding Products</h1>
        </div>
        <div className={styles.responsive}>
          <div className={styles.img} onClick={this.robotSelect}>
            <img
              src="/robot.jpg"
              alt="Trolltunga Norway"
              width="300"
              height="200"
              style={{ width: '100%', height: clientWidth * 0.7 }}
            />
            <div className={styles.desc}>
              <h2>农业机器人</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iste sunt porro delectus cum officia magnam.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.responsive}>
          <div className={styles.img}>
            <img
              src="/introduce.jpg"
              alt="Trolltunga Norway"
              width="300"
              height="200"
              style={{ width: '100%', height: clientWidth * 0.7 }}
            />
            <div className={styles.desc}>
              <h2>点甜简介</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iste sunt porro delectus cum officia magnam.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.responsive}>
          <div className={styles.img} onClick={this.robotSelect}>
            <img
              src="/product.jpg"
              alt="Trolltunga Norway"
              width="300"
              height="200"
              style={{ width: '100%', height: clientWidth * 0.7 }}
            />
            <div className={styles.desc}>
              <h2>点甜土特产</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iste sunt porro delectus cum officia magnam.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.responsive} onClick={this.openControl}>
          <div className={styles.img}>
            <img
              src="/control.png"
              alt="Trolltunga Norway"
              width="300"
              height="200"
              style={{ width: '100%', height: clientWidth * 0.7 }}
            />
            <div className={styles.desc}>
              <h2>控制系统</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iste sunt porro delectus cum officia magnam.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
