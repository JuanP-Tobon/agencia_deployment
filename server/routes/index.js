const express = require('express')//importar
const router = express.Router()//manejo de las rutas

//Controladores
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function () {

    router.get('/', homeController.consultasHomePage)

    router.get('/nosotros', nosotrosController.infoNosotros)

    router.get('/viajes', viajesController.mostrarViajes)

    router.get('/viajes/:id', viajesController.mostrarViaje)

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales)

    //cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial)

    return router
}