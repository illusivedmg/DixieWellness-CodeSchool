const ocdView = Vue.component('ocd-view', {
    data: () => ({
        info: [
            {
                title:'Symptoms and Signs',
                stuff:`
                <p>The biggest symptom of OCD is obsession. Obsessions are persistent and intrusive thoughts, impulses, or images that create distress for the individual experiencing them. Examples include:</p>
                
                <h4>Obsessive Thoughts</h4>
                <ul>
                    <li>Fear of germs, dirt, or being contaminated. Avoidance of touching others or touching objects that others have touched.</li>
                    <li>Overconcern with order, neatness and exactness. Intense stress if objects are out of place, asymmetrical, or oriented improperly.</li>
                    <li>Repeated thoughts of certain sounds, words or numbers.</li>
                    <li>Preoccupation with counting things such as steps, or checking things such as locks.</li>
                </ul>

                <h4>Intrusive Thoughts</h4>
                    <ul>
                        <li>Being responsible for bad things happening to others, like hurting someone while driving.</li>
                        <li>Shouting obscenities or insults.</li>
                        <li>Violent, aggressive thoughts, often with horrific imagery.</li>
                        <li>Forbidden or perverse sexual thoughts or images.</li>
                        <li>Religious obsessions, known as scrupulosity, including fear of offending God and overconcern about morality.</li>
                        <li>Marked fear and anxiety that one will act on obsessions.</li>
                    </ul>

                <h4>Compulsion</h4>
                <p>Compulsions are repetitive behaviors that people feel drawn to perform. These repetitive behaviors, which may take the form of rules or rituals, are intended to prevent or reduce the anxiety related to obsessions. Examples include:</p>
                    <ul>
                        <li>Repeated hand washing and/or excessive bathing or grooming.</li>
                        <li>Frequent cleaning, straightening, and ordering of certain objects.</li>
                        <li>Repeated checking behaviors.</li>
                        <li>Checking doors to ensure they are locked.</li>
                        <li>Checking appliances to be sure they are off.</li>
                        <li>Retracing your path to be sure you did not hit a person or animal while driving.</li>
                        <li>Counting in specific patterns.</li>
                        <li>Completing religious rituals, including repeating prayers, developed to help avoid sin or repent for a real or imaginary sin.</li>
                        <li>Closing and opening doors a certain number of times.</li>
                        <li>Touching objects in a certain order.</li>
                        <li>Performing routine behaviors a certain number of times that is “right” or “safe”.</li>
                    </ul>`
            },
            {
                title:'What to do if you think you have OCD',
                stuff:`Most people with OCD are not surprised when they receive an official diagnosis. They recognize their difficulties suppressing obsessive thoughts and/or the unreasonable amount of time spent performing compulsive behaviors. Left untreated, OCD can become a disabling condition. So the best response is to seek treatment early. OCD doesn’t generally just go away with time, and efforts to “just stop it” usually make the obsessions and compulsions worse. Licensed mental health professionals can guide individuals with OCD through treatments that help.`
            },

        ]
    }),
template:
`<v-app>
<h1 class="cmt">Obsessive Compulsive Disorder</h1>

    <p class="pad">OCD is defined as a mental health disorder that affects people of all ages and walks of life, and occurs when a person gets caught in a cycle of obsessions and compulsions. Obsessions are unwanted, intrusive thoughts, images or urges that trigger intensely distressing feelings.</p>
    
    <span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/btO3kE2RrEY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></span>
    
    <v-expansion-panel>
        <v-expansion-panel-content v-for="item, i in info" :key="i" ripple>
        <div slot="header" class="text-xs-left font-weight-bold">
            <div>{{item.title}}</div>
        </div>
        <v-card>
        <v-card-text class="grey lighten-3">
        <div v-html="item.stuff"></div>
        </v-card-text>
        </v-card>

        </v-expansion-panel-content>
    </v-expansion-panel>
</v-app>`


})

export default ocdView