import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const $input = document.querySelector('[name="search-text"]');
const $form = document.querySelector('.form');
const $gallery = document.querySelector('.gallery');


$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearGallery($gallery);
  showLoader();

  const query = $input.value;
  const res = await getImagesByQuery(query);
  if (res.hits.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  $gallery.insertAdjacentHTML('beforeend', createGallery(res));
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    overlayOpacity: 0.8,
  });
  gallery.refresh();

  hideLoader();
});


