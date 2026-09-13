const fs = require("fs/promises");
const path = require("path");
const express = require("express");
const router = express();

// get all users
router.get("/", async (req, res) => {
  const rawData = await fs.readFile(path.join(__dirname, "..", "db", "fake-data.json"), "utf-8");

  const data = JSON.parse(rawData);

  const { users } = data;

  res.send(users);
});

// save new user
router.post("/", async (req, res) => {
  const rawData = await fs.readFile(path.join(__dirname, "..", "db", "fake-data.json"), "utf-8");

  const data = JSON.parse(rawData);

  const body = req.body;

  const { users } = data;

  const idAlreadyExists = !!users.filter((user) => user.id === body.id)[0];

  const emailAreadyExists = !!users.filter((user) => user.email === body.email)[0];

  if (idAlreadyExists) {
    return res.status(409).send("Id already exists!");
  }

  if (emailAreadyExists) {
    return res.status(409).send("Email already exists!");
  }

  users.push(body);

  const content = { users: users };

  fs.writeFile(path.join(__dirname, "..", "db", "fake-data.json"), JSON.stringify(content));

  res.status(201).send(`User ${body.name} created successfully!`);
});

// save existing user
router.put("/:id", async (req, res) => {
  const rawData = await fs.readFile(path.join(__dirname, "..", "db", "fake-data.json"), "utf-8");

  const data = JSON.parse(rawData);

  const { users } = data;

  const id = Number(req.params.id);

  const body = req.body;

  const findUserById = users.find((user) => user.id === id);

  if (!findUserById) {
    return res.status(400).send(`User with :id=${id} not found`);
  }

  const emailAreadyExists = users.find((user) => user.email === body.email);

  if (emailAreadyExists && emailAreadyExists.id !== id) {
    return res.status(409).send("Email already exists!");
  }

  const userIndex = users.findIndex((user) => user.id === id);

  users[userIndex] = { id: id, ...body };

  const content = { users: users };

  fs.writeFile(path.join(__dirname, "..", "db", "fake-data.json"), JSON.stringify(content));

  res.status(200).send(`User :id=${id} updated successfully!`);
});

// delete user
router.delete("/:id", async (req, res) => {
  const rawData = await fs.readFile(path.join(__dirname, "..", "db", "fake-data.json"), "utf-8");

  const data = JSON.parse(rawData);

  const { users } = data;

  const id = Number(req.params.id);

  const findUserById = users.find((user) => user.id === id);

  if (!findUserById) {
    return res.status(400).send(`User with :id=${id} not found`);
  }

  const userIndex = users.findIndex((user) => user.id === id);

  const usersUpdated = [...users.splice(0, userIndex), ...users.splice(userIndex + 1, users.lenght)];

  const content = { users: usersUpdated };

  fs.writeFile(path.join(__dirname, "..", "db", "fake-data.json"), JSON.stringify(content));

  res.status(200).send(`User :id=${id} deleted successfully!`);
});

// get user by id
router.get("/:id", async (req, res) => {
  const rawData = await fs.readFile(path.join(__dirname, "..", "db", "fake-data.json"), "utf-8");

  const data = JSON.parse(rawData);

  const { users } = data;

  const id = Number(req.params.id);

  const findUserById = users.find((user) => user.id === id);

  if (!findUserById) {
    return res.status(400).send(`User with :id=${id} not found`);
  }

  res.status(200).send(findUserById);
});

module.exports = router;
