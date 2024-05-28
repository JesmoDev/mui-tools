import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mui-about")
export class MuiAboutElement extends LitElement {
  render() {
    return html`ABOUT ME MAYBE`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-about": MuiAboutElement;
  }
}
