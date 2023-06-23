module.exports = app => {
  
  const topics = require("server/controllers/topic.controller.js");

  const router = require("express").Router();

  router.post("/postTopic", topics.create);

  router.get("/topics", topics.findAll);

  app.use('/api/forum', router);
};
