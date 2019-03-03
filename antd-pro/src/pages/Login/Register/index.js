import React, { Component } from 'react';
import { connect } from 'dva';

import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';

@connect(({ login, global }) => ({
  login, global,
}))
class Register extends Component {
  render() {
    const { dispatch, global } = this.props;
    return (
      <div>
        <div><Header register dispatch={dispatch} global={global} /></div>
        <div style={{ top: '50%', marginTop: '300px' }}><Footer /></div>
      </div>
    );
  }
}

export default Register;
