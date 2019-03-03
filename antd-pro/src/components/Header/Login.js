import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { Form, Icon, Input, Checkbox, Button } from 'antd';
import { getSeq, checkPassword } from '@/utils/utils';

import styles from './index.less';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { userName, password, remember } = values;
        if (checkPassword(password)) {
          dispatch({
            type: 'login/login',
            payload: {
              userName,
              password,
              remember,
              seq: getSeq(),
            },
          });
        }
      }
    });
  }

  register = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/login/register/'));
  }

  forget = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/login/forget/'));
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
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
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className={styles.login_form_forgot} onClick={this.forget}>忘记密码</a>
            <a className={styles.login_form_register} onClick={this.register}>注册</a>
            <Button type="primary" htmlType="submit" className={styles.login_form_button}>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const BasicLogin = Form.create()(Login);

export default BasicLogin;
