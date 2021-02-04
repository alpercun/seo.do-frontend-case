<template>
  <div class="grid ml">
    <div id="main">
      <h1 class="header ml">SEARCH VOLUME</h1>
      <p v-if="selectedKeyword" class="chart-header">
        Last added: {{ selectedKeyword }}
      </p>
      <apexcharts
        id="chart"
        height="300"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexcharts>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    selectedKeyword: String,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        colors: ["#9999CC", "#7F7FA9", "#636383", "#45455D"],
        dataLabels: {
          style: {
            colors: ["#9999CC"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            style: {
              colors: "#6B6B99",
              fontSize: "12px",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#6B6B99",
              fontSize: "12px",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
      },
      series: [],
    };
  },
  watch: {
    selectedKeyword: function() {
      axios
        .post(process.env.VUE_APP_ITEM_API, {
          country: "tr",
          lang: "tr",
          keyword: this.selectedKeyword,
        })
        .then(({ data }) => {
          this.series = [
            ...this.series,
            {
              name: this.selectedKeyword,
              data: data.map((mounth) => mounth.volume),
            },
          ];
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss">
#chart {
  display: flex;
  justify-content: center;
  max-width: 760px;
  padding-left: 8px;
}

.ml {
  font-size: 24px;
}

#main {
  width: 1260px;
  height: 566px;
}

.chart-header {
  color: #6b6b99;
  font-size: 14px;
  margin-left: 28px;
  padding-top: 20px;
}

@media screen and (max-width: 1280px) {
  #chart {
    max-width: 100%;
  }
  .header {
    margin-left: 24px;
  }

  #main {
    width: 86%;
    height: 566px;
  }
}
</style>
