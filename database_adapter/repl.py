import mysql.connector
import os
from dotenv import load_dotenv

def main():
    print('Loading environment variables..')
    load_dotenv()
    DB_HOST=os.getenv('DB_HOST')
    DB_PORT=os.getenv('DB_PORT')
    DB_DATABASE=os.getenv('DB_DATABASE')
    DB_USER=os.getenv('DB_USER')
    DB_PASSWORD = os.getenv('DB_PASSWORD')
    print('Loaded DB_HOST:DB_PORT: \'' + DB_HOST + ':' + DB_PORT + '\' with DB_USER \'' + DB_USER + '\'.')

    mydb = mysql.connector.connect(
        host=DB_HOST,
        database=DB_DATABASE,
        user=DB_USER,
        password=DB_PASSWORD
    )

    print('Connected to Database == ' + str(mydb.is_connected()))

    loop = True

    read = ""

    while(loop):
        read = input('Enter query (\'c\' to cancel):\n')
        if (read != 'c'):
            cursor = mydb.cursor()
            cursor.execute(read)
            for x in cursor:
                print(x)
        else:
            loop = False

    print('Exited.')

if __name__ == '__main__':
    main()