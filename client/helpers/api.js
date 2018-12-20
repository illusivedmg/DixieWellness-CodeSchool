const getAppointments = () =>
  fetch('/appointments').then(res => res.json()).catch(e => console.log(e))

const addAppointment = appointment =>
  fetch('/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointment)
  }).then(res => res.json()).catch(e => console.log(e))

const updateAppointment = updatedAppointment =>
  fetch(`/appointments/${updatedAppointment.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedAppointment)
  }).then(res => res.json()).catch(e => console.log(e))

const deleteAppointment = id =>
  fetch(`/appointments/${id}`, {
    method: 'DELETE'
  }).catch(e => console.log(e))

/* SCHEDULES */

const getSchedules = () =>
  fetch('/schedules').then(res => res.json()).catch(e => console.log(e))

const addSchedule = schedule =>
  fetch('/schedules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(schedule)
  }).then(res => res.json()).catch(e => console.log(e))

const updateSchedule = updatedSchedule =>
  fetch(`/schedules/${updatedSchedule._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedSchedule)
  }).then(res => res.json()).catch(e => console.log(e))

const deleteSchedule = id =>
  fetch(`/schedules/${id}`, {
    method: 'DELETE'
  }).catch(e => console.log(e))

export default {
  getAppointments,
  addAppointment,
  updateAppointment,
  deleteAppointment,
  getSchedules,
  addSchedule,
  updateSchedule,
  deleteSchedule
}