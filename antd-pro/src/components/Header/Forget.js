import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, message } from 'antd';
import { getSeq, checkPhone, checkPassword } from '@/utils/utils';

import styles from './index.less';

const FormItem = Form.Item;

class Forget extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { userName, verifyCode, password } = values;
        const data = {
          userName,
          password,
          verifyCode,
        };
        if (!userName) {
          message.error('请输入手机号码！');
        } else if (!password) {
          message.error('请输入密码！');
        } else if (!verifyCode) {
          message.info('请输入验证码！');
        } else if (checkPhone(userName) && checkPassword(password)) {
          dispatch({
            type: 'login/forget',
            payload: data,
          });
        }
      }
    });
  }

  getVerifyCode = () => {
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { userName } = values;
        const data = {
          userName,
          seq: getSeq(),
        };
        if (!userName) {
          message.error('请输入手机号码');
        } else if (checkPhone(userName)) {
          dispatch({
            type: 'login/getVerifyCode',
            payload: data,
          });
        }
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const windowWidth = document.body.clientWidth;
    let spanNum1 = 15;
    let spanNum2 = 5;
    if (windowWidth < 550) {
      spanNum1 = 10;
      spanNum2 = 3;
    }
    return (
      <div className={styles.login_bg}>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
            )}
          </FormItem>
          <FormItem>
            <Row>
              <Col span={spanNum1}>
                {getFieldDecorator('verifyCode', {
                  rules: [{ message: '请输验证码！' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="验证码" />
                )}
              </Col>
              <Col span={spanNum2}><Button style={{ marginLeft: '10px' }} onClick={this.getVerifyCode}>获取验证码</Button></Col>
            </Row>
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ message: '请输入密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.login_form_button}>
              确认
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const BasicForget = Form.create()(Forget);

export default BasicForget;
