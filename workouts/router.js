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

  router.post("/", jwtAuth, jsonParser, (req, res) => {
    const requiredFields = [
      "day",
      "miles",
      "hr",
      ];
    for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in req.body)) {
        const message = `Missing \`${field}\` in request body`;
        console.error(message);
        return res.status(400).send(message);
      }
    }
    workouts.create({
      day: req.body.day,
      miles: req.body.miles,
      hr: req.body.hr
    
    })
      .then(workouts => res.status(201).json(workouts.serialize()))
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
      });
  });
  router.delete("/:id", (req, res) => {
    workouts.findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(204).json({ message: "success" });
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "something went terribly wrong" });
      });
  });
  router.put("/:id", jsonParser, (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
      res.status(400).json({
        error: "Request path id and request body id values must match"
      });
    }
    const updated = {};
    const updateableFields = [
      "day",
      "miles",
      "hr"
      
    ];
    updateableFields.forEach(field => {
      if (field in req.body) {
        updated[field] = req.body[field];
      }
    });
    workouts.findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
    .then(updatedworkouts => res.status(204).end())
    .catch(err => res.status(500).json({ message: "Something went wrong" }));
});

  

  module.exports = { router };