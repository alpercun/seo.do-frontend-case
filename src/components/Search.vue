<template>
  <div>
    <h1 class="search-header">Enter the domain you want to search</h1>
    <div class="search-box">
      <div class="search-form">
        <div class="icon">
          <IconSearch />
        </div>
        <input
          placeholder="Search domain"
          v-model="tempDomain"
          @keyup.enter="submit"
        />
      </div>
    </div>
    <p class="warning" v-if="isEmpty">Please enter valid domain address in the field.</p>
  </div>
</template>

<script>
import IconSearch from "../assets/search.svg";
export default {
  components: {
    IconSearch,
  },
  data: function() {
    return {
      tempDomain: "",
      isEmpty: false,
    };
  },
  methods: {
    submit: function() {
      if (this.tempDomain !== "") {
        this.$emit("inputData", this.tempDomain);
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    },
  },
};
</script>

<style lang="scss">
.search-header {
  color: #6b6b99;
  font-size: 30px;
  text-align: center;
}

.warning {
  color: #ff4d79;
  text-align: center;
}

.search-box {
  display: flex;
  justify-content: center;
  .search-form {
    display: flex;
    align-items: center;
    position: relative;
    .icon {
      position: absolute;
      top: 12px;
      margin-left: 8px;
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
      padding: 0 20px 0 42px;
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
}

@media screen and (max-width: 767px) {
  .search-box {
    display: unset;
    .search-form {
      margin-left: 50px;
      input {
        width: 81.5%;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .search-box {
    .search-form {
      margin-left: 40px;
      input {
        width: 79%;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .search-box {
    .search-form {
      margin-left: 32px;
      input {
        width: 76%;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .search-box {
    .search-form {
      margin-left: 30px;
      input {
        width: 74%;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .search-box {
    .search-form {
      margin-left: 28px;
      input {
        width: 72%;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .search-box {
    .search-form {
      margin-left: 26px;
      input {
        width: 72%;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .search-box {
    .search-form {
      margin-left: 22px;
      input {
        width: 69%;
      }
    }
  }
}
</style>
