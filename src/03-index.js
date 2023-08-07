import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabayAPI';
import { createMarkup } from './js/createCards';
import { smoothScroll } from './js/setScroll';

const formSearchRef = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreRef = document.querySelector('.load-more');
// + for infiniti scroll
const target = document.querySelector('.js-guard');

const PER_PAGE = 40;
let currentPage = 1;
let totalHits = 0;
let searchQuery = '';
const simpleLightBoxLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let options = {
  root: null,
  // 300px ->100px
  rootMargin: '100px',
  threshold: 1.0,
};
let observer = new IntersectionObserver(onLoadInfinitiScroll, options);

const btnUp = {
  element: document.querySelector('.btn-up'),
  show() {
    this.element.hidden = false;
  },
  hide() {
    this.element.hidden = true;
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 500 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();

formSearchRef.addEventListener('submit', onSubmitSearch);

function onSubmitSearch(event) {
  event.preventDefault();

  resetQuery();

  searchQuery = event.target.elements.searchQuery.value.trim();
  if (!searchQuery) {
    return Notify.failure('Enter a search string');
  }

  getData(searchQuery, currentPage, PER_PAGE);
}

// function getData() -> dataServ.js
async function getData(searchQuery, currentPage, PER_PAGE) {
  //fetchImages(searchQuery, currentPage, PER_PAGE)
  try {
    const data = await fetchImages(searchQuery, currentPage, PER_PAGE);
    //-.then(data => {
    console.log(currentPage);
    if (!data.hits.length & !data.totalHits) {
      loadMoreRef.classList.add('is-hidden');
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    totalHits = data.totalHits;
    if (currentPage === 1) {
      Notify.success(`Hooray! We found ${totalHits} images.`);
    }

    renderGallery(data.hits);
    simpleLightBoxLightbox.refresh();
    observer.observe(target); // + for infiniti scroll

    //   if (data.hits.length === data.totalHits) {
    //     // 'zaz'
    //     loadMoreRef.classList.add('is-hidden');
    //     Notify.warning(
    //       "We're sorry, but you've reached the end of search results."
    //     );
    //   }
    if (data.hits.length < data.totalHits) {
      //loadMoreRef.classList.remove('is-hidden'); //- for Btn  loadMore
    }
    // -2 load
    if (currentPage === Math.ceil(data.totalHits / PER_PAGE)) {
      loadMoreRef.classList.add('is-hidden');
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      observer.unobserve(target); // +
    } else {
      //loadMoreRef.classList.remove('is-hidden'); // -
    }
    //   if (currentPage > 1) {
    //     console.log(currentPage);
    //     smoothScroll(galleryRef);
    //   }
    //-})
    //-.catch(err => console.log(err));
  } catch (err) {
    console.log(err);
  }
}

function onLoadInfinitiScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;

      getData(searchQuery, currentPage, PER_PAGE);
    }
  });
}

function renderGallery(dataArr) {
  galleryRef.insertAdjacentHTML('beforeend', createMarkup(dataArr));
}

function resetQuery() {
  galleryRef.innerHTML = '';
  currentPage = 1;
}
