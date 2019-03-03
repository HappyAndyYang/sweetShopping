import React, { Component } from 'react';
import { Menu, Form } from 'antd';
import { getSeq } from '@/utils/utils';
import Item from './Item';

import styles from '../index.less';

const MenuItem = Menu.Item;
const FormItem = Form.Item;

function imgUrl(productInfo) {
  if (productInfo && productInfo.length !== 0) {
    const { deviceImg } = productInfo[0];
    return deviceImg;
  }
}

class DeviceList extends Component {
  componentDidMount() {
    const {
      dispatch,
    } = this.props;
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'devicemanager/query',
      payload: {
        seq: getSeq(),
        type: 1,
        userId,
      },
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
    const {
      dispatch,
      devicemanager: {
        data: {
          list,
        },
      },
    } = this.props;
    return (
      <div className={styles.content}>
        <Menu
          mode="horizontal"
          className={styles.listTitleMenu}
          defaultSelectedKeys={['1']}
          theme="light"
          onSelect={selectedKeys => this.onSelect(selectedKeys)}
        >
          <MenuItem key="1">我的设备</MenuItem>
          <MenuItem key="2">我的产品</MenuItem>
        </Menu>
        <div>
          <Form className={styles.form}>
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
        </div>
      </div>
    );
  }
}

export default DeviceList;
