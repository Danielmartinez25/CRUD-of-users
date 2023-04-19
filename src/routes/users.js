const express = require('express')
const router = express.Router()
const {create,read,update,deleted} = require('../controllers/usersApiController')


router
.post('/create', create)
.get('/read', read)
.put('/update/:id',update)
.delete('/deleted',deleted)


module.exports = router
