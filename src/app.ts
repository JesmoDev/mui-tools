import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./router";
import { Route } from "./router";
import { MUIComponent } from "./component";

@customElement("mui-app")
export class MuiAppElement extends MUIComponent {
  #routes: Route[] = [
    { path: "", component: "./apps/home.page.ts", elementName: "mui-home" },
    { path: "/wow-stats", component: "./apps/wow-stats-calculator/wow-stats.page.ts", elementName: "mui-wow-stats" },
  ];

  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/wow-stats">WOW Stats</a>
      </nav>

      <mui-router .routes=${this.#routes}></mui-router>
    `;
  }

  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    nav {
      display: flex;
      gap: 1rem;
      background-color: #121212;
      border-bottom: 1px solid #121212;
      padding: 0.5rem 1rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-app": MuiAppElement;
  }
}
