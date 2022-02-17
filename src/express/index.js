const { Router } = require('express')
let router = Router()

router.get('/', (req, res) => {
    res.render('pages/welcome.html')
})

router.use('/commands', require('./routes/commands'))

router.use('/api', require('./routes/api'))

module.exports = router