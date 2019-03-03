import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { Layout, Menu/* , Button */ } from 'antd';

import Login from './login';
import Register from './Register';
import Forget from './Forget';
import styles from './index.less';

const { Header } = Layout;
const MenuItem = Menu.Item;

class BasicHeader extends Component {
  onClick = ({ key }) => {
    const { dispatch } = this.props;
    const data = {
      defaultSelectedKeys: [key],
    };
    dispatch({
      type: 'global/menuSelect',
      payload: data,
    });
    switch (key) {
      case '1':
        dispatch((routerRedux.push('/home')));
        break;
      case '2':
        dispatch(routerRedux.push('/product'));
        break;
      case '3':
        dispatch(routerRedux.push('/personal'));
        break;
      case '4':
        dispatch(routerRedux.push('/login'));
        break;
      case '5':
        dispatch(routerRedux.push('/login/connect'));
        break;
      default:
        break;
    }
  }

  render() {
    const { nomal, index, login, register, forget, dispatch/* , flag */ } = this.props;
    const { global: { defaultSelectedKeys } } = this.props;
    return (
      <div className={styles.header_bg}>
        <img src="/bg.jpg" alt="Norway" width="100%" height="100%" />
        <div>
          <Header className={styles.header}>
            <div className={styles.logo} />
            <Menu
              mode="horizontal"
              className={styles.titleMenu}
              defaultSelectedKeys={defaultSelectedKeys}
              theme="light"
              onClick={this.onClick}
            >
              <MenuItem key="1">主页</MenuItem>
              <MenuItem key="2">我们的产品</MenuItem>
              <MenuItem key="3">个人中心</MenuItem>
              <MenuItem key="4">登录</MenuItem>
              <MenuItem key="5">联系我们</MenuItem>
            </Menu>
          </Header>
        </div>
        {
          nomal ? (
            <div className={styles.contentNormal}>
              <div className={styles.text}>上海点甜农业专业合作社</div>
              <div className={styles.text}>ECOLOGICAL AGRICULTURE</div>
            </div>
          ) : null
        }
        {
          index ? (
            <div className={styles.contentNormal}>
              <div className={styles.text}>上海点甜农业专业合作社</div>
              <div className={styles.text}>ECOLOGICAL AGRICULTURE</div>
              {/* <Button className={styles.index_login}>登录</Button> */}
            </div>
          ) : null
        }
        {
          login ? (
            <div className={styles.contentLogin}>
              <Login dispatch={dispatch} />
            </div>
          ) : null
        }
        {
          register ? (
            <div className={styles.contentLogin}>
              <Register dispatch={dispatch} />
            </div>
          ) : null
        }
        {
          forget ? (
            <div className={styles.contentLogin}>
              <Forget dispatch={dispatch} />
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default BasicHeader;
