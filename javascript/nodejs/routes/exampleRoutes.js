const express = require("express");
const router = express.Router();
const { getExample } = require("../controllers/exampleController");

router.get("/example", getExample);

module.exports = router;
