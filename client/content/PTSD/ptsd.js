const ptsdView = Vue.component('ptsd-view', {
    data: () => ({
        info:[
            {
                title: 'Four Types of PTSD Symptoms',
                stuff: `
                <h4>Re-experiencing symptoms involve being reminded of, or re-living the event. You may experience:</h4>
                    <ul>
                        <li>Nightmares</li>
                        <li>Flashbacks: feeling like you’re going through the event again</li>
                        <li>Intense fear and horror when reminded of the event</li>
                        <li>Extreme reactivity when “triggered” by stimuli related to your trauma, such as similar sights or sounds</li>
                    </ul>
                <h4>Avoidance means purposefully staying away from things that remind you of the event. You might find yourself:</h4>
                    <ul>
                        <li>Avoiding people and places that trigger memories of the traumatic event</li>
                        <li>Avoiding situations and conversations that remind you of the event</li>
                        <li>Avoiding thoughts or feelings related to the event, for instance by staying extra busy</li>
                        <li>Avoiding help-seeking behaviors such as therapy</li>
                    </ul>
                <h4>Negative changes in thoughts and feelings refers to an alteration in how you think about yourself, others, and the world as a result of the trauma. This symptom has many aspects, including: </h4>
                    <ul>
                        <li>Having difficulty experiencing positive emotions</li>
                        <li>Feeling alienated from others and creating distance in relationships</li>
                        <li>Losing interest in activities you used to enjoy</li>
                        <li>Forgetting about parts of the traumatic event</li>
                        <li>Feeling horror, anger, guilt or shame on a persistent basis</li>
                        <li>Having strong negative feelings about yourself, including a belief that you are permanently damaged</li>
                        <li>Thinking the world is completely dangerous, trusting nobody</li>
                    </ul>
                <h4>Arousal is when your body is keyed up. You may experience:</h4>
                    <ul>
                        <li>Anger or irritability</li>
                        <li>Difficulty sleeping</li>
                        <li>Problems with concentration</li>
                        <li>Hypervigilance: feeling “on-guard” or on the lookout for danger</li>
                        <li>Excessive startle response</li>
                        <li>Reckless or self-destructive behavior</li>
                    </ul>
                `    
            },
            {
                title: 'What to do if you have experienced trauma or think you have Posttraumatic Stress Disorder (PTSD)',
                stuff: ` 
                <ul>
                    <li>Educate yourself. Learn more about trauma reactions from the online resources linked to this page.</li>
                    <li>Talk to someone whose support you can trust. A good friend, a family member, or a religious leader may help you find the care you need.</li>
                    <li>Consider seeking an evaluation by a mental health professional. This will involve answering questions about your trauma and your reactions to it.</li>
                    <li>Take care of yourself physically. Do your best to eat well, exercise, and get adequate sleep.</li>
                    <li>Avoid the use of excessive alcohol or drugs. The temporary relief will worsen your symptoms and your situation in the long run.</li>
                    <li>Find new and effective ways to manage your stress. High levels of stress often prompt and/or intensify trauma symptoms.</li>
                    <li>If you choose not to pursue evaluation and treatment, you may take a wait-and-see approach. Your symptoms may subside, and you won’t need treatment. If you don’t feel better after several weeks, or if your symptoms interfere with your functioning at school, work, or home, you would be wise to seek help.</li>
                </ul>
                `
            },
        ]
    }),
    template: `
<v-app>
<h1 class="cmt">PTSD</h1>

   
    <p class="pad">PTSD is defined as a condition of persistent mental and emotional stress occurring as a result of injury or severe psychological shock, typically involving disturbance of sleep and constant vivid recall of the experience, with dulled responses to others and to the outside world.</p>
    
    <span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/XfkmyKrQk-w" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>

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
</v-app>  
    `
})
export default ptsdView