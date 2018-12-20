const lgbtView = Vue.component('lgbt-view', {
    data: () => ({
        info:[
            {
                title: 'Coming out',
                stuff: `
                <p>Meeting your parents’ expectations can be hard enough, but what if you are gay, lesbian, bisexual, transgender, or questioning your sexual orientation?
                “Coming out” is a psychological process or journey of exploring your sexual orientation and sharing that orientation with others. The decision to come out is always personal. It can be one of the most rewarding experiences of your life. There may also be negative ramifications associated with coming out. You should prepare yourself for these possibilities in advance. Fear of rejection prevents many from being open about their sexual orientation. This may change as you experience support and advocacy from both the LGBTQ community and the heterosexual community.</p>
                `  
            },
            {
                title: 'Coming out to yourself',
                stuff: ` 
                <h4>Recognizing and accepting your own sexual orientation are the first two steps necessary for coming out.</h4>
                    <ul>
                        <li>Sexual orientation is defined on a continuum that ranges from exclusive same-sex attraction to exclusive opposite-sex attraction. In recognizing your own sexual orientation, it is helpful to understand where you fit along this continuum.</li>
                        <li>Finding a well-adjusted and confident role model in the LGBTQ community can be helpful in developing your own self-acceptance.</li>
                        <li>Be aware of the homophobia and societal biases that have been imposed upon you throughout your life. Internalizing these ideas is nearly impossible to avoid, though holding on to them is self-destructive.</li>
                        <li>Note the positive outcomes that can be attained through coming out:</li>
                            <ul>
                                <li>Increased self-esteem</li>
                                <li>Greater honesty in your life</li>
                                <li>Stronger personal integrity</li>
                                <li>Genuine self-expression</li>
                                <li>Freedom to stop hiding or denying an important part of your life</li>
                            </ul>
                        <li>Learn about others’ experiences in coming out. Determine those that are relevant to your circumstances and how they might help guide you through your process.</li>
                    </ul>
                `
            },
            {
                title: 'Coming out to other LGBTQ individuals',
                stuff: `
                <p>After spending time learning about your feelings and growing to accept them, you may be ready to come out to others. For a more positive experience, consider coming out first to those with whom you feel safe. Choose people you believe will be supportive.
                Because people from the LGBTQ community may have already experienced some of what you are going through, they may prove to be a strong support system. Sharing similar feelings and experiences might help prevent you from feeling isolated. Be mindful that “similar” does not mean “same.” The process of coming out is different for everyone and you must seek your own path in your own time. You are not obligated to conform to any real or perceived expectations of the LGBTQ community. You will gain confidence by remaining true to yourself. This is your process of self-discovery and sharing, nobody else’s. You need to embrace it in ways that feel safe and appropriate for you.
                </p>
                `
            },
            {
                title:'Coming out to heterosexuals',
                stuff:`
                <p>Coming out to heterosexuals might be more challenging than coming out to other LGBTQ individuals. It is important to be prepared for the full range of reactions you may receive. Understand that some may be shocked, confused, or disappointed by your disclosure. They may need time to process this new information. If you experience rejection, don’t give up hope. Many people will come around in time. Know that others will also be accepting, supportive, and excited for you.
                The process of coming out takes time. The decision to come out should not be made in the spur of the moment. Coming out is a process that works best as an action, not a reaction.
                <h4>In coming out to others, consider the following:</h4></p>
                    <ul>
                    <li>Choose the time and place carefully, considering yourself and your listener. What is ideal for you may not be ideal for someone else.</li>
                    <li>Practice what you want to say.</li>
                    <li>Present yourself honestly.</li>
                    <li>Have empathy for your listener’s experience, as you hope they will have empathy for yours.</li>
                    <li>Remember that it took you time to process and understand your sexuality. Be prepared for some to react negatively at first. Don’t get discouraged. Be patient and give them time to come to terms with it.</li>
                    <li>Have resources available for yourself and your loved ones to assist in understanding.</li>
                    <li>Engage in self-care throughout the coming out process. Though it can be freeing and exciting, it Transgender Issues</li>
                    <li>In many cultures, gender is equated to biological sex and there are thought to be only two possibilities: male or female. Some people, however, don’t believe they fit neatly into either category. This experience is referred to as transgender, or “trans.” The term trans is used here as shorthand, and refers to the broader spectrum of transgender, gender fluid, genderqueer, agender, pangender, and other gender non-conforming individuals.</li>
                    <li>Trans: It’s about who you are, not who you love</li>
                    <li>Sometimes people confuse the concepts of gender identity and sexual orientation. They are not the same thing! A person’s sexual orientation is distinct from their gender identity and expression. The following terms and definitions might be helpful in distinguishing these concepts:</li>
                    <li>Sexual Orientation is based on who one is attracted to and exists along a continuum that ranges from exclusively homosexual (same-sex attraction) to exclusively heterosexual (opposite-sex attraction). "Gay," "lesbian," "bisexual" and "straight" are some examples of sexual orientations.</li>
                    <li>Sex is a medically assigned identity based on physical characteristics – our genitalia, chromosomes, hormones, and internal reproductive structures.</li>
                    <li>Gender Identity refers to our inner sense of being a man, woman, or another gender. We can think of gender identity as how the mind and the heart regard the body.</li>
                    <li>Gender Expression refers to the ways in which we communicate our gender identity to others, through our external characteristics, behaviors, and other means.</li>
                    <li>Transgender is a broad term used to describe individuals whose gender identity does not correspond with their genetic sex.</li>
                        <li>Signs that you may be trans:</li>
                        <ul>
                            <li>Confusion about your gender.</li>
                            <li>Gender dysphoria: A strong feeling that you are not the gender you physically appear to be. This can be a scary and lonely experience.</li>
                            <li>Feeling “different” because of your gender, like you don’t really fit in anywhere.</li>
                            <li>Extreme stress, anxiety, depression, or even suicidal thoughts regarding your gender.</li>
                            <li>Negative feelings, such as dislike or even hatred, regarding your genitals.</li>
                            <li>Yearnings or urges to express traits or engage in behaviors typically associated with another gender.</li>
                            <li>Experimentation with identity expression different than the one you were assigned at birth, in public or in private. These expressions could include clothing, mannerisms, names, or other characteristics.</li>
                        </ul>
                    <h4><li>What to do if you think you may be trans:</li></h4>
                        <ul>
                            <li>Be patient with yourself.
                                Gender identity is complex. Give yourself time to fully understand your experience. Don’t rush your process of self-discovery.</li>
                            <li>Get support.
                                Talking to supportive others can make a real difference as you come to terms with your trans identity. Because trans people are often bullied and can be at high risk for mental health issues, it is crucial that you find safe people with whom to interact. Local, national, and online communities can help you find them. Many of these communities are referenced on this page.</li>
                            <li>Educate yourself.
                                Learn as much as you can about transgender experiences, rights, options, and resources. Many advocacy groups referenced on this page can provide you with valuable information.</li>
                            <li>Prioritize self-care.
                                Being trans, or realizing that you are trans, can be very stressful and confusing. It is important that you maintain good physical, mental, and spiritual health as you navigate your experiences. Eat well, exercise regularly, get adequate sleep, and avoid excessive use of alcohol or drugs. Manage your stress, attend to your self-talk, and nurture your spirituality.</li>
                            <li>Be thoughtful about coming out.
                                Exploring your trans identity and sharing it with others is a very personal decision. Although the process is different for everyone, it usually feels best if you prepare and plan carefully. Check out the Coming Out page for more information about how to do this.</li>
                            <li>Find an affirming therapist.
                                Therapy can be a vital source of support and guidance as you explore your trans identity. It is important that you find a therapist who is affirming. Affirmative care is based on the premise that LGBTQ and gender-conforming/heterosexual identities are equally valid. We offer affirmative care for trans individuals at the Weber State Counseling and Psychological Services Center.</li>
                            <li>Research the transition process.
                                There is no “one size fits all” approach to transitioning. Whether, when, and how to do it are highly individual decisions. Spend time talking with others who have made their own decisions and researching your options. The links provided on this page can be a good place to start this research.</li>
                        </ul>
                `
            },
            {
            title: `Supporting the Trans People in your Life`,
            stuff: `
            <ul>
                <li>If someone close to you has identified as trans or is going through a gender transition, seek and accept support in processing your own reactions. Relating to a loved one in transition will be an adjustment and can be challenging, especially for partners, parents, and children. Counselors at CPSC can help you work through these changes. Community support groups for family, friends, and significant others of transgender people can also be useful resources. Below are some simple ways in which you can show a trans-positive attitude:</li>
                <li>Learn as much as you can about transgender issues. Check out some of the resources referenced on this page.</li>
                <li>Be aware of your attitudes regarding individuals who are non-gender conforming, and how your attitudes may be impacting trans individuals around you. Strive toward acceptance.</li>
                <li>Use names and pronouns that are appropriate to the person’s gender presentation and identity. If in doubt, ask!</li>
                <li>Don’t make assumptions about transgender people’s sexual orientation, desire for hormonal or surgical treatment, or other aspects of their identity. If you need to know, ask. Simple curiosity is not a need to know.</li>
                <li>Expect to make mistakes. Be patient and kind to yourself and to the trans people in your life as you learn new ways of interacting.</li>
                <li>Keep the lines of communication open with the transgender person in your life. Your support can be instrumental to their well-being.</li>
                <li>It can also be stressful and scary. Seek support.
            </ul>
            `
            },
        ]
    }),
    template: `
<v-app>
<h1 class="cmt">LGBT</h1>

<p class="pad">Homosexuality (Lesbian and Gay) is defined as  Sexual attraction to the same gender, Bisexuality is sexual attraction to both genders, and transgender is denoting or relating to a person whose sense of personal identity and gender does not correspond with their birth sex.</p>
<span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/lrJxqvalFxM" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
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

export default lgbtView