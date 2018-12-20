const anxietyView = Vue.component('anxiety-view', {
    data: () => ({
        info:[
            {
                title: 'Symptoms of anxiety',
                stuff: `
                <h4>Feelings:</h4>
                <ul>
                    <li>Worried, dreading what’s ahead</li>
                    <li>Tense, “on edge”</li>
                    <li>Hyper-vigilant, jumpy</li>
                    <li>Irritable</li>
                    <li>Restless or fidgety</li>
                    <li>Distracted, difficulty concentrating</li>
                    <li>Disconnected, detached from yourself</li>
                </ul>

                <h4>Physical experiences:</h4>
                <ul>
                    <li>Muscle tightness</li>
                    <li>Rapid or irregular heartbeat</li>
                    <li>Trembling or shaking</li>
                    <li>Shortness of breath</li>
                    <li>Dry mouth</li>
                    <li>Sweating, flushing</li>
                    <li>Upset stomach and/or nausea</li>
                    <li>Headaches</li>
                    <li>Dizziness</li>
                    <li>Difficulty sleeping</li>
                    <li>Fatigue</li>
                </ul>

                <h4>Thoughts:</h4>
                <ul>
                    <li>I have to get out of here</li>
                    <li>Something bad is going to happen</li>
                    <li>I look stupid; I’m going to look stupid</li>
                    <li>This is dangerous</li>
                    <li>I’m trapped, I’m stuck</li>
                </ul>

                <h4>Behavior Patterns:</h4>
                <ul>
                    <li>Spending more and more time alone, avoiding friends and family</li>
                    <li>Pacing</li>
                    <li>Checking and rechecking</li>
                    <li>Fidgeting</li>
                    <li>Picking at skin, hair, or clothing</li>
                    <li>Chewing fingernails</li>
                    <li>Arguing with people more often</li>
                    <li>Sudden tearfulness</li>
                    <li>Inappropriate laughter</li>
                </ul>
                `     
            },
            {
                title: 'What to do if you think you have anxiety',
                stuff: ` 
                <h4>Shift your mindset:</h4>
                <ul>
                    <li>Acknowledge your current safety</li>
                    <li>Change extreme self-statements to more realistic self-statements</li>
                    <li>Imagine and rehearse success/the best outcome, not failure/the worst outcome</li>
                    <li>Notice the kindness of others and return more kindness</li>
                    <li>Allow and accept imperfections in yourself and others</li>
                </ul>

                <h4>Shift your behaviors:</h4>
                <ul>
                    <li>Organize and plan your time effectively; avoid time-crunches</li>
                    <li>Journal about your successes…even the small ones</li>
                    <li>Write down your worries and give them your mental energy when the time is right</li>
                </ul>

                <h4>Remember the basics:</h4>
                <ul>
                    <li>Exercise regularly</li>
                    <li>Get sufficient sleep</li>
                    <li>Eat a healthy diet; avoid or minimize caffeine</li>
                </ul>

                <h4>Relax and enjoy:</h4>
                <ul>
                    <li>Practice mindful, deep breathing</li>
                    <li>Meditate, pray, explore nature, or engage in other spiritual activity</li>
                    <li>Spend time with people you care about</li>
                    <li>Make time for fun things you enjoy doing</li>
                </ul>

                <h4>Seek support:</h4>
                <ul>
                    <li>Talk to someone you trust</li>
                    <li>Get professional help</li>
                </ul>
                `
            },
        ]
    }),
    template: `
<v-app>
<h1 class="cmt">Anxiety</h1>

    <p class="pad">
        Anxiety is defined as a feeling of excessive worry, nervousness, or unease, typically about an imminent event or something with an uncertain outcome, typically with compulsive behavior or panic attacks.
        College can surely be stressful. Juggling the demands of school, work, friends, and family is hard enough … and there’s so much more that college students want to do and figure out. What do I want to do with the rest of my life? How do I get there? Will I be successful? What are my true values and how will they guide my lifestyle choices? Do I want to spend the rest of my life with someone, and if so, who is that person? Trying to answer questions like these while managing the day-to-day tasks of college life can create anxiety, and young adults today are experiencing more stress and anxiety than ever before.
        It is not uncommon to feel worried or fearful when facing something challenging, such as a test or a job interview. These feelings are normal, and at mild-to-moderate levels, can even improve performance. Anxiety becomes a problem when the symptoms are more generalized, when they extend beyond the feared situation, and when they are severe enough to interfere with healthy functioning, including school. But anxiety is treatable and help is available. Being aware of the symptoms is a good place to start.
    </p>
    
    <span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/nCgm1xQa06c" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
    
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
export default anxietyView