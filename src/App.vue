<template>
  <div class="grid">
    <div id="app">
      <h1 class="header">Zeo Interview</h1>
      <ag-grid-vue
        style="width: 100%; height: 500px"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
      ></ag-grid-vue>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "KEYWORDS",
        field: "keywords",
        sortable: true,
        filter: true,
        width: 200,
      },
      {
        headerName: "SEARCH VOLUME",
        field: "volume",
        sortable: true,
        filter: true,
        width: 160,
      },
      {
        headerName: "RANK",
        field: "rank",
        sortable: true,
        filter: true,
        width: 90,
      },
      {
        headerName: "CHANGE",
        field: "beforeChange",
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        headerName: "PX RANK",
        field: "pxrank",
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        headerName: "CHANGE",
        field: "afterChange",
        sortable: true,
        filter: true,
        width: 105,
      },
      {
        headerName: "URL-PAGE",
        field: "url",
        sortable: true,
        filter: true,
        width: 210,
      },
      {
        headerName: "CPC - $",
        field: "cpc",
        sortable: true,
        filter: true,
        width: 120,
      },
    ];
    this.rowData = [
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
      {
        keywords: "lorem ipsum dolar sit amet",
        volume: "444.4k",
        rank: "44",
        beforeChange: "44",
        pxrank: "44.4k",
        afterChange: "44",
        url: "/lorem-ipsum-dolar-sit-amet",
        cpc: "44.44",
      },
    ];
  },
};
</script>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
