import React, { Component, useEffect } from 'react';
import * as Simplex  from 'perlin-simplex';

import Zdog from 'zdog';
const TAU = Zdog.TAU;
let simplex = new Simplex(),
    surfaceFacade = {};

export default (ref) => {
  useEffect(() => {
    let isSpinning = true;
    ref.current.id = 'zdog-' + (Math.random()).toString(16).substr(2)

    let illo = new Zdog.Illustration({
      // set canvas with selector
      element: `#${ref.current.id}`,
      zoom: 5,
      dragRotate: true,      // stop rotation when dragging starts
      onDragStart: function() {
        isSpinning = false;
      },
    });
    
    Circle(illo);
    
    // update & render
    // illo.updateRenderGraph();

    function animate() {
      // rotate
      if ( isSpinning ) {
        illo.rotate.y -= 0.005;
        // illo.rotate.z += 0.003;
      }
      illo.updateRenderGraph();
      requestAnimationFrame( animate );
    }
    animate();

  }, []);
}


let createPolygon = (rotation, angle, increment) => {
    let getVectorFromRotation = (r,a, modifier ) => {
        modifier = modifier ? modifier : (ree) => ree;
        r = typeof r != 'undefined' ? r : rotation,
        a = typeof a != 'undefined' ? a : angle;

        return modifier({
            x : Math.cos(r) * Math.sin(a),
            z : Math.sin(r) * Math.sin(a),
            y : Math.cos(a)
        });
    }
    let getVectors= (modifier) => {
        return [
            getVectorFromRotation(rotation - (increment/2), angle - (increment/2),modifier),
            getVectorFromRotation(rotation + (increment/2), angle - (increment/2),modifier),
            getVectorFromRotation(rotation + (increment/2), angle + (increment/2),modifier),
            getVectorFromRotation(rotation - (increment/2), angle + (increment/2),modifier)
        ];
    }
    return {getVectors, getVectorFromRotation};
}

let test = (p) => {
  let segments = 12,
    i = ((Math.PI * 2) / segments) / 2,
    distance = 50;
    for(let angle = 0; angle < Math.PI * 2; angle += i){
        for(let rotation = 0; rotation < Math.PI; rotation += i){

            let { getVectors, getVectorFromRotation } = createPolygon(rotation,angle,i),
                center = getVectorFromRotation();

            let isLand = simplex.noise3d(center.x  ,center.y  ,center.z  ) > 0,
                isCloud = simplex.noise3d(center.x ,center.y ,center.z  ) > 0.2;

            let lowColor = 205,
                highColor = 209,
                lowLandColor = 92,
                highLandColor = 119,
                color = `hsla(${lowColor + Math.random() * (highColor - lowColor) << 0},100%,50%,1)`;
            
            color = !isLand ? color : `hsla(${lowLandColor + Math.random() * (highLandColor - lowLandColor) << 0},100%,25%,1)`;

            new Zdog.Shape({
                addTo: p,
                path: getVectors(({x,y,z}) => {
                    let dSmooth = 2,
                        d = distance + (true ? (simplex.noise(x/dSmooth,y/dSmooth,z/dSmooth) * 5) : 0);
    
                    return {
                        x : d * x,
                        z : d * z,
                        y : d * y
                    }
                }),
                closed: true,
                stroke: 0.5,
                fill: true,
                color
            });

        }
    }
}


