'use strict'

var bscrypt = require('bcrypt-nodejs'); // module bcrypt
var User = require('../models/userModel'); // model User

/**
 * Testing controller 
 * @param {*} req 
 * @param {*} res 
 */
function test(req, res) {
    res.status(200).send({
        message: 'Testing Api Rest controller'
    });
}

/**
 * Method to save user
 * @param {*} req 
 * @param {*} res 
 */
function saveUser(req, res) {
    var user = new User();
    var params = req.body; // all data to post
    console.log(params);
    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    //user.role = 'ROLE_USER';
    user.role = 'ROLE_ADMIN';
    user.image = 'null'

    if (params.password) {
        // Encrypt password and save data
        bscrypt.hash(params.passowrd, null, null, (err, hash) => {
            user.password = hash;
            if (user.name != null && user.surname != null && user.email != null) {
                // save user to DB
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al ingresar el usuario' });
                    } else {
                        if (!userStored) {
                            res.status(404).send({ message: 'No se ha registrado el usuario' });
                        } else {
                            res.status(200).send({ user: userStored });
                        }
                    }
                });
            } else {
                // error message to user 
                res.status(200).send({ message: 'Ingrese todos los campos' })
            }
        });
    } else {
        res.status(200).send({ message: 'Ingrese el passowrd' });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function loginUser(req, res) {
    var params = req.body;

    var email = params.email;
    var passowrd = params.passowrd;
    console.log(email)
    console.log(passowrd)

    User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!user) {
                res.status(404).send({ message: 'Usuario no existe' });
            } else {
                // validated password
                bscrypt.compare(passowrd, user.passowrd, (err, check) => {
                    if (check) {
                        // return data login user
                        if (params.gethash) {
                            // return token JWT
                        } else {
                            res.status(200).send({ user: user });
                        }
                    } else {
                        // 404 password incorrect 
                        res.status(404).send({ message: 'Usuario no se ha podido loguease' })
                    }
                });
            }
        }
    });
}

module.exports = {
    test,
    saveUser,
    loginUser
};
