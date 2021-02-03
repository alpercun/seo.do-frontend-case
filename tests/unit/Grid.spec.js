import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Grid from "../../src/components/Grid";

describe("Grid.vue", () => {
  it("Should render Grid.vue correctly", () => {
    const wrapper = shallowMount(Grid);
    expect(wrapper.find(".grid").exists()).equal(true);
    expect(wrapper.find("#app").exists()).equal(true);
    expect(wrapper.find(".header").exists()).equal(true);
    expect(wrapper.find("#ag-grid").exists()).equal(true);
  });
});
