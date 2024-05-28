import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mui-home")
export class MuiHomeElement extends LitElement {
  render() {
    return html`I AM HOME <a href="/contact">Contact</a>`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-home": MuiHomeElement;
  }
}
