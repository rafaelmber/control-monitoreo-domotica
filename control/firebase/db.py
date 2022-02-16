import firebase_admin
from firebase_admin import credentials
from firebase_admin import db;
import os
from dotenv import load_dotenv

class Database:

    def connect_database(self):
        try:
            load_dotenv()
            cred = credentials.Certificate(os.getenv('PATH_CREDENTIALS'));
            firebase_admin.initialize_app(cred,{
                'databaseURL': os.getenv('DATABASE_URL')
            })
        except Exception as err:
            print('Connection Failed')
            print(err)
    def getData(self,reference):
        ref = db.reference(reference)
        return ref.get()

    def setData(self,reference,data):
        pass

    def setListener(self,reference,fun):
        try:
            ref = db.reference(reference)
            ref.listen(fun) 
        except Exception as err :
            print('Listener Failed')
            print(err)
