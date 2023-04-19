const { User } = require("../database/models");
const createError = require("http-errors");
const { hash } = require("bcryptjs");
const errorResponse = require("../helpers/errorResponse");
module.exports = {
  create: async (req, res) => {
    try {
      const { name, surname, email, password } = req.body;
      if ([name, surname, email, password].includes(""))
        throw createError(400, "Todos los campos son obligatorios");
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
      return errorResponse(res, error, "Create");
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findOne({
        where: {
          id: id,
        },
      });
      return res.status(201).json({
        ok: true,
        status: 201,
        data: {
          name: data.name,
          surname: data.surname,
          email: data.email,
        },
      });
    } catch (error) {
      return errorResponse(res, error, "Read");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, surname, email, password } = req.body;
      const data = await User.update(
        {
          name: name?.trim(),
          surname: surname?.trim(),
          email: email?.trim(),
          password: password?.trim(),
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        ok: true,
        status: 200,
      });
    } catch (error) {
      return errorResponse(res, error, "Update");
    }
  },
  deleted: async (req, res) => {
    try {
      const userId = req.params.id;
      console.log(req.params.id);
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
      return errorResponse(res, error, "Delete");
    }
  },
};
