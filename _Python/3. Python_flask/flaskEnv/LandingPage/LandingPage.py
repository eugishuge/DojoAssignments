from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def greet():
    return "hello!"

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')


app.run(debug=True)
