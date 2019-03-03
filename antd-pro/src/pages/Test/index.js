import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { getSeq } from '@/utils/utils';

@connect(({ product }) => ({
  product,
}))
class Test extends Component {
  onClick = () => {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'test/test',
    //   payload: {
    //     param1: 'param1',
    //     param2: 'param2',
    //     seq: getSeq(),
    //   },
    // });
    dispatch({
      type: 'product/query',
      payload: { seq: getSeq() },
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>测试</Button>
      </div>
    );
  }
}

export default Test;
