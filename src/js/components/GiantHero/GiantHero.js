import React, { Component, useRef, useState, useEffect } from 'react';
import { GiantHero } from './GiantHero.styled';
import  { Star } from './Star.styled';
import useZDog from './hooks/useZDog';

export default (props) => {
  let {children, ...rest} = props;
  let [stars, setStars] = useState([]);
  let zdog = useRef();

  useEffect(() => {
    let starsBuffer = [],
      lowerLimit = 40,
      upperLimit = 50,
      minXBorderPercent = 0,
      maxXBorderPercent = 100,
      minYBorderPercent = 0,
      maxYBorderPercent = 100;

    for (let starIndex = 0; starIndex < lowerLimit + Math.random() * (upperLimit - lowerLimit); starIndex++) {
      let x = minXBorderPercent + Math.random() * (maxXBorderPercent - minXBorderPercent);
      let y = minYBorderPercent + Math.random() * (maxYBorderPercent - minYBorderPercent);

      starsBuffer.push({
        left: x + '%',
        top: y + '%'
      });
    }


    setStars(starsBuffer);

  }, []);

  useZDog(zdog);

  return (
    <GiantHero {...rest}>
        {
          stars.map((style) => {
            return (
              <Star key={style.left + style.top} style={style} />
            )
          })
        }
      <div>
        <canvas style={{zIndex : 2, position : "absolute"}} ref={zdog} width={window.innerWidth} height={window.innerHeight}></canvas>
      </div>
      <div>
        {children}
      </div>
    </GiantHero>
  );
}
