## 🏗️ **Node.js Architecture Overview**

Node.js follows a **single-threaded, event-driven architecture** that uses the **event loop** and **non-blocking I/O operations** to handle **multiple client requests efficiently**.

---

## 🧱 **Key Components of Node.js Architecture**

```
+------------------+
|   Client Requests |
+------------------+
          |
          v
+------------------+
|   Node.js        |
|  (Single Thread) |
+------------------+
          |
          v
+--------------------------+
|      Event Loop          |
+--------------------------+
      |           |
      v           v
+----------+   +--------------------+
| Callback |   | Background Workers |
|  Queue   |   | (Libuv Thread Pool)|
+----------+   +--------------------+
                   |       ^
                   v       |
             I/O Operations (e.g. DB, File System, Network)
```

---

### 🔄 1. **Single Thread Event Loop**

Node.js uses **one main thread** to handle all incoming requests. This thread processes them **asynchronously** using the **event loop**.

* 🧠 **Think of it like a manager delegating tasks** to workers and continuing to process new customers while workers finish their jobs.

---

### ⚙️ 2. **Event Loop**

The **heart of Node.js**. It continuously checks the **callback queue** and **executes callbacks** when tasks complete.

* Handles:

  * Timers (`setTimeout`, `setInterval`)
  * I/O callbacks (like file reads, HTTP requests)
  * Process events
  * Async operations

---

### 🛠️ 3. **Libuv and Thread Pool**

* **Libuv** is a C++ library that Node.js uses to handle:

  * File system
  * Networking
  * DNS
  * Timers

> When Node.js needs to perform a heavy or blocking task (e.g., file read/write), it uses the **libuv thread pool (default size: 4 threads)** to offload that task.

---

### 📥 4. **Callback Queue**

When async operations finish (e.g., a file is read), their **callback** is added to the **queue**, and the event loop **picks it up** and runs it when the main thread is free.

---

### 🌐 5. **APIs and External Resources**

Node.js interacts with:

* **Databases (e.g., MongoDB, MySQL)**
* **File System (fs module)**
* **Network (http module)**
* These are all handled **asynchronously**.

---

## 📈 Why This Architecture is Powerful?

✅ **Non-blocking I/O**: Main thread is never stuck
✅ **Handles thousands of connections** with low memory
✅ Ideal for **real-time apps**, **APIs**, **I/O-heavy apps**

---

## 🛑 Limitation

* Not suitable for **CPU-intensive tasks** (e.g., image/video processing, large calculations)
* For such tasks, you may use:

  * **Worker Threads** (since Node v10.5+)
  * **Child Processes**

---

## 🧪 Example: Handling Requests

```js
const http = require('http');

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end('Handled by event loop!');
  }, 1000); // Simulated async work
});

server.listen(3000, () => console.log("Server running"));
```

Even with 1000 users hitting this at once, Node.js won’t hang — it will handle them efficiently using the **event loop** and **callbacks**.

---
