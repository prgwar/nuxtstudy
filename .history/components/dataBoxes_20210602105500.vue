<template>
    <div>
       <div class="grid md:grid-cols-2 gap-4">
           <div class="shadow-md bg-blue-100 text-center rounded">
               <h3 class="text-3xl text-blue-900 font-bold mb-4"> Cases</h3>

               <div class="text-2xl mb-4">
               <span class="font-bold">New:</span>
               {{ numberwithCommas(stats.NewConfirmed) }}    
                      
              </div>
              <div class="text-2xl mb-4">
               <span class="font-bold">Total:</span>
               {{ numberwithCommas(stats.TotalConfirmed) }}    
                      
              </div>

           </div>

               <div class="shadow-md bg-blue-100 text-center rounded">
               <h3 class="text-3xl text-blue-900 font-bold mb-4"> Deaths</h3>

               <div class="text-2xl mb-4">
               <span class="font-bold">New:</span>
               {{ numberwithCommas(stats.NewDeaths)}}    
                      
              </div>
              <div class="text-2xl mb-4">
               <span class="font-bold">Total:</span>
               {{ numberwithCommas(stats.TotalDeaths) }}    
                      
              </div>

           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name : 'DataBoxes',
        props : ['stats'],
        methods : {
            numberithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>