const griefandlossView = Vue.component('griefandloss-view', {
    data: () => ({
     
        info:[
            {
                title: 'Stages Of Grief',
                stuff: `
                <ul>
                    <h4><li>Denial:</h4> Loss often comes as a shock we are resistant to accept.</li>
                    
                    <h4><li>Anger:</h4> A common emotion that accompanies loss, we may direct our anger rationally or irrationally at ourselves, at others, at a higher power, or even at a loved one who has passed away. When we don’t feel ready to experience the loss or it cannot be justified in our mind, anger is often the result.</li>
                    
                    <h4><li>Bargaining:</h4> We may try to make deals with a higher power to try to attain an outcome different than the loss we are experiencing.</li>
                    
                    <h4><li>Depression:</h4> Grief-related depression includes overwhelming feelings of sadness and emptiness. We may experience loss of motivation, increased fatigue, confusion, and lack of concentration. We may also feel guilt because of our inability to function optimally and care for others during our grieving process.</li>
                    
                    <h4><li>Acceptance</h4> This is the stage of recovery in which we begin to find ways to accept our loss and reinvest in other parts of our life. The pain of the loss continues to be present but does not consume us.</li>
                </ul>
                `
                    
            },
           
            {
                title: 'Tips For Enduring Personal Loss',
                stuff: `
                    <ul>
                        <li>Allow yourself to experience all of your emotions. Don’t judge yourself for having them, and don’t rush them along. Feeling your emotions thoroughly will help you to eventually let them go.</li>
                        
                        <li>Be appreciative of others who try to help you in helpful ways. Be honest about what is and is not helpful.</li>
                        
                        <li>Take good personal care of yourself during your time of grief. Make efforts to get adequate nutrition, sleep, and exercise, even when it is difficult to do so.</li>
                        
                        <li>Experience comfort wherever you can. Try to embrace small gifts like cool breezes and friendly smiles. It’s okay to feel joy and to laugh, even while you grieve.</li>
                        
                        <li>Consider expressing your grief creatively, through writing, art, crafts, or other means that are healing for you.</li>
                        
                        <li>Know your limits, and expect them to be different while you grieve. Don’t hesitate to take necessary breaks from tasks, feelings, and obligations.</li>
                        
                        <li>Learn to meditate and relax your mind.</li>
                        
                        <li>Avoid using alcohol or other substances to numb your feelings. This will only prolong your pain.</li>
                        
                        <li>Know your triggers and prepare for them. Anniversaries of losses and birthdays of loved ones who have passed away often find us with intensified emotions. This is normal. Secure appropriate support.</li>
                        
                        <li>Consider volunteering or finding ways to help others.</li>
                        
                        <li>Join a grief support group, either online or in person.</li>
                        
                        <li>Be patient. Remember, grief is a process, not an event.</li>
                    
                    </ul>
                ` 
            },
            {
                title:'Tips for helping someone who is grieving',
                stuff:`
                    
                    <ul>
                        <li>Uncover your windows to let in every bit of sunlight available, especially in the morning.</li>
                        
                        <li>Take day trips to higher, sunnier elevations when possible.</li>
                        
                        <li>Consider utilizing a light therapy box, which emits artificial light. Consult with a physician regarding purchase and use.</li>
                        
                        <li>Make contact and keep in touch. Don’t avoid your grieving loved one.</li>
                        
                        <li>Listen patiently and without judgment. Allow and encourage conversations about the loss. Don’t be afraid to use the name of a loved one who has died.</li>
                        
                        <li>Be accepting of the full range of emotions expressed. Don’t tell anyone else how they should feel.</li>
                        
                        <li>Offer specific help. Suggest bringing a meal or running an errand for your grieving friend. Saying, “let me know if I can do anything to help,” requires input from them, and they may be unable to provide it.</li>
                        
                        <li>Provide encouragement and reinforce progress that you notice in your loved one’s recovery.</li>
                        
                        <li>Be aware of dates that will be especially difficult for your grieving friend, such as milestones or birthdays. Reach out and offer extra support during those times.</li>
                        
                        <li>Try to set a good example of emotional and physical health. Invite your friend to join you for a walk or other healthy activity.</li>
                        
                        <li>Encourage your grieving loved one to seek professional help when needed.</li>
                    
                    </ul>
                
                `

            },


        ]
    }),
    template: `
<v-app>
<h1 class="cmt">Grief And Loss</h1>

<p class="pad">Grief is defined as deep sorrow, especially that caused by someone's death. Grief isn't something unique to the event of losing
someone, but losing someone close to you is one of the hardest emotional experiences one can go through in life. 
If you've lost someone close to you and are finding it difficult to function know that it gets better. There are resources to help you, but perhaps
one of the best steps one can take is to not try to fight the emotions that come but instead allow the body to process what it needs to. Don't ever
forget your loved one and never stop contemplating the significance of what their life meant to you.</p>



<span class="cmt"><iframe width="560" height="315" src="https://www.youtube.com/embed/lhoCdZFoktQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></span>
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
export default griefandlossView