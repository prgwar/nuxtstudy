<template>
  <div id="app">
    <main>
       <div class="search-box">
         <input type="search" class="search-bar" placeholder="Search..."/>
       </div>
        <div class="weather-wrap">
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

    box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.25);
    appearance: none;
    outline: none;
    background:none;
    border:none;
   background-color: rgba(255, 255, 255, 0.5);
   border-radius: 0px 16px 0px 16px;
   transition:  0.4s;
}
.search-box.search-bar :focus {
    box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 0px 16px 0px 16px;
   
}
</style>