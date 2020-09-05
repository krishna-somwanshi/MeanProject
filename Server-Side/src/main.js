const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();

const dbadduser = require("./db.add.user");

app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.authenticateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.post("/forget", async (req, res) => {
  try {
    const input = req.body;
    await dbadduser.updateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.listen(3000);
