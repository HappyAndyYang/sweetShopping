import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import styles from './styles.less';

const FormItem = Form.Item;
const { TextArea } = Input;
class SendMessage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'login/connect',
          payload: values,
        });
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.login_form}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名！' }],
              })(
                <Input placeholder="Name" className={styles.input} />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入邮箱地址！' }],
              })(
                <Input placeholder="Email" className={styles.input} />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: '请输入内容' }],
              })(
                <TextArea autosize={{ minRows: 6, maxRows: 10 }} />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                发送
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className={styles.sendDecs}>
          <h2>Need Help?</h2>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Non, harum autem quaerat vitae cupiditate, aspernatur est fugit,
            commodi optio itaque voluptatum! Beatae quae delectus deserunt
            est ab in sequi blanditiis!
          </div>
          <div className={styles.email}>sweet_tec@163.com</div>
        </div>
      </div>
    );
  }
}

const BasicSendMessage = Form.create()(SendMessage);

export default BasicSendMessage;