let Circle = (parent) => {
  let d = 80,
    segments = 22,
    increment = 360 / segments,
    cx  = 0,
    cz = 0,
    cy = 0;

    let cloudRotorA = new Zdog.Anchor({
      addTo: parent
    });
   
  // for (let ydeg = 0; ydeg < 360; ydeg += increment) {
  //   for (let deg = 0; deg < 360; deg += increment) {
  //     let alpha = deg * Math.PI / 180,
  //       yalpha = ydeg * Math.PI / 180,
  //       x = cx + (d * Math.cos(alpha)),
  //       z = cz + (d * Math.sin(alpha)),
  //       y = cy + (d * Math.cos(yalpha));

  //       shape.push({
  //         x,z, y
  //       });
  //   }
  let sort = {

  };

  for(let s = 0; s < Math.PI * 2; s += ((Math.PI * 2) / segments)){
    
    let sego = 0;
    let  shape = [];
    for(var t = 0; t <= Math.PI; t+= (Math.PI/(segments / 2))){
        sego++;
        let x = d * Math.cos(s) * Math.sin(t);
        let z = d * Math.sin(s) * Math.sin(t);
        let y = d * Math.cos(t);

        let isLand = simplex.noise3d(x / 80 ,y / 80 ,z / 80 ) > 0.4;
        let isCloud = simplex.noise3d(x / 80 ,y / 80 ,z / 80 ) > 0.2;

        
        let opts = {};
        if(sego <= 2 || sego >= (segments / 2) ) {
          // opts = {
          //   color : '#ffffff'
          // };
          // isLand = false;
          isCloud = false;


        }
        

        let modd = !isLand ? d : d + (Math.abs(simplex.noise(x / 180, y / 180 ,z / 180 )) * 15);

        let modx = modd * Math.cos(s) * Math.sin(t);
        let modz = modd * Math.sin(s) * Math.sin(t);
        let mody = modd * Math.cos(t);

        if(isCloud) {
         
          let cloud = {
            x : (d + 10) * Math.cos(s) * Math.sin(t),
            z : (d + 10) * Math.sin(s) * Math.sin(t),
            y : (d + 10) * Math.cos(t)
          } 

          for (let ci = 0; ci < 40; ci++) {

            cloud.x += (Math.random() - 0.5) * 5;
            cloud.z += (Math.random() - 0.5) * 5;
            cloud.y += (Math.random() - 0.5) * 5;

            var bigCloudPuff = new Zdog.Shape({
              addTo: cloudRotorA,
              translate: cloud,
              stroke: 5 + Math.random() * 5,
              scale: 5 + Math.random() * 2,
              color: "rgba(255,255,255,0.05)",
            });
          }
          
        }

        // let modx = x + Math.abs(isLand ? (simplex.noise(y / 180 ,z / 180 ) * 15) : 0);
        // let modz = z + Math.abs(isLand ? (simplex.noise(x / 180 ,y / 180) * 15) : 0);
        // let mody = y + Math.abs(isLand ? (simplex.noise(x / 180 ,z / 180) * 15) : 0);

      if(!sort[y]) sort[y] = [];
      
      sort[y].unshift({
        x : modx ,z : modz, y: mody,
        isLand,
        ...opts
      });
    }
   
  }

  let rings = Object.values(sort);

  // for (const ring of rings) {
    // new Zdog.Shape({
    //   addTo: parent,
    //   path: ring,
    //   closed: false,
    //   stroke: 1,
    //   color: '#636',
    // });
  // }

  let saturation = 129 / 255 * 100;
  let light = 194 / 255 * 100;

  for (let index = 0; index < rings.length ; index++) {
    const ring = rings[index],
      nextring = rings[index+1];

      if(!nextring) continue;

      // console.log(ring);
      
      for (let pi = 0; pi < segments; pi+=1) {
        let next = pi >= segments? 0 :pi+1,
          
          point1 = ring[pi],
          point2 = ring[next],
          point3 = nextring[next],
          point4 = nextring[pi],
          path = [point1, point2, point3, point4],
          isLand = false;

          for (const point of path) {
           if(!isLand) isLand = point.isLand;
          }

          for (const point of path) {
            // point.x += (simplex.noise(point.y / 180 ,point.z / 180 ) * 10);
            // point.z += (simplex.noise(point.x / 180 ,point.y / 180) * 10);
            // point.y += (simplex.noise3d(point.x / 180 ,point.z / 180) * 10);
          }

          
          let lowColor = 205,
            highColor = 209,
            lowLandColor = 92,
            highLandColor = 119,
            color = `hsla(${lowColor + Math.random() * (highColor - lowColor) << 0},100%,50%,1)`;


           

          color = !isLand ? color : `hsla(${lowLandColor + Math.random() * (highLandColor - lowLandColor) << 0},100%,25%,1)`;

          for (const point of path) {
            if(point.color) color = point.color;
          }

          new Zdog.Shape({
              addTo: parent,
              path,
              closed: true,
              stroke: isLand? 1: 0,
              color,
              fill: true
            });
        
      }
      // new Zdog.Shape({
      //   addTo: parent,
      //   path: ring,
      //   closed: false,
      //   stroke: 1,
      //   color: '#636',
      // });
    
  }
}

