const suicideView = Vue.component('suicide-view', {
    data: () => ({
        info:[
            {
                title: 'Suicide warning signs',
                stuff: `
                <p>Most people who are thinking of ending their lives will communicate their intent in some fashion. Sometimes, an individual in suicidal crisis will express their risk verbally, with words such as “I just can’t go on” or “I wish I were dead.” Often times, however, we must be watchful for signs in their mood, behavior, or circumstances. <h4>Any of the following could be potential warning signs for suicide:</h4></p>
                <ul>
                    <li>Excessive sadness or moodiness</li>
                    <li>Withdrawal from family and friends</li>
                    <li>Feelings of hopelessness or helplessness</li>
                    <li>Strong anger or rage</li>
                    <li>Feelings of being trapped -- like there is no way out of a situation</li>
                    <li>Excessive guilt or shame</li>
                    <li>Severe mood changes, including a sharp rise in mood after a period of depression</li>
                    <li>Drug or alcohol abuse, or relapse after a period of recovery</li>
                    <li>Recent release from psychiatric hospitalization</li>
                    <li>Change in personality and/or appearance</li>
                    <li>Impulsive or reckless behaviors</li>
                    <li>Loss of interest in most activities</li>
                    <li>History of at least one previous suicide attempt</li>
                    <li>Change in sleeping habits</li>
                    <li>Changes in appetite, eating patterns, or weight</li>
                    <li>Poor work or school performance</li>
                    <li>Giving away prized possessions or putting personal affairs in order</li>
                    <li>Acquiring a gun or stockpiling pills</li>
                    <li>Change in level of spiritual interest/disinterest</li>
                    <li>Recent disappointment or rejection (e.g. relationship breakup, job loss)</li>
                    <li>Family problems</li>
                    <li>Financial problems</li>
                    <li>Victimization (emotional, physical or sexual abuse)</li>
                    <li>Death of a close friend or family member, especially if by suicide</li>
                    <li>Serious or terminal illness, fear of becoming a burden to others</li>
                </ul>
                `  
            },
            {
                title: 'Can suicide be prevented?',
                stuff: `
                <p>While not all suicides can be prevented, early interventions reduce risks. <h4>The best ways to prevent suicide are to:</h4></p>
                <ul>
                    <li>Know the risk factors for suicide</li>
                    <li>Be alert to the signs of depression and other mental health issues</li>
                    <li>Recognize the warning signs for suicide</li>
                    <li>Intervene before the person can act</li>
                </ul>
                `
            },
            {
                title: 'What should I do if I see the warning signs of suicide?',
                stuff: `
                <p>Having support and access to mental health services is key in preventing individuals from acting on suicidal ideation. Being isolated increases a person’s risk for suicide. <h4>If you think someone is in danger, take action in the following ways:</h4></p>
                <ul>
                    <li>Ask directly if he or she is thinking about suicide. Don’t be afraid to use the words “suicide” or “kill yourself.”</li>
                    <li>Listen without judgment. Listening communicates caring and can be healing all by itself.</li>
                    <li>Ask about his/her support system, including friends, family, counselors, religious leaders, or any other people who might be helpful.</li>
                    <li>Don’t argue with the individual. Just let them know that their problem is temporary and solvable, and that you’re willing to help.</li>
                    <li>Advise the person to seek professional help. Help them access it if you can.</li>
                    <li>Do not leave the person alone. If possible, ask for help from friends or other family members.</li>
                    <li>If you need help, call a 24-hr suicide crisis hotline such as 1-800-SUICIDE or 1-800-273-TALK.</li>
                    <li>If the person is in immediate danger, call 911 or take the person to the nearest emergency room.</li>
                </ul>
                `
            },
        ]
    }),
    template: `
<v-app>
<h1 class="cmt">Suicide</h1>

    <p class="pad">Suicide is defined as the act or an instance of taking one's own life voluntarily and intentionally
    Suicide, the act of killing oneself, is a tragic epidemic in the United States. Suicide accounts for 2% of all deaths, making it the 11th ranking cause of death nationally. We lose over 38,000 Americans to suicide each year.
    In Utah, suicide is the 8th leading cause of death, taking over 500 lives per year in our state. Suicide rates in Utah are among the highest in the nation. Utahns are at higher risk for suicide in the spring than in the winter, and those living in rural areas of Utah are at higher risk than those living in Urban areas.
    Suicide impacts all demographic groups. Although women are three times as likely to attempt suicide, men are more likely to complete suicide. In the United States, Caucasian individuals have higher per capita rates of suicide than any other racial/ethnic group. Lesbian, gay, bisexual, and transgender individuals are at significantly higher risk of suicide than their heterosexual peers. And suicide occurs across the lifespan. Senior citizens are at markedly high risk of suicide, while rates of suicide among middle-aged individuals and adolescents/young adults are on the rise.
    Most people who attempt or complete suicide are suffering from untreated or undertreated mental health issues. Suicide is most commonly associated with major depressive disorder or “depression.” Other mental health issues which place people at higher risk of suicide include bipolar disorder, post-traumatic stress disorder, borderline personality disorder, and schizophrenia.</p>
    
    <span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/D1QoyTmeAYw" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
    <v-spacer></v-spacer>
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
export default suicideView