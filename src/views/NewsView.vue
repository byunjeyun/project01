<template>
  <div>
    <div v-for="user in users">{{ users.request_list }}</div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      users:[]
    }
  },
  created(){
    var vm = this;
    //axios.get('http://localhost:8085/requests')
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function(response) {
          console.log(response);
          vm.users = response.data;
      }) 
      .catch(function(error) {
        console.log(error);

      })
  }

}
</script>

<style>

</style>
