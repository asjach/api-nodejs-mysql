module.exports = (sequelize, DataTypes)=>{ 
    const Tapel = sequelize.define(
    "Tapel",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
            },
        tapel: {
            type:DataTypes.STRING, 
            allowNull:false
        },
        show: {
            type:DataTypes.BOOLEAN
        }
    },
    {
        tableName: "tapel",
    }
    );
    return Tapel;
}