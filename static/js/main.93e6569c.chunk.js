(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(50)},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(13),i=a.n(o),l=(a(25),"057cc4c4e7b92c5c2e48e743711385a2"),r="https://image.tmdb.org/t/p/original",s=("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(l,"&language=en-US"),"https://api.themoviedb.org/3/discover/movie?api_key=".concat(l,"&with_genres=28")),m="https://api.themoviedb.org/3/discover/tv?api_key=".concat(l,"&with_networks=213"),u="https://api.themoviedb.org/3/discover/movie?api_key=".concat(l,"&with_genres=35"),d="https://api.themoviedb.org/3/discover/movie?api_key=".concat(l,"&with_genres=27"),p=("https://api.themoviedb.org/3/discover/movie?api_key=".concat(l,"&with_genres=28"),"https://api.themoviedb.org/3/discover/movie?api_key=".concat(l,"&with_genres=10749"));a(27);var g=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:""}),c.a.createElement("img",{className:"avathar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:""}))},v=a(6),h=a(52).a.create({baseURL:"https://api.themoviedb.org/3"});a(33);var b=function(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){h.get("/trending/all/week?api_key=".concat(l,"&language=en-US")).then(function(e){o(e.data.results[Math.floor(20*Math.random()+1)])})},[]),console.log(a),c.a.createElement("div",{style:{backgroundImage:"linear-gradient(to bottom, #00000000, #000000bd), url(".concat(a?r+a.backdrop_path:"",")")},className:"banner"},c.a.createElement("div",{className:"content"},c.a.createElement("h1",{className:"title"},a?a.title:""),c.a.createElement("div",{className:"banner_button"},c.a.createElement("button",{className:"button"},c.a.createElement("i",{className:"fa-solid fa-play"})," Play"),c.a.createElement("button",{className:"button"},c.a.createElement("i",{className:"fa-solid fa-plus"})," My list")),c.a.createElement("p",{className:"discription"},a?a.overview:"")))},E=a(16);a(35);var f=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(""),m=Object(v.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){h.get("".concat(e.url)).then(function(e){i(e.data.results)})},[]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",{key:"HELLO"},e.title),c.a.createElement("div",{className:"posters"},o.map(function(t,a){return c.a.createElement("img",{key:a,onClick:function(){return e=t.id,d(null),console.log(u),console.log(e),console.log(l),void h.get("/movie/".concat(e,"/videos?api_key=").concat(l,"&language=en-US")).then(function(e){0!==e.data.results.length&&d(e.data.results[0].key)});var e},className:e.isSmall?"smallPoster":"poster",src:"".concat(r+t.poster_path),alt:""})})),u?c.a.createElement(E.a,{videoId:"".concat(u),opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):null)};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(b,null),c.a.createElement(f,{title:"Netflix Originals",url:m}),c.a.createElement(f,{title:"Actions",url:s,isSmall:!0}),c.a.createElement(f,{title:"Comedy Movies",url:u}),c.a.createElement(f,{title:"Romance Movies",url:p,isSmall:!0}),c.a.createElement(f,{title:"Horror Movies",url:d}))};i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)))}},[[17,2,1]]]);
//# sourceMappingURL=main.93e6569c.chunk.js.map