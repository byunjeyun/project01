export default {
    SET_ASK(state, ask){ //ask는 data라고 받아도 상관 없음.
        state.ask =ask;
    },
    SET_USER(state, user){ 
    state.user =user;
    },
    SET_JOB(state, job){ 
    state.job =job;
    }, 
    SET_MATMST(state, matmst){
    state.matmst = matmst;
    console.log('mutation', this.state.matmst);
    },
    SET_VENDMST(state, items){
        state.items = items;
        console.log('mutationVend', state.items);
    },
    SET_VENDMSTJOB(state, results){
        state.results = results;
        console.log('mutationVendjob', state.results);
    },
    SET_SMEMP(state, empGrid_list){
        state.empGrid_list = empGrid_list;
        console.log('mutationEmp', state.empGrid_list);
    },
    SET_VENDJOBLIST(state, results){
        state.results = results;
        console.log('mutationEmp', state.results);
    },
    SET_VENDMSTSM(state, combos){
        state.vendcombo = combos;
        console.log('mutationCombo', state.vendcombo);
    },
    SET_SMCOMBOLIST(state, vtyps){
        state.vtypcombo = vtyps;
        console.log('mutationvtyps', state.vtypcombo);
    }



}