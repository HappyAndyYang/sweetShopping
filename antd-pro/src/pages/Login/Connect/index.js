import React, { Component } from 'react';
import { connect } from 'dva';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import SendMessage from './SendMessage';

@connect(({ login, global }) => ({
  login, global,
}))
class Connect extends Component {
  render() {
    const { dispatch, global } = this.props;
    return (
      <div>
        <div><Header index dispatch={dispatch} global={global} /></div>
        <div><SendMessage dispatch={dispatch} /></div>
        <div><Footer /></div>
      </div>
    );
  }
}

export default Connect;
