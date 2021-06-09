<template>
    <div>
      <div class="app">
         <header class="flex justify-center items-center text-white">
           <h1> My Music</h1>
         </header>

         <main>
             <section class="player">

                <h2 class="song-titile">{{ current.title }}</h2>
             </section>
          
         </main>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'musicPlayer',
        
        data() {
            return {
                current : {
                    title: 'SONG TITLE'
                },

                songs :[
                    
                ]
            }
        }
    }
</script>

<style scoped>
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    }
  body {

      font-family: sans-serif;
    }

    header {
        background-color: #212121;
        padding:15px;
    }

</style>