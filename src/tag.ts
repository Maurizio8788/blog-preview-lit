import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mz-tag')
export class Tag extends LitElement {
    @property()
    tag: string = '';
    render() {
        return html`
      <div class="tag">
        <p>${this.tag}</p>
      </div>
    
    `;
    }

    static styles = css`
    :host {
      background-color: var(--card-yellow-color);
      padding: .4rem 1.2rem;
      border-radius: .4rem;
      width: 8.2rem;
      height: 2.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      
      p {
        margin: 0;
        font-weight: 800;
        color: var(--card-gray-950);
        line-height: 150%;
      }
    }

  `;
}

declare global {
    interface HTMLElementTagMap {
        'mz-tag': Tag;
    }
}
