function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var s=o("iQIUW"),i=o("fZKcF"),a=o("klpux"),l=o("2QAIP"),c=o("j6PhK");const d=document.querySelector(".search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".load-more");document.querySelector(".js-guard");let h=1,y=0,g="";const m=new(e(i))(".gallery a",{captionsData:"alt",captionDelay:250});function p(e){u.insertAdjacentHTML("beforeend",(0,l.createMarkup)(e))}d.addEventListener("submit",(function(e){if(e.preventDefault(),function(){u.innerHTML="",h=1}(),g=e.target.elements.searchQuery.value.trim(),!g)return s.Notify.failure("Enter a search string");(0,a.fetchImages)(g,h,40).then((e=>{if(!e.hits.length&!e.totalHits)return f.classList.add("is-hidden"),s.Notify.failure("Sorry, there are no images matching your search query. Please try again.");y=e.totalHits,1===h&&s.Notify.success(`Hooray! We found ${y} images.`),p(e.hits),m.refresh(),e.hits.length===e.totalHits&&(f.classList.add("is-hidden"),s.Notify.warning("We're sorry, but you've reached the end of search results.")),e.hits.length<e.totalHits&&f.classList.remove("is-hidden")})).catch((e=>console.log(e)))})),f.addEventListener("click",(async function(){h+=1;try{const e=await(0,a.fetchImages)(g,h,40);p(e.hits),m.refresh(),h===Math.ceil(e.totalHits/40)?(f.classList.add("is-hidden"),s.Notify.warning("We're sorry, but you've reached the end of search results.")):f.classList.remove("is-hidden"),(0,c.smoothScroll)(u)}catch(e){console.log(e)}}));
//# sourceMappingURL=index-old.fab49eb7.js.map
