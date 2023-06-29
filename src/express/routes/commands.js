const { Router } = require('express')
let router = Router()

router.get('/', (req, res) => {
    // res.render('pages/commands.html')
    res.render('errors/error503.html')
})

module.exports = router