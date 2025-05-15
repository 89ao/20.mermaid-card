import "./flowDiagram-93327f21.6ed3d378.js";
import "./flowDiagram-93327f21.1bb329b0.js";
import "./flowDiagram-93327f21.fc885644.js";
import "./flowDiagram-93327f21.f1c41c8f.js";
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
parcelRequire.register("9VdJZ", function(module, exports) {

$parcel$export(module.exports, "diagram", () => $73941890a3178393$export$6118d022d940d562);

var $l8MD0 = parcelRequire("l8MD0");

var $hp6PI = parcelRequire("hp6PI");

var $9ONqd = parcelRequire("9ONqd");

var $8ZZbk = parcelRequire("8ZZbk");

var $kdbIU = parcelRequire("kdbIU");
parcelRequire("7Sll6");
parcelRequire("1rtij");
parcelRequire("gOlfO");
parcelRequire("aiFbc");




parcelRequire("5Nl7d");
parcelRequire("lDnUH");




const $73941890a3178393$var$SHAPE_STATE = "rect";
const $73941890a3178393$var$SHAPE_STATE_WITH_DESC = "rectWithTitle";
const $73941890a3178393$var$SHAPE_START = "start";
const $73941890a3178393$var$SHAPE_END = "end";
const $73941890a3178393$var$SHAPE_DIVIDER = "divider";
const $73941890a3178393$var$SHAPE_GROUP = "roundedWithTitle";
const $73941890a3178393$var$SHAPE_NOTE = "note";
const $73941890a3178393$var$SHAPE_NOTEGROUP = "noteGroup";
const $73941890a3178393$var$CSS_DIAGRAM = "statediagram";
const $73941890a3178393$var$CSS_STATE = "state";
const $73941890a3178393$var$CSS_DIAGRAM_STATE = `${$73941890a3178393$var$CSS_DIAGRAM}-${$73941890a3178393$var$CSS_STATE}`;
const $73941890a3178393$var$CSS_EDGE = "transition";
const $73941890a3178393$var$CSS_NOTE = "note";
const $73941890a3178393$var$CSS_NOTE_EDGE = "note-edge";
const $73941890a3178393$var$CSS_EDGE_NOTE_EDGE = `${$73941890a3178393$var$CSS_EDGE} ${$73941890a3178393$var$CSS_NOTE_EDGE}`;
const $73941890a3178393$var$CSS_DIAGRAM_NOTE = `${$73941890a3178393$var$CSS_DIAGRAM}-${$73941890a3178393$var$CSS_NOTE}`;
const $73941890a3178393$var$CSS_CLUSTER = "cluster";
const $73941890a3178393$var$CSS_DIAGRAM_CLUSTER = `${$73941890a3178393$var$CSS_DIAGRAM}-${$73941890a3178393$var$CSS_CLUSTER}`;
const $73941890a3178393$var$CSS_CLUSTER_ALT = "cluster-alt";
const $73941890a3178393$var$CSS_DIAGRAM_CLUSTER_ALT = `${$73941890a3178393$var$CSS_DIAGRAM}-${$73941890a3178393$var$CSS_CLUSTER_ALT}`;
const $73941890a3178393$var$PARENT = "parent";
const $73941890a3178393$var$NOTE = "note";
const $73941890a3178393$var$DOMID_STATE = "state";
const $73941890a3178393$var$DOMID_TYPE_SPACER = "----";
const $73941890a3178393$var$NOTE_ID = `${$73941890a3178393$var$DOMID_TYPE_SPACER}${$73941890a3178393$var$NOTE}`;
const $73941890a3178393$var$PARENT_ID = `${$73941890a3178393$var$DOMID_TYPE_SPACER}${$73941890a3178393$var$PARENT}`;
const $73941890a3178393$var$G_EDGE_STYLE = "fill:none";
const $73941890a3178393$var$G_EDGE_ARROWHEADSTYLE = "fill: #333";
const $73941890a3178393$var$G_EDGE_LABELPOS = "c";
const $73941890a3178393$var$G_EDGE_LABELTYPE = "text";
const $73941890a3178393$var$G_EDGE_THICKNESS = "normal";
let $73941890a3178393$var$nodeDb = {};
let $73941890a3178393$var$graphItemCount = 0;
const $73941890a3178393$var$setConf = function(cnf) {
    const keys = Object.keys(cnf);
    for (const key of keys)cnf[key];
};
const $73941890a3178393$var$getClasses = function(text, diagramObj) {
    (0, $8ZZbk.l).trace("Extracting classes");
    diagramObj.db.clear();
    try {
        diagramObj.parser.parse(text);
        diagramObj.db.extract(diagramObj.db.getRootDocV2());
        return diagramObj.db.getClasses();
    } catch (e) {
        return e;
    }
};
function $73941890a3178393$var$getClassesFromDbInfo(dbInfoItem) {
    if (dbInfoItem === void 0 || dbInfoItem === null) return "";
    else {
        if (dbInfoItem.classes) return dbInfoItem.classes.join(" ");
        else return "";
    }
}
function $73941890a3178393$var$stateDomId(itemId = "", counter = 0, type = "", typeSpacer = $73941890a3178393$var$DOMID_TYPE_SPACER) {
    const typeStr = type !== null && type.length > 0 ? `${typeSpacer}${type}` : "";
    return `${$73941890a3178393$var$DOMID_STATE}-${itemId}${typeStr}-${counter}`;
}
const $73941890a3178393$var$setupNode = (g, parent, parsedItem, diagramStates, diagramDb, altFlag)=>{
    const itemId = parsedItem.id;
    const classStr = $73941890a3178393$var$getClassesFromDbInfo(diagramStates[itemId]);
    if (itemId !== "root") {
        let shape = $73941890a3178393$var$SHAPE_STATE;
        if (parsedItem.start === true) shape = $73941890a3178393$var$SHAPE_START;
        if (parsedItem.start === false) shape = $73941890a3178393$var$SHAPE_END;
        if (parsedItem.type !== (0, $l8MD0.D)) shape = parsedItem.type;
        if (!$73941890a3178393$var$nodeDb[itemId]) $73941890a3178393$var$nodeDb[itemId] = {
            id: itemId,
            shape: shape,
            description: (0, $8ZZbk.e).sanitizeText(itemId, (0, $8ZZbk.c)()),
            classes: `${classStr} ${$73941890a3178393$var$CSS_DIAGRAM_STATE}`
        };
        const newNode = $73941890a3178393$var$nodeDb[itemId];
        if (parsedItem.description) {
            if (Array.isArray(newNode.description)) {
                newNode.shape = $73941890a3178393$var$SHAPE_STATE_WITH_DESC;
                newNode.description.push(parsedItem.description);
            } else if (newNode.description.length > 0) {
                newNode.shape = $73941890a3178393$var$SHAPE_STATE_WITH_DESC;
                if (newNode.description === itemId) newNode.description = [
                    parsedItem.description
                ];
                else newNode.description = [
                    newNode.description,
                    parsedItem.description
                ];
            } else {
                newNode.shape = $73941890a3178393$var$SHAPE_STATE;
                newNode.description = parsedItem.description;
            }
            newNode.description = (0, $8ZZbk.e).sanitizeTextOrArray(newNode.description, (0, $8ZZbk.c)());
        }
        if (newNode.description.length === 1 && newNode.shape === $73941890a3178393$var$SHAPE_STATE_WITH_DESC) newNode.shape = $73941890a3178393$var$SHAPE_STATE;
        if (!newNode.type && parsedItem.doc) {
            (0, $8ZZbk.l).info("Setting cluster for ", itemId, $73941890a3178393$var$getDir(parsedItem));
            newNode.type = "group";
            newNode.dir = $73941890a3178393$var$getDir(parsedItem);
            newNode.shape = parsedItem.type === (0, $l8MD0.a) ? $73941890a3178393$var$SHAPE_DIVIDER : $73941890a3178393$var$SHAPE_GROUP;
            newNode.classes = newNode.classes + " " + $73941890a3178393$var$CSS_DIAGRAM_CLUSTER + " " + (altFlag ? $73941890a3178393$var$CSS_DIAGRAM_CLUSTER_ALT : "");
        }
        const nodeData = {
            labelStyle: "",
            shape: newNode.shape,
            labelText: newNode.description,
            // typeof newNode.description === 'object'
            //   ? newNode.description[0]
            //   : newNode.description,
            classes: newNode.classes,
            style: "",
            //styles.style,
            id: itemId,
            dir: newNode.dir,
            domId: $73941890a3178393$var$stateDomId(itemId, $73941890a3178393$var$graphItemCount),
            type: newNode.type,
            padding: 15
        };
        nodeData.centerLabel = true;
        if (parsedItem.note) {
            const noteData = {
                labelStyle: "",
                shape: $73941890a3178393$var$SHAPE_NOTE,
                labelText: parsedItem.note.text,
                classes: $73941890a3178393$var$CSS_DIAGRAM_NOTE,
                // useHtmlLabels: false,
                style: "",
                // styles.style,
                id: itemId + $73941890a3178393$var$NOTE_ID + "-" + $73941890a3178393$var$graphItemCount,
                domId: $73941890a3178393$var$stateDomId(itemId, $73941890a3178393$var$graphItemCount, $73941890a3178393$var$NOTE),
                type: newNode.type,
                padding: 15
            };
            const groupData = {
                labelStyle: "",
                shape: $73941890a3178393$var$SHAPE_NOTEGROUP,
                labelText: parsedItem.note.text,
                classes: newNode.classes,
                style: "",
                // styles.style,
                id: itemId + $73941890a3178393$var$PARENT_ID,
                domId: $73941890a3178393$var$stateDomId(itemId, $73941890a3178393$var$graphItemCount, $73941890a3178393$var$PARENT),
                type: "group",
                padding: 0
            };
            $73941890a3178393$var$graphItemCount++;
            const parentNodeId = itemId + $73941890a3178393$var$PARENT_ID;
            g.setNode(parentNodeId, groupData);
            g.setNode(noteData.id, noteData);
            g.setNode(itemId, nodeData);
            g.setParent(itemId, parentNodeId);
            g.setParent(noteData.id, parentNodeId);
            let from = itemId;
            let to = noteData.id;
            if (parsedItem.note.position === "left of") {
                from = noteData.id;
                to = itemId;
            }
            g.setEdge(from, to, {
                arrowhead: "none",
                arrowType: "",
                style: $73941890a3178393$var$G_EDGE_STYLE,
                labelStyle: "",
                classes: $73941890a3178393$var$CSS_EDGE_NOTE_EDGE,
                arrowheadStyle: $73941890a3178393$var$G_EDGE_ARROWHEADSTYLE,
                labelpos: $73941890a3178393$var$G_EDGE_LABELPOS,
                labelType: $73941890a3178393$var$G_EDGE_LABELTYPE,
                thickness: $73941890a3178393$var$G_EDGE_THICKNESS
            });
        } else g.setNode(itemId, nodeData);
    }
    if (parent && parent.id !== "root") {
        (0, $8ZZbk.l).trace("Setting node ", itemId, " to be child of its parent ", parent.id);
        g.setParent(itemId, parent.id);
    }
    if (parsedItem.doc) {
        (0, $8ZZbk.l).trace("Adding nodes children ");
        $73941890a3178393$var$setupDoc(g, parsedItem, parsedItem.doc, diagramStates, diagramDb, !altFlag);
    }
};
const $73941890a3178393$var$setupDoc = (g, parentParsedItem, doc, diagramStates, diagramDb, altFlag)=>{
    (0, $8ZZbk.l).trace("items", doc);
    doc.forEach((item)=>{
        switch(item.stmt){
            case 0, $l8MD0.b:
                $73941890a3178393$var$setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
                break;
            case 0, $l8MD0.D:
                $73941890a3178393$var$setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
                break;
            case 0, $l8MD0.S:
                {
                    $73941890a3178393$var$setupNode(g, parentParsedItem, item.state1, diagramStates, diagramDb, altFlag);
                    $73941890a3178393$var$setupNode(g, parentParsedItem, item.state2, diagramStates, diagramDb, altFlag);
                    const edgeData = {
                        id: "edge" + $73941890a3178393$var$graphItemCount,
                        arrowhead: "normal",
                        arrowTypeEnd: "arrow_barb",
                        style: $73941890a3178393$var$G_EDGE_STYLE,
                        labelStyle: "",
                        label: (0, $8ZZbk.e).sanitizeText(item.description, (0, $8ZZbk.c)()),
                        arrowheadStyle: $73941890a3178393$var$G_EDGE_ARROWHEADSTYLE,
                        labelpos: $73941890a3178393$var$G_EDGE_LABELPOS,
                        labelType: $73941890a3178393$var$G_EDGE_LABELTYPE,
                        thickness: $73941890a3178393$var$G_EDGE_THICKNESS,
                        classes: $73941890a3178393$var$CSS_EDGE
                    };
                    g.setEdge(item.state1.id, item.state2.id, edgeData, $73941890a3178393$var$graphItemCount);
                    $73941890a3178393$var$graphItemCount++;
                }
                break;
        }
    });
};
const $73941890a3178393$var$getDir = (parsedItem, defaultDir = (0, $l8MD0.c))=>{
    let dir = defaultDir;
    if (parsedItem.doc) for(let i = 0; i < parsedItem.doc.length; i++){
        const parsedItemDoc = parsedItem.doc[i];
        if (parsedItemDoc.stmt === "dir") dir = parsedItemDoc.value;
    }
    return dir;
};
const $73941890a3178393$var$draw = async function(text, id, _version, diag) {
    (0, $8ZZbk.l).info("Drawing state diagram (v2)", id);
    $73941890a3178393$var$nodeDb = {};
    diag.db.getDirection();
    const { securityLevel: securityLevel , state: conf  } = (0, $8ZZbk.c)();
    const nodeSpacing = conf.nodeSpacing || 50;
    const rankSpacing = conf.rankSpacing || 50;
    (0, $8ZZbk.l).info(diag.db.getRootDocV2());
    diag.db.extract(diag.db.getRootDocV2());
    (0, $8ZZbk.l).info(diag.db.getRootDocV2());
    const diagramStates = diag.db.getStates();
    const g = new $hp6PI.Graph({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: $73941890a3178393$var$getDir(diag.db.getRootDocV2()),
        nodesep: nodeSpacing,
        ranksep: rankSpacing,
        marginx: 8,
        marginy: 8
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    $73941890a3178393$var$setupNode(g, void 0, diag.db.getRootDocV2(), diagramStates, diag.db, true);
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, $9ONqd.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, $9ONqd.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, $9ONqd.select)("body");
    const svg = root.select(`[id="${id}"]`);
    const element = root.select("#" + id + " g");
    await (0, $kdbIU.r)(element, g, [
        "barb"
    ], $73941890a3178393$var$CSS_DIAGRAM, id);
    const padding = 8;
    (0, $8ZZbk.u).insertTitle(svg, "statediagramTitleText", conf.titleTopMargin, diag.db.getDiagramTitle());
    const bounds = svg.node().getBBox();
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    svg.attr("class", $73941890a3178393$var$CSS_DIAGRAM);
    const svgBounds = svg.node().getBBox();
    (0, $8ZZbk.i)(svg, height, width, conf.useMaxWidth);
    const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
    (0, $8ZZbk.l).debug(`viewBox ${vBox}`);
    svg.attr("viewBox", vBox);
    const labels = document.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels){
        const dim = label.getBBox();
        const rect = document.createElementNS("http://www.w3.org/2000/svg", $73941890a3178393$var$SHAPE_STATE);
        rect.setAttribute("rx", 0);
        rect.setAttribute("ry", 0);
        rect.setAttribute("width", dim.width);
        rect.setAttribute("height", dim.height);
        label.insertBefore(rect, label.firstChild);
    }
};
const $73941890a3178393$var$renderer = {
    setConf: $73941890a3178393$var$setConf,
    getClasses: $73941890a3178393$var$getClasses,
    draw: $73941890a3178393$var$draw
};
const $73941890a3178393$export$6118d022d940d562 = {
    parser: $l8MD0.p,
    db: $l8MD0.d,
    renderer: $73941890a3178393$var$renderer,
    styles: $l8MD0.s,
    init: (cnf)=>{
        if (!cnf.state) cnf.state = {};
        cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        (0, $l8MD0.d).clear();
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


//# sourceMappingURL=stateDiagram-v2-6371a76b.a507dee3.js.map
