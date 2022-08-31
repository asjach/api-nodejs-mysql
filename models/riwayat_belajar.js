module.exports = (sequelize, DataTypes)=>{ 
    const Riwayat_Belajar = sequelize.define(
    "Notes",
    { 
        id: {
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        nis:{
          type:DataTypes.STRING,
          allowNull:false,
          references: {
            model: 'siswa',
            key: 'nis'
          }
        },
        tapel:{type:DataTypes.STRING},
        jenjang:{type:DataTypes.STRING},
        tingkat:{type:DataTypes.STRING},
        kelas:{type:DataTypes.STRING},
        status_awal:{type:DataTypes.STRING},
        status_sekarang:{type:DataTypes.STRING},
        status_akhir:{type:DataTypes.STRING},
        createdAt:{type: DataTypes.DATE, allowNull: false},
        updatedAt: {type: DataTypes.DATE, allowNull: false}
      }, 
    {});
    Riwayat_Belajar.associate = function(models){
        Riwayat_Belajar.hasMany(models.User, {as: 'santri'})
    }
    return Riwayat_Belajar;
}