function o(o){const e={strawberry:"🍓",kiwi:"🥝 ",apple:"🍎"};return new Promise(((t,n)=>setTimeout((()=>t(e[o])),500)))}(async function(){try{console.time("aMakeSmoothie");const e=o("apple"),t=o("kiwi"),n=o("strawberry"),i=await Promise.all([e,t,n]);return console.log(i),console.timeEnd("aMakeSmoothie"),i}catch(o){console.log("Ошибка")}})().then((o=>console.log("Вывод во внешнем коде :",o)));
//# sourceMappingURL=03-async.32399cb9.js.map
