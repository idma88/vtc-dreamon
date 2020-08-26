Vue.component('game', {
    props: [ 'id', 'title' ],
    template:
        '<span class="game"><img :src="`/static/images/games/${id}.png`" class="game-icon"> {{ title }}</span>'
})

Vue.component('card', {
    props: [ 'id', 'group', 'link' ],
    template:
        '<a target="_blank" :href="link" :class="`card ${id}`"> \
            <img :src="`/static/images/${group}/${id}.png`" height="256px" width="256px" class="fade transition"> \
            <span class="title transition"><slot></slot></span> \
        </a>'
})

Vue.component('role', {
    props: [ 'who' ],
    template: '<a target="_blank" href="https://discord.gg/VEuzE62" :class="`discord-role ${who}`">@<slot></slot></a>'
})

var app = new Vue({
    el: '#app',
    data: {
        discord: 'https://discord.gg/VEuzE62'
    }
})