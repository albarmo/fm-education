const { Course } = require("../models");

class courseController {
  static async listCourse(req, res) {
    let list = await Course.findAll();
    return res.status(200).json(list);
  }
}
module.exports = courseController;
