<template>
 <div>
    <h1> This is secret information </h1>
  </div>
    
</template>

<script>
import { getUserFromCookie } from '@/helpers';
import firebase from 'firebase'
require('firebase/auth')
import  Cookies from 'js-cookie'

export default {
    asyncData({ req, redirect}) {
        if(process.server) {
            const user = getUserFromCookie(req)
            console.log(user);
            if(!user) {
                redirect("/login")
            }

        }else {
        let user = firebase.auth().currentUser
        if(!user) {
            redirect("/login");
           //this.$router.push("/login");
        }
        }
    }
}

</script>

<style>

</style>
