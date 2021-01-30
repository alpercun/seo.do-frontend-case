<template>
  <div>
    <h1 class="search-header">Enter the domain you want to search</h1>
    <form class="search-form">
      <div class="icon">
        <IconSearch />
      </div>
      <input
        type="text"
        placeholder="Search domain"
      />
    </form>
  </div>
</template>

<script>
import IconSearch from "../assets/search.svg";
export default {
  components: {
    IconSearch,
  },
};
</script>

<style lang="scss">
.search-header {
  color: #6b6b99;
  font-size: 30px;
  text-align: center;
}
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    position: absolute;
    top: 10px;
    margin-left: 270px;
    height: 108px;
    width: 70px;
    color: #9999cc;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  input {
    width: 200px;
    height: 42px;
    border: 1px solid #dfe8ed;
    border-radius: 4px;
    padding: 0 42px 0 12px;
    color: #6b6b99;
    font-size: 16px;
    transition: 0.4s;
    &::placeholder {
      color: #dfe8ed;
    }
  }
  input:focus {
    outline: 0;
    box-shadow: -7px 7px 12px -6px rgba(107, 107, 153, 0.55);
    -webkit-box-shadow: -7px 7px 12px -6px rgba(107, 107, 153, 0.55);
    -moz-box-shadow: -7px 7px 12px -6px rgba(107, 107, 153, 0.55);
  }
}
</style>
