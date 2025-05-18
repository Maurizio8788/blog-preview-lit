import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';

interface Tag {
    id: number;
    name: string;
}

@customElement('mz-card')
export class CardComponent extends LitElement {
    @property({
        type: Array<Tag>,
        attribute: false,
    })
    tags!: Tag[];

    @property()
    description!: string;

    @property()
    title!: string;

    @property()
    publishedDate!: string;

    render() {
        return html`
      <div class="card">
        <div class="card__heeader">
          <slot name="card-header"></slot>
        </div>
        <div class="card__body">
          ${when(
            this.tags.length > 0,
            () => html`
            ${repeat(
                this.tags,
                (tag) => tag.id,
                (tag) => html`
              <div class="tags">
                <mz-tag tag='${tag.name}' />
              </div>
            `
            )}
          `
        )}
            <slot name="card-body">
            ${when(
            this.publishedDate,
            () => html`
                <p class='card__body-publish-date'>Published <date>${this.publishedDate}</date></p>
              `
        )}
            <h3 class='card__body-title'>${this.title}</h3>
            <p class='card__body-preview'>
              ${this.description}
            </p>
            </slot>
        </div>
        <div class="card__footer">
          <slot name="card-footer" />
        </div>
      <div>
    `;
    }

    static styles = css`
    :host {
      max-width: 100%;
      width: auto;
      height: auto;
      padding: 2.4rem;
      border: .1rem solid var(--card-gray-950);
      display: grid;
      background-color: var(--card-white);
      border-radius: 2rem;
      filter: drop-shadow(0.8rem .8rem #000);
      font-weight: 500;
      font-size: 1.6rem;

      h3, p {
        margin: 0;
      }
    }

    .card__heeader,
    .card__body {
      margin-bottom: 2.4rem;
    }

    .card__heeader {
      ::slotted(svg){
        display: inline-block;
        border-radius: 1rem;
        width: 100%;
        height: auto;
      }
    }
    .card__body {
      width: 100%;
      display: grid;
      gap: 1.2rem;
      max-width: 33.8rem;

      .card__body-title {
        font-size: 2.4rem;
        line-height: 150%;
        color: var(--card-gray-950);
        font-weight: 800;
      }

      .card__body-publish-date {
        font-style: normal;
        font-size: 1.4rem;
        color: var(--card-gray-950);
      }

      .card__body-preview {
        font-size: 1.6rem;
        color: var(--card-gray-500);
        font-style: normal;
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
    }

    .card__footer {
      display: flex;
      align-items:center;
      gap: 1.2rem;
      max-width: 100%;
    }
  `;
}

declare global {
    interface HTMLElementTagMap {
        'mz-card': CardComponent;
    }
}
