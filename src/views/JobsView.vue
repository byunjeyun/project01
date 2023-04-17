<template>
    <div>
       <div v-for="item in this.$store.state.job">{{ item.title }}</div>
   
    </div>  
   </template>
   
   <script>
   export default {
       created() {
           this.$store.dispatch('FETCH_JOB');

           var lm =[] ;

            lm = this.$store.state.job;
           console.log('lm',lm);

       },
   }
   </script>
   
   <style>
   
   </style>