<template>
    <div>
      <select 
        v-model="selected"
        class="form-select mt-10 block w-full border p-3"
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