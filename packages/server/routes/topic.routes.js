module.exports = app => {
  const topics = require("../controllers/topic.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", topics.create);

  // Retrieve all Tutorials
  router.get("/", topics.findAll);

  app.use('/api/topics', router);
};
