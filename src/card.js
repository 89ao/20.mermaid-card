import { html, LitElement, nothing } from 'lit';
import styles from './card.styles';
import mermaid from 'mermaid';

export class MermaidCard extends LitElement {

  // private property
  _hass;

  // internal reactive states
  static get properties() {
    return {
      _header: { state: true },
      _mermaid: { state: true }
    };
  }

  // lifecycle interface
  setConfig(config) {
    this._header = config.header === "" ? nothing : config.header;
    this._mermaid = config.mermaid === "" ? nothing : config.mermaid;
    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass
    }
  }

  set hass(hass) {
    this._hass = hass;
  }

  updated() {
    const output = this.shadowRoot.getElementById('output');
    console.log(this._mermaid);
    mermaid.render("theGraph", this._mermaid).then(result => {
      output.innerHTML = result.svg;
    }
    );
  }

  // declarative part
  static styles = styles;

  render() {
    return html`
            <ha-card header="${this._header}">
                <div class="card-content">
                  <div id="output"></div>
                </div>
            </ha-card>
        `;
  }

  // card configuration
  static getConfigElement() {
    return document.createElement("mermaid-card-editor");
  }

  static getStubConfig() {
    return {
      header: "Meraid",
      mermaid: "graph\nA-->B"
    };
  }
}
