'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      nis: {
        type:Sequelize.STRING, 
        allowNull:false,
        primaryKey: true
      },
      nama: {type:Sequelize.STRING},
      jk: {type:Sequelize.STRING},
      tmp_lahir: {type:Sequelize.STRING},
      tgl_lahir: {type:Sequelize.DATE},
      ayah: {type:Sequelize.STRING},
      ibu: {type:Sequelize.STRING},
      nisn: {type:Sequelize.STRING(10)},
      nik: {type:Sequelize.STRING(16)},
      alamat: {type:Sequelize.STRING},
      createdAt:{type: Sequelize.DATE, allowNull: false},
      updatedAt: {type: Sequelize.DATE, allowNull: false}
    })
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.dropTable('siswa');

  }
};
