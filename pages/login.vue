<template>
    <div class="login">
        <h1> Login Vue </h1>
      <form @submit.prevent="pressed">
          <div class="login">
              <input type="text" placeholder="email" v-model="email"> 
              </div>
          <div class="password">
             <input type="password" placeholder="password" v-model="password">
          </div>
          <button>Login</button>
       </form>
       <div class="error" v-if='error'> {error.message} </div>

    </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/auth')
var provider = new firebase.auth.GoogleAuthProvider()
export default  {
    
    data() {
       return {
           email:'',
           password:'',
           error:''
       }
    },
    methods: {
        pressed() {
           firebase
           .auth()
           .signInWithEmailAndPassword(this.email,this.password)
           .then(data => {
               console.log(data)
               this.$router.push('/secret')
           })
           .catch(error => this.error = error)
        }
    }

            
}
</script>

<style scoped>
 .login {

     margin-top:50px;
     display: flex;
     width: 100%;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
 form {
     display:flex;
     align-items:center;
     justify-content: center;
     flex-direction: column;
 }
input {
    width:300px;
    padding:20px;
    margin: 30px;
    font-size: 21px;
}
button {
    width:200px;
    height:35px;
    font-size:100%;
}
.error {
    color:red;
}

</style>
