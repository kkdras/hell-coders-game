module.exports = app => {
  /* eslint-disable */
  const topics = require("server/controllers/topic.controller.js");
  /* eslint-disable */
  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/postTopic", topics.create);

  // Retrieve all Tutorials
  router.get("/topics", topics.findAll);

  app.use('/api/forum', router);
};
