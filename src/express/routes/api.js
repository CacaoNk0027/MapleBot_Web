const { Router } = require('express')
let router = Router()

router.get('/', (req, res) => {
    res.json({
        statusCode: 200,
        description: "ok"
    })
})

router.get('/thanks', async (req, res) => {
    res.render('pages/thanks.html')
})

router.get('/paths', (req, res) => {
    var pageIncial = `${req.protocol}://${req.get('host')}/`
    let json = {
        inicial: pageIncial,
        apiRest: `${pageIncial}api`
    }
    res.json(json)
})

module.exports = router