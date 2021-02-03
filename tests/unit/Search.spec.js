import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";

import Vue from "vue";
import sinon from "sinon";

import Search from "../../src/components/Search";

describe("Search.vue", () => {
  it("Should render Search.vue correctly", () => {
    //arrange
    const wrapper = shallowMount(Search);

    //assert
    expect(wrapper.find(".search-header").exists()).equal(true);
    expect(wrapper.find(".search-box").exists()).equal(true);
    expect(wrapper.find(".search-form").exists()).equal(true);
    expect(wrapper.find(".icon").exists()).equal(true);
    expect(wrapper.find("iconsearch-stub").exists()).equal(true);
    expect(wrapper.find("input").exists()).equal(true);
    expect(wrapper.find(".warning").exists()).equal(false);
  });

  it("Should be instantiated", () => {
    //arrange
    const container = document.createElement("div");
    const SearchComponent = Vue.extend(Search);
    const vm = new SearchComponent();

    //act
    vm.$mount(container);

    //assert
    expect(vm.tempDomain).to.equal("");
  });

  it("Should not appear when data is not entered", () => {
    //arrange
    const container = document.createElement("div");
    const SearchComponent = Vue.extend(Search);
    const vm = new SearchComponent();

    //act
    vm.$mount(container);

    //assert
    expect(vm.isEmpty).to.equal(false);
  });

  it("Should emit an event when enter button is click", () => {
    //arrange
    const wrapper = shallowMount(Search);
    const spy = sinon.spy(wrapper.vm, "$emit");
    const input = wrapper.find("input");

    //act
    wrapper.vm.tempDomain = "trendyol.com";
    input.trigger("keyup.enter");

    //assert
    expect(spy.called).equal(true);
  });
});
