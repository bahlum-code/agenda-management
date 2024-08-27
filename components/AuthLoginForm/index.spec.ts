import { describe, it, beforeEach, vi, expect} from "vitest";
import { defineComponent } from 'vue';
import { render, fireEvent, screen } from "@testing-library/vue";
import type { Pinia} from "pinia";
import { createPinia, setActivePinia } from "pinia";
import '@testing-library/jest-dom';

import AuthLoginForm from "./index.vue";

// Mock NuxtLink if used in YourComponent
const NuxtLink = defineComponent({
  name: 'NuxtLink',
  template: '<a><slot /></a>',
});

vi.mock("axios", () => {
  return {
    default: {
      post: () =>
        Promise.resolve({
          data: {
            username: "Gonzalo",
            password: "this-is-the-password",
          },
        }),
    },
  };
});


describe("AuthLoginForm", () => {
  let pinia: Pinia;

   beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
  });

  it("successfully authenticates", async () => {
     const { container } = render(AuthLoginForm, {
      global: {
        plugins: [pinia],
        components: {
          NuxtLink,
        },
      }
    });


    await fireEvent.update(
      container.querySelector("#email")!,
      "Gonzalo"
    );

     await fireEvent.update(
      container.querySelector("#password")!,
      "secret-password"
    );

    const button = screen.getByRole('button', { name: 'Sign in'});
    await fireEvent.click(button);
    // const role = await screen.getByRole('alert-success', { name: 'Welcome Gonzalo'});
    // await expect(role).toBe('Welcome Gonzalo');
    await screen.findByText("Welcome Gonzalo");
    //const welcomeMessage = container.querySelector("#welcome-message");
  });

});