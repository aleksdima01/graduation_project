# graduation_project
 ### Веб-приложение для отслеживания актуальных мероприятий в 4 городах РФ с возможностью добавления в избранное.
 ### Installation
 1. Клонируем репозиторий ```git clone https://github.com/aleksdima01/graduation_project.git```
 2. Скопировать файл .env.example в папке graduation_project/docker, заполнить его и переименовать в .env
 3. Скопировать файл .env.example в папке graduation_project/afisha_project, переименовать в .env, заполнить его данными для доступа к БД, внесенными в .env файл на шаге 3.
 Также можно внести настройки адреса электронной почты, с которого будут отправляться уведомления.
 4. Меняем рабочую директорию `cd graduation_project/docker/`
 5. Собираем docker контейнеры `docker compose -f 'graduation_project\docker\docker-compose.yaml' up -d --build`
 6. Убедиться, что контейнеры собраны и запущены.
 7. Устанавливаем Frontend пакеты `docker-compose exec application npm i`
 8. Устанавливаем Backend пакеты `docker-compose exec application composer install`
 9. Генерируем ключ приложения `docker-compose exec application php artisan key:generate`
 10. Запускаем миграцию для БД `docker-compose exec application php artisan migrate`
 11. Запуск сборки Frontend `docker-compose exec application npm run build`
 12. В браузере перейти по адресу http://127.0.0.1:8081