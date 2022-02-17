const { Router } = require('express')
let router = Router()

router.get('/', (req, res) => {
    res.render('pages/commands.html')
})

module.exports = router