// module.exports = app => {
//     const express = require('express')
//     const router = express.Router()

//     router.post('/',(req,res)=>{

//     })
//     app.use('/admin/api',router)
// }

const express = require('express')
const router = express.Router()
const service = require('../../service/index')

// 添加分类addCategory
router.post('/categories',service.addCategory)

// 查询所有分类
router.get('/categories',service.searchAll)

module.exports = router