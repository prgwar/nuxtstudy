<template>
<div class="container">
<div>
 <h1 class="title"> Firebase TODO app </h1>
  </div>

   <div class="d-flex d-row justify-content-center">

       <div class="col-md-8">
         
       <div class="card">
           
        <div class="card-body">

            <ul class="list-group mt-5">
             <li class="list-group-item"  v-for="(todo) in todos" :key="todo">{{todo}}</li>

        <form @submit.prevent="sub">
          <div class="form-group mt-5">
              <input type="text" placeholder="Add a Todo" class="form-control" v-model="todo">

            <button type="submit" class="btn btn-primary-outline mt-3" >Add Todo </button>

          </div>

         </form>
              </ul>

            </div>

           </div>

       </div>

</div>
</div>
</template>

<script>
export default {
    
    data() {
        return {
            todo:'',
            todos: ["movie","shortfilm","web series","content creator"]
        }
    },
    methods: {
        sub() {
            console.log(this.todo);
            //alert(this.todo);
            if(this.todo)
            {
                this.todos.push(this.todo);
            }
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

