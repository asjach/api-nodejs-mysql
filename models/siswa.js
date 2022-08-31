
module.exports = (sequelize, DataTypes)=>{ 
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
          tgl_lahir: {type:DataTypes.DATE},
          ayah: {type:DataTypes.STRING},
          ibu: {type:DataTypes.STRING},
          nisn: {type:DataTypes.STRING(10)},
          nik: {type:DataTypes.STRING(16)},
          alamat: {type:DataTypes.STRING}
    },{tableName: "siswa"}
    );
    return Siswa;
}