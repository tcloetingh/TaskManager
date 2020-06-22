require("../src/db/mongoose");
const User = require("../src/models/User");
const Task = require("../src/models/Task");

// Task.findByIdAndDelete("5ee77008256833539c4f2d8c")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age: age }); // { age } also works
  return count;
};

const addTask = async (description, completed) => {
  const task = await new Task({
    description: description,
    completed: completed
  }).save();
  //const count = await Task.countDocuments({});
  return task;
};

const deleteTaskAndCount = async id => {
  const task = await Task.findOneAndDelete({ id: id });
  const count = await Task.countDocuments({ completed: false });
  return count;
};

// updateAgeAndCount("5ee3af33f94ed53f88ef1a05", 25)
//   .then(count => {
//     console.log(count);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// addTask("Hoist mini split", false)
//   .then(count => {
//     console.log(count);
//   })
//   .catch(e => {
//     console.log(e);
//   });

deleteTaskAndCount("5ee3cb110445b142275cbde1")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
