import { css } from 'lit';

export default css`
    .error {
        color: red;
    }
    .dl {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .dt {
        display: flex;
        align-content: center;
        flex-wrap: wrap;
    }
    .dd {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));
        margin: 0;
    }
    .toggle {
        padding: 0.6em;
        border: grey;
        border-radius: 50%;
    }
    .toggle.on { background-color: green; }
    .toggle.off{ background-color: red; }
    .button {
        display: block;
        border: outset 0.2em;
        border-radius: 50%;
        border-color: silver;
        background-color: silver;
        width: 1.4em;
        height: 1.4em;
    }
    .value {
        padding-left: 0.5em;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
    }

    ha-card {
        width: 100%;
        overflow: visible;
    }

    .card-content {
        padding: 16px;
        display: flex;
        justify-content: center;
    }

    #output {
        width: 100%;
        line-height: 1.5; /* 增加行高，为下降部分留出空间 */
        overflow: visible;
    }

    /* 针对SVG内部元素的样式调整 */
    #output svg {
        width: 100%;
        height: auto;
        overflow: visible;
        /* 确保SVG有足够的下边距 */
        margin-bottom: 10px;
    }

    /* 针对文本元素的调整 */
    #output text {
        font-size: 14px; /* 调整字体大小 */
        font-family: 'Arial', sans-serif; /* 使用更清晰的字体 */
    }
  
    /* 为有下降部分的字母预留更多空间 */
    #output .node text,
    #output .cluster text {
        dominant-baseline: text-before-edge;
        dy: 1em;
    }
`;