<template>
    <div>
      <select @change="onChange()"
        v-model="selected"
        class="form-select mt-10 block w-full border p-3 rounded">
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="country.ID">
            {{country.Country}}
        </option>
        </select>
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
        },
        methods : {
            onChange () {
                const country = this.countires.find((item) => item.ID === this.Selected)
                
                console
            }
        }

    }
</script>

<style  scoped>

</style>