In **Node.js**, modules are individual files of reusable code. They help in keeping the code **organized, maintainable, and modular**. There are mainly **three types of modules** in Node.js:

---

### 🔹 1. **Core Modules (Built-in Modules)**

These come bundled with Node.js. You can use them without installing anything.

📌 **Examples:**

| Module   | Use                          |
| -------- | ---------------------------- |
| `fs`     | File system operations       |
| `http`   | Create web server            |
| `url`    | Parse URL strings            |
| `path`   | Handle file paths            |
| `os`     | System info like CPU, memory |
| `events` | Handle and emit events       |
| `crypto` | Encryption and hashing       |

🔧 **Example:**

```js
const fs = require('fs');
fs.writeFileSync('example.txt', 'Hello, Node.js!');
```

---

### 🔹 2. **Local Modules**

These are user-defined modules created in your project.

🔧 **Example:**

```js
// file: greet.js
module.exports = function(name) {
  return `Hello, ${name}`;
};

// file: app.js
const greet = require('./greet');
console.log(greet('Kurshed'));
```

---

### 🔹 3. **Third-party Modules (External Modules)**

These are installed using **npm (Node Package Manager)**.

📌 **Examples:**

| Package    | Use                       |
| ---------- | ------------------------- |
| `express`  | Web application framework |
| `mongoose` | MongoDB ODM               |
| `lodash`   | Utility functions         |
| `axios`    | Promise-based HTTP client |

🔧 **Install example:**

```bash
npm install express
```

🔧 **Use in code:**

```js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000);
```

---

### ✅ Summary

| Type            | Source            | Example            |
| --------------- | ----------------- | ------------------ |
| Core Module     | Node.js built-in  | `fs`, `http`       |
| Local Module    | User-defined      | `./greet.js`       |
| External Module | Installed via npm | `express`, `axios` |

---

Let me know if you want a PDF or code examples with explanations in **Hindi**.
