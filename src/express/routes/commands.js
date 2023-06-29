const { Router } = require('express')
let router = Router()

router.get('/', (req, res) => {
    // res.render('pages/commands.html')
    res.status(503).render('errors/error503.html')
})

module.exports = router