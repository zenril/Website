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
      rotate: {
          x: -0
      },
      onDragStart: function() {
        isSpinning = false;
      },
    });

    let cloudRotorA = new Zdog.Anchor({
        addTo: illo
    });
    

    var group = new Zdog.Group({
        addTo: illo,
        rotate: {
            x: -0.3
        }
    });

    test(cloudRotorA);
    rocket(group);

    // update & render
    // illo.updateRenderGraph();

    function animate() {
      // rotate
        if ( isSpinning ) {
            cloudRotorA.rotate.y -= 0.01;
        }

        // group.rotate.x += 0.01;
        // group.rotate.z += 0.01;
        group.rotate.y -= 0.01;

        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }
    animate();

  }, []);
}


let rocket = (p) => {
    console.log(TAU);

    var group = new Zdog.Group({
        addTo: p,
        rotate: {
            z:0.9,
            x:0.4
        },
        translate: { z: 90 },
        scale: 0.8
    });

    new Zdog.Box({
        addTo: group,
        width: 5,
        height: 5,
        depth: 3,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:-4,
            z:-0.8
        },
        rotate: {
            y:0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:-7,
            z:-0.6
        },
        rotate: {
            y:-0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:-10,
            z:-0.8
        },
        rotate: {
            y:0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:-13,
            z:-0.6
        },
        rotate: {
            y:-0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:-16,
            z:-0.8
        },
        rotate: {
            y:0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });
    //positive

    

    new Zdog.Box({
        translate:{
            x:4,
            z:-0.6
        },
        rotate: {
            y:-0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:7,
            z:-0.8
        },
        rotate: {
            y:0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:10,
            z:-0.6
        },
        rotate: {
            y:-0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:13,
            z:-0.8
        },
        rotate: {
            y:0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });

    new Zdog.Box({
        translate:{
            x:16,
            z:-0.6
        },
        rotate: {
            y:-0.4
        },
        addTo: group,
        width: 3,
        height: 4,
        depth: 0.5,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
    });
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

    let rPos = {
        x : 0,
        y : 0
    };

    for(let angle = 0; angle < Math.PI * 2; angle += i){
        rPos.y++;
        for(let rotation = 0; rotation < Math.PI; rotation += i){
            rPos.x++
            let { getVectors, getVectorFromRotation } = createPolygon(rotation,angle,i),
                center = getVectorFromRotation(),
                isLand = false,
                isCloud = false;





            let vectors = getVectors(({x,y,z}) => {

                let noiseLocation = simplex.noise3d(x,y,z),
                    isLand = noiseLocation > 0.3;

                let dSmooth = 2,
                    d = distance + Math.abs(isLand ? (simplex.noise(x/dSmooth,y/dSmooth,z/dSmooth) * 10) : 0);

                return {
                    x : d * x,
                    z : d * z,
                    y : d * y,
                    isLand
                };
            });


            let cloudVectors = getVectors(({x,y,z}) => {

                let noiseLocation = simplex.noise3d(x/1.2,z/1.2,y/1.2),
                    isCloud = noiseLocation > 0.7;

                let dSmooth = 2,
                    d = distance + 10;

                return {
                    x : d * x,
                    z : d * z,
                    y : d * y,
                    isCloud
                };
            });



            for (const vector of vectors) {
                if(!isLand) isLand = vector.isLand;
            }

            for (const vector of cloudVectors) {
                if(!isCloud) isCloud = vector.isCloud;
            }


            let lowColor = 205,
                highColor = 209,
                lowLandColor = 92,
                highLandColor = 119,
                color = `hsla(${lowColor + Math.random() * (highColor - lowColor) << 0},100%,${isCloud ? 40 : 50}%,1)`;

            color = !isLand ? color : `hsla(${lowLandColor + Math.random() * (highLandColor - lowLandColor) << 0},100%,${isCloud ? 20 : 25}%,1)`;

            new Zdog.Shape({
                addTo: p,
                path: vectors,
                closed: true,
                stroke: 0.5,
                fill: true,
                color
            });

            if(isCloud) {
                new Zdog.Shape({
                    addTo: p,
                    path: cloudVectors,
                    closed: true,
                    stroke: 0.1,
                    fill: true,
                    color: 'rgba(255,255,255, 0.5)'
                });
            };

        }
    }
}

