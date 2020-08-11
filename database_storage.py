from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

import pandas as pd
import numpy as np

import sqlite3


connection = sqlite3.connect("rent_toronto.db")

toronto_df = pd.read_sql("SELECT * FROM toronto_df", connection)
toronto_df.drop(columns = ['index'], inplace=True)
print(toronto_df.head())

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/toronto_rental_data"
mongo = PyMongo(app)

@app.route()