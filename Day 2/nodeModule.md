Here’s a list of important **Node.js core modules** for backend development:

---

### 🔧 1. **http**

* **Use**: To create a server and handle HTTP requests/responses.

```js
const http = require('http');
http.createServer((req, res) => {
  res.write('Hello, Node.js!');
  res.end();
}).listen(3000);
```

---

### 📂 2. **fs (File System)**

* **Use**: To read, write, update, and delete files.

```js
const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### 📦 3. **path**

* **Use**: To handle and transform file paths.

```js
const path = require('path');
const filePath = path.join(__dirname, 'files', 'data.txt');
```

---

### ⏱️ 4. **events**

* **Use**: To handle custom events.

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', () => console.log('Hello there!'));
emitter.emit('greet');
```

---

### 🌐 5. **url**

* **Use**: To parse and format URLs.

```js
const url = require('url');
const myURL = new URL('https://example.com/path?name=kurshed');
console.log(myURL.searchParams.get('name')); // kurshed
```

---

### 📡 6. **querystring**

* **Use**: To parse and stringify query strings.

```js
const qs = require('querystring');
const parsed = qs.parse('name=kurshed&age=25');
console.log(parsed.name); // kurshed
```

---

### 🔒 7. **crypto**

* **Use**: To perform encryption, hashing, and other cryptographic functions.

```js
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);
```

---

### 🕰️ 8. **timers**

* **Use**: Provides functions like `setTimeout`, `setInterval`, etc.

---

### 🗃️ 9. **os**

* **Use**: To get information about the operating system.

```js
const os = require('os');
console.log(os.platform());
console.log(os.freemem());
```

---

### 🧪 10. **assert**

* **Use**: For unit testing by checking if values are as expected.

```js
const assert = require('assert');
assert.strictEqual(1 + 1, 2);
```

---
