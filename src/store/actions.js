import {fetchAsksList, fetchUsersList,fetchJobsList, fetchMatmstList} from '../api/index.js';

export default {
    FETCH_ASK(context){
        fetchAsksList()
        .then(response=> {
            console.log(response);
            context.commit('SET_ASK', response.data);
        })
        .catch(error => {
            console.log(error);
        });   
    },
    FETCH_USER({commit}){
        fetchUsersList()
        .then(({data})=> {
            // console.log(data);
            
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        });   
    } ,
    FETCH_JOB({commit}){
        fetchJobsList()
        .then(({data})=> {
            console.log(data);
            
            commit('SET_JOB', data);
        })
        .catch(error => {
            console.log(error);
        });   
    },
    FETCH_MATMST({commit}){
        fetchMatmstList()
        .then(({data})=> {
            commit('SET_MATMST', data);
            console.log('action', data);
        })
        .catch(error => {
            console.log(error);
        });   
    } ,        
}