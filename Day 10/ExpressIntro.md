**Express.js** ek lightweight aur fast web application framework hai jo **Node.js** par based hota hai. Yeh backend development ke liye use hota hai aur API banane aur web applications create karne ke process ko bahut easy bana deta hai.

---

## 📚 **Express.js Basics**

* **Language:** JavaScript
* **Platform:** Node.js
* **Use:** Server-side framework

---

## ✅ **Features of Express.js:**

1. **Fast & Lightweight:** Simple aur efficient.
2. **Middleware Support:** Request aur response ko handle karne ke liye.
3. **Routing:** Clean URL and route management.
4. **Template Engines:** Dynamic HTML pages create karne ke liye.
5. **Error Handling:** Centralized error management.

---

## 🚀 **Basic Express.js Example:**

```javascript
// Step 1: Express ko import karna
const express = require('express');
const app = express();

// Step 2: Route banayein
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Step 3: Server listen karega
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

---

## ⚙️ **Common Express Methods:**

| Method         | Description                  |
| -------------- | ---------------------------- |
| `app.get()`    | Get request handle karega    |
| `app.post()`   | Post request handle karega   |
| `app.put()`    | Update request handle karega |
| `app.delete()` | Delete request handle karega |

---

## 🔥 **Middleware Example:**

```javascript
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
```

* Middleware har request ke beech mein kaam karta hai.

---

## 🌐 **Routing Example:**

```javascript
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact Page');
});
```

---

## 📦 **Express.js Installation:**

```bash
npm install express
```

---

### Agar aap chaho to main aapko:

* REST API banana sikha sakta hoon
* Express.js me CRUD operation karwana sikha sakta hoon
* Frontend ke saath connect karna sikha sakta hoon

