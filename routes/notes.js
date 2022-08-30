//1
//2
var express = require("express");
var router = express.Router();

//17, require validator
//18. inisiasi validator (membuat objek validator)
//19. import notes dari folder models
const Validator = require("fastest-validator");
const v = new Validator();
const { Notes } = require("../models");

//3. dihapus karena untuk latihan

//22. GET ALL DATA
router.get("/", async (req, res, next) => {
  const notes = await Notes.findAll();
  return res.json({
    status: 200,
    message: "Success! get all data",
    data: notes,
  });
});

//23. GET DATA BY ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  //cek id apakah ada atau tidak ada
  let note = await Notes.findByPk(id);
  if (!note) {
    return res.status(404).json({ status: 404, message: "ID not Found!" });
  } else {
    return res
      .status(200)
      .json({ status: 200, message: "ID ditemukan", data: note });
  }
});

// 20. POST/CREATE
router.post("/", async (req, res, next) => {
  //validation
  const schema = {
    //validasi harus ada isinya
    title: "string",
    //validasi boleh string kosong
    description: "string|optional",
  };
  const validate = v.validate(req.body, schema);
  //jika ada isinya
  if (validate.length) {
    return res.status(400).json(validate);
  }

  //proses create
  const note = await Notes.create(req.body);
  res.json({
    status: 200,
    message: "Success Create Data",
    data: note,
  });
});

//21. PUT/UPDATE
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  let note = await Notes.findByPk(id);

  if (!note) {
    return res.status(404).json({
      status: 404,
      messange: "Data not found",
    });
  }

  //validation
  const schema = {
    title: "string|optional",
    description: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  //jika terdapat error waktu validasi maka:
  if (validate.length) {
    return res.status(400).json(validate);
  }

  //proses update
  note = await note.update(req.body);
  res.json({
    status: 200,
    message: "Success update data",
    data: note,
  });
});

//24. DELETE
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  //cek id apakah ada atau tidak ada
  let note = await Notes.findByPk(id);
  if (!note) {
    return res.status(404).json({
      status: 404,
      message: "ID not Found!",
    });
  }
  //proses delete
  await note.destroy();
  res.json({ status: 200, message: "Sukses menghapus data!" });
});

//8. contoh menggunakan dotenv
//routes ini cuma untuk mencoba penggunaan dotenv
//localhost:3000/notes/env
// /notes adalah nilai dari app.js (lihat router notes)
router.get("/env", function (req, res, next) {
  res.send(process.env.APP_NAME);
});

//4
module.exports = router;
// 5. panggil routes notes di app.js, supaya dapat dipakai di tempat lain
