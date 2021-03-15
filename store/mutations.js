
export default {

    addTodo(state,payload) {
       // alert(payload)
       state.todos.push(payload);
    }
}