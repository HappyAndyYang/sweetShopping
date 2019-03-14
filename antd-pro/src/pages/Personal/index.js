import React, { Component } from 'react';
import { Input, Button, Form, message } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import PersonalMenu from '@/components/Personal/PersonalMenu/index';
import { getSeq, authoryzed } from '@/utils/utils';

import styles from './index.less';

const FormItem = Form.Item;

@connect(({ personal, global, login }) => ({
  personal, global, login,
}))
class PersonalInfo extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const authFlag = authoryzed();
    if (!authFlag) {
      dispatch(routerRedux.push('/login'));
      message.error('登录超时，请重新登录');
    }
  }

  handleSubmit = () => {
    const {
      dispatch,
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        // const { name, password, address, mobile, verifyCode } = values;
        dispatch({
          type: 'personal/update',
          payload: values,
        });
      }
    });
  }

  getVerifyCode = () => {
    const { dispatch } = this.props;
    const { userName } = JSON.parse(localStorage.login);
    const data = {
      userName,
      seq: getSeq(),
    };
    dispatch({
      type: 'login/getVerifyCode',
      payload: data,
    });
  }

  render() {
    const { global, dispatch, form: { getFieldDecorator } } = this.props;
    return (
      <div>
        <div><Header nomal dispatch={dispatch} global={global} /></div>
        <div className={styles.layout}>
          <div className={styles.container}>
            <div className={styles.menuStyle}>
              <PersonalMenu dispatch={dispatch} />
            </div>
            <div className={styles.contentStyle}>
              <div className={styles.content}>
                <div>
                  <h1>个人信息修改</h1>
                  <Form>
                    <FormItem>
                      {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入姓名！' }],
                      })(
                        <div className={styles.personalInfo}>
                          <span className={styles.lable}>姓名:</span>
                          <Input placeholder="Name" className={styles.input} />
                        </div>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！' }],
                      })(
                        <div className={styles.personalInfo}>
                          <span className={styles.lable}>密码:</span>
                          <Input type="password" placeholder="Password" className={styles.input} />
                        </div>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('address', {
                        rules: [{ required: true, message: '请输入联系地址!' }],
                      })(
                        <div className={styles.personalInfo}>
                          <span className={styles.lable}>联系地址:</span>
                          <Input placeholder="Address" className={styles.input} />
                        </div>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('mobile', {
                        rules: [{ required: true, message: '请输入手机号码！' }],
                      })(
                        <div className={styles.personalInfo}>
                          <span className={styles.lable}>手机号码:</span>
                          <Input placeholder="Mobile" className={styles.input} />
                        </div>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('verifyCode', {
                        rules: [{ required: true, message: '请输入验证码！' }],
                      })(
                        <div className={styles.personalInfo}>
                          <span className={styles.lable}>验证码：</span>
                          <Input placeholder="验证码" className={styles.input} />
                        </div>
                      )}
                    </FormItem>
                    <FormItem>
                      <div className={styles.personalInfo}>
                        <Button className={styles.login_form_button} onClick={this.getVerifyCode}>
                          获取验证码
                        </Button>
                        <Button className={styles.login_form_button} onClick={this.handleSubmit}>
                          确定
                        </Button>
                      </div>
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div><Footer /></div>
      </div>
    );
  }
}

const BasicPersonalInfo = Form.create()(PersonalInfo);
export default BasicPersonalInfo;
