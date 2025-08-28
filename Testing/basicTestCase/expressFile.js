const express = require("express");

function createApp() {
  const app = express();
  app.use(express.json());

  let employees = [{ empId: 1, empName: "Mayank"}];

  app.get("/getallemployee", (req, res) => {
    res.json(employees)
  })

    app.post("/addData", (req, res) => {
        var { name } = req.body;
        employees.push({ name: name, age: 20})
        res.json(employees)
    })

  return app;
}

module.exports = createApp;