<template>
  <div id="app">
    <div class="logo-toolbar">
    <div class="logo">
    <img src="./assets/glovis.png" alt="Glovis">
  </div>
  <tool-bar class="toolbar"></tool-bar>
</div>
    <div class="header">
      <ProgramName></ProgramName>
      <button-pack slot="default"></button-pack>
    </div>  
    <!-- <search-option></search-option> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import ButtonPack from './components/ButtonPack.vue';
// import SearchOption from './components/SearchOption.vue';
import ProgramName from './components/ProgramName.vue';
export default {
  components: { ToolBar, ButtonPack, ProgramName },
 
}
</script>

<style>
body {
  padding:  0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ProgramName {
  margin-left: 16px; /* 예시 */
  margin-bottom: 0px;
}

.logo-toolbar {
  /* display: flex; */
  align-items: bottom;
  justify-content: space-between;
  margin: 0px;
}

.toolbar {
  width: 85%;
  float:right;
}

.logo {
  display: flex;
  align-items: center;
  margin: 0px;
}
</style>