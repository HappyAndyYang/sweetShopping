import React, { Component } from 'react';
import { Button } from 'antd';
import { getSeq } from '@/utils/utils';
import styles from './index.less';

class Item extends Component {
  delete = () => {
    const { data, dispatch } = this.props;
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'addressmanager/delete',
      payload: {
        seq: getSeq(),
        id: data.id,
        userId,
      },
    });
  }

  update = () => {
    const { data, dispatch } = this.props;
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'addressmanager/updateAddress',
      payload: {
        seq: getSeq(),
        id: data.id,
        userId,
      },
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.itemContainer}>
        <div className={styles.decs}>
          {data.address}
        </div>
        <div className={styles.itemBtn}>
          <Button className={styles.delBtn} onClick={this.delete}>删除</Button>
          <Button className={styles.setDefultBtn} onClick={this.update}>设为默认地址</Button>
        </div>
      </div>
    );
  }
}

export default Item;
