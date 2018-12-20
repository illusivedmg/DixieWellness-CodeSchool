const adhdView = Vue.component('adhd-view', {
    data: () => ({
        info:[
            {
                title: 'Symptoms of ADHD',
                stuff: `
                <p>Because there are different types of ADHD, as well as different levels of severity, the disorder might not look the same from one person to the next. Listed below are some common symptoms often associated with ADHD. Keep in mind that many of these symptoms are common for all of us, whether or not we have ADHD. They only become a problem when we experience several of them on a frequent basis, in many areas of our life, and they keep us from performing to our potential.</p>
                <ul>
                    <h4><li>Inattentive symptoms:</li></h4>
                        <ul>
                            <li>Poor attention to detail, resulting in frequent mistakes</li>
                            <li>Distractibility; easily taken off-task</li>
                            <li>Inability to concentrate on things of little interest</li>
                            <li>Difficulty listening effectively</li>
                            <li>Pattern of starting tasks/projects, but not completing them</li>
                            <li>Disorganization</li>
                            <li>Avoidance of tasks requiring mental effort</li>
                            <li>Forgetfulness</li>
                            <li>Frequent loss/misplacement of items</li>
                        </ul>
                    <h4><li>Hyperactive symptoms:</li></h4>
                        <ul>
                            <li>Restlessness; frequent fidgeting</li>
                            <li>Inability to stay still or seated, even in environments where such behavior is expected</li>
                            <li>Excessive talking</li>            
                        </ul>
                    <h4><li>Impulsive symptoms:</li></h4>
                        <ul>
                            <li>Pattern of acting before thinking</li>
                            <li>Difficulty waiting</li>
                            <li>Communication challenges, including interrupting others, intruding on conversations, or answering questions before they are completed</li>  
                        </ul>
                </ul>
                `
            },
            {
                title: 'What to do if you think you have ADHD',
                stuff: ` 
                <h4>Education:</h4>
                <ul>
                    <li>Inform yourself about ADHD. Start by checking out the resources on the this page and/or the Counseling Center reserve collection of relevant books at the Stewart Library.</li>
                </ul>
                <h4>Treatment:</h4>
                <ul>
                    <li>Consult with a professional about your symptoms and treatment options.</li>
                    <li>Consider both medication and psychotherapy. Medication is often a first-line treatment recommendation, but it’s not the only option.</li>
                    <li>Individual therapy can help you discover and practice coping strategies that work for you.</li>
                    <li>Attending an ADHD group can provide support, information, and helpful tips from people who have experienced similar struggles.</li>
                    <li>With proper documentation of an ADHD diagnosis, you may consider registering with WSU’s Services for Students with Disabilities. You may be eligible for accommodations to assist with your education.</li>
                </ul>
                <h4>Healthy habits:</h4>
                
                <li>Engaging in basic healthy behaviors helps your brain work at its best, thus improving ADHD symptoms. Such behaviors include:</li>
                    <ul>
                        <li>Proper nutrition</li>
                        <li>Sufficient sleep</li>
                        <li>Regular exercise</li>
                        <li>Stress management</li>
                        <li>Avoiding substance use</li>
                    </ul>
                </ul>
                <h4>Behavioral Strategies:</h4>
                <ul>
                    <li>Reduce distractions as much as possible, including visual distractions such as clutter and auditory distractions such as random noises.</li>
                    <li>Make important things more attention-grabbing. For example, highlight them with bright colors or put them in prominent places.</li>
                    <li>Use a planner or calendar app to keep track of to-do lists, deadlines, appointments, etc.</li>
                    <li>Plan to be early rather than on-time; give yourself more time than you think you need.</li>
                    <li>Prioritize tasks according to importance. Do the important ones first.</li>
                    <li>Break large tasks into smaller steps. Take small steps one at a time.</li>
                    <li>Take short breaks, and set a timer to remind yourself to get back to work.</li>
                    <li>Use alarms and timers to manage the amount of time spent on tasks.</li>
                    <li>Deal with it now; fight procrastination by completing simple tasks immediately rather than putting them off until later.</li>
                </ul>
                `
            },
        ]
    }),
    template: `
<v-app>
<h1 class="cmt">ADHD</h1>

   
    <p class="pad">ADHD is defined as any of a range of behavioral disorders occurring primarily in children, including such symptoms as poor concentration, hyperactivity, and impulsivity. This effect an estimated 3-5% of adults in the United States. Symptoms of ADHD typically appear in childhood, although formal diagnosis and treatment may not occur until later in life. Many college students continue to struggle with symptoms. Left untreated, ADHD can contribute a variety of difficulties in an adult’s life, including academic underachievement, work-related problems, social/relationship conflict, poor financial management, low self-esteem and self-efficacy, depression and/or anxiety, substance abuse, and even increased risk of moving violations and other legal problems. With proper diagnosis and treatment, however, people with ADHD can learn to manage their symptoms effectively and live very successful lives.</p>
    
    <span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/fWCocjh5aK0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="item, i in info" :key="i" ripple>
        <div slot="header" class="text-xs font-weight-bold">
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
export default adhdView