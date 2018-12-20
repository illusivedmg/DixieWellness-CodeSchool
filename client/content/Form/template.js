const template = `
<v-app>
<h1 class="cmt">Scheduling</h1>
<p class="cmt">Our office hours are: Monday-Friday 9:00 A.M - 4:00 P.M.</p>
<v-layout row justify-center>    

<v-dialog v-model="dialog" persistent max-width="1000px" @keydown.esc="dialog = false">
    
    <v-btn color="secondary" slot="activator">
    <div class="text-xs-center"> Schedule an Appointment</div>
    </v-btn>
    
    <v-card @keyup.native.enter="sendForm">
        <v-card-title>
        <span class="headline">Set Appointment</span>
        </v-card-title>

        <v-layout row wrap>
            <v-flex xs1>
            </v-flex>
            <v-flex xs10>
                <v-text-field :error="!validName" v-model="name" label="Name">
                </v-text-field>
            </v-flex>
            <v-flex xs1>
            </v-flex>

            <v-flex xs1>
            </v-flex>
            <v-flex xs10>
                <v-text-field :error="!validEmail" v-model="email" label="Email">
                </v-text-field>
            </v-flex>
            <v-flex xs1>
            </v-flex>

            <v-flex xs1>
            </v-flex>
            <v-flex xs4>
            <v-date-picker 
                @input="calendarStuff"
                v-model="startTime"
                :min=minDate() 
                :max=maxDate()
                :allowed-dates="allowedDates"
            ></v-date-picker>
            </v-flex>

            <v-flex xs1>
            </v-flex>

            <v-flex v-if="datePickerVisible" xs4>
            <h3>Available Appointments</h3>

            <v-btn small v-for='time, i in freeAppts' :key="time.id" :color="selected === i ? 'info' : 'null'" @click='selected=i; clickedButton(i)'>
                {{time}}
            </v-btn>

            </v-flex>

            <v-flex v-else xs6>
            <h3>Please select a date</h3>
            </v-flex>

            <v-layout align-center justify-center row>
            <v-btn @click.native="dialog = false">Close</v-btn>
            <v-btn color="secondary" v-if="editVisible" @click="editAppt">Edit</v-btn>
            <v-btn color="error" v-if="editVisible" @click="deleteAppt">Delete</v-btn>
            <v-btn color="primary" @click="sendForm">Submit</v-btn>
            </v-layout>

        </v-layout>
    </v-card>
    </v-dialog>

     </v-layout>
     <span class="cmt"><iframe id="calendar" src="https://calendar.google.com/calendar/b/4/embed?showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=6n4eqbcm69ivl5mqj3h6a6dg84%40group.calendar.google.com&amp;color=%238C500B&amp;ctz=America%2FDenver" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe></span>
    </v-app>
`
export default template