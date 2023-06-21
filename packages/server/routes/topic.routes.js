module.exports = app => {
  /* eslint-disable */
  const topics = require("server/controllers/topic.controller.js");
  /* eslint-disable */
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", topics.create);

  // Retrieve all Tutorials
  router.get("/", topics.findAll);

  app.use('/api/topics', router);
};
