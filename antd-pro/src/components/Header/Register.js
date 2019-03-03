import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { checkPassword } from '@/utils/utils';

import styles from './index.less';

const FormItem = Form.Item;

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { userName, password, confirmPassword } = values;
        if (password !== confirmPassword) {
          message.error('密码输入有误，请检查密码');
        } else if (checkPassword(password)) {
          const data = {
            userName,
            password,
          };
          dispatch({
            type: 'login/register',
            payload: data,
          });
        }
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <div className={styles.login_bg}>
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输邮箱或手机号码！' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirmPassword', {
              rules: [{ required: true, message: '请确认密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.login_form_button}>
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const BasicRegister = Form.create()(Register);

export default BasicRegister;
