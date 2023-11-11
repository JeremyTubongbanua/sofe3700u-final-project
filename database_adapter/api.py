from flask import Flask
from flask_restful import Resource, Api

from sql import connect_database, get_envs, execute_query

DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD = get_envs()
db = connect_database(DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD)

class Recruit(Resource):
    def get(self):
        pass

    def put(self):
        pass

def main():
    app = Flask(__name__)
    api = Api(app)
    api.add_resource(Recruit, '/')
    app.run(debug=True)

if __name__ == '__main__':
    main()
