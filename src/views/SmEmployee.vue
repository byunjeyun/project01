<template>
    <div>
    <div>
      <div class="search">

        <label class="label">Vendor Type </label>
                <select  class="input" v-model="selectedMtgrp">
                    <option value="">-- ALL --</option>
                    <option v-for="mtgr in fetchSmempList" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{ mtgr.mtgrp }}</option>
                </select>

        <label class="label">Vend Cd </label>
            <input class="input" v-model="vend_cd" @input="onSearchTextChange" />
        
        <label class="label">Name </label>
            <input class="input" v-model="vend_name" @input="onSearchTextChange" />            

        <!-- <label class="label">Part No </label>
            <input class="input" v-model="partno" @input="onSearchTextChange" />
    
        <label class="label">Material Group </label>
            <select  class="input" v-model="selectedMtgrp">
                <option value="">-- ALL --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{ mtgr.mtgrp }}</option>
            </select>


        <label class="label">Material Status: </label>
            <select  class="input" v-model="selectedMtgrp">
                <option value="">-- ALL --</option>
                <option v-for="mtstatus in mtgrplist" :value="mtstatus.mtsts" :key="mtstatus.mtsts">{{mtstatus.mtsts  }}</option>
            </select>


        <label class="label">Feeder </label>
            <select  class="input" style="width:200px;" v-model="selectedMtgrp">
                <option value="">-- ALL --</option>
                <option v-for="mtstatus in mtgrplist" :value="mtstatus.mtsts" :key="mtstatus.mtsts">{{mtstatus.mtsts  }}</option>
            </select>
        </div>   

        <div class="search"  >
        <label class="label">Part Name </label>
        <input  class="input" style="width:300px;" v-model="partno" @input="onSearchTextChange" />

        <label  class="label">Vend Code </label>
            <select  class="input" v-model="selectedMtgrp">
                <option value="">-- ALL --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{ mtgr.mtgrp }}</option>
            </select>


        <label class="label">Location </label>
            <select class="input"  v-model="selectedMtgrp">
                <option value="">-- ALL --</option>
                <option v-for="mtgr in mtgrplist" :value="mtgr.mtgrp" :key="mtgr.mtgrp">{{  }}</option>
            </select> -->

    <slot></slot>
            </div>  
    
    
    
    </div>
    
    <div>
      <grid :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.myTheme"
      @check="onCheck" @uncheck="onUnCheck" :rowHeaders="gridProps.rowHeaders"
      :columnOptions="gridProps.columnOptions"></grid>
    </div>
    </div>
    </template>
    <script>
    import 'tui-grid/dist/tui-grid.css';
    import 'tui-pagination/dist/tui-pagination.css';
    import { Grid } from '@toast-ui/vue-grid';
    import { fetchSmempList } from '@/api/index.js';
    export default {
    components: {
    grid: Grid
    },
    created() {
    
    this.$store.dispatch('FETCH_SMEMP');
    console.log('1',this.$store.state.empGrid_list);
    
    this.gridProps = {
      data: this.$store.state.empGrid_list,
 
      rowHeaders: ['rowNum'],
            columnOptions: {
                resizable: true,
                // frozenCount: 1,
            },      
      columns: [
        // for columnData prop
    {
        header: 'EMP_NO',
        name: 'emp_no',
        // filter: { type: 'text', showApplyBtn: true, showClearBtn: true }
      },
      {
        header: 'EMP_ENG_NM',
        name: 'emp_eng_nm',
        width: '200',
      },
      {
        header: 'Name',
        name: 'authority',
        // filter: 'select',
        // renderer: {
        //   styles: {textAlign: 'center'}
        // }
      },
      {
        header: 'Tel_No1',
        name: 'tel_no1',
        // filter: 'select',
        // renderer: {
        //   styles: {textAlign: 'center'}
        // }
      },
      {
        header: 'Tel_No2',
        name: 'tel_no2',
        renderer: {
          styles: {textAlign: 'center'}
        }
      },
      {
        header: 'Address',
        name: 'address'
      },
    //   {
    //     header: 'Repack Qty ',
    //     name: 'dungfg'
    //   },
    //   {
    //     header: 'FC',
    //     name: 'updtdt',
    //     // sortable: true,
    //   },
    //   {
    //     header: 'Auto.Repack',
    //     name: 'splarea'
    //   },
    //   {
    //     header: 'Feeding Unit ',
    //     name: 'glvarea'
    //   },
    //   {
    //     header: 'Loc.No',
    //     name: 'roundval'
    //   },
    //   {
    //     header: 'W/Station',
    //     name: 'roundval'
    //   },
    //   {
    //     header: 'Vendor',
    //     name: 'roundval'
    //   }
      ],
      myTheme: {
                name: 'myTheme',
                value: {
                  cell: {
                    header: {
                      background: '#d0e0e0'
                    },
                    evenRow: {
                      background: '#fff'
                    }
                  },
                },
            },
            // options: {
            //     rowHeaders: ['checkbox'],
            // },
    };
    },
    
    methods: {
        onCheck(ev) {
            console.log('check event: ', ev);
        },
        onUnCheck(ev) {
            console.log('uncheck event: ', ev);
        },
    
        onSearchTextChange() {
        fetchSmempList(this.vend_type)
          .then(({ empGridList }) => {
            this.results = empGridList;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    
    },  
    
    };
    
    </script>
    
    <style>
    @import 'https://uicdn.toast.com/tui-grid/latest/tui-grid.css';
    
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