<template>
 <header class="header">
  <h1 class="title"> Onvi movies </h1>
  <ul>
    <li>
     <NuxtLink to="/"> Home</NuxtLink>
     </li> 
      <li>
     <NuxtLink to="/onvi"> ONVI</NuxtLink>
     </li> 
      <li>
     <NuxtLink to="/home"> About</NuxtLink>
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