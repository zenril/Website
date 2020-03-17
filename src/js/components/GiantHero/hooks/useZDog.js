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
            x: -0.3
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
                x: -1.3
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
        scale: 0.3
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
    distance = 50,
    lowColor = 205,
    highColor = 209,
    lowLandColor = 92,
    highLandColor = 119,
    iceLowLandColor = 76,
    iceHighLandColor = 87;

    let rPos = {
        x : 0,
        y : -1
    };

    let cap1 = [];
    let cap2 = [];

    for(let angle = 0; angle < Math.PI * 2; angle += i) {
        rPos.y++;

        rPos.x = 0;
        for(let rotation = 0; rotation < Math.PI; rotation += i) {
            rPos.x++
            let { getVectors, getVectorFromRotation } = createPolygon(rotation,angle,i),
                center = getVectorFromRotation(),
                isLand = false,
                isCloud = false,
                isCap = false,
                isIce = false;

            // if(rPos.y == 23 || rPos.y == 24 || rPos.y == 1) {
            //     isIce = true;
            // }

            let vectors = getVectors(({x,y,z}) => {

                let noiseLocation = simplex.noise3d(x,y,z),
                    isLand = noiseLocation > 0.3;

                let dSmooth = 2,
                    d = distance + Math.abs(isLand? (simplex.noise(x/dSmooth,y/dSmooth,z/dSmooth) * 10) : 0);

                return {
                    x : d * x,
                    z : d * z,
                    y : d * y,
                    isLand
                };
            });

            if(rPos.y == 0) {
                isCap = true;
                //vectors = vectors.filter((e,i) => i != 0);

                // new Zdog.Hemisphere({
                //     addTo: p,
                //     diameter: 2,
                //     translate: vectors[1],
                //     // fill enabled by default
                //     // disable stroke for crisp edge
                //     stroke: false,
                //     color: '#f0f',
                //     backface: '#f0f',
                // });

                continue;
            }
            if(rPos.y == 12) {
                isCap = true;
                isCap = true;
                cap2.push(vectors[0]);
                cap2.push(vectors[1]);
                cap2.unshift(vectors[3]);
                cap2.unshift(vectors[2]);

                continue;
            }
            // if(rPos.y == 23) {

            //      continue;
            // }
            if(rPos.y == 24) {
                isCap = true;
                cap1.push(vectors[0]);
                cap1.push(vectors[1]);
                cap1.unshift(vectors[3]);
                cap1.unshift(vectors[2]);
                 continue;
            }

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

            let color = `hsla(${lowColor + Math.random() * (highColor - lowColor) << 0},100%,${isCloud ? 40 : 50}%,1)`;

            color = !isLand ? color : `hsla(${lowLandColor + Math.random() * (highLandColor - lowLandColor) << 0},100%,${isCloud ? 20 : 25}%,1)`;
            color = !isIce ? color : `hsla(0,0,${iceLowLandColor + Math.random() * (iceHighLandColor - iceLowLandColor) << 0}%,1)`;

            new Zdog.Shape({
                addTo: p,
                path: vectors,
                closed: true,
                stroke: 0,
                fill: true,
                color
            });

            if(isCloud) {
                new Zdog.Shape({
                    addTo: p,
                    path: cloudVectors,
                    closed: true,
                    stroke: 0.001,
                    fill: true,
                    color: 'rgba(255,255,255, 0.5)'
                });
            };



        }
    }
    if(cap1.length) {
        new Zdog.Shape({
            addTo: p,
            path: cap1,
            closed: true,
            stroke: 0,
            fill: true,
            color: `hsla(${lowLandColor + Math.random() * (highLandColor - lowLandColor) << 0},100%,25%,1)`
        });
    }

    if(cap2.length) {
        new Zdog.Shape({
            addTo: p,
            path: cap2,
            closed: true,
            stroke: 0,
            fill: true,
            color: `hsla(${lowLandColor + Math.random() * (highLandColor - lowLandColor) << 0},100%,25%,1)`
        });
    }
}

