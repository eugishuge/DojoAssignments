from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    #render
    return render_template('index.html')

@app.route('/ninja', methods=['GET','POST'])
def ninjas():
    #render
    return render_template('ninja.html')

@app.route("/ninja/<color>")
def ninja_color(color):
    dictionary = {
    'blue':'leonardo',
    'purple':'donatello',
    'red':'raphael',
    'orange':"michelangelo"
    }

    if color in dictionary:
        image_url = "/static/images/" + dictionary[color] + ".jpg"
    else:
        image_url= "/static/images/notapril.jpg"
    # if color == "blue":
    #     image_url = "/static/images/leonardo.jpg"
    # elif color == "purple":
    #     image_url = "/static/images/donatello.jpg"
    # elif color == "orange":
    #     image_url = "/static/images/michelangelo.jpg"
    # elif color == "red":
    #     image_url = "/static/images/raphael.jpg"
    # else:
    #     image_url = "static/images/notapril.jpg"
    return render_template("ninja_color.html",var = color, image_url=image_url)

app.run(debug=True)
