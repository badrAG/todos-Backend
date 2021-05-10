const List = require("../../models/list.modal")

const createList =(req,res)=>{
 const {name} = req.body
 try {
     const list = new List({name})
     list.save((err, list) => {
        err ? res.status(400).json({ error: err.message }) : res.json(list);
      });
 } catch (error) {
     console.log(error);
    res.status(500).send("error server");
 }
}

const getList =(req,res)=>{
    try {
        List.find().sort('-createdAt')
    } catch (error) {
        console.log(error);
        res.status(500).send("error server"); 
    }
}

module.exports ={
    getList,
    createList,
}