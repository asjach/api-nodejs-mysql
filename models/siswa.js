
module.exports = (sequelize, DataTypes)=>{ 
    //sequelize.define(nama model, attributes, options)
    const Siswa = sequelize.define(
    "Siswa",
    {
        nis: {
            type:DataTypes.STRING, 
            allowNull:false,
            primaryKey: true
          },
          nama: {type:DataTypes.STRING},
          jk: {type:DataTypes.STRING},
          tmp_lahir: {type:DataTypes.STRING},
          tgl_lahir: {type:DataTypes.DATEONLY},
          ayah: {type:DataTypes.STRING},
          ibu: {type:DataTypes.STRING},
          nisn: {type:DataTypes.STRING(10)},
          nik: {type:DataTypes.STRING(16)},
          alamat: {type:DataTypes.STRING}
    },{
        //OPTION
        //nama tabel di database
        tableName: 'siswa', 
        //jika ingin nama tabel di dbsesuai nama model 
        //freezeTable: true,
        timestamps:false,}
        
        
        );
    Siswa.associate = function(models){
        //Siswa.hasMany(models.Siswa)
        Siswa.hasMany(models.Riwayat_Belajar, {foreignKey: 'nis'})
        //Siswa.hasMany(models.Riwayat_Belajar, {as: 'siswa'})
    }
    return Siswa;
}