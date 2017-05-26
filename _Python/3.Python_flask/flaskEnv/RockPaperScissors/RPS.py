import random
from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def RPS ():
    print "Rock"
    print "paper"
    print "scissors"
    return render_template('RPS.html')


@app.route('/process_play', methods=["post"])
def play():
    result = random.randint(0,2)
    if(result == 0):
        print "Rock"
    elif(result == 1):
        print "Paper"
    elif(result == 2):
        print "Scissors"

    print result
    return redirect ('/')

@app.route('/<result>')
def result():
    return

app.run(debug=True)
