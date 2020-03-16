import React from 'react';
import { btn } from './Button.module';

export default (props) => {
  let {children, ...rest} = props;
  
  return (
    <button className={btn}>
      {children}
    </button>
  );
}
