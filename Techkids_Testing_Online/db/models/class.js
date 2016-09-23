var mongoose = require("mongoose");

var Person = new mongoose.Schema({
  name: String,
  age: {
    type: String,
    validate: {
      validator: function(v) {
        if (v>20 && v<30) return true;
        return false;
      },
      message: "your value {VALUE} but must between 20 and 30"
    }
  },
  gender: String,
  DOB: Date
})

var Clazz = new mongoose.Schema({
  _id : String,
  name: String,
  students: [Person],
  teacher: Person,
  startedDate: Date,
  total: Number
})

module.exports = mongoose.model("Class", Clazz);
