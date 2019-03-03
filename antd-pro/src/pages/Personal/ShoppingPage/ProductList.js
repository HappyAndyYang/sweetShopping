import React, { Component } from 'react';
import { Menu, Form } from 'antd';
import { getSeq } from '@/utils/utils';

import styles from './index.less';
import Item from './Item';

const MenuItem = Menu.Item;
const FormItem = Form.Item;
function imgUrl(productInfo) {
  if (productInfo && productInfo.length !== 0) {
    const { productImg } = productInfo[0];
    return productImg;
  }
}
class Products extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'shopping/query',
      payload: {
        seq: getSeq(),
        type: 2,
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
      shopping: {
        data: {
          list,
        },
      },
    } = this.props;
    return (
      <div className={styles.titleItem}>
        <div>
          <Menu
            mode="horizontal"
            className={styles.titleMenu}
            defaultSelectedKeys={['1']}
            theme="light"
            onSelect={selectedKeys => this.onSelect(selectedKeys)}
          >
            <MenuItem key="1">农产品列表</MenuItem>
            <MenuItem key="2">设备列表</MenuItem>
          </Menu>
        </div>
        <div>
          <Form>
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

export default Products;
