# Locketry 

## A Smart Encryption Platform that Enables Time Encryption using Ethereum Smart Contracts 

### The Locketry Website: https://www.locketry.com/ 

#### Introduction 

The folling repo contains the locketry website souce code 

#### Website 

The website contents can be found under the "templates" and "static" directories. 

#### Server 

Python flask is used as the server to serve the website contents in the development environment.

In the production environment gunicorn is used.

#### Installation 

1) Clone the project by running 

```
git clone https://github.com/araa47/Locketry.git
```
2) move into the project directory 

```
cd Locketry 
```

3) Install python3 on your platform of choice and then install pipenv by following the instructions below

Pipenv: https://github.com/pypa/pipenv


4) Enable pipenv by typing in the following command ``` pipenv shell ``` 

5) Install all the dependcies for the project by typing the following command ```pipenv install``` 

6) Create a configuration file by copying ".env.example" file as ".env"

```
cp .env.example .env
```
7) Set the neccesary configs in the .env file. You may need to disable and re-enable pipenv to make sure your new configs are used. You can do this by running the following command after setting the config 
```
exit
pipenv shell 
```
8) You can run the project locally in your development environment by running the following command
```
python3 app.py 
```


#### File Information 

```runtime.txt```: has information of python version to use for Heroku 

```Procfile```: file used by gunicorn for config 
