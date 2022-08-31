var express = require('express');
var router = express.Router();

const Validator = require('fastest-validator');
const v = new Validator();
const { Siswa } = require('../models');

//get All
router.get("/", async (req, res, next)=> {
    const siswa = await Siswa.findAll();
    if(!siswa){
    return res.status(404).json({status: 404, message: "Tidak Ada Data!"})
}else {return res.json({
        status: 200,
        message: "Sukses, memanggil seluruh data siswa",
        data: siswa,
    })}
});

//GET BY ID
router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
  
    //cek id apakah ada atau tidak ada
    let siswa = await Siswa.findByPk(id);
    if (!siswa) {
      return res.status(404).json({ status: 404, message: "ID not Found!" });
    } else {
      return res
        .status(200)
        .json({ status: 200, message: "ID ditemukan", data: siswa });
    }
  });

//CREATE/POST
router.post("/", async (req, res, next) => {
    //validation
    const schema = {
      nama: "string",
      nis:"string"
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }
  
    //proses create
    const siswa = await Siswa.create(req.body);
    res.json({
      status: 200,
      message: "Success Create Data",
      data: siswa,
    });
  });

  //UPDATE SISWA
router.put("/:id", async(req, res, next)=>{
  const id = req.params.id;
  let siswa = await Siswa.findByPk(id);
  if(!siswa){
      return res.status(404).json({status: 404, message: "Data tidak ditemukan"});
  } 
  //validation
  const schema ={
      nama: "string|optional",
      nis: "string|optional",
      jk: "string|optional",
  }

  const validate= v.validate(req.body, schema);
  if (validate.length){
      return res.status(400).json(validate);
  }
  //proses update siswa
  siswa = await siswa.update(req.body);
  res.json({
      status:200,
      message: "data siswa berhasil di update",
      data: siswa
  });
});

//DELETE SISWA
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  //cek id apakah ada atau tidak ada
  let siswa = await Siswa.findByPk(id);
  if (!siswa) {
    return res.status(404).json({
      status: 404,
      message: "ID not Found!",
    });
  }
  //proses delete
  await siswa.destroy();
  res.json({ status: 200, message: "Sukses menghapus data siswa!" });
});



module.exports = router;