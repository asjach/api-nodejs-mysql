'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable(
    'riwayat_belajar', 
    { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      nis:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      tapel:{type:Sequelize.STRING},
      jenjang:{type:Sequelize.STRING},
      tingkat:{type:Sequelize.STRING},
      kelas:{type:Sequelize.STRING},
      status_awal:{type:Sequelize.STRING},
      status_sekarang:{type:Sequelize.STRING},
      status_akhir:{type:Sequelize.STRING},
      createdAt:{type: Sequelize.DATE, allowNull: false},
      updatedAt: {type: Sequelize.DATE, allowNull: false}
    });
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('riwayat_belajar');
 }
};
