<template>
    <div>

    </div>
</template>

<script>
    export default {
        name:'sun',
         methods: {
        timestampToDate: function( timestamp ){
            var date = new Date(timestamp*1000);
            return date.toString();
        }
    }
</script>

<style scoped>

</style>