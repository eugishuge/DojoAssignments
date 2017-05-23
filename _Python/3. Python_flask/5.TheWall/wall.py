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
    if len(request.form['username']) <1 or len(request.form['password'])<1:
        flash("You must enter valid username & password")
        return redirect ('/')

    else:
        query = "SELECT * from users WHERE username= :username"
        data = {
        'username': request.form['username']
        }
        user = mysql.query_db(query, data)
        if user:
            if user[0]['password'] == md5.new(request.form['password']).hexdigest():
                session['user_id'] = user[0]['id']
                return redirect ('/wall')
            else:
                flash('Your password in invalid')
                return redirect ('/')
        else:
            flash("your email is invalid")
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

        session['user_id'] = mysql.query_db(insert_query, query_data)
        return redirect ('/wall')

    else:
        flash("Please enter all required information")
        return redirect('/')

    return render_template ('wall.html')

@app.route('/wall')
def wall():
    #if all requirements are successfully met, then redirect to success page
    try:
        query = "SELECT * from users WHERE id=:user_id"
        data = {
            'user_id' : session['user_id']
        }
        logged_in_user = mysql.query_db(query,data)

        return render_template('wall.html', logged_in_user = logged_in_user)
    except:
        return redirect ('/')

@app.route('/message', methods = ['post'])
def message():
    msg_insert = "INSERT INTO messages(message, created_at, updated_at) VALUES (:message, NOW(), NOW())"

    msg_data = {
    'message' : request.form["message"]
    }
    session['message'] = mysql.query_db(msg_insert,msg_data)

    return redirect('/wall')
app.run(debug=True)
