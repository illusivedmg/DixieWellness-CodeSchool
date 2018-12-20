import template from './template.js'
import data from './data.js'
import api from '../../helpers/api.js'

var datelist = [moment().weekday(6).format().substr(0, 10), moment().weekday(7).format().substr(0, 10), moment().weekday(6).add(1, 'week').format().substr(0, 10), moment().weekday(7).add(1, 'week').format().substr(0, 10)];

const formView = Vue.component('formView', {
    data,
    template,
    created() {
        const newReq = {
            startDate: moment().format(),
            endDate: moment().add(14, 'days').format()
        }
        api.getAppointments(newReq).then(
            events => {
            if (events.length) {
                events.map((event, i) => {this.appts.push(moment(event.start.dateTime).toISOString())
                })
            }})
    },
    computed: {
        freeAppts: function() {
            this.falist = this.times.slice()
            for( var i = this.falist.length - 1; i >= 0; i-- ) {
                var time = this.twelveToTwentyFour(this.falist[i])
                var date = moment(this.startTime).hours(time).minutes(0).toISOString()
                for( var j = 0; j < this.appts.length; j++ ) {
                    if( date.substr(0, 13) == this.appts[j].substr(0, 13) ) {
                        this.falist.splice(i, 1)
                    }
                }
            }
            return this.falist
        },
        datePickerVisible: function() {
            if (this.startTime) {
                return true
            } 
            return false
        },
        editVisible: function() {
            if (this.createdId) {
                return true
            } return false
        }
    },
    watch: {
        email(val){
            this.validEmail = this.checkEmail()
        },
        name(val){
            this.validName = this.checkName()
        }
    },
    methods: {
        editAppt() {
            this.name = this.createdName
            this.email = this.createdEmail
        },
        deleteAppt() {
            api.deleteAppointment(this.createdId).then(
                this.appts.pop(),
                this.dialog = false,
                this.createdId = null,
                this.createdEmail = '',
                this.createdName = '',
                this.refreshCal()
            ).catch(e => console.log(e))
        },
        twelveToTwentyFour(time) {
            if (time.substr(time.length - 2) == 'PM' && time.split(':')[0] != 12) {
                time = Number(time.split(':')[0]);
                time += 12;
            } else {
                time = time.split(':')[0];
            }
            return time;
        },
        sendForm() {
            if (!this.checkEmail()){
                if(!this.checkName()){
                    this.validName = false
                }
                this.validEmail = false
                return
            }
            if (!this.checkName()){
                this.validName = false
                return
            }
            var time = this.falist[this.selected]
            time = this.twelveToTwentyFour(time)
            var mStartTime = moment(this.startTime).hours(time).minutes(0).toISOString()
            var mEndTime = moment(this.startTime).hours(time).minutes(0).add(1, 'hours').toISOString()
            if (this.createdId) {
                var updatedAppt = {
                    id: this.createdId,
                    name: this.name,
                    email: this.email,
                    startTime: mStartTime,
                    endTime: mEndTime
                }
                api.updateAppointment(updatedAppt).then(event => {
                    this.createdId = event.id,
                    this.createdName = event.description,
                    this.createdEmail = event.attendees[0].email,
                    this.appts.pop(),
                    this.appts.push(mStartTime),
                    this.refreshCal()
                }).catch(e => console.log(e))
            } else {
                var newAppt = {
                    name: this.name,
                    email: this.email,
                    startTime: mStartTime,
                    endTime: mEndTime
                }
                api.addAppointment(newAppt).then(event => {
                    this.refreshCal(),
                    this.appts.push(mStartTime),
                    this.createdId = event.id,
                    this.createdName = event.description,
                    this.createdEmail = event.attendees[0].email,
                    this.name = '',
                    this.email = ''
                }).catch(e => console.log(e))
            }
        },
        refreshCal() {
            document.getElementById('calendar').src = document.getElementById('calendar').src
        },
        allowedDates: val => datelist.indexOf(val) == -1,
        presentDate() {
            return moment().format().substr(0, 10)
        },
        minDate() {
            var mnd = moment().format()
            return mnd.substr(0, 10)
        },
        maxDate() {
            var mxd = moment().add(14, 'days').format()
            return mxd.substr(0, 10)
        },
        clickedButton(i) {
            
        },
        calendarStuff(e){
            this.selected = 0
        },
        checkEmail(){
            return this.email !== '' && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
        },
        checkName(){
            return this.name !== ''
        }
    }
})

export default formView