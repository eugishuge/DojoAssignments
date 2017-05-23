# from flask import Flask, request, redirect, render_template, session, flash
# import md5
# import re
# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
#
# from mysqlconnection import MySQLConnector
# app = Flask(__name__)
# app.secret_key = 'eugo'
#
# mysql = MySQLConnector(app,'email_validator')
#
# @app.route('/')
# def index():
#     return render_template('index.html')
#
#
#
@app.route('/login', methods = ['post'])
def login():
    if len(request.form['email'])<1 or len(request.form['password'])<1: #if either login or pw is blacnk, redirect back to page
    flash('you must enter a valid username and password'):
        return redirect('/')
    else:
        query = "SELECT * FROM users WHERE username = :username"
        data = {
        'username': request.form['username']
        }
        user = mysql.query_db(query, data)
        print user

            if user:
                if user[0]['password'] == md5.new(request.form['password']).hexdigest():
                     session['user_id'] = user[0]['id']
                     return redirect('/success')
                else:
                    return redirect ('/')
            else:
                flash("your email is invalid")
                return redirect ('/')


# @app.route('/register', methods = ['post'])
# def register_user():
#
#     flag = True #will remain true if no errors are detected
#     if (request.form['fname']) <1:
#         flag = False
#         flash("Please enter a valid First Name")
#     if (request.form['lname']) <1:
#         flag = False
#         flash("Please enter a valid Last Name")
#     if (request.form['fname']) <3:
#         flag = False
#         flash("First Name must be longer thatn 2 character")
#     if (request.form['lname']) <3:
#         flag = False
#         flash"Last Name must be longer thann 2 character")
#
#     if not (request.form['fname']).isalpha() and not (request.form['lname']).isalpha():
#         flag = False
#         flash("Name must be all letters")
#
#     if not email_regex.match(request.form['email']):
#         flag = False
#         flash('your email is not valid')
#
#     if leng(request.form['new_pw']) < 8:
#         flag = False
#         flash('pw msut be 8 charactes ong')
#
#     if request.form['new_pw']!= request.form['confirm_pw']
#         flag = False
#         flash('your pws dont match')
#
#     if flag:
#         print 'user info is good'
#         query = "INSERT INTO users(first_name, last_name, email, new_pw, created_at, updated_at) VALUES (:first_name, :last_name, :email, :new_pw, NOW(), NOW())"
#
#         data = {
#         'first_name' = request.form['first_name']
#         'last_name' = request.form['last_name']
#         'email' = request.form['email']
#         'password' = md5.new(request.form['password']).hexigest()
#         }
#         request.session['user_id'] = mysql.query_db(query,data)
#         #store in session, logged-in user's id
#         return redirect('/success')
#     else:
#         print 'please enter all valid information'
#         return redirect ('')
#
# @app.route('/success')
# def success():
#     try:
#         query = SELECT * from users where id = :user_id
#
#         data = {
#             'user_id': session['user_id']
#         }
#
#             logged_in_user = mysql.query_db(query, data)
#             return render_template('success.html', logged_in_user = (logged_in_user))
#     except:
#         return redirect ('/')
#
#
#
#
# #EUGENES CODE STARTS HERE
# # @app.route('/login', methods =['post'])
# # def login():
# #     query_name = "SELECT username, password FROM users"
# #     user = mysql.query_db(query_name)
# #     username = request.form['username']
# #
# #     query_pw = "SELECT password FROM users"
# #     pw = mysql.query_db(query_pw)
# #     password = md5.new(request.form['password']).hexdigest()
# #
# #
# #     if ({'username':username} not in user) and ({'password': pw} not in pw):
# #         flash("Please Enter correct log-in")
# #     else:
# #         return render_template('success.html')
# #
# #     return redirect ('/')
# #
# #
# # @app.route('/create_user', methods = ['post'])
# # def create():
# #     first_name = request.form['fname']
# #     a = False
# #     if len(first_name) > 2 and first_name.isalpha():
# #         a = True
# #     else:
# #         flash("Please enter your First Name")
# #
# #     last_name = request.form['lname']
# #     b = False
# #     if len(last_name) > 2 and last_name.isalpha():
# #         b = True
# #     else:
# #         flash("Please enter your Last Name")
# #
# #     email = request.form['email']
# #     c = False
# #     if len(email) < 1:
# #         flash("Email cannot be blank!")
# #     elif not EMAIL_REGEX.match(email):
# #         flash("Please Enter a Valid Email Address")
# #     else:
# #         c = True
# #
# #     username = request.form['new_user']
# #     d= False
# #     if len(username) > 0:
# #         d = True
# #
# #     password= request.form['new_pw']
# #     e = False
# #     if len(password)<8:
# #         flash("You must enter a password with at least 8 characters")
# #     else:
# #         e = True
# #
# #     confirm_pw = request.form['confirm_pw']
# #     f = False
# #     if confirm_pw != password:
# #         flash("Your passwords do not match!")
# #     else:
# #         f = True
# #
# #     password = md5.new(password).hexdigest()
# #
# #     if a and b and c and d and e and f == True:
# #         insert_query = "INSERT INTO users (first_name, last_name, email, username, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :username, :password, NOW(), NOW())"
# #
# #         query_data = {'first_name': first_name, 'last_name': last_name, 'email': email, 'username': username, 'password': password }
# #
# #         mysql.query_db(insert_query, query_data)
# #
# #     else:
# #         flash("Please enter all required information")
# #         return redirect('/')
# #
# #     return render_template ('success.html')
# #
# # @app.route('/success')
# # def success():
# #     #if all requirements are successfully met, then redirect to success page
# #
# #
# #     return render_template('success.html')
#
# # @app.route('/clear')
# # def clear:
# #     session.clear()
# #     return redirect('/')
# app.run(debug=True)
