import React, { Component } from 'react';
import { Menu, Form } from 'antd';
import { getSeq } from '@/utils/utils';
import Item from './Item';
import styles from './index.less';

const MenuItem = Menu.Item;
const FormItem = Form.Item;

class AddressList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { userId } = JSON.parse(localStorage.login);
    dispatch({
      type: 'addressmanager/query',
      payload: {
        seq: getSeq(),
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
      addressmanager: {
        data: {
          list,
        },
      },
      dispatch,
    } = this.props;
    return (
      <div className={styles.content}>
        <Menu
          mode="horizontal"
          className={styles.titleMenu}
          defaultSelectedKeys={['1']}
          theme="light"
          onSelect={selectedKeys => this.onSelect(selectedKeys)}
        >
          <MenuItem key="1">我的收获地址</MenuItem>
          <MenuItem key="2">新增收获地址</MenuItem>
        </Menu>
        <div>
          <Form className={styles.form}>
            <FormItem>
              {
                list.map(object => (
                  <Item
                    key={object.id}
                    data={object}
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

export default AddressList;
