import { LitElement, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

export type Route = {
  path: string;
  component: Function;
  elementName: string;
};

@customElement("mui-router")
export class MuiRouterElement extends LitElement {
  @property({ type: Array }) routes: Route[] = [];

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.#init();
  }

  async #init() {
    const currentPath = window.location.pathname;
    const matchedRoute = this.routes.find((route) => route.path === currentPath) || this.routes.find((route) => route.path === "");

    if (!matchedRoute) {
      return;
    }

    await matchedRoute.component();

    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(document.createElement(matchedRoute.elementName));
  }

  render() {
    return nothing;
  }

  static styles = css`
    :host {
      height: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-router": MuiRouterElement;
  }
}
