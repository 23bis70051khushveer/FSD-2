from flask import Flask, jsonify, request
import os

app = Flask(__name__)

# In-memory orders data
orders = [
    {
        "id": 1,
        "user_id": 101,
        "order_date": "2026-02-20",
        "order_amount": 2500,
        "order_status": "Shipped",
        "items": [
            {"name": "Laptop", "quantity": 1, "price": 2000},
            {"name": "Mouse", "quantity": 2, "price": 250}
        ]
    },
    {
        "id": 2,
        "user_id": 101,
        "order_date": "2026-02-22",
        "order_amount": 1200,
        "order_status": "Processing",
        "items": [
            {"name": "Keyboard", "quantity": 1, "price": 1200}
        ]
    },
    {
        "id": 3,
        "user_id": 102,
        "order_date": "2026-02-18",
        "order_amount": 800,
        "order_status": "Delivered",
        "items": [
            {"name": "Headphones", "quantity": 1, "price": 800}
        ]
    }
]

@app.route("/orders", methods=["GET"])
def get_all_orders():
    return jsonify(orders), 200

@app.route("/orders/user/<int:user_id>", methods=["GET"])
def get_user_orders(user_id):
    user_orders = [order for order in orders if order["user_id"] == user_id]
    return jsonify(user_orders), 200

# Create API to update order status
@app.route("/orders/<int:order_id>/status", methods=["PUT"])
def update_order_status(order_id):
    data = request.get_json()
    
    if not data or "status" not in data:
        return jsonify({"error": "Status is required in the request body"}), 400
        
    new_status = data.get("status")

    for order in orders:
        if order["id"] == order_id:
            order["order_status"] = new_status
            return jsonify({"message": "Order status updated successfully", "order": order}), 200

    return jsonify({"error": "Order not found"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5002)), debug=True)
