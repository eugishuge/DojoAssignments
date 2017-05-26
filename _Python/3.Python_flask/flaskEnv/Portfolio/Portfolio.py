from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def Home():
    return render_template('Portfolio.html')

@app.route('/projects')
def projects():
    return render_template('PortfolioProjects.html')

@app.route('/about')
def about():
    return render_template('PortfolioAbout.html')

app.run(debug=True)
