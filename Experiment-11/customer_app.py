from flask import Flask, jsonify, request
import requests
import os

app = Flask(__name__)

customers = {
    101: {"id": 101, "name": "Customer-1", "email": "customer-1@example.com"},
    102: {"id": 102, "name": "Customer-2", "email": "customer-2@example.com"}
}

# Use environment variable for order service URL in production, default to localhost for local testing
ORDER_SERVICE_URL = os.environ.get("ORDER_SERVICE_URL", "http://localhost:5002")

@app.route("/customers/<int:user_id>/orders", methods=["GET"])
def get_account_details(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    # Call Order Service
    try:
        response = requests.get(
            f"{ORDER_SERVICE_URL}/orders/user/{user_id}",
            timeout=3
        )

        if response.status_code == 200:
            orders = response.json()
        else:
            orders = []
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Order service is unavailable: {str(e)}"}), 503

    return jsonify({
        "customer": customer,
        "orders": orders
    }), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5001)), debug=True)
