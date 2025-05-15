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
      
      // 获取渲染后的SVG元素
      const svg = output.querySelector('svg');
      if (svg) {
        // 确保SVG有合适的viewBox
        if (!svg.hasAttribute('viewBox') && svg.hasAttribute('width') && svg.hasAttribute('height')) {
          const width = parseFloat(svg.getAttribute('width'));
          const height = parseFloat(svg.getAttribute('height'));
          svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        }
        
        // 增加一点额外空间以适应下降字母
        svg.style.paddingBottom = '10px';
        
        // 找到所有文本元素并优化显示
        const textElements = svg.querySelectorAll('text');
        textElements.forEach(text => {
          // 确保文本有适当的定位
          if (!text.hasAttribute('dy')) {
            text.setAttribute('dy', '0.3em');
          }
        });
      }
    });
  }

  // declarative part
  static styles = styles;

  render() {
    return html`
            <ha-card header="${this._header}">
                <div class="card-content">
                  <div id="input">${this._mermaid}</div>
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
