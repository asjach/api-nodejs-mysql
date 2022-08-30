//untuk generate file di terminal:
//npx sequelize migration:create --name namatabel

//untuk mengeksekusi di terminal ketik:
// npx sequelize db:migrate

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    

     await queryInterface.createTable('tapel', { 
      id: Sequelize.INTEGER, 
      tapel: {type:Sequelize.STRING(10), allowNull: false},
      show:{type:Sequelize.BOOLEAN},
      createdAt:{type: Sequelize.DATE, allowNull: false},
      updatedAt: {type: Sequelize.DATE, allowNull: false}
    
    });
 
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('tapel');

  }
};
