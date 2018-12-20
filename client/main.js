import template from '/content/MainTemplate/template.js'
import formView from '/content/Form/formView.js'
import AngerView from '/content/Anger/anger.js'
import addictionView from '/content/Addiction/addictionView.js'
import testView from '/content/Testing/testView.js'
import adhdView from '/content/ADHD/adhdView.js'
import depressionView from '/content/Depression/depressionView.js'
import eatingView from '/content/Eating/eatingView.js'
import stressView from '/content/Stress/stressView.js'
import suicideView from '/content/Suicide/suicideView.js'
import lgbtView from '/content/LGBT/lgbtView.js'
import welcomeView from '/content/Welcome/welcomeContent.js'
import ptsdView from '/content/PTSD/ptsd.js'
import ocdView from '/content/OCD/ocdView.js'
import anxietyView from '/content/Anxiety/anxietyView.js'
import griefandlossView from '/content/Grief/griefAndLossView.js'
import studygroupView from '/content/StudyGroup/studygroupView.js'


const routes = [
    {path: '/', component: welcomeView},
    {path: '/form', component: formView},
    {path: '/anger', component: AngerView},
    {path: '/addiction', component: addictionView},
    {path: '/test', component: testView},
    {path: '/adhd', component: adhdView},
    {path: '/depression', component: depressionView },
    {path: '/eating', component: eatingView },
    {path: '/stress', component: stressView },
    {path: '/suicide', component: suicideView },
    {path: '/lgbt', component: lgbtView },
    {path: '/ptsd', component: ptsdView },
    {path: '/ocd', component: ocdView },
    {path: '/anxiety', component: anxietyView},
    {path: '/griefandloss', component: griefandlossView},
    {path: '/studygroupView', component: studygroupView},
]

const router = new VueRouter({
    routes
})

const theme = {
    "primary": "#26a69a",
    "secondary": "#F9CD04",
    "accent": "#26a69a",
    "error": "#FF5252",
    "info": "#bdbdbd",
};

new Vue({
    el: '#app',
    router,
    template,

    created() {
        this.$vuetify.theme = theme;
    }
})



