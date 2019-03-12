"use strict";
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const { workouts } = require("./models");
const router = express.Router();
const jsonParser = bodyParser.json();
const jwtAuth = passport.authenticate("jwt", { session: false });

router.get("/", jwtAuth, (req, res) => {
    workouts.find({
      user: req.user.id
    })
      .then(workouts=> {
        res.json(workouts.map(workouts => workouts.serialize()));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "something went terribly wrong" });
      });
  });
  
  router.get("/:id", (req, res) => {
    workouts.findById(req.params.id)
      .then(workouts => res.json(workouts.serialize()))
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "something went horribly awry" });
      });
  });

  module.exports = { router };