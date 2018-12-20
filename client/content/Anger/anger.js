const AngerView = Vue.component('anger-view', {
        data: () => ({
            headers: [
                {
                text: 'SUBJECT',
                align: 'left',
                sortable: false,
                },
                
                {
                text: 'LOCATION',
                align: 'left',
                sortable: false,
                },
            ],
            resources:[
                {
                    value: false,
                    subject: 'Understanding Anger Disorders',
                  
                    book: 'Electronic Resource'
                },
                {
                    value: false,
                    subject: 'The Deadly Emotions: the role of anger, hostility, and agression in health and emotional well-being',
                   
                    book: 'RC 455.4 .E46, J64 1990',
                },
                {
                    value: false,
                    subject: 'Understanding and managing your anger and aggression: a book to help prevent the damage anger causes you and your relationships',
                 
                    book: 'BF 575 .A5, N84 1993'

                }
            ],
            info:[
                {
                    title: 'How Do You Express Anger?',
                    stuff: `
                            <p>The way we express our anger typically derives from the environment we were raised in and what our family and friends deemed acceptable ways to express our anger. Often our expressions of anger are a learned expression. We then carry these beliefs into our adulthood and can make it very hard for us to change.</p>
                    `
                },
                {
                    title: 'Taking Action!',
                    stuff: `
                            <p>Probably the most important step in changing how you handle your anger involves examining your beliefs about anger itself. Do you believe that others make you angry? If so, you are powerless to change it! At some point, you have to take responsibility for your own anger. This is NOT the same as blaming yourself for your anger...remember, anger is only a signal that you are being threatened or feeling frustrated.
                            </p>
                            <h4><p>You might try these 4 steps:</p></h4>
                            <ol>
                                <li>Try to capture and identify your thoughts, and attempt to understand your interpretation of the situation?</li>
    
                                <li>Ask yourself, "Are there alternative explanations?" i.e., is there another way to interpret the situation?</li>
                                
                                <li>Examine your reasoning and logic. Does it make sense?</li>
    
                                <li>Look at the evidence. Is there evidence to support a contradictory view?</li>
    
                            </ol>
                    `
                },
                {
                    title: 'Anger Quotient Test',
                    stuff: `
                    <p>For each question, choose the answer that best fits you method of coping with anger.</p>
        <ol>
            <h4><li>If I become frustrated when something I'm attempting to fix does not work, I:</li></h4> 
                <ul>
                    <li>Keep my cool.</li>
                    <li>Verbally express displeasure.</li>
                    <li>Hide my anger inside.</li>
                    <li>Physically take it out on the thing I am trying to fix.</li>
                    <li>Strike out at anyone or anything that happens to be close.</li>
                </ul>
            <h4><li>When I am verbally criticized, I:</li></h4>
                <ul>
                    <li>Listen and try to understand their point of view.</li>
                    <li>Walk away.</li>
                    <li>Pout and sulk.</li>
                    <li>Become argumentative and verbally attack.</li>
                    <li>Physically strike out at the person.</li>
                </ul>
            <h4><li>When unjustly accused of something, I:</li></h4>
                <ul>
                    <li>Stand up for myself.</li>
                    <li>Assume a passive position and stay silent.</li>
                    <li>Complain to someone else.</li>
                    <li>Become verbally aggressive.</li>
                    <li>Become physically assaultive.</li>
                </ul>
            <h4><li>When peers tease me, I:</li></h4>
                <ul>
                    <li>Ignore them.</li>
                    <li>Tease back.</li>
                    <li>Leave the group and sulk.</li>
                    <li>Counterattack aggressively.</li>
                    <li>Physically attack my tormentor.</li>
                </ul>
            <h4><li>When I fail at something that I thought I could succeed at, I:</li></h4>
                <ul>
                    <li>Accept it and try to learn from the experience.</li>
                    <li>Rationalize, and become defensive.</li>
                    <li>Brood about it.</li>
                    <li>Put the blame on someone else, where it belongs.</li>
                    <li>Take my anger and disappointment out on myself or on someone else.</li>
                </ul>
            <h4><li>When I feel that I am being pushed to change, I:</li></h4>
                <ul>
                    <li>Try to recognize that I may really need to change.</li>
                    <li>Ignore those trying to push me.</li>
                    <li>Take it personally.</li>
                    <li>Dig in my heels and resist all suggestions.</li>
                    <li>Become physically or verbally assaultive.</li>
                </ul>
       
            <h4><li>When I feel that people are setting limits on me, I:</li></h4>
                <ul>
                    <li>Try to understand what is being requested and why.</li>
                    <li>Passively accept the limits, and generally don't question the need.</li>
                    <li>Become defensive, resistant and argumentative.</li>
                    <li>Openly defy or ignore them.</li>
                    <li>Become physically assaultive, or figure out ways to get even.</li>
                </ul>
            <h4><li>If I am rejected when I am trying to help, I:</li></h4>
                <ul>
                    <li>Accept that others might not want my help.</li>
                    <li>Try harder to help.</li>
                    <li>Take it personally.</li>
                    <li>Tend to become verbally judgmental of them.</li>
                    <li>Take it as a personal putdown and often take out my anger on myself or someone else.</li>
                </ul>
    </ol>
    <h4>Scoring Key</h4>
    <p>Points</p>
    <p>32 to 40 Good for you...you seem to handle your anger well.</p>
    <p>24 to 31 Well...you do have some ability to handle your anger, but it looks like you may want to make some changes.</p>
    <p>23 or less You need to work on your anger.</p>
                    `
                },
               
    
    
            ]
        }),
        template: `
    <v-app>
    <h1 class="cmt">Anger</h1>
    <p class="pad">Anger is a secondary emotion which comes as a result of emotions like irritation, annoyance, and other factors. Perhaps 
    the most important thing a person who struggles with anger management needs to understand is that anger is actually a good thing. Like other emotions
    it's just another mechanism or tool your body uses to protect itself. It can give you focus, lower your level of fear, and grant you determination to see something through. If you struggle
    with anger management remember that it's okay to be angry but you should take care to monitor when your anger reaches levels that it negatively impacts those around you. Luckily, there are resources available
    to help you on your journey of anger control.</p>
    <span class="cmt videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/QG4Z185MBJE?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>

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

        <v-expansion-panel id="books">
            <v-expansion-panel-content ripple>
                <div slot="header" class="text-xs font-weight-bold">
                    <div>Books In Our Library</div>
                </div>
                <v-card>
                <v-card-text class="grey lighten-3">
                <div>
                <v-data-table
                    :headers="headers"
                    :items="resources"
                    class="elevation-1"
                    hide-actions
                    >
                    <template slot="items" slot-scope="props">
                    
                        <td class="text-xs-left">{{ props.item.subject }}</td>
                    
                        <td class="text-xs-left">{{ props.item.book }}</td>
                        
                    </template>
                    </v-data-table>
                </div>
                </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

    
    
    
    
        
        
        
    </v-app>  
        `
    })
    export default AngerView