<template>
    <div>
        <div id="cloud" class="col-xs-4">
                <h2>Clouds</h2>
                <p>Coverage - {{ cloud.all }}%</p>
        </div>'
    </div>
</template>

<script>

    export default {

         name: 'clouds',
         props: ['cloud'],
        
    }
</script>

<style scoped>

</style>