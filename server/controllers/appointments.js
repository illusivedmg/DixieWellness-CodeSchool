const {google} = require('googleapis');

module.exports = {
    createAppointment: (req, res, next) => {
        const calendar = google.calendar({version: 'v3', auth});
        var event = {
            'summary': 'Appointment',
            'location': 'DSU Wellness',
            'description': req.body.name,
            'start': {
                'dateTime': req.body.startTime,
                'timeZone': 'America/Denver'
            },
            'end': {
                'dateTime': req.body.endTime,
                'timeZone': 'America/Denver'
            },
            'attendees': [
                {'email': req.body.email},
            ],
            'reminders.useDefault':'true'
        };

        calendar.events.insert({
            calendarId: '6n4eqbcm69ivl5mqj3h6a6dg84@group.calendar.google.com',
            resource: event
        }, function(err, event) {
            if (err) {
                console.log(err)
                req.error = err
                next()
                return
            }
            console.log('Event created: %s', event.data.htmlLink);
            res.status(201).json(event.data)
            return
        })
    },
    listAppointments: (req, res, next) => {
        const calendar = google.calendar({version: 'v3', auth});
        calendar.events.list({
            calendarId: '6n4eqbcm69ivl5mqj3h6a6dg84@group.calendar.google.com',
            timeMin: req.body.startDate,
            timeMax: req.body.endDate,
            maxResults: 20,
            singleEvents: true,
            orderBy: 'startTime',
        }, (err, resp) => {
            if (err) {
                console.log(err)
                req.error = err
                next()
                return
            }
            const events = resp.data.items;
            if (events.length) {
                /* console.log('Upcoming 20 appointments:');
                events.map((event, i) => {
                    const start = event.start.dateTime || event.start.date;
                    console.log(`${start} - ${event.summary}`);
                }); */
                res.status(200).json(events)
            } else {
                console.log('No upcoming events found.');
                res.status(200).json({})
            }
        });
    },
    getAppointment: (req, res, next) => {
        const calendar = google.calendar({version: 'v3', auth});
        calendar.events.get({
            calendarId: '6n4eqbcm69ivl5mqj3h6a6dg84@group.calendar.google.com',
            eventId: req.params.id
        }, (err, resp) => {
            if (err) {
                console.log(err)
                req.error = err
                next()
                return
            }
            const event = resp.data;
            if (event) {
                res.status(200).json(event)
            } else {
                console.log('No upcoming events found.');
                res.status(404).send()
            }
        });
    },
    updateAppointment: (req, res, next) => {
        const calendar = google.calendar({version: 'v3', auth});

        var event = {
            'summary': 'Appointment',
            'location': 'DSU Wellness',
            'description': req.body.name,
            'start': {
                'dateTime': req.body.startTime,
                'timeZone': 'America/Denver'
            },
            'end': {
                'dateTime': req.body.endTime,
                'timeZone': 'America/Denver'
            },
            'attendees': [
                {'email': req.body.email},
            ],
            'reminders.useDefault':'true'
        };

        calendar.events.update({
            calendarId: '6n4eqbcm69ivl5mqj3h6a6dg84@group.calendar.google.com',
            eventId: req.params.id,
            resource: event
        }, (err, resp) => {
            if (err) {
                console.log(err)
                req.error = err
                next()
                return
            }
            const event = resp.data;
            if (event) {
                res.status(200).json(event)
            } else {
                console.log('No upcoming events found.');
                res.status(404).send()
            }
        });
    },
    deleteAppointment: (req, res, next) => {
        const calendar = google.calendar({version: 'v3', auth});
        calendar.events.delete({
            calendarId: '6n4eqbcm69ivl5mqj3h6a6dg84@group.calendar.google.com',
            eventId: req.params.id
        }, (err) => {
            if (err) {
                console.log(err)
                req.error = err
                next()
                return
            }
            res.status(204).send()
        })
    }
}