<template>
  <div>
    <grid></grid>
  </div>
</template>

<script>
import Grid from './components/Grid'

export default {
  components: {
    'grid':Grid,
  }
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
