const eatingView = Vue.component('eating-view', {
    data: () => ({
        info:[
            {
                title: 'Anorexia Nervosa',
                stuff: `<p>A person suffering from Anorexia Nervosa severely restricts his/her food intake, resulting in a body weight that is less than minimally normal or minimally expected for that individual.</p>
                
                
                <h4>Signs and symptoms</h4>
                <ul>
                    <li>Intense fear of gaining weight or of becoming fat</li>
                    <li>Perfectionism</li>
                    <li>Excessive concerns about weight and body shape</li>
                    <li>Distorted body image</li>
                    <li>Skipping meals, taking tiny portions, and/or avoiding eating with others</li>
                    <li>Exercising excessively or compulsively</li>
                    <li>Irregular or absent menstrual cycles in women</li>
                    <li>Purging via self-induced vomiting, laxatives, or other means</li>
                    <li>Significant weight loss</li>
                    <li>Wearing baggy clothes or layers of clothes to hide one’s body</li>
                    <li>Mood changes, including depression, guilt, and/or irritability</li>
                </ul>`  
                    
            },
            {
                title: 'Bulimia nervosa',
                stuff: `<p>A person suffering from Bulimia Nervosa engages in recurrent episodes of binge eating, often followed by inappropriate compensatory behaviors to prevent weight gain. Because their body weight may be close to normal, individuals with Bulimia Nervosa may be more difficult to recognize.</p>
                
                
                <h4>Signs and Symptoms</h4>
                <ul>
                    <li>Eating excessive amounts of food in discrete periods of time</li>
                    <li>Feeling out of control during binge eating episodes</li>
                    <li>Impulsivity</li>
                    <li>Use of self-induced vomiting, laxatives, diuretics or other medications, enemas, or other means purging food</li>
                    <li>Use of fasting or excessive exercise as a means of compensating for binges</li>
                    <li>Feelings of relief and contentment following purges</li>
                    <li>Secrecy around food</li>
                    <li>Feelings of disgust and shame directed toward self</li>
                </ul>`
            },
            {
                title: 'Binge Eating Disorder',
                stuff: `<p>A person with a Binge Eating Disorder engages in recurrent binge eating. Because such behavior is not associated with inappropriate compensatory strategies, they may be overweight or obese.</p>
                
                
                <h4>Signs and Symptoms</h4>
                <ul>
                    <li>Eating excessive amounts of food in discrete periods of time</li>
                    <li>Feeling out of control during binge eating episodes</li>
                    <li>Eating much more rapidly than normal</li>
                    <li>Eating to the point of uncomfortable fullness</li>
                    <li>Overeating despite lack of physical hunger</li>
                    <li>Feelings of embarrassment, disgust, or guilt about one’s food intake</li>
                    <li>Frequently consuming food alone</li>
                    <li>Dressing to hide one’s body and weight gain</li>
                </ul>`
            },
            {
                title:'Other specified or unspecified eating disorder',
                stuff:`More common than the eating disorders described above are those that cause significant distress or impairment but do not meet the full criteria for a specific disorder. Many of the same harmful behaviors and distressing emotions are involved, and the impact on an individual’s physical and mental health can be similarly severe.`
            },
            {
                title:'Factors that may influence susceptibility to eating disorders',
                stuff:`<p>There is no single cause of eating disorders. Some evidence suggests that genetic, biological, and hormonal factors may contribute to one’s susceptibility. Situational stressors, both positive and negative, can trigger the onset of an eating disorder. A variety of factors most often converge in the development of eating disorders. Some of the most common precipitants include:</p>
                
                
            <h4>Family Factors</h4>
                <ul>
                    <li>Family history of eating disorder or obesity</li>
                    <li>Parental criticism or ridicule</li>
                    <li>Family history of addiction, emotional or psychological disorders</li>
                    <li>Unhealthy food rules in the family</li>
                </ul>

            <h4>Cultural Factors</h4>
                <ul>
                    <li>Social judgment about weight and body size</li>
                    <li>Conflicting media promotions of ultra-thin bodies and super-sized foods</li>
                    <li>Unhealthy standards of attractiveness within different cultural groups</li>
                </ul>

            <h4>Psychological Factors</h4>
                <ul>
                    <li>Emotional insecurity and/or helplessness</li>
                    <li>High stress levels</li>
                    <li>Extreme self-criticism, particularly regarding one’s body and appearance</li>
                    <li>Perfectionism</li>
                    <li>Traumatic events such as sexual abuse, assault, or rape</li>
                    <li>Fears of sexual development</li>
                </ul>`
            },
            {
                title:'Treatment',
                stuff:`<p>Recovery from eating disorders is possible, although treatment is difficult and long term. Because changing such deeply ingrained habits and beliefs is so challenging, early detection is an important part of successful treatment. Individuals working toward recovery from eating disorders can expect relapses as part of the process. They must remain hopeful and engaged, and they can certainly emerge successful.</p>
                
                
                <h4>Treatment approaches for eating disorders may take place in either inpatient or outpatient settings, depending upon the severity of the disorder. Treatment can include:</h4>
                <ul>
                    <li>Psychotherapies: Various approaches, particularly cognitive-behavioral therapy, can be effective in treating eating disorders.</li>
                    <li>Medications: Treating co-existing psychiatric conditions can be important in the comprehensive care of an individual with an eating disorder.</li>
                    <li>Nutritional counseling: Psychoeducation, food planning, and/or meal monitoring help individuals learn and re-shape their relationships with food.</li>
                    <li>Therapeutic activities: Art therapy, equine-assisted therapy, and movement-oriented activities can assist in the recovery process.</li>
                    <li>Family therapy: The support of family members, including parents, siblings, and/or spouses, can be key in helping an individual remain in recovery.</li>
                </ul>
                `
            },
            {
                title:'How can you be supportive to a person with an eating disorder?',
                stuff:`
                <ul>
                    <li>Educate yourself. Recognize the significant emotional, psychological and physiological struggles involved with eating disorders.</li>
                    <li>Avoid making negative comments about anyone’s eating habits, weight, or body shape.</li>
                    <li>Show interest in aspects of life not related to food or body image. Focus on health and emotional well-being.</li>
                    <li>Remain non-judgmental and compassionate. Strive to understand.</li>
                    <li>Convey your concern for the person’s health and happiness.</li>
                    <li>Have boundaries in your attention to the issue. Address your concerns directly and offer resources for support, but do not attempt to shame or force the person into treatment.</li>
                </ul>`
            }

        ]
    }),
    template: `
<v-app>

<h1 class="cmt">What are Eating Disorders?</h1>
    
    <p class="pad">Eating disorders are defined as any of several psychological disorders (such as anorexia nervosa or bulimia) characterized by serious disturbances of eating behavior.</p>
    
    <span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/eMVyZ6Ax-74?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></span>
    
    <h3>Types of Eating Disorders</h3>
    
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
export default eatingView