const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/pageController')

router.post('/create', ctrl.createPage)
router.get('/', ctrl.getAllPages)
router.get('/:id', ctrl.getPageById)
router.put('/:id', ctrl.updatePage)
router.delete('/:id', ctrl.deletePage)

module.exports = router
