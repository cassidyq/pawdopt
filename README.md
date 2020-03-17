# Pawdopt - Animal Adoption App

## Info

Pawdopt is a full stack web application used for finding nearby animals to adopt!</br>
Add your shelter or browse. **This is a Lighthouse Labs final project.**

## Stack

- Django
- ReactJS
- PostgreSQL

## Setup

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

## Seed Database With Fake Data

We used elephantSQL to keep our database online. If for some reason that data gets deleted, change into the directory with manage.py and run this command to reload the fake data.

```
python manage.py loaddata db/fixtures.json
```

You can also add more data to this list. Find the approriate model and be sure to incriment the pk field by 1. Data added normally will auto incriment pk.

## Running The Server

run this to start the server.

```
python manage.py runserver
```

close the server with ctrl-c.

## Screenshots

soon...?

## Contributers

- Cassidy Quaite: https://github.com/cassidyq

- Max Rosenthal: https://github.com/mxrosenthal

- Benjamin Vincent: https://github.com/BenjaminVincent
