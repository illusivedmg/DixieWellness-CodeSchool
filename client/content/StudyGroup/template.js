const template = `
<v-app>
<h1 class="cmt">Study Group Coordination</h1>
<p>Getting academic help is the first step to alleviating student stress. An oft-overlooked measure is the formation of study groups for individual classes, which are difficult to coordinate especially with classes that have sections at different times of the day. Use the form below to get in touch with other people in your classes!</p>
<v-layout column>
<v-layout class="btn" justify-center>
<v-dialog class="button" v-model="dialog" persistent max-width="500px" @keydown.esc="dialog = false">
  <v-btn slot="activator" color="secondary" dark>Add Your Classes</v-btn>
  <v-card>
    <v-card-title>
      <span class="headline">Study Group</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field :error="!validName" v-model="name" label="Name" placeholder="Please enter your name."outline>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field :error="!validEmail" label="Email" placeholder="Please enter your email address." v-model="email" outline></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field ref="classEntryRef" :color="submitted == true ? 'info' : 'null'" :error="!validClassEntry" label="Class" placeholder="Please format e.g. 'PHIL800'" v-model="classEntry" outline></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Message" placeholder="Optional" v-model="message" outline></v-text-field>
          </v-flex>
          <v-flex v-if="thankYouVisible" xs12>
            Thank you for your submission! Feel free to enter another class above, or close this window.
          </v-flex>
          <v-flex v-else xs12>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
      <v-btn color="secondary" v-if="editVisible" flat @click.native="editSched">Edit</v-btn>
      <v-btn color="error"  v-if="editVisible" flat @click.native="deleteSched">Delete</v-btn>
      <v-btn color="primary" flat @click.native="sendSched">Submit Schedule</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</v-layout>

<v-flex v-if="firstEntry" v-html="loadingText">
</v-flex>
<v-expansion-panel>
    <v-expansion-panel-content v-for="item in getSched" :key="item.id" ripple>
    <div slot="header" class="text-xs font-weight-bold">
        <div class="font-weight-bold">{{ item.className }}</div>
    </div>
    <v-card>
    <v-card-text class="grey lighten-3">
    <v-flex xs12 v-for="member in item.members" :key="member.id">{{ member.name }} &#9775; {{ member.email }} &#9775; {{ member.message }}</v-flex>
    </v-card-text>
    </v-card>
    </v-expansion-panel-content>
</v-expansion-panel>


</v-layout>

</v-app>
`

export default template