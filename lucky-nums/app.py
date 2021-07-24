from flask import Flask, render_template, request, jsonify
from models import User, db, connect_db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///lucky_num'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "cats-are-cool"
app.config["WTF_CSRF_ENABLED"] = False

connect_db(app)
db.create_all()


@app.route('/')
def homepage():
    return render_template('index.html')



@app.route("/api/get-lucky-num", methods=['POST'])
def create_user_data():

    new_user = User(name=request.json['name'],
                    email=request.json['email'],
                    year=request.json['year'],
                    color=request.json['color'])

    db.session.add(new_user)
    db.session.commit()

    response_json = jsonify(user=new_user.serialize_input())

    return (response_json, 201)