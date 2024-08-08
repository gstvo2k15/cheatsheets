# Django Application

This is a Django application with environment variable management using `python-dotenv` and linting setup with Flake8.

## Getting Started

### Prerequisites

- Python 3.x
- virtualenv

### Setting Up the Environment

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### Running the Application

`python manage.py runserver`

### Linting the Code

`flake8`

### Running Tests

`pytest`

### Checking Test Coverage

```
coverage run -m pytest
coverage report
coverage html  # to generate an HTML report
```

### Project Structure

- manage.py: The main command-line utility for administrative tasks.
- myproject/: Contains the project settings and URLs.
- myapp/: A Django app with models, views, and admin configurations.
- .env: Environment variables file.
- .flake8: Flake8 configuration file.
- tests/: Contains unit tests.
- .coveragerc: Configuration for coverage reporting.
