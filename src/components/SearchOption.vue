<template>
    <div>
        <div class="search">
        <label class="label">Part No: </label>
        <input class="input" v-model="partno" @input="onSearchTextChange" />

        <label class="label">Material Group: </label>
            <select  class="input" v-model="selectedMtgrp">
                <option value="">-- All --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{ mtgr.mtgrp }}</option>
            </select>


        <label class="label">Status: </label>
            <select  class="input" v-model="selectedMtgrp">
                <option value="">-- option --</option>
                <option v-for="mtstatus in mtgrplist" :value="mtstatus.mtsts" :key="mtstatus.mtsts">{{mtstatus.mtsts  }}</option>
            </select>
        </div>   

        <div class="search"  >
        <label class="label">Part Name: </label>
        <input  class="input" style="width:300px;" v-model="partno" @input="onSearchTextChange" />

        <label  class="label">Vend Code: </label>
            <select  class="input" v-model="selectedMtgrp">
                <option value="">-- All --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{ mtgr.mtgrp }}</option>
            </select>


        <label class="label">Location: </label>
            <select class="input"  v-model="selectedMtgrp">
                <option value="">-- option --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{  }}</option>
            </select>

            <label>O/w Tire </label>
            <select class="input"  v-model="selectedMtgrp">
                <option value="">-- option --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{  }}</option>
            </select>
<slot></slot>
        </div>   

</div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .search{
    background-color: #216e9f; 
    color:white; 
    height:30px; 
    padding:3px;
    margin-bottom: 1px;
  }

  .label{
    margin-right: 3px;
  }

  .input{
    margin-right:10px;
  }
  </style>