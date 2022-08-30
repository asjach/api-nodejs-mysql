
//12
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    //13. membuat tabel notes
  await queryInterface.createTable('notes', { 
    //14. field id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false

    }
   });

  },

  async down (queryInterface, Sequelize) {
//15. ubah bagian string di dalam kurung dengan nama tabel
     await queryInterface.dropTable('notes');
     
  }
};
