from os import getenv
from dotenv import load_dotenv
import mysql.connector

def get_envs() -> tuple:
    print('Loading environment variables..')
    load_dotenv()
    DB_HOST=getenv('DB_HOST')
    DB_PORT=getenv('DB_PORT')
    DB_DATABASE=getenv('DB_DATABASE')
    DB_USER=getenv('DB_USER')
    DB_PASSWORD = getenv('DB_PASSWORD')
    print('Loaded DB_HOST:DB_PORT: \'' + DB_HOST + ':' + DB_PORT + '\' with DB_USER \'' + DB_USER + '\'.')
    return DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD

def connect_database(DB_HOST: str, DB_PORT: str, DB_DATABASE: str, DB_USER: str, DB_PASSWORD: str) -> mysql.connector.MySQLConnection:
    db = mysql.connector.connect(
        host=DB_HOST,
        database = DB_DATABASE,
        user=DB_USER,
        password=DB_PASSWORD
    )
    print('Connected to Database == ' + str(db.is_connected()))
    return db

def execute_query(db: mysql.connector.MySQLConnection, query: str) -> str:
    cursor = db.cursor()
    cursor.execute(query)
    to_ret = ""
    for x in cursor:
        to_ret = to_ret + str(x) + '\n'
    return to_ret