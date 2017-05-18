from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def function():
    return render_template('name_index.html')

@app.route('/process', methods = ["POST"])
def process ():
    request.form['myname']
    print request.form["myname"]
    return redirect ('/')
app.run(debug = True)
