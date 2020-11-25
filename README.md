# test-fullstack-NMT
Deve ser construída uma aplicação para listar e editar clientes utilizando Angular 8+ e outra em Django 2+. O Frontend em Angular deve interagir com o Backend por meio de uma API REST em Django, para exibir e permitir editar uma lista de clientes.


## Running the app on your local computer (dev envinronment)

`git clone https://github.com/vitorrcunhaa/caleta_test.git` or unpack compressed file(if you got this project via compressed file)

Go to `test_fullstack_NMT` dir

## Enabling frontend

Go to `static/frontend/src/app/services/customer.service.ts`
and uncomment this line:

`const baseUrl = 'http://localhost:8000/api/customers/';`

and comment this line:

`const baseUrl = 'https://neoprospecta-test.herokuapp.com/api/customers/';`

This way, when building the dist files for the backend to read, it's going to accept API calls for the url used in development env.

Go to static/frontend folder

Run `npm install`

Run `ng build`


## Setup Django web


To run the Django app on your local computer, set up a Python development environment, including Python, pip, and virtualenv.

Create an isolated Python environment, and install dependencies:

LINUX/MACOS
```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```
WINDOWS
```
virtualenv env
env\scripts\activate
pip install -r requirements.txt
```
Run the Django migrations to set up your models:
```
python manage.py makemigrations
python manage.py migrate
```
Start a local web server:

`python manage.py runserver`

In your browser, go to http://localhost:8000:


## Using the Django admin console

Create a superuser. You need to define a username and password.
`python manage.py createsuperuser`

Start a local web server:
`python manage.py runserver`

In your browser, go to http://localhost:8000/admin.

## Register

The application already accept users to register and login. Feel free to create new users and login.

When creating new users, mock customers objects will automatically be created.



