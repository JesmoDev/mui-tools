import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { MUIComponent } from "../../component";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("mui-wow-stats")
export class MuiWowStatsElement extends MUIComponent {
  @state()
  rating?: number;

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

  get #rating(): number {
    if (!this.rating) return 0;
    return Number.isNaN(this.rating) ? 0 : this.rating;
  }

  render() {
    return html`
      <div id="main">
        <h1>WoW secondary stats calculator (Dragonflight)</h1>
        <input autofocus type="number" id="rating-input" value=${ifDefined(this.rating)} @input=${(e: Event) => (this.rating = parseInt((e.target as HTMLInputElement).value))} />
        <div id="stats">
          <div class="stat">
            <p>Haste</p>
            <p>${this.#ratingToPercent(this.#rating, this.#hasteRatingPerPercent).toFixed(2)}<span class="stat-percent-symbol">%</span></p>
          </div>
          <div class="stat">
            <p>Crit</p>
            <p>${this.#ratingToPercent(this.#rating, this.#critRatingPerPercent).toFixed(2)}<span class="stat-percent-symbol">%</span></p>
          </div>
          <div class="stat">
            <p>Versatility</p>
            <p>${this.#ratingToPercent(this.#rating, this.#versaRatingPerPercent).toFixed(2)}<span class="stat-percent-symbol">%</span></p>
          </div>
          <!-- <div class="stat">
            <p>Mastery</p>
            <p>Mastery is different for every class, need more data</p>
          </div> -->
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      height: 100%;
      background-color: #232323;
      color: #d8d8d8;

      --border-radius: 0.25rem;
    }
    h1 {
      text-align: center;
    }
    #main {
      max-width: 800px;
      margin-inline: auto;
      margin-top: min(4rem, 10dvh);
      padding: 24px;
    }
    #rating-input {
      margin-top: 2rem;
      width: 100%;
      padding-block: 0.5rem;
      font-size: 1.5rem;
      text-align: center;
      color: #d8d8d8;
      border: 1px solid #ffffff25;
      background: none;
      border-radius: var(--border-radius);
      outline: none;
    }
    #stats {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
    }
    .stat {
      background-color: #ffffff25;
      padding-block: 1rem;
      text-align: center;
      border-radius: var(--border-radius);
    }
    .stat p + p {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .stat-percent-symbol {
      font-size: 1rem;
      margin-left: 0.1rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-wow-stats": MuiWowStatsElement;
  }
}
