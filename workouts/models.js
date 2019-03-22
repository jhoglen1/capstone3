"use strict";
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const workoutSchema = mongoose.Schema ({
  day: {
    type: String,
    require: true
  },
  miles:{
    type: Number,
    default: 0
  },
  hr:{
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

	
});

workoutSchema.methods.serialize = function() {
  return {
    
    
    day: this.day || "",
    miles: this.miles || "",
    hr: this.hr|| "",
    id: this._id || ""
    
  };
};

const workouts = mongoose.model("workouts", workoutSchema);

module.exports = { workouts };
