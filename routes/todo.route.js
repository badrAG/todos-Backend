const { Router } = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteTodosComplete,
} = require("../controllers/V1/todo.controller");
const router = Router();

// @route Get/Post/Delete api/todos
// @desc Get all todos Delete todos complete Post create todo
// @access Public
router.route("/").get(getTodos).post(createTodo).delete(deleteTodosComplete);

// @route Put/Delete api/todos/:idtodo
// @desc Delete todos Put todo
// @access Public
router.route("/:todoId").put(updateTodo).delete(deleteTodo);

module.exports = router;
