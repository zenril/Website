import React, { Component, useRef } from 'react';
import { GiantHero } from './GiantHero.styled';
import useZDog from './hooks/useZDog';

export default (props) => {
  let {children, ...rest} = props;
  let zdog = useRef();
  
  useZDog(zdog);

  return (
    <GiantHero {...rest}>
      <div>
        <canvas ref={zdog} width={window.innerWidth} height={window.innerHeight}></canvas>
      </div>
      <div>
        {children}
      </div>
    </GiantHero>
  );
}
