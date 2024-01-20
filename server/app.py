from flask import Flask, request, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db , Pizza, Restaurant, RestaurantPizza

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def test():
    return 'Pizzas Inn'

@app.route('/pizzas')
def pizzas():
    pizzas = Pizza.query.all()
    pizza_list = []
    for pizza in pizzas:
        pizza_dict = {
            "id": pizza.id,
            "name": pizza.name,
            "ingredients": pizza.ingredients
        }
        pizza_list.append(pizza_dict)

    return jsonify(pizza_list)

@app.route('/restaurants')
def restaurants():
    restaurants = Restaurant.query.all()
    rest_list = []
    for restaurant in restaurants:
        rest_dict = {
            'id': restaurant.id,
            'name': restaurant.name,
            'address': restaurant.address
        }
        rest_list.append(rest_dict)
    return jsonify(rest_list)

@app.route('/restaurants/<int:id>')
def get_restaurant(id):
    restaurant = Restaurant.query.get(id)

    if not restaurant:
        return jsonify({"error": "Restaurant not found"}), 404

    pizzas = Pizza.query.join(RestaurantPizza).filter_by(restaurant_id=restaurant.id).all()

    pizza_list = []
    for pizza in pizzas:
        pizza_dict = {
            "id": pizza.id,
            "name": pizza.name,
            "ingredients": pizza.ingredients
        }
        pizza_list.append(pizza_dict)

    restaurant_data = {
        "id": restaurant.id,
        "name": restaurant.name,
        "address": restaurant.address,
        "pizzas": pizza_list
    }

    return jsonify(restaurant_data), 200

if __name__ == '__main__':
    app.run(port=5555)

