//16. membuat model dari tabel notes
//const { QueryInterface } = require('sequelize/types');
//const {sequelize} = require('.');
module.exports = (sequelize, DataTypes)=>{ 
    const Notes = sequelize.define(
    "Notes",
      {
        //copas aja dari folder migrations tinggal ubah sequelize dengan DataTypes
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          title: {
            type: DataTypes.STRING
          },
          description: {
            type: DataTypes.STRING
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, 
    {
        tableName: "notes",
    }
    );
    return Notes;
}