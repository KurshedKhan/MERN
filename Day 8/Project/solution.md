Great! Based on the image, here is a **complete implementation plan** for the `Calculator` Node.js project using **modular structure** and the built-in `http` module — as instructed:

---

## ✅ Project Structure

```
Calculator/
│
├── server.js                  # Main entry point
├── modules/
│   ├── addition.js            # Module for addition function
│   └── parser.js              # Module to parse form data
├── pages/
│   ├── homePage.js            # Home HTML
│   ├── calculatorPage.js      # Calculator form HTML
│   └── resultPage.js          # HTML for showing result
```

---

## ✅ Step-by-Step Implementation

### 1. `modules/addition.js`

```js
function add(num1, num2) {
  return num1 + num2;
}

module.exports = add;
```

---

### 2. `modules/parser.js`

```js
function parseFormData(request, callback) {
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });

  request.on('end', () => {
    const params = new URLSearchParams(body);
    const num1 = parseFloat(params.get('num1'));
    const num2 = parseFloat(params.get('num2'));
    callback(num1, num2);
  });
}

module.exports = parseFormData;
```

---

### 3. `pages/homePage.js`

```js
function homePageHTML() {
  return `
    <html>
      <body>
        <h1>Welcome to Calculator App</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>
    </html>
  `;
}

module.exports = homePageHTML;
```

---

### 4. `pages/calculatorPage.js`

```js
function calculatorPageHTML() {
  return `
    <html>
      <body>
        <h2>Simple Calculator</h2>
        <form action="/calculate-result" method="POST">
          <input type="number" name="num1" required />
          <input type="number" name="num2" required />
          <button type="submit">Sum</button>
        </form>
      </body>
    </html>
  `;
}

module.exports = calculatorPageHTML;
```

---

### 5. `pages/resultPage.js`

```js
function resultPageHTML(result) {
  return `
    <html>
      <body>
        <h2>Result: ${result}</h2>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `;
}

module.exports = resultPageHTML;
```

---

### 6. `server.js` (Main File)

```js
const http = require('http');
const add = require('./modules/addition');
const parseFormData = require('./modules/parser');
const homePageHTML = require('./pages/homePage');
const calculatorPageHTML = require('./pages/calculatorPage');
const resultPageHTML = require('./pages/resultPage');

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePageHTML());
  }

  else if (req.url === "/calculator" && req.method === "GET") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(calculatorPageHTML());
  }

  else if (req.url === "/calculate-result" && req.method === "POST") {
    parseFormData(req, (num1, num2) => {
      const result = add(num1, num2);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(resultPageHTML(result));
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("<h1>404 - Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

## 🧪 Run the Project

```bash
node server.js
```

Open browser: `http://localhost:3000`

---

## ✅ Summary of Key Concepts:

| Task             | Module/File               |
| ---------------- | ------------------------- |
| Display homepage | `pages/homePage.js`       |
| Calculator form  | `pages/calculatorPage.js` |
| Perform addition | `modules/addition.js`     |
| Parse form data  | `modules/parser.js`       |
| Display result   | `pages/resultPage.js`     |

---

अगर आप चाहें तो मैं इसका पूरा ZIP project बना सकता हूँ या `GET` method से भी काम करने वाला version दे सकता हूँ।
