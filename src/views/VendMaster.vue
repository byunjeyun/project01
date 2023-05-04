<template>
  <div>
    <div>
      <button @click="onDelete">Delete</button>
    </div>
    <div>
      <div class="search">
        <label class="label">Vendor Type </label>
        <select class="input" v-model="selectedMtgrp">
          <option value="">-- ALL --</option>
          <option
            v-for="vtyps in vtypcombo"
            :value="vtyps.MSC_DESC"
            :key="vtyps.MSC_DESC"
          >
            {{ vtyps.MSC_DESC}}
          </option>
        </select>

        <label class="label">Vend Cd </label>
        <select class="input" v-model="selectedMtgrp">
          <option value="">-- ALL --</option>
          <option
            v-for="vendcd in vendcombo"
            :value="vendcd.VEND_CD"
            :key="vendcd.VEND_CD"
          >
            {{ vendcd.VEND_CD }}
          </option>
        </select>

        <label class="label">Name </label>
        <input class="input" v-model="vend_name" @input="onSearchTextChange" />
        <slot></slot>
      </div>
    </div>

    <div>
      <grid
        ref="grid"
        :data="gridProps.data"
        :columns="gridProps.columns"
        :options="{}"
        :theme="gridProps.myTheme"
        @check="onCheck"
        @uncheck="onUnCheck"
        :rowHeaders="gridProps.rowHeaders"
        :columnOptions="gridProps.columnOptions"
        :paging="gridProps.paging"
        :pageOptions="gridProps.pageOption"
        :method="gridProps.method"
        :summary="gridProps.summary"
        :compute="this.compute"
      ></grid>
    </div>
  </div>
</template>

<script>
import "tui-grid/dist/tui-grid.css";
import "tui-pagination/dist/tui-pagination.css";
import { Grid } from "@toast-ui/vue-grid";
import { fetchVendmstList, fetchVendmstDelete} from "@/api/index.js";
import {mapState} from 'vuex'

export default {
  components: {
    grid: Grid,
  },
  computed: mapState({
    vendcombo: state => state.vendcombo,
    vtypcombo: state => state.vtypcombo,
  }),
  
  created() {
    this.$store.dispatch("FETCH_VENDMST");
    this.$store.dispatch("FETCH_VENDMSTSM");
    this.$store.dispatch("FETCH_VTYPCOMBOLIST");
    console.log("1", this.$store.state.items);
    console.log("combo", this.$store.state.combos);
    this.gridProps = {
      data: this.$store.state.items,
      vendComboList: this.$store.state.combos,
      compute:this.compute,
      vend_type: "",
      VEND_CD: "",
      selectedVendName: "",
      selectedVendCd: "",
      rowHeaders: ["rowNum", "checkbox"],
      columnOptions: {
        resizable: true,
      },
      columns: [
        {
          header: "Type",
          name: "VEND_TYPE",
        },
        {
          header: "VEND_CD",
          name: "VEND_CD",
          width: "200",
        },
        {
          header: "Name",
          name: "VEND_NAME",
        },
        {
          header: "TEL_NO1",
          name: "TEL_NO1",
        },
        {
          header: "TEL_NO2",
          name: "TEL_NO2",
          renderer: {
            styles: { textAlign: "center" },
          },
        },
        {
          header: "Address",
          name: "ADDRESS",
        },
      ],
      paging: true, // 페이징 처리를 위한 옵션 추가
      pageOption: {
        perPage: 14,
        useClient: true,
      },
      summary: {
        height: 40,
        position: "bottom", // or 'top'
        columnContent: {
          TEL_NO1: {
            template: function (valueMap) {
              return `MAX: ${valueMap.max}<br>MIN: ${valueMap.min}`;
            },
          },
          TEL_NO2: {
            template: function (valueMap) {
              return `TOTAL: ${valueMap.sum} <br>AVG: ${valueMap.avg.toFixed(
                2
              )}`;
            },
          },
        },
      },
      myTheme: {
        name: "myTheme",
        value: {
          cell: {
            header: {
              background: "#d0e0e0",
            },
            evenRow: {
              background: "#fff",
            },
          },
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.grid) {
        this.$refs.grid.getCheckedRows = () => {};
      }
    });
  },
  methods: {
    onCheck(e) {
    console.log(this.$refs.grid); // check if this.$refs.grid is returning the expected value
    
    const checkedRows = this.$refs.grid.invoke('getCheckedRows');
    this.selectedVendCd = checkedRows.map(row => row.VEND_CD);
    console.log(e, checkedRows); // log the vendName value to confirm it is retrieved successfully
  
    },
    onUnCheck(ev) {
      console.log("uncheck event: ", ev);
    },
    onDelete() {
        fetchVendmstDelete(this.selectedVendCd)
          .then((items) => {
            console.log("Deleted:", items);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      
      console.log(this.selectedVendCd);
    },
    onSearchTextChange() {
      fetchVendmstList(this.vend_name)
        .then(({ items }) => {
          this.results = items;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
@import "https://uicdn.toast.com/tui-grid/latest/tui-grid.css";

.search {
  background-color: #216e9f;
  color: white;
  height: 30px;
  padding: 3px;
  margin-bottom: 1px;
}

.label {
  margin-right: 3px;
}

.input {
  margin-right: 10px;
}
</style>
