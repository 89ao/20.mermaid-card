import "./flowDiagram-93327f21.7f8a0ca8.js";
import "./flowDiagram-93327f21.6ed3d378.js";
import "./flowDiagram-93327f21.18cd1e52.js";
import "./flowDiagram-93327f21.1bb329b0.js";
import "./flowDiagram-93327f21.fc885644.js";
import "./flowDiagram-93327f21.f1c41c8f.js";

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
parcelRequire.register("6kmY3", function(module, exports) {

$parcel$export(module.exports, "diagram", () => $49b66d3b59035a9f$export$6118d022d940d562);

var $4lfVT = parcelRequire("4lfVT");

var $hp6PI = parcelRequire("hp6PI");

var $9ONqd = parcelRequire("9ONqd");

var $8ZZbk = parcelRequire("8ZZbk");
parcelRequire("hd6DM");
var $2Hoxl = parcelRequire("2Hoxl");

var $gA1a8 = parcelRequire("gA1a8");

var $72GQT = parcelRequire("72GQT");

var $jBSqG = parcelRequire("jBSqG");

var $8jcUH = parcelRequire("8jcUH");

var $3XLJx = parcelRequire("3XLJx");
parcelRequire("7Sll6");
parcelRequire("1rtij");
parcelRequire("gOlfO");
parcelRequire("aiFbc");





parcelRequire("5Nl7d");
parcelRequire("lDnUH");




function $49b66d3b59035a9f$var$question(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
    const s = (w + h) * 0.9;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, s, s, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$hexagon(parent, bbox, node) {
    const f = 4;
    const h = bbox.height;
    const m = h / f;
    const w = bbox.width + 2 * m;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$rect_left_inv_arrow(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$lean_right(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$lean_left(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$trapezoid(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$inv_trapezoid(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$rect_right_inv_arrow(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$stadium(parent, bbox, node) {
    const h = bbox.height;
    const w = bbox.width + h / 4;
    const shapeSvg = parent.insert("rect", ":first-child").attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
    node.intersect = function(point) {
        return (0, $8jcUH.intersectRect)(node, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$subroutine(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, $jBSqG.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$cylinder(parent, bbox, node) {
    const w = bbox.width;
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = bbox.height + ry;
    const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
    const shapeSvg = parent.attr("label-offset-y", ry).insert("path", ":first-child").attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
    node.intersect = function(point) {
        const pos = (0, $8jcUH.intersectRect)(node, point);
        const x = pos.x - node.x;
        if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
            let y = ry * ry * (1 - x * x / (rx * rx));
            if (y != 0) y = Math.sqrt(y);
            y = ry - y;
            if (point.y - node.y > 0) y = -y;
            pos.y += y;
        }
        return pos;
    };
    return shapeSvg;
}
function $49b66d3b59035a9f$var$addToRender(render2) {
    render2.shapes().question = $49b66d3b59035a9f$var$question;
    render2.shapes().hexagon = $49b66d3b59035a9f$var$hexagon;
    render2.shapes().stadium = $49b66d3b59035a9f$var$stadium;
    render2.shapes().subroutine = $49b66d3b59035a9f$var$subroutine;
    render2.shapes().cylinder = $49b66d3b59035a9f$var$cylinder;
    render2.shapes().rect_left_inv_arrow = $49b66d3b59035a9f$var$rect_left_inv_arrow;
    render2.shapes().lean_right = $49b66d3b59035a9f$var$lean_right;
    render2.shapes().lean_left = $49b66d3b59035a9f$var$lean_left;
    render2.shapes().trapezoid = $49b66d3b59035a9f$var$trapezoid;
    render2.shapes().inv_trapezoid = $49b66d3b59035a9f$var$inv_trapezoid;
    render2.shapes().rect_right_inv_arrow = $49b66d3b59035a9f$var$rect_right_inv_arrow;
}
function $49b66d3b59035a9f$var$addToRenderV2(addShape) {
    addShape({
        question: $49b66d3b59035a9f$var$question
    });
    addShape({
        hexagon: $49b66d3b59035a9f$var$hexagon
    });
    addShape({
        stadium: $49b66d3b59035a9f$var$stadium
    });
    addShape({
        subroutine: $49b66d3b59035a9f$var$subroutine
    });
    addShape({
        cylinder: $49b66d3b59035a9f$var$cylinder
    });
    addShape({
        rect_left_inv_arrow: $49b66d3b59035a9f$var$rect_left_inv_arrow
    });
    addShape({
        lean_right: $49b66d3b59035a9f$var$lean_right
    });
    addShape({
        lean_left: $49b66d3b59035a9f$var$lean_left
    });
    addShape({
        trapezoid: $49b66d3b59035a9f$var$trapezoid
    });
    addShape({
        inv_trapezoid: $49b66d3b59035a9f$var$inv_trapezoid
    });
    addShape({
        rect_right_inv_arrow: $49b66d3b59035a9f$var$rect_right_inv_arrow
    });
}
function $49b66d3b59035a9f$var$insertPolygonShape(parent, w, h, points) {
    return parent.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" ")).attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
const $49b66d3b59035a9f$var$flowChartShapes = {
    addToRender: $49b66d3b59035a9f$var$addToRender,
    addToRenderV2: $49b66d3b59035a9f$var$addToRenderV2
};
const $49b66d3b59035a9f$var$conf = {};
const $49b66d3b59035a9f$var$setConf = function(cnf) {
    const keys = Object.keys(cnf);
    for (const key of keys)$49b66d3b59035a9f$var$conf[key] = cnf[key];
};
const $49b66d3b59035a9f$var$addVertices = function(vert, g, svgId, root, _doc, diagObj) {
    const svg = !root ? (0, $9ONqd.select)(`[id="${svgId}"]`) : root.select(`[id="${svgId}"]`);
    const doc = !_doc ? document : _doc;
    const keys = Object.keys(vert);
    keys.forEach(function(id) {
        const vertex = vert[id];
        let classStr = "default";
        if (vertex.classes.length > 0) classStr = vertex.classes.join(" ");
        const styles = (0, $8ZZbk.k)(vertex.styles);
        let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
        let vertexNode;
        if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
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
            default:
                _shape = "rect";
        }
        (0, $8ZZbk.l).warn("Adding node", vertex.id, vertex.domId);
        g.setNode(diagObj.db.lookUpDomId(vertex.id), {
            labelType: "svg",
            labelStyle: styles.labelStyle,
            shape: _shape,
            label: vertexNode,
            rx: radious,
            ry: radious,
            class: classStr,
            style: styles.style,
            id: diagObj.db.lookUpDomId(vertex.id)
        });
    });
};
const $49b66d3b59035a9f$var$addEdges = function(edges, g, diagObj) {
    let cnt = 0;
    let defaultStyle;
    let defaultLabelStyle;
    if (edges.defaultStyle !== void 0) {
        const defaultStyles = (0, $8ZZbk.k)(edges.defaultStyle);
        defaultStyle = defaultStyles.style;
        defaultLabelStyle = defaultStyles.labelStyle;
    }
    edges.forEach(function(edge) {
        cnt++;
        const linkId = "L-" + edge.start + "-" + edge.end;
        const linkNameStart = "LS-" + edge.start;
        const linkNameEnd = "LE-" + edge.end;
        const edgeData = {};
        if (edge.type === "arrow_open") edgeData.arrowhead = "none";
        else edgeData.arrowhead = "normal";
        let style = "";
        let labelStyle = "";
        if (edge.style !== void 0) {
            const styles = (0, $8ZZbk.k)(edge.style);
            style = styles.style;
            labelStyle = styles.labelStyle;
        } else switch(edge.stroke){
            case "normal":
                style = "fill:none";
                if (defaultStyle !== void 0) style = defaultStyle;
                if (defaultLabelStyle !== void 0) labelStyle = defaultLabelStyle;
                break;
            case "dotted":
                style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
                break;
            case "thick":
                style = " stroke-width: 3.5px;fill:none";
                break;
        }
        edgeData.style = style;
        edgeData.labelStyle = labelStyle;
        if (edge.interpolate !== void 0) edgeData.curve = (0, $8ZZbk.o)(edge.interpolate, (0, $9ONqd.curveLinear));
        else if (edges.defaultInterpolate !== void 0) edgeData.curve = (0, $8ZZbk.o)(edges.defaultInterpolate, (0, $9ONqd.curveLinear));
        else edgeData.curve = (0, $8ZZbk.o)($49b66d3b59035a9f$var$conf.curve, (0, $9ONqd.curveLinear));
        if (edge.text === void 0) {
            if (edge.style !== void 0) edgeData.arrowheadStyle = "fill: #333";
        } else {
            edgeData.arrowheadStyle = "fill: #333";
            edgeData.labelpos = "c";
            if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
                edgeData.labelType = "html";
                edgeData.label = `<span id="L-${linkId}" class="edgeLabel L-${linkNameStart}' L-${linkNameEnd}" style="${edgeData.labelStyle}">${edge.text.replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`)}</span>`;
            } else {
                edgeData.labelType = "text";
                edgeData.label = edge.text.replace((0, $8ZZbk.e).lineBreakRegex, "\n");
                if (edge.style === void 0) edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
                edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
            }
        }
        edgeData.id = linkId;
        edgeData.class = linkNameStart + " " + linkNameEnd;
        edgeData.minlen = edge.length || 1;
        g.setEdge(diagObj.db.lookUpDomId(edge.start), diagObj.db.lookUpDomId(edge.end), edgeData, cnt);
    });
};
const $49b66d3b59035a9f$var$getClasses = function(text, diagObj) {
    (0, $8ZZbk.l).info("Extracting classes");
    diagObj.db.clear();
    try {
        diagObj.parse(text);
        return diagObj.db.getClasses();
    } catch (e) {
        (0, $8ZZbk.l).error(e);
        return {};
    }
};
const $49b66d3b59035a9f$var$draw = function(text, id, _version, diagObj) {
    (0, $8ZZbk.l).info("Drawing flowchart");
    diagObj.db.clear();
    const { securityLevel: securityLevel , flowchart: conf2  } = (0, $8ZZbk.c)();
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, $9ONqd.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, $9ONqd.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, $9ONqd.select)("body");
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    try {
        diagObj.parser.parse(text);
    } catch (err) {
        (0, $8ZZbk.l).debug("Parsing failed");
    }
    let dir = diagObj.db.getDirection();
    if (dir === void 0) dir = "TD";
    const nodeSpacing = conf2.nodeSpacing || 50;
    const rankSpacing = conf2.rankSpacing || 50;
    const g = new $hp6PI.Graph({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: dir,
        nodesep: nodeSpacing,
        ranksep: rankSpacing,
        marginx: 8,
        marginy: 8
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    let subG;
    const subGraphs = diagObj.db.getSubGraphs();
    for(let i2 = subGraphs.length - 1; i2 >= 0; i2--){
        subG = subGraphs[i2];
        diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes);
    }
    const vert = diagObj.db.getVertices();
    (0, $8ZZbk.l).warn("Get vertices", vert);
    const edges = diagObj.db.getEdges();
    let i = 0;
    for(i = subGraphs.length - 1; i >= 0; i--){
        subG = subGraphs[i];
        (0, $9ONqd.selectAll)("cluster").append("text");
        for(let j = 0; j < subG.nodes.length; j++){
            (0, $8ZZbk.l).warn("Setting subgraph", subG.nodes[j], diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
            g.setParent(diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
        }
    }
    $49b66d3b59035a9f$var$addVertices(vert, g, id, root, doc, diagObj);
    $49b66d3b59035a9f$var$addEdges(edges, g, diagObj);
    const render$1 = new (0, $2Hoxl.render)();
    $49b66d3b59035a9f$var$flowChartShapes.addToRender(render$1);
    render$1.arrows().none = function normal(parent, id2, edge, type) {
        const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
        const path = marker.append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
        (0, $gA1a8.applyStyle)(path, edge[type + "Style"]);
    };
    render$1.arrows().normal = function normal(parent, id2) {
        const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
        marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    };
    const svg = root.select(`[id="${id}"]`);
    const element = root.select("#" + id + " g");
    render$1(element, g);
    element.selectAll("g.node").attr("title", function() {
        return diagObj.db.getTooltip(this.id);
    });
    diagObj.db.indexNodes("subGraph" + i);
    for(i = 0; i < subGraphs.length; i++){
        subG = subGraphs[i];
        if (subG.title !== "undefined") {
            const clusterRects = doc.querySelectorAll("#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"] rect');
            const clusterEl = doc.querySelectorAll("#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"]');
            const xPos = clusterRects[0].x.baseVal.value;
            const yPos = clusterRects[0].y.baseVal.value;
            const _width = clusterRects[0].width.baseVal.value;
            const cluster = (0, $9ONqd.select)(clusterEl[0]);
            const te = cluster.select(".label");
            te.attr("transform", `translate(${xPos + _width / 2}, ${yPos + 14})`);
            te.attr("id", id + "Text");
            for(let j = 0; j < subG.classes.length; j++)clusterEl[0].classList.add(subG.classes[j]);
        }
    }
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
    (0, $8ZZbk.p)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
    const keys = Object.keys(vert);
    keys.forEach(function(key) {
        const vertex = vert[key];
        if (vertex.link) {
            const node = root.select("#" + id + ' [id="' + diagObj.db.lookUpDomId(key) + '"]');
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
const $49b66d3b59035a9f$var$flowRenderer = {
    setConf: $49b66d3b59035a9f$var$setConf,
    addVertices: $49b66d3b59035a9f$var$addVertices,
    addEdges: $49b66d3b59035a9f$var$addEdges,
    getClasses: $49b66d3b59035a9f$var$getClasses,
    draw: $49b66d3b59035a9f$var$draw
};
const $49b66d3b59035a9f$export$6118d022d940d562 = {
    parser: $4lfVT.p,
    db: (0, $4lfVT.f),
    renderer: (0, $3XLJx.f),
    styles: (0, $3XLJx.a),
    init: (cnf)=>{
        if (!cnf.flowchart) cnf.flowchart = {};
        cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        $49b66d3b59035a9f$var$flowRenderer.setConf(cnf.flowchart);
        (0, $4lfVT.f).clear();
        (0, $4lfVT.f).setGen("gen-1");
    }
};

});
parcelRequire.register("hd6DM", function(module, exports) {

$parcel$export(module.exports, "render", () => (parcelRequire("2Hoxl")).render);

var $2Hoxl = parcelRequire("2Hoxl");

var $hp6PI = parcelRequire("hp6PI");

var $iNVBZ = parcelRequire("iNVBZ");

});
parcelRequire.register("2Hoxl", function(module, exports) {

$parcel$export(module.exports, "render", () => $1f72a170d2033231$export$b3890eb0ae9dca99);

var $9ONqd = parcelRequire("9ONqd");

var $6s6Ys = parcelRequire("6s6Ys");
var $jA7ZH = parcelRequire("jA7ZH");
var $cGzdy = parcelRequire("cGzdy");

var $5Nl7d = parcelRequire("5Nl7d");

var $er8Ok = parcelRequire("er8Ok");

var $6UXug = parcelRequire("6UXug");

var $1O31J = parcelRequire("1O31J");

var $bUqQf = parcelRequire("bUqQf");

var $kmGh1 = parcelRequire("kmGh1");

var $4OhBy = parcelRequire("4OhBy");

var $d1uyT = parcelRequire("d1uyT");

var $bH6Aq = parcelRequire("bH6Aq");

var $2Srif = parcelRequire("2Srif");
// This design is based on http://bost.ocks.org/mike/chart/.
function $1f72a170d2033231$export$b3890eb0ae9dca99() {
    var fn = function(svg, g) {
        $1f72a170d2033231$var$preProcessGraph(g);
        var outputGroup = $1f72a170d2033231$var$createOrSelectGroup(svg, "output");
        var clustersGroup = $1f72a170d2033231$var$createOrSelectGroup(outputGroup, "clusters");
        var edgePathsGroup = $1f72a170d2033231$var$createOrSelectGroup(outputGroup, "edgePaths");
        var edgeLabels = (0, $1O31J.createEdgeLabels)($1f72a170d2033231$var$createOrSelectGroup(outputGroup, "edgeLabels"), g);
        var nodes = (0, $kmGh1.createNodes)($1f72a170d2033231$var$createOrSelectGroup(outputGroup, "nodes"), g, (0, $2Srif.shapes));
        (0, $5Nl7d.layout)(g);
        (0, $bH6Aq.positionNodes)(nodes, g);
        (0, $d1uyT.positionEdgeLabels)(edgeLabels, g);
        (0, $bUqQf.createEdgePaths)(edgePathsGroup, g, (0, $er8Ok.arrows));
        var clusters = (0, $6UXug.createClusters)(clustersGroup, g);
        (0, $4OhBy.positionClusters)(clusters, g);
        $1f72a170d2033231$var$postProcessGraph(g);
    };
    fn.createNodes = function(value) {
        if (!arguments.length) return 0, $kmGh1.createNodes;
        (0, $kmGh1.setCreateNodes)(value);
        return fn;
    };
    fn.createClusters = function(value) {
        if (!arguments.length) return 0, $6UXug.createClusters;
        (0, $6UXug.setCreateClusters)(value);
        return fn;
    };
    fn.createEdgeLabels = function(value) {
        if (!arguments.length) return 0, $1O31J.createEdgeLabels;
        (0, $1O31J.setCreateEdgeLabels)(value);
        return fn;
    };
    fn.createEdgePaths = function(value) {
        if (!arguments.length) return 0, $bUqQf.createEdgePaths;
        (0, $bUqQf.setCreateEdgePaths)(value);
        return fn;
    };
    fn.shapes = function(value) {
        if (!arguments.length) return 0, $2Srif.shapes;
        (0, $2Srif.setShapes)(value);
        return fn;
    };
    fn.arrows = function(value) {
        if (!arguments.length) return 0, $er8Ok.arrows;
        (0, $er8Ok.setArrows)(value);
        return fn;
    };
    return fn;
}
var $1f72a170d2033231$var$NODE_DEFAULT_ATTRS = {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    rx: 0,
    ry: 0,
    shape: "rect"
};
var $1f72a170d2033231$var$EDGE_DEFAULT_ATTRS = {
    arrowhead: "normal",
    curve: $9ONqd.curveLinear
};
function $1f72a170d2033231$var$preProcessGraph(g) {
    g.nodes().forEach(function(v) {
        var node = g.node(v);
        if (!$cGzdy.default(node, "label") && !g.children(v).length) node.label = v;
        if ($cGzdy.default(node, "paddingX")) $6s6Ys.default(node, {
            paddingLeft: node.paddingX,
            paddingRight: node.paddingX
        });
        if ($cGzdy.default(node, "paddingY")) $6s6Ys.default(node, {
            paddingTop: node.paddingY,
            paddingBottom: node.paddingY
        });
        if ($cGzdy.default(node, "padding")) $6s6Ys.default(node, {
            paddingLeft: node.padding,
            paddingRight: node.padding,
            paddingTop: node.padding,
            paddingBottom: node.padding
        });
        $6s6Ys.default(node, $1f72a170d2033231$var$NODE_DEFAULT_ATTRS);
        $jA7ZH.default([
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom"
        ], function(k) {
            node[k] = Number(node[k]);
        });
        // Save dimensions for restore during post-processing
        if ($cGzdy.default(node, "width")) node._prevWidth = node.width;
        if ($cGzdy.default(node, "height")) node._prevHeight = node.height;
    });
    g.edges().forEach(function(e) {
        var edge = g.edge(e);
        if (!$cGzdy.default(edge, "label")) edge.label = "";
        $6s6Ys.default(edge, $1f72a170d2033231$var$EDGE_DEFAULT_ATTRS);
    });
}
function $1f72a170d2033231$var$postProcessGraph(g) {
    $jA7ZH.default(g.nodes(), function(v) {
        var node = g.node(v);
        // Restore original dimensions
        if ($cGzdy.default(node, "_prevWidth")) node.width = node._prevWidth;
        else delete node.width;
        if ($cGzdy.default(node, "_prevHeight")) node.height = node._prevHeight;
        else delete node.height;
        delete node._prevWidth;
        delete node._prevHeight;
    });
}
function $1f72a170d2033231$var$createOrSelectGroup(root, name) {
    var selection = root.select("g." + name);
    if (selection.empty()) selection = root.append("g").attr("class", name);
    return selection;
}

});
parcelRequire.register("er8Ok", function(module, exports) {

$parcel$export(module.exports, "arrows", () => $a82a6bf35a53ab82$export$80adc0c60c17ef1e);
$parcel$export(module.exports, "setArrows", () => $a82a6bf35a53ab82$export$f0b5cf96139bfc8d);

var $gA1a8 = parcelRequire("gA1a8");
var $a82a6bf35a53ab82$export$80adc0c60c17ef1e = {
    normal: $a82a6bf35a53ab82$var$normal,
    vee: $a82a6bf35a53ab82$var$vee,
    undirected: $a82a6bf35a53ab82$var$undirected
};
function $a82a6bf35a53ab82$export$f0b5cf96139bfc8d(value) {
    $a82a6bf35a53ab82$export$80adc0c60c17ef1e = value;
}
function $a82a6bf35a53ab82$var$normal(parent, id, edge, type) {
    var marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    var path = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    $gA1a8.applyStyle(path, edge[type + "Style"]);
    if (edge[type + "Class"]) path.attr("class", edge[type + "Class"]);
}
function $a82a6bf35a53ab82$var$vee(parent, id, edge, type) {
    var marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    var path = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    $gA1a8.applyStyle(path, edge[type + "Style"]);
    if (edge[type + "Class"]) path.attr("class", edge[type + "Class"]);
}
function $a82a6bf35a53ab82$var$undirected(parent, id, edge, type) {
    var marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    var path = marker.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    $gA1a8.applyStyle(path, edge[type + "Style"]);
    if (edge[type + "Class"]) path.attr("class", edge[type + "Class"]);
}

});

parcelRequire.register("6UXug", function(module, exports) {

$parcel$export(module.exports, "createClusters", () => $50961df78046bdf8$export$8a2d678eaa6fbb41);
$parcel$export(module.exports, "setCreateClusters", () => $50961df78046bdf8$export$568e6a531772b2ea);

var $9ONqd = parcelRequire("9ONqd");

var $96TWN = parcelRequire("96TWN");

var $gA1a8 = parcelRequire("gA1a8");
var $50961df78046bdf8$export$8a2d678eaa6fbb41 = function(selection, g) {
    var clusters = g.nodes().filter(function(v) {
        return $gA1a8.isSubgraph(g, v);
    });
    var svgClusters = selection.selectAll("g.cluster").data(clusters, function(v) {
        return v;
    });
    $gA1a8.applyTransition(svgClusters.exit(), g).style("opacity", 0).remove();
    var enterSelection = svgClusters.enter().append("g").attr("class", "cluster").attr("id", function(v) {
        var node = g.node(v);
        return node.id;
    }).style("opacity", 0).each(function(v) {
        var node = g.node(v);
        var thisGroup = $9ONqd.select(this);
        $9ONqd.select(this).append("rect");
        var labelGroup = thisGroup.append("g").attr("class", "label");
        (0, $96TWN.addLabel)(labelGroup, node, node.clusterLabelPos);
    });
    svgClusters = svgClusters.merge(enterSelection);
    svgClusters = $gA1a8.applyTransition(svgClusters, g).style("opacity", 1);
    svgClusters.selectAll("rect").each(function(c) {
        var node = g.node(c);
        var domCluster = $9ONqd.select(this);
        $gA1a8.applyStyle(domCluster, node.style);
    });
    return svgClusters;
};
function $50961df78046bdf8$export$568e6a531772b2ea(value) {
    $50961df78046bdf8$export$8a2d678eaa6fbb41 = value;
}

});
parcelRequire.register("96TWN", function(module, exports) {

$parcel$export(module.exports, "addLabel", () => $6a2012958062b3d6$export$7382a268046a9fb1);

var $72GQT = parcelRequire("72GQT");

var $15w1g = parcelRequire("15w1g");

var $idO84 = parcelRequire("idO84");
function $6a2012958062b3d6$export$7382a268046a9fb1(root, node, location) {
    var label = node.label;
    var labelSvg = root.append("g");
    // Allow the label to be a string, a function that returns a DOM element, or
    // a DOM element itself.
    if (node.labelType === "svg") (0, $15w1g.addSVGLabel)(labelSvg, node);
    else if (typeof label !== "string" || node.labelType === "html") (0, $72GQT.addHtmlLabel)(labelSvg, node);
    else (0, $idO84.addTextLabel)(labelSvg, node);
    var labelBBox = labelSvg.node().getBBox();
    var y;
    switch(location){
        case "top":
            y = -node.height / 2;
            break;
        case "bottom":
            y = node.height / 2 - labelBBox.height;
            break;
        default:
            y = -labelBBox.height / 2;
    }
    labelSvg.attr("transform", "translate(" + -labelBBox.width / 2 + "," + y + ")");
    return labelSvg;
}

});
parcelRequire.register("15w1g", function(module, exports) {

$parcel$export(module.exports, "addSVGLabel", () => $0caf187821fd77b3$export$677906c6a7c51a92);

var $gA1a8 = parcelRequire("gA1a8");
function $0caf187821fd77b3$export$677906c6a7c51a92(root, node) {
    var domNode = root;
    domNode.node().appendChild(node.label);
    $gA1a8.applyStyle(domNode, node.labelStyle);
    return domNode;
}

});

parcelRequire.register("idO84", function(module, exports) {

$parcel$export(module.exports, "addTextLabel", () => $d440537d09105d9e$export$2b4e70b9d86be4f0);

var $gA1a8 = parcelRequire("gA1a8");
/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */ function $d440537d09105d9e$export$2b4e70b9d86be4f0(root, node) {
    var domNode = root.append("text");
    var lines = $d440537d09105d9e$var$processEscapeSequences(node.label).split("\n");
    for(var i = 0; i < lines.length; i++)domNode.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(lines[i]);
    $gA1a8.applyStyle(domNode, node.labelStyle);
    return domNode;
}
function $d440537d09105d9e$var$processEscapeSequences(text) {
    var newText = "";
    var escaped = false;
    var ch;
    for(var i = 0; i < text.length; ++i){
        ch = text[i];
        if (escaped) {
            switch(ch){
                case "n":
                    newText += "\n";
                    break;
                default:
                    newText += ch;
            }
            escaped = false;
        } else if (ch === "\\") escaped = true;
        else newText += ch;
    }
    return newText;
}

});



parcelRequire.register("1O31J", function(module, exports) {

$parcel$export(module.exports, "createEdgeLabels", () => $150ccf09cabedfda$export$dccd43656db7679c);
$parcel$export(module.exports, "setCreateEdgeLabels", () => $150ccf09cabedfda$export$43964f850ab0841e);

var $9ONqd = parcelRequire("9ONqd");

var $cGzdy = parcelRequire("cGzdy");

var $96TWN = parcelRequire("96TWN");

var $gA1a8 = parcelRequire("gA1a8");
let $150ccf09cabedfda$export$dccd43656db7679c = function(selection, g) {
    var svgEdgeLabels = selection.selectAll("g.edgeLabel").data(g.edges(), function(e) {
        return $gA1a8.edgeToId(e);
    }).classed("update", true);
    svgEdgeLabels.exit().remove();
    svgEdgeLabels.enter().append("g").classed("edgeLabel", true).style("opacity", 0);
    svgEdgeLabels = selection.selectAll("g.edgeLabel");
    svgEdgeLabels.each(function(e) {
        var root = $9ONqd.select(this);
        root.select(".label").remove();
        var edge = g.edge(e);
        var label = (0, $96TWN.addLabel)(root, g.edge(e), 0).classed("label", true);
        var bbox = label.node().getBBox();
        if (edge.labelId) label.attr("id", edge.labelId);
        if (!$cGzdy.default(edge, "width")) edge.width = bbox.width;
        if (!$cGzdy.default(edge, "height")) edge.height = bbox.height;
    });
    var exitSelection;
    if (svgEdgeLabels.exit) exitSelection = svgEdgeLabels.exit();
    else exitSelection = svgEdgeLabels.selectAll(null); // empty selection
    $gA1a8.applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgEdgeLabels;
};
function $150ccf09cabedfda$export$43964f850ab0841e(value) {
    $150ccf09cabedfda$export$dccd43656db7679c = value;
}

});

parcelRequire.register("bUqQf", function(module, exports) {

$parcel$export(module.exports, "createEdgePaths", () => $8ab9bee1e0dec844$export$ce8d936dbc1efd48);
$parcel$export(module.exports, "setCreateEdgePaths", () => $8ab9bee1e0dec844$export$321d141fa82de395);

var $9ONqd = parcelRequire("9ONqd");

var $ddsUm = parcelRequire("ddsUm");
var $bWo1S = parcelRequire("bWo1S");

var $kz3sN = parcelRequire("kz3sN");

var $gA1a8 = parcelRequire("gA1a8");
var $8ab9bee1e0dec844$export$ce8d936dbc1efd48 = function(selection, g, arrows) {
    var previousPaths = selection.selectAll("g.edgePath").data(g.edges(), function(e) {
        return $gA1a8.edgeToId(e);
    }).classed("update", true);
    var newPaths = $8ab9bee1e0dec844$var$enter(previousPaths, g);
    $8ab9bee1e0dec844$var$exit(previousPaths, g);
    var svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
    $gA1a8.applyTransition(svgPaths, g).style("opacity", 1);
    // Save DOM element in the path group, and set ID and class
    svgPaths.each(function(e) {
        var domEdge = $9ONqd.select(this);
        var edge = g.edge(e);
        edge.elem = this;
        if (edge.id) domEdge.attr("id", edge.id);
        $gA1a8.applyClass(domEdge, edge["class"], (domEdge.classed("update") ? "update " : "") + "edgePath");
    });
    svgPaths.selectAll("path.path").each(function(e) {
        var edge = g.edge(e);
        edge.arrowheadId = $bWo1S.default("arrowhead");
        var domEdge = $9ONqd.select(this).attr("marker-end", function() {
            return "url(" + $8ab9bee1e0dec844$var$makeFragmentRef(location.href, edge.arrowheadId) + ")";
        }).style("fill", "none");
        $gA1a8.applyTransition(domEdge, g).attr("d", function(e) {
            return $8ab9bee1e0dec844$var$calcPoints(g, e);
        });
        $gA1a8.applyStyle(domEdge, edge.style);
    });
    svgPaths.selectAll("defs *").remove();
    svgPaths.selectAll("defs").each(function(e) {
        var edge = g.edge(e);
        var arrowhead = arrows[edge.arrowhead];
        arrowhead($9ONqd.select(this), edge.arrowheadId, edge, "arrowhead");
    });
    return svgPaths;
};
function $8ab9bee1e0dec844$export$321d141fa82de395(value) {
    $8ab9bee1e0dec844$export$ce8d936dbc1efd48 = value;
}
function $8ab9bee1e0dec844$var$makeFragmentRef(url, fragmentId) {
    var baseUrl = url.split("#")[0];
    return baseUrl + "#" + fragmentId;
}
function $8ab9bee1e0dec844$var$calcPoints(g, e) {
    var edge = g.edge(e);
    var tail = g.node(e.v);
    var head = g.node(e.w);
    var points = edge.points.slice(1, edge.points.length - 1);
    points.unshift((0, $kz3sN.intersectNode)(tail, points[0]));
    points.push((0, $kz3sN.intersectNode)(head, points[points.length - 1]));
    return $8ab9bee1e0dec844$var$createLine(edge, points);
}
function $8ab9bee1e0dec844$var$createLine(edge, points) {
    // @ts-expect-error
    var line = ($9ONqd.line || $9ONqd.svg.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    });
    (line.curve || line.interpolate)(edge.curve);
    return line(points);
}
function $8ab9bee1e0dec844$var$getCoords(elem) {
    var bbox = elem.getBBox();
    var matrix = elem.ownerSVGElement.getScreenCTM().inverse().multiply(elem.getScreenCTM()).translate(bbox.width / 2, bbox.height / 2);
    return {
        x: matrix.e,
        y: matrix.f
    };
}
function $8ab9bee1e0dec844$var$enter(svgPaths, g) {
    var svgPathsEnter = svgPaths.enter().append("g").attr("class", "edgePath").style("opacity", 0);
    svgPathsEnter.append("path").attr("class", "path").attr("d", function(e) {
        var edge = g.edge(e);
        var sourceElem = g.node(e.v).elem;
        var points = $ddsUm.default(edge.points.length).map(function() {
            return $8ab9bee1e0dec844$var$getCoords(sourceElem);
        });
        return $8ab9bee1e0dec844$var$createLine(edge, points);
    });
    svgPathsEnter.append("defs");
    return svgPathsEnter;
}
function $8ab9bee1e0dec844$var$exit(svgPaths, g) {
    var svgPathExit = svgPaths.exit();
    $gA1a8.applyTransition(svgPathExit, g).style("opacity", 0).remove();
}

});
parcelRequire.register("kz3sN", function(module, exports) {

$parcel$export(module.exports, "intersectNode", () => $ef89c34e7587ec7e$export$d177fd5701b4bb5f);
function $ef89c34e7587ec7e$export$d177fd5701b4bb5f(node, point) {
    return node.intersect(point);
}

});


parcelRequire.register("kmGh1", function(module, exports) {

$parcel$export(module.exports, "createNodes", () => $ed36a759b2ebb009$export$953dd193a01bd6ec);
$parcel$export(module.exports, "setCreateNodes", () => $ed36a759b2ebb009$export$5330e0e67069e4cc);

var $9ONqd = parcelRequire("9ONqd");

var $cGzdy = parcelRequire("cGzdy");
var $3Qxqm = parcelRequire("3Qxqm");

var $96TWN = parcelRequire("96TWN");

var $gA1a8 = parcelRequire("gA1a8");
var $ed36a759b2ebb009$export$953dd193a01bd6ec = function(selection, g, shapes) {
    var simpleNodes = g.nodes().filter(function(v) {
        return !$gA1a8.isSubgraph(g, v);
    });
    var svgNodes = selection.selectAll("g.node").data(simpleNodes, function(v) {
        return v;
    }).classed("update", true);
    svgNodes.exit().remove();
    svgNodes.enter().append("g").attr("class", "node").style("opacity", 0);
    svgNodes = selection.selectAll("g.node");
    svgNodes.each(function(v) {
        var node = g.node(v);
        var thisGroup = $9ONqd.select(this);
        $gA1a8.applyClass(thisGroup, node["class"], (thisGroup.classed("update") ? "update " : "") + "node");
        thisGroup.select("g.label").remove();
        var labelGroup = thisGroup.append("g").attr("class", "label");
        var labelDom = (0, $96TWN.addLabel)(labelGroup, node);
        var shape = shapes[node.shape];
        var bbox = $3Qxqm.default(labelDom.node().getBBox(), "width", "height");
        node.elem = this;
        if (node.id) thisGroup.attr("id", node.id);
        if (node.labelId) labelGroup.attr("id", node.labelId);
        if ($cGzdy.default(node, "width")) bbox.width = node.width;
        if ($cGzdy.default(node, "height")) bbox.height = node.height;
        bbox.width += node.paddingLeft + node.paddingRight;
        bbox.height += node.paddingTop + node.paddingBottom;
        labelGroup.attr("transform", "translate(" + (node.paddingLeft - node.paddingRight) / 2 + "," + (node.paddingTop - node.paddingBottom) / 2 + ")");
        var root = $9ONqd.select(this);
        root.select(".label-container").remove();
        var shapeSvg = shape(root, bbox, node).classed("label-container", true);
        $gA1a8.applyStyle(shapeSvg, node.style);
        var shapeBBox = shapeSvg.node().getBBox();
        node.width = shapeBBox.width;
        node.height = shapeBBox.height;
    });
    var exitSelection;
    if (svgNodes.exit) exitSelection = svgNodes.exit();
    else exitSelection = svgNodes.selectAll(null); // empty selection
    $gA1a8.applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgNodes;
};
function $ed36a759b2ebb009$export$5330e0e67069e4cc(value) {
    $ed36a759b2ebb009$export$953dd193a01bd6ec = value;
}

});

parcelRequire.register("4OhBy", function(module, exports) {

$parcel$export(module.exports, "positionClusters", () => $38097ce0236d47e3$export$387a50daec5fd0ae);

var $9ONqd = parcelRequire("9ONqd");

var $gA1a8 = parcelRequire("gA1a8");
function $38097ce0236d47e3$export$387a50daec5fd0ae(selection, g) {
    var created = selection.filter(function() {
        return !$9ONqd.select(this).classed("update");
    });
    function translate(v) {
        var node = g.node(v);
        return "translate(" + node.x + "," + node.y + ")";
    }
    created.attr("transform", translate);
    $gA1a8.applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
    $gA1a8.applyTransition(created.selectAll("rect"), g).attr("width", function(v) {
        return g.node(v).width;
    }).attr("height", function(v) {
        return g.node(v).height;
    }).attr("x", function(v) {
        var node = g.node(v);
        return -node.width / 2;
    }).attr("y", function(v) {
        var node = g.node(v);
        return -node.height / 2;
    });
}

});

parcelRequire.register("d1uyT", function(module, exports) {

$parcel$export(module.exports, "positionEdgeLabels", () => $97b313513028cfc9$export$2b81b6d4d1e8a1d9);

var $9ONqd = parcelRequire("9ONqd");

var $cGzdy = parcelRequire("cGzdy");

var $gA1a8 = parcelRequire("gA1a8");
function $97b313513028cfc9$export$2b81b6d4d1e8a1d9(selection, g) {
    var created = selection.filter(function() {
        return !$9ONqd.select(this).classed("update");
    });
    function translate(e) {
        var edge = g.edge(e);
        return $cGzdy.default(edge, "x") ? "translate(" + edge.x + "," + edge.y + ")" : "";
    }
    created.attr("transform", translate);
    $gA1a8.applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
}

});

parcelRequire.register("bH6Aq", function(module, exports) {

$parcel$export(module.exports, "positionNodes", () => $8838d1d376bbafd8$export$e2fb82607eb3f34f);

var $9ONqd = parcelRequire("9ONqd");

var $gA1a8 = parcelRequire("gA1a8");
function $8838d1d376bbafd8$export$e2fb82607eb3f34f(selection, g) {
    var created = selection.filter(function() {
        return !$9ONqd.select(this).classed("update");
    });
    function translate(v) {
        var node = g.node(v);
        return "translate(" + node.x + "," + node.y + ")";
    }
    created.attr("transform", translate);
    $gA1a8.applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
}

});

parcelRequire.register("2Srif", function(module, exports) {

$parcel$export(module.exports, "shapes", () => $2185cbc97d0a8f51$export$4ff7fc6f1af248b5);
$parcel$export(module.exports, "setShapes", () => $2185cbc97d0a8f51$export$ed9b221d9c595d20);

var $2KPM4 = parcelRequire("2KPM4");

var $3k6b0 = parcelRequire("3k6b0");

var $jBSqG = parcelRequire("jBSqG");

var $8jcUH = parcelRequire("8jcUH");
var $2185cbc97d0a8f51$export$4ff7fc6f1af248b5 = {
    rect: $2185cbc97d0a8f51$var$rect,
    ellipse: $2185cbc97d0a8f51$var$ellipse,
    circle: $2185cbc97d0a8f51$var$circle,
    diamond: $2185cbc97d0a8f51$var$diamond
};
function $2185cbc97d0a8f51$export$ed9b221d9c595d20(value) {
    $2185cbc97d0a8f51$export$4ff7fc6f1af248b5 = value;
}
function $2185cbc97d0a8f51$var$rect(parent, bbox, node) {
    var shapeSvg = parent.insert("rect", ":first-child").attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("width", bbox.width).attr("height", bbox.height);
    node.intersect = function(point) {
        return (0, $8jcUH.intersectRect)(node, point);
    };
    return shapeSvg;
}
function $2185cbc97d0a8f51$var$ellipse(parent, bbox, node) {
    var rx = bbox.width / 2;
    var ry = bbox.height / 2;
    var shapeSvg = parent.insert("ellipse", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("rx", rx).attr("ry", ry);
    node.intersect = function(point) {
        return (0, $3k6b0.intersectEllipse)(node, rx, ry, point);
    };
    return shapeSvg;
}
function $2185cbc97d0a8f51$var$circle(parent, bbox, node) {
    var r = Math.max(bbox.width, bbox.height) / 2;
    var shapeSvg = parent.insert("circle", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("r", r);
    node.intersect = function(point) {
        return (0, $2KPM4.intersectCircle)(node, r, point);
    };
    return shapeSvg;
}
// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function $2185cbc97d0a8f51$var$diamond(parent, bbox, node) {
    var w = bbox.width * Math.SQRT2 / 2;
    var h = bbox.height * Math.SQRT2 / 2;
    var points = [
        {
            x: 0,
            y: -h
        },
        {
            x: -w,
            y: 0
        },
        {
            x: 0,
            y: h
        },
        {
            x: w,
            y: 0
        }
    ];
    var shapeSvg = parent.insert("polygon", ":first-child").attr("points", points.map(function(p) {
        return p.x + "," + p.y;
    }).join(" "));
    node.intersect = function(p) {
        return (0, $jBSqG.intersectPolygon)(node, points, p);
    };
    return shapeSvg;
}

});
parcelRequire.register("2KPM4", function(module, exports) {

$parcel$export(module.exports, "intersectCircle", () => $201809f5f8b5d85c$export$ca2166fef29dd9f);

var $3k6b0 = parcelRequire("3k6b0");
function $201809f5f8b5d85c$export$ca2166fef29dd9f(node, rx, point) {
    return (0, $3k6b0.intersectEllipse)(node, rx, rx, point);
}

});
parcelRequire.register("3k6b0", function(module, exports) {

$parcel$export(module.exports, "intersectEllipse", () => $26b807dffcf1f11b$export$1fcec3deade822ca);
function $26b807dffcf1f11b$export$1fcec3deade822ca(node, rx, ry, point) {
    // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html
    var cx = node.x;
    var cy = node.y;
    var px = cx - point.x;
    var py = cy - point.y;
    var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
    var dx = Math.abs(rx * ry * px / det);
    if (point.x < cx) dx = -dx;
    var dy = Math.abs(rx * ry * py / det);
    if (point.y < cy) dy = -dy;
    return {
        x: cx + dx,
        y: cy + dy
    };
}

});


parcelRequire.register("jBSqG", function(module, exports) {

$parcel$export(module.exports, "intersectPolygon", () => $e46bb19300846746$export$9c9dae97463328d8);

var $e2Crp = parcelRequire("e2Crp");
/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */ function $e46bb19300846746$export$9c9dae97463328d8(node, polyPoints, point) {
    var x1 = node.x;
    var y1 = node.y;
    var intersections = [];
    var minX = Number.POSITIVE_INFINITY;
    var minY = Number.POSITIVE_INFINITY;
    polyPoints.forEach(function(entry) {
        minX = Math.min(minX, entry.x);
        minY = Math.min(minY, entry.y);
    });
    var left = x1 - node.width / 2 - minX;
    var top = y1 - node.height / 2 - minY;
    for(var i = 0; i < polyPoints.length; i++){
        var p1 = polyPoints[i];
        var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
        var intersect = (0, $e2Crp.intersectLine)(node, point, {
            x: left + p1.x,
            y: top + p1.y
        }, {
            x: left + p2.x,
            y: top + p2.y
        });
        if (intersect) intersections.push(intersect);
    }
    if (!intersections.length) {
        console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", node);
        return node;
    }
    if (intersections.length > 1) // More intersections, find the one nearest to edge end point
    intersections.sort(function(p, q) {
        var pdx = p.x - point.x;
        var pdy = p.y - point.y;
        var distp = Math.sqrt(pdx * pdx + pdy * pdy);
        var qdx = q.x - point.x;
        var qdy = q.y - point.y;
        var distq = Math.sqrt(qdx * qdx + qdy * qdy);
        return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
    return intersections[0];
}

});
parcelRequire.register("e2Crp", function(module, exports) {

$parcel$export(module.exports, "intersectLine", () => $a38f122acd582fa2$export$920a7bb29aa4f108);
/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */ function $a38f122acd582fa2$export$920a7bb29aa4f108(p1, p2, q1, q2) {
    // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
    // p7 and p473.
    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;
    var x, y;
    // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
    // b1 y + c1 = 0.
    a1 = p2.y - p1.y;
    b1 = p1.x - p2.x;
    c1 = p2.x * p1.y - p1.x * p2.y;
    // Compute r3 and r4.
    r3 = a1 * q1.x + b1 * q1.y + c1;
    r4 = a1 * q2.x + b1 * q2.y + c1;
    // Check signs of r3 and r4. If both point 3 and point 4 lie on
    // same side of line 1, the line segments do not intersect.
    if (r3 !== 0 && r4 !== 0 && $a38f122acd582fa2$var$sameSign(r3, r4)) return;
    // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
    a2 = q2.y - q1.y;
    b2 = q1.x - q2.x;
    c2 = q2.x * q1.y - q1.x * q2.y;
    // Compute r1 and r2
    r1 = a2 * p1.x + b2 * p1.y + c2;
    r2 = a2 * p2.x + b2 * p2.y + c2;
    // Check signs of r1 and r2. If both point 1 and point 2 lie
    // on same side of second line segment, the line segments do
    // not intersect.
    if (r1 !== 0 && r2 !== 0 && $a38f122acd582fa2$var$sameSign(r1, r2)) return;
    // Line segments intersect: compute intersection point.
    denom = a1 * b2 - a2 * b1;
    if (denom === 0) return;
    offset = Math.abs(denom / 2);
    // The denom/2 is to get rounding instead of truncating. It
    // is added or subtracted to the numerator, depending upon the
    // sign of the numerator.
    num = b1 * c2 - b2 * c1;
    x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a2 * c1 - a1 * c2;
    y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return {
        x: x,
        y: y
    };
}
function $a38f122acd582fa2$var$sameSign(r1, r2) {
    return r1 * r2 > 0;
}

});


parcelRequire.register("8jcUH", function(module, exports) {

$parcel$export(module.exports, "intersectRect", () => $60ca1d68ff11bf93$export$4a227323f5de0b79);
function $60ca1d68ff11bf93$export$4a227323f5de0b79(node, point) {
    var x = node.x;
    var y = node.y;
    // Rectangle intersection algorithm from:
    // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
    var dx = point.x - x;
    var dy = point.y - y;
    var w = node.width / 2;
    var h = node.height / 2;
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        // Intersection is top or bottom of rect.
        if (dy < 0) h = -h;
        sx = dy === 0 ? 0 : h * dx / dy;
        sy = h;
    } else {
        // Intersection is left or right of rect.
        if (dx < 0) w = -w;
        sx = w;
        sy = dx === 0 ? 0 : w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}

});



parcelRequire.register("iNVBZ", function(module, exports) {

var $kz3sN = parcelRequire("kz3sN");

var $2KPM4 = parcelRequire("2KPM4");

var $3k6b0 = parcelRequire("3k6b0");

var $jBSqG = parcelRequire("jBSqG");

var $8jcUH = parcelRequire("8jcUH");

});



parcelRequire.register("l9e2h", function(module, exports) {

$parcel$export(module.exports, "p", () => $f6555377bd3b71eb$export$ffb5f4729a158638);
$parcel$export(module.exports, "s", () => $f6555377bd3b71eb$export$2408f22a0fab9ae5);

var $9ONqd = parcelRequire("9ONqd");

var $8ZZbk = parcelRequire("8ZZbk");
let $f6555377bd3b71eb$var$edgeCount = 0;
const $f6555377bd3b71eb$var$drawEdge = function(elem, path, relation, conf, diagObj) {
    const getRelationType = function(type) {
        switch(type){
            case diagObj.db.relationType.AGGREGATION:
                return "aggregation";
            case diagObj.db.relationType.EXTENSION:
                return "extension";
            case diagObj.db.relationType.COMPOSITION:
                return "composition";
            case diagObj.db.relationType.DEPENDENCY:
                return "dependency";
            case diagObj.db.relationType.LOLLIPOP:
                return "lollipop";
        }
    };
    path.points = path.points.filter((p)=>!Number.isNaN(p.y));
    const lineData = path.points;
    const lineFunction = (0, $9ONqd.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve((0, $9ONqd.curveBasis));
    const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + $f6555377bd3b71eb$var$edgeCount).attr("class", "relation");
    let url = "";
    if (conf.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    if (relation.relation.lineType == 1) svgPath.attr("class", "relation dashed-line");
    if (relation.relation.lineType == 10) svgPath.attr("class", "relation dotted-line");
    if (relation.relation.type1 !== "none") svgPath.attr("marker-start", "url(" + url + "#" + getRelationType(relation.relation.type1) + "Start)");
    if (relation.relation.type2 !== "none") svgPath.attr("marker-end", "url(" + url + "#" + getRelationType(relation.relation.type2) + "End)");
    let x, y;
    const l = path.points.length;
    let labelPosition = (0, $8ZZbk.u).calcLabelPosition(path.points);
    x = labelPosition.x;
    y = labelPosition.y;
    let p1_card_x, p1_card_y;
    let p2_card_x, p2_card_y;
    if (l % 2 !== 0 && l > 1) {
        let cardinality_1_point = (0, $8ZZbk.u).calcCardinalityPosition(relation.relation.type1 !== "none", path.points, path.points[0]);
        let cardinality_2_point = (0, $8ZZbk.u).calcCardinalityPosition(relation.relation.type2 !== "none", path.points, path.points[l - 1]);
        (0, $8ZZbk.l).debug("cardinality_1_point " + JSON.stringify(cardinality_1_point));
        (0, $8ZZbk.l).debug("cardinality_2_point " + JSON.stringify(cardinality_2_point));
        p1_card_x = cardinality_1_point.x;
        p1_card_y = cardinality_1_point.y;
        p2_card_x = cardinality_2_point.x;
        p2_card_y = cardinality_2_point.y;
    }
    if (relation.title !== void 0) {
        const g = elem.append("g").attr("class", "classLabel");
        const label = g.append("text").attr("class", "label").attr("x", x).attr("y", y).attr("fill", "red").attr("text-anchor", "middle").text(relation.title);
        window.label = label;
        const bounds = label.node().getBBox();
        g.insert("rect", ":first-child").attr("class", "box").attr("x", bounds.x - conf.padding / 2).attr("y", bounds.y - conf.padding / 2).attr("width", bounds.width + conf.padding).attr("height", bounds.height + conf.padding);
    }
    (0, $8ZZbk.l).info("Rendering relation " + JSON.stringify(relation));
    if (relation.relationTitle1 !== void 0 && relation.relationTitle1 !== "none") {
        const g = elem.append("g").attr("class", "cardinality");
        g.append("text").attr("class", "type1").attr("x", p1_card_x).attr("y", p1_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle1);
    }
    if (relation.relationTitle2 !== void 0 && relation.relationTitle2 !== "none") {
        const g = elem.append("g").attr("class", "cardinality");
        g.append("text").attr("class", "type2").attr("x", p2_card_x).attr("y", p2_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle2);
    }
    $f6555377bd3b71eb$var$edgeCount++;
};
const $f6555377bd3b71eb$var$drawClass = function(elem, classDef, conf, diagObj) {
    (0, $8ZZbk.l).debug("Rendering class ", classDef, conf);
    const id = classDef.id;
    const classInfo = {
        id: id,
        label: classDef.id,
        width: 0,
        height: 0
    };
    const g = elem.append("g").attr("id", diagObj.db.lookUpDomId(id)).attr("class", "classGroup");
    let title;
    if (classDef.link) title = g.append("svg:a").attr("xlink:href", classDef.link).attr("target", classDef.linkTarget).append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
    else title = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
    let isFirst = true;
    classDef.annotations.forEach(function(member) {
        const titleText2 = title.append("tspan").text("\xab" + member + "\xbb");
        if (!isFirst) titleText2.attr("dy", conf.textHeight);
        isFirst = false;
    });
    let classTitleString = $f6555377bd3b71eb$var$getClassTitleString(classDef);
    const classTitle = title.append("tspan").text(classTitleString).attr("class", "title");
    if (!isFirst) classTitle.attr("dy", conf.textHeight);
    const titleHeight = title.node().getBBox().height;
    const membersLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin / 2).attr("y2", conf.padding + titleHeight + conf.dividerMargin / 2);
    const members = g.append("text").attr("x", conf.padding).attr("y", titleHeight + conf.dividerMargin + conf.textHeight).attr("fill", "white").attr("class", "classText");
    isFirst = true;
    classDef.members.forEach(function(member) {
        $f6555377bd3b71eb$var$addTspan(members, member, isFirst, conf);
        isFirst = false;
    });
    const membersBox = members.node().getBBox();
    const methodsLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin + membersBox.height).attr("y2", conf.padding + titleHeight + conf.dividerMargin + membersBox.height);
    const methods = g.append("text").attr("x", conf.padding).attr("y", titleHeight + 2 * conf.dividerMargin + membersBox.height + conf.textHeight).attr("fill", "white").attr("class", "classText");
    isFirst = true;
    classDef.methods.forEach(function(method) {
        $f6555377bd3b71eb$var$addTspan(methods, method, isFirst, conf);
        isFirst = false;
    });
    const classBox = g.node().getBBox();
    var cssClassStr = " ";
    if (classDef.cssClasses.length > 0) cssClassStr = cssClassStr + classDef.cssClasses.join(" ");
    const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", classBox.width + 2 * conf.padding).attr("height", classBox.height + conf.padding + 0.5 * conf.dividerMargin).attr("class", cssClassStr);
    const rectWidth = rect.node().getBBox().width;
    title.node().childNodes.forEach(function(x) {
        x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
    });
    if (classDef.tooltip) title.insert("title").text(classDef.tooltip);
    membersLine.attr("x2", rectWidth);
    methodsLine.attr("x2", rectWidth);
    classInfo.width = rectWidth;
    classInfo.height = classBox.height + conf.padding + 0.5 * conf.dividerMargin;
    return classInfo;
};
const $f6555377bd3b71eb$var$getClassTitleString = function(classDef) {
    let classTitleString = classDef.id;
    if (classDef.type) classTitleString += "<" + classDef.type + ">";
    return classTitleString;
};
const $f6555377bd3b71eb$var$drawNote = function(elem, note, conf, diagObj) {
    (0, $8ZZbk.l).debug("Rendering note ", note, conf);
    const id = note.id;
    const noteInfo = {
        id: id,
        text: note.text,
        width: 0,
        height: 0
    };
    const g = elem.append("g").attr("id", id).attr("class", "classGroup");
    let text = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
    const lines = JSON.parse(`"${note.text}"`).split("\n");
    lines.forEach(function(line2) {
        (0, $8ZZbk.l).debug(`Adding line: ${line2}`);
        text.append("tspan").text(line2).attr("class", "title").attr("dy", conf.textHeight);
    });
    const noteBox = g.node().getBBox();
    const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", noteBox.width + 2 * conf.padding).attr("height", noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin);
    const rectWidth = rect.node().getBBox().width;
    text.node().childNodes.forEach(function(x) {
        x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
    });
    noteInfo.width = rectWidth;
    noteInfo.height = noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin;
    return noteInfo;
};
const $f6555377bd3b71eb$export$ffb5f4729a158638 = function(text) {
    let displayText = "";
    let cssStyle = "";
    let returnType = "";
    let visibility = "";
    let firstChar = text.substring(0, 1);
    let lastChar = text.substring(text.length - 1, text.length);
    if (firstChar.match(/[#+~-]/)) visibility = firstChar;
    let noClassifierRe = /[\s\w)~]/;
    if (!lastChar.match(noClassifierRe)) cssStyle = $f6555377bd3b71eb$var$parseClassifier(lastChar);
    const startIndex = visibility === "" ? 0 : 1;
    let endIndex = cssStyle === "" ? text.length : text.length - 1;
    text = text.substring(startIndex, endIndex);
    const methodStart = text.indexOf("(");
    const methodEnd = text.indexOf(")");
    const isMethod = methodStart > 1 && methodEnd > methodStart && methodEnd <= text.length;
    if (isMethod) {
        let methodName = text.substring(0, methodStart).trim();
        const parameters = text.substring(methodStart + 1, methodEnd);
        displayText = visibility + methodName + "(" + (0, $8ZZbk.x)(parameters.trim()) + ")";
        if (methodEnd < text.length) {
            let potentialClassifier = text.substring(methodEnd + 1, methodEnd + 2);
            if (cssStyle === "" && !potentialClassifier.match(noClassifierRe)) {
                cssStyle = $f6555377bd3b71eb$var$parseClassifier(potentialClassifier);
                returnType = text.substring(methodEnd + 2).trim();
            } else returnType = text.substring(methodEnd + 1).trim();
            if (returnType !== "") {
                if (returnType.charAt(0) === ":") returnType = returnType.substring(1).trim();
                returnType = " : " + (0, $8ZZbk.x)(returnType);
                displayText += returnType;
            }
        }
    } else displayText = visibility + (0, $8ZZbk.x)(text);
    return {
        displayText: displayText,
        cssStyle: cssStyle
    };
};
const $f6555377bd3b71eb$var$addTspan = function(textEl, txt, isFirst, conf) {
    let member = $f6555377bd3b71eb$export$ffb5f4729a158638(txt);
    const tSpan = textEl.append("tspan").attr("x", conf.padding).text(member.displayText);
    if (member.cssStyle !== "") tSpan.attr("style", member.cssStyle);
    if (!isFirst) tSpan.attr("dy", conf.textHeight);
};
const $f6555377bd3b71eb$var$parseClassifier = function(classifier) {
    switch(classifier){
        case "*":
            return "font-style:italic;";
        case "$":
            return "text-decoration:underline;";
        default:
            return "";
    }
};
const $f6555377bd3b71eb$export$2408f22a0fab9ae5 = {
    getClassTitleString: $f6555377bd3b71eb$var$getClassTitleString,
    drawClass: $f6555377bd3b71eb$var$drawClass,
    drawEdge: $f6555377bd3b71eb$var$drawEdge,
    drawNote: $f6555377bd3b71eb$var$drawNote,
    parseMember: $f6555377bd3b71eb$export$ffb5f4729a158638
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


//# sourceMappingURL=flowDiagram-93327f21.2ddeba8f.js.map
