<template>
  <div id="app">
    <main>
       <div class="search-box">
         <input
           v-model="query"
           type="search"
           class="search-bar"
           placeholder="Search..."
           />
       </div>
        <div class="weather-wrap">
           <div class="location-box">
             <div class="location">Northampton</div>
             <div class="date">Thursday 03 June 2021</div>
             
           </div>
           <div class="weather-box">
              <div class="temp">9</div>
              <div class="weather">Rain</div>
           </div>
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
        url_base: 'https://api.openweathermap.org/data/2.5',
        query: '',
        weather: {}
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
.location-box .location {

   color: #fff;
   font-size: 32px;
   font-weight: 500;
   text-align: center;
   text-shadow: 1px 3px rgba(0,0,0,0.25)

}

.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align:center;
}

.weather-box {
   text-align:center;
}

.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(0,0,0,0.25);
    background-color:rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0;

    box-shadow: 3px 6px rgba(0,0,0,0.25);

}

.weather-box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;

  text-shadow: 3px 6px rgba(0,0,0,0.25);


}
</style>