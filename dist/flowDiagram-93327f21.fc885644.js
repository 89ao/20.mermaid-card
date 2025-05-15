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
parcelRequire.register("exbDv", function(module, exports) {

$parcel$export(module.exports, "a", () => $a94d2c78b99d73e4$export$407448d2b89b1813);
$parcel$export(module.exports, "c", () => $a94d2c78b99d73e4$export$db3b6bfb95261072);
$parcel$export(module.exports, "l", () => $a94d2c78b99d73e4$export$882b5998b3b9117c);
$parcel$export(module.exports, "u", () => $a94d2c78b99d73e4$export$3b14a55fb2447963);
$parcel$export(module.exports, "i", () => $a94d2c78b99d73e4$export$23f2a1d2818174ef);
$parcel$export(module.exports, "e", () => $a94d2c78b99d73e4$export$f1e1789686576879);
$parcel$export(module.exports, "s", () => $a94d2c78b99d73e4$export$2408f22a0fab9ae5);
$parcel$export(module.exports, "b", () => $a94d2c78b99d73e4$export$8b22cf2602fb60ce);
$parcel$export(module.exports, "p", () => $a94d2c78b99d73e4$export$ffb5f4729a158638);
$parcel$export(module.exports, "d", () => $a94d2c78b99d73e4$export$4368d992c4eafac0);
$parcel$export(module.exports, "f", () => $a94d2c78b99d73e4$export$2d1720544b23b823);
$parcel$export(module.exports, "h", () => $a94d2c78b99d73e4$export$dda1d9f60106f0e9);
$parcel$export(module.exports, "g", () => $a94d2c78b99d73e4$export$39b482c5e57630a8);

var $8ZZbk = parcelRequire("8ZZbk");

var $9ONqd = parcelRequire("9ONqd");

var $80tQT = parcelRequire("80tQT");

var $l9e2h = parcelRequire("l9e2h");
const $a94d2c78b99d73e4$var$insertMarkers = (elem, markerArray, type, id)=>{
    markerArray.forEach((markerName)=>{
        $a94d2c78b99d73e4$var$markers[markerName](elem, type, id);
    });
};
const $a94d2c78b99d73e4$var$extension = (elem, type, id)=>{
    (0, $8ZZbk.l).trace("Making markers for ", id);
    elem.append("defs").append("marker").attr("id", type + "-extensionStart").attr("class", "marker extension " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    elem.append("defs").append("marker").attr("id", type + "-extensionEnd").attr("class", "marker extension " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
};
const $a94d2c78b99d73e4$var$composition = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-compositionStart").attr("class", "marker composition " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", type + "-compositionEnd").attr("class", "marker composition " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const $a94d2c78b99d73e4$var$aggregation = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-aggregationStart").attr("class", "marker aggregation " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", type + "-aggregationEnd").attr("class", "marker aggregation " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const $a94d2c78b99d73e4$var$dependency = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-dependencyStart").attr("class", "marker dependency " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", type + "-dependencyEnd").attr("class", "marker dependency " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const $a94d2c78b99d73e4$var$lollipop = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-lollipopStart").attr("class", "marker lollipop " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "white").attr("cx", 6).attr("cy", 7).attr("r", 6);
};
const $a94d2c78b99d73e4$var$point = (elem, type)=>{
    elem.append("marker").attr("id", type + "-pointEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 10).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", type + "-pointStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const $a94d2c78b99d73e4$var$circle$1 = (elem, type)=>{
    elem.append("marker").attr("id", type + "-circleEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", type + "-circleStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const $a94d2c78b99d73e4$var$cross = (elem, type)=>{
    elem.append("marker").attr("id", type + "-crossEnd").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", type + "-crossStart").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
};
const $a94d2c78b99d73e4$var$barb = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const $a94d2c78b99d73e4$var$markers = {
    extension: $a94d2c78b99d73e4$var$extension,
    composition: $a94d2c78b99d73e4$var$composition,
    aggregation: $a94d2c78b99d73e4$var$aggregation,
    dependency: $a94d2c78b99d73e4$var$dependency,
    lollipop: $a94d2c78b99d73e4$var$lollipop,
    point: $a94d2c78b99d73e4$var$point,
    circle: $a94d2c78b99d73e4$var$circle$1,
    cross: $a94d2c78b99d73e4$var$cross,
    barb: $a94d2c78b99d73e4$var$barb
};
const $a94d2c78b99d73e4$export$407448d2b89b1813 = $a94d2c78b99d73e4$var$insertMarkers;
function $a94d2c78b99d73e4$var$applyStyle(dom, styleFn) {
    if (styleFn) dom.attr("style", styleFn);
}
function $a94d2c78b99d73e4$var$addHtmlLabel(node) {
    const fo = (0, $9ONqd.select)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
    const div = fo.append("xhtml:div");
    const label = node.label;
    const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
    div.html('<span class="' + labelClass + '" ' + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>");
    $a94d2c78b99d73e4$var$applyStyle(div, node.labelStyle);
    div.style("display", "inline-block");
    div.style("white-space", "nowrap");
    div.attr("xmlns", "http://www.w3.org/1999/xhtml");
    return fo.node();
}
const $a94d2c78b99d73e4$var$createLabel = (_vertexText, style, isTitle, isNode)=>{
    let vertexText = _vertexText || "";
    if (typeof vertexText === "object") vertexText = vertexText[0];
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        vertexText = vertexText.replace(/\\n|\n/g, "<br />");
        (0, $8ZZbk.l).info("vertexText" + vertexText);
        const node = {
            isNode: isNode,
            label: (0, $8ZZbk.H)(vertexText).replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`),
            labelStyle: style.replace("fill:", "color:")
        };
        let vertexNode = $a94d2c78b99d73e4$var$addHtmlLabel(node);
        return vertexNode;
    } else {
        const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        svgLabel.setAttribute("style", style.replace("color:", "fill:"));
        let rows = [];
        if (typeof vertexText === "string") rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
        else if (Array.isArray(vertexText)) rows = vertexText;
        else rows = [];
        for (const row of rows){
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            tspan.setAttribute("dy", "1em");
            tspan.setAttribute("x", "0");
            if (isTitle) tspan.setAttribute("class", "title-row");
            else tspan.setAttribute("class", "row");
            tspan.textContent = row.trim();
            svgLabel.appendChild(tspan);
        }
        return svgLabel;
    }
};
const $a94d2c78b99d73e4$export$db3b6bfb95261072 = $a94d2c78b99d73e4$var$createLabel;
const $a94d2c78b99d73e4$export$882b5998b3b9117c = async (parent, node, _classes, isNode)=>{
    let classes;
    const useHtmlLabels = node.useHtmlLabels || (0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels);
    if (!_classes) classes = "node default";
    else classes = _classes;
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const label = shapeSvg.insert("g").attr("class", "label").attr("style", node.labelStyle);
    let labelText;
    if (node.labelText === void 0) labelText = "";
    else labelText = typeof node.labelText === "string" ? node.labelText : node.labelText[0];
    const textNode = label.node();
    let text;
    if (node.labelType === "markdown") text = (0, $80tQT.c)(label, (0, $8ZZbk.d)((0, $8ZZbk.H)(labelText), (0, $8ZZbk.c)()), {
        useHtmlLabels: useHtmlLabels,
        width: node.width || (0, $8ZZbk.c)().flowchart.wrappingWidth,
        classes: "markdown-node-label"
    });
    else text = textNode.appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072((0, $8ZZbk.d)((0, $8ZZbk.H)(labelText), (0, $8ZZbk.c)()), node.labelStyle, false, isNode));
    let bbox = text.getBBox();
    const halfPadding = node.padding / 2;
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, $9ONqd.select)(text);
        const images = div.getElementsByTagName("img");
        if (images) {
            const noImgText = labelText.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all([
                ...images
            ].map((img)=>new Promise((res)=>img.addEventListener("load", function() {
                        img.style.display = "flex";
                        img.style.flexDirection = "column";
                        if (noImgText) {
                            const bodyFontSize = (0, $8ZZbk.c)().fontSize ? (0, $8ZZbk.c)().fontSize : window.getComputedStyle(document.body).fontSize;
                            const enlargingFactor = 5;
                            img.style.width = parseInt(bodyFontSize, 10) * enlargingFactor + "px";
                        } else img.style.width = "100%";
                        res(img);
                    }))));
        }
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    if (useHtmlLabels) label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    else label.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
    if (node.centerLabel) label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    label.insert("rect", ":first-child");
    return {
        shapeSvg: shapeSvg,
        bbox: bbox,
        halfPadding: halfPadding,
        label: label
    };
};
const $a94d2c78b99d73e4$export$3b14a55fb2447963 = (node, element)=>{
    const bbox = element.node().getBBox();
    node.width = bbox.width;
    node.height = bbox.height;
};
function $a94d2c78b99d73e4$var$insertPolygonShape(parent, w, h, points) {
    return parent.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
function $a94d2c78b99d73e4$var$intersectNode(node, point2) {
    return node.intersect(point2);
}
function $a94d2c78b99d73e4$var$intersectEllipse(node, rx, ry, point2) {
    var cx = node.x;
    var cy = node.y;
    var px = cx - point2.x;
    var py = cy - point2.y;
    var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
    var dx = Math.abs(rx * ry * px / det);
    if (point2.x < cx) dx = -dx;
    var dy = Math.abs(rx * ry * py / det);
    if (point2.y < cy) dy = -dy;
    return {
        x: cx + dx,
        y: cy + dy
    };
}
function $a94d2c78b99d73e4$var$intersectCircle(node, rx, point2) {
    return $a94d2c78b99d73e4$var$intersectEllipse(node, rx, rx, point2);
}
function $a94d2c78b99d73e4$var$intersectLine(p1, p2, q1, q2) {
    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;
    var x, y;
    a1 = p2.y - p1.y;
    b1 = p1.x - p2.x;
    c1 = p2.x * p1.y - p1.x * p2.y;
    r3 = a1 * q1.x + b1 * q1.y + c1;
    r4 = a1 * q2.x + b1 * q2.y + c1;
    if (r3 !== 0 && r4 !== 0 && $a94d2c78b99d73e4$var$sameSign(r3, r4)) return;
    a2 = q2.y - q1.y;
    b2 = q1.x - q2.x;
    c2 = q2.x * q1.y - q1.x * q2.y;
    r1 = a2 * p1.x + b2 * p1.y + c2;
    r2 = a2 * p2.x + b2 * p2.y + c2;
    if (r1 !== 0 && r2 !== 0 && $a94d2c78b99d73e4$var$sameSign(r1, r2)) return;
    denom = a1 * b2 - a2 * b1;
    if (denom === 0) return;
    offset = Math.abs(denom / 2);
    num = b1 * c2 - b2 * c1;
    x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a2 * c1 - a1 * c2;
    y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return {
        x: x,
        y: y
    };
}
function $a94d2c78b99d73e4$var$sameSign(r1, r2) {
    return r1 * r2 > 0;
}
function $a94d2c78b99d73e4$var$intersectPolygon(node, polyPoints, point2) {
    var x1 = node.x;
    var y1 = node.y;
    var intersections = [];
    var minX = Number.POSITIVE_INFINITY;
    var minY = Number.POSITIVE_INFINITY;
    if (typeof polyPoints.forEach === "function") polyPoints.forEach(function(entry) {
        minX = Math.min(minX, entry.x);
        minY = Math.min(minY, entry.y);
    });
    else {
        minX = Math.min(minX, polyPoints.x);
        minY = Math.min(minY, polyPoints.y);
    }
    var left = x1 - node.width / 2 - minX;
    var top = y1 - node.height / 2 - minY;
    for(var i = 0; i < polyPoints.length; i++){
        var p1 = polyPoints[i];
        var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
        var intersect2 = $a94d2c78b99d73e4$var$intersectLine(node, point2, {
            x: left + p1.x,
            y: top + p1.y
        }, {
            x: left + p2.x,
            y: top + p2.y
        });
        if (intersect2) intersections.push(intersect2);
    }
    if (!intersections.length) return node;
    if (intersections.length > 1) intersections.sort(function(p, q) {
        var pdx = p.x - point2.x;
        var pdy = p.y - point2.y;
        var distp = Math.sqrt(pdx * pdx + pdy * pdy);
        var qdx = q.x - point2.x;
        var qdy = q.y - point2.y;
        var distq = Math.sqrt(qdx * qdx + qdy * qdy);
        return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
    return intersections[0];
}
const $a94d2c78b99d73e4$var$intersectRect = (node, point2)=>{
    var x = node.x;
    var y = node.y;
    var dx = point2.x - x;
    var dy = point2.y - y;
    var w = node.width / 2;
    var h = node.height / 2;
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        if (dy < 0) h = -h;
        sx = dy === 0 ? 0 : h * dx / dy;
        sy = h;
    } else {
        if (dx < 0) w = -w;
        sx = w;
        sy = dx === 0 ? 0 : w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
};
const $a94d2c78b99d73e4$export$23f2a1d2818174ef = $a94d2c78b99d73e4$var$intersectRect;
const $a94d2c78b99d73e4$var$intersect = {
    node: $a94d2c78b99d73e4$var$intersectNode,
    circle: $a94d2c78b99d73e4$var$intersectCircle,
    ellipse: $a94d2c78b99d73e4$var$intersectEllipse,
    polygon: $a94d2c78b99d73e4$var$intersectPolygon,
    rect: $a94d2c78b99d73e4$export$23f2a1d2818174ef
};
const $a94d2c78b99d73e4$var$note = async (parent, node)=>{
    const useHtmlLabels = node.useHtmlLabels || (0, $8ZZbk.c)().flowchart.htmlLabels;
    if (!useHtmlLabels) node.centerLabel = true;
    const { shapeSvg: shapeSvg , bbox: bbox , halfPadding: halfPadding  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, "node " + node.classes, true);
    (0, $8ZZbk.l).info("Classes = ", node.classes);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, rect2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$note$1 = $a94d2c78b99d73e4$var$note;
const $a94d2c78b99d73e4$var$question = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const s = w + h;
    const points = [
        {
            x: s / 2,
            y: 0
        },
        {
            x: s,
            y: -s / 2
        },
        {
            x: s / 2,
            y: -s
        },
        {
            x: 0,
            y: -s / 2
        }
    ];
    (0, $8ZZbk.l).info("Question main (Circle)");
    const questionElem = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, s, s, points);
    questionElem.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, questionElem);
    node.intersect = function(point2) {
        (0, $8ZZbk.l).warn("Intersect called");
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$choice = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const s = 28;
    const points = [
        {
            x: 0,
            y: s / 2
        },
        {
            x: s / 2,
            y: 0
        },
        {
            x: 0,
            y: -s / 2
        },
        {
            x: -s / 2,
            y: 0
        }
    ];
    const choice2 = shapeSvg.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" "));
    choice2.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
    node.width = 28;
    node.height = 28;
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.circle(node, 14, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$hexagon = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const f = 4;
    const h = bbox.height + node.padding;
    const m = h / f;
    const w = bbox.width + 2 * m + node.padding;
    const points = [
        {
            x: m,
            y: 0
        },
        {
            x: w - m,
            y: 0
        },
        {
            x: w,
            y: -h / 2
        },
        {
            x: w - m,
            y: -h
        },
        {
            x: m,
            y: -h
        },
        {
            x: 0,
            y: -h / 2
        }
    ];
    const hex = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    hex.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, hex);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$rect_left_inv_arrow = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -h / 2,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: -h / 2,
            y: -h
        },
        {
            x: 0,
            y: -h / 2
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    node.width = w + h;
    node.height = h;
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$lean_right = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -2 * h / 6,
            y: 0
        },
        {
            x: w - h / 6,
            y: 0
        },
        {
            x: w + 2 * h / 6,
            y: -h
        },
        {
            x: h / 6,
            y: -h
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$lean_left = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: 2 * h / 6,
            y: 0
        },
        {
            x: w + h / 6,
            y: 0
        },
        {
            x: w - 2 * h / 6,
            y: -h
        },
        {
            x: -h / 6,
            y: -h
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$trapezoid = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -2 * h / 6,
            y: 0
        },
        {
            x: w + 2 * h / 6,
            y: 0
        },
        {
            x: w - h / 6,
            y: -h
        },
        {
            x: h / 6,
            y: -h
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$inv_trapezoid = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: h / 6,
            y: 0
        },
        {
            x: w - h / 6,
            y: 0
        },
        {
            x: w + 2 * h / 6,
            y: -h
        },
        {
            x: -2 * h / 6,
            y: -h
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$rect_right_inv_arrow = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w + h / 2,
            y: 0
        },
        {
            x: w,
            y: -h / 2
        },
        {
            x: w + h / 2,
            y: -h
        },
        {
            x: 0,
            y: -h
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$cylinder = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = bbox.height + ry + node.padding;
    const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
    const el = shapeSvg.attr("label-offset-y", ry).insert("path", ":first-child").attr("style", node.style).attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        const pos = $a94d2c78b99d73e4$var$intersect.rect(node, point2);
        const x = pos.x - node.x;
        if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
            let y = ry * ry * (1 - x * x / (rx * rx));
            if (y != 0) y = Math.sqrt(y);
            y = ry - y;
            if (point2.y - node.y > 0) y = -y;
            pos.y += y;
        }
        return pos;
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$rect = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox , halfPadding: halfPadding  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, "node " + node.classes, true);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = bbox.width + node.padding;
    const totalHeight = bbox.height + node.padding;
    rect2.attr("class", "basic label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", totalWidth).attr("height", totalHeight);
    if (node.props) {
        const propKeys = new Set(Object.keys(node.props));
        if (node.props.borders) {
            $a94d2c78b99d73e4$var$applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
            propKeys.delete("borders");
        }
        propKeys.forEach((propKey)=>{
            (0, $8ZZbk.l).warn(`Unknown node property ${propKey}`);
        });
    }
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, rect2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$labelRect = async (parent, node)=>{
    const { shapeSvg: shapeSvg  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, "label", true);
    (0, $8ZZbk.l).trace("Classes = ", node.classes);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = 0;
    const totalHeight = 0;
    rect2.attr("width", totalWidth).attr("height", totalHeight);
    shapeSvg.attr("class", "label edgeLabel");
    if (node.props) {
        const propKeys = new Set(Object.keys(node.props));
        if (node.props.borders) {
            $a94d2c78b99d73e4$var$applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
            propKeys.delete("borders");
        }
        propKeys.forEach((propKey)=>{
            (0, $8ZZbk.l).warn(`Unknown node property ${propKey}`);
        });
    }
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, rect2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
function $a94d2c78b99d73e4$var$applyNodePropertyBorders(rect2, borders, totalWidth, totalHeight) {
    const strokeDashArray = [];
    const addBorder = (length)=>{
        strokeDashArray.push(length, 0);
    };
    const skipBorder = (length)=>{
        strokeDashArray.push(0, length);
    };
    if (borders.includes("t")) {
        (0, $8ZZbk.l).debug("add top border");
        addBorder(totalWidth);
    } else skipBorder(totalWidth);
    if (borders.includes("r")) {
        (0, $8ZZbk.l).debug("add right border");
        addBorder(totalHeight);
    } else skipBorder(totalHeight);
    if (borders.includes("b")) {
        (0, $8ZZbk.l).debug("add bottom border");
        addBorder(totalWidth);
    } else skipBorder(totalWidth);
    if (borders.includes("l")) {
        (0, $8ZZbk.l).debug("add left border");
        addBorder(totalHeight);
    } else skipBorder(totalHeight);
    rect2.attr("stroke-dasharray", strokeDashArray.join(" "));
}
const $a94d2c78b99d73e4$var$rectWithTitle = (parent, node)=>{
    let classes;
    if (!node.classes) classes = "node default";
    else classes = "node " + node.classes;
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const innerLine = shapeSvg.insert("line");
    const label = shapeSvg.insert("g").attr("class", "label");
    const text2 = node.labelText.flat ? node.labelText.flat() : node.labelText;
    let title = "";
    if (typeof text2 === "object") title = text2[0];
    else title = text2;
    (0, $8ZZbk.l).info("Label text abc79", title, text2, typeof text2 === "object");
    const text = label.node().appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072(title, node.labelStyle, true, true));
    let bbox = {
        width: 0,
        height: 0
    };
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, $9ONqd.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    (0, $8ZZbk.l).info("Text 2", text2);
    const textRows = text2.slice(1, text2.length);
    let titleBox = text.getBBox();
    const descr = label.node().appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true));
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = descr.children[0];
        const dv = (0, $9ONqd.select)(descr);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const halfPadding = node.padding / 2;
    (0, $9ONqd.select)(descr).attr("transform", "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")");
    (0, $9ONqd.select)(text).attr("transform", "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", 0)");
    bbox = label.node().getBBox();
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")");
    rect2.attr("class", "outer title-state").attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, rect2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$stadium = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const h = bbox.height + node.padding;
    const w = bbox.width + h / 4 + node.padding;
    const rect2 = shapeSvg.insert("rect", ":first-child").attr("style", node.style).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, rect2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$circle = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox , halfPadding: halfPadding  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    (0, $8ZZbk.l).info("Circle main");
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, circle2);
    node.intersect = function(point2) {
        (0, $8ZZbk.l).info("Circle intersect", node, bbox.width / 2 + halfPadding, point2);
        return $a94d2c78b99d73e4$var$intersect.circle(node, bbox.width / 2 + halfPadding, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$doublecircle = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox , halfPadding: halfPadding  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const gap = 5;
    const circleGroup = shapeSvg.insert("g", ":first-child");
    const outerCircle = circleGroup.insert("circle");
    const innerCircle = circleGroup.insert("circle");
    outerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding + gap).attr("width", bbox.width + node.padding + gap * 2).attr("height", bbox.height + node.padding + gap * 2);
    innerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    (0, $8ZZbk.l).info("DoubleCircle main");
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, outerCircle);
    node.intersect = function(point2) {
        (0, $8ZZbk.l).info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point2);
        return $a94d2c78b99d73e4$var$intersect.circle(node, bbox.width / 2 + halfPadding + gap, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$subroutine = async (parent, node)=>{
    const { shapeSvg: shapeSvg , bbox: bbox  } = await $a94d2c78b99d73e4$export$882b5998b3b9117c(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: 0,
            y: -h
        },
        {
            x: 0,
            y: 0
        },
        {
            x: -8,
            y: 0
        },
        {
            x: w + 8,
            y: 0
        },
        {
            x: w + 8,
            y: -h
        },
        {
            x: -8,
            y: -h
        },
        {
            x: -8,
            y: 0
        }
    ];
    const el = $a94d2c78b99d73e4$var$insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, el);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$start = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, circle2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.circle(node, 7, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$forkJoin = (parent, node, dir)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    let width = 70;
    let height = 10;
    if (dir === "LR") {
        width = 10;
        height = 70;
    }
    const shape = shapeSvg.append("rect").attr("x", -1 * width / 2).attr("y", -1 * height / 2).attr("width", width).attr("height", height).attr("class", "fork-join");
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, shape);
    node.height = node.height + node.padding / 2;
    node.width = node.width + node.padding / 2;
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$end = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const innerCircle = shapeSvg.insert("circle", ":first-child");
    const circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    innerCircle.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, circle2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.circle(node, 7, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$class_box = (parent, node)=>{
    const halfPadding = node.padding / 2;
    const rowPadding = 4;
    const lineHeight = 8;
    let classes;
    if (!node.classes) classes = "node default";
    else classes = "node " + node.classes;
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const topLine = shapeSvg.insert("line");
    const bottomLine = shapeSvg.insert("line");
    let maxWidth = 0;
    let maxHeight = rowPadding;
    const labelContainer = shapeSvg.insert("g").attr("class", "label");
    let verticalPos = 0;
    const hasInterface = node.classData.annotations && node.classData.annotations[0];
    const interfaceLabelText = node.classData.annotations[0] ? "\xab" + node.classData.annotations[0] + "\xbb" : "";
    const interfaceLabel = labelContainer.node().appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072(interfaceLabelText, node.labelStyle, true, true));
    let interfaceBBox = interfaceLabel.getBBox();
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = interfaceLabel.children[0];
        const dv = (0, $9ONqd.select)(interfaceLabel);
        interfaceBBox = div.getBoundingClientRect();
        dv.attr("width", interfaceBBox.width);
        dv.attr("height", interfaceBBox.height);
    }
    if (node.classData.annotations[0]) {
        maxHeight += interfaceBBox.height + rowPadding;
        maxWidth += interfaceBBox.width;
    }
    let classTitleString = node.classData.label;
    if (node.classData.type !== void 0 && node.classData.type !== "") {
        if ((0, $8ZZbk.c)().flowchart.htmlLabels) classTitleString += "&lt;" + node.classData.type + "&gt;";
        else classTitleString += "<" + node.classData.type + ">";
    }
    const classTitleLabel = labelContainer.node().appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072(classTitleString, node.labelStyle, true, true));
    (0, $9ONqd.select)(classTitleLabel).attr("class", "classTitle");
    let classTitleBBox = classTitleLabel.getBBox();
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = classTitleLabel.children[0];
        const dv = (0, $9ONqd.select)(classTitleLabel);
        classTitleBBox = div.getBoundingClientRect();
        dv.attr("width", classTitleBBox.width);
        dv.attr("height", classTitleBBox.height);
    }
    maxHeight += classTitleBBox.height + rowPadding;
    if (classTitleBBox.width > maxWidth) maxWidth = classTitleBBox.width;
    const classAttributes = [];
    node.classData.members.forEach((str)=>{
        const parsedInfo = (0, $l9e2h.p)(str);
        let parsedText = parsedInfo.displayText;
        if ((0, $8ZZbk.c)().flowchart.htmlLabels) parsedText = parsedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const lbl = labelContainer.node().appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072(parsedText, parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle, true, true));
        let bbox = lbl.getBBox();
        if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
            const div = lbl.children[0];
            const dv = (0, $9ONqd.select)(lbl);
            bbox = div.getBoundingClientRect();
            dv.attr("width", bbox.width);
            dv.attr("height", bbox.height);
        }
        if (bbox.width > maxWidth) maxWidth = bbox.width;
        maxHeight += bbox.height + rowPadding;
        classAttributes.push(lbl);
    });
    maxHeight += lineHeight;
    const classMethods = [];
    node.classData.methods.forEach((str)=>{
        const parsedInfo = (0, $l9e2h.p)(str);
        let displayText = parsedInfo.displayText;
        if ((0, $8ZZbk.c)().flowchart.htmlLabels) displayText = displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const lbl = labelContainer.node().appendChild($a94d2c78b99d73e4$export$db3b6bfb95261072(displayText, parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle, true, true));
        let bbox = lbl.getBBox();
        if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
            const div = lbl.children[0];
            const dv = (0, $9ONqd.select)(lbl);
            bbox = div.getBoundingClientRect();
            dv.attr("width", bbox.width);
            dv.attr("height", bbox.height);
        }
        if (bbox.width > maxWidth) maxWidth = bbox.width;
        maxHeight += bbox.height + rowPadding;
        classMethods.push(lbl);
    });
    maxHeight += lineHeight;
    if (hasInterface) {
        let diffX2 = (maxWidth - interfaceBBox.width) / 2;
        (0, $9ONqd.select)(interfaceLabel).attr("transform", "translate( " + (-1 * maxWidth / 2 + diffX2) + ", " + -1 * maxHeight / 2 + ")");
        verticalPos = interfaceBBox.height + rowPadding;
    }
    let diffX = (maxWidth - classTitleBBox.width) / 2;
    (0, $9ONqd.select)(classTitleLabel).attr("transform", "translate( " + (-1 * maxWidth / 2 + diffX) + ", " + (-1 * maxHeight / 2 + verticalPos) + ")");
    verticalPos += classTitleBBox.height + rowPadding;
    topLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
    verticalPos += lineHeight;
    classAttributes.forEach((lbl)=>{
        (0, $9ONqd.select)(lbl).attr("transform", "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos + lineHeight / 2) + ")");
        verticalPos += classTitleBBox.height + rowPadding;
    });
    verticalPos += lineHeight;
    bottomLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
    verticalPos += lineHeight;
    classMethods.forEach((lbl)=>{
        (0, $9ONqd.select)(lbl).attr("transform", "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos) + ")");
        verticalPos += classTitleBBox.height + rowPadding;
    });
    rect2.attr("class", "outer title-state").attr("x", -maxWidth / 2 - halfPadding).attr("y", -(maxHeight / 2) - halfPadding).attr("width", maxWidth + node.padding).attr("height", maxHeight + node.padding);
    $a94d2c78b99d73e4$export$3b14a55fb2447963(node, rect2);
    node.intersect = function(point2) {
        return $a94d2c78b99d73e4$var$intersect.rect(node, point2);
    };
    return shapeSvg;
};
const $a94d2c78b99d73e4$var$shapes = {
    rhombus: $a94d2c78b99d73e4$var$question,
    question: $a94d2c78b99d73e4$var$question,
    rect: $a94d2c78b99d73e4$var$rect,
    labelRect: $a94d2c78b99d73e4$var$labelRect,
    rectWithTitle: $a94d2c78b99d73e4$var$rectWithTitle,
    choice: $a94d2c78b99d73e4$var$choice,
    circle: $a94d2c78b99d73e4$var$circle,
    doublecircle: $a94d2c78b99d73e4$var$doublecircle,
    stadium: $a94d2c78b99d73e4$var$stadium,
    hexagon: $a94d2c78b99d73e4$var$hexagon,
    rect_left_inv_arrow: $a94d2c78b99d73e4$var$rect_left_inv_arrow,
    lean_right: $a94d2c78b99d73e4$var$lean_right,
    lean_left: $a94d2c78b99d73e4$var$lean_left,
    trapezoid: $a94d2c78b99d73e4$var$trapezoid,
    inv_trapezoid: $a94d2c78b99d73e4$var$inv_trapezoid,
    rect_right_inv_arrow: $a94d2c78b99d73e4$var$rect_right_inv_arrow,
    cylinder: $a94d2c78b99d73e4$var$cylinder,
    start: $a94d2c78b99d73e4$var$start,
    end: $a94d2c78b99d73e4$var$end,
    note: $a94d2c78b99d73e4$var$note$1,
    subroutine: $a94d2c78b99d73e4$var$subroutine,
    fork: $a94d2c78b99d73e4$var$forkJoin,
    join: $a94d2c78b99d73e4$var$forkJoin,
    class_box: $a94d2c78b99d73e4$var$class_box
};
let $a94d2c78b99d73e4$var$nodeElems = {};
const $a94d2c78b99d73e4$export$f1e1789686576879 = async (elem, node, dir)=>{
    let newEl;
    let el;
    if (node.link) {
        let target;
        if ((0, $8ZZbk.c)().securityLevel === "sandbox") target = "_top";
        else if (node.linkTarget) target = node.linkTarget || "_blank";
        newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target);
        el = await $a94d2c78b99d73e4$var$shapes[node.shape](newEl, node, dir);
    } else {
        el = await $a94d2c78b99d73e4$var$shapes[node.shape](elem, node, dir);
        newEl = el;
    }
    if (node.tooltip) el.attr("title", node.tooltip);
    if (node.class) el.attr("class", "node default " + node.class);
    $a94d2c78b99d73e4$var$nodeElems[node.id] = newEl;
    if (node.haveCallback) $a94d2c78b99d73e4$var$nodeElems[node.id].attr("class", $a94d2c78b99d73e4$var$nodeElems[node.id].attr("class") + " clickable");
    return newEl;
};
const $a94d2c78b99d73e4$export$2408f22a0fab9ae5 = (elem, node)=>{
    $a94d2c78b99d73e4$var$nodeElems[node.id] = elem;
};
const $a94d2c78b99d73e4$export$8b22cf2602fb60ce = ()=>{
    $a94d2c78b99d73e4$var$nodeElems = {};
};
const $a94d2c78b99d73e4$export$ffb5f4729a158638 = (node)=>{
    const el = $a94d2c78b99d73e4$var$nodeElems[node.id];
    (0, $8ZZbk.l).trace("Transforming node", node.diff, node, "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")");
    const padding = 8;
    const diff = node.diff || 0;
    if (node.clusterNode) el.attr("transform", "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")");
    else el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
    return diff;
};
let $a94d2c78b99d73e4$var$edgeLabels = {};
let $a94d2c78b99d73e4$var$terminalLabels = {};
const $a94d2c78b99d73e4$export$4368d992c4eafac0 = ()=>{
    $a94d2c78b99d73e4$var$edgeLabels = {};
    $a94d2c78b99d73e4$var$terminalLabels = {};
};
const $a94d2c78b99d73e4$export$2d1720544b23b823 = (elem, edge)=>{
    const useHtmlLabels = (0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels);
    const labelElement = edge.labelType === "markdown" ? (0, $80tQT.c)(elem, edge.label, {
        style: edge.labelStyle,
        useHtmlLabels: useHtmlLabels,
        addSvgBackground: true
    }) : $a94d2c78b99d73e4$export$db3b6bfb95261072(edge.label, edge.labelStyle);
    (0, $8ZZbk.l).info("abc82", edge, edge.labelType);
    const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
    const label = edgeLabel.insert("g").attr("class", "label");
    label.node().appendChild(labelElement);
    let bbox = labelElement.getBBox();
    if (useHtmlLabels) {
        const div = labelElement.children[0];
        const dv = (0, $9ONqd.select)(labelElement);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    $a94d2c78b99d73e4$var$edgeLabels[edge.id] = edgeLabel;
    edge.width = bbox.width;
    edge.height = bbox.height;
    let fo;
    if (edge.startLabelLeft) {
        const startLabelElement = $a94d2c78b99d73e4$export$db3b6bfb95261072(edge.startLabelLeft, edge.labelStyle);
        const startEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
        const inner = startEdgeLabelLeft.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(startLabelElement);
        const slBox = startLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        if (!$a94d2c78b99d73e4$var$terminalLabels[edge.id]) $a94d2c78b99d73e4$var$terminalLabels[edge.id] = {};
        $a94d2c78b99d73e4$var$terminalLabels[edge.id].startLeft = startEdgeLabelLeft;
        $a94d2c78b99d73e4$var$setTerminalWidth(fo, edge.startLabelLeft);
    }
    if (edge.startLabelRight) {
        const startLabelElement = $a94d2c78b99d73e4$export$db3b6bfb95261072(edge.startLabelRight, edge.labelStyle);
        const startEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
        const inner = startEdgeLabelRight.insert("g").attr("class", "inner");
        fo = startEdgeLabelRight.node().appendChild(startLabelElement);
        inner.node().appendChild(startLabelElement);
        const slBox = startLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        if (!$a94d2c78b99d73e4$var$terminalLabels[edge.id]) $a94d2c78b99d73e4$var$terminalLabels[edge.id] = {};
        $a94d2c78b99d73e4$var$terminalLabels[edge.id].startRight = startEdgeLabelRight;
        $a94d2c78b99d73e4$var$setTerminalWidth(fo, edge.startLabelRight);
    }
    if (edge.endLabelLeft) {
        const endLabelElement = $a94d2c78b99d73e4$export$db3b6bfb95261072(edge.endLabelLeft, edge.labelStyle);
        const endEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
        const inner = endEdgeLabelLeft.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(endLabelElement);
        const slBox = endLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        endEdgeLabelLeft.node().appendChild(endLabelElement);
        if (!$a94d2c78b99d73e4$var$terminalLabels[edge.id]) $a94d2c78b99d73e4$var$terminalLabels[edge.id] = {};
        $a94d2c78b99d73e4$var$terminalLabels[edge.id].endLeft = endEdgeLabelLeft;
        $a94d2c78b99d73e4$var$setTerminalWidth(fo, edge.endLabelLeft);
    }
    if (edge.endLabelRight) {
        const endLabelElement = $a94d2c78b99d73e4$export$db3b6bfb95261072(edge.endLabelRight, edge.labelStyle);
        const endEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
        const inner = endEdgeLabelRight.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(endLabelElement);
        const slBox = endLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        endEdgeLabelRight.node().appendChild(endLabelElement);
        if (!$a94d2c78b99d73e4$var$terminalLabels[edge.id]) $a94d2c78b99d73e4$var$terminalLabels[edge.id] = {};
        $a94d2c78b99d73e4$var$terminalLabels[edge.id].endRight = endEdgeLabelRight;
        $a94d2c78b99d73e4$var$setTerminalWidth(fo, edge.endLabelRight);
    }
    return labelElement;
};
function $a94d2c78b99d73e4$var$setTerminalWidth(fo, value) {
    if ((0, $8ZZbk.c)().flowchart.htmlLabels && fo) {
        fo.style.width = value.length * 9 + "px";
        fo.style.height = "12px";
    }
}
const $a94d2c78b99d73e4$export$dda1d9f60106f0e9 = (edge, paths)=>{
    (0, $8ZZbk.l).info("Moving label abc78 ", edge.id, edge.label, $a94d2c78b99d73e4$var$edgeLabels[edge.id]);
    let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
    if (edge.label) {
        const el = $a94d2c78b99d73e4$var$edgeLabels[edge.id];
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, $8ZZbk.u).calcLabelPosition(path);
            (0, $8ZZbk.l).info("Moving label " + edge.label + " from (", x, ",", y, ") to (", pos.x, ",", pos.y, ") abc78");
            if (paths.updatedPath) {
                x = pos.x;
                y = pos.y;
            }
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.startLabelLeft) {
        const el = $a94d2c78b99d73e4$var$terminalLabels[edge.id].startLeft;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, $8ZZbk.u).calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.startLabelRight) {
        const el = $a94d2c78b99d73e4$var$terminalLabels[edge.id].startRight;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, $8ZZbk.u).calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_right", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.endLabelLeft) {
        const el = $a94d2c78b99d73e4$var$terminalLabels[edge.id].endLeft;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, $8ZZbk.u).calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.endLabelRight) {
        const el = $a94d2c78b99d73e4$var$terminalLabels[edge.id].endRight;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, $8ZZbk.u).calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
};
const $a94d2c78b99d73e4$var$outsideNode = (node, point2)=>{
    const x = node.x;
    const y = node.y;
    const dx = Math.abs(point2.x - x);
    const dy = Math.abs(point2.y - y);
    const w = node.width / 2;
    const h = node.height / 2;
    if (dx >= w || dy >= h) return true;
    return false;
};
const $a94d2c78b99d73e4$var$intersection = (node, outsidePoint, insidePoint)=>{
    (0, $8ZZbk.l).warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(outsidePoint)}
  insidePoint : ${JSON.stringify(insidePoint)}
  node        : x:${node.x} y:${node.y} w:${node.width} h:${node.height}`);
    const x = node.x;
    const y = node.y;
    const dx = Math.abs(x - insidePoint.x);
    const w = node.width / 2;
    let r = insidePoint.x < outsidePoint.x ? w - dx : w + dx;
    const h = node.height / 2;
    const Q = Math.abs(outsidePoint.y - insidePoint.y);
    const R = Math.abs(outsidePoint.x - insidePoint.x);
    if (Math.abs(y - outsidePoint.y) * w > Math.abs(x - outsidePoint.x) * h) {
        let q = insidePoint.y < outsidePoint.y ? outsidePoint.y - h - y : y - h - outsidePoint.y;
        r = R * q / Q;
        const res = {
            x: insidePoint.x < outsidePoint.x ? insidePoint.x + r : insidePoint.x - R + r,
            y: insidePoint.y < outsidePoint.y ? insidePoint.y + Q - q : insidePoint.y - Q + q
        };
        if (r === 0) {
            res.x = outsidePoint.x;
            res.y = outsidePoint.y;
        }
        if (R === 0) res.x = outsidePoint.x;
        if (Q === 0) res.y = outsidePoint.y;
        (0, $8ZZbk.l).warn(`abc89 topp/bott calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
        return res;
    } else {
        if (insidePoint.x < outsidePoint.x) r = outsidePoint.x - w - x;
        else r = x - w - outsidePoint.x;
        let q = Q * r / R;
        let _x = insidePoint.x < outsidePoint.x ? insidePoint.x + R - r : insidePoint.x - R + r;
        let _y = insidePoint.y < outsidePoint.y ? insidePoint.y + q : insidePoint.y - q;
        (0, $8ZZbk.l).warn(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, {
            _x: _x,
            _y: _y
        });
        if (r === 0) {
            _x = outsidePoint.x;
            _y = outsidePoint.y;
        }
        if (R === 0) _x = outsidePoint.x;
        if (Q === 0) _y = outsidePoint.y;
        return {
            x: _x,
            y: _y
        };
    }
};
const $a94d2c78b99d73e4$var$cutPathAtIntersect = (_points, boundryNode)=>{
    (0, $8ZZbk.l).warn("abc88 cutPathAtIntersect", _points, boundryNode);
    let points = [];
    let lastPointOutside = _points[0];
    let isInside = false;
    _points.forEach((point2)=>{
        (0, $8ZZbk.l).info("abc88 checking point", point2, boundryNode);
        if (!$a94d2c78b99d73e4$var$outsideNode(boundryNode, point2) && !isInside) {
            const inter = $a94d2c78b99d73e4$var$intersection(boundryNode, lastPointOutside, point2);
            (0, $8ZZbk.l).warn("abc88 inside", point2, lastPointOutside, inter);
            (0, $8ZZbk.l).warn("abc88 intersection", inter);
            let pointPresent = false;
            points.forEach((p)=>{
                pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
            });
            if (!points.some((e)=>e.x === inter.x && e.y === inter.y)) points.push(inter);
            else (0, $8ZZbk.l).warn("abc88 no intersect", inter, points);
            isInside = true;
        } else {
            (0, $8ZZbk.l).warn("abc88 outside", point2, lastPointOutside);
            lastPointOutside = point2;
            if (!isInside) points.push(point2);
        }
    });
    (0, $8ZZbk.l).warn("abc88 returning points", points);
    return points;
};
const $a94d2c78b99d73e4$export$39b482c5e57630a8 = function(elem, e, edge, clusterDb, diagramType, graph) {
    let points = edge.points;
    let pointsHasChanged = false;
    const tail = graph.node(e.v);
    var head = graph.node(e.w);
    (0, $8ZZbk.l).info("abc88 InsertEdge: ", edge);
    if (head.intersect && tail.intersect) {
        points = points.slice(1, edge.points.length - 1);
        points.unshift(tail.intersect(points[0]));
        (0, $8ZZbk.l).info("Last point", points[points.length - 1], head, head.intersect(points[points.length - 1]));
        points.push(head.intersect(points[points.length - 1]));
    }
    if (edge.toCluster) {
        (0, $8ZZbk.l).info("to cluster abc88", clusterDb[edge.toCluster]);
        points = $a94d2c78b99d73e4$var$cutPathAtIntersect(edge.points, clusterDb[edge.toCluster].node);
        pointsHasChanged = true;
    }
    if (edge.fromCluster) {
        (0, $8ZZbk.l).info("from cluster abc88", clusterDb[edge.fromCluster]);
        points = $a94d2c78b99d73e4$var$cutPathAtIntersect(points.reverse(), clusterDb[edge.fromCluster].node).reverse();
        pointsHasChanged = true;
    }
    const lineData = points.filter((p)=>!Number.isNaN(p.y));
    let curve;
    if (diagramType === "graph" || diagramType === "flowchart") curve = edge.curve || (0, $9ONqd.curveBasis);
    else curve = (0, $9ONqd.curveBasis);
    const lineFunction = (0, $9ONqd.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve(curve);
    let strokeClasses;
    switch(edge.thickness){
        case "normal":
            strokeClasses = "edge-thickness-normal";
            break;
        case "thick":
            strokeClasses = "edge-thickness-thick";
            break;
        case "invisible":
            strokeClasses = "edge-thickness-thick";
            break;
        default:
            strokeClasses = "";
    }
    switch(edge.pattern){
        case "solid":
            strokeClasses += " edge-pattern-solid";
            break;
        case "dotted":
            strokeClasses += " edge-pattern-dotted";
            break;
        case "dashed":
            strokeClasses += " edge-pattern-dashed";
            break;
    }
    const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edge.style);
    let url = "";
    if ((0, $8ZZbk.c)().flowchart.arrowMarkerAbsolute || (0, $8ZZbk.c)().state.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    (0, $8ZZbk.l).info("arrowTypeStart", edge.arrowTypeStart);
    (0, $8ZZbk.l).info("arrowTypeEnd", edge.arrowTypeEnd);
    switch(edge.arrowTypeStart){
        case "arrow_cross":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-crossStart)");
            break;
        case "arrow_point":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-pointStart)");
            break;
        case "arrow_barb":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-barbStart)");
            break;
        case "arrow_circle":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-circleStart)");
            break;
        case "aggregation":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-aggregationStart)");
            break;
        case "extension":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-extensionStart)");
            break;
        case "composition":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-compositionStart)");
            break;
        case "dependency":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-dependencyStart)");
            break;
        case "lollipop":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-lollipopStart)");
            break;
    }
    switch(edge.arrowTypeEnd){
        case "arrow_cross":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-crossEnd)");
            break;
        case "arrow_point":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-pointEnd)");
            break;
        case "arrow_barb":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-barbEnd)");
            break;
        case "arrow_circle":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-circleEnd)");
            break;
        case "aggregation":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-aggregationEnd)");
            break;
        case "extension":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-extensionEnd)");
            break;
        case "composition":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-compositionEnd)");
            break;
        case "dependency":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-dependencyEnd)");
            break;
        case "lollipop":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-lollipopEnd)");
            break;
    }
    let paths = {};
    if (pointsHasChanged) paths.updatedPath = points;
    paths.originalPath = edge.points;
    return paths;
};

});


//# sourceMappingURL=flowDiagram-93327f21.fc885644.js.map
