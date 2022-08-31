var express = require ("express");
var router = express.Router();

const Validator = require('fastest-validator');
const v = new Validator();
const { Tapel } = require ('../models');

//get All
router.get("/", async(req, res, next)=>{
    const tapel = await Tapel.findAll();
    return res.json({
        status: 200,
        message: "Sukses, memanggil seluruh data tapel", 
        data: tapel
    });
});

//get by id
router.get("/:id", async(req, res, next)=> {
const id = req.params.id;
let tapel = await Tapel.findByPk(id);
//cek id apakah ada atau tidak ada
if(!tapel){
    return res.status(404).json({status: 404, message: "ID tidak ditemukan"});
}else{
    return res.status(200).json({status: 200, message: "ID ditemukan", data: tapel});
}
});

//create tapel
router.post("/", async(req, res, next)=> {
    //validasi
    const schema ={
        
        tapel: "string"
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(400).json(validate);
    }

    //proses create tapel
    const tapel = await Tapel.create(req.body);
    res.json({
        status:200, 
        message: "Tapel berhasil dibuat", 
        data:tapel
    });
});

//update tapel
router.put("/:id", async(req, res, next)=>{
    const id = req.params.id;
    let tapel = await Tapel.findByPk(id);

    if(!tapel){
        return res.status(404).json({status: 404, message: "Data tidak ditemukan"});
    } 

    //validation
    const schema ={
        tapel: "string|optional",

    }

    const validate= v.validate(req.body, schema);
    if (validate.length){
        return res.status(400).json(validate);
    }

    //proses update tapel
    tapel = await tapel.update(req.body);
    res.json({
        status:200,
        message: "data tapel berhasil di update",
        data: tapel
    });
});

// DELETE TAPEL
router.delete("/:id", async (req, res, next) => {
    const id = req.params.id;
  
    //cek id apakah ada atau tidak ada
    let tapel = await Tapel.findByPk(id);
    if (!tapel) {
      return res.status(404).json({
        status: 404,
        message: "ID not Found!",
      });
    }
    //proses delete
    await tapel.destroy();
    res.json({ status: 200, message: "Sukses menghapus data!" });
  });

module.exports = router;