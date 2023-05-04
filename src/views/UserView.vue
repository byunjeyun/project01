<template>
  <grid
    :data="gridProps.data"
    :columns="gridProps.columns"
    :options="gridProps.options"
    :theme="gridProps.myTheme"
    @check="onCheck"
    @uncheck="onUnCheck"
    :rowHeaders="gridProps.rowHeaders"
    :columnOptions="gridProps.columnOptions"
  ></grid>
</template>
<script>
import "tui-grid/dist/tui-grid.css";
import "tui-pagination/dist/tui-pagination.css";
import { Grid } from "@toast-ui/vue-grid";
export default {
  components: {
    grid: Grid,
  },
  created() {
    this.$store.dispatch("FETCH_USER");
    console.log("1", this.$store.state.user);

    this.gridProps = {
      data: this.$store.state.user,
      rowHeaders: ["checkbox", "rowNum"],
      columnOptions: {
        resizable: true,
        frozenCount: 1,
      },
      columns: [
        // for columnData prop
        {
          header: "ID",
          name: "id",
        },
        {
          header: "제목",
          name: "title",
        },
        {
          header: "포인트",
          name: "points",
          onBeforeChange(ev) {
            console.log("executes before the value changes : ", ev);
          },
          onAfterChange(ev) {
            console.log("executes after the value has changed : ", ev);
          },
          copyOptions: {
            useListItemText: true,
          },
          formatter: "listItemText",
          editor: {
            type: "radio",
            options: {
              listItems: [
                {
                  text: "★☆☆☆☆",
                  value: "1",
                },
                {
                  text: "★★☆☆☆",
                  value: "2",
                },
                {
                  text: "★★★☆☆",
                  value: "3",
                },
                {
                  text: "★★★★☆",
                  value: "4",
                },
                {
                  text: "★★★★★",
                  value: "5",
                },
              ],
            },
          },
        },
        {
          header: "user",
          name: "user",
        },
        {
          header: "time",
          name: "time",
        },
        {
          header: "time_ago",
          name: "time_ago",
        },
        {
          header: "comments_count",
          name: "comments_count",
        },
        {
          header: "type",
          name: "type",
        },
        {
          header: "URL",
          name: "url",
        },
        {
          header: "domain",
          name: "domain",
        },
      ],
      myTheme: {
        name: "myTheme",
        value: {
          cell: {
            normal: {
              background: "#FFFFFF",
              border: "#e0e0e0",
            },
            header: {
              background: "##EAEAEA",
              border: "#8C8C8C",
            },
            editable: {
              background: "#fbfbfb",
            },
          },
        },
      },
      options: {
        rowHeaders: ["checkbox"],
      },
    };
  },

  methods: {
    onCheck(ev) {
      console.log("check event: ", ev);
    },
    onUnCheck(ev) {
      console.log("uncheck event: ", ev);
    },
  },
};
</script>

<style>
@import "https://uicdn.toast.com/tui-grid/latest/tui-grid.css";
</style>
