import React, { Component } from 'react';
import { Form, Input, Button, Cascader } from 'antd';
import { getSeq, checkPhone } from '@/utils/utils';
import styles from './index.less';

const FormItem = Form.Item;
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      province: '北京市',
    };
  }

  onChange = (value) => {
    this.setState({
      province: value[0],
    });
  }

  handleSubmit = () => {
    const {
      dispatch,
      form: { validateFields },
    } = this.props;
    const { province } = this.state;
    const { userId } = JSON.parse(localStorage.login);
    validateFields((err, values) => {
      if (!err) {
        const { name, phoneNumber, address } = values;
        if (checkPhone(phoneNumber)) {
          dispatch({
            type: 'addressmanager/addAddress',
            payload: {
              seq: getSeq(),
              type: 0,
              userId,
              name,
              mobile: phoneNumber,
              province,
              address,
            },
          });
        }
      }
    });
  }

  render() {
    const { form: { getFieldDecorator },
      province: {
        data: {
          list,
        },
      },
    } = this.props;
    return (
      <div className={styles.content_add}>
        <Form>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入收货人姓名！' }],
            })(
              <div className={styles.personalInfo}>
                <span className={styles.lable}>收货人：</span>
                <Input placeholder="Name" className={styles.input} />
              </div>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('phoneNumber', {
              rules: [{ required: true, message: '联系电话！' }],
            })(
              <div className={styles.personalInfo}>
                <span className={styles.lable}>联系电话：</span>
                <Input placeholder="mobile" className={styles.input} />
              </div>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('province', {
              rules: [{ message: '请选择省份!' }],
            })(
              <div className={styles.personalInfo}>
                <span className={styles.lable}>所在省份：</span>
                <Cascader options={list} onChange={this.onChange} placeholder="请选择省份" />
              </div>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('address', {
              rules: [{ required: true, message: '请输入详细地址！' }],
            })(
              <div className={styles.personalInfo}>
                <span className={styles.lable}>详细地址：</span>
                <Input placeholder="Address" className={styles.input} />
              </div>
            )}
          </FormItem>
          <FormItem>
            <div className={styles.personalInfo}>
              <Button className={styles.address_btn} onClick={this.handleSubmit}>
                确定
              </Button>
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const BasicAddItem = Form.create()(AddItem);
export default BasicAddItem;
