const template = `
<v-app light>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-toolbar dark color="secondary">
                    <v-toolbar-title class="white--text">Student Wellness</v-toolbar-title>
                </v-toolbar>
            </v-flex>

        <v-flex xs12>
            <v-content> 
                <section>
                    <img class="hero" src="StudentWellnessE.png">
                </section>
            </v-content>
        </v-flex>
    </v-layout>

    <v-layout row wrap>
        <v-flex xs2 color="primary">
           
            <v-list>
                 <v-list-tile ripple @click="" to="/">
                    <v-list-tile-title><router-link to="/">Home</router-link></v-list-tile-title>
                 </v-list-tile>

                 <v-list-tile ripple @click="" to="/studygroupView">
                    <v-list-tile-title><router-link to="/studygroupView">Study Groups</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/form">
                    <v-list-tile-title><router-link to="/form">Appointments</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/adhd">
                    <v-list-tile-title><router-link to="/adhd">ADHD</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/addiction">
                    <v-list-tile-title><router-link to="/addiction">Addiction</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/anger">
                    <v-list-tile-title><router-link to="/anger">Anger</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/anxiety">
                    <v-list-tile-title><router-link to="/anxiety">Anxiety</router-link></v-list-tile-title>
                </v-list-tile>
                
                <v-list-tile ripple @click="" to="/depression">
                    <v-list-tile-title><router-link to="/depression">Depression</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/eating">
                    <v-list-tile-title><router-link to="/eating">Eating Disorders</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/griefandloss">
                    <v-list-tile-title><router-link to="/griefandloss">Grief And Loss</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/lgbt">
                    <v-list-tile-title><router-link to="/lgbt">LGBT</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/ocd">
                    <v-list-tile-title><router-link to="/ocd">OCD</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/ptsd">
                    <v-list-tile-title><router-link to="/ptsd">PTSD</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/stress">
                    <v-list-tile-title><router-link to="/stress">Stress</router-link></v-list-tile-title>
                </v-list-tile>

                 <v-list-tile ripple @click="" to="/suicide">
                    <v-list-tile-title><router-link to="/suicide">Suicide</router-link></v-list-tile-title>
                </v-list-tile>

                <v-list-tile ripple @click="" to="/test">
                    <v-list-tile-title><router-link to="/test">Test Taking Anxiety</router-link></v-list-tile-title>
                </v-list-tile>


            </v-list>
        </v-flex>
            
         

        <v-flex xs10>
            <router-view>

            </router-view>
        </v-flex>

    </v-layout>

    <footer>
        <hr>
        MentalMonkey &copy; 2018 - A DSU Code School Production - <a href="mailto:dixiestatewellness@gmail.com">Email Us</a> - <a href="https://www.youtube.com/watch?v=FTQbiNvZqaY">Theme Song</a>
    </footer>
  </v-container>
</v-app>
        

    `

export default template