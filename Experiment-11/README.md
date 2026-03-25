# Experiment-11: Develop microservice-based backend module

## Project Overview
This project consists of two microservices built using Python and Flask:
1. **Customer Service**: Provides an API to fetch customer details along with their associated orders by communicating with the Order Service.
2. **Order Service**: Provides APIs to get all orders for a specific user and update the status of an existing order.

Both services store data in memory using variables.

## Microservices Architecture
- **Customer Service**: Runs on port `5001`. Communicates with the Order Service to retrieve order details for a customer.
- **Order Service**: Runs on port `5002`.

## API Endpoints

### 1. Customer Service
- **GET `/customers/<user_id>/orders`**: Fetch customer details and their orders.
  - *Example*: `http://localhost:5001/customers/101/orders`

### 2. Order Service
- **GET `/orders/user/<user_id>`**: Fetch all orders for a specific user.
  - *Example*: `http://localhost:5002/orders/user/101`
- **PUT `/orders/<order_id>/status`**: Update the status of a specific order.
  - *Example URL*: `http://localhost:5002/orders/1/status`
  - *Headers*: `Content-Type: application/json`
  - *Body*:
    ```json
    {
        "status": "Delivered"
    }
    ```

## Local Development & Testing

1. **Prerequisites**: Python 3.8+ installed.

2. **Run Order Service**:
   ```bash
   cd order_service
   python -m venv venv-order
   venv-order\Scripts\activate  # On Windows
   # source venv-order/bin/activate  # On macOS/Linux
   pip install -r requirements.txt
   python order_app.py
   ```

3. **Run Customer Service** (in a new terminal):
   ```bash
   cd customer-service
   python -m venv venv-customer
   venv-customer\Scripts\activate  # On Windows
   # source venv-customer/bin/activate  # On macOS/Linux
   pip install -r requirements.txt
   python customer_app.py
   ```

4. **Testing with Postman**:
   - Access the APIs running on `localhost:5001` and `localhost:5002` using Postman.
   - For the `PUT` request, ensure you send a JSON body with the new `status`.

## Deployment (Render)
Both microservices can be deployed independently on Render as Web Services.

**Render Setup for Order Service:**
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn order_app:app`
- **Environment Variables**: `PORT` (assigned by Render)

**Render Setup for Customer Service:**
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn customer_app:app`
- **Environment Variables**:
  - `PORT`: (assigned by Render)
  - `ORDER_SERVICE_URL`: `<Render URL of your deployed Order Service>`

## Submission
- Includes code for both microservices.
- Screenshots of Postman tests included in the submitted zip file.
- Demo links for deployed services on Render.
