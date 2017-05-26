from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('survey.html')

@app.route('/results', methods = ['POST'])
def results():

    return render_template('results.html', name = request.form['myname'], location = request.form['location'], language = request.form['language'], comment = request.form['comment'])

app.run(debug=True)
