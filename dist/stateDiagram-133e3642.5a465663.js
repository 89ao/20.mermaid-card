import "./flowDiagram-93327f21.6ed3d378.js";
import "./stateDiagram-133e3642.e06fce44.js";

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
parcelRequire.register("2hUlv", function(module, exports) {

$parcel$export(module.exports, "diagram", () => $1aa8e069364452a3$export$6118d022d940d562);

var $l8MD0 = parcelRequire("l8MD0");

var $9ONqd = parcelRequire("9ONqd");

var $5Nl7d = parcelRequire("5Nl7d");

var $hp6PI = parcelRequire("hp6PI");

var $8ZZbk = parcelRequire("8ZZbk");
parcelRequire("7Sll6");
parcelRequire("1rtij");
parcelRequire("gOlfO");
parcelRequire("aiFbc");




const $1aa8e069364452a3$var$idCache = {};
const $1aa8e069364452a3$var$set = (key, val)=>{
    $1aa8e069364452a3$var$idCache[key] = val;
};
const $1aa8e069364452a3$var$get = (k)=>$1aa8e069364452a3$var$idCache[k];
const $1aa8e069364452a3$var$keys = ()=>Object.keys($1aa8e069364452a3$var$idCache);
const $1aa8e069364452a3$var$size = ()=>$1aa8e069364452a3$var$keys().length;
const $1aa8e069364452a3$var$idCache$1 = {
    get: $1aa8e069364452a3$var$get,
    set: $1aa8e069364452a3$var$set,
    keys: $1aa8e069364452a3$var$keys,
    size: $1aa8e069364452a3$var$size
};
const $1aa8e069364452a3$var$drawStartState = (g)=>g.append("circle").attr("class", "start-state").attr("r", (0, $8ZZbk.c)().state.sizeUnit).attr("cx", (0, $8ZZbk.c)().state.padding + (0, $8ZZbk.c)().state.sizeUnit).attr("cy", (0, $8ZZbk.c)().state.padding + (0, $8ZZbk.c)().state.sizeUnit);
const $1aa8e069364452a3$var$drawDivider = (g)=>g.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", (0, $8ZZbk.c)().state.textHeight).attr("class", "divider").attr("x2", (0, $8ZZbk.c)().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
const $1aa8e069364452a3$var$drawSimpleState = (g, stateDef)=>{
    const state = g.append("text").attr("x", 2 * (0, $8ZZbk.c)().state.padding).attr("y", (0, $8ZZbk.c)().state.textHeight + 2 * (0, $8ZZbk.c)().state.padding).attr("font-size", (0, $8ZZbk.c)().state.fontSize).attr("class", "state-title").text(stateDef.id);
    const classBox = state.node().getBBox();
    g.insert("rect", ":first-child").attr("x", (0, $8ZZbk.c)().state.padding).attr("y", (0, $8ZZbk.c)().state.padding).attr("width", classBox.width + 2 * (0, $8ZZbk.c)().state.padding).attr("height", classBox.height + 2 * (0, $8ZZbk.c)().state.padding).attr("rx", (0, $8ZZbk.c)().state.radius);
    return state;
};
const $1aa8e069364452a3$var$drawDescrState = (g, stateDef)=>{
    const addTspan = function(textEl, txt, isFirst2) {
        const tSpan = textEl.append("tspan").attr("x", 2 * (0, $8ZZbk.c)().state.padding).text(txt);
        if (!isFirst2) tSpan.attr("dy", (0, $8ZZbk.c)().state.textHeight);
    };
    const title = g.append("text").attr("x", 2 * (0, $8ZZbk.c)().state.padding).attr("y", (0, $8ZZbk.c)().state.textHeight + 1.3 * (0, $8ZZbk.c)().state.padding).attr("font-size", (0, $8ZZbk.c)().state.fontSize).attr("class", "state-title").text(stateDef.descriptions[0]);
    const titleBox = title.node().getBBox();
    const titleHeight = titleBox.height;
    const description = g.append("text").attr("x", (0, $8ZZbk.c)().state.padding).attr("y", titleHeight + (0, $8ZZbk.c)().state.padding * 0.4 + (0, $8ZZbk.c)().state.dividerMargin + (0, $8ZZbk.c)().state.textHeight).attr("class", "state-description");
    let isFirst = true;
    let isSecond = true;
    stateDef.descriptions.forEach(function(descr) {
        if (!isFirst) {
            addTspan(description, descr, isSecond);
            isSecond = false;
        }
        isFirst = false;
    });
    const descrLine = g.append("line").attr("x1", (0, $8ZZbk.c)().state.padding).attr("y1", (0, $8ZZbk.c)().state.padding + titleHeight + (0, $8ZZbk.c)().state.dividerMargin / 2).attr("y2", (0, $8ZZbk.c)().state.padding + titleHeight + (0, $8ZZbk.c)().state.dividerMargin / 2).attr("class", "descr-divider");
    const descrBox = description.node().getBBox();
    const width = Math.max(descrBox.width, titleBox.width);
    descrLine.attr("x2", width + 3 * (0, $8ZZbk.c)().state.padding);
    g.insert("rect", ":first-child").attr("x", (0, $8ZZbk.c)().state.padding).attr("y", (0, $8ZZbk.c)().state.padding).attr("width", width + 2 * (0, $8ZZbk.c)().state.padding).attr("height", descrBox.height + titleHeight + 2 * (0, $8ZZbk.c)().state.padding).attr("rx", (0, $8ZZbk.c)().state.radius);
    return g;
};
const $1aa8e069364452a3$var$addTitleAndBox = (g, stateDef, altBkg)=>{
    const pad = (0, $8ZZbk.c)().state.padding;
    const dblPad = 2 * (0, $8ZZbk.c)().state.padding;
    const orgBox = g.node().getBBox();
    const orgWidth = orgBox.width;
    const orgX = orgBox.x;
    const title = g.append("text").attr("x", 0).attr("y", (0, $8ZZbk.c)().state.titleShift).attr("font-size", (0, $8ZZbk.c)().state.fontSize).attr("class", "state-title").text(stateDef.id);
    const titleBox = title.node().getBBox();
    const titleWidth = titleBox.width + dblPad;
    let width = Math.max(titleWidth, orgWidth);
    if (width === orgWidth) width = width + dblPad;
    let startX;
    const graphBox = g.node().getBBox();
    stateDef.doc;
    startX = orgX - pad;
    if (titleWidth > orgWidth) startX = (orgWidth - width) / 2 + pad;
    if (Math.abs(orgX - graphBox.x) < pad && titleWidth > orgWidth) startX = orgX - (titleWidth - orgWidth) / 2;
    const lineY = 1 - (0, $8ZZbk.c)().state.textHeight;
    g.insert("rect", ":first-child").attr("x", startX).attr("y", lineY).attr("class", altBkg ? "alt-composit" : "composit").attr("width", width).attr("height", graphBox.height + (0, $8ZZbk.c)().state.textHeight + (0, $8ZZbk.c)().state.titleShift + 1).attr("rx", "0");
    title.attr("x", startX + pad);
    if (titleWidth <= orgWidth) title.attr("x", orgX + (width - dblPad) / 2 - titleWidth / 2 + pad);
    g.insert("rect", ":first-child").attr("x", startX).attr("y", (0, $8ZZbk.c)().state.titleShift - (0, $8ZZbk.c)().state.textHeight - (0, $8ZZbk.c)().state.padding).attr("width", width).attr("height", (0, $8ZZbk.c)().state.textHeight * 3).attr("rx", (0, $8ZZbk.c)().state.radius);
    g.insert("rect", ":first-child").attr("x", startX).attr("y", (0, $8ZZbk.c)().state.titleShift - (0, $8ZZbk.c)().state.textHeight - (0, $8ZZbk.c)().state.padding).attr("width", width).attr("height", graphBox.height + 3 + 2 * (0, $8ZZbk.c)().state.textHeight).attr("rx", (0, $8ZZbk.c)().state.radius);
    return g;
};
const $1aa8e069364452a3$var$drawEndState = (g)=>{
    g.append("circle").attr("class", "end-state-outer").attr("r", (0, $8ZZbk.c)().state.sizeUnit + (0, $8ZZbk.c)().state.miniPadding).attr("cx", (0, $8ZZbk.c)().state.padding + (0, $8ZZbk.c)().state.sizeUnit + (0, $8ZZbk.c)().state.miniPadding).attr("cy", (0, $8ZZbk.c)().state.padding + (0, $8ZZbk.c)().state.sizeUnit + (0, $8ZZbk.c)().state.miniPadding);
    return g.append("circle").attr("class", "end-state-inner").attr("r", (0, $8ZZbk.c)().state.sizeUnit).attr("cx", (0, $8ZZbk.c)().state.padding + (0, $8ZZbk.c)().state.sizeUnit + 2).attr("cy", (0, $8ZZbk.c)().state.padding + (0, $8ZZbk.c)().state.sizeUnit + 2);
};
const $1aa8e069364452a3$var$drawForkJoinState = (g, stateDef)=>{
    let width = (0, $8ZZbk.c)().state.forkWidth;
    let height = (0, $8ZZbk.c)().state.forkHeight;
    if (stateDef.parentId) {
        let tmp = width;
        width = height;
        height = tmp;
    }
    return g.append("rect").style("stroke", "black").style("fill", "black").attr("width", width).attr("height", height).attr("x", (0, $8ZZbk.c)().state.padding).attr("y", (0, $8ZZbk.c)().state.padding);
};
const $1aa8e069364452a3$var$_drawLongText = (_text, x, y, g)=>{
    let textHeight = 0;
    const textElem = g.append("text");
    textElem.style("text-anchor", "start");
    textElem.attr("class", "noteText");
    let text = _text.replace(/\r\n/g, "<br/>");
    text = text.replace(/\n/g, "<br/>");
    const lines = text.split((0, $8ZZbk.e).lineBreakRegex);
    let tHeight = 1.25 * (0, $8ZZbk.c)().state.noteMargin;
    for (const line2 of lines){
        const txt = line2.trim();
        if (txt.length > 0) {
            const span = textElem.append("tspan");
            span.text(txt);
            if (tHeight === 0) {
                const textBounds = span.node().getBBox();
                tHeight += textBounds.height;
            }
            textHeight += tHeight;
            span.attr("x", x + (0, $8ZZbk.c)().state.noteMargin);
            span.attr("y", y + textHeight + 1.25 * (0, $8ZZbk.c)().state.noteMargin);
        }
    }
    return {
        textWidth: textElem.node().getBBox().width,
        textHeight: textHeight
    };
};
const $1aa8e069364452a3$var$drawNote = (text, g)=>{
    g.attr("class", "state-note");
    const note = g.append("rect").attr("x", 0).attr("y", (0, $8ZZbk.c)().state.padding);
    const rectElem = g.append("g");
    const { textWidth: textWidth , textHeight: textHeight  } = $1aa8e069364452a3$var$_drawLongText(text, 0, 0, rectElem);
    note.attr("height", textHeight + 2 * (0, $8ZZbk.c)().state.noteMargin);
    note.attr("width", textWidth + (0, $8ZZbk.c)().state.noteMargin * 2);
    return note;
};
const $1aa8e069364452a3$var$drawState = function(elem, stateDef) {
    const id = stateDef.id;
    const stateInfo = {
        id: id,
        label: stateDef.id,
        width: 0,
        height: 0
    };
    const g = elem.append("g").attr("id", id).attr("class", "stateGroup");
    if (stateDef.type === "start") $1aa8e069364452a3$var$drawStartState(g);
    if (stateDef.type === "end") $1aa8e069364452a3$var$drawEndState(g);
    if (stateDef.type === "fork" || stateDef.type === "join") $1aa8e069364452a3$var$drawForkJoinState(g, stateDef);
    if (stateDef.type === "note") $1aa8e069364452a3$var$drawNote(stateDef.note.text, g);
    if (stateDef.type === "divider") $1aa8e069364452a3$var$drawDivider(g);
    if (stateDef.type === "default" && stateDef.descriptions.length === 0) $1aa8e069364452a3$var$drawSimpleState(g, stateDef);
    if (stateDef.type === "default" && stateDef.descriptions.length > 0) $1aa8e069364452a3$var$drawDescrState(g, stateDef);
    const stateBox = g.node().getBBox();
    stateInfo.width = stateBox.width + 2 * (0, $8ZZbk.c)().state.padding;
    stateInfo.height = stateBox.height + 2 * (0, $8ZZbk.c)().state.padding;
    $1aa8e069364452a3$var$idCache$1.set(id, stateInfo);
    return stateInfo;
};
let $1aa8e069364452a3$var$edgeCount = 0;
const $1aa8e069364452a3$var$drawEdge = function(elem, path, relation) {
    const getRelationType = function(type) {
        switch(type){
            case (0, $l8MD0.d).relationType.AGGREGATION:
                return "aggregation";
            case (0, $l8MD0.d).relationType.EXTENSION:
                return "extension";
            case (0, $l8MD0.d).relationType.COMPOSITION:
                return "composition";
            case (0, $l8MD0.d).relationType.DEPENDENCY:
                return "dependency";
        }
    };
    path.points = path.points.filter((p)=>!Number.isNaN(p.y));
    const lineData = path.points;
    const lineFunction = (0, $9ONqd.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve((0, $9ONqd.curveBasis));
    const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + $1aa8e069364452a3$var$edgeCount).attr("class", "transition");
    let url = "";
    if ((0, $8ZZbk.c)().state.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    svgPath.attr("marker-end", "url(" + url + "#" + getRelationType((0, $l8MD0.d).relationType.DEPENDENCY) + "End)");
    if (relation.title !== void 0) {
        const label = elem.append("g").attr("class", "stateLabel");
        const { x: x , y: y  } = (0, $8ZZbk.u).calcLabelPosition(path.points);
        const rows = (0, $8ZZbk.e).getRows(relation.title);
        let titleHeight = 0;
        const titleRows = [];
        let maxWidth = 0;
        let minX = 0;
        for(let i = 0; i <= rows.length; i++){
            const title = label.append("text").attr("text-anchor", "middle").text(rows[i]).attr("x", x).attr("y", y + titleHeight);
            const boundstmp = title.node().getBBox();
            maxWidth = Math.max(maxWidth, boundstmp.width);
            minX = Math.min(minX, boundstmp.x);
            (0, $8ZZbk.l).info(boundstmp.x, x, y + titleHeight);
            if (titleHeight === 0) {
                const titleBox = title.node().getBBox();
                titleHeight = titleBox.height;
                (0, $8ZZbk.l).info("Title height", titleHeight, y);
            }
            titleRows.push(title);
        }
        let boxHeight = titleHeight * rows.length;
        if (rows.length > 1) {
            const heightAdj = (rows.length - 1) * titleHeight * 0.5;
            titleRows.forEach((title, i)=>title.attr("y", y + i * titleHeight - heightAdj));
            boxHeight = titleHeight * rows.length;
        }
        const bounds = label.node().getBBox();
        label.insert("rect", ":first-child").attr("class", "box").attr("x", x - maxWidth / 2 - (0, $8ZZbk.c)().state.padding / 2).attr("y", y - boxHeight / 2 - (0, $8ZZbk.c)().state.padding / 2 - 3.5).attr("width", maxWidth + (0, $8ZZbk.c)().state.padding).attr("height", boxHeight + (0, $8ZZbk.c)().state.padding);
        (0, $8ZZbk.l).info(bounds);
    }
    $1aa8e069364452a3$var$edgeCount++;
};
let $1aa8e069364452a3$var$conf;
const $1aa8e069364452a3$var$transformationLog = {};
const $1aa8e069364452a3$var$setConf = function() {};
const $1aa8e069364452a3$var$insertMarkers = function(elem) {
    elem.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const $1aa8e069364452a3$var$draw = function(text, id, _version, diagObj) {
    $1aa8e069364452a3$var$conf = (0, $8ZZbk.c)().state;
    const securityLevel = (0, $8ZZbk.c)().securityLevel;
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, $9ONqd.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, $9ONqd.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, $9ONqd.select)("body");
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    (0, $8ZZbk.l).debug("Rendering diagram " + text);
    const diagram2 = root.select(`[id='${id}']`);
    $1aa8e069364452a3$var$insertMarkers(diagram2);
    const graph = new $hp6PI.Graph({
        multigraph: true,
        compound: true,
        // acyclicer: 'greedy',
        rankdir: "RL"
    });
    graph.setDefaultEdgeLabel(function() {
        return {};
    });
    const rootDoc = diagObj.db.getRootDoc();
    $1aa8e069364452a3$var$renderDoc(rootDoc, diagram2, void 0, false, root, doc, diagObj);
    const padding = $1aa8e069364452a3$var$conf.padding;
    const bounds = diagram2.node().getBBox();
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    const svgWidth = width * 1.75;
    (0, $8ZZbk.i)(diagram2, height, svgWidth, $1aa8e069364452a3$var$conf.useMaxWidth);
    diagram2.attr("viewBox", `${bounds.x - $1aa8e069364452a3$var$conf.padding}  ${bounds.y - $1aa8e069364452a3$var$conf.padding} ` + width + " " + height);
};
const $1aa8e069364452a3$var$getLabelWidth = (text)=>{
    return text ? text.length * $1aa8e069364452a3$var$conf.fontSizeFactor : 1;
};
const $1aa8e069364452a3$var$renderDoc = (doc, diagram2, parentId, altBkg, root, domDocument, diagObj)=>{
    const graph = new $hp6PI.Graph({
        compound: true,
        multigraph: true
    });
    let i;
    let edgeFreeDoc = true;
    for(i = 0; i < doc.length; i++)if (doc[i].stmt === "relation") {
        edgeFreeDoc = false;
        break;
    }
    if (parentId) graph.setGraph({
        rankdir: "LR",
        multigraph: true,
        compound: true,
        // acyclicer: 'greedy',
        ranker: "tight-tree",
        ranksep: edgeFreeDoc ? 1 : $1aa8e069364452a3$var$conf.edgeLengthFactor,
        nodeSep: edgeFreeDoc ? 1 : 50,
        isMultiGraph: true
    });
    else graph.setGraph({
        rankdir: "TB",
        multigraph: true,
        compound: true,
        // isCompound: true,
        // acyclicer: 'greedy',
        // ranker: 'longest-path'
        ranksep: edgeFreeDoc ? 1 : $1aa8e069364452a3$var$conf.edgeLengthFactor,
        nodeSep: edgeFreeDoc ? 1 : 50,
        ranker: "tight-tree",
        // ranker: 'network-simplex'
        isMultiGraph: true
    });
    graph.setDefaultEdgeLabel(function() {
        return {};
    });
    diagObj.db.extract(doc);
    const states = diagObj.db.getStates();
    const relations = diagObj.db.getRelations();
    const keys2 = Object.keys(states);
    for (const key of keys2){
        const stateDef = states[key];
        if (parentId) stateDef.parentId = parentId;
        let node;
        if (stateDef.doc) {
            let sub = diagram2.append("g").attr("id", stateDef.id).attr("class", "stateGroup");
            node = $1aa8e069364452a3$var$renderDoc(stateDef.doc, sub, stateDef.id, !altBkg, root, domDocument, diagObj);
            {
                sub = $1aa8e069364452a3$var$addTitleAndBox(sub, stateDef, altBkg);
                let boxBounds = sub.node().getBBox();
                node.width = boxBounds.width;
                node.height = boxBounds.height + $1aa8e069364452a3$var$conf.padding / 2;
                $1aa8e069364452a3$var$transformationLog[stateDef.id] = {
                    y: $1aa8e069364452a3$var$conf.compositTitleSize
                };
            }
        } else node = $1aa8e069364452a3$var$drawState(diagram2, stateDef);
        if (stateDef.note) {
            const noteDef = {
                descriptions: [],
                id: stateDef.id + "-note",
                note: stateDef.note,
                type: "note"
            };
            const note = $1aa8e069364452a3$var$drawState(diagram2, noteDef);
            if (stateDef.note.position === "left of") {
                graph.setNode(node.id + "-note", note);
                graph.setNode(node.id, node);
            } else {
                graph.setNode(node.id, node);
                graph.setNode(node.id + "-note", note);
            }
            graph.setParent(node.id, node.id + "-group");
            graph.setParent(node.id + "-note", node.id + "-group");
        } else graph.setNode(node.id, node);
    }
    (0, $8ZZbk.l).debug("Count=", graph.nodeCount(), graph);
    let cnt = 0;
    relations.forEach(function(relation) {
        cnt++;
        (0, $8ZZbk.l).debug("Setting edge", relation);
        graph.setEdge(relation.id1, relation.id2, {
            relation: relation,
            width: $1aa8e069364452a3$var$getLabelWidth(relation.title),
            height: $1aa8e069364452a3$var$conf.labelHeight * (0, $8ZZbk.e).getRows(relation.title).length,
            labelpos: "c"
        }, "id" + cnt);
    });
    (0, $5Nl7d.layout)(graph);
    (0, $8ZZbk.l).debug("Graph after layout", graph.nodes());
    const svgElem = diagram2.node();
    graph.nodes().forEach(function(v) {
        if (v !== void 0 && graph.node(v) !== void 0) {
            (0, $8ZZbk.l).warn("Node " + v + ": " + JSON.stringify(graph.node(v)));
            root.select("#" + svgElem.id + " #" + v).attr("transform", "translate(" + (graph.node(v).x - graph.node(v).width / 2) + "," + (graph.node(v).y + ($1aa8e069364452a3$var$transformationLog[v] ? $1aa8e069364452a3$var$transformationLog[v].y : 0) - graph.node(v).height / 2) + " )");
            root.select("#" + svgElem.id + " #" + v).attr("data-x-shift", graph.node(v).x - graph.node(v).width / 2);
            const dividers = domDocument.querySelectorAll("#" + svgElem.id + " #" + v + " .divider");
            dividers.forEach((divider)=>{
                const parent = divider.parentElement;
                let pWidth = 0;
                let pShift = 0;
                if (parent) {
                    if (parent.parentElement) pWidth = parent.parentElement.getBBox().width;
                    pShift = parseInt(parent.getAttribute("data-x-shift"), 10);
                    if (Number.isNaN(pShift)) pShift = 0;
                }
                divider.setAttribute("x1", 0 - pShift + 8);
                divider.setAttribute("x2", pWidth - pShift - 8);
            });
        } else (0, $8ZZbk.l).debug("No Node " + v + ": " + JSON.stringify(graph.node(v)));
    });
    let stateBox = svgElem.getBBox();
    graph.edges().forEach(function(e) {
        if (e !== void 0 && graph.edge(e) !== void 0) {
            (0, $8ZZbk.l).debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
            $1aa8e069364452a3$var$drawEdge(diagram2, graph.edge(e), graph.edge(e).relation);
        }
    });
    stateBox = svgElem.getBBox();
    const stateInfo = {
        id: parentId ? parentId : "root",
        label: parentId ? parentId : "root",
        width: 0,
        height: 0
    };
    stateInfo.width = stateBox.width + 2 * $1aa8e069364452a3$var$conf.padding;
    stateInfo.height = stateBox.height + 2 * $1aa8e069364452a3$var$conf.padding;
    (0, $8ZZbk.l).debug("Doc rendered", stateInfo, graph);
    return stateInfo;
};
const $1aa8e069364452a3$var$renderer = {
    setConf: $1aa8e069364452a3$var$setConf,
    draw: $1aa8e069364452a3$var$draw
};
const $1aa8e069364452a3$export$6118d022d940d562 = {
    parser: $l8MD0.p,
    db: $l8MD0.d,
    renderer: $1aa8e069364452a3$var$renderer,
    styles: $l8MD0.s,
    init: (cnf)=>{
        if (!cnf.state) cnf.state = {};
        cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        (0, $l8MD0.d).clear();
    }
};

});

parcelRequire.register("7iKoi", function(module, exports) {

$parcel$export(module.exports, "default", () => $550e331c85ee30b2$export$2e2bcd8739ae039);

var $fcUED = parcelRequire("fcUED");
/** Built-in value references. */ var $550e331c85ee30b2$var$getPrototype = (0, $fcUED.default)(Object.getPrototypeOf, Object);
var $550e331c85ee30b2$export$2e2bcd8739ae039 = $550e331c85ee30b2$var$getPrototype;

});

parcelRequire.register("9MndT", function(module, exports) {

$parcel$export(module.exports, "default", () => $71ea9c64d9d93b18$export$2e2bcd8739ae039);

var $6AgQp = parcelRequire("6AgQp");

var $7iKoi = parcelRequire("7iKoi");

var $f1man = parcelRequire("f1man");
/** `Object#toString` result references. */ var $71ea9c64d9d93b18$var$objectTag = "[object Object]";
/** Used for built-in method references. */ var $71ea9c64d9d93b18$var$funcProto = Function.prototype, $71ea9c64d9d93b18$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $71ea9c64d9d93b18$var$funcToString = $71ea9c64d9d93b18$var$funcProto.toString;
/** Used to check objects for own properties. */ var $71ea9c64d9d93b18$var$hasOwnProperty = $71ea9c64d9d93b18$var$objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var $71ea9c64d9d93b18$var$objectCtorString = $71ea9c64d9d93b18$var$funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function $71ea9c64d9d93b18$var$isPlainObject(value) {
    if (!(0, $f1man.default)(value) || (0, $6AgQp.default)(value) != $71ea9c64d9d93b18$var$objectTag) return false;
    var proto = (0, $7iKoi.default)(value);
    if (proto === null) return true;
    var Ctor = $71ea9c64d9d93b18$var$hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && $71ea9c64d9d93b18$var$funcToString.call(Ctor) == $71ea9c64d9d93b18$var$objectCtorString;
}
var $71ea9c64d9d93b18$export$2e2bcd8739ae039 = $71ea9c64d9d93b18$var$isPlainObject;

});


//# sourceMappingURL=stateDiagram-133e3642.5a465663.js.map
