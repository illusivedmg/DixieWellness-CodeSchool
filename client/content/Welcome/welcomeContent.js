const welcomeView = Vue.component('welcomeContent', {
    data: () => ({
     
    info:[
        {
            title: 'I am worried about someone',
            stuff: `
            <h3>How to know when to take a suicide threat seriously</h3>
            <p>The first and most important thing is to make sure that you always take a suicide threat seriously. It helps to recognize the signs of someone who is suicidal.</p>
            <ul>
                <li>Talking about wanting to die or killing themselves</li>
                <li>Looking for a way to kill themselves, such as searching online or buying a weapon</li>
                <li>Talking about feeling hopeless or having no reason to live</li>
                <li>Talking about feeling trapped or in unbearable pain</li>
                <li>Talking about being a burden to others</li>
                <li>Increasing their use of alcohol or drugs</li>
                <li>Giving away personal items for no reason</li>
                <li>Acting anxious or agitated or behaving recklessly</li>
                <li>Sleeping too little or too much</li>
                <li>Withdrawing or isolating themselves</li>
                <li>Showing rage or talking about seeking revenge</li>
                <li>Displaying extreme mood swings</li>
            </ul>

            <h3>Will talking about suicide trigger them more?</h3>
                <p>It may be scary to bring up conversation about suicide for the fear that talking about it will place it in their mind or make them consider it even more. However, talking about it can actually help them feel more comfortable talking about it and it will show that you care enough about them to ask them hard questions. These conversations actually do not increase the likelihood that a person will attempt suicide.</p>
            <h3>How to start a conversation with someone I am worried about</h3>
                <p>It is important that you are both in an environment where you feel safe and comfortable, acknowledge that you have observed a change in them and that you are reaching out to them in concern and love</p>
            <h3>Someone opened up to me about their suicidal thoughts but does not want me to tell anyone, what do I do?</h3>
                <p>Respect them and their wishes about keeping the things they have shared with you private, however their life and safety is more important than their comfort. Encourage them first to open up to a professional that can help them. It may be helpful for you to offer to make a phone call for them or go with them to talk to someone in person. If the person you are talking with denies that they are having suicidal thoughts but you are still worried about them being at risk talk to someone such as a family member, mental health professional, or emergency medical services to arrange an evaluation for their safety.</p>
            `
        },
        {
            title: 'I have lost someone to suicide',
            stuff: `
            <h3>Did I do something wrong, could have prevented it?</h3>
                <p>Despite your best efforts, suicide is not always something you can prevent and the feelings of guilt that follow are very common in those that are left behind after a loved one has died by suicide. While you may have had a great influence in their life you are you are not responsible for your loved ones death.</p>
            <h3>My pain is unbearable, how can I work through it?</h3>
                <p>Being the survivor of the person who has died by suicide you may be having feelings of guilt, shock, anger, and confusion. How you cope with this situation will greatly influence your mental health and well being. It is not uncommon for a person to not understand how to handle the emotions they experience after such a tragedy and it is not uncommon for you to seek out mental health counseling for yourself to work through what you are feeling and going through. Your health and safety is important too.</p>
            <h3>How do I tell others what happened?</h3>
                <p>Talking about death is a difficult thing no matter the circumstance, and it can be a common desire to keep the circumstances of the death a secret when they died by suicide. But sharing the truth and being honest can be one of the most healing approaches. Use your own judgment one how much to share with others and when. And be aware that some will be better and listening and understanding than others.</p>
            `
        },
        {
            title: 'What to expect on your visit',
            stuff: `
            <p>To arrange you first visit you can call the health and counseling center and the number <strong>435-652-7755</strong>. The earlier you call in the semester the more likely you are to receive flexible counseling appointments around your schedule and the sooner we will be able to see you. If you are in a crisis situation let the staff member you are talking to know and we will do our best to meet with you as soon as possible on that day. Examples of this would be risks of suicide, abuse or assault, or any other severe circumstance.</p>
            <p>When you arrive we will ask you to fill out some paperwork before your appointment, make sure to have your D login (e.a. d00345678). We will do our best to meet with you at the time you have scheduled. When you come in be sure to let the front desk know you have arrived and they will notify your counselor. During your session with the counselor you will expect a meeting from 30 min. to 60 min. when you begin talking with your counselor you will most likely be asked a variety of questions to assess how they can most efficiently help you and clarify your specific needs. Together you will figure out some specific therapy goals that both of you can begin to work on with each other. Our biggest goal and hope is that through these counseling sessions you will find that you feel healthy and safe and realize you are receiving the changes in your mental health that you want.</p>
            `
        },
    ]
}),
template:`
    <v-app>
    <h1 class="cmt">Get the help you need</h1>
    <p>Here you will find helpful information about some of the major difficulties college students face. Gaining as much knowledge as 
    you can about specific issues you're dealing with will help you overcome them. No matter the issue, we have resources to help you get
    where you want to go emotionally. </p>
    <h3>If you or someone you know is experiencing suicidal thoughts please reach out to us or one of these resources:</h3>
    <ul class="list1">
        <li><a href="https://suicidepreventionlifeline.org/" target="_blank">Suicide Prevention Lifeline:</a>1-800-273-8255</li>
        <li><a href="https://suicidepreventionlifeline.org/help-someone-else/" target="_blank">Help a Friend:</a> 1-800-273-TALK(8255)</li?>
        <li><a href="https://www.crisistextline.org/" target="_blank">Crisis Text Line: text "HOME" to 741-741</a></li>
        <li><a href="https://www.thetrevorproject.org/#sm.00000t7tnsgmzxcyiy0t2mbbrksll" target="_blank">The Trevor Project (LGBT):</a>1-866-488-7386</li>
        <li><a href="https://www.glbthotline.org/national-hotline.html" target="_blank">The gay and lesbian national hotline: Mon-Fri 6-10 and Saturday 12-5 est.</a>1-888-843-4564</li>
        <li><a href="https://www.rainn.org/" target="_blank">National Sexual Assault Hotline 24/7</a> 1-800-656-HOPE(4673)</li>
    </ul>
</p>

    <v-expansion-panel class="expansion">
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

    <div class="contain">
    <span ><iframe class="home" width="517" height="290" src="https://www.youtube.com/embed/7OwrmaXsROE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></span>

    <span ><iframe class="home" width="517" height="290" src="https://www.youtube.com/embed/r47l4eUU1bc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></span>
    </div>
    <v-spacer></v-spacer>
    
    </v-app> `
})

export default welcomeView