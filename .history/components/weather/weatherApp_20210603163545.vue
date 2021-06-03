<template>
  <div id="app">
    <main>
       <div class="search-box">
         <input type="search" placeholder="Search..."/>
       </div>
    </main>
   
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
        api_key: '55dff73df0b78dce39e821d9cc503cb1',
    }
  }

}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    
    background-image: url('./assets/cloud.jpg');
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25));

  }
.search-box {
   width:100%;
   margin-bottom:30px;
}
.search-box.search-bar {
    display:block;
    width:100%;
    padding:15px;
    color:#313131;
    appearance: none;
    background:none;
    border:none;


}
</style>