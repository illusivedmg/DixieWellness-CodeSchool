const stressView = Vue.component('stress-view', {
    data: () => ({
        info:[
           
            {
                title: 'Symptoms Of Stress',
                stuff: `
                <ol>
                <h4><li>Emotional symptoms:</h4>
                    <ul>
                        <li>Quick agitation, frustration, or moodiness</li>
                        <li>A racing mind that is difficult to quiet</li>
                        <li>Overwhelming feelings of loss of control, or the need to take control/li>
                        <li>Inability to relax</li>
                        <li>Feelings of loneliness, worthlessness, and/or depression</li>
                        <li>Avoiding others</li>
                    </ul>
                    </li>
                    <h4><li>Physical symptoms:</h4>
                        <ul>
                            <li>Headaches</li>
                            <li>Fatigue</li>
                            <li>Upset stomach, including diarrhea, constripation, and/or nausea</li>
                            <li>Muscle tension, body aches and pains</li>
                            <li>Chest pain and rapid heartbeat</li>
                            <li>Insomnia or excessive sleeping</li>
                            <li>Frequent colds and infections</li>
                            <li>Loss of sexual desire and/or functioning</li>
                            <li>Nervousness and shaking, ringing in the ears, cold or sweaty hands and feet</li>
                            <li>Dry mouth, difficulty swallowing</li>
                            <li>Clenched jaw, grinding teeth</li>
                        </ul>
                    </li>
                    <h4><li>Cognitive symptoms:</h4>
                        <ul>
                            <li>Constant worrying</li>
                            <li>Racing thoughts</li>
                            <li>Catastrophizing, constantly thinking</li>
                            <li>Forgetfulness and disorganization</li>
                            <li>Inability to focus or concentrate on tasks</li>
                            <li>Poor judgment</li>
                            <li>Pessimism</li>
                        </ul>
                    </li>
                    <h4><li>Behavioral symptoms:</h4>
                        <ul>
                            <li>Changes in appetite: under or over-eating</li>
                            <li>Poor decision making and impulsivity</li>
                            <li>Procrastinating and avoiding responsbilities</li>
                            <li>Increased use of alcohol, drugs, or cigarettes</li>
                            <li>Exhibiting more nervous behaviors, such as nail biting, fidgeting, and pacing</li>
                        </ul>
                    </li>
                </ol>      
                `     
            },
            {
                title: 'What To Do If You Are Stressed',
                stuff: `
                <ul>
                    <li>Learn your own stress signals. Recognize the signs, whether they are emotional, physical, cognitive, behavioral, or any combination of these. Monitor these signals and look for recurrences.</li>
                    <li>Identify what is causing your stress. Consider things related to your family, health, finances, work, school, relationships, etc. Anytime you feel stressed, write down the cause, your thoughts, and your mood. Once you know what's bothering you, develop a plan for addressing it.</li>
                    <li>Recognize how you deal with stress. Try to identify your patterns or immediate responses to stressful situations. Decide if these responses are general or specific to certain events. Acknowledge the use of any unhealthy behaviors (such as smoking, excessive alcohol consumption and over/under eating) to cope.</li>
                </ul>
                `
            },
            {
                title:'The Stresses Of Social Media',
                stuff:`<p>Unique stress seems to be generated from social media. As you scroll through your news feeds you're bombarded by images
                and stories of people having a grand time. People feel inclined to always post about the "amazing life" they want everyone to know they
                have. This has become so common that many now believe that they can get to a point in life where they can always do what they want and they
                won't encounter any more problems. This is completely false. Not only does stress come to every person, many have forgotten that it's okay
                for things to suck sometimes. By accepting this and letting go of the idea you have to control every situation you'll finally be able to
                help your body relax and take care of the problems in front of you.</p>`
            },
            {
                title: 'Manage Your Stress Effectively',
                stuff: `
                <h4>Engage in healthy behaviors</h4>
                    <ul>
                        <li>Prioritize regular rest and sleep</li>
                        <li>Eat a healthy, balance diet.</li>
                        <li>Engage in regular exercise or yoga.</li>
                        <li>Train yourself to stop negative thoughts when they become overwhelming.</li>
                        <li>Forgive yourself for your mistakes. Let go of things you cannot change.</li>
                        <li>Avoid perfectionism. Give your best effort and be satisfied with that.</li>
                        <li>Speak up and take control. Stress increases when we feel helpless. Not expressing needs or concerns may worsen negative feelings.</li>
                        <li>Try meditation, massage and/or aromatherapy.</li>
                        <li>Prioritize your own self-care.</li>
                        <li>Write about your feelings and concerns.</li>
                        <li>Talk with trusted friends or relatives.</li>
                        <li>Laugh</li>
                        <li>Nurture your spirituality in ways that fit for you.</li>
                    </ul>
                <h4>Learn to manage your time</h4>
                    <ul>
                        <li>Set reasonable expectations for yourself and others. Don’t be afraid to ask for help with tasks.</li>
                        <li>Prioritize your commitments and eliminate anything that is not really important.</li>
                        <li>Curtail “time bandits” such as phone, text, email, internet, and television. Limit the time you spend with these activities. Be mindful and intentional in your involvement with them.</li>
                        <li>Pace yourself: Nobody can run at full speed all the time!</li>
                        <li>Learn to say no.</li>
                    </ul>
                <h4>Make time for activities you enjoy</h4>
                    <ul>
                        <li>Hobbies</li>
                        <li>Sports</li>
                        <li>Volunteering</li>
                        <li>Outdoor activities</li>
                        <li>Reading, watching movies, listening to music</li>
                        <li>Revisiting activities you enjoyed as a chil</li>                
                    </ul>
                `
            },
            {
                title:'Helping With Stress',
                stuff:`
                <h4>Walk Away</h4>
                <p>Stress can elevate emotions. Before you react in a stressful situation, take time to regroup and reconsider. Impulsive, emotionally driven actions can make circumstances worse and increase stress. Take time for rational consideration of positive solutions to problems.</p>
                <h4>Build strong relationships</h4>
                <p>Let family members or close friends know when you are struggling. Ask them to be a sounding board of support or seek their fresh perspectives.</p>
                <h4>Seek help</h4>
                <p>If you find yourself unable to manage your stress, consult with a licensed mental health professional to help you identify factors that contribute to your stress and develop a course of action to overcome it.</p>
                `
            }


        ]
    }),
    template: `
<v-app>
<h1 class="cmt">Stress</h1>

<p class="pad">Stress is defined as a state of mental or emotional strain or tension resulting from adverse or very demanding circumstances. Life as a student
can be stressful, but stress is not a problem unique to those attending college. No matter your circumstances you'll have challenges and problems to face, so learning to deal with stress in positive ways is essential to living a happy life. Luckily there are
many resources to help you learn to manage your stress. Experiment with these techniques and see which methods resonate most with you.
</p>

<span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/RcGyVTAoXEU?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
    <v-expansion-panel>
        <v-expansion-panel-content v-for="item, i in info" :key="i" ripple>
        <div slot="header" class="text-xs font-weight-bold">
            <div font-weight-bold> {{item.title}} </div>
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
export default stressView