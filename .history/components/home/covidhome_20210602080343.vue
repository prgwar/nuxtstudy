<template>
     <div>
        <appname></appname>
        <div class="container mx-auto px-4">
            Hello world

        </div>

     </div>
</template>

<script>
import Header from '../../components/header/header';
export default {
    name: 'home',
    components :{
        'appname' : Header 
    },
    methods : {
        fetchCovidData() {
            
        }
    }
    created() {
        console.log(123);
    }

}
</script>

<style>

</style>