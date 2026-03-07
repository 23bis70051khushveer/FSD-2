# Authentication Experiment-9

## Authentication Methods Covered
1. Basic Authentication
2. Simple Token Authentication
3. JWT Authentication

## Setup

1. Create virtual environment:
   `python3 -m venv venv`
   `source venv/bin/activate`
   (Or `venv\Scripts\activate` on Windows)

2. Install dependencies:
   `pip install -r requirements.txt`

3. Run:
   `python app.py`

Server runs at:
http://localhost:5000

## Test Routes

### 1. Basic Auth:
```bash
curl -u admin:admin123 http://localhost:5000/basic-protected
```

### 2. Token Auth:
Generate Token:
```bash
curl -X POST http://localhost:5000/token-login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'
```

Access Protected Route:
```bash
curl http://localhost:5000/token-protected -H "x-auth-token: <token>"
```

### 3. JWT Auth:
Generate JWT Token:
```bash
curl -X POST http://localhost:5000/jwt-login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'
```

Access Protected Route:
```bash
curl http://localhost:5000/jwt-protected -H "Authorization: Bearer <jwt_token>" 
```

## Deployment on Render
1. Create an account on [Render](https://render.com/).
2. Click on "New" -> "Web Service".
3. Connect your GitHub repository containing these files.
4. Set the following configuration:
   - **Root Directory**: `Experiment-9`
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Click "Create Web Service" and wait for the deployment to complete.
6. Your application will be live at `https://your-app-name.onrender.com`.
