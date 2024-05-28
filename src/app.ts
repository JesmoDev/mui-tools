import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./router";
import { Route } from "./router";

@customElement("mui-app")
export class MuiAppElement extends LitElement {
  #routes: Route[] = [
    { path: "", component: "./apps/home.ts", elementName: "mui-home" },
    { path: "/about", component: "./apps/about.ts", elementName: "mui-about" },
    { path: "/contact", component: "./apps/contact.ts", elementName: "mui-contact" },
  ];

  render() {
    return html`
      <a href="/something">Something</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>

      <mui-router .routes=${this.#routes}></mui-router>
    `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-app": MuiAppElement;
  }
}
