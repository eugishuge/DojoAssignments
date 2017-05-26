from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
    return render_template ('index.html')

@app.route('/user', methods = ['POST'])
def user():
    return render_template ('user.html', name = request.form['username'])

app.run(debug=True)
