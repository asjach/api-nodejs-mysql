module.exports = (sequelize, DataTypes)=>{ 
    const Tapel = sequelize.define(
    "Tapel",
    {
        id: {type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true},
        tapel: {type:DataTypes.STRING, allowNull:false},
        show: {type:DataTypes.BOOLEAN}
    },{tableName: "tapel"}
    );
    return Tapel;
}