var Siswa= require('./riwayat_belajar');
module.exports = (sequelize, DataTypes)=>{ 
    const Riwayat_Belajar = sequelize.define(
      //MODEL NAME
    "Riwayat_Belajar",
    { 
      //ATTRIBUTES
        id: {
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        // nis:{
        //   type:DataTypes.STRING,
        //   allowNull:false,
        //   references: {
        //     model: 'Siswa',
        //     key: 'nis'
        //   }
        // },
        nis: {type:DataTypes.STRING},
        tapel:{type:DataTypes.STRING},
        jenjang:{type:DataTypes.STRING},
        tingkat:{type:DataTypes.STRING},
        kelas:{type:DataTypes.STRING},
        status_awal:{type:DataTypes.STRING},
        status_sekarang:{type:DataTypes.STRING},
        status_akhir:{type:DataTypes.STRING},
      }, 
    {
      //OPTIONS
      //timestamps: true,//  true  = maka akan membuat createdAt dan updatedAt
      //createdAt: true// akan membuat createdAt
      //updatedAt: false // tidak akan membuat updatedAt

      //timestamps: false,
      createdAt: false,
      updatedAt: false,

      //nama tabel di database akan disesuaikan dengan opsi ini
      //jika opsi ini tidak dimasukkan maka nama tabel akan bentuk plural dari nama model
      //tableName: 'riwayat_belajar',

      //secara default, sequelize akan membuat nama tabel di db menjadi plural/jamak dari nama model
      //untuk menonaktifkannya gunakan opsi berikut:
        //true: membuat nama tabel di database nama dengan nama model
        //false: membuat nama tabel di database bentuk plural/jamak
        
      freezeTableName: true,
  });
  
   Riwayat_Belajar.associate = function(models){
      //Riwayat_Belajar.belongsTo(models.Siswa);
       Riwayat_Belajar.belongsTo(models.Siswa, {foreignKey: 'nis'})
       //Riwayat_Belajar.belongsTo(models.Siswa, { foreignKey: {name:'nis', allowNull: false},})
    };
    return Riwayat_Belajar;
};
