# Experiment-13: Connect Backend with Database and Perform CRUD Operations with Validations

## Objective
Create a backend server in Python (Flask) with CRUD APIs/Endpoints for students, and store student data in a database table named `students`. Include comprehensive data validations and test endpoints using Postman.

## 📋 Features
- ✅ RESTful API with 5 CRUD endpoints
- ✅ SQLAlchemy ORM for database operations
- ✅ Marshmallow schema validation
- ✅ Comprehensive error handling
- ✅ Unit tests included
- ✅ **Ready for Render deployment**

## 🔧 Technologies Used
- **Backend**: Flask web framework
- **Database**: PostgreSQL (Render) / SQLite (local) / MySQL (local)
- **ORM**: SQLAlchemy
- **Validation**: Marshmallow
- **Server**: Gunicorn (production)
- **Deployment**: Render

## 📦 Dependencies
```
Flask==3.0.0
Flask-SQLAlchemy==3.1.1
marshmallow==3.20.1
psycopg2-binary==2.9.9
gunicorn==21.2.0
```

Install all dependencies:
```bash
pip install -r requirements.txt
```

## 🚀 Quick Start (3 minutes)

### Local Development (SQLite)
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the server
python app.py

# 3. API will be at http://localhost:5000
```

### Deploy to Render (Free)
See [RENDER_DEPLOY.md](RENDER_DEPLOY.md) for complete deployment guide.

**Live API Example:** `https://experiment-13-api.onrender.com`

## 🗄️ Database Configuration

### Local Development (SQLite - Default)
```
sqlite:///students.db
```
No setup needed - creates automatically!

### With PostgreSQL (Render)
Set environment variable:
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

### With MySQL (Local)
```
DATABASE_URL=mysql+pymysql://root:root123@localhost/chandigarh_university_db
```
(Note: Requires pymysql: `pip install pymysql`)

If your MySQL credentials are different, update `app.py` line 14:

```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/chandigarh_university_db'
```

Default credentials:

- Username: `root`
- Password: `root123`
- Host: `localhost`
- Database: `chandigarh_university_db`

### Step 3: Tables Auto-Creation

The `students` table will be automatically created when the Flask app starts.

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    uid VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
);
```

## 🚀 How to Run

### 1. Install Requirements

```bash
pip install -r requirements.txt
```

### 2. Start the Flask Server

```bash
python app.py
```

The server will run on: `http://localhost:5000`

You should see:

```
 * Serving Flask app 'app'
 * Running on http://0.0.0.0:5000
 * Debug mode: on
```

### 3. Verify Server is Running

Open your browser and navigate to: `http://localhost:5000/`

You should see the response:

```json
{
  "message": "Flask MySQL Students CRUD API with Validation Running"
}
```

## 📡 API Endpoints

### 1. Create a New Student

**Endpoint**: `POST /students`
**Content-Type**: `application/json`

**Request Body**:

```json
{
  "uid": "U12345",
  "name": "John Doe",
  "age": 22
}
```

**Response** (201 Created):

```json
{
  "id": 1,
  "uid": "U12345",
  "name": "John Doe",
  "age": 22
}
```

### 2. Get All Students

**Endpoint**: `GET /students`

**Response** (200 OK):

```json
[
  {
    "id": 1,
    "uid": "U12345",
    "name": "John Doe",
    "age": 22
  },
  {
    "id": 2,
    "uid": "U12346",
    "name": "Jane Smith",
    "age": 21
  }
]
```

### 3. Get Student by ID

**Endpoint**: `GET /students/<id>`

**Example**: `GET /students/1`

**Response** (200 OK):

```json
{
  "id": 1,
  "uid": "U12345",
  "name": "John Doe",
  "age": 22
}
```

### 4. Update a Student

**Endpoint**: `PUT /students/<id>`
**Content-Type**: `application/json`

**Example**: `PUT /students/1`

**Request Body** (any field is optional):

```json
{
  "name": "John Updated",
  "age": 23
}
```

**Response** (200 OK):

