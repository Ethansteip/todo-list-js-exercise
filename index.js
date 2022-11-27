

// Create a new task object and assign its properties
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(task) {
      console.log(`${this.title} has ${this.complete ? " " : " not "} been completed`);
    },

    markComplete: function(task) {
      this.complete = true;
    },
  };

  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the of the 💩 out of litter box!");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// print state of tasks
task1.logState();
task1.markComplete();
task1.logState();
