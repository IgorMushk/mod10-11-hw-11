// Не используетяс как из внешнего файла, на нее много завязано
export async function getData(searchQuery, currentPage, PER_PAGE) {
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
