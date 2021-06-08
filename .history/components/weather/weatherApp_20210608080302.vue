<template>
  
 <div id="weatherApp">
   <form v-on:submit.prevent="getWeather">
      <p><input type="text" name="location" v-model="location"></p>
      <p> 
         <button class="btn btn-primary">Search</button> 
      </p> 
          </form>
            <div v-if="displayWeather" class="container display-weather-section"><h1>{{ weather.name }}</h1>
            <coord v-bind:coord="weather.coord"></coord>
            <weather-display v-bind:weatherDisplay="weather.weather[0]"></weather-display>
            <temperature v-bind:temperature="weather.main"></temperature>
            <winds v-bind:wind="weather.wind"></winds>
            <clouds v-bind:cloud="weather.clouds"></clouds>
            <sun v-bind:sun="weather.sys"></sun>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
        

        location: '',
            apiKey: 'e39c3a2e0a270211f194e1d8f37cc585',
            weather: [],
            displayWeather: false
    }
  },

  methods: {

    getWeather() {
       return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.location +'&appid=' + this.apiKey)
        .then((response) => {
                this.weather = response.body;
                this.displayWeather = true
            }, (response) => {
                this.weather = [];
                this.displayWeather = false
            });
    },

       setResults (results) {
         this.weather = results;

       },

       dateBuilder() {
           let d = newDate();
           let months = [ "January", "February", "March", "April" , "May", "June", 
           "July", "August", "September",Oct, "October", "November", "December"];
           let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday"];

           let day = days[d.getday()];
           let date = d.getdate();
           let month = months[d.getmonth()];
           let year = d.getFullYear();

           return `${day} ${month} ${year}`;
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