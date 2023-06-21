module.exports = (sequelize, Sequelize) => {
  const Topic = sequelize.define("topic", {
    id: {
      type: Sequelize.STRING, primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
  });

  return Topic;
};
