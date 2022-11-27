// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=24335530-1fa5676597020c031a07a1cad
const KEY = '24335530-1fa5676597020c031a07a1cad';
let PAGE = 1;
let VALUE = '';

function apiService(){
 return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${VALUE}&page=${PAGE}&per_page=12&key=${KEY}`)
 .then(response=>{return response.json()})
 .then(data=>{return data.hits}); 
}

const pager = (page) => {
    PAGE+=1;
    if(page===1){
        PAGE=1 
    }
}

const valuer = (searchValue) => {
    VALUE = searchValue;
}

export {apiService, pager, valuer};