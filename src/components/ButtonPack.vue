<template>
    <div class="button" >
      <div>
      <slot></slot>
      </div>  
        <button class="btn-theme" data-preset="default">Search</button>
        <button class="btn-theme" data-preset="default">Add</button>
        <button class="btn-theme" data-preset="default">Save</button>
        <button class="btn-theme" data-preset="default">Delete</button>
        <button class="btn-theme" data-preset="default">Excel</button>
        <button class="btn-theme" data-preset="default">Excel</button>
      </div>
  </template>
  
  <script>
  import 'tui-grid/dist/tui-grid.css';
  export default {
  
  }
  </script>
  
  <style scoped>
  .button {
    float : right;
  }

  .btn-theme{
    background-color: #def;
    margin:3px;
    border:1px;
    padding:10px;
    width : 80px;
    
  }

  .btn-theme:hover {
    background-color: #cde;
    font-weight: bold;
  }

  @import 'https://uicdn.toast.com/tui-grid/latest/tui-grid.css';

  </style>