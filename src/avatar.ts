import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mz-avatar')
export class Avatar extends LitElement {
    @property()
    image!: string;

    @property()
    alt!: string;

    render() {
        return html`
            <img class='avatar' src="${this.image}" alt="${this.alt}" />
        `;
    }

    static styles = css`
      .avatar {
        width: 3.2rem;
        height:3.2rem;
      }
    `;
}

declare global {
    interface HTMLElementTagMap {
        'mz-avatar': Avatar;
    }
}
