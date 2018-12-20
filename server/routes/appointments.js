const express = require('express')
const router = express.Router()

const appointmentController = require('../controllers/appointments')

router.get('/', appointmentController.listAppointments)

router.post('/', appointmentController.createAppointment)

router.get('/:id',appointmentController.getAppointment)

router.put('/:id', appointmentController.updateAppointment)

router.delete('/:id', appointmentController.deleteAppointment)

module.exports = router