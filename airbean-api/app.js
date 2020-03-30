const express = require("express");
const cors = require("cors");
const app = express();
const beansRouter = require("./routes/beans");
const PORT = 5000;

const db = require("./module/database");

app.use(cors());
app.use(express.json());
app.use("/api/beans", beansRouter);

const initiateDatabase = () => {
  const databaseInitiated = db.has("users").value();

  if (!databaseInitiated) {
    db.defaults({ users: [] }).write();
  }
};

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
  initiateDatabase();
});
