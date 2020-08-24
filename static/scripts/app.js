Vue.component('game', {
    props: [ 'id', 'title' ],
    template:
        '<span class="game"><img :src="`/static/images/games/${id}.png`" class="game-icon"> {{ title }}</span>'
})

Vue.component('big-button', {
    props: [ 'id', 'group', 'link', 'title' ],
    template:
        '<a target="_blank" :href="link" :class="`big-button ${id}`"> \
            <img :src="`/static/images/${group}/${id}.png`" height="256px" width="256px" class="fade transition"> \
            <span class="title transition">{{ title }}</span> \
        </a>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})