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
parcelRequire.register("1V2Fn", function(module, exports) {

$parcel$export(module.exports, "diagram", () => $165d2ec793494549$export$6118d022d940d562);

var $4lfVT = parcelRequire("4lfVT");

var $3XLJx = parcelRequire("3XLJx");

var $8ZZbk = parcelRequire("8ZZbk");
parcelRequire("9ONqd");
parcelRequire("hp6PI");

parcelRequire("5Nl7d");
parcelRequire("lDnUH");



parcelRequire("7Sll6");

parcelRequire("72GQT");

parcelRequire("1rtij");
parcelRequire("gOlfO");
parcelRequire("aiFbc");



const $165d2ec793494549$export$6118d022d940d562 = {
    parser: $4lfVT.p,
    db: (0, $4lfVT.f),
    renderer: (0, $3XLJx.f),
    styles: (0, $3XLJx.a),
    init: (cnf)=>{
        if (!cnf.flowchart) cnf.flowchart = {};
        cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        (0, $8ZZbk.q)({
            flowchart: {
                arrowMarkerAbsolute: cnf.arrowMarkerAbsolute
            }
        });
        (0, $3XLJx.f).setConf(cnf.flowchart);
        (0, $4lfVT.f).clear();
        (0, $4lfVT.f).setGen("gen-2");
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


//# sourceMappingURL=flowDiagram-v2-476db779.38a381a4.js.map
