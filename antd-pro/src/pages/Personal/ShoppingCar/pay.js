import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ pay }) => ({
  pay,
}))
class ShoppingCar extends Component {
  render() {
    const { pay: { seq } } = this.props;
    return (
      <div>
        {seq}
        <p dangerouslySetInnerHTML={{ __html: seq }} />
      </div>
    );
  }
}

export default ShoppingCar;
