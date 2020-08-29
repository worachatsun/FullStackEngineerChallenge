'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Question',
      [
        {
          question: 'Quality of work',
        },
        {
          question: 'Productivity',
        },
        {
          question: 'Knowledge of job',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Question', null, {});
  },
};
