function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("iQIUW"),s=o("fZKcF"),l=o("klpux"),a=o("2QAIP"),c=o("j6PhK");const d=document.querySelector(".search-form"),u=document.querySelector(".gallery"),h=document.querySelector(".load-more"),f=document.querySelector(".js-guard");let y=1,g=0,m="";const p=new(e(s))(".gallery a",{captionsData:"alt",captionDelay:250});let w=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(y+=1,(0,l.fetchImages)(m,y,40).then((e=>{v(e.hits),p.refresh(),y===Math.ceil(e.totalHits/40)&&(h.classList.add("is-hidden"),i.Notify.warning("We're sorry, but you've reached the end of search results."),t.unobserve(f)),(0,c.smoothScroll)(u)})).catch((e=>console.log(e))))}))}),{root:null,rootMargin:"300px",threshold:1});function v(e){u.insertAdjacentHTML("beforeend",(0,a.createMarkup)(e))}({element:document.querySelector(".btn-up"),show(){this.element.hidden=!1},hide(){this.element.hidden=!0},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>500?this.show():this.hide()})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener(),d.addEventListener("submit",(function(e){if(e.preventDefault(),function(){u.innerHTML="",y=1}(),m=e.target.elements.searchQuery.value.trim(),!m)return i.Notify.failure("Enter a search string");(0,l.fetchImages)(m,y,40).then((e=>{if(!e.hits.length&!e.totalHits)return h.classList.add("is-hidden"),i.Notify.failure("Sorry, there are no images matching your search query. Please try again.");g=e.totalHits,1===y&&i.Notify.success(`Hooray! We found ${g} images.`),v(e.hits),p.refresh(),w.observe(f),e.hits.length===e.totalHits&&(h.classList.add("is-hidden"),i.Notify.warning("We're sorry, but you've reached the end of search results.")),e.hits.length,e.totalHits})).catch((e=>console.log(e)))}));
//# sourceMappingURL=02-hw11-pagination.986981d6.js.map