<template>
  <div>
   <div class="main">
       <div class="main-links">
           <nuxt-link to="/">Home</nuxt-link> #
           <nuxt-link to="login"> Login </nuxt-link> #
           <nuxt-link to="secret"> Secret </nuxt-link>#
           
       </div>
   </div>
    <Nuxt />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
 export default {
    
 };
 </script>
<style>

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
}
</style>
