<template>
  <div class="grid">
    <div id="app">
      <h1 class="header">Zeo Interview</h1>
      <ag-grid-vue
        style="width: 100%; height: 516px"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
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
      paginationPageSize: null,
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.paginationPageSize = 10;
    this.columnDefs = [
      {
        headerName: "KEYWORDS",
        field: "keywords",
        sortable: true,
        filter: true,
        width: 230,
      },
      {
        headerName: "SEARCH VOLUME",
        field: "volume",
        sortable: true,
        filter: true,
        width: 170,
      },
      {
        headerName: "RANK",
        field: "rank",
        sortable: true,
        filter: true,
        width: 99,
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
        width: 120,
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
        keywords: "abbas",
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
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap");

* {
  font-family: "Barlow", sans-serif;
}

::-webkit-scrollbar {
  display: none;
}

body {
  background-color: #f7f7fc;
}

.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

#app {
  background-color: #ffffff;
  padding-top: 10px;
  width: 1142px;
  height: 566px;
  border-radius: 6px;
}

.header {
  color: #6b6b99;
  margin-left: 18px;
}

.ag-theme-alpine {
  .ag-header {
    background-color: #fcfcff;
  }
}

.ag-header-group-cell-label,
.ag-header-cell-label {
  font-size: 12px;
  font-weight: 600;
  color: #9999cc;
}

.ag-cell-label-container {
  .ag-header-cell-sorted-none {
    padding: -5px;
  }
}

.ag-theme-alpine {
  .ag-root-wrapper {
    border: unset;
  }
}

.ag-theme-alpine {
  box-sizing: unset;
  .ag-row {
    border-bottom: 1px solid #f6f6f7;
  }
}

.ag-cell-value,
.ag-group-value {
  overflow: unset;
}

.ag-body-viewport [col-id="keywords"],
.ag-body-viewport [col-id="volume"],
.ag-body-viewport [col-id="rank"],
.ag-body-viewport [col-id="beforeChange"],
.ag-body-viewport [col-id="pxrank"],
.ag-body-viewport [col-id="afterChange"],
.ag-body-viewport [col-id="url"],
.ag-body-viewport [col-id="cpc"] {
  font-family: "Barlow", sans-serif;
  color: #6b6b99;
}

.ag-body-viewport .rowData:hover {
  background-color: red;
}

.ag-body-viewport [col-id="beforeChange"],
.ag-body-viewport [col-id="afterChange"] {
  background-color: #ecfcf7;
  width: 50px !important;
  height: 36px;
  margin: 2px 0 0 18px;
  padding-top: -5px;
  border-radius: 4px;
  text-align: center;
  color: #21d99b;
}

.ag-body-viewport [col-id="keywords"] {
  border-right: 1px solid #e3e3fc !important;
}

.ag-body-viewport [col-id="afterChange"] {
  background-color: #fff0f4;
  color: #ff4d79;
}

.ag-body-viewport [col-id="url"] {
  color: #7373ff;
}

.ag-paging-row-summary-panel {
  font-weight: 300;
  font-size: 14px;
}

.ag-icon {
  color: #9999cc;
  border: 1px solid #e3e3fc;
  border-radius: 4px;
  padding: 5px;
}

.ag-icon-first,
.ag-icon-last {
  display: none;
}

.ag-paging-description,
.ag-paging-row-summary-panel {
  color: #6b6b99;
}

#ag-4-start-page,
#ag-4-of-page,
#ag-4-of-page-number {
  display: none;
}

#ag-4-start-page-number {
  border: 1px solid #e3e3fc;
  padding: 4.5px 10px 4.5px 10px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
}

.ag-theme-alpine.ag-paging-panel::before {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.ag-theme-alpine .ag-paging-panel {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

@media screen and (max-width: 1100px) {
  #app {
    width: 85%;
  }
}
</style>
