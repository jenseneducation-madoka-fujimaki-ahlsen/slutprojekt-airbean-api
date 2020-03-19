const { Router } = require('express')
const router = new Router()
const fs = require('fs');

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

router.post('/', async (req, res) => {
    const order = {
        eta: 13,
        orderNr: 'SW921389B',
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

module.exports = router