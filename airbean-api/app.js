const express = require('express')
const cors = require('cors')
const app = express()
const data = require("./data/menu.json");

const beansRouter = require('./routes/beans')
const PORT = 5000


app.use(cors())
app.use(express.json())
app.use('/api/beans', beansRouter)


app.listen(5000, () => console.log(`Server started on port ${PORT}`))

app.get("/api/beans", (req, res) => {
  setTimeout(() => {
    res.json(data);
  });
});

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
