import Vue from 'vue/dist/vue';
import test from 'ava'
import Notification from "../src/Notification";

test('that is renders a notification', t => {
   let n = new Vue(Notification).$mount();
    console.log(n.$el.textContent);
});
