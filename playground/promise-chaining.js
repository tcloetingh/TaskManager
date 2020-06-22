require("../src/db/mongoose");
const User = require("../src/models/User");

User.findByIdAndUpdate("5ee3af33f94ed53f88ef1a05", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
