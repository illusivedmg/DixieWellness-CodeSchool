const addictionView = Vue.component('addiction-view', {
    data: () => ({
        info:[
            {
                title: 'What are the types of addiction?',
                stuff: `
            <ul><h4>Substances</h4>
                <li>Alcohol</li>
                <li>Tobacco</li>
                <li>Opioids</li>
                <li>Prescription drugs</li>
                <li>Cocaine</li>
                <li>Cannabis(i.e. Marijuana)</li>
                <li>Amphetamines(i.e. Meth)</li>
                <li>Hallucinogens(i.e. LSD, shrooms)</li>
                <li>Inhalants(i.e. spray paints, markers, glues, and cleaning fluids)</li>
                <li>Phencyclidine (i.e. Angel Dust)</li>
            </ul>
            
            <ul><h4>Behavioral Addiction</h4>
                <li>Food</li>
                <li>Sex/Porn</li>
                <li>Playing video games</li>
                <li>Working</li>
                <li>Exercising</li>
                <li>Pain</li>
                <li>Cutting</li>
                <li>Shopping</li>
                <li>Smart Phone/the internet</li>
            </ul>

            `
                        

            },
            {
                title: 'What are the symptoms of an addiction?',
                stuff: `
                <ul>
                    <li>Obsession about the addiction. Talking about it, trying to influence others to engage in the behavior.</li>
                    <li>Actively seeking out the addiction regardless of consequences to self or others.</li>
                    <li>Lack of control over addictive behaviors</li>
                    <li>Doing more of the addiction than desired</li>
                    <li>Denies addictive behavior or having a problem</li>
                    <li>Hiding addictive behaviors or substances</li>
                    <li>Struggles to stop</li>
                </ul>
        `  
                    
            },
            {
                title: 'How do I know if I’m addicted?',
                stuff: `
                <ul>
                    <li>Cravings</li>
                    <li>Compulsive</li>
                    <li>Fixation on addiction</li>
                    <li>Loss of control</li>
                    <li>Withdrawals when abstaining from addiction</li>
                    <li>Feeling the need to continue in addiction more and more</li>
                    <li>Low self-esteem</li>
                    <li>Usually has a history of abuse</li>
                    <li>Showing signs of depression or other mental illnesses</li>
                </ul>
             `
            },
            {
                title: 'Why am I addicted?',
                stuff: `<p>The reason for addiction is still unknown. Researchers have hypothesized many reasons people become addicted including the idea that it is a disease or genetic. What we do know is that addiction changes the brain. As someone engages in addictive behavior they go through a cycle. The brain experiences pleasure when using/acting out which increases the motivation to experience that high again. Neurotransmitters become altered in the brain and can cause permanent effects. However, there is always hope for change and people who want to help you.</p>
                `
            },
            {
                title:'Seeking Help',
                stuff:`<p>Overcoming addiction is easiest when you surround yourself with a support group. You need people in your life who understand what you’re going through and people who understand what it takes to get clean. Find a meeting, get a sponsor, and work your individual program. Most meetings and programs are free, however, if more help is needed to overcome your addiction there are therapist and rehabs that are worth looking into. Check out the resources provided below:</p>
                <h4>Alcoholics Anonymous</h4>
                <ul>
		            <li><a href=http://www.utahaa.org/southwest.php target="_blank">Utah Alcoholics Anonymous</a></li>
		            <li><a href=http://www.dixieaaoffice.org/ target="_blank">Dixie Central Office for AA</a></li>
		            <li><a href=https://www.aa.org/ target="_blank">Alcoholics Anonymous</a></li>
		            <li><a href=https://www.northpointrecovery.com/utah/st-george-resources.php target="_blank">Northpoint Recovery</a></li>
                </ul>
                <h4>Narcotics Anonymous</h4>
                <ul>
		            <li><a href=https://www.samhsa.gov/find-help/national-helpline target="_blank">Substance Abuse and Mental Health Services Administration</a></li>
                    <li><a href=http://nasouthernutah.org/meetings/?d=any&v=list target="_blank">Narcotics Anonymous of Southern Utah</a></li>
                    <li><a href=https://www.northpointrecovery.com/utah/st-george-resources.php target="_blank">Northpoint Recovery</a></li>
	            </ul>
                <h4>Sex Addiction/Porn Addiction</h4>
                <ul>
                    <li><a href=http://www.sautah.org/wp-content/uploads/SA_Meetings/MeetingsSA.pdf target="_blank">Sexaholics Anonymous Utah Meeting Schedule</a></li>
                    <li><a href=https://www.sa.org/f2f/united-states-of-america/utah/ target="_blank">Sexaholics Anonymous</a></li>
                    <li><a href=https://www.lifestarstgeorge.com/ target="_blank">LifeStar of St. George</a> (for couples and individuals)</li>
                    <li><a href=https://saa-recovery.org/ target="_blank">SA Recovery</a></li>
                    <li><a href=http://connectionscs.com/main/services/pornography-and-sex-addiction/ target="_blank">Connections Counseling Services</a></li>
                </ul>
                <h4>Other Resources</h4>
                <ul>
                    <li><a href=https://addictionrecovery.lds.org/home?lang=eng target="_blank">LDS Addiction Recovery</a> (religious resource)</li>
                    <li><a href=https://www.foodaddictsanonymous.org/ target="_blank">Food Addicts Anonymous</a></li>
                    <li><a href=http://www.gamblersanonymous.org/ga/ target="_blank">Gamblers Anonymous</a></li>
                    <li><a href=http://www.shopaholicsanonymous.org/ target="_blank">Shopaholics Anonymous</a></li>
	            </ul>`
            },
            {
                title:'How can I help an addicted friend/partner?',
                stuff:`<p>If you suspect that someone you know or love is an addict be aware of these signs and symptoms:</p>
                <ul>
                    <li>Showing up intoxicated more often.</li>
                    <li>Showing problems with cognition and memory.</li>
                    <li>Sleeping more, sleeping irregular hours or appearing lethargic and unwell.</li>
                    <li>Developing problems at work or school such as losing a job or grades starting to fail.</li>
                    <li>Attending events only if drugs or alcohol will be present. Drinking way more before social events, or showing up to fewer and fewer events because of addiction</li>
                    <li>Stealing money or valuables to pay for addictive behaviors</li> 
                    <li>Experiencing withdrawal when their access to addiction is unavailable.</li>
                    <li>Show little care for their hygiene or appearance.</li>
                </ul>
                <p>For loved ones it is very hard to watch an addict spiral out of control. We often feel the need to force them into treatment in an effort to help them. Unfortunately, addiction is NOT a choice. If you genuinely want to help an addict you must come from a place of love. Blaming them or trying to protect them from consequences is not helping them overcome their addiction. Keep in mind that you cannot control their actions or the consequences of them. Most families and friends find that it is helpful to stage an intervention. That is where you sit your addicted loved one down and approach them in a safe environment. It is recommended that interventions be guided by a trained professional or therapist to keep the conversation calm and loving. It is important for family members and friends of an addict to set boundaries. It can be difficult and even excruciating to do. However, it is important for an addict to know that even though they are loved, their behavior is unacceptable and is hurting those around them. Overall, keep supporting and don’t lose hope in your loved one. If needed, join a support group for families and friends.</p> <h4>Here are some links that might be helpful to you</h4>
	            <ul>
	                <li><a href=https://americanaddictioncenters.org/alcoholism-treatment/loving-an-addict/ target="_blank">Loving an Addict</a></li>
                    <li><a href=http://www.myusara.com/support/craft/ target="_blank">Utah Support Advocates for Recovery Awareness</a></li>
                    <li><a href=http://talbotrehab.com/family-recovery-program target="_blank">Family Recovery Program</a></li>
                    <li><a href=https://www.nar-anon.org/find-a-meeting#groupspublic/?view_7_filters=%5B%7B%22field%22%3A%22field_1%22%2C%22operator%22%3A%22near%22%2C%22value%22%3A%2284780%22%2C%22units%22%3A%22miles%22%2C%22range%22%3A%2210%22%7D%5D&view_7_page=1 target="_blank">Nar-Anon Family Meetings</a></li>
                    <li><a href=http://locator.coda.org/index.cfm?page=usStatemeetings.cfm&state=UT target="_blank">Codependancy Meetings</a></li>
	            </ul>`
            },


        ]
    }),
    template: `
<v-app>
<h1 class="cmt">Addiction</h1>
<p class="pad">An addiction is when a person engages in a behavior or the use of a substance that rewards them in some way. It is the reward or the ‘high’ experienced that drives the user to repeatedly pursue the behavior despite the sometimes terrible consequences they bring on themselves or others.</p>
<span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/PY9DcIMGxMs" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
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
export default addictionView