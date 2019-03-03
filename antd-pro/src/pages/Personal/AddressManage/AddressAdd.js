import React, { Component } from 'react';
import { Menu } from 'antd';
import { getSeq } from '@/utils/utils';
import AddItem from './AddItem';
import styles from './index.less';

const MenuItem = Menu.Item;
class AddressAdd extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'province/query',
      payload: { seq: getSeq() },
    });
  }

  onSelect({ selectedKeys }) {
    const { dispatch } = this.props;
    dispatch({
      type: 'personalui/select',
      payload: { selectedKeys },
    });
  }

  render() {
    const { province, dispatch } = this.props;
    return (
      <div className={styles.container_add}>
        <div>
          <Menu
            mode="horizontal"
            className={styles.titleMenu}
            defaultSelectedKeys={['2']}
            theme="light"
            onSelect={selectedKeys => this.onSelect(selectedKeys)}
          >
            <MenuItem key="1">我的收获地址</MenuItem>
            <MenuItem key="2">新增收获地址</MenuItem>
          </Menu>
          <div>
            <AddItem province={province} dispatch={dispatch} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddressAdd;
