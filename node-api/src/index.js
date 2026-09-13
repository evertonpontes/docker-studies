const express = require("express");

const userRouter = require("./routes/users");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Application is running on port "${PORT}"`);
});
