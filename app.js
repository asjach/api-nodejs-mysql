//7. mengimport dotenv.config
require ('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//path relative ke file (supaya fungsi/class dapat digunakan)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');
var siswaRouter = require('./routes/siswa');
var tapelRouter = require('./routes/tapel');
var riwayatBelajarRouter = require('./routes/riwayat_belajar');
const { sequelize } = require('./models');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//mendefinisikan routes untuk browser, contoh: localhost/notes
app.use('/', indexRouter);
app.use('/users', usersRouter);
//6. langkah 5 dipanggil disini
app.use('/notes', notesRouter);
app.use('/siswa', siswaRouter);
app.use('/tapel', tapelRouter);
app.use('/riwayat_belajar', riwayatBelajarRouter);



// untuk mengubah seluruh tabel di db sesuai model di sequelize
// ALTER TABLE

//sequelize.sync({alter:true});

// menghapus seluruh tabel di db, kemudian membuat kembali tabel (mereset tabel)
//DROP Table and CREATE table
//sequelize.sync({force:true});

//menghapus seluruh tabel di db
//sequelize.drop();

//untuk menghapus tabel tertentu
//namamodel.drop();

module.exports = app;
