import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("mui-wow-stats")
export class MuiWowStatsElement extends LitElement {
  @state()
  rating = 0;

  #hasteRatingPerPercent = 170;
  #critRatingPerPercent = 180;
  #masteryRatingPerPercent = 24;
  #versaRatingPerPercent = 205;

  #ratingToPercent(rating: number, ratingPerPercent: number) {
    // Calculate the initial percentage without penalties
    let initialPercent = rating / ratingPerPercent;
    let percent = 0;

    // Apply diminishing returns based on the specified ranges
    if (initialPercent > 66) {
      percent += (initialPercent - 66) * 0.5;
      initialPercent = 66;
    }
    if (initialPercent > 54) {
      percent += (initialPercent - 54) * 0.6;
      initialPercent = 54;
    }
    if (initialPercent > 47) {
      percent += (initialPercent - 47) * 0.7;
      initialPercent = 47;
    }
    if (initialPercent > 39) {
      percent += (initialPercent - 39) * 0.8;
      initialPercent = 39;
    }
    if (initialPercent > 30) {
      percent += (initialPercent - 30) * 0.9;
      initialPercent = 30;
    }
    percent += initialPercent;

    return percent;
  }

  render() {
    return html`
      <h1>WoW secondary stats calculator (Dragonflight)</h1>
      <div>
        <label for="rating">Rating</label>
        <input type="number" id="rating" value=${this.rating} @input=${(e: Event) => (this.rating = parseInt((e.target as HTMLInputElement).value))} />
      </div>
      <div>
        <h2>Haste</h2>
        <p>${this.#ratingToPercent(this.rating, this.#hasteRatingPerPercent).toFixed(2)}%</p>

        <h2>Crit</h2>
        <p>${this.#ratingToPercent(this.rating, this.#critRatingPerPercent).toFixed(2)}%</p>

        <h2>Versatility</h2>
        <p>${this.#ratingToPercent(this.rating, this.#versaRatingPerPercent).toFixed(2)}%</p>
        <h2>Mastery</h2>
        <p>Mastery is different for every class, need more data</p>
      </div>
    `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-wow-stats": MuiWowStatsElement;
  }
}
