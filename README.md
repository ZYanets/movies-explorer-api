# Дипломная работа Яндекс.Практикум: Movies Explorer
Бэкенд для приложения Movies Explorer

## Ссылка на сайт
https://api.moviesexplorer.zya.nomoredomains.work/  

## Директории
`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и фильма  
`/models` — папка с файлами описания схем пользователя и фильма  

## Роуты для пользователей
`GET /users/me` — возвращает информацию о пользователе (email и имя)  
`PATCH /users/me` — обновляет информацию о пользователе (email и имя)  
`POST /signup` — создаёт пользователя с переданными в теле запроса информацию о пользователе  
`POST /signin` — проверяет переданные в теле почту и пароль и возвращает JWT  
`POST /signout` — удаляет JWT из куков пользователя  

## Роуты для фильмов
`GET /movies` — возвращает все сохранённые текущим  пользователем фильмы  
`POST /movie` — создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId, устанавливает поле owner для карточки  
`DELETE /movie/_id` — удаляет сохранённый фильм по id  

## Запуск проекта
`npm run start` — запускает сервер  
`npm run dev` — запускает сервер с hot-reload  

## Использованные технологии
* Express.js
* MongoDB
