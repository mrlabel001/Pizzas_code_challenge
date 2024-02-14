from flask import Flask, request, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db , Pizza, Restaurant, RestaurantPizza
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def test():
    return 'Pizzas Inn'

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

@app.route('/restaurants/<int:restaurant_id>', methods=['GET'])
def get_restaurant_by_id(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)
    if restaurant:
        return jsonify({
            'id': restaurant.id,
            'name': restaurant.name,
            'address': restaurant.address
        }), 200
    else:
        return jsonify({'error': 'Restaurant not found'}), 404

# Route to update a restaurant by its ID
@app.route('/restaurants/<int:restaurant_id>', methods=['PUT'])
def update_restaurant(restaurant_id):
    data = request.json
    restaurant = Restaurant.query.get(restaurant_id)
    if restaurant:
        restaurant.name = data.get('name', restaurant.name)
        restaurant.address = data.get('address', restaurant.address)
        db.session.commit()
        return jsonify({'message': 'Restaurant updated successfully'}), 200
    else:
        return jsonify({'error': 'Restaurant not found'}), 404

# Route to delete a restaurant by its ID
@app.route('/restaurants/<int:restaurant_id>', methods=['DELETE'])
def delete_restaurant(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)
    if restaurant:
        db.session.delete(restaurant)
        db.session.commit()
        return jsonify({'message': 'Restaurant deleted successfully'}), 200
    else:
        return jsonify({'error': 'Restaurant not found'}), 404

# Route to append a new restaurant
@app.route('/restaurants', methods=['POST'])
def add_restaurant():
    data = request.json
    new_restaurant = Restaurant(name=data['name'], address=data['address'])
    db.session.add(new_restaurant)
    db.session.commit()
    return jsonify({'message': 'Restaurant added successfully'}), 201

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

@app.route('/restaurant_pizzas')
def restaurant_pizzas():
    restaurant_pizzas = RestaurantPizza.query.all()
    rest_pizza_list = []
    for restaurant in restaurant_pizzas:
        rest_dict = {
            'id': restaurant.id,
            'price': restaurant.price,
            'pizza_id': restaurant.pizza_id,
            'restaurant_id': restaurant.restaurant_id
        }
        rest_pizza_list.append(rest_dict)
    return jsonify(rest_pizza_list)



if __name__ == '__main__':
    app.run(port=5555)

