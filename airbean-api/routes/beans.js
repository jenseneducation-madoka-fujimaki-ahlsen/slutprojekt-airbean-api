const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const uuid = require("uuid-random");
const { generateOrderNr, generateETA } = require("../utils/utils");
const db = require("../module/database");

router.get("/", async (req, res) => {
  const menu = fs.createReadStream("data/menu.json");
  menu.pipe(res);
});

router.post("/", async (req, res) => {
  const order = {
    eta: generateETA(),
    orderNumber: generateOrderNr(),
    timeStamp: Date.now(),
    items: req.body.items, //take from cart
    totalValue: req.body.totalValue //take from cart
  };

  setTimeout(async () => {
    if (
      await db
        .get("users")
        .some(u => u.id === req.body.key)
        .value()
    ) {
      await db
        .get("users")
        .find({ id: req.body.key })
        .get("orders")
        .push(order)
        .write();
    } else {
      const key = req.body.key;
      await db
        .get("users")
        .push({ id: key, orders: [order] })
        .write();
    }

    res.send(order);
  }, 2000);
});

router.get("/key", (req, res) => {
  const key = {
    key: uuid()
  };
  res.send(JSON.stringify(key));
});

router.get("/profile/:uuid", (req, res) => {
  const id = req.params.uuid;
  res.send(
    db
      .get("users")
      .find({ id: id })
      .value()
  );
});

module.exports = router;
