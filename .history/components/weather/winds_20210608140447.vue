<template>
    <div>
        <div id="wind" class="col-xs-4">
                <h2>Wind</h2>
                <p>Speed - {{ wind.speed }}</p>
                <p>Direction - {{ degreesToCompass(wind.deg) }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>