!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("bpxeT"),a=o("2TvXO"),s=o("h6c0i"),c=o("5IjG7"),l=o("dmKTG"),u=o("8QEe8");o("bsnJ6");var d=document.querySelector(".search-form"),f=document.querySelector(".gallery"),h=document.querySelector(".load-more"),p=document.querySelector(".js-guard"),y=1,m=0,v="",g=new(e(c))(".gallery a",{captionsData:"alt",captionDelay:250}),w=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&b(v,y+=1,40)}))}),{root:null,rootMargin:"100px",threshold:1});function b(e,t,n){return x.apply(this,arguments)}function x(){return(x=e(i)(e(a).mark((function t(n,r,o){var i;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.fetchImages)(n,r,o);case 3:if(i=e.sent,console.log(r),!(!i.hits.length&!i.totalHits)){e.next=8;break}return h.classList.add("is-hidden"),e.abrupt("return",s.Notify.failure("Sorry, there are no images matching your search query. Please try again."));case 8:m=i.totalHits,1===r&&s.Notify.success("Hooray! We found ".concat(m," images.")),E(i.hits),g.refresh(),w.observe(p),i.hits.length,i.totalHits,r===Math.ceil(i.totalHits/o)&&(h.classList.add("is-hidden"),s.Notify.warning("We're sorry, but you've reached the end of search results."),w.unobserve(p)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function E(e){f.insertAdjacentHTML("beforeend",(0,u.createMarkup)(e))}({element:document.querySelector(".btn-up"),show:function(){this.element.hidden=!1},hide:function(){this.element.hidden=!0},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>500?e.show():e.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener(),d.addEventListener("submit",(function(e){if(e.preventDefault(),function(){f.innerHTML="",y=1}(),!(v=e.target.elements.searchQuery.value.trim()))return s.Notify.failure("Enter a search string");b(v,y,40)}))}();
//# sourceMappingURL=03-hw11-pagination.243808c3.js.map