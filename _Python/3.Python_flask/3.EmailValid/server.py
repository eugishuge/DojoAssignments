from flask import Flask, request, redirect, render_template, session, flash

from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'eugo'

mysql = MySQLConnector(app,'email_validator')

@app.route('/')
def index():

    # query = "SELECT * FROM users"
    # email = mysql.query_db(query)
    return render_template('index.html')

@app.route('/error', methods = ['post'])
def email_exist():
    query = "SELECT email FROM users"
    email = mysql.query_db(query)
    user_email = request.form['email']

    if {"email": user_email} in email:
        flash("This email already exists! - Try Again")

    else:
        insert ="INSERT INTO users(email,created_at,updated_at)VALUES(:email,NOW(),NOW())"
        data={
            "email": request.form['email'],
        }
        mysql.query_db(insert,data)

    return redirect('/')

@app.route('/success')
def success():
    query = 'SELECT * from users'
    emails = mysql.query_db(query)

    return render_template ('success.html', emails = emails)

app.run(debug=True)
