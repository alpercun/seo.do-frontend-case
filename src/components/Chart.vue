<template>
  <div class="grid ml">
    <div id="main">
      <h1 class="header ml">SEARCH VOLUME</h1>
      <apexcharts
        id="chart"
        height="300"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexcharts>
      <button @click="updateChart">Update!</button>
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
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        colors: ["#9999CC"],
        dataLabels: {
          style: {
            colors: ["#9999CC"],
          },
        },
        title: {
          text: "lorem ipsum dolar sit amet",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "regular",
            fontFamily: "Barlow, sans-serif",
            color: "#6B6B99",
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
      series: [
        {
          name: "series-1",
          data: [80, 150, 105, 150, 109, 50, 70, 90, 30, 40, 60, 80],
        },
      ],
    };
  },
  methods: {
    updateChart() {
      axios
        .post(process.env.VUE_APP_ITEM_API, {
          country: "tr",
          lang: "tr",
          keyword: "ankara",
        })
        .then(({ data }) => {
          console.log(typeof data);
          this.series = [...this.series, { data: data.map((o) => o.volume) }];
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
  width: 1142px;
  height: 566px;
}
</style>
