import {fetchAsksList, fetchUsersList,fetchJobsList, fetchMatmstList, fetchVendmstList, fetchSmempList, fetchVendmstSm, fetchVtypeList} from '../api/index.js';

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
    FETCH_VENDMST({commit}){
        fetchVendmstList()
        .then(({items, results}) => {
            commit('SET_VENDMST', items);
            console.log('actionVend', items);
            commit('SET_VENDMSTJOB', results);
            console.log('actionVendjob', results);
        })
        
        .catch(error => {
            console.log(error);
        });   
    },     

    // FETCH_VENDJOBLIST({commit}){
    //     fetchVendmstList()
    //     .then(jobList => {
    //         commit('SET_VENDMSTJOB', jobList);
    //         console.log('actionVendjob', jobList);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });   
    // },     

    FETCH_SMEMP({commit}){
        fetchSmempList()
        .then(empGridList=> {
            commit('SET_SMEMP', empGridList);
            console.log('action', empGridList);
        })
        .catch(error => {
            console.log(error);
        });   
    },       

    FETCH_VENDMSTSM({commit}){
        fetchVendmstSm()
        .then(vendComboList => {
            commit('SET_VENDMSTSM', vendComboList);
            console.log('actioncombox', vendComboList);
        })
        .catch(error => {
            console.log(error);
        });   
    },  

    FETCH_VTYPCOMBOLIST({commit}){
        fetchVtypeList()
        .then(vtypComboList => {
            commit('SET_SMCOMBOLIST', vtypComboList);
            console.log('actionvtyp', vtypComboList);
        })
        .catch(error => {
            console.log(error);
        });   
    },  
}