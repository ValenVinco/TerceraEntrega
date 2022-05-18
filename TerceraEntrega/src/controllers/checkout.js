const nodemailer = require('nodemailer')
const twilio = require('twilio')
const middlewares = require("../controllers/middlewares")
const config = require('../utils/config')

const admin = require("firebase-admin")
const db = admin.firestore();
const query = db.collection(collection)


        const mailOptions = {
            from: 'App Ecommerce Backend Coderhouse',
            to: req.session.email,
            subject: `Nuevo pedido de ${req.session.username} "${req.session.email}"`,
            html: `<h3 style="">Detalle de su pedido:</h3>
                    <table class="gmail-table" style="border: solid 2px #DDEEEE;border-collapse: collapse;border-spacing: 0;font: normal 14px Roboto, sans-serif;">
                        <thead>
                        <tr>
                            <th scope="col" style="background-color: #c8e6f5;border: solid 1px #DDEEEE;color: #0082c1;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;">ID</th>
                            <th scope="col" style="background-color: #c8e6f5;border: solid 1px #DDEEEE;color: #0082c1;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;">Nombre</th>
                            <th scope="col" style="background-color: #c8e6f5;border: solid 1px #DDEEEE;color: #0082c1;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;">Descripcion</th>
                            <th scope="col" style="background-color: #c8e6f5;border: solid 1px #DDEEEE;color: #0082c1;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;">Codigo</th>
                            <th scope="col" style="background-color: #c8e6f5;border: solid 1px #DDEEEE;color: #0082c1;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;">Precio</th>
                        </tr>
                        </thead>
                        <tbody>
                        ${userCartContent.map(prod => `
                        <tr>
                            <th scope="row">${prod.id}</th>
                            <td style="border: solid 1px #DDEEEE;color: #333;padding: 10px;text-shadow: 1px 1px 1px #fff;">${prod.nombre}</td>
                            <td style="border: solid 1px #DDEEEE;color: #333;padding: 10px;text-shadow: 1px 1px 1px #fff;">${prod.descripcion}</td>
                            <td style="border: solid 1px #DDEEEE;color: #333;padding: 10px;text-shadow: 1px 1px 1px #fff;">${prod.codigo}</td>
                            <td style="border: solid 1px #DDEEEE;color: #333;padding: 10px;text-shadow: 1px 1px 1px #fff;">$${prod.precio}</td>
                        </tr>`).join('')}                          
                        </tbody>
                    </table>               
                    <br>
                    <p>**Correo enviado desde el servidor de backend de CoderHouse - 3ra preentrega Gabriel Tomasel**</p>`
        }
        try {
            await transporter.sendMail(mailOptions)
        } catch (error) {
            middlewares.logError(error)
        }
    }

    async function sendWhatsappMsg() {
        const accountSid = config.twilio.twilioAccountSid
        const authToken = config.twilio.twilioAccountToken
        const client = twilio(accountSid, authToken)
        try {
            await client.messages.create({
                body: `Nuevo pedido de ${req.session.username} "${req.session.email}"\n*Backend Coderhouse Ecommerce App*`,
                from: `whatsapp:${config.twilio.twilioWspPhoneNumber}`,
                to: `whatsapp:${req.session.phone}`
            })
        } catch (error) {
            middlewares.logError(error)
        }
    }
    sendWhatsappMsg()

}

module.exports = checkout
