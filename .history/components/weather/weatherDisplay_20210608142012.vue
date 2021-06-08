<template>
    <div>
          <div id="weatherDisplay" class="col-xs-4">
                <h2>{{ weatherDisplay.main }}</h2>
                <p>{{ weatherDisplay.description }}</p>
          </div>
    </div>
</template>

<script>
    export default {
        name: 'weather'
        
    }
</script>

<style  scoped>

</style>