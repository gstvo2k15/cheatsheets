from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))

# Load environment variables from .env file
load_dotenv(path.join(basedir, '../.env'))

class Config:
    SECRET_KEY = environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = environ.get('DATABASE_URL') or \
        'sqlite:///' + path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
