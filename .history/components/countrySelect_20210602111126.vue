<template>
    <div>
      <select 
        v-model="selected"
        class="form-select"
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