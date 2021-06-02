<template>
    <div>
       <div class="grid md:grid-cols-2 gap-4">
           <div class="shadow-md bg-blue-100 text-center rounded">
               <h3 class="text-3xl text-blue-900 font-bold mb-4"> Cases</h3>

           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name : 'DataBoxes',
        props : ['stats'],
    }
</script>

<style lang="scss" scoped>

</style>