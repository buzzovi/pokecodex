# Pokecodex API Django Backend application

## Django project setup steps

### Django project name

```
pokecodexapi
```

### Models Create

I created a Pokemon model which contatins the following fields.

- name
- img_url_small
- img_url_big
- types
- total
- hp
- attack
- defense
- sp_atk
- sp_def
- speed
- info
- created
- modified

### Datatbase tables create from the models

### I used SQLite DB

```
python manage.py migrate
python manage.py makemigrations pokecodexapi
```

### Created Admin User

### To login in please

```
user / pass
tao / taoadmin
```

## Django Rest Framework

- I used model serializer to create the api.
- I set up django rest framework pagination.
- Django filter to implement a filtering.

## Configuring CROSS-ORIGIN RESOURCE SHARING (CORS)

- django-cors-headers plugin solve the problem

# To Run the project

### Please navigate to the backend directory.

### Create new python environment

```
py -m venv env
.\env\Scripts\activate
```

### Install requirements

```
pip install -r requirements.txt
python -m pip install --upgrade pip
```

### Run the server

```
python manage.py runserver
```

### Run tests

```
pytest
```

### Usefull links:

- Admin site http://127.0.0.1:8000/admin/
- REST Framework http://127.0.0.1:8000
- Swagger API http://127.0.0.1:8000/swagger-ui/
