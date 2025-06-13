**introduction to Node.js**:

---

### 🌐 **What is Node.js?**

**Node.js** is an open-source, cross-platform **JavaScript runtime environment** that allows you to run JavaScript code **outside of the browser**, typically on the server side.

---

### 🛠️ **Why Node.js?**

* ✅ **Fast Performance**: Built on **Google Chrome's V8 engine**, which compiles JavaScript to native machine code.
* ✅ **Non-blocking I/O**: Uses an **event-driven, asynchronous model**, making it ideal for scalable applications like chat apps or real-time APIs.
* ✅ **Single Programming Language**: You can use JavaScript for both frontend and backend.
* ✅ **Large Ecosystem**: Access to thousands of packages via **npm (Node Package Manager)**.

---

### 🔁 **How Node.js Works?**

Node.js uses a **single-threaded event loop** and handles multiple connections asynchronously using **callbacks**, **Promises**, or **async/await** — unlike traditional multi-threaded models.

---

### 📦 Example Code (Basic HTTP Server)

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello from Node.js!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

---

### 📚 Common Use Cases

* Web servers and APIs
* Real-time applications (e.g., chat, games)
* File system tools
* Backend services for web and mobile apps

---
