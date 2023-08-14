function o(o){const e={strawberry:"🍓",kiwi:"🥝 ",apple:"🍎"};return new Promise(((t,i)=>setTimeout((()=>t(e[o])),500)))}!async function(){try{console.time("aMakeSmoothie");const e=o("apple"),t=o("kiwi"),i=o("strawberry"),n=await Promise.all([e,t,i]);console.log(n),console.timeEnd("aMakeSmoothie")}catch(o){console.log("Ошибка")}}();
//# sourceMappingURL=03-async.2c50d626.js.map
