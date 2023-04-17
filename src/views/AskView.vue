<template>
 <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>

 </div>  
</template>

<script>
import { mapState, mapGetters } from 'vuex';
// import {mapState} from 'vuex';

export default {
    computed:{

        //store > getters 의 fetchedAsk 변수를 바로 사용할려면 객체가 아니라 배열로 적용해서 사용하면된다.
        ...mapGetters([
            'fetchedAsk'
        ]
        ),   

        // #3
        // ...mapGetters({
        //      askItems : 'fetchedAsk'
        // }),        

        // #2
        // ...mapState({
        //     ask : state => state.ask
        // })

        // #1
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    },
}
</script>

<style>

</style>