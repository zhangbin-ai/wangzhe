const db = require('../db/base')

exports.addCategory = (req,res)=>{
    // console.log("addCategory")
    let data = req.body
    let sql = `insert into category(name) values("${data.name}")`
    db(sql,null,(result)=>{
        if(result.affectedRows == 1){
            res.json({flag:1})
        }else{
            res.json({flag:-2})
        }
    })
}

exports.searchAll = (req,res)=>{
    console.log("searchAll")
    let sql = `select * from category`
    db(sql,null,(result)=>{
        console.log(result)
        if(result.length>0){
            res.json(result)
        }else{
            res.json({flag:-2})
        }
    })
}