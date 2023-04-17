import axios from 'axios';


const config = {
    baseUrl : 'https://api.hnpwa.com/v0/',
    baseUrl2 : 'http://localhost:8085/',
};

function fetchNewsList() {
    //return axios.get(config.baseUrl +'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`); //ES6 백틱
}

function fetchAsksList() {
    return axios.get(`${config.baseUrl}ask/1.json`); //ES6 백틱
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`); //ES6 백틱
}

function fetchUsersList() {
    return axios.get(`http://125.128.113.108:7002/jsp/sm/sm0001_list_01.jsp`); //ES6 백틱
}



function fetchMatmstList(partno) {
    return axios.get(`${config.baseUrl2}matmst`, {
    paramas:{
        partno,
    },
    });
}


export {
    fetchNewsList,
    fetchAsksList,
    fetchJobsList,
    fetchUsersList,
    fetchMatmstList
}