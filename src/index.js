import {apiService, pager, valuer} from "./apiService";
import card from "./templates/card.hbs"

const loadMore = document.querySelector('.button-more');
const list = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const input = document.querySelector('.input');

const nextPage = () => {
    pager();
}

const search = (e) => {
    e.preventDefault();
    valuer(input.value);
    console.log(apiService());
    const op = apiService().then(data=>data.map(el=>{console.log(el);return list.insertAdjacentHTML('beforeend', card(el))}));
}

form.addEventListener('submit', search);
loadMore.addEventListener('click', nextPage);
































// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });