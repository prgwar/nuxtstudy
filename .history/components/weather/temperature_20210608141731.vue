<template>
    <div>
        <div id="temp" class="col-xs-4">' +
                '<h2>Temperature</h2>
                <p>Avg Temp - {{ displayTemp(temperature.temp) }}c</p>
                <p>Min Temp - {{ displayTemp(temperature.temp_min) }}c</p>
                <p>Max Temp - {{ displayTemp(temperature.temp_max) }}c</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

</style>