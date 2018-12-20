import template from './template.js'
import data from './data.js'
import api from '../../helpers/api.js'

const studygroupView = Vue.component('studygroupView', {
    data,
    template,
    created() {
        api.getSchedules().then(schedules => {
            this.schedules = schedules
            this.loading = false
        }).catch(e => console.log(e));
    },
    computed: {
        getSched: function() {
            for (var i = 0; i < this.schedules.length; i++) {
                var foundClass = this.classObjList.findIndex(classObj => classObj.className == this.schedules[i].classEntry)
                if ( foundClass == -1) {
                    var classObj = {
                        className: this.schedules[i].classEntry, 
                        members:[{name: this.schedules[i].studentName, email: this.schedules[i].studentEmail, message: this.schedules[i].message}]
                    }
                    this.classObjList.push(classObj)
                } else {
                    var foundEmail = this.classObjList[foundClass].members.findIndex(member => member.email == this.schedules[i].studentEmail)
                    if (foundEmail == -1) {
                        this.classObjList[foundClass].members.push({name: this.schedules[i].studentName, email: this.schedules[i].studentEmail, message: this.schedules[i].message})
                    }
                }
            }
            this.classObjList.sort(this.compareClassList)
            return this.classObjList
        },
        thankYouVisible: function() {
            return this.submitted && this.classEntry == ""
        },
        firstEntry: function() {
            return this.classObjList.length == 0
        },
        loadingText() {
            return this.loading ? 'Loading Schedules ... ' : 'No Study Groups currently formed. Be the first!'
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
        },
        classEntry(val){
            this.validClassEntry = this.checkClassEntry()
        }
    },
    methods: {
        compareClassList(a, b) {
            if( a.className < b.className ) {
                return -1
            } else if ( a.className > b.className) {
                return 1
            } return 0
        },
        checkEmail(){
            return this.email !== '' && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
        },
        checkName(){
            return this.name !== ''
        },
        checkClassEntry(){
            if (this.submitted == false) {
                return this.classEntry !== ''
            } else {
                return true
            }
        },
        sendSched() {
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
            this.submitted = false
            if (this.createdId) {
                this.classEntry = this.classEntry.toUpperCase().replace(/ /g,'')
                const updatedSched = {
                    _id: this.createdId,
                    studentName: this.name,
                    studentEmail: this.email,
                    classEntry: this.classEntry,
                    message: this.message
                }
                api.updateSchedule(updatedSched).then(
                    this.deleteFromClassList(this.createdClass, this.createdName, this.createdEmail),
                    this.addToClassList(this.classEntry, this.name, this.email, this.message),
                    this.processSubmitted(this.classEntry, this.name, this.email, this.message, schedule._id),
                    this.classEntry = '',
                    this.message = '',
                    this.submitted = true,
                    this.$refs.classEntryRef.focus(),
                ).catch(e => console.log(e))
            } else {
                this.classEntry = this.classEntry.toUpperCase().replace(/ /g,'')
                const newSched = {
                    studentName: this.name,
                    studentEmail: this.email,
                    classEntry: this.classEntry,
                    message: this.message
                }
                api.addSchedule(newSched).then(schedule => {
                    this.createdId = schedule._id,
                    this.addToClassList(this.classEntry, this.name, this.email, this.message),
                    this.processSubmitted(this.classEntry, this.name, this.email, this.message, this.createdId),
                    this.classEntry = '',
                    this.message = '',
                    this.submitted = true,
                    this.$refs.classEntryRef.focus()
                }).catch(e => console.log(e))
            }
        },
        editSched() {
            this.name = this.createdName
            this.email = this.createdEmail
            this.classEntry = this.createdClass
        },
        deleteSched() {
            api.deleteSchedule(this.createdId).then(
                this.deleteFromClassList(this.createdClass, this.createdName, this.createdEmail),
                this.createdId = null,
                this.createdEmail = '',
                this.createdName = '',
                this.createdClass = ''
            ).catch(e => console.log(e))
        },
        processSubmitted(cName, sName, sEmail, message, cId) {
            this.createdClass = cName
            this.createdEmail = sEmail
            this.createdId = cId
            this.createdName = sName
            this.createdMessage = message
        },
        addToClassList(cName, sName, sEmail, message) {
            var foundClass = this.classObjList.findIndex(classObj => classObj.className == cName)
            if (foundClass >= 0 && foundClass < this.classObjList.length ) {
                var foundEmail = this.classObjList[foundClass].members.findIndex(member => member.email == sEmail)
                if (foundEmail == -1) {
                    this.classObjList[foundClass].members.push({name: sName, email: sEmail, message: message})
                } 
            } else if ( foundClass == -1) {
                var classObj = {
                    className:cName,
                    members:[{name: sName, email: sEmail, message: message}]
                }
                this.classObjList.push(classObj)
            }
        },
        deleteFromClassList(cName, sName, sEmail) {
            var foundClass = this.classObjList.findIndex(classObj => classObj.className == cName)
            if (foundClass != -1 ) {
                var foundEmail = this.classObjList[foundClass].members.findIndex(member => member.email == sEmail)
                var foundName = this.classObjList[foundClass].members.findIndex(member => member.name == sName)
                if ( foundEmail == foundName ){
                    this.classObjList[foundClass].members.splice(foundEmail, 1)
                    if (this.classObjList[foundClass].members.length == 0) {
                        this.classObjList.splice(foundClass, 1)
                    }
                }
            }
        }
    }
})

export default studygroupView