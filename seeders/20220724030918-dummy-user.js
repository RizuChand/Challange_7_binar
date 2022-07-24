'use strict';
const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {


    return queryInterface.bulkInsert('usergames', [{
      username: 'superadmin',
      password: bcrypt.hashSync('superadmin', 10),
      superUser: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);




  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
