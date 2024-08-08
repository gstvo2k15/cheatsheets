# Flask Application

This is a Flask application with environment variable management using `python-dotenv` and linting setup with Flake8.

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

`flask run`

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

- app.py: The main entry point of the application.
- app/: Contains the application code.
- app/config.py: Configuration settings loaded from environment variables.
- app/routes.py: Route definitions.
- app/models.py: Database models.
- instance/config.py: Instance-specific configurations, like enabling debugging.
- .env: Environment variables file.
- .flake8: Flake8 configuration file.
- tests/: Contains unit tests.
- .coveragerc: Configuration for coverage reporting.
