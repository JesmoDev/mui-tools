import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./router";
import { Route } from "./router";

@customElement("mui-app")
export class MuiAppElement extends LitElement {
  #routes: Route[] = [
    { path: "", component: "./apps/home.page.ts", elementName: "mui-home" },
    { path: "/wow-stats", component: "./apps/wow-stats-calculator/wow-stats.page.ts", elementName: "mui-wow-stats" },
  ];

  render() {
    return html`
      <nav>
        <a href="/wow-stats">WOW Stats</a>
        <a href="/">Home</a>
      </nav>

      <mui-router .routes=${this.#routes}></mui-router>
    `;
  }

  static styles = css`
    nav {
      display: flex;
      gap: 1rem;
      border-bottom: 1px solid black;
    }

    a {
      text-decoration: none;
      color: blue;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-app": MuiAppElement;
  }
}
