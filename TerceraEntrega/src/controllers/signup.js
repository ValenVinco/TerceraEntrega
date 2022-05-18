const admin = require("firebase-admin");
const date = Date(Date.now()).toString()
const db = admin.firestore();
const middlewares = require('./middlewares')
const nodemailer = require('nodemailer')
const config = require('../utils/config')
const User = require('../models/user')
const countryCodes = require('../utils/countryCodes')


function getSignup(req, res) {
    res.render('signup', { countryCodes })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

function postSignup(req, res) { 
    req.session.username = req.user.username
    req.session.email = req.user.email
    req.session.phone = req.user.phone
    req.session.userAvatar = req.user.avatar
    

        const mailOptions = {
            from: 'Servidor Node.js Backend Coderhouse',
            to: config.newSigupNotificationMail,
            subject: 'Nuevo registro',
            html: `<h3 style="">Datos del nuevo usuario:</h3>
                   <ul>
                        <li>Nombre: ${req.user.username}</li>
                        <li>Email: ${req.user.email}</li>
                        <li>Direccion: ${req.user.address}</li>
                        <li>Edad: ${req.user.age}</li>
                        <li>Teléfono: ${req.user.phone}</li>
                        <li>Avatar: ${req.user.avatar}</li>
                   </ul>
                   <br>
                   <p>**Correo enviado desde el servidor de backend de CoderHouse - 3ra preentrega Gabriel Tomasel**</p>`
        }
        try {
            await transporter.sendMail(mailOptions)
        } catch (error) {
            middlewares.logError(error)
        }
    }



////////////////////////////////////////////////////////////////////////////////////////////////////////

function getFailsignup(req, res) {
    const error = new Error
    error.message = 'Signup error'
    middlewares.logError(error)
    res.set({ 'Refresh': '2; url=/signup' });
    res.render('signup-error', {
    });
}

module.exports = {
    getSignup,
    postSignup,
    getFailsignup
}