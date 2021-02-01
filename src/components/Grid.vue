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
        @rowClicked="onRowClicked"
      ></ag-grid-vue>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import axios from "axios";

export default {
  components: {
    AgGridVue,
  },
  props: {
    domainName: {
      type: String,
    },
  },
  data: function() {
    return {
      columnDefs: null,
      rowData: null,
      paginationPageSize: null,
      domain: "trendyol.com",
    };
  },
  methods: {
    onRowClicked(params) {
      this.changeKeyword(params.node.data.keyword);
    },
    changeKeyword(keyword) {
      this.$emit("keywordWasEdited", keyword);
    },
  },
  watch: {
    domainName: function() {
      this.domain = this.domainName;
      axios
        .post(process.env.VUE_APP_LIST_API, {
          firstDate: "2020-02-25",
          lastDate: "2020-02-20",
          domain: this.domain,
          limit: "100",
          page: 1,
        })
        .then(({ data }) => {
          this.rowData = data;
        })
        .catch((e) => console.log(e));
    },
  },
  beforeMount() {
    this.paginationPageSize = 20;
    this.columnDefs = [
      {
        headerName: "KEYWORDS",
        field: "keyword",
        sortable: true,
        filter: true,
        width: 230,
      },
      {
        headerName: "SEARCH VOLUME",
        field: "avgSearchVolume",
        sortable: true,
        filter: true,
        width: 170,
      },
      {
        headerName: "RANK",
        field: "rank",
        valueFormatter: '"⭑ " + value.toLocaleString()',
        sortable: true,
        filter: true,
        width: 99,
      },
      {
        headerName: "CHANGE",
        field: "diffRank",
        valueFormatter: (params) =>
          params.value > 0
            ? `${"+" + params.value.toLocaleString()}`
            : `${params.value.toLocaleString()}`,
        sortable: true,
        filter: true,
        width: 120,
        cellStyle: (params) =>
          params.value == 0
            ? { background: "white", color: "#6b6b99" }
            : params.value > 0
            ? { background: "#ecfcf7", color: "#21d99b" }
            : { background: "#fff0f4", color: "#ff4d79" },
      },
      {
        headerName: "PX RANK",
        field: "pixelRank",
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        headerName: "CHANGE",
        field: "diffPixelRank",
        valueFormatter: (params) =>
          params.value > 0
            ? `${"+" + params.value.toLocaleString() + "%"}`
            : `${params.value.toLocaleString() + "%"}`,
        sortable: true,
        filter: true,
        width: 120,
        cellStyle: (params) =>
          params.value == 0
            ? { background: "white", color: "#6b6b99" }
            : params.value > 0
            ? { background: "#ecfcf7", color: "#21d99b" }
            : { background: "#fff0f4", color: "#ff4d79" },
      },
      {
        headerName: "URL-PAGE",
        field: "landingPage",
        sortable: true,
        filter: true,
        width: 210,
      },
      {
        headerName: "CPC - $",
        field: "cpc",
        sortable: true,
        filter: true,
        width: 180,
      },
    ];
    axios
      .post(process.env.VUE_APP_LIST_API, {
        firstDate: "2020-02-25",
        lastDate: "2020-02-20",
        domain: this.domain,
        limit: "100",
        page: 1,
      })
      .then(({ data }) => {
        this.rowData = data;
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

#app {
  background-color: #ffffff;
  padding-top: 10px;
  width: 1250px;
  height: 600px;
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
  .ag-row {
    background-color: #ffffff;
  }
  .ag-row:hover {
    background-color: #f9f9ff;
  }
}

.ag-header-group-cell-label,
.ag-header-cell-label {
  font-size: 12px;
  font-weight: 600;
  color: #9999cc;
}

.ag-theme-alpine .ag-simple-filter-body-wrapper {
  background-color: #fcfcff;
}

.ag-cell-label-container {
  .ag-header-cell-sorted-none {
    padding: -5px;
  }
}

.ag-theme-alpine,
.ag-root-wrapper {
  border: none !important;
}

.ag-theme-alpine {
  box-sizing: unset;
  .ag-row {
    border-bottom: 1px solid #f6f6f7;
  }
}

.ag-cell-value,
.ag-group-value {
  overflow: hidden;
  text-overflow: ellipsis;
}

.ag-body-viewport [col-id="keyword"],
.ag-body-viewport [col-id="avgSearchVolume"],
.ag-body-viewport [col-id="rank"],
.ag-body-viewport [col-id="pixelRank"],
.ag-body-viewport [col-id="diffRank"],
.ag-body-viewport [col-id="diffPixelRank"],
.ag-body-viewport [col-id="landingPage"],
.ag-body-viewport [col-id="cpc"] {
  color: #6b6b99;
}

.ag-body-viewport [col-id="rank"]:first-letter {
  color: #ffbf40;
}

.ag-body-viewport .rowData:hover {
  background-color: red;
}

.ag-body-viewport [col-id="diffRank"],
.ag-body-viewport [col-id="diffPixelRank"] {
  width: 89px !important;
  height: 36px;
  margin: 2px 0 0 0;
  border-radius: 4px;
  text-align: center;
}

.ag-body-viewport [col-id="diffRank"] {
  width: 70px !important;
}

.ag-body-viewport [col-id="keyword"] {
  border-right: 1px solid #e3e3fc !important;
}

.ag-body-viewport [col-id="landingPage"] {
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

@media screen and (max-width: 1100px) {
  #app {
    width: 85%;
  }
}

@media screen and (max-width: 768px) {
  #app {
    width: 85%;
  }
  .grid {
    margin-top: 30px;
  }
}
</style>
