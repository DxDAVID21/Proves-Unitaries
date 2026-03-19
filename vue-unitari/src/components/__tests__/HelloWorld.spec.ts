import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";
import TheFormVue from "../TheForm.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});

function mountForm() {
  const wrapper = mount(TheFormVue, { props: {} });
  return wrapper;
}

describe("The Form", () => {
  it("Mounts properly", () => {
    expect(mountForm()).toBeTruthy();

    expect(mountForm().text()).toContain("Submit");
  });

  it("Click the submit button", async () => {
    const form = mountForm().find("form");

    const spyOnForm = vi.spyOn(form, "trigger");
    await form.trigger("click");

    expect(spyOnForm).toHaveBeenCalledOnce;
  });
  it("Renders th input value", async () => {
    const input = mountForm().find("input");

    expect(input.text()).toContain("");

    await input.setValue("siseñor@gmail.com");

    expect(input.element.value).toEqual("siseñor@gmail.com");
  });
});
