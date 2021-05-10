const { Router } = require("express");
const { getList, createList } = require("../controllers/V1/list.controller");
const router = Router();

// @route Get api/list
// @desc Get a list
// @access Public
router.route('/')
  .get(getList)
  .post(createList)

module.exports = router;