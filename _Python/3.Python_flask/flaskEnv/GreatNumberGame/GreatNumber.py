from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "eugo"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/random', methods = ['post'])
def random():
    import random
    session['somekey'] = random.randrange(0,101)
    guess = request.form['guess']

    if(session['somekey'] == int(guess)):
        message = "you win!"
        return render_template('index.html', message = message)
    elif session['somekey'] < int(guess):
        message = "TOO HIGH"
        return render_template('index.html', message = message)
    elif session['somekey'] > int(guess):
        message = "TOO LOW"
        return render_template('index.html', message = message)

    return render_template('index.html')

app.run(debug=True)
