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
import coord from '~/components/weather/coordianates'
import coord from '~/components/weather/coordianates'
import coord from '~/components/weather/coordianates'
export default {
  name: 'Weather',
  components : {
    coord,
    weatherDisplay,
    temperature,
    winds,
    clouds,
    sun
  },
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


</style>