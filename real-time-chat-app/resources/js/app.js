
require('./bootstrap');

window.Vue = require('vue');

// import VueChatScroll from 'vue-chat-scroll'
// Vue.use(VueChatScroll)


Vue.component('chats', require('./components/ChatsComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});


