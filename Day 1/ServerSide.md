### 🖥️📡 **JavaScript on the Server Side**

**Server-side JavaScript** refers to using JavaScript to run **on the backend**, typically using **Node.js**, to handle requests, process data, access databases, and serve responses to clients.

---

## 🏗️ **What Can JavaScript Do on the Server Side?**

| Feature                    | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| 🌐 Handle HTTP Requests    | Create APIs, web servers (e.g., with **Express.js**)          |
| 💾 Database Access         | Connect to databases (e.g., **MongoDB, MySQL, PostgreSQL**)   |
| 🔐 Authentication          | Manage user login, sessions, and tokens                       |
| 🧠 Business Logic          | Process data, perform calculations, run workflows             |
| 📁 File Handling           | Read/write files on the server                                |
| 📡 Real-time Communication | Use **WebSockets** (e.g., **Socket.IO**) for live chat, games |
| 🛠️ Middleware & Routing   | Handle complex routing and request pipelines                  |
| 📦 Serve Static Files      | Send HTML, CSS, JS, and images to the browser                 |

---

## 🚀 Example: Simple HTTP Server using Node.js

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from the server!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

🟢 This server sends "Hello from the server!" to the browser.

---

## 🧱 Common Server-Side Tools in JavaScript

| Tool           | Purpose                             |
| -------------- | ----------------------------------- |
| **Node.js**    | JavaScript runtime for backend      |
| **Express.js** | Web framework for building APIs     |
| **MongoDB**    | NoSQL database (used with Mongoose) |
| **Socket.IO**  | Real-time communication             |
| **JWT**        | Authentication & session tokens     |
| **Nodemailer** | Sending emails from server          |

---

## 📊 Benefits of Server-side JavaScript

* ✅ Same language for **frontend and backend**
* ✅ Large ecosystem (npm)
* ✅ High performance with **non-blocking I/O**
* ✅ Ideal for **API servers**, **microservices**, and **real-time apps**

---

## 🔐 Security and Server-Side Logic

* Server-side code is **secure and hidden** from users.
* Can control access, validate data, and protect databases.

---

## 📌 Summary

| Aspect     | Client-side JS         | Server-side JS            |
| ---------- | ---------------------- | ------------------------- |
| Runs On    | Browser                | Server (Node.js)          |
| Used For   | UI, Interactions       | APIs, Data Processing     |
| Tools      | DOM, Events, Fetch API | Express, DBs, File System |
| Visibility | Visible to user        | Hidden from user          |

---
