# database_adapter

This acts as a listener for RESTful API requests to make edits to the database.

## How to Run API

1. Make sure you have Python 3.x installed

2. Set up a `.env` file in the root of this folder.

Example:

`.env`

```
DB_HOST='jeremymark.ca'
DB_PORT=3306
DB_DATABASE='sys'
DB_USER='***'
DB_PASSWORD = '***'
```

2. Use pip to install requirements.

```sh
pip install -r requirements.txt
```

3. Run the python file.

```sh
python api.py
```