!["pawdopt-logo"](https://github.com/cassidyq/pawdopt/blob/master/frontend/src/images/pawdopt_blue_logo.png?raw=true)
# The Animal Adoption App

## Info

Pawdopt is a full stack web application used for finding nearby animals to adopt!</br>
Add your shelter or browse. **This is a Lighthouse Labs final project.**

## Stack

- Django
- ReactJS
- PostgreSQL

## Setup Django Backend Server

Clone this repo

```
git@github.com:cassidyq/pawdopt.git
```

cd into pawdopt directory and create a virtual environment

```
virtualenv -p python3 venv
```

Then activate the venv

```
source venv/bin/activate
```

now we should be inside our virtual environment. We must install a dependance for postgress/elephantSQL.

```
pip3 install psycopg2-binary
```

cd into src directory. Now we can run our server. Make sure django is installed.

```
pip3 install django.
django-admin --version
```

create a super user to acces the admin dashboard.

```
python manage.py createsuperuser
```

### Seed Database With Fake Data

We used elephantSQL to keep our database online. If for some reason that data gets deleted, change into the directory with manage.py and run this command to reload the fake data.

```
python manage.py loaddata db/fixtures.json
```

You can also add more data to this list. Find the approriate model and be sure to incriment the pk field by 1. Data added normally will auto incriment pk.

### Running The Backend Server

run this to start the server.

```
python manage.py runserver
```

close the server with ctrl-c.

## Setup and Running the React Frontend Server

Navigate to the frontend directory and install the dependencies.

```
npm install
```
run this to start the server

```
npm start
```

close the server with ctrl-c.

## Screenshots

!["home-page"](https://github.com/cassidyq/pawdopt/blob/master/screenshots/pawdopt-home-page.png?raw=true)
!["animal-bio"](https://github.com/cassidyq/pawdopt/blob/master/screenshots/pawdopt-animal-bio.png?raw=true)


## Contributers

- Cassidy Quaite: [cassidyq](https://github.com/cassidyq)

- Max Rosenthal: [mxrosenthal](https://github.com/mxrosenthal)

- Benjamin Vincent: [BenjaminVincent](https://github.com/BenjaminVincent)
