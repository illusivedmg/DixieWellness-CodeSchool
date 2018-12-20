const express = require('express')
const router = express.Router()

const scheduleController = require('../controllers/schedules')

router.get('/', scheduleController.listSchedules)

router.post('/', scheduleController.createSchedule)

router.get('/:id',scheduleController.getSchedule)

router.put('/:id', scheduleController.updateSchedule)

router.delete('/:id', scheduleController.deleteSchedule)

module.exports = router