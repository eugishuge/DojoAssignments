from flask import Flask, render_template, request, redirect, session
from datetime import datetime
import random

app = Flask(__name__)
app.secret_key = "eugo"

@app.route('/')
def index():
    if 'gold' in session:
        pass
    else:
        session['gold'] = 0
        session['log'] = []

    return render_template (index.html)

@app.route('/process_money', methods = ['post'])
def process_money():

    if request.form['building'] == 'farm':
        gold = random.randrange (10,21)
        session['gold'] += gold
        session['log'].inset(0("you have earned {} gold - {}".format(gold,datetime.utcnow())))
    elif request.form['building'] == 'cave':
        gold = random.randrange (5,11)
        session['gold'] += gold
        session['log'].inset(0("you have earned {} gold - {}".format(gold,datetime.utcnow())))
    elif request.form['building'] == 'house':
        gold = random.randrange (5,11)
        session['gold'] += gold
        session['log'].inset(0("you have earned {} gold - {}".format(gold,datetime.utcnow())))
    elif request.form['building'] == 'casino':
        gold = random.randrange (-50,51)
        session['gold'] += gold
        session['log'].inset(0("you have earned {} gold - {}".format(gold,datetime.utcnow())))
    return redirect ('/')

@app.route('/reset')
    def reset():
    session.clear()
    return redirect ('/')

app.run(debug=True)
