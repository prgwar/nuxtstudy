import Vue from 'vue'

export default {

    addTodo(state,payload) {
       // alert(payload)
       state.todos.push(payload);
    },

    removeTodo(state, payload) {
        
      Vue.delete(state.todos, payload);

    }
}