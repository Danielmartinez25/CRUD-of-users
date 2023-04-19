const db = require('../database/models')
const {hash} = require('bcryptjs')
module.exports = {
    create : async(req,res) => {
        try {
            const {name,surname,email,password} = req.body();
            let passwordHash = hash(password,8);
            const data = await db.User.create({
                name : name,
                surname : surname,
                email : email,
                password : passwordHash
            })
                  return res.status(201).json({
                    ok: true,
                    status: 201,
                    data : data
                  });
        } catch (error) {   
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message || "Server error",
      });
        }
    },
    read : async (req,res) => {
        try {
            
        } catch (error) {
            
        }
    },
    update : async(req,res) => {

    },
    deleted : async(req,res) => {

    }
}