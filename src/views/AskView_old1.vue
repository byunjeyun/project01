<template>
 <div>
    <div v-for="item in ask">{{ item.title }}</div>

 </div>  
</template>

<script>
import {fetchAsksList} from '../api/index.js';

export default {
    data(){
        return {
            ask :[]
        }
    },
    created() {
        console.log('호출전:',this);
        var vm =this;
        fetchAsksList()
            .then(function(response) {
                console.log('호출후:',this);
                //console.log(response);
                vm.ask = response.data;
            }) 
            .catch(function(error) {
                console.log(error);

            });
    },

}
</script>

<style>

</style>