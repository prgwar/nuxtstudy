<template>
  <div>
   <
   </div>
    <Nuxt />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import firebase from 'firebase'
require('firebase/auth')
import Cookies from 'js-cookie'
 export default {
     mounted() {
         this.setupFirebase();
     },
   data() {
       return {
           loggedIn: false
       }
   } ,
   methods: {
      logout() {
          alert('test')
      },
      setupFirebase() {
          firebase.auth().onAuthStateChanged( user => {
              if(user) {
                  console.log('loggedIn');
                  this.loggedIn=true;
                firebase
                .auth()
                .currentUser
                .getIdToken(true)
                .then(token => {
                Cookies.set('access_token', token);
                })
              }
              else {
                console.log('logOut')
                this.loggedIn = false;
                Cookies.remove('access_token')
              }
          })
      },
      logout() {
          firebase
          .auth()
          .signOut()
          .then(() => {
              this.$router.push("/")
          })
      }
   }
 }
 </script>

<style>
.logout-link {
    cursor:pointer;
    text-decoration: underline;
    color: #551a8b
}
.main {
   margin: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction:column;
   justify-content: underline;
}
.main-links {
    width:20%;
    margin : 10px 20px;
    display: flex;
    justify-content: space-around;
    cursor:pointer;
    text-decoration: underline;
    color: #551a8b
}
</style>
