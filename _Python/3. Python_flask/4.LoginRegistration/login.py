from flask import Flask, request, redirect, render_template, session, flash
import md5
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'eugo'

mysql = MySQLConnector(app,'email_validator')

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/login', methods =['post'])
def login():
    query_name = "SELECT username, password FROM users"
    user = mysql.query_db(query_name)
    username = request.form['username']

    query_pw = "SELECT password FROM users"
    pw = mysql.query_db(query_pw)
    password = md5.new(request.form['password']).hexdigest()


    if ({'username':username} not in user) and ({'password': pw} not in pw):
        flash("Please Enter correct log-in")
    else:
        return render_template('success.html')

    return redirect ('/')    


@app.route('/create_user', methods = ['post'])
def create():
    first_name = request.form['fname']
    a = False
    if len(first_name) > 2 and first_name.isalpha():
        a = True
    else:
        flash("Please enter your First Name")

    last_name = request.form['lname']
    b = False
    if len(last_name) > 2 and last_name.isalpha():
        b = True
    else:
        flash("Please enter your Last Name")

    email = request.form['email']
    c = False
    if len(email) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(email):
        flash("Please Enter a Valid Email Address")
    else:
        c = True

    username = request.form['new_user']
    d= False
    if len(username) > 0:
        d = True

    password= request.form['new_pw']
    e = False
    if len(password)<8:
        flash("You must enter a password with at least 8 characters")
    else:
        e = True

    confirm_pw = request.form['confirm_pw']
    f = False
    if confirm_pw != password:
        flash("Your passwords do not match!")
    else:
        f = True

    password = md5.new(password).hexdigest()

    if a and b and c and d and e and f == True:
        insert_query = "INSERT INTO users (first_name, last_name, email, username, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :username, :password, NOW(), NOW())"

        query_data = {'first_name': first_name, 'last_name': last_name, 'email': email, 'username': username, 'password': password }

        mysql.query_db(insert_query, query_data)

    else:
        flash("Please enter all required information")
        return redirect('/')

    return render_template ('success.html')

@app.route('/success')
def success():
    #if all requirements are successfully met, then redirect to success page


    return render_template('success.html')

app.run(debug=True)