```json
{
  "id": 1,
  "uid": "U12345",
  "name": "John Updated",
  "age": 23
}
```

### 5. Delete a Student

**Endpoint**: `DELETE /students/<id>`

**Example**: `DELETE /students/1`

**Response** (200 OK):

```json
{
  "message": "Student deleted successfully"
}
```

## ✅ Data Validation Rules

All validation is performed using Marshmallow schema:

| Field  | Type    | Rules                      | Example    |
| ------ | ------- | -------------------------- | ---------- |
| `uid`  | String  | Required, Unique           | "U12345"   |
| `name` | String  | Required, Length ≥ 2 chars | "John Doe" |
| `age`  | Integer | Required, Range 1-120      | 22         |

### Validation Error Response (400 Bad Request):

```json
{
  "validation_errors": {
    "name": ["Shorter than minimum length 2."],
    "age": ["Must be between 1 and 120."]
  }
}
```

## 🧪 Testing with Postman

### Step 1: Import Postman Collection

1. Open Postman
2. Go to File → Import
3. Select `postman_collection.json` from this project
4. Click Import

### Step 2: Run API Tests

The collection includes pre-configured requests for:

- ✅ Create Student
- ✅ Get All Students
- ✅ Get Student By ID
- ✅ Update Student
- ✅ Delete Student

### Step 3: Test Validation

Try these invalid requests to verify validation:

**Test 1: Age out of range**

```json
{
  "uid": "U99999",
  "name": "Test",
  "age": 150
}
```

**Test 2: Duplicate UID**

```json
{
  "uid": "U12345",
  "name": "Duplicate",
  "age": 25
}
```

**Test 3: Name too short**

```json
{
  "uid": "U99998",
  "name": "A",
  "age": 25
}
```

## 🧪 Unit Testing

Run the test suite to verify all functionality:

```bash
python -m pytest test_suite.py -v
```

Or using unittest:

```bash
python -m unittest test_suite.py
```

## 📊 Database Verification

### View the Students Table

In MySQL command line or MySQL Workbench:

```sql
USE chandigarh_university_db;
SELECT * FROM students;
DESC students;
```

### Sample Data Query

```sql
SELECT id, uid, name, age FROM students ORDER BY id DESC;
```

## 🐛 Error Handling

The application handles the following scenarios:

| Error                       | Status Code | Response                       |
| --------------------------- | ----------- | ------------------------------ |
| Invalid JSON/Missing fields | 400         | `{"validation_errors": {...}}` |
| Student not found           | 404         | `{"message": "..."}`           |
| Duplicate UID               | 400         | Database integrity error       |
| Server error                | 500         | Error details                  |

## 📁 Project Structure

```
Experiment-13/
├── app.py                    # Main Flask application with CRUD endpoints
├── postman_collection.json   # Postman API test collection
├── test_suite.py            # Unit tests
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## 🔐 Security Notes

- Current setup uses `debug=True` - disable in production
- Credentials are hardcoded - use environment variables in production
- No authentication implemented - add JWT/OAuth in production

## 📝 Example Workflow

1. **Start the server**

   ```bash
   python app.py
   ```

2. **Create a student** (POST http://localhost:5000/students)

   ```json
   { "uid": "U001", "name": "Alice", "age": 20 }
   ```

3. **Get all students** (GET http://localhost:5000/students)

4. **Update student** (PUT http://localhost:5000/students/1)

   ```json
   { "age": 21 }
   ```

5. **Delete student** (DELETE http://localhost:5000/students/1)

## 🎓 Learning Outcomes

- ✅ Flask REST API development
- ✅ SQLAlchemy ORM usage
- ✅ Data validation with Marshmallow
- ✅ MySQL database integration
- ✅ CRUD operations implementation
- ✅ Error handling and HTTP status codes
- ✅ API testing with Postman

## ✍️ Author Notes

This project demonstrates a production-ready approach to building REST APIs with proper validation, error handling, and testing practices.

## 📄 License

This project is for educational purposes.
