<template>
<section class="section">
 <h1> About ONVI </h1>
 <p> Indis's first digital multiplex. A unique and innovative platform
 for the movie makers. </p>
 <p> The movie name is {{ message }} </p>
 <ul>
      <li class="list-group-item"  v-for="movie in movies" :key="movie">{{movie}}</li>
 </ul>
 <button type="submit" @click= "sub()"> Sub </button>
</section>
</template>

<script>
import test from '../helpers/test';
//import { getUserFromCookie } from '@/helpers';
import hello from '~/modules/hello.js';
export default {
 
    name: "Home page",
    modules: [hello],
     data() {
        return {
           // movieName:'Marra',
            //releaseYear:''
            movie:''
        }
}
}
</script>

<style>
</style>
