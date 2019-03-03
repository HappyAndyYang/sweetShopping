import React, { Component } from 'react';

import styles from './style.less';

class Customer extends Component {
  render() {
    return (
      <div className={styles.customer}>
        <div>
          <h2>CUSTOMER SAYS...</h2>
          <div className={styles.customer_content}>
            {
              'Design must be functional and functionality must be translated into visual easthetics, '
              + 'without any reliance on gimmicks that to be expained.'
            }
          </div>
          <div className={styles.customer_person}>- ferdinand A. Porsche</div>
        </div>
      </div>
    );
  }
}

export default Customer;
