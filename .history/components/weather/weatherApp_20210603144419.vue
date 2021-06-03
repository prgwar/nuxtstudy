<template>
  <div id>
    <main>
       <div class="search-box">
         <input type="search" placeholder="Search.."/>
       </div>
    </main>
   
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
        api_key: '55dff73df0b78dce39e821d9cc503cb1',
    }
  }

}
</script>

<style>

</style>