const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const uuid = require("uuid-random");
const { generateOrderNr, generateETA } = require("../utils/utils");
//added lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

router.get("/", async (req, res) => {
  const menu = fs.createReadStream("data/menu.json");
  menu.pipe(res);
});

router.post("/", async (req, res) => {
  const order = {
    eta: generateETA(),
    orderNr: generateOrderNr()
  };

  db.get("orders")
    .push({
      orderNumber: order.orderNr,
      timeStamp: Date.now(),
      Items: req.body.items, //take from cart
      totalValue: req.body.value //take from cart
    })
    .write();

  setTimeout(() => {
    res.send(order);
  }, 2000);
});

router.get("/key", (req, res) => {
  const key = {
    key: uuid()
  };
  res.send(JSON.stringify(key));
});

module.exports = router;
