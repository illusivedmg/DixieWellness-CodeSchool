const testView = Vue.component('test-view', {
    data: () => ({
        info: [
                {
                    title:'Symptoms of test anxiety',
                    stuff:`
                    <h4>Feelings:</h4>
                    <ul>
                        <li>Overwhelming fear or panic</li>
                        <li>Nervous worrying</li>
                        <li>Feelings of worthlessness</li>
                        <li>Pervasive negativism</li>
                        <li>Feelings of impending doom</li>
                    </ul>
                    <h4>Physical Experiences:</h4>
                    <ul>
                        <li>Increased sweating</li>
                        <li>Pounding heart</li>
                        <li>Headaches</li>
                        <li>Shakiness</li>
                        <li>Upset stomach</li>
                        <li>Muscle tightness</li>
                        <li>Increased need to urinate</li>
                        <li>Insomnia</li>
                        <li>Fatigue</li>
                    </ul>
                    <h4>Thoughts:</h4>
                    <ul>
                        <li>I’m so stupid</li>
                        <li>I’m going to fail</li>
                        <li>This is hopeless</li>
                        <li>Why should I even try?</li>
                        <li>I just can’t do (this subject)</li>
                        <li>I have to get out of here</li>
                    </ul>
                    <h4>Cognitive/Behavior Patterns:</h4>
                    <ul>
                        <li>Mind goes blank or freezes up</li>
                        <li>Distractibility; poor concentration</li>
                        <li>Increased errors</li>
                        <li>Racing thoughts</li>
                        <li>Overthinking concepts and questions</li>
                        <li>Checking/second-guessing/changing answers</li>
                    </ul>`
                },
                {
                    title:'What to do if you think you have test anxiety',
                    stuff:` 
                    <p>The sources of test anxiety are poor test preparation, ineffective test-taking strategies, psychological pressures, and poor health habits. Explore the extent to which each of these components applies to you and attempt to make the following changes.</p>
                    
                    
                    <h4>Focus on test preparation:</h4>
                    <ul>
                        <li>Clarify the format and content of each test with your instructors.</li>
                        <li>Know what your instructor expects. Ask questions!</li>
                        <li>Create a study guide, a detailed list of what topics the test will cover. Collaborate with other students and/or your instructor if possible.</li>
                        <li>Review past homework assignments, quizzes, and sample problems in the text.</li>
                        <li>Don’t cram. Organize time to study the test topics thoroughly.</li>
                        <li>Create your own practice test.
                    </ul>
                    <h4>Use effective test-taking strategies:</h4>
                    <ul>
                        <li>Learn basic test-taking strategies to use in various test formats (e.g., multiple choice vs. essay tests).</li>
                        <li>Read the directions thoroughly</li>
                        <li>Do a “mind dump” when you first receive the test: Write down any formulas or facts you are afraid you might forget.</li>
                        <li>Take one question at a time; don’t focus on the entire test all at once.</li>
                        <li>Don’t dwell on questions you can’t immediately answer. Mark them, skip them, and return to them later.</li>
                        <li>Pace yourself according to any time limits. Don’t rush.</li>
                        <li>Avoid observing others’ test-taking behavior. Don’t engage in self-comparison.</li>               
                    </ul>
                    <h4>Relieve psychological pressures:</h4>
                    <ul>
                        <li>Arrive at the exam on time or slightly early. Take some time to relax or meditate before you begin.</li>
                        <li>Don’t discuss the exam with peers prior to taking it. You might end up questioning yourself or “catching” their pre-exam anxieties.</li>
                        <li>Identify and dispute negative, self-defeating statements such as “I can’t do it.” Replace them with positive, affirming self-statements such as “I’m ready for this test” or “I’ll do my very best.”</li>
                        <li>Use a thought-stopping technique to manage distracting thoughts.</li>
                        <li>Keep your goal for the test reasonable. Don’t let the test define your personal worth.</li>         
                    </ul>
                    <h4>Practice healthy behaviors:</h4>
                    <ul>
                        <li>Get plenty of sleep during the nights preceding your exam</li>
                        <li>Eat a healthy meal before your exam</li>
                        <li>Practice deep breathing and other relaxation and meditation techniques regularly so you can access these skills at exam time.</li>
                        <li>Avoid excessive use of caffeine, including energy drinks or similar products.</li>
                        <li>Exercise regularly.</li>
                        <li>Be sure to take mental breaks and have some fun! This will actually improve your academic performance.</li>          
                    </ul>`
                },
            ]
    }),
template:`
<v-app>
<h1 class="cmt">Test Anxiety</h1>
    <p class="pad">Test anxiety is defined as a psychological condition in which people experience extreme distress and anxiety in testing situations. While many people experience some degree of stress and anxiety before and during exams, test anxiety can actually impair learning, effect brain functionality while testing, and hurt test performance.</p>
    
    <span class="cmt vid"><iframe width="560" height="315" src="https://www.youtube.com/embed/_Qzx9SnG9oU" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
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
</v-app> `

})

export default testView