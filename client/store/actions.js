import api from '../helpers/api.js'
import * as actionTypes from './actionTypes.js'

const actions = {
    [actionTypes.FETCH_APPOINTMENTS]: ({ commit }) =>
    api.getAppointments()
    .then(appointments => commit(actionTypes.FETCH_APPOINTMENTS, appointments)),
    [actionTypes.ADD_APPOINTMENT]: ({ commit }, appointment) => api.addAppointment(appointment)
    .then(appointment => commit(actionTypes.ADD_APPOINTMENT, appointment))
}