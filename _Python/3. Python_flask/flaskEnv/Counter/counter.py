from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key="Eugos Key"


@app.route('/')
def index():
    if "counter" in session:
        session['counter'] +=1
    else:
        session['counter'] = 0
    return render_template('index.html')

@app.route('/plus2')
def plus2():
    if "counter" in session:
        session['counter'] +=2
    else:
        session['counter'] = 1
    return render_template("index.html", count = session['counter'])

@app.route('/reset')
def reset():
    if "counter" in session:
        session['counter'] =0
    return render_template('index.html', count = session['counter'])

app.run(debug=True)
