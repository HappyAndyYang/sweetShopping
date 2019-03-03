import React, { Component } from 'react';
import styles from './index.less';

class Decs extends Component {
  render() {
    const { data: { decs } } = this.props;
    return (
      <div className={styles.decs}>
        <div>
          <h2>农业机器人设备</h2>
          <div className={styles.detailDecs}>
            {
              decs.map(object => (
                <div key={object.id}>
                  {object.deviceDecs ? <p>{object.deviceDecs}</p> : null}
                  {object.deviceImg
                    ? <img src={object.deviceImg} alt="Norway" className={styles.deviceImg} />
                    : null
                  }
                </div>
              ))
            }
          </div>
          <h2>点甜农产品</h2>
          <div className={styles.detailDecs}>
            {
              decs.map(object => (
                <div key={object.id}>
                  {object.productDecs ? <p>{object.productDecs}</p> : null}
                  {object.productImg
                    ? <img src={object.productImg} alt="Norway" className={styles.productImg} />
                    : null
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Decs;
