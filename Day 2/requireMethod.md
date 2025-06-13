In **Node.js**, the `require()` function is used to **import modules**, JSON files, or local files into your application.

---

### ✅ **Basic Syntax:**

```js
const moduleName = require('module-name');
```

---

### 🔍 **How `require()` works in Node.js:**

#### 1. **Core Modules** (like `fs`, `http`, `path`)

* These come with Node.js, no installation needed.

```js
const fs = require('fs');
```

#### 2. **Local Files** (your own `.js` files or `.json` files)

* Use `./` for current directory.

```js
const myModule = require('./myModule.js');
const config = require('./config.json');
```

#### 3. **Third-party Modules** (like `express`, `lodash`)

* First install via `npm install express`

```js
const express = require('express');
```

---

### 🔁 **What does `require()` return?**

It returns whatever is exported from the required file using:

* `module.exports = ...` (CommonJS export style)

**Example:**

📄 **math.js**

```js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

📄 **main.js**

```js
const add = require('./math');
console.log(add(2, 3)); // 5
```

---

### 🧠 Behind the scenes:

1. Node looks for the module in this order:

   * Core module
   * `node_modules` folder
   * Local file (relative path)
2. It caches the module (so it runs only once).
3. If `.js`, `.json`, or `.node` extension is missing, it tries them automatically.

---


