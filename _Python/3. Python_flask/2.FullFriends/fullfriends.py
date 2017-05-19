from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)

mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():

    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)

@app.route('/friends', methods =['post'])
def friends():
    query ="INSERT INTO friends(first_name, last_name,age,DATE_FORMAT(created_at, '%m/%d/%y')AS created_at,DATE_FORMAT(updated_at, '%m/%d/%y') AS updated_at) VALUES(:first_name,:last_name,:age,NOW(),NOW())"

    data={
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        'age': request.form['age']
    }

    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
