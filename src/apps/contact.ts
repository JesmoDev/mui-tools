import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mui-contact")
export class MuiContactElement extends LitElement {
  render() {
    return html`CONTACT HERE`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-contact": MuiContactElement;
  }
}
