const {User} = require("../database/models");
const createError = require('http-errors')
const { hash } = require("bcryptjs");
module.exports = {
  create: async (req, res) => {
    try {
      const { name, surname, email, password } = req.body;
      if(name  == null || email == null || surname == null || password == null ) throw createError(405, "Datos nulos");
      const user = await User.create({
        name: name?.trim(),
        surname: surname?.trim(),
        email: email?.trim(),
        password: password?.trim(),
      });

      return res.status(201).json({
        ok: true,
        status: 201,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message,
      });
    }
  },
  read: async (req, res) => {
    try {
    } catch (error) {}
  },
  update: async (req, res) => {},
  deleted: async (req, res) => {
    try {
      const userId= req.params.id;
      console.log(userId)
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return res.status(201).json({
        ok: true,
        status: 200,
      });
    } catch (error) {
        return res.status(500).json({
            ok : false,
            status : 500,
            msg : error.message
        })
    }
  },
};
