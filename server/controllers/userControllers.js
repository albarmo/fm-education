const { comparePassword } = require("../helper/hash");
const { generateAccessToken } = require("../helper/jwt");
const { User } = require("../models");

class userController {
  static register(req, res) {
    let userInputRegister = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    User.create(userInputRegister)
      .then((data) => {
        console.log(`success register`);
        return res.status(201).json(data);
      })
      .catch(({ errors }) => {
        return res.status(400).json(`message : ${errors[0].message}`);
      });
  }

  static login(req, res) {
    let userInputLogin = {
      username: req.body.username,
      password: req.body.password,
    };
    User.findOne({
      where: {
        username: userInputLogin.username,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(401).json({ message: `username or password wrong!` });
        } else if (!comparePassword(userInputLogin.password, user.password)) {
          return res
            .status(401)
            .json({ message: `username or password wrong!` });
        } else {
          const access_token = generateAccessToken({
            id: user.id,
            username: user.username,
            email: user.email,
          });
          console.log("login success!");
          return res.status(200).json({ access_token });
        }
      })
      .catch(({ errors }) => {
        return res.status(500).json({ message: errors[0].message });
      });
  }
}

module.exports = userController;
