!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var s=i("bpxeT"),a=i("2TvXO"),o=i("h6c0i"),c=i("5IjG7"),l=i("dmKTG"),u=i("8QEe8"),d=i("bsnJ6"),f=document.querySelector(".search-form"),h=document.querySelector(".gallery"),y=document.querySelector(".load-more"),p=(document.querySelector(".js-guard"),1),g=0,m="",v=new(e(c))(".gallery a",{captionsData:"alt",captionDelay:250});function b(){return(b=e(s)(e(a).mark((function t(){var r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p+=1,e.prev=1,e.next=4,(0,l.fetchImages)(m,p,40);case 4:w((r=e.sent).hits),v.refresh(),p===Math.ceil(r.totalHits/40)?(y.classList.add("is-hidden"),o.Notify.warning("We're sorry, but you've reached the end of search results.")):y.classList.remove("is-hidden"),(0,d.smoothScroll)(h),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function w(e){h.insertAdjacentHTML("beforeend",(0,u.createMarkup)(e))}f.addEventListener("submit",(function(e){if(e.preventDefault(),function(){h.innerHTML="",p=1}(),!(m=e.target.elements.searchQuery.value.trim()))return o.Notify.failure("Enter a search string");(0,l.fetchImages)(m,p,40).then((function(e){if(!e.hits.length&!e.totalHits)return y.classList.add("is-hidden"),o.Notify.failure("Sorry, there are no images matching your search query. Please try again.");g=e.totalHits,1===p&&o.Notify.success("Hooray! We found ".concat(g," images.")),w(e.hits),v.refresh(),e.hits.length===e.totalHits&&(y.classList.add("is-hidden"),o.Notify.warning("We're sorry, but you've reached the end of search results.")),e.hits.length<e.totalHits&&y.classList.remove("is-hidden")})).catch((function(e){return console.log(e)}))})),y.addEventListener("click",(function(){return b.apply(this,arguments)}))}();
//# sourceMappingURL=index-old.012dc0bb.js.map
