<template>
    <div>
      <select 
        v-model="selected"
    </div>
</template>

<script>
    export default {
        name:'CountrySelect',
        props : ['countries'],
        data() {
            return { 
               Selected:0
               }
        }

    }
</script>

<style  scoped>

</style>