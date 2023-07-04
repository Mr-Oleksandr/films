/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Venom",
        "Spider-man",
        "Iron Man",
        "Deadpool",
        "Doctor Strange",
        "Thor"
    ]
};




const adv = document.querySelector('.promo__adv')
const gener = document.querySelector('.promo__genre')
const jpg = document.querySelector('.promo__bg')
const span = document.querySelector('.none')
const born = document.querySelector('.null')
const form = document.querySelector('.add')
const input = document.querySelector('.adding__input')


const list = document.querySelector('.promo__interactive-list')

function renderlist(){
    list.innerHTML = ''
    for(let i = 0; i < movieDB.movies.length; i++){
       
    list.innerHTML += 
       `
       <li class="promo__interactive-item">${i+1} ${movieDB.movies[i]} 
                               <div class="delete"></div>
   
       </li>`
       const btn = document.querySelectorAll('.delete')
       for(let i = 0 ; i < btn.length; i++){
        btn[i].addEventListener( 'click', () => {
            movieDB.movies.splice(i, 1)
            renderlist()
        })
       }
   }   
}
renderlist()


adv.style.display = 'none';
gener.innerHTML = '<h1>Drama</h1>';
jpg.style.backgroundImage = "url('img/bg.jpg')";
span.innerText = 'IMDb: 8.5';
born.innerText = 'Кинопоиск: 8.0';


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const film = input.value;
    movieDB.movies.push(film)
    renderlist()
})