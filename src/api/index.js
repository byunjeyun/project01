import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
  baseUrl2: "http://localhost:8085/",
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
  return axios.get(`http://localhost:7002/jsp/sm/sm0001_list_01.jsp`); //ES6 백틱
}

function fetchVendmstList(vend_type, vend_cd, vend_name) {
  // return axios.get(`http://125.128.113.108:7002/jsp/mm/mm2100_list_01.jsp?vend_type=ALL&vend_cd=&vend_name=`,{
  return axios
    .get(
      `http://localhost:7002/jsp/mm/mm2100_list_01.jsp?vend_type=ALL&vend_cd=&vend_name=`,
      {
        params: {
          vend_type,
          vend_cd,
          vend_name,
        },
      }
    )
    .then((response) => {
        return {items: response.data.items, results: response.data.results};
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchVendmstDelete(VEND_CD) {
    return axios.get(`http://localhost:7002/jsp/mm/mm2100_delete_01.jsp`,{
        params:{
            VEND_CD: VEND_CD
        },
    })  
    .then(response => {
        return response.data.items;
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchMatmstList(partno) {
  return axios.get(`${config.baseUrl2}matmst`, {
    paramas: {
      partno,
    },
  });
}

function fetchSmempList() {
  return axios
    .get(
      `http://localhost:7002/jsp/sm/sm1100_list_01.jsp?emp_no=S110567&emp_dept=ALL&emp_nm=&emp_auth_group=ALL`
    )
    .then((response) => {
      return response.data.empGrid_list;
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchVendmstSm() {
  return axios
    .get("http://localhost:7002/jsp/common/mm0002_vend_01.jsp")
    .then((response) => {
      console.log(response.data.combos);
      return response.data.combos;
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchVtypeList() {
  return axios
    .get("http://localhost:7002/jsp/common/sm0004_list_01.jsp?lsc_cd=VTYP")
    .then((response) => {
      console.log("vtypapi", response.data.vtyps);
      return response.data.vtyps;
    })
    .catch((error) => {
      console.log(error);
    });
}

export {
  fetchNewsList,
  fetchAsksList,
  fetchJobsList,
  fetchUsersList,
  fetchMatmstList,
  fetchVendmstList,
  fetchSmempList,
  fetchVendmstDelete,
  fetchVendmstSm,
  fetchVtypeList,
};
