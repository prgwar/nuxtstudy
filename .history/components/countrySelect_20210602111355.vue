<template>
    <div>
      <select 
        v-model="selected"
        class="form-select mt-10 block w-full border p-3 rounded">
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="countries"
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