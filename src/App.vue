<template>
  <div>
    <Search @inputData="setDomain"> </Search>
    <Grid
      @keywordWasEdited="selectedKeyword = $event"
      :selectedKeyword="selectedKeyword"
      :domainName="domainName"
    ></Grid>
    <Chart :selectedKeyword="selectedKeyword"></Chart>
  </div>
</template>

<script>
import Grid from "./components/Grid";
import Chart from "./components/Chart";
import Search from "./components/Search";

export default {
  components: {
    Grid,
    Chart,
    Search,
  },
  data: function() {
    return {
      selectedKeyword: "",
      domainName: "",
    };
  },
  methods: {
    setDomain(variable) {
      this.domainName = variable;
    },
  },
};
</script>

<style lang="scss">
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
</style>
