(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{Dfx6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=o.a.createElement;t.default=function(e){var t=e.imageURL,c=Object(r.useState)(o.a.createRef())[0],i=function(e){var n;e.preload=function(){n=e.loadImage(t)},e.setup=function(){e.createCanvas(300,300),n.loadPixels();for(var t=0;t<n.width;t++)for(var r=0;r<n.height;r++){var o=.299*e.red(n.get(t,r))+.587*e.green(n.get(t,r))+.114*e.blue(n.get(t,r));n.set(t,r,e.color(o,o,o))}n.updatePixels(),e.noLoop()},e.draw=function(){e.image(n,0,0,300,300)}};return Object(r.useEffect)((function(){new(n("NCWt"))(i,c.current)}),[]),a("div",{ref:c})}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}}]);