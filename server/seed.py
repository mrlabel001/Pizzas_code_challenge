from faker import Faker
from random import choice as rc
from models import db, Pizza, Restaurant, RestaurantPizza
from app import app

restaurant_data = [
    {"id": 1, "name": "Sottocasa NYC", "address": "298 Atlantic Ave, Brooklyn, NY 11201"},
    {"id": 2, "name": "PizzArte", "address": "69 W 55th St, New York, NY 10019"},
]

pizza_data = [
    {"id": 1, "name": "Cheese", "ingredients": "Dough, Tomato Sauce, Cheese"},
    {"id": 2, "name": "Pepperoni", "ingredients": "Dough, Tomato Sauce, Cheese, Pepperoni"},
]

restaurant_pizza_data = [
    {"id": 1, "price": 5, "pizza_id": 1, "restaurant_id": 1},
    {"id": 2, "price": 7, "pizza_id": 2, "restaurant_id": 2},
]


with app.app_context():
    db.session.query(Restaurant).delete()
    db.session.query(Pizza).delete()
    db.session.query(RestaurantPizza).delete()

    for data in restaurant_data:
        new_restaurant = Restaurant(**data)
        db.session.add(new_restaurant)

    for data in pizza_data:
        new_pizza = Pizza(**data)
        db.session.add(new_pizza)

    for data in restaurant_pizza_data:
        new_restaurant_pizza = RestaurantPizza(**data)
        db.session.add(new_restaurant_pizza)

    db.session.commit()












