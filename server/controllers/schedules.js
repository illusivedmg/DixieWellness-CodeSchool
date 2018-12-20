const Schedule = require('../models/schedules')

module.exports = {
    listSchedules: (req, res, next) => {
        Schedule.find(req.query).then(
            schedules => res.json(schedules)).catch(e => {
                req.error = e
                next()
            })
    },
    getSchedule: (req, res, next) => {
        Schedule.findById(req.params._id).then(schedule => {
            if (schedule === null ) {
                res.status(404).send()
                return
            }
            res.json(schedule)
        }).catch(e => {
            req.error = e
            next()
        })
    },
    createSchedule: (req, res, next) => {
        Schedule.create({
            studentName: req.body.studentName,
            studentEmail: req.body.studentEmail,
            classEntry: req.body.classEntry,
            message: req.body.message
        }).then(
            schedule => res.status(201).json(schedule)
        ).catch(e => {
            req.error = e
            next()
        })
    },
    updateSchedule: (req, res, next) => {
        Schedule.findById(req.params._id).then(schedule => {
            if (schedule === null ) {
                res.status(404).send()
                return
            }
            schedule.studentName = req.body.studentName,
            schedule.studentEmail = req.body.studentEmail,
            schedule.classEntry = req.body.classEntry
            return schedule.save()
        }).then(schedule => res.json(schedule)).catch(e => {
            req.error = e
            next()
        })
    },
    deleteSchedule: (req, res, next) => { 
        Schedule.findByIdAndRemove(req.params.id).then(() => res.status(204).send()).catch(e => {
            req.error = e
            next()
        })
    }
}