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
    }
}