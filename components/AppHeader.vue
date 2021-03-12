<template>
 <header class="header">
  <h1 class="title"> Onvi movies </h1>
  <ul>
    <li>
     <nuxt-link to="/"> Home</nuxt-link>
     </li> 
      <li>
     <nuxt-link to="/onvi"> ONVI</nuxt-link>
     </li> 
      <li>
     <nuxt-link to="/home"> About</nuxt-link>
     </li> 
     </ul>
     </header>

</template>
<script>
export default {
   name: 'AppHeader'
}
</script>

<style>
 .header {
     display :flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 1rem;
     padding-bottom: 1rem;
     border-bottom: 1rem dotted #ccc;
 }
 .header .title {
     font-size: 3rem;
 }
 ul {
     display:flex;
 }