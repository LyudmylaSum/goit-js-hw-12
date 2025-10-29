// key = 52822111-b1008b71650d3ce195bc41da7

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import './css/spinner.css';
import  { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js'
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let page = 1;
let totalHits = 0;


const displayError = (message) => {
    iziToast.error({
        message: message,
        position: 'topCenter',
        timeout: 3000,
        backgroundColor: '#EF4040',
        messageColor: 'white',
        close: false,
    });
};


const displayEndMessage = () => {
    iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter',
    });
};

hideLoadMoreButton();
hideLoader();

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();
  
const query = event.target.elements['search-text'].value.trim();

if (query === '') {
        iziToast.warning({
            message: 'Please enter a search term before submitting.',
            position: 'topCenter',
            timeout: 3000,
            backgroundColor: '#FFA000',
      messageColor: 'white',
        });
        return; 
    }
  
  currentQuery = query;
  page = 1;
  hideLoadMoreButton();

  try {
    showLoader();
    const data = await getImagesByQuery(currentQuery, page);

    if (!data.hits.length) {
     displayError('Sorry, there are no images matching your search query. Please try again!');
            return;
    }

    totalHits = data.totalHits;
    createGallery(data.hits);

    if (page * PER_PAGE < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      displayEndMessage();
    }
  } catch (error) {
    displayError(error.message || 'An unexpected error occurred.');
  } finally {
    hideLoader();
    event.target.elements['search-text'].value = '';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  hideLoadMoreButton();

  try {
    showLoader();
    const data = await getImagesByQuery(currentQuery, page);

    if (!data.hits.length) {
      hideLoadMoreButton();
            displayEndMessage();
            return;
    }

    createGallery(data.hits);

    
    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const { height } = firstCard.getBoundingClientRect();
      window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
      });
    }

    const shownSoFar = page * PER_PAGE;
    if (shownSoFar >= totalHits) {
      hideLoadMoreButton();
      displayEndMessage();
    }else {
      showLoadMoreButton();
        }
  } catch (error) {
    displayError(error.message || 'An unexpected error occurred.');
        hideLoadMoreButton();
  }finally {
        hideLoader();
    }
});