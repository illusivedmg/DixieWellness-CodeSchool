const depressionView = Vue.component('depression-view', {
    data: () => ({
        headers: [
            {
            text: 'Subject',
            align: 'left',
            sortable: false,
            },
            {
            text: 'Book',
            align: 'left',
            sortable: false,
            },
            
        ],
        resources:[
            {
                subject: 'Understanding Anger Disorders',
                book: 'Electronic Resource'
            }
        ],
        info:[
            {
                title: 'Symptoms of depression',
                stuff: `<ol>
                <h4><li>Feelings:</li></h4>
                    <ul>
                        <li>Sad or gloomy</li>
                        <li>Flat, dull or restricted</li>
                        <li>Irritable, cranky, or aggressive</li>
                        <li>Guilty or self-critical</li>
                        <li>Empty, inadequate, or despondent</li>
                        <li>Worthless, hopeless, or helpless</li>
                    </ul>
                    </li>
                    <h4><li>Thoughts:</h4>
                        <ul>
                            <li>Nobody likes me</li>
                            <li>Things will never get better</li>
                            <li>I'm a burden to others, they would be better of without me</li>
                            <li>I'm a failure</li>
                            <li>I can't take much more of this</li>
                            <li>I wish I were dead</li>
                        </ul>
                    </li>
                    <h4><li>Physical experiences:</h4>
                        <ul>
                            <li>Difficulty concentrating or making decisions</li>
                            <li>Change in appetite, either increased or decreased</li>
                            <li>Fatigue, tiredness, lack of energy</li>
                            <li>Change in sleeping patterns, either trouble falling or staying asleep or sleeping too much</li>
                            <li>Decreased sex drive</li>
                            <li>Tearfulness, frequent crying</li>
                            <li>Self-harm</li>
                            <li>Suicide attempt</li>
                        </ul>
                    </li>
                    <h4><li>Behavior Patterns:</h4>
                        <ul>
                            <li>Spending more and more time alone, avoiding friends and family</li>
                            <li>Arguing with people more often</li>
                            <li>Poor hygiene and self-care habits</li>
                            <li>Little interest or pleasure in doing things</li>
                            <li>Decreased performance at school or work</li>
                            <li>Substance abuse</li>
                        </ul>
                    </li>
                </ol>      
                `  
                    
            },
           
            {
                title: 'What To Do If You Think You Are Depressed',
                stuff: `
                    <ol>
                        <h4><li>Shift your mindset:</li></h4>
                            <ul>
                                <li>Focus on the present, not the past or the future</li>
                                <li>Notice and challenge depressing self-talk</li>
                                <li>Focus on the positive aspects of your life</li>
                                <li>Explore your gratitude</li>
                                <li>Set only realistic goals</li>
                            </ul>
                        </li>
                        <h4><li>Shift your behaviors:</li></h4>
                            <ul>
                                <li>Reduce your exposure to stressful or negative people, images, or activities</li>
                                <li>Do something creative</li>
                                <li>Modify your schedule to reduce your stress</li>
                                <li>Spend time with positive, happy people</li>
                                <li>Organize your time around your priorities</li>
                            </ul>
                        </li>
                        <h4><li>Remember the basics:</li></h4>
                            <ul>
                                <li>Engage in regular exercise or physical activity</li>
                                <li>Eat healthy foods; avoid alcohol and other drugs</li>
                                <li>Get regular sleep</li>
                            </ul>
                        </li>
                        <h4><li>Relax and enjoy:</li></h4>
                            <ul>
                                <li>Meditate, pray, explore nature, or engage in other spiritual activity</li>
                                <li>Spend time with people you care about</li>
                                <li>Make time for fun</li>
                            </ul>
                        </li>
                        <h4><li>Seek support:</li></h4>
                            <ul>
                                <li>Talk to a trusted friend or family member</li>
                                <li>Get professional help</li>
                            </ul>
                        </li>
                        
                    </ol>
                ` 
            },
            {
                title:'Seasonal Cycles',
                stuff:`
                    <p>For some people, depressive feelings recur seasonally, usually during the fall and/or winter. This type of depression 
                    seems to be related to a lack of sufficient sunlight. The symptoms and coping strategies noted above also apply to those 
                    whose depression is seasonal in nature. Additional strategies which involve maximizing sunlight exposure, include:</p>
                    <ul>
                        <li>Uncover your windows to let in every bit of sunlight available, especially in the morning.</li>
                        <li>Take day trips to higher, sunnier elevations when possible.</li>
                        <li>Consider utilizing a light therapy box, which emits artificial light. Consult with a physician regarding purchase and use.</li>
                    </ul>
                
                `

            },


        ]
    }),
    template: `
<v-app>
<h1 class="cmt">Depression</h1>

<p class="pad">Depression is defined as a mental condition characterized by feelings of severe despondency and dejection, typically also with feelings of inadequacy and guilt, often accompanied by lack of energy and disturbance of appetite and sleep.
Because college often involves many challenges, transitions, and demands, it is not unusual for college students to become depressed. Everyone feels “down in the dumps” or “blue” from time to time. These feelings sometimes follow difficult experiences such as the death of a loved one, the end of an important relationship, and other losses or traumatic events. It is normal to feel sad at times like these. It is also normal for the feelings to lighten and eventually pass fairly quickly.
With clinical depression, these feelings may or may not be associated with a particular event; they may seem to come “out of the blue.” 
The feelings are more severe, and they last for most of the day over an extended period of time. If left untreated, depression in college 
can have many negative effects. These include difficulty maintaining motivation and concentration, poor academic performance, substance abuse, 
unhealthy decisions and behaviors, and even thoughts of suicide. But depression is treatable and help is available. The first step is to be aware 
of the symptoms.</p>

<div class="contain">
<span ><iframe width="517" height="290" src="https://www.youtube.com/embed/IDPDEKtd2yM?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>

<span ><iframe width="517" height="290" src="https://www.youtube.com/embed/eK1luxZbuyU?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
</div>


<v-spacer></v-spacer>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="item, i in info" :key="i" ripple>
        <div slot="header">
            <div class="text-xs-left font-weight-bold">{{item.title}}</div>
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
export default depressionView