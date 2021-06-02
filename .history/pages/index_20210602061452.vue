<template>
<div class="container">

</div>
</template>

<script>
export default {

    data() {
        return {
            todo:''
        }
    },
    computed:{
        
        todos(){

         return this.$store.state.todos
        }
    },
    mounted() {
      
      // alert(this.$store.state.todos);
    },
    methods: {
        sub() {
            console.log(this.todo);
            //alert(this.todo);
            if(this.todo)
            {
                //this.todos.push(this.todo);
                this.$store.commit('addTodo', this.todo);
                this.todo = ''
            }
        },
        removeTodo(index) {
            //alert(index);
            //this.$delete(this.todos,index);
            this.$store.commit('removeTodo',index);
        }
    }
       
}
</script>

<style scoped>
.h1 .title {
    font-size: 5rem;
    text-align: center;
}
button {
    background-color:grey ;
}
</style>

