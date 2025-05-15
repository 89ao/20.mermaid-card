import "./flowDiagram-93327f21.6ed3d378.js";
import "./flowDiagram-93327f21.1bb329b0.js";
import "./flowDiagram-93327f21.fc885644.js";
import "./flowDiagram-93327f21.f1c41c8f.js";
import "./classDiagram-bc733c3b.82c2b3c9.js";

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
parcelRequire.register("a3I97", function(module, exports) {

$parcel$export(module.exports, "diagram", () => $752c6db0f3f3744a$export$6118d022d940d562);

var $aVlzG = parcelRequire("aVlzG");

var $9ONqd = parcelRequire("9ONqd");

var $hp6PI = parcelRequire("hp6PI");

var $8ZZbk = parcelRequire("8ZZbk");

var $kdbIU = parcelRequire("kdbIU");
parcelRequire("7Sll6");
parcelRequire("1rtij");
parcelRequire("gOlfO");
parcelRequire("aiFbc");




parcelRequire("5Nl7d");
parcelRequire("lDnUH");




const $752c6db0f3f3744a$var$sanitizeText = (txt)=>(0, $8ZZbk.e).sanitizeText(txt, (0, $8ZZbk.c)());
let $752c6db0f3f3744a$var$conf = {
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    curve: void 0
};
const $752c6db0f3f3744a$var$addNamespaces = function(namespaces, g, _id, diagObj) {
    const keys = Object.keys(namespaces);
    (0, $8ZZbk.l).info("keys:", keys);
    (0, $8ZZbk.l).info(namespaces);
    keys.forEach(function(id) {
        var _a, _b;
        const vertex = namespaces[id];
        const shape = "rect";
        const node = {
            shape: shape,
            id: vertex.id,
            domId: vertex.domId,
            labelText: $752c6db0f3f3744a$var$sanitizeText(vertex.id),
            labelStyle: "",
            style: "fill: none; stroke: black",
            // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
            padding: ((_a = (0, $8ZZbk.c)().flowchart) == null ? void 0 : _a.padding) ?? ((_b = (0, $8ZZbk.c)().class) == null ? void 0 : _b.padding)
        };
        g.setNode(vertex.id, node);
        $752c6db0f3f3744a$var$addClasses(vertex.classes, g, _id, diagObj, vertex.id);
        (0, $8ZZbk.l).info("setNode", node);
    });
};
const $752c6db0f3f3744a$var$addClasses = function(classes, g, _id, diagObj, parent) {
    const keys = Object.keys(classes);
    (0, $8ZZbk.l).info("keys:", keys);
    (0, $8ZZbk.l).info(classes);
    keys.forEach(function(id) {
        var _a, _b;
        const vertex = classes[id];
        let cssClassStr = "";
        if (vertex.cssClasses.length > 0) cssClassStr = cssClassStr + " " + vertex.cssClasses.join(" ");
        const styles2 = {
            labelStyle: "",
            style: ""
        };
        const vertexText = vertex.label ?? vertex.id;
        const radius = 0;
        const shape = "class_box";
        const node = {
            labelStyle: styles2.labelStyle,
            shape: shape,
            labelText: $752c6db0f3f3744a$var$sanitizeText(vertexText),
            classData: vertex,
            rx: radius,
            ry: radius,
            class: cssClassStr,
            style: styles2.style,
            id: vertex.id,
            domId: vertex.domId,
            tooltip: diagObj.db.getTooltip(vertex.id, parent) || "",
            haveCallback: vertex.haveCallback,
            link: vertex.link,
            width: vertex.type === "group" ? 500 : void 0,
            type: vertex.type,
            // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
            padding: ((_a = (0, $8ZZbk.c)().flowchart) == null ? void 0 : _a.padding) ?? ((_b = (0, $8ZZbk.c)().class) == null ? void 0 : _b.padding)
        };
        g.setNode(vertex.id, node);
        if (parent) g.setParent(vertex.id, parent);
        (0, $8ZZbk.l).info("setNode", node);
    });
};
const $752c6db0f3f3744a$var$addNotes = function(notes, g, startEdgeId, classes) {
    (0, $8ZZbk.l).info(notes);
    notes.forEach(function(note, i) {
        var _a, _b;
        const vertex = note;
        const cssNoteStr = "";
        const styles2 = {
            labelStyle: "",
            style: ""
        };
        const vertexText = vertex.text;
        const radius = 0;
        const shape = "note";
        const node = {
            labelStyle: styles2.labelStyle,
            shape: shape,
            labelText: $752c6db0f3f3744a$var$sanitizeText(vertexText),
            noteData: vertex,
            rx: radius,
            ry: radius,
            class: cssNoteStr,
            style: styles2.style,
            id: vertex.id,
            domId: vertex.id,
            tooltip: "",
            type: "note",
            // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
            padding: ((_a = (0, $8ZZbk.c)().flowchart) == null ? void 0 : _a.padding) ?? ((_b = (0, $8ZZbk.c)().class) == null ? void 0 : _b.padding)
        };
        g.setNode(vertex.id, node);
        (0, $8ZZbk.l).info("setNode", node);
        if (!vertex.class || !(vertex.class in classes)) return;
        const edgeId = startEdgeId + i;
        const edgeData = {
            id: `edgeNote${edgeId}`,
            //Set relationship style and line type
            classes: "relation",
            pattern: "dotted",
            // Set link type for rendering
            arrowhead: "none",
            //Set edge extra labels
            startLabelRight: "",
            endLabelLeft: "",
            //Set relation arrow types
            arrowTypeStart: "none",
            arrowTypeEnd: "none",
            style: "fill:none",
            labelStyle: "",
            curve: (0, $8ZZbk.o)($752c6db0f3f3744a$var$conf.curve, (0, $9ONqd.curveLinear))
        };
        g.setEdge(vertex.id, vertex.class, edgeData, edgeId);
    });
};
const $752c6db0f3f3744a$var$addRelations = function(relations, g) {
    const conf2 = (0, $8ZZbk.c)().flowchart;
    let cnt = 0;
    relations.forEach(function(edge) {
        var _a;
        cnt++;
        const edgeData = {
            //Set relationship style and line type
            classes: "relation",
            pattern: edge.relation.lineType == 1 ? "dashed" : "solid",
            id: "id" + cnt,
            // Set link type for rendering
            arrowhead: edge.type === "arrow_open" ? "none" : "normal",
            //Set edge extra labels
            startLabelRight: edge.relationTitle1 === "none" ? "" : edge.relationTitle1,
            endLabelLeft: edge.relationTitle2 === "none" ? "" : edge.relationTitle2,
            //Set relation arrow types
            arrowTypeStart: $752c6db0f3f3744a$var$getArrowMarker(edge.relation.type1),
            arrowTypeEnd: $752c6db0f3f3744a$var$getArrowMarker(edge.relation.type2),
            style: "fill:none",
            labelStyle: "",
            curve: (0, $8ZZbk.o)(conf2 == null ? void 0 : conf2.curve, (0, $9ONqd.curveLinear))
        };
        (0, $8ZZbk.l).info(edgeData, edge);
        if (edge.style !== void 0) {
            const styles2 = (0, $8ZZbk.k)(edge.style);
            edgeData.style = styles2.style;
            edgeData.labelStyle = styles2.labelStyle;
        }
        edge.text = edge.title;
        if (edge.text === void 0) {
            if (edge.style !== void 0) edgeData.arrowheadStyle = "fill: #333";
        } else {
            edgeData.arrowheadStyle = "fill: #333";
            edgeData.labelpos = "c";
            if (((_a = (0, $8ZZbk.c)().flowchart) == null ? void 0 : _a.htmlLabels) ?? (0, $8ZZbk.c)().htmlLabels) {
                edgeData.labelType = "html";
                edgeData.label = '<span class="edgeLabel">' + edge.text + "</span>";
            } else {
                edgeData.labelType = "text";
                edgeData.label = edge.text.replace((0, $8ZZbk.e).lineBreakRegex, "\n");
                if (edge.style === void 0) edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
                edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
            }
        }
        g.setEdge(edge.id1, edge.id2, edgeData, cnt);
    });
};
const $752c6db0f3f3744a$var$setConf = function(cnf) {
    $752c6db0f3f3744a$var$conf = {
        ...$752c6db0f3f3744a$var$conf,
        ...cnf
    };
};
const $752c6db0f3f3744a$var$draw = async function(text, id, _version, diagObj) {
    (0, $8ZZbk.l).info("Drawing class - ", id);
    const conf2 = (0, $8ZZbk.c)().flowchart ?? (0, $8ZZbk.c)().class;
    const securityLevel = (0, $8ZZbk.c)().securityLevel;
    (0, $8ZZbk.l).info("config:", conf2);
    const nodeSpacing = (conf2 == null ? void 0 : conf2.nodeSpacing) ?? 50;
    const rankSpacing = (conf2 == null ? void 0 : conf2.rankSpacing) ?? 50;
    const g = new $hp6PI.Graph({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: diagObj.db.getDirection(),
        nodesep: nodeSpacing,
        ranksep: rankSpacing,
        marginx: 8,
        marginy: 8
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    const namespaces = diagObj.db.getNamespaces();
    const classes = diagObj.db.getClasses();
    const relations = diagObj.db.getRelations();
    const notes = diagObj.db.getNotes();
    (0, $8ZZbk.l).info(relations);
    $752c6db0f3f3744a$var$addNamespaces(namespaces, g, id, diagObj);
    $752c6db0f3f3744a$var$addClasses(classes, g, id, diagObj);
    $752c6db0f3f3744a$var$addRelations(relations, g);
    $752c6db0f3f3744a$var$addNotes(notes, g, relations.length + 1, classes);
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, $9ONqd.select)("#i" + id);
    const root = securityLevel === "sandbox" ? // @ts-ignore Ignore type error for now
    (0, $9ONqd.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, $9ONqd.select)("body");
    const svg = root.select(`[id="${id}"]`);
    const element = root.select("#" + id + " g");
    await (0, $kdbIU.r)(element, g, [
        "aggregation",
        "extension",
        "composition",
        "dependency",
        "lollipop"
    ], "classDiagram", id);
    (0, $8ZZbk.u).insertTitle(svg, "classTitleText", (conf2 == null ? void 0 : conf2.titleTopMargin) ?? 5, diagObj.db.getDiagramTitle());
    (0, $8ZZbk.p)(g, svg, conf2 == null ? void 0 : conf2.diagramPadding, conf2 == null ? void 0 : conf2.useMaxWidth);
    if (!(conf2 == null ? void 0 : conf2.htmlLabels)) {
        const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
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
};
function $752c6db0f3f3744a$var$getArrowMarker(type) {
    let marker;
    switch(type){
        case 0:
            marker = "aggregation";
            break;
        case 1:
            marker = "extension";
            break;
        case 2:
            marker = "composition";
            break;
        case 3:
            marker = "dependency";
            break;
        case 4:
            marker = "lollipop";
            break;
        default:
            marker = "none";
    }
    return marker;
}
const $752c6db0f3f3744a$var$renderer = {
    setConf: $752c6db0f3f3744a$var$setConf,
    draw: $752c6db0f3f3744a$var$draw
};
const $752c6db0f3f3744a$export$6118d022d940d562 = {
    parser: $aVlzG.p,
    db: $aVlzG.d,
    renderer: $752c6db0f3f3744a$var$renderer,
    styles: $aVlzG.s,
    init: (cnf)=>{
        if (!cnf.class) cnf.class = {};
        cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        (0, $aVlzG.d).clear();
    }
};

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


//# sourceMappingURL=classDiagram-v2-8931bdaf.78a8f41c.js.map
