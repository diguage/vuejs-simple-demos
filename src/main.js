import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

// 1. 默认
// import App from './App.vue'
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, D瓜哥！'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Learn Scala' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello D瓜哥！'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  },
  beforeCreate: function() {
    console.log('beforeCreate\tmessage: ' + this.message);
  },
  created: function() {
    console.log('created\t\t\tmessage: ' + this.message);
  },
  beforeMount: function() {
    console.log('beforeMount\t\tmessage: ' + this.message);
  },
  mounted: function() {
    console.log('mounted\t\t\tmessage: ' + this.message);
  },
  beforeUpdate: function() {
    console.log('beforeUpdate\t\tmessage: ' + this.message);
  },
  updated: function() {
    console.log('updated\t\t\tmessage: ' + this.message);
  },
  beforeDestroy: function() {
    console.log('beforeDestroy\t\tmessage: ' + this.message);
  },
  destroyed: function() {
    console.log('destroyed\t\t\tmessage: ' + this.message);
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    todos : [
      { text: 'Learn Vue-1' },
      { text: 'Learn Scala-1' },
      { text: 'Learn Android-1' }
    ]
  }
});
