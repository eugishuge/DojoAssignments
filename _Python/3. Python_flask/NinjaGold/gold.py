from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "eugo"
@app.route('/')
def index():
    if gold in session:
        continue
    else:
        session['gold'] = 0
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def farm():

    if request.form['building'] == 'farm':
        gold = random.randrange(10,21)
    elif request.form['building'] == "cave":
        gold=random.randrange(5,11)
    elif request.form['building'] == 'house':
        gold = random.randrange(5,11)
    elif request.form['building'] == 'casino':
        gold = random.randrage[-50, 51]

    # session['farm'] = random.randrange(10,21)
    # session['cave'] = random.randrange(5,11)
    # session['house'] = random.randrange(5,11)
    # session['casino'] = random.randrange(-50, 51)

    # gold = session['farm']
    # if (request.form['building']=="cave"):
    #     session['cave'] = random.randrange(5,11)

    return render_template('index.html')

app.run(debug = True)
