import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
        news:[],
        user:[],
        job:[],
        matmst:[],
    },
    getters :{
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions
});