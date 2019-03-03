import React, { Component } from 'react';
import { Table, Form, Menu } from 'antd';
import moment from 'moment';
import { Status2Name } from '@/utils/utils';
import styles from '../index.less';

function imgUrl(record) {
  if (record) {
    const { productImg, deviceImg } = record;
    if (productImg) {
      return productImg;
    }
    return deviceImg;
  }
}

const status = [{
  status: 1,
  name: '已发货',
}, {
  status: 2,
  name: '运输中',
}, {
  status: 3,
  name: '已完成',
}, {
  status: 0,
  name: '状态未知',
}];

const columns = [{
  title: '订单编号',
  dataIndex: 'recordNum',
  key: 'recordNum',
  render: (createTime, record) => orderRecord(createTime, record),
}, {
  title: '订单日期',
  dataIndex: 'createTime',
  key: 'createTime',
}, {
  title: '物流状态',
  dataIndex: 'status',
  key: 'status',
  render: val => <span>{Status2Name(status, val)}</span>,
}];

function orderRecord(text, record) {
  const { createTime, id } = record;
  const orderNumber = moment(createTime).format('YYYYMMDDHHmmss');
  return (
    <div>
      <div>{`${orderNumber}${id}`}</div>
      <img src={imgUrl(record)} alt="Norway" className={styles.orderRecordImg} />
    </div>
  );
}

const FormItem = Form.Item;
const MenuItem = Menu.Item;
class OrderList extends Component {
  render() {
    const { orderlist: { data: { list } } } = this.props;
    console.log('list==>', list);
    return (
      <div className={styles.content}>
        <Menu
          mode="horizontal"
          className={styles.listMenu}
          defaultSelectedKeys={['1']}
          theme="light"
        >
          <MenuItem key="1">我的订单</MenuItem>
        </Menu>
        <Table dataSource={list} columns={columns} className={styles.table} />
        <Form className={styles.form}>
          {
            list.map(object => (
              <FormItem key={object.id}>
                <img src={object.deviceImg} alt="Norway" className={styles.orderRecordImg} />
                <div>
                  订单编号:
                  {object.createTime}
                </div>
                <div>
                  订单日期:
                  {object.createTime}
                </div>
                <div>
                  物流状态:
                  {object.status}
                </div>
              </FormItem>
            ))
          }
        </Form>
      </div>
    );
  }
}

export default OrderList;
