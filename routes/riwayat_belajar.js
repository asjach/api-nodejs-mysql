var express = require('express');
var router = express.Router();

const Validator = require('fastest-validator');
const v = new Validator();
const { Riwayat_Belajar, Siswa, Sequelize } = require('../models');

//get All
router.get("/", async (req, res, next)=> {
    const riwayat_belajar = await Riwayat_Belajar.findAll();
    if(!riwayat_belajar){
    return res.status(404).json({status: 404, message: "Tidak Ada Data!"})
}else {return res.json({
        status: 200,
        message: "Sukses, memanggil seluruh data riwayat_belajar",
        data: riwayat_belajar,
    })}
});




//get All but specific Attributes to be show
router.get("/specific", async (req, res, next)=> {
  //untuk membatas atribut yang ditampilkan dalam method findAll kita kasih argumen
  //const riwayat_belajar = await Riwayat_Belajar.findAll({attributes:['nis', 'tingkat', 'kelas']});


////akan menampilkan attribut dari siswa 
// const riwayat_belajar = await Riwayat_Belajar.findAll({ 
//   attributes:['tingkat','kelas','status_awal'],
//   include: {
//     model: Siswa, attributes:['nama', 'alamat']
//   }});


const riwayat_belajar= await Riwayat_Belajar.findAll({
  include:[{model: Siswa, 
    attributes:[]}],
  attributes:[
    'nis',
    'kelas',
    [Sequelize.literal('`siswa`.`nama`'),'nama'],
    [Sequelize.literal('`siswa`.`ibu`'),'Nama Ibu']
  ], 
  });


  if(!riwayat_belajar){
  return res.status(404).json({status: 404, message: "Tidak Ada Data!"})
}else {return res.json({
      status: 200,
      message: "Sukses",
      data: riwayat_belajar,
  })}
});









//GET BY ID
router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
  
    //cek id apakah ada atau tidak ada
    let riwayat_belajar = await Riwayat_Belajar.findByPk(id);
    if (!riwayat_belajar) {
      return res.status(404).json({ status: 404, message: "ID not Found!" });
    } else {
      return res
        .status(200)
        .json({ status: 200, message: "ID ditemukan", data: riwayat_belajar });
    }
  });

//CREATE/POST
router.post("/", async (req, res, next) => {
    //validation
    const schema = {
      //id:"string",
  

    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }
  
    //proses create
    const riwayat_belajar = await Riwayat_Belajar.create(req.body);
    res.json({
      status: 200,
      message: "Success Create Data",
      data: riwayat_belajar,
    });
  });

  //UPDATE SISWA
router.put("/:id", async(req, res, next)=>{
  const id = req.params.id;
  let riwayat_belajar = await Riwayat_Belajar.findByPk(id);
  if(!riwayat_belajar){
      return res.status(404).json({status: 404, message: "Data tidak ditemukan"});
  } 
  //validation
  const schema ={
    //   nama: "string|optional",
    //   id: "string|optional",
    //   jk: "string|optional",
    //   id:{
    //     type:"string",
    //     optional:true,
    //     empty:true,
    //     min:10,
    //     max:16
    //   }
  }

  const validate = v.validate(req.body, schema);
  if (validate.length){
      return res.status(400).json(validate);
  }
  //proses update riwayat_belajar
  riwayat_belajar = await riwayat_belajar.update(req.body);
  res.json({
      status:200,
      message: "data riwayat_belajar berhasil di update",
      data: riwayat_belajar
  });
});

//DELETE SISWA
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  //cek id apakah ada atau tidak ada
  let riwayat_belajar = await Riwayat_Belajar.findByPk(id);
  if (!riwayat_belajar) {
    return res.status(404).json({
      status: 404,
      message: "ID not Found!",
    });
  }
  //proses delete
  await riwayat_belajar.destroy();
  res.json({ status: 200, message: "Sukses menghapus data riwayat_belajar!" });
});

module.exports = router;