const express = require('express')
const router = express.Router()
const {create,read,update,deleted} = require('../controllers/usersApiController')


router
.post('/users/create', create)
.get('/users/read', read)
.put('/users/update/:id',update)
.delete('/users/deleted',deleted)


module.exports = router
