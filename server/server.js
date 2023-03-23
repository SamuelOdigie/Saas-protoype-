const express = require("express");
const stripe = require("stripe")(
  "sk_test_51MoTcqAAXu4ENNBEVBNW4JBBuaHl9r3pLBi6QMyMe4h506J8hNaIfNimifzFlw0lImqMe8E3kUw9k6OyJMVXPzVU00GvIN5QsL"
);
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE mentors (id INTEGER PRIMARY KEY, name TEXT, skill1 TEXT, skill2 TEXT, skill3 TEXT, price_per_hour INTEGER)"
  );
  db.run(
    "INSERT INTO mentors (name, skill1, skill2, skill3, price_per_hour) VALUES (?, ?, ?, ?, ?)",
    ["Sarah Pat", "JavaScript", "C#", "Java", 40]
  );
  db.run(
    "INSERT INTO mentors (name, skill1, skill2, skill3, price_per_hour) VALUES (?, ?, ?, ?, ?)",
    ["David Jones", "Python", "Django", "Machine Learning", 20]
  );
  db.run(
    "INSERT INTO mentors (name, skill1, skill2, skill3, price_per_hour) VALUES (?, ?, ?, ?, ?)",
    ["Joe Bloggs", "React Native", "Kotlin", "JavaScript", 30]
  );
  db.run(
    "INSERT INTO mentors (name, skill1, skill2, skill3, price_per_hour) VALUES (?, ?, ?, ?, ?)",
    ["David Frazer", "CSS", "Html", "JavaScript", 35]
  );
  console.log("Database created and connected!");
});

app.get("/mentors", (req, res) => {
  const { price, skill } = req.query;
  let query = "SELECT * FROM mentors";
  let params = [];

  if (price) {
    query += " WHERE price_per_hour = ?";
    params.push(price);
  }

  if (skill) {
    if (params.length === 0) {
      query += " WHERE";
    } else {
      query += " AND";
    }
    query += " (skill1 = ? OR skill2 = ? OR skill3 = ?)";
    params.push(skill, skill, skill);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    } else {
      res.send(rows);
    }
  });
});

app.post("/charge", async (req, res) => {
  try {
    const { token, amount } = req.body;
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "gdp",
      source: token.id,
      description: "Example charge",
    });
    res.status(200).json(charge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
