I,  Setup and config MVC:

    1.Create folder express-todos

    2.cd express-todos

    3.npm init -y

    4.npm i express helmet cors morgan dotenv mongoose nodemon body-parser
    
    5.create folder src

    6. cd src and create foler controlers, models, routes, heplers, config, 
    create file index.js and .env

II, Use API

1.Get all todo

> GET    /api/v1/todos

2.Get todo by id
> GET    /api/v1/todos/:id

3.Create todo

> POST   /api/v1/todos

4.Update todo by id

> PUT    /api/v1/todos/:id

5.Delete todo by id

> DELETE /api/v1/todos/:id