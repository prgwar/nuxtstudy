<template>
<div>
<h1> ONVI </h1>
</div>
</template>
<script>
 import axios from "axios";
export default {
   
   data() {
       return {
           jokes: []
       }
   },
   async created() {
       const config = {
           headers : {
               Accept : "application/json"
           }
       };
       try {
    const res = await axios.get("https://icanhazadjoke.com/search",config);
    console.log(res.data);
       }
       catch (err){
           console.log(err);
       }
   },
    head() {
        return {
            title: "ONVI OTT",
            meta: [
                {
                hid:"description",
                name:"description",
                content: "Best experience to watch movies"
                }
            ]
        };
    }
 

}
</script>
