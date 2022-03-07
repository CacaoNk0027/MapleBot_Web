const { Router } = require('express')
let router = Router()

router.get('/', (req, res) => {
    res.render('pages/welcome.html')
})

router.get('/terms-of-use', async (req, res) => {
    res.render('pages/termsOfUse.html')
})

router.get('/privacy-policy', async (req, res) => {
    res.render('pages/privacyPolicy.html')
})

router.use('/commands', require('./routes/commands'))
router.use('/api', require('./routes/api'))

module.exports = router