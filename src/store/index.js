import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
    //서버에서 리턴받는 json이 담긴 배열 이름
	state: {
        news:[],
        user:[],
        job:[],
        matmst:[],
        smemp:[],
        items:[],
        combos:[],
        vendcombo:[],
        vtypcombo:[],
        results:[],
    },
    getters :{
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions
});