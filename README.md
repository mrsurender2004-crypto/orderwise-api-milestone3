 orderwise-api-milestone3


---

 📦 Customer Orders API – Milestone 3

This project is a **Node.js + Express REST API** connected to a **SQL Server database**.
**Milestone 3** adds endpoints to fetch orders related to customers.

---

 ✅ Features

* Get all orders for a specific customer.
* Get details of a specific order by ID.
* Error handling and JSON responses.

---

 📁 Project Structure

```
cust-orders-api/
│
├── app.js                 # Main server file
├── db.js                  # Database connection using mssql
├── routes/
│   └── orders.js          # Routes to handle orders
├── routes/
│   └── customers.js       # Customer-related routes (from earlier milestone)
├── package.json
└── README.md
```

---

🔧 Setup Instructions

1. **Install dependencies**

```bash
npm install
```

2. **Set up SQL Server Database**

Make sure you have a SQL Server running and create a database called:

```sql
CustOrders
```

With two tables:

```sql
CREATE TABLE users (
  user_id INT PRIMARY KEY,
  name NVARCHAR(100),
  email NVARCHAR(100)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  user_id INT FOREIGN KEY REFERENCES users(user_id),
  product_name NVARCHAR(100),
  quantity INT,
  order_date DATE
);
```

3. **Update DB config in `db.js`**

```js
const config = {
  user: 'sa',
  password: 'your_password',
  server: 'localhost',
  port: 1433,
  database: 'CustOrders',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};
```

---

 ▶️ Run the Server

```bash
node app.js
```

Server will run on:

```
http://localhost:3000
```

---

 🔗 API Endpoints (Milestone 3)

| Method | Endpoint                   | Description                            |
| ------ | -------------------------- | -------------------------------------- |
| GET    | `/api/orders/customer/:id` | Get all orders for a specific customer |
| GET    | `/api/orders/:orderId`     | Get a specific order by ID             |

---

 🧪 Example API Usage

* Get orders for customer 101:
  `GET http://localhost:3000/api/orders/customer/101`

* Get specific order:
  `GET http://localhost:3000/api/orders/501`

