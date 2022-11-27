import {apiService, pager, valuer} from "./apiService";
import card from "./templates/card.hbs"

const loadMore = document.querySelector('.button-more');
const list = document.querySelector('.gallery');
const form = document.querySelector('#search-form');
const input = document.querySelector('.input');
const btnUp = document.querySelector('.btn-up');

const toUp = () => {
    form.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
}

const nextPage = () => {
    pager();
    apiService().then(appendMarkup);
}

const search = (e) => {
    e.preventDefault();
    form.classList.remove('search-form')
    if(input.value===''){list.innerHTML = 'Enter picture name'; return}
    list.innerHTML = '';
    valuer(input.value);
    pager(1);
    apiService().then(appendMarkup);
    loadMore.disabled=false;
    btnUp.disabled=false;
    input.value='';
}

const appendMarkup = (img)=> {
    console.log(img)
    if(img.length===0){list.innerHTML = 'Picture is`n finded'; return}
     img.map(el=>{list.insertAdjacentHTML('beforeend',card(el))});
     loadMore.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
}

form.addEventListener('submit', search);
loadMore.addEventListener('click', nextPage);
btnUp.addEventListener('click', toUp)











