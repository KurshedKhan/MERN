const getForm = ()=>{
  return `
  <html>
    <head>
      <title>My Form Page</title>
    </head>
    <body>
      <h1>My Form for Login</h1>
      <form action="/submit-details" method="POST">
        <label for="username">User Name</label>
        <input type="text" name="username"><br>
        <label for="password">Password</label>
        <input type="password" name="password"><br>
        <label for="gender">Gender</label><br>
        <label for="male">male</label>
        <input type="radio" name="gender" value="male">
        <label for="female">female</label>
        <input type="radio" name="gender" value="female">
        <input type="submit" value="submit">
      </form>
    </body>
  </html>
  `
}

module.exports = getForm;