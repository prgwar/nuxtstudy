<template>
     <div>
        <appname></appname>
        <div class="container mx-auto px-4">
            Hello world

        </div>

     </div>
</template>

<script>
import Header from '../../components/header/header';
export default {
    name: 'home',
    components :{
        'appname' : Header 
    },
    data () {
        return {
            loading : true,
            title   : 'Global',
            dataDate: ' ',
            stats : {},
            countries :[],
            loadingImage : require('../../assets/hourglass.gif')

        }
    },
    methods : {
       async fetchCovidData() {

           const res = await fetch('https://api.covid19api.com/summary')
           const data = await res.json()
           return data
        }
    },
    async created() {
          const data = await this.fetchCovidData()
          console.log(data);

          this.dataDate = data.Date;
          this.stats =  data.Global;
          this.countries = data.Countries;
          this.
    },

}
</script>

<style>

</style>