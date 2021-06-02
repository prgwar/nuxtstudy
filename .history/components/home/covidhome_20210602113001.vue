<template>
     <div>
        <appname></appname>
        <div class="container mx-auto px-4">

      <main v-if=!loading>
          <DataTitle :text="title" :dataDate="dataDate" />

          <DataBoxes :stats="stats" />

          <CountrySelect  @getcountry= :countries="countries" />
          
      </main>
       <main class="flex flex-col align-center justify-center text-center" v-else>
           <div class="text-grey-500 text-3xl mt-10 mb-6">
              Fetching Data
           </div>
           <img :src=loadingImage class="w-24 m-auto" alt="" />
       </main>

        </div>

     </div>
</template>

<script>
import Header from '~/components/header/header';
import DataTitle from '~/components/dataTitle'
import DataBoxes from '~/components/dataBoxes'
import  CountrySelect from '~/components/countrySelect'
export default {
    name: 'home',
    components :{
        'appname' : Header ,
        DataTitle,
        DataBoxes,
        CountrySelect
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
          this.loading = false;
    },

}
</script>

<style>

</style>