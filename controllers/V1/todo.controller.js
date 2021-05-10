const moment = require("moment");
const Todo = require("../../models/todo.model");
const { sendEmail } = require("../../utils/sendEmail");
const createTodo = (req, res) => {
  const { title } = req.body;
  try {
    const todo = new Todo({ title });
    todo.save((err, todo) => {
      err ? res.status(400).json({ error: err }) : res.json(todo);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("error server");
  }
};

const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
      runValidators: true,
    });
    if (todo) {
         if(!todo.status){
            await sendEmail(`${todo.title} is completed at ${moment(todo.updatedAt).format('LL')}`)
         }
      res.json(todo);
    } else {
      res.json({ err: "todo not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("error server");
  }
};

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findByIdAndRemove(todoId, {
      new: true,
      runValidators: true,
    });
    todo ? res.json(todo) : res.json({ err: "todo not found" });
  } catch (error) {
    console.log(error);
    res.status(500).send("error server");
  }
};

const deleteTodosComplete = async (req, res) => {
    try {
        const todo = await Todo.deleteMany({ status: false});
          const todos = await Todo.find().sort("-updatedAt")
          res.json(todos)
    } catch (error) {
      console.log(error);
      res.status(500).send("error server");
    }
  };

const getTodos = async (req, res) => {
  let options = {};
  if (req.query.listRef) {
    options = {
      ...options,
      listRef: req.query.listRef,
    };
  }
  if (req.query.status) {
    options = {
      ...options,
      status: parseInt(req.query.status),
    };
  }
  try {
    Todo.find({ ...options })
      .sort("-createdAt")
      .exec((err, todos) => {
        if (err) res.status(400).json({ error: err });
        res.status(200).json(todos);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("error server");
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteTodosComplete,
};
