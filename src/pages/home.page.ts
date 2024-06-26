import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { MUIComponent } from "../component";

@customElement("mui-home")
export class MuiHomeElement extends MUIComponent {
  render() {
    return html`
      <h1>This is a collection of small tools</h1>
      <ul>
        <li><a href="wow-stats">WoW Stats Calculator</a></li>
      </ul>
    `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-home": MuiHomeElement;
  }
}
