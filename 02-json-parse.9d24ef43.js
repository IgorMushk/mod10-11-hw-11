!function(){console.log('{ "name": "Манго", "age": 3 }');try{console.log(1),console.log(JSON.parse("{ бекенд вернул вот такое чудо }")),console.log(2)}catch(o){console.log(o),"SyntaxError"===o.name&&console.log("Ошибка парса json надо чтото сделать")}console.log("После try...catch")}();
//# sourceMappingURL=02-json-parse.9d24ef43.js.map
