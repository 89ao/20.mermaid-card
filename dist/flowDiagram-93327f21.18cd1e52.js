function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire94c2"];
parcelRequire.register("3XLJx", function(module, exports) {

$parcel$export(module.exports, "f", () => $2e2be8afde55211e$export$2d1720544b23b823);
$parcel$export(module.exports, "a", () => $2e2be8afde55211e$export$407448d2b89b1813);

var $hp6PI = parcelRequire("hp6PI");

var $9ONqd = parcelRequire("9ONqd");

var $4lfVT = parcelRequire("4lfVT");

var $8ZZbk = parcelRequire("8ZZbk");

var $kdbIU = parcelRequire("kdbIU");

var $72GQT = parcelRequire("72GQT");

var $2KsMZ = parcelRequire("2KsMZ");
var $42Ff1 = parcelRequire("42Ff1");
const $2e2be8afde55211e$var$conf = {};
const $2e2be8afde55211e$var$setConf = function(cnf) {
    const keys = Object.keys(cnf);
    for (const key of keys)$2e2be8afde55211e$var$conf[key] = cnf[key];
};
const $2e2be8afde55211e$var$addVertices = function(vert, g, svgId, root, doc, diagObj) {
    const svg = root.select(`[id="${svgId}"]`);
    const keys = Object.keys(vert);
    keys.forEach(function(id) {
        const vertex = vert[id];
        let classStr = "default";
        if (vertex.classes.length > 0) classStr = vertex.classes.join(" ");
        classStr = classStr + " flowchart-label";
        const styles = (0, $8ZZbk.k)(vertex.styles);
        let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
        let vertexNode;
        (0, $8ZZbk.l).info("vertex", vertex, vertex.labelType);
        if (vertex.labelType === "markdown") (0, $8ZZbk.l).info("vertex", vertex, vertex.labelType);
        else if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
            const node = {
                label: vertexText.replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`)
            };
            vertexNode = (0, $72GQT.addHtmlLabel)(svg, node).node();
            vertexNode.parentNode.removeChild(vertexNode);
        } else {
            const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
            svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
            const rows = vertexText.split((0, $8ZZbk.e).lineBreakRegex);
            for (const row of rows){
                const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                tspan.setAttribute("dy", "1em");
                tspan.setAttribute("x", "1");
                tspan.textContent = row;
                svgLabel.appendChild(tspan);
            }
            vertexNode = svgLabel;
        }
        let radious = 0;
        let _shape = "";
        switch(vertex.type){
            case "round":
                radious = 5;
                _shape = "rect";
                break;
            case "square":
                _shape = "rect";
                break;
            case "diamond":
                _shape = "question";
                break;
            case "hexagon":
                _shape = "hexagon";
                break;
            case "odd":
                _shape = "rect_left_inv_arrow";
                break;
            case "lean_right":
                _shape = "lean_right";
                break;
            case "lean_left":
                _shape = "lean_left";
                break;
            case "trapezoid":
                _shape = "trapezoid";
                break;
            case "inv_trapezoid":
                _shape = "inv_trapezoid";
                break;
            case "odd_right":
                _shape = "rect_left_inv_arrow";
                break;
            case "circle":
                _shape = "circle";
                break;
            case "ellipse":
                _shape = "ellipse";
                break;
            case "stadium":
                _shape = "stadium";
                break;
            case "subroutine":
                _shape = "subroutine";
                break;
            case "cylinder":
                _shape = "cylinder";
                break;
            case "group":
                _shape = "rect";
                break;
            case "doublecircle":
                _shape = "doublecircle";
                break;
            default:
                _shape = "rect";
        }
        g.setNode(vertex.id, {
            labelStyle: styles.labelStyle,
            shape: _shape,
            labelText: vertexText,
            labelType: vertex.labelType,
            rx: radious,
            ry: radious,
            class: classStr,
            style: styles.style,
            id: vertex.id,
            link: vertex.link,
            linkTarget: vertex.linkTarget,
            tooltip: diagObj.db.getTooltip(vertex.id) || "",
            domId: diagObj.db.lookUpDomId(vertex.id),
            haveCallback: vertex.haveCallback,
            width: vertex.type === "group" ? 500 : void 0,
            dir: vertex.dir,
            type: vertex.type,
            props: vertex.props,
            padding: (0, $8ZZbk.c)().flowchart.padding
        });
        (0, $8ZZbk.l).info("setNode", {
            labelStyle: styles.labelStyle,
            labelType: vertex.labelType,
            shape: _shape,
            labelText: vertexText,
            rx: radious,
            ry: radious,
            class: classStr,
            style: styles.style,
            id: vertex.id,
            domId: diagObj.db.lookUpDomId(vertex.id),
            width: vertex.type === "group" ? 500 : void 0,
            type: vertex.type,
            dir: vertex.dir,
            props: vertex.props,
            padding: (0, $8ZZbk.c)().flowchart.padding
        });
    });
};
const $2e2be8afde55211e$var$addEdges = function(edges, g, diagObj) {
    (0, $8ZZbk.l).info("abc78 edges = ", edges);
    let cnt = 0;
    let linkIdCnt = {};
    let defaultStyle;
    let defaultLabelStyle;
    if (edges.defaultStyle !== void 0) {
        const defaultStyles = (0, $8ZZbk.k)(edges.defaultStyle);
        defaultStyle = defaultStyles.style;
        defaultLabelStyle = defaultStyles.labelStyle;
    }
    edges.forEach(function(edge) {
        cnt++;
        const linkIdBase = "L-" + edge.start + "-" + edge.end;
        if (linkIdCnt[linkIdBase] === void 0) {
            linkIdCnt[linkIdBase] = 0;
            (0, $8ZZbk.l).info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
        } else {
            linkIdCnt[linkIdBase]++;
            (0, $8ZZbk.l).info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
        }
        let linkId = linkIdBase + "-" + linkIdCnt[linkIdBase];
        (0, $8ZZbk.l).info("abc78 new link id to be used is", linkIdBase, linkId, linkIdCnt[linkIdBase]);
        const linkNameStart = "LS-" + edge.start;
        const linkNameEnd = "LE-" + edge.end;
        const edgeData = {
            style: "",
            labelStyle: ""
        };
        edgeData.minlen = edge.length || 1;
        if (edge.type === "arrow_open") edgeData.arrowhead = "none";
        else edgeData.arrowhead = "normal";
        edgeData.arrowTypeStart = "arrow_open";
        edgeData.arrowTypeEnd = "arrow_open";
        switch(edge.type){
            case "double_arrow_cross":
                edgeData.arrowTypeStart = "arrow_cross";
            case "arrow_cross":
                edgeData.arrowTypeEnd = "arrow_cross";
                break;
            case "double_arrow_point":
                edgeData.arrowTypeStart = "arrow_point";
            case "arrow_point":
                edgeData.arrowTypeEnd = "arrow_point";
                break;
            case "double_arrow_circle":
                edgeData.arrowTypeStart = "arrow_circle";
            case "arrow_circle":
                edgeData.arrowTypeEnd = "arrow_circle";
                break;
        }
        let style = "";
        let labelStyle = "";
        switch(edge.stroke){
            case "normal":
                style = "fill:none;";
                if (defaultStyle !== void 0) style = defaultStyle;
                if (defaultLabelStyle !== void 0) labelStyle = defaultLabelStyle;
                edgeData.thickness = "normal";
                edgeData.pattern = "solid";
                break;
            case "dotted":
                edgeData.thickness = "normal";
                edgeData.pattern = "dotted";
                edgeData.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
                break;
            case "thick":
                edgeData.thickness = "thick";
                edgeData.pattern = "solid";
                edgeData.style = "stroke-width: 3.5px;fill:none;";
                break;
            case "invisible":
                edgeData.thickness = "invisible";
                edgeData.pattern = "solid";
                edgeData.style = "stroke-width: 0;fill:none;";
                break;
        }
        if (edge.style !== void 0) {
            const styles = (0, $8ZZbk.k)(edge.style);
            style = styles.style;
            labelStyle = styles.labelStyle;
        }
        edgeData.style = edgeData.style += style;
        edgeData.labelStyle = edgeData.labelStyle += labelStyle;
        if (edge.interpolate !== void 0) edgeData.curve = (0, $8ZZbk.o)(edge.interpolate, (0, $9ONqd.curveLinear));
        else if (edges.defaultInterpolate !== void 0) edgeData.curve = (0, $8ZZbk.o)(edges.defaultInterpolate, (0, $9ONqd.curveLinear));
        else edgeData.curve = (0, $8ZZbk.o)($2e2be8afde55211e$var$conf.curve, (0, $9ONqd.curveLinear));
        if (edge.text === void 0) {
            if (edge.style !== void 0) edgeData.arrowheadStyle = "fill: #333";
        } else {
            edgeData.arrowheadStyle = "fill: #333";
            edgeData.labelpos = "c";
        }
        edgeData.labelType = edge.labelType;
        edgeData.label = edge.text.replace((0, $8ZZbk.e).lineBreakRegex, "\n");
        if (edge.style === void 0) edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none;";
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
        edgeData.id = linkId;
        edgeData.classes = "flowchart-link " + linkNameStart + " " + linkNameEnd;
        g.setEdge(edge.start, edge.end, edgeData, cnt);
    });
};
const $2e2be8afde55211e$var$getClasses = function(text, diagObj) {
    (0, $8ZZbk.l).info("Extracting classes");
    diagObj.db.clear();
    try {
        diagObj.parse(text);
        return diagObj.db.getClasses();
    } catch (e) {
        return;
    }
};
const $2e2be8afde55211e$var$draw = async function(text, id, _version, diagObj) {
    (0, $8ZZbk.l).info("Drawing flowchart");
    diagObj.db.clear();
    (0, $4lfVT.f).setGen("gen-2");
    diagObj.parser.parse(text);
    let dir = diagObj.db.getDirection();
    if (dir === void 0) dir = "TD";
    const { securityLevel: securityLevel , flowchart: conf2  } = (0, $8ZZbk.c)();
    const nodeSpacing = conf2.nodeSpacing || 50;
    const rankSpacing = conf2.rankSpacing || 50;
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, $9ONqd.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, $9ONqd.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, $9ONqd.select)("body");
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    const g = new $hp6PI.Graph({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: dir,
        nodesep: nodeSpacing,
        ranksep: rankSpacing,
        marginx: 0,
        marginy: 0
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    let subG;
    const subGraphs = diagObj.db.getSubGraphs();
    (0, $8ZZbk.l).info("Subgraphs - ", subGraphs);
    for(let i2 = subGraphs.length - 1; i2 >= 0; i2--){
        subG = subGraphs[i2];
        (0, $8ZZbk.l).info("Subgraph - ", subG);
        diagObj.db.addVertex(subG.id, {
            text: subG.title,
            type: subG.labelType
        }, "group", void 0, subG.classes, subG.dir);
    }
    const vert = diagObj.db.getVertices();
    const edges = diagObj.db.getEdges();
    (0, $8ZZbk.l).info("Edges", edges);
    let i = 0;
    for(i = subGraphs.length - 1; i >= 0; i--){
        subG = subGraphs[i];
        (0, $9ONqd.selectAll)("cluster").append("text");
        for(let j = 0; j < subG.nodes.length; j++){
            (0, $8ZZbk.l).info("Setting up subgraphs", subG.nodes[j], subG.id);
            g.setParent(subG.nodes[j], subG.id);
        }
    }
    $2e2be8afde55211e$var$addVertices(vert, g, id, root, doc, diagObj);
    $2e2be8afde55211e$var$addEdges(edges, g);
    const svg = root.select(`[id="${id}"]`);
    const element = root.select("#" + id + " g");
    await (0, $kdbIU.r)(element, g, [
        "point",
        "circle",
        "cross"
    ], "flowchart", id);
    (0, $8ZZbk.u).insertTitle(svg, "flowchartTitleText", conf2.titleTopMargin, diagObj.db.getDiagramTitle());
    (0, $8ZZbk.p)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
    diagObj.db.indexNodes("subGraph" + i);
    if (!conf2.htmlLabels) {
        const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
        for (const label of labels){
            const dim = label.getBBox();
            const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("rx", 0);
            rect.setAttribute("ry", 0);
            rect.setAttribute("width", dim.width);
            rect.setAttribute("height", dim.height);
            label.insertBefore(rect, label.firstChild);
        }
    }
    const keys = Object.keys(vert);
    keys.forEach(function(key) {
        const vertex = vert[key];
        if (vertex.link) {
            const node = (0, $9ONqd.select)("#" + id + ' [id="' + key + '"]');
            if (node) {
                const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
                link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
                link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
                link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
                if (securityLevel === "sandbox") link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
                else if (vertex.linkTarget) link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
                const linkNode = node.insert(function() {
                    return link;
                }, ":first-child");
                const shape = node.select(".label-container");
                if (shape) linkNode.append(function() {
                    return shape.node();
                });
                const label = node.select(".label");
                if (label) linkNode.append(function() {
                    return label.node();
                });
            }
        }
    });
};
const $2e2be8afde55211e$export$2d1720544b23b823 = {
    setConf: $2e2be8afde55211e$var$setConf,
    addVertices: $2e2be8afde55211e$var$addVertices,
    addEdges: $2e2be8afde55211e$var$addEdges,
    getClasses: $2e2be8afde55211e$var$getClasses,
    draw: $2e2be8afde55211e$var$draw
};
const $2e2be8afde55211e$var$fade = (color, opacity)=>{
    const channel = $2KsMZ.default;
    const r = channel(color, "r");
    const g = channel(color, "g");
    const b = channel(color, "b");
    return $42Ff1.default(r, g, b, opacity);
};
const $2e2be8afde55211e$var$getStyles = (options)=>`.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span,p {
    color: ${options.titleColor};
  }

  .label text,span,p {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${$2e2be8afde55211e$var$fade(options.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${options.clusterBkg};
    stroke: ${options.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span,p {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`;
const $2e2be8afde55211e$export$407448d2b89b1813 = $2e2be8afde55211e$var$getStyles;

});
parcelRequire.register("2KsMZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $200635979d7d0856$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $eF8YF = parcelRequire("eF8YF");
/* MAIN */ const $200635979d7d0856$var$channel = (color, channel)=>{
    return (0, $2UY5X.default).lang.round((0, $eF8YF.default).parse(color)[channel]);
};
var /* EXPORT */ $200635979d7d0856$export$2e2bcd8739ae039 = $200635979d7d0856$var$channel;

});



//# sourceMappingURL=flowDiagram-93327f21.18cd1e52.js.map
