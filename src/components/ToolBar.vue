<template>
  <div class="header" >
    <router-link to="/news">    SCHEDULE</router-link> 
    <router-link to="/ask">     YARD MGMT</router-link> 
    <router-link to="/jobs">    TRANSACTION</router-link> 
    <router-link to="/user">    INVENTORY</router-link> 
    <router-link to="/tuigrid"> ABNORMAL</router-link> 
    <router-link to="/tuigrid"> EXPORT</router-link> 
    <router-link to="/tuigrid"> STATISTICS</router-link> 
    <div class="dropdown">
      <router-link to="/tuigrid"> MASTER</router-link> 
      <div class="dropdown-content">
        <router-link to="/tuigrid"> - Material MGMT</router-link> 
        <router-link to="/tuigrid"> - EO</router-link> 
        
      </div>
    </div>
    <router-link to="/tuigrid"> AUTHORITY</router-link> 
    <router-link to="/tuigrid"> EQUIPMENT MGMT</router-link> 

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    border-top-left-radius: 25px;
    margin-bottom: 5px;
    background-color: #216e9f;
    display: flex;
    padding: 10px;
    padding-left:20px;
    color: white;
    text-align: right;
    justify-content: flex-start;
}
.header .router-link-exact-active {
    color: white;
}

.header a {
    color: white;
    text-decoration: none; 
    color: white; 
    margin-right: 20px;
}

.header a:hover {
    color: white;
    font-weight: bold;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  text-decoration: none;
  display: block;
  font-size:14x;
  background-color: #305060;
  width:200px;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #305060;
  text-align: left;
}
</style>