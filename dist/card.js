function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
parcelRequire.register("7Sll6", function(module, exports) {

$parcel$export(module.exports, "dedent", () => $5bbe211abfebf128$export$1d81801f981b61e);
function $5bbe211abfebf128$export$1d81801f981b61e(templ) {
    var values = [];
    for(var _i = 1; _i < arguments.length; _i++)values[_i - 1] = arguments[_i];
    var strings = Array.from(typeof templ === "string" ? [
        templ
    ] : templ);
    strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var indentLengths = strings.reduce(function(arr, str) {
        var matches = str.match(/\n([\t ]+|(?!\s).)/g);
        if (matches) return arr.concat(matches.map(function(match) {
            var _a, _b;
            return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        }));
        return arr;
    }, []);
    if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
        strings = strings.map(function(str) {
            return str.replace(pattern_1, "\n");
        });
    }
    strings[0] = strings[0].replace(/^\r?\n/, "");
    var string = strings[0];
    values.forEach(function(value, i) {
        var endentations = string.match(/(?:^|\n)( *)$/);
        var endentation = endentations ? endentations[1] : "";
        var indentedValue = value;
        if (typeof value === "string" && value.includes("\n")) indentedValue = String(value).split("\n").map(function(str, i) {
            return i === 0 ? str : "" + endentation + str;
        }).join("\n");
        string += indentedValue + strings[i + 1];
    });
    return string;
}
var $5bbe211abfebf128$export$2e2bcd8739ae039 = $5bbe211abfebf128$export$1d81801f981b61e;

});

parcelRequire.register("8ZZbk", function(module, exports) {

$parcel$export(module.exports, "l", () => $68d37aac8bca33d7$export$882b5998b3b9117c);
$parcel$export(module.exports, "d", () => $68d37aac8bca33d7$export$4368d992c4eafac0);
$parcel$export(module.exports, "n", () => $68d37aac8bca33d7$export$7ccc53e8f1e7dfc5);
$parcel$export(module.exports, "x", () => $68d37aac8bca33d7$export$d141bba7fdc215a3);
$parcel$export(module.exports, "e", () => $68d37aac8bca33d7$export$f1e1789686576879);
$parcel$export(module.exports, "C", () => $68d37aac8bca33d7$export$e7094788287c5e9b);
$parcel$export(module.exports, "D", () => $68d37aac8bca33d7$export$96f57966bedc81b4);
$parcel$export(module.exports, "f", () => $68d37aac8bca33d7$export$2d1720544b23b823);
$parcel$export(module.exports, "G", () => $68d37aac8bca33d7$export$2329c99376c9d0a4);
$parcel$export(module.exports, "q", () => $68d37aac8bca33d7$export$9e5f44173e64f162);
$parcel$export(module.exports, "c", () => $68d37aac8bca33d7$export$db3b6bfb95261072);
$parcel$export(module.exports, "i", () => $68d37aac8bca33d7$export$23f2a1d2818174ef);
$parcel$export(module.exports, "p", () => $68d37aac8bca33d7$export$ffb5f4729a158638);
$parcel$export(module.exports, "v", () => $68d37aac8bca33d7$export$90a7f3efeed30595);
$parcel$export(module.exports, "s", () => $68d37aac8bca33d7$export$2408f22a0fab9ae5);
$parcel$export(module.exports, "g", () => $68d37aac8bca33d7$export$39b482c5e57630a8);
$parcel$export(module.exports, "b", () => $68d37aac8bca33d7$export$8b22cf2602fb60ce);
$parcel$export(module.exports, "a", () => $68d37aac8bca33d7$export$407448d2b89b1813);
$parcel$export(module.exports, "r", () => $68d37aac8bca33d7$export$43caf9889c228507);
$parcel$export(module.exports, "t", () => $68d37aac8bca33d7$export$625550452a3fa3ec);
$parcel$export(module.exports, "I", () => $68d37aac8bca33d7$export$9bb611d729802a56);
$parcel$export(module.exports, "J", () => $68d37aac8bca33d7$export$b4171a6734a65d42);
$parcel$export(module.exports, "z", () => $68d37aac8bca33d7$export$df995fae86a55f06);
$parcel$export(module.exports, "A", () => $68d37aac8bca33d7$export$ebd11618f299a286);
$parcel$export(module.exports, "Z", () => $68d37aac8bca33d7$export$dc98b0b04f4c7758);
$parcel$export(module.exports, "o", () => $68d37aac8bca33d7$export$ae1af26003f05816);
$parcel$export(module.exports, "k", () => $68d37aac8bca33d7$export$342063e11d6c3cad);
$parcel$export(module.exports, "F", () => $68d37aac8bca33d7$export$d66501df72047452);
$parcel$export(module.exports, "y", () => $68d37aac8bca33d7$export$4a5767248b18ef41);
$parcel$export(module.exports, "B", () => $68d37aac8bca33d7$export$ef35774e6d314e91);
$parcel$export(module.exports, "w", () => $68d37aac8bca33d7$export$efccba1c4a2ef57b);
$parcel$export(module.exports, "h", () => $68d37aac8bca33d7$export$dda1d9f60106f0e9);
$parcel$export(module.exports, "j", () => $68d37aac8bca33d7$export$35e795649ee09318);
$parcel$export(module.exports, "u", () => $68d37aac8bca33d7$export$3b14a55fb2447963);
$parcel$export(module.exports, "E", () => $68d37aac8bca33d7$export$a9c23c6ac3fc3eca);
$parcel$export(module.exports, "H", () => $68d37aac8bca33d7$export$7f8ddf7c7c20b3cd);
$parcel$export(module.exports, "m", () => $68d37aac8bca33d7$export$953cecd6e717a553);
$parcel$export(module.exports, "K", () => $68d37aac8bca33d7$export$3466f893ebf79586);

var $7Sll6 = parcelRequire("7Sll6");

var $1rtij = parcelRequire("1rtij");

var $gOlfO = parcelRequire("gOlfO");
parcelRequire("9ONqd");
var $1BrvX = parcelRequire("1BrvX");
var $8US7F = parcelRequire("8US7F");
var $3fOcN = parcelRequire("3fOcN");
var $kHgim = parcelRequire("kHgim");
var $bZdBH = parcelRequire("bZdBH");
var $642tg = parcelRequire("642tg");
var $3vYLn = parcelRequire("3vYLn");
var $fnxet = parcelRequire("fnxet");
var $6TZoA = parcelRequire("6TZoA");
var $ii7b3 = parcelRequire("ii7b3");
var $2TdSl = parcelRequire("2TdSl");
var $4KZO1 = parcelRequire("4KZO1");
var $4JsHV = parcelRequire("4JsHV");
var $3KqRo = parcelRequire("3KqRo");
var $3xOzo = parcelRequire("3xOzo");
var $9R5Z3 = parcelRequire("9R5Z3");
var $htTEB = parcelRequire("htTEB");

var $aiFbc = parcelRequire("aiFbc");
parcelRequire("87kMk");
var $tDZs9 = parcelRequire("tDZs9");
var $9O8cC = parcelRequire("9O8cC");
var $9KWq0 = parcelRequire("9KWq0");
var $8syuv = parcelRequire("8syuv");
var $9iz3d = parcelRequire("9iz3d");
var $42Ff1 = parcelRequire("42Ff1");

var $14Y92 = parcelRequire("14Y92");

var $lKQqi = parcelRequire("lKQqi");

var $kj1eP = parcelRequire("kj1eP");
const $68d37aac8bca33d7$var$LEVELS = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
};
const $68d37aac8bca33d7$export$882b5998b3b9117c = {
    trace: (..._args)=>{},
    debug: (..._args)=>{},
    info: (..._args)=>{},
    warn: (..._args)=>{},
    error: (..._args)=>{},
    fatal: (..._args)=>{}
};
const $68d37aac8bca33d7$var$setLogLevel$1 = function(level = "fatal") {
    let numericLevel = $68d37aac8bca33d7$var$LEVELS.fatal;
    if (typeof level === "string") {
        level = level.toLowerCase();
        if (level in $68d37aac8bca33d7$var$LEVELS) numericLevel = $68d37aac8bca33d7$var$LEVELS[level];
    } else if (typeof level === "number") numericLevel = level;
    $68d37aac8bca33d7$export$882b5998b3b9117c.trace = ()=>{};
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug = ()=>{};
    $68d37aac8bca33d7$export$882b5998b3b9117c.info = ()=>{};
    $68d37aac8bca33d7$export$882b5998b3b9117c.warn = ()=>{};
    $68d37aac8bca33d7$export$882b5998b3b9117c.error = ()=>{};
    $68d37aac8bca33d7$export$882b5998b3b9117c.fatal = ()=>{};
    if (numericLevel <= $68d37aac8bca33d7$var$LEVELS.fatal) $68d37aac8bca33d7$export$882b5998b3b9117c.fatal = console.error ? console.error.bind(console, $68d37aac8bca33d7$var$format("FATAL"), "color: orange") : console.log.bind(console, "\x1b[35m", $68d37aac8bca33d7$var$format("FATAL"));
    if (numericLevel <= $68d37aac8bca33d7$var$LEVELS.error) $68d37aac8bca33d7$export$882b5998b3b9117c.error = console.error ? console.error.bind(console, $68d37aac8bca33d7$var$format("ERROR"), "color: orange") : console.log.bind(console, "\x1b[31m", $68d37aac8bca33d7$var$format("ERROR"));
    if (numericLevel <= $68d37aac8bca33d7$var$LEVELS.warn) $68d37aac8bca33d7$export$882b5998b3b9117c.warn = console.warn ? console.warn.bind(console, $68d37aac8bca33d7$var$format("WARN"), "color: orange") : console.log.bind(console, `\x1B[33m`, $68d37aac8bca33d7$var$format("WARN"));
    if (numericLevel <= $68d37aac8bca33d7$var$LEVELS.info) $68d37aac8bca33d7$export$882b5998b3b9117c.info = console.info ? console.info.bind(console, $68d37aac8bca33d7$var$format("INFO"), "color: lightblue") : console.log.bind(console, "\x1b[34m", $68d37aac8bca33d7$var$format("INFO"));
    if (numericLevel <= $68d37aac8bca33d7$var$LEVELS.debug) $68d37aac8bca33d7$export$882b5998b3b9117c.debug = console.debug ? console.debug.bind(console, $68d37aac8bca33d7$var$format("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1b[32m", $68d37aac8bca33d7$var$format("DEBUG"));
    if (numericLevel <= $68d37aac8bca33d7$var$LEVELS.trace) $68d37aac8bca33d7$export$882b5998b3b9117c.trace = console.debug ? console.debug.bind(console, $68d37aac8bca33d7$var$format("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1b[32m", $68d37aac8bca33d7$var$format("TRACE"));
};
const $68d37aac8bca33d7$var$format = (level)=>{
    const time = (0, (/*@__PURE__*/$parcel$interopDefault($1rtij)))().format("ss.SSS");
    return `%c${time} : ${level} : `;
};
const $68d37aac8bca33d7$var$lineBreakRegex = /<br\s*\/?>/gi;
const $68d37aac8bca33d7$var$getRows = (s)=>{
    if (!s) return [
        ""
    ];
    const str2 = $68d37aac8bca33d7$var$breakToPlaceholder(s).replace(/\\n/g, "#br#");
    return str2.split("#br#");
};
const $68d37aac8bca33d7$var$removeScript = (txt)=>{
    return (0, (/*@__PURE__*/$parcel$interopDefault($aiFbc))).sanitize(txt);
};
const $68d37aac8bca33d7$var$sanitizeMore = (text, config2)=>{
    var _a;
    if (((_a = config2.flowchart) == null ? void 0 : _a.htmlLabels) !== false) {
        const level = config2.securityLevel;
        if (level === "antiscript" || level === "strict") text = $68d37aac8bca33d7$var$removeScript(text);
        else if (level !== "loose") {
            text = $68d37aac8bca33d7$var$breakToPlaceholder(text);
            text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            text = text.replace(/=/g, "&equals;");
            text = $68d37aac8bca33d7$var$placeholderToBreak(text);
        }
    }
    return text;
};
const $68d37aac8bca33d7$export$4368d992c4eafac0 = (text, config2)=>{
    if (!text) return text;
    if (config2.dompurifyConfig) text = (0, (/*@__PURE__*/$parcel$interopDefault($aiFbc))).sanitize($68d37aac8bca33d7$var$sanitizeMore(text, config2), config2.dompurifyConfig).toString();
    else text = (0, (/*@__PURE__*/$parcel$interopDefault($aiFbc))).sanitize($68d37aac8bca33d7$var$sanitizeMore(text, config2), {
        FORBID_TAGS: [
            "style"
        ]
    }).toString();
    return text;
};
const $68d37aac8bca33d7$var$sanitizeTextOrArray = (a, config2)=>{
    if (typeof a === "string") return $68d37aac8bca33d7$export$4368d992c4eafac0(a, config2);
    return a.flat().map((x)=>$68d37aac8bca33d7$export$4368d992c4eafac0(x, config2));
};
const $68d37aac8bca33d7$var$hasBreaks = (text)=>{
    return $68d37aac8bca33d7$var$lineBreakRegex.test(text);
};
const $68d37aac8bca33d7$var$splitBreaks = (text)=>{
    return text.split($68d37aac8bca33d7$var$lineBreakRegex);
};
const $68d37aac8bca33d7$var$placeholderToBreak = (s)=>{
    return s.replace(/#br#/g, "<br/>");
};
const $68d37aac8bca33d7$var$breakToPlaceholder = (s)=>{
    return s.replace($68d37aac8bca33d7$var$lineBreakRegex, "#br#");
};
const $68d37aac8bca33d7$var$getUrl = (useAbsolute)=>{
    let url = "";
    if (useAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replaceAll(/\(/g, "\\(");
        url = url.replaceAll(/\)/g, "\\)");
    }
    return url;
};
const $68d37aac8bca33d7$export$7ccc53e8f1e7dfc5 = (val)=>val === false || [
        "false",
        "null",
        "0"
    ].includes(String(val).trim().toLowerCase()) ? false : true;
const $68d37aac8bca33d7$var$getMax = function(...values) {
    const newValues = values.filter((value)=>{
        return !isNaN(value);
    });
    return Math.max(...newValues);
};
const $68d37aac8bca33d7$var$getMin = function(...values) {
    const newValues = values.filter((value)=>{
        return !isNaN(value);
    });
    return Math.min(...newValues);
};
const $68d37aac8bca33d7$export$d141bba7fdc215a3 = function(text) {
    let cleanedText = text;
    if (text.split("~").length - 1 >= 2) {
        let newCleanedText = cleanedText;
        do {
            cleanedText = newCleanedText;
            newCleanedText = cleanedText.replace(/~([^\s,:;]+)~/, "<$1>");
        }while (newCleanedText != cleanedText);
        return $68d37aac8bca33d7$export$d141bba7fdc215a3(newCleanedText);
    } else return cleanedText;
};
const $68d37aac8bca33d7$export$f1e1789686576879 = {
    getRows: $68d37aac8bca33d7$var$getRows,
    sanitizeText: $68d37aac8bca33d7$export$4368d992c4eafac0,
    sanitizeTextOrArray: $68d37aac8bca33d7$var$sanitizeTextOrArray,
    hasBreaks: $68d37aac8bca33d7$var$hasBreaks,
    splitBreaks: $68d37aac8bca33d7$var$splitBreaks,
    lineBreakRegex: $68d37aac8bca33d7$var$lineBreakRegex,
    removeScript: $68d37aac8bca33d7$var$removeScript,
    getUrl: $68d37aac8bca33d7$var$getUrl,
    evaluate: $68d37aac8bca33d7$export$7ccc53e8f1e7dfc5,
    getMax: $68d37aac8bca33d7$var$getMax,
    getMin: $68d37aac8bca33d7$var$getMin
};
const $68d37aac8bca33d7$var$mkBorder = (col, darkMode)=>darkMode ? (0, $tDZs9.default)(col, {
        s: -40,
        l: 10
    }) : (0, $tDZs9.default)(col, {
        s: -40,
        l: -10
    });
const $68d37aac8bca33d7$var$oldAttributeBackgroundColorOdd = "#ffffff";
const $68d37aac8bca33d7$var$oldAttributeBackgroundColorEven = "#f2f2f2";
let $68d37aac8bca33d7$var$Theme$4 = class Theme {
    constructor(){
        this.background = "#f4f4f4";
        this.primaryColor = "#fff4dd";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "#333";
        this.THEME_COLOR_LIMIT = 12;
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
    }
    updateColors() {
        this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
        this.secondaryColor = this.secondaryColor || (0, $tDZs9.default)(this.primaryColor, {
            h: -120
        });
        this.tertiaryColor = this.tertiaryColor || (0, $tDZs9.default)(this.primaryColor, {
            h: 180,
            l: 5
        });
        this.primaryBorderColor = this.primaryBorderColor || $68d37aac8bca33d7$var$mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = this.secondaryBorderColor || $68d37aac8bca33d7$var$mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = this.tertiaryBorderColor || $68d37aac8bca33d7$var$mkBorder(this.tertiaryColor, this.darkMode);
        this.noteBorderColor = this.noteBorderColor || $68d37aac8bca33d7$var$mkBorder(this.noteBkgColor, this.darkMode);
        this.noteBkgColor = this.noteBkgColor || "#fff5ad";
        this.noteTextColor = this.noteTextColor || "#333";
        this.secondaryTextColor = this.secondaryTextColor || (0, $9O8cC.default)(this.secondaryColor);
        this.tertiaryTextColor = this.tertiaryTextColor || (0, $9O8cC.default)(this.tertiaryColor);
        this.lineColor = this.lineColor || (0, $9O8cC.default)(this.background);
        this.arrowheadColor = this.arrowheadColor || (0, $9O8cC.default)(this.background);
        this.textColor = this.textColor || this.primaryTextColor;
        this.border2 = this.border2 || this.tertiaryBorderColor;
        this.nodeBkg = this.nodeBkg || this.primaryColor;
        this.mainBkg = this.mainBkg || this.primaryColor;
        this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
        this.clusterBkg = this.clusterBkg || this.tertiaryColor;
        this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
        this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
        this.titleColor = this.titleColor || this.tertiaryTextColor;
        this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? (0, $9KWq0.default)(this.secondaryColor, 30) : this.secondaryColor);
        this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
        this.actorBorder = this.actorBorder || this.primaryBorderColor;
        this.actorBkg = this.actorBkg || this.mainBkg;
        this.actorTextColor = this.actorTextColor || this.primaryTextColor;
        this.actorLineColor = this.actorLineColor || "grey";
        this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
        this.signalColor = this.signalColor || this.textColor;
        this.signalTextColor = this.signalTextColor || this.textColor;
        this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
        this.labelTextColor = this.labelTextColor || this.actorTextColor;
        this.loopTextColor = this.loopTextColor || this.actorTextColor;
        this.activationBorderColor = this.activationBorderColor || (0, $9KWq0.default)(this.secondaryColor, 10);
        this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
        this.sequenceNumberColor = this.sequenceNumberColor || (0, $9O8cC.default)(this.lineColor);
        this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
        this.altSectionBkgColor = this.altSectionBkgColor || "white";
        this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
        this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
        this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
        this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
        this.taskBkgColor = this.taskBkgColor || this.primaryColor;
        this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
        this.activeTaskBkgColor = this.activeTaskBkgColor || (0, $8syuv.default)(this.primaryColor, 23);
        this.gridColor = this.gridColor || "lightgrey";
        this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
        this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
        this.critBorderColor = this.critBorderColor || "#ff8888";
        this.critBkgColor = this.critBkgColor || "red";
        this.todayLineColor = this.todayLineColor || "red";
        this.taskTextColor = this.taskTextColor || this.textColor;
        this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
        this.taskTextLightColor = this.taskTextLightColor || this.textColor;
        this.taskTextColor = this.taskTextColor || this.primaryTextColor;
        this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
        this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
        this.personBorder = this.personBorder || this.primaryBorderColor;
        this.personBkg = this.personBkg || this.mainBkg;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || this.tertiaryColor;
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.nodeBorder;
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.specialStateColor = this.lineColor;
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, $tDZs9.default)(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, $tDZs9.default)(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, $tDZs9.default)(this.primaryColor, {
            h: 210,
            l: 150
        });
        this.cScale9 = this.cScale9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, $tDZs9.default)(this.primaryColor, {
            h: 330
        });
        if (this.darkMode) for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScale" + i] = (0, $9KWq0.default)(this["cScale" + i], 75);
        else for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScale" + i] = (0, $9KWq0.default)(this["cScale" + i], 25);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleInv" + i] = this["cScaleInv" + i] || (0, $9O8cC.default)(this["cScale" + i]);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)if (this.darkMode) this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $8syuv.default)(this["cScale" + i], 10);
        else this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $9KWq0.default)(this["cScale" + i], 10);
        this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        const multiplier = this.darkMode ? -4 : -1;
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 180,
                s: -15,
                l: multiplier * (5 + i * 3)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 180,
                s: -15,
                l: multiplier * (8 + i * 3)
            });
        }
        this.classText = this.classText || this.textColor;
        this.fillType0 = this.fillType0 || this.primaryColor;
        this.fillType1 = this.fillType1 || this.secondaryColor;
        this.fillType2 = this.fillType2 || (0, $tDZs9.default)(this.primaryColor, {
            h: 64
        });
        this.fillType3 = this.fillType3 || (0, $tDZs9.default)(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = this.fillType4 || (0, $tDZs9.default)(this.primaryColor, {
            h: -64
        });
        this.fillType5 = this.fillType5 || (0, $tDZs9.default)(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = this.fillType6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 128
        });
        this.fillType7 = this.fillType7 || (0, $tDZs9.default)(this.secondaryColor, {
            h: 128
        });
        this.pie1 = this.pie1 || this.primaryColor;
        this.pie2 = this.pie2 || this.secondaryColor;
        this.pie3 = this.pie3 || this.tertiaryColor;
        this.pie4 = this.pie4 || (0, $tDZs9.default)(this.primaryColor, {
            l: -10
        });
        this.pie5 = this.pie5 || (0, $tDZs9.default)(this.secondaryColor, {
            l: -10
        });
        this.pie6 = this.pie6 || (0, $tDZs9.default)(this.tertiaryColor, {
            l: -10
        });
        this.pie7 = this.pie7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60,
            l: -10
        });
        this.pie8 = this.pie8 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60,
            l: -10
        });
        this.pie9 = this.pie9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120,
            l: 0
        });
        this.pie10 = this.pie10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60,
            l: -20
        });
        this.pie11 = this.pie11 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60,
            l: -20
        });
        this.pie12 = this.pie12 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120,
            l: -10
        });
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, $9iz3d.default)(this.quadrant1Fill) ? (0, $8syuv.default)(this.quadrant1Fill) : (0, $9KWq0.default)(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? (0, $9KWq0.default)(this.secondaryColor, 30) : this.secondaryColor);
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = this.git0 || this.primaryColor;
        this.git1 = this.git1 || this.secondaryColor;
        this.git2 = this.git2 || this.tertiaryColor;
        this.git3 = this.git3 || (0, $tDZs9.default)(this.primaryColor, {
            h: -30
        });
        this.git4 = this.git4 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60
        });
        this.git5 = this.git5 || (0, $tDZs9.default)(this.primaryColor, {
            h: -90
        });
        this.git6 = this.git6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.git7 = this.git7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        if (this.darkMode) {
            this.git0 = (0, $8syuv.default)(this.git0, 25);
            this.git1 = (0, $8syuv.default)(this.git1, 25);
            this.git2 = (0, $8syuv.default)(this.git2, 25);
            this.git3 = (0, $8syuv.default)(this.git3, 25);
            this.git4 = (0, $8syuv.default)(this.git4, 25);
            this.git5 = (0, $8syuv.default)(this.git5, 25);
            this.git6 = (0, $8syuv.default)(this.git6, 25);
            this.git7 = (0, $8syuv.default)(this.git7, 25);
        } else {
            this.git0 = (0, $9KWq0.default)(this.git0, 25);
            this.git1 = (0, $9KWq0.default)(this.git1, 25);
            this.git2 = (0, $9KWq0.default)(this.git2, 25);
            this.git3 = (0, $9KWq0.default)(this.git3, 25);
            this.git4 = (0, $9KWq0.default)(this.git4, 25);
            this.git5 = (0, $9KWq0.default)(this.git5, 25);
            this.git6 = (0, $9KWq0.default)(this.git6, 25);
            this.git7 = (0, $9KWq0.default)(this.git7, 25);
        }
        this.gitInv0 = this.gitInv0 || (0, $9O8cC.default)(this.git0);
        this.gitInv1 = this.gitInv1 || (0, $9O8cC.default)(this.git1);
        this.gitInv2 = this.gitInv2 || (0, $9O8cC.default)(this.git2);
        this.gitInv3 = this.gitInv3 || (0, $9O8cC.default)(this.git3);
        this.gitInv4 = this.gitInv4 || (0, $9O8cC.default)(this.git4);
        this.gitInv5 = this.gitInv5 || (0, $9O8cC.default)(this.git5);
        this.gitInv6 = this.gitInv6 || (0, $9O8cC.default)(this.git6);
        this.gitInv7 = this.gitInv7 || (0, $9O8cC.default)(this.git7);
        this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || $68d37aac8bca33d7$var$oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $68d37aac8bca33d7$var$oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
const $68d37aac8bca33d7$var$getThemeVariables$4 = (userOverrides)=>{
    const theme2 = new $68d37aac8bca33d7$var$Theme$4();
    theme2.calculate(userOverrides);
    return theme2;
};
let $68d37aac8bca33d7$var$Theme$3 = class Theme2 {
    constructor(){
        this.background = "#333";
        this.primaryColor = "#1f2020";
        this.secondaryColor = (0, $8syuv.default)(this.primaryColor, 16);
        this.tertiaryColor = (0, $tDZs9.default)(this.primaryColor, {
            h: -160
        });
        this.primaryBorderColor = (0, $9O8cC.default)(this.background);
        this.secondaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, $9O8cC.default)(this.primaryColor);
        this.secondaryTextColor = (0, $9O8cC.default)(this.secondaryColor);
        this.tertiaryTextColor = (0, $9O8cC.default)(this.tertiaryColor);
        this.lineColor = (0, $9O8cC.default)(this.background);
        this.textColor = (0, $9O8cC.default)(this.background);
        this.mainBkg = "#1f2020";
        this.secondBkg = "calculated";
        this.mainContrastColor = "lightgrey";
        this.darkTextColor = (0, $8syuv.default)((0, $9O8cC.default)("#323D47"), 10);
        this.lineColor = "calculated";
        this.border1 = "#81B1DB";
        this.border2 = (0, $42Ff1.default)(255, 255, 255, 0.25);
        this.arrowheadColor = "calculated";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.labelBackground = "#181818";
        this.textColor = "#ccc";
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "#F9FFFE";
        this.edgeLabelBackground = "calculated";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "calculated";
        this.actorLineColor = "calculated";
        this.signalColor = "calculated";
        this.signalTextColor = "calculated";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "calculated";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "calculated";
        this.activationBkgColor = "calculated";
        this.sequenceNumberColor = "black";
        this.sectionBkgColor = (0, $9KWq0.default)("#EAE8D9", 30);
        this.altSectionBkgColor = "calculated";
        this.sectionBkgColor2 = "#EAE8D9";
        this.excludeBkgColor = (0, $9KWq0.default)(this.sectionBkgColor, 10);
        this.taskBorderColor = (0, $42Ff1.default)(255, 255, 255, 70);
        this.taskBkgColor = "calculated";
        this.taskTextColor = "calculated";
        this.taskTextLightColor = "calculated";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = (0, $42Ff1.default)(255, 255, 255, 50);
        this.activeTaskBkgColor = "#81B1DB";
        this.gridColor = "calculated";
        this.doneTaskBkgColor = "calculated";
        this.doneTaskBorderColor = "grey";
        this.critBorderColor = "#E83737";
        this.critBkgColor = "#E83737";
        this.taskTextDarkColor = "calculated";
        this.todayLineColor = "#DB5757";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.labelColor = "calculated";
        this.errorBkgColor = "#a44141";
        this.errorTextColor = "#ddd";
    }
    updateColors() {
        this.secondBkg = (0, $8syuv.default)(this.mainBkg, 16);
        this.lineColor = this.mainContrastColor;
        this.arrowheadColor = this.mainContrastColor;
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.edgeLabelBackground = (0, $8syuv.default)(this.labelBackground, 25);
        this.actorBorder = this.border1;
        this.actorBkg = this.mainBkg;
        this.actorTextColor = this.mainContrastColor;
        this.actorLineColor = this.mainContrastColor;
        this.signalColor = this.mainContrastColor;
        this.signalTextColor = this.mainContrastColor;
        this.labelBoxBkgColor = this.actorBkg;
        this.labelBoxBorderColor = this.actorBorder;
        this.labelTextColor = this.mainContrastColor;
        this.loopTextColor = this.mainContrastColor;
        this.noteBorderColor = this.secondaryBorderColor;
        this.noteBkgColor = this.secondBkg;
        this.noteTextColor = this.secondaryTextColor;
        this.activationBorderColor = this.border1;
        this.activationBkgColor = this.secondBkg;
        this.altSectionBkgColor = this.background;
        this.taskBkgColor = (0, $8syuv.default)(this.mainBkg, 23);
        this.taskTextColor = this.darkTextColor;
        this.taskTextLightColor = this.mainContrastColor;
        this.taskTextOutsideColor = this.taskTextLightColor;
        this.gridColor = this.mainContrastColor;
        this.doneTaskBkgColor = this.mainContrastColor;
        this.taskTextDarkColor = this.darkTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#555";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.primaryBorderColor;
        this.specialStateColor = "#f4f4f4";
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, $tDZs9.default)(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, $tDZs9.default)(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, $tDZs9.default)(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, $tDZs9.default)(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 128
        });
        this.cScale1 = this.cScale1 || "#0b0000";
        this.cScale2 = this.cScale2 || "#4d1037";
        this.cScale3 = this.cScale3 || "#3f5258";
        this.cScale4 = this.cScale4 || "#4f2f1b";
        this.cScale5 = this.cScale5 || "#6e0a0a";
        this.cScale6 = this.cScale6 || "#3b0048";
        this.cScale7 = this.cScale7 || "#995a01";
        this.cScale8 = this.cScale8 || "#154706";
        this.cScale9 = this.cScale9 || "#161722";
        this.cScale10 = this.cScale10 || "#00296f";
        this.cScale11 = this.cScale11 || "#01629c";
        this.cScale12 = this.cScale12 || "#010029";
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, $tDZs9.default)(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, $tDZs9.default)(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, $tDZs9.default)(this.primaryColor, {
            h: 210
        });
        this.cScale9 = this.cScale9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, $tDZs9.default)(this.primaryColor, {
            h: 330
        });
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleInv" + i] = this["cScaleInv" + i] || (0, $9O8cC.default)(this["cScale" + i]);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $8syuv.default)(this["cScale" + i], 10);
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(-10 + i * 4)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(-7 + i * 4)
            });
        }
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["pie" + i] = this["cScale" + i];
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, $9iz3d.default)(this.quadrant1Fill) ? (0, $8syuv.default)(this.quadrant1Fill) : (0, $9KWq0.default)(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.classText = this.primaryTextColor;
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? (0, $9KWq0.default)(this.secondaryColor, 30) : this.secondaryColor);
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = (0, $8syuv.default)(this.secondaryColor, 20);
        this.git1 = (0, $8syuv.default)(this.pie2 || this.secondaryColor, 20);
        this.git2 = (0, $8syuv.default)(this.pie3 || this.tertiaryColor, 20);
        this.git3 = (0, $8syuv.default)(this.pie4 || (0, $tDZs9.default)(this.primaryColor, {
            h: -30
        }), 20);
        this.git4 = (0, $8syuv.default)(this.pie5 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60
        }), 20);
        this.git5 = (0, $8syuv.default)(this.pie6 || (0, $tDZs9.default)(this.primaryColor, {
            h: -90
        }), 10);
        this.git6 = (0, $8syuv.default)(this.pie7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        }), 10);
        this.git7 = (0, $8syuv.default)(this.pie8 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        }), 20);
        this.gitInv0 = this.gitInv0 || (0, $9O8cC.default)(this.git0);
        this.gitInv1 = this.gitInv1 || (0, $9O8cC.default)(this.git1);
        this.gitInv2 = this.gitInv2 || (0, $9O8cC.default)(this.git2);
        this.gitInv3 = this.gitInv3 || (0, $9O8cC.default)(this.git3);
        this.gitInv4 = this.gitInv4 || (0, $9O8cC.default)(this.git4);
        this.gitInv5 = this.gitInv5 || (0, $9O8cC.default)(this.git5);
        this.gitInv6 = this.gitInv6 || (0, $9O8cC.default)(this.git6);
        this.gitInv7 = this.gitInv7 || (0, $9O8cC.default)(this.git7);
        this.gitBranchLabel0 = this.gitBranchLabel0 || (0, $9O8cC.default)(this.labelTextColor);
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || (0, $9O8cC.default)(this.labelTextColor);
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || (0, $8syuv.default)(this.background, 12);
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || (0, $8syuv.default)(this.background, 2);
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
const $68d37aac8bca33d7$var$getThemeVariables$3 = (userOverrides)=>{
    const theme2 = new $68d37aac8bca33d7$var$Theme$3();
    theme2.calculate(userOverrides);
    return theme2;
};
let $68d37aac8bca33d7$var$Theme$2 = class Theme3 {
    constructor(){
        this.background = "#f4f4f4";
        this.primaryColor = "#ECECFF";
        this.secondaryColor = (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        this.secondaryColor = "#ffffde";
        this.tertiaryColor = (0, $tDZs9.default)(this.primaryColor, {
            h: -160
        });
        this.primaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, $9O8cC.default)(this.primaryColor);
        this.secondaryTextColor = (0, $9O8cC.default)(this.secondaryColor);
        this.tertiaryTextColor = (0, $9O8cC.default)(this.tertiaryColor);
        this.lineColor = (0, $9O8cC.default)(this.background);
        this.textColor = (0, $9O8cC.default)(this.background);
        this.background = "white";
        this.mainBkg = "#ECECFF";
        this.secondBkg = "#ffffde";
        this.lineColor = "#333333";
        this.border1 = "#9370DB";
        this.border2 = "#aaaa33";
        this.arrowheadColor = "#333333";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.labelBackground = "#e8e8e8";
        this.textColor = "#333";
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "calculated";
        this.edgeLabelBackground = "calculated";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "black";
        this.actorLineColor = "grey";
        this.signalColor = "calculated";
        this.signalTextColor = "calculated";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "calculated";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "#666";
        this.activationBkgColor = "#f4f4f4";
        this.sequenceNumberColor = "white";
        this.sectionBkgColor = "calculated";
        this.altSectionBkgColor = "calculated";
        this.sectionBkgColor2 = "calculated";
        this.excludeBkgColor = "#eeeeee";
        this.taskBorderColor = "calculated";
        this.taskBkgColor = "calculated";
        this.taskTextLightColor = "calculated";
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextDarkColor = "calculated";
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.taskTextClickableColor = "calculated";
        this.activeTaskBorderColor = "calculated";
        this.activeTaskBkgColor = "calculated";
        this.gridColor = "calculated";
        this.doneTaskBkgColor = "calculated";
        this.doneTaskBorderColor = "calculated";
        this.critBorderColor = "calculated";
        this.critBkgColor = "calculated";
        this.todayLineColor = "calculated";
        this.sectionBkgColor = (0, $42Ff1.default)(102, 102, 255, 0.49);
        this.altSectionBkgColor = "white";
        this.sectionBkgColor2 = "#fff400";
        this.taskBorderColor = "#534fbc";
        this.taskBkgColor = "#8a90dd";
        this.taskTextLightColor = "white";
        this.taskTextColor = "calculated";
        this.taskTextDarkColor = "black";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = "#534fbc";
        this.activeTaskBkgColor = "#bfc7ff";
        this.gridColor = "lightgrey";
        this.doneTaskBkgColor = "lightgrey";
        this.doneTaskBorderColor = "grey";
        this.critBorderColor = "#ff8888";
        this.critBkgColor = "red";
        this.todayLineColor = "red";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.labelColor = "black";
        this.errorBkgColor = "#552222";
        this.errorTextColor = "#552222";
        this.updateColors();
    }
    updateColors() {
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, $tDZs9.default)(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, $tDZs9.default)(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, $tDZs9.default)(this.primaryColor, {
            h: 210
        });
        this.cScale9 = this.cScale9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, $tDZs9.default)(this.primaryColor, {
            h: 330
        });
        this["cScalePeer1"] = this["cScalePeer1"] || (0, $9KWq0.default)(this.secondaryColor, 45);
        this["cScalePeer2"] = this["cScalePeer2"] || (0, $9KWq0.default)(this.tertiaryColor, 40);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScale" + i] = (0, $9KWq0.default)(this["cScale" + i], 10);
            this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $9KWq0.default)(this["cScale" + i], 25);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleInv" + i] = this["cScaleInv" + i] || (0, $tDZs9.default)(this["cScale" + i], {
            h: 180
        });
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 30,
                l: -(5 + i * 5)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 30,
                l: -(7 + i * 5)
            });
        }
        this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
        if (this.labelTextColor !== "calculated") {
            this.cScaleLabel0 = this.cScaleLabel0 || (0, $9O8cC.default)(this.labelTextColor);
            this.cScaleLabel3 = this.cScaleLabel3 || (0, $9O8cC.default)(this.labelTextColor);
            for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.labelTextColor;
        }
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.titleColor = this.textColor;
        this.edgeLabelBackground = this.labelBackground;
        this.actorBorder = (0, $8syuv.default)(this.border1, 23);
        this.actorBkg = this.mainBkg;
        this.labelBoxBkgColor = this.actorBkg;
        this.signalColor = this.textColor;
        this.signalTextColor = this.textColor;
        this.labelBoxBorderColor = this.actorBorder;
        this.labelTextColor = this.actorTextColor;
        this.loopTextColor = this.actorTextColor;
        this.noteBorderColor = this.border2;
        this.noteTextColor = this.actorTextColor;
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#f0f0f0";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.nodeBorder;
        this.specialStateColor = this.lineColor;
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.classText = this.primaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, $tDZs9.default)(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, $tDZs9.default)(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, $tDZs9.default)(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, $tDZs9.default)(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 128
        });
        this.pie1 = this.pie1 || this.primaryColor;
        this.pie2 = this.pie2 || this.secondaryColor;
        this.pie3 = this.pie3 || (0, $tDZs9.default)(this.tertiaryColor, {
            l: -40
        });
        this.pie4 = this.pie4 || (0, $tDZs9.default)(this.primaryColor, {
            l: -10
        });
        this.pie5 = this.pie5 || (0, $tDZs9.default)(this.secondaryColor, {
            l: -30
        });
        this.pie6 = this.pie6 || (0, $tDZs9.default)(this.tertiaryColor, {
            l: -20
        });
        this.pie7 = this.pie7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60,
            l: -20
        });
        this.pie8 = this.pie8 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60,
            l: -40
        });
        this.pie9 = this.pie9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120,
            l: -40
        });
        this.pie10 = this.pie10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60,
            l: -40
        });
        this.pie11 = this.pie11 || (0, $tDZs9.default)(this.primaryColor, {
            h: -90,
            l: -40
        });
        this.pie12 = this.pie12 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120,
            l: -30
        });
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, $9iz3d.default)(this.quadrant1Fill) ? (0, $8syuv.default)(this.quadrant1Fill) : (0, $9KWq0.default)(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = this.git0 || this.primaryColor;
        this.git1 = this.git1 || this.secondaryColor;
        this.git2 = this.git2 || this.tertiaryColor;
        this.git3 = this.git3 || (0, $tDZs9.default)(this.primaryColor, {
            h: -30
        });
        this.git4 = this.git4 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60
        });
        this.git5 = this.git5 || (0, $tDZs9.default)(this.primaryColor, {
            h: -90
        });
        this.git6 = this.git6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.git7 = this.git7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        if (this.darkMode) {
            this.git0 = (0, $8syuv.default)(this.git0, 25);
            this.git1 = (0, $8syuv.default)(this.git1, 25);
            this.git2 = (0, $8syuv.default)(this.git2, 25);
            this.git3 = (0, $8syuv.default)(this.git3, 25);
            this.git4 = (0, $8syuv.default)(this.git4, 25);
            this.git5 = (0, $8syuv.default)(this.git5, 25);
            this.git6 = (0, $8syuv.default)(this.git6, 25);
            this.git7 = (0, $8syuv.default)(this.git7, 25);
        } else {
            this.git0 = (0, $9KWq0.default)(this.git0, 25);
            this.git1 = (0, $9KWq0.default)(this.git1, 25);
            this.git2 = (0, $9KWq0.default)(this.git2, 25);
            this.git3 = (0, $9KWq0.default)(this.git3, 25);
            this.git4 = (0, $9KWq0.default)(this.git4, 25);
            this.git5 = (0, $9KWq0.default)(this.git5, 25);
            this.git6 = (0, $9KWq0.default)(this.git6, 25);
            this.git7 = (0, $9KWq0.default)(this.git7, 25);
        }
        this.gitInv0 = this.gitInv0 || (0, $9KWq0.default)((0, $9O8cC.default)(this.git0), 25);
        this.gitInv1 = this.gitInv1 || (0, $9O8cC.default)(this.git1);
        this.gitInv2 = this.gitInv2 || (0, $9O8cC.default)(this.git2);
        this.gitInv3 = this.gitInv3 || (0, $9O8cC.default)(this.git3);
        this.gitInv4 = this.gitInv4 || (0, $9O8cC.default)(this.git4);
        this.gitInv5 = this.gitInv5 || (0, $9O8cC.default)(this.git5);
        this.gitInv6 = this.gitInv6 || (0, $9O8cC.default)(this.git6);
        this.gitInv7 = this.gitInv7 || (0, $9O8cC.default)(this.git7);
        this.gitBranchLabel0 = this.gitBranchLabel0 || (0, $9O8cC.default)(this.labelTextColor);
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || (0, $9O8cC.default)(this.labelTextColor);
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || $68d37aac8bca33d7$var$oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $68d37aac8bca33d7$var$oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
const $68d37aac8bca33d7$export$e7094788287c5e9b = (userOverrides)=>{
    const theme2 = new $68d37aac8bca33d7$var$Theme$2();
    theme2.calculate(userOverrides);
    return theme2;
};
let $68d37aac8bca33d7$var$Theme$1 = class Theme4 {
    constructor(){
        this.background = "#f4f4f4";
        this.primaryColor = "#cde498";
        this.secondaryColor = "#cdffb2";
        this.background = "white";
        this.mainBkg = "#cde498";
        this.secondBkg = "#cdffb2";
        this.lineColor = "green";
        this.border1 = "#13540c";
        this.border2 = "#6eaa49";
        this.arrowheadColor = "green";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.tertiaryColor = (0, $8syuv.default)("#cde498", 10);
        this.primaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, $9O8cC.default)(this.primaryColor);
        this.secondaryTextColor = (0, $9O8cC.default)(this.secondaryColor);
        this.tertiaryTextColor = (0, $9O8cC.default)(this.primaryColor);
        this.lineColor = (0, $9O8cC.default)(this.background);
        this.textColor = (0, $9O8cC.default)(this.background);
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "#333";
        this.edgeLabelBackground = "#e8e8e8";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "black";
        this.actorLineColor = "grey";
        this.signalColor = "#333";
        this.signalTextColor = "#333";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "#326932";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "#fff5ad";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "#666";
        this.activationBkgColor = "#f4f4f4";
        this.sequenceNumberColor = "white";
        this.sectionBkgColor = "#6eaa49";
        this.altSectionBkgColor = "white";
        this.sectionBkgColor2 = "#6eaa49";
        this.excludeBkgColor = "#eeeeee";
        this.taskBorderColor = "calculated";
        this.taskBkgColor = "#487e3a";
        this.taskTextLightColor = "white";
        this.taskTextColor = "calculated";
        this.taskTextDarkColor = "black";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = "calculated";
        this.activeTaskBkgColor = "calculated";
        this.gridColor = "lightgrey";
        this.doneTaskBkgColor = "lightgrey";
        this.doneTaskBorderColor = "grey";
        this.critBorderColor = "#ff8888";
        this.critBkgColor = "red";
        this.todayLineColor = "red";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.labelColor = "black";
        this.errorBkgColor = "#552222";
        this.errorTextColor = "#552222";
    }
    updateColors() {
        this.actorBorder = (0, $9KWq0.default)(this.mainBkg, 20);
        this.actorBkg = this.mainBkg;
        this.labelBoxBkgColor = this.actorBkg;
        this.labelTextColor = this.actorTextColor;
        this.loopTextColor = this.actorTextColor;
        this.noteBorderColor = this.border2;
        this.noteTextColor = this.actorTextColor;
        this.cScale0 = this.cScale0 || this.primaryColor;
        this.cScale1 = this.cScale1 || this.secondaryColor;
        this.cScale2 = this.cScale2 || this.tertiaryColor;
        this.cScale3 = this.cScale3 || (0, $tDZs9.default)(this.primaryColor, {
            h: 30
        });
        this.cScale4 = this.cScale4 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.cScale5 = this.cScale5 || (0, $tDZs9.default)(this.primaryColor, {
            h: 90
        });
        this.cScale6 = this.cScale6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        this.cScale7 = this.cScale7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 150
        });
        this.cScale8 = this.cScale8 || (0, $tDZs9.default)(this.primaryColor, {
            h: 210
        });
        this.cScale9 = this.cScale9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 270
        });
        this.cScale10 = this.cScale10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 300
        });
        this.cScale11 = this.cScale11 || (0, $tDZs9.default)(this.primaryColor, {
            h: 330
        });
        this["cScalePeer1"] = this["cScalePeer1"] || (0, $9KWq0.default)(this.secondaryColor, 45);
        this["cScalePeer2"] = this["cScalePeer2"] || (0, $9KWq0.default)(this.tertiaryColor, 40);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++){
            this["cScale" + i] = (0, $9KWq0.default)(this["cScale" + i], 10);
            this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $9KWq0.default)(this["cScale" + i], 25);
        }
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleInv" + i] = this["cScaleInv" + i] || (0, $tDZs9.default)(this["cScale" + i], {
            h: 180
        });
        this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(5 + i * 5)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, $tDZs9.default)(this.mainBkg, {
                h: 30,
                s: -30,
                l: -(8 + i * 5)
            });
        }
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.taskBorderColor = this.border1;
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.activeTaskBorderColor = this.taskBorderColor;
        this.activeTaskBkgColor = this.mainBkg;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#f0f0f0";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.compositeBorder = this.compositeBorder || this.nodeBorder;
        this.innerEndBackground = this.primaryBorderColor;
        this.specialStateColor = this.lineColor;
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.transitionColor = this.transitionColor || this.lineColor;
        this.classText = this.primaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, $tDZs9.default)(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, $tDZs9.default)(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, $tDZs9.default)(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, $tDZs9.default)(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 128
        });
        this.pie1 = this.pie1 || this.primaryColor;
        this.pie2 = this.pie2 || this.secondaryColor;
        this.pie3 = this.pie3 || this.tertiaryColor;
        this.pie4 = this.pie4 || (0, $tDZs9.default)(this.primaryColor, {
            l: -30
        });
        this.pie5 = this.pie5 || (0, $tDZs9.default)(this.secondaryColor, {
            l: -30
        });
        this.pie6 = this.pie6 || (0, $tDZs9.default)(this.tertiaryColor, {
            h: 40,
            l: -40
        });
        this.pie7 = this.pie7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60,
            l: -10
        });
        this.pie8 = this.pie8 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60,
            l: -10
        });
        this.pie9 = this.pie9 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120,
            l: 0
        });
        this.pie10 = this.pie10 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60,
            l: -50
        });
        this.pie11 = this.pie11 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60,
            l: -50
        });
        this.pie12 = this.pie12 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120,
            l: -50
        });
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, $9iz3d.default)(this.quadrant1Fill) ? (0, $8syuv.default)(this.quadrant1Fill) : (0, $9KWq0.default)(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = this.git0 || this.primaryColor;
        this.git1 = this.git1 || this.secondaryColor;
        this.git2 = this.git2 || this.tertiaryColor;
        this.git3 = this.git3 || (0, $tDZs9.default)(this.primaryColor, {
            h: -30
        });
        this.git4 = this.git4 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60
        });
        this.git5 = this.git5 || (0, $tDZs9.default)(this.primaryColor, {
            h: -90
        });
        this.git6 = this.git6 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.git7 = this.git7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        if (this.darkMode) {
            this.git0 = (0, $8syuv.default)(this.git0, 25);
            this.git1 = (0, $8syuv.default)(this.git1, 25);
            this.git2 = (0, $8syuv.default)(this.git2, 25);
            this.git3 = (0, $8syuv.default)(this.git3, 25);
            this.git4 = (0, $8syuv.default)(this.git4, 25);
            this.git5 = (0, $8syuv.default)(this.git5, 25);
            this.git6 = (0, $8syuv.default)(this.git6, 25);
            this.git7 = (0, $8syuv.default)(this.git7, 25);
        } else {
            this.git0 = (0, $9KWq0.default)(this.git0, 25);
            this.git1 = (0, $9KWq0.default)(this.git1, 25);
            this.git2 = (0, $9KWq0.default)(this.git2, 25);
            this.git3 = (0, $9KWq0.default)(this.git3, 25);
            this.git4 = (0, $9KWq0.default)(this.git4, 25);
            this.git5 = (0, $9KWq0.default)(this.git5, 25);
            this.git6 = (0, $9KWq0.default)(this.git6, 25);
            this.git7 = (0, $9KWq0.default)(this.git7, 25);
        }
        this.gitInv0 = this.gitInv0 || (0, $9O8cC.default)(this.git0);
        this.gitInv1 = this.gitInv1 || (0, $9O8cC.default)(this.git1);
        this.gitInv2 = this.gitInv2 || (0, $9O8cC.default)(this.git2);
        this.gitInv3 = this.gitInv3 || (0, $9O8cC.default)(this.git3);
        this.gitInv4 = this.gitInv4 || (0, $9O8cC.default)(this.git4);
        this.gitInv5 = this.gitInv5 || (0, $9O8cC.default)(this.git5);
        this.gitInv6 = this.gitInv6 || (0, $9O8cC.default)(this.git6);
        this.gitInv7 = this.gitInv7 || (0, $9O8cC.default)(this.git7);
        this.gitBranchLabel0 = this.gitBranchLabel0 || (0, $9O8cC.default)(this.labelTextColor);
        this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
        this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
        this.gitBranchLabel3 = this.gitBranchLabel3 || (0, $9O8cC.default)(this.labelTextColor);
        this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
        this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
        this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
        this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || $68d37aac8bca33d7$var$oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $68d37aac8bca33d7$var$oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
};
const $68d37aac8bca33d7$var$getThemeVariables$1 = (userOverrides)=>{
    const theme2 = new $68d37aac8bca33d7$var$Theme$1();
    theme2.calculate(userOverrides);
    return theme2;
};
class $68d37aac8bca33d7$var$Theme5 {
    constructor(){
        this.primaryColor = "#eee";
        this.contrast = "#707070";
        this.secondaryColor = (0, $8syuv.default)(this.contrast, 55);
        this.background = "#ffffff";
        this.tertiaryColor = (0, $tDZs9.default)(this.primaryColor, {
            h: -160
        });
        this.primaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.primaryColor, this.darkMode);
        this.secondaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.secondaryColor, this.darkMode);
        this.tertiaryBorderColor = $68d37aac8bca33d7$var$mkBorder(this.tertiaryColor, this.darkMode);
        this.primaryTextColor = (0, $9O8cC.default)(this.primaryColor);
        this.secondaryTextColor = (0, $9O8cC.default)(this.secondaryColor);
        this.tertiaryTextColor = (0, $9O8cC.default)(this.tertiaryColor);
        this.lineColor = (0, $9O8cC.default)(this.background);
        this.textColor = (0, $9O8cC.default)(this.background);
        this.mainBkg = "#eee";
        this.secondBkg = "calculated";
        this.lineColor = "#666";
        this.border1 = "#999";
        this.border2 = "calculated";
        this.note = "#ffa";
        this.text = "#333";
        this.critical = "#d42";
        this.done = "#bbb";
        this.arrowheadColor = "#333333";
        this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
        this.fontSize = "16px";
        this.THEME_COLOR_LIMIT = 12;
        this.nodeBkg = "calculated";
        this.nodeBorder = "calculated";
        this.clusterBkg = "calculated";
        this.clusterBorder = "calculated";
        this.defaultLinkColor = "calculated";
        this.titleColor = "calculated";
        this.edgeLabelBackground = "white";
        this.actorBorder = "calculated";
        this.actorBkg = "calculated";
        this.actorTextColor = "calculated";
        this.actorLineColor = "calculated";
        this.signalColor = "calculated";
        this.signalTextColor = "calculated";
        this.labelBoxBkgColor = "calculated";
        this.labelBoxBorderColor = "calculated";
        this.labelTextColor = "calculated";
        this.loopTextColor = "calculated";
        this.noteBorderColor = "calculated";
        this.noteBkgColor = "calculated";
        this.noteTextColor = "calculated";
        this.activationBorderColor = "#666";
        this.activationBkgColor = "#f4f4f4";
        this.sequenceNumberColor = "white";
        this.sectionBkgColor = "calculated";
        this.altSectionBkgColor = "white";
        this.sectionBkgColor2 = "calculated";
        this.excludeBkgColor = "#eeeeee";
        this.taskBorderColor = "calculated";
        this.taskBkgColor = "calculated";
        this.taskTextLightColor = "white";
        this.taskTextColor = "calculated";
        this.taskTextDarkColor = "calculated";
        this.taskTextOutsideColor = "calculated";
        this.taskTextClickableColor = "#003163";
        this.activeTaskBorderColor = "calculated";
        this.activeTaskBkgColor = "calculated";
        this.gridColor = "calculated";
        this.doneTaskBkgColor = "calculated";
        this.doneTaskBorderColor = "calculated";
        this.critBkgColor = "calculated";
        this.critBorderColor = "calculated";
        this.todayLineColor = "calculated";
        this.personBorder = this.primaryBorderColor;
        this.personBkg = this.mainBkg;
        this.labelColor = "black";
        this.errorBkgColor = "#552222";
        this.errorTextColor = "#552222";
    }
    updateColors() {
        this.secondBkg = (0, $8syuv.default)(this.contrast, 55);
        this.border2 = this.contrast;
        this.actorBorder = (0, $8syuv.default)(this.border1, 23);
        this.actorBkg = this.mainBkg;
        this.actorTextColor = this.text;
        this.actorLineColor = this.lineColor;
        this.signalColor = this.text;
        this.signalTextColor = this.text;
        this.labelBoxBkgColor = this.actorBkg;
        this.labelBoxBorderColor = this.actorBorder;
        this.labelTextColor = this.text;
        this.loopTextColor = this.text;
        this.noteBorderColor = "#999";
        this.noteBkgColor = "#666";
        this.noteTextColor = "#fff";
        this.cScale0 = this.cScale0 || "#555";
        this.cScale1 = this.cScale1 || "#F4F4F4";
        this.cScale2 = this.cScale2 || "#555";
        this.cScale3 = this.cScale3 || "#BBB";
        this.cScale4 = this.cScale4 || "#777";
        this.cScale5 = this.cScale5 || "#999";
        this.cScale6 = this.cScale6 || "#DDD";
        this.cScale7 = this.cScale7 || "#FFF";
        this.cScale8 = this.cScale8 || "#DDD";
        this.cScale9 = this.cScale9 || "#BBB";
        this.cScale10 = this.cScale10 || "#999";
        this.cScale11 = this.cScale11 || "#777";
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleInv" + i] = this["cScaleInv" + i] || (0, $9O8cC.default)(this["cScale" + i]);
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)if (this.darkMode) this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $8syuv.default)(this["cScale" + i], 10);
        else this["cScalePeer" + i] = this["cScalePeer" + i] || (0, $9KWq0.default)(this["cScale" + i], 10);
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        this["cScaleLabel0"] = this["cScaleLabel0"] || this.cScale1;
        this["cScaleLabel2"] = this["cScaleLabel2"] || this.cScale1;
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
        for(let i = 0; i < 5; i++){
            this["surface" + i] = this["surface" + i] || (0, $tDZs9.default)(this.mainBkg, {
                l: -(5 + i * 5)
            });
            this["surfacePeer" + i] = this["surfacePeer" + i] || (0, $tDZs9.default)(this.mainBkg, {
                l: -(8 + i * 5)
            });
        }
        this.nodeBkg = this.mainBkg;
        this.nodeBorder = this.border1;
        this.clusterBkg = this.secondBkg;
        this.clusterBorder = this.border2;
        this.defaultLinkColor = this.lineColor;
        this.titleColor = this.text;
        this.sectionBkgColor = (0, $8syuv.default)(this.contrast, 30);
        this.sectionBkgColor2 = (0, $8syuv.default)(this.contrast, 30);
        this.taskBorderColor = (0, $9KWq0.default)(this.contrast, 10);
        this.taskBkgColor = this.contrast;
        this.taskTextColor = this.taskTextLightColor;
        this.taskTextDarkColor = this.text;
        this.taskTextOutsideColor = this.taskTextDarkColor;
        this.activeTaskBorderColor = this.taskBorderColor;
        this.activeTaskBkgColor = this.mainBkg;
        this.gridColor = (0, $8syuv.default)(this.border1, 30);
        this.doneTaskBkgColor = this.done;
        this.doneTaskBorderColor = this.lineColor;
        this.critBkgColor = this.critical;
        this.critBorderColor = (0, $9KWq0.default)(this.critBkgColor, 10);
        this.todayLineColor = this.critBkgColor;
        this.transitionColor = this.transitionColor || "#000";
        this.transitionLabelColor = this.transitionLabelColor || this.textColor;
        this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
        this.stateBkg = this.stateBkg || this.mainBkg;
        this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
        this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
        this.altBackground = this.altBackground || "#f4f4f4";
        this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
        this.stateBorder = this.stateBorder || "#000";
        this.innerEndBackground = this.primaryBorderColor;
        this.specialStateColor = "#222";
        this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
        this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
        this.classText = this.primaryTextColor;
        this.fillType0 = this.primaryColor;
        this.fillType1 = this.secondaryColor;
        this.fillType2 = (0, $tDZs9.default)(this.primaryColor, {
            h: 64
        });
        this.fillType3 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 64
        });
        this.fillType4 = (0, $tDZs9.default)(this.primaryColor, {
            h: -64
        });
        this.fillType5 = (0, $tDZs9.default)(this.secondaryColor, {
            h: -64
        });
        this.fillType6 = (0, $tDZs9.default)(this.primaryColor, {
            h: 128
        });
        this.fillType7 = (0, $tDZs9.default)(this.secondaryColor, {
            h: 128
        });
        for(let i = 0; i < this.THEME_COLOR_LIMIT; i++)this["pie" + i] = this["cScale" + i];
        this.pie12 = this.pie0;
        this.pieTitleTextSize = this.pieTitleTextSize || "25px";
        this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
        this.pieSectionTextSize = this.pieSectionTextSize || "17px";
        this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
        this.pieLegendTextSize = this.pieLegendTextSize || "17px";
        this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
        this.pieStrokeColor = this.pieStrokeColor || "black";
        this.pieStrokeWidth = this.pieStrokeWidth || "2px";
        this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
        this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
        this.pieOpacity = this.pieOpacity || "0.7";
        this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
        this.quadrant2Fill = this.quadrant2Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        });
        this.quadrant3Fill = this.quadrant3Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        });
        this.quadrant4Fill = this.quadrant4Fill || (0, $tDZs9.default)(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        });
        this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
        this.quadrant2TextFill = this.quadrant2TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        });
        this.quadrant3TextFill = this.quadrant3TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        });
        this.quadrant4TextFill = this.quadrant4TextFill || (0, $tDZs9.default)(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        });
        this.quadrantPointFill = this.quadrantPointFill || (0, $9iz3d.default)(this.quadrant1Fill) ? (0, $8syuv.default)(this.quadrant1Fill) : (0, $9KWq0.default)(this.quadrant1Fill);
        this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
        this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
        this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
        this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
        this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
        this.requirementBackground = this.requirementBackground || this.primaryColor;
        this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
        this.requirementBorderSize = this.requirementBorderSize || "1";
        this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
        this.relationColor = this.relationColor || this.lineColor;
        this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
        this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
        this.git0 = (0, $9KWq0.default)(this.pie1, 25) || this.primaryColor;
        this.git1 = this.pie2 || this.secondaryColor;
        this.git2 = this.pie3 || this.tertiaryColor;
        this.git3 = this.pie4 || (0, $tDZs9.default)(this.primaryColor, {
            h: -30
        });
        this.git4 = this.pie5 || (0, $tDZs9.default)(this.primaryColor, {
            h: -60
        });
        this.git5 = this.pie6 || (0, $tDZs9.default)(this.primaryColor, {
            h: -90
        });
        this.git6 = this.pie7 || (0, $tDZs9.default)(this.primaryColor, {
            h: 60
        });
        this.git7 = this.pie8 || (0, $tDZs9.default)(this.primaryColor, {
            h: 120
        });
        this.gitInv0 = this.gitInv0 || (0, $9O8cC.default)(this.git0);
        this.gitInv1 = this.gitInv1 || (0, $9O8cC.default)(this.git1);
        this.gitInv2 = this.gitInv2 || (0, $9O8cC.default)(this.git2);
        this.gitInv3 = this.gitInv3 || (0, $9O8cC.default)(this.git3);
        this.gitInv4 = this.gitInv4 || (0, $9O8cC.default)(this.git4);
        this.gitInv5 = this.gitInv5 || (0, $9O8cC.default)(this.git5);
        this.gitInv6 = this.gitInv6 || (0, $9O8cC.default)(this.git6);
        this.gitInv7 = this.gitInv7 || (0, $9O8cC.default)(this.git7);
        this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
        this.gitBranchLabel0 = this.branchLabelColor;
        this.gitBranchLabel1 = "white";
        this.gitBranchLabel2 = this.branchLabelColor;
        this.gitBranchLabel3 = "white";
        this.gitBranchLabel4 = this.branchLabelColor;
        this.gitBranchLabel5 = this.branchLabelColor;
        this.gitBranchLabel6 = this.branchLabelColor;
        this.gitBranchLabel7 = this.branchLabelColor;
        this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
        this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
        this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
        this.tagLabelFontSize = this.tagLabelFontSize || "10px";
        this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
        this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
        this.commitLabelFontSize = this.commitLabelFontSize || "10px";
        this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || $68d37aac8bca33d7$var$oldAttributeBackgroundColorOdd;
        this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $68d37aac8bca33d7$var$oldAttributeBackgroundColorEven;
    }
    calculate(overrides) {
        if (typeof overrides !== "object") {
            this.updateColors();
            return;
        }
        const keys = Object.keys(overrides);
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
        this.updateColors();
        keys.forEach((k)=>{
            this[k] = overrides[k];
        });
    }
}
const $68d37aac8bca33d7$var$getThemeVariables = (userOverrides)=>{
    const theme2 = new $68d37aac8bca33d7$var$Theme5();
    theme2.calculate(userOverrides);
    return theme2;
};
const $68d37aac8bca33d7$var$theme = {
    base: {
        getThemeVariables: $68d37aac8bca33d7$var$getThemeVariables$4
    },
    dark: {
        getThemeVariables: $68d37aac8bca33d7$var$getThemeVariables$3
    },
    default: {
        getThemeVariables: $68d37aac8bca33d7$export$e7094788287c5e9b
    },
    forest: {
        getThemeVariables: $68d37aac8bca33d7$var$getThemeVariables$1
    },
    neutral: {
        getThemeVariables: $68d37aac8bca33d7$var$getThemeVariables
    }
};
const $68d37aac8bca33d7$var$config = {
    /**
   * Theme , the CSS style sheet
   *
   * | Parameter | Description     | Type   | Required | Values                                         |
   * | --------- | --------------- | ------ | -------- | ---------------------------------------------- |
   * | theme     | Built in Themes | string | Optional | 'default', 'forest', 'dark', 'neutral', 'null' |
   *
   * **Notes:** To disable any pre-defined mermaid theme, use "null".
   *
   * @example
   *
   * ```js
   * {
   *   "theme": "forest",
   *   "themeCSS": ".node rect { fill: red; }"
   * }
   * ```
   */ theme: "default",
    themeVariables: $68d37aac8bca33d7$var$theme["default"].getThemeVariables(),
    themeCSS: void 0,
    /* **maxTextSize** - The maximum allowed size of the users text diagram */ maxTextSize: 5e4,
    darkMode: false,
    /**
   * | Parameter  | Description                                            | Type   | Required | Values                      |
   * | ---------- | ------------------------------------------------------ | ------ | -------- | --------------------------- |
   * | fontFamily | specifies the font to be used in the rendered diagrams | string | Required | Any Possible CSS FontFamily |
   *
   * **Notes:** Default value: '"trebuchet ms", verdana, arial, sans-serif;'.
   */ fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
    /**
   * | Parameter | Description                                           | Type             | Required | Values                                        |
   * | --------- | ----------------------------------------------------- | ---------------- | -------- | --------------------------------------------- |
   * | logLevel  | This option decides the amount of logging to be used. | string \| number | Required | 'trace','debug','info','warn','error','fatal' |
   *
   * **Notes:**
   *
   * - Trace: 0
   * - Debug: 1
   * - Info: 2
   * - Warn: 3
   * - Error: 4
   * - Fatal: 5 (default)
   */ logLevel: 5,
    /**
   * | Parameter     | Description                       | Type   | Required | Values                                     |
   * | ------------- | --------------------------------- | ------ | -------- | ------------------------------------------ |
   * | securityLevel | Level of trust for parsed diagram | string | Required | 'sandbox', 'strict', 'loose', 'antiscript' |
   *
   * **Notes**:
   *
   * - **strict**: (**default**) HTML tags in the text are encoded and click functionality is disabled.
   * - **antiscript**: HTML tags in text are allowed (only script elements are removed), and click
   *   functionality is enabled.
   * - **loose**: HTML tags in text are allowed and click functionality is enabled.
   * - **sandbox**: With this security level, all rendering takes place in a sandboxed iframe. This
   *   prevent any JavaScript from running in the context. This may hinder interactive functionality
   *   of the diagram, like scripts, popups in the sequence diagram, links to other tabs or targets, etc.
   */ securityLevel: "strict",
    /**
   * | Parameter   | Description                                  | Type    | Required | Values      |
   * | ----------- | -------------------------------------------- | ------- | -------- | ----------- |
   * | startOnLoad | Dictates whether mermaid starts on Page load | boolean | Required | true, false |
   *
   * **Notes:** Default value: true
   */ startOnLoad: true,
    /**
   * | Parameter           | Description                                                                  | Type    | Required | Values      |
   * | ------------------- | ---------------------------------------------------------------------------- | ------- | -------- | ----------- |
   * | arrowMarkerAbsolute | Controls whether or arrow markers in html code are absolute paths or anchors | boolean | Required | true, false |
   *
   * **Notes**:
   *
   * This matters if you are using base tag settings.
   *
   * Default value: false
   */ arrowMarkerAbsolute: false,
    /**
   * This option controls which currentConfig keys are considered _secure_ and can only be changed
   * via call to mermaidAPI.initialize. Calls to mermaidAPI.reinitialize cannot make changes to the
   * `secure` keys in the current currentConfig. This prevents malicious graph directives from
   * overriding a site's default security.
   *
   * **Notes**:
   *
   * Default value: ['secure', 'securityLevel', 'startOnLoad', 'maxTextSize']
   */ secure: [
        "secure",
        "securityLevel",
        "startOnLoad",
        "maxTextSize"
    ],
    /**
   * This option controls if the generated ids of nodes in the SVG are generated randomly or based
   * on a seed. If set to false, the IDs are generated based on the current date and thus are not
   * deterministic. This is the default behavior.
   *
   * **Notes**:
   *
   * This matters if your files are checked into source control e.g. git and should not change unless
   * content is changed.
   *
   * Default value: false
   */ deterministicIds: false,
    /**
   * This option is the optional seed for deterministic ids. if set to undefined but
   * deterministicIds is true, a simple number iterator is used. You can set this attribute to base
   * the seed on a static string.
   */ deterministicIDSeed: void 0,
    /** The object containing configurations specific for flowcharts */ flowchart: {
        /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the flowchart     | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */ titleTopMargin: 25,
        /**
     * | Parameter      | Description                                     | Type    | Required | Values             |
     * | -------------- | ----------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramPadding | Amount of padding around the diagram as a whole | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * The amount of padding around the diagram as a whole so that embedded diagrams have margins,
     * expressed in pixels
     *
     * Default value: 8
     */ diagramPadding: 8,
        /**
     * | Parameter  | Description                                                                                  | Type    | Required | Values      |
     * | ---------- | -------------------------------------------------------------------------------------------- | ------- | -------- | ----------- |
     * | htmlLabels | Flag for setting whether or not a html tag should be used for rendering labels on the edges. | boolean | Required | true, false |
     *
     * **Notes:** Default value: true.
     */ htmlLabels: true,
        /**
     * | Parameter   | Description                                         | Type    | Required | Values              |
     * | ----------- | --------------------------------------------------- | ------- | -------- | ------------------- |
     * | nodeSpacing | Defines the spacing between nodes on the same level | Integer | Required | Any positive Number |
     *
     * **Notes:**
     *
     * Pertains to horizontal spacing for TB (top to bottom) or BT (bottom to top) graphs, and the
     * vertical spacing for LR as well as RL graphs.**
     *
     * Default value: 50
     */ nodeSpacing: 50,
        /**
     * | Parameter   | Description                                           | Type    | Required | Values              |
     * | ----------- | ----------------------------------------------------- | ------- | -------- | ------------------- |
     * | rankSpacing | Defines the spacing between nodes on different levels | Integer | Required | Any Positive Number |
     *
     * **Notes**:
     *
     * Pertains to vertical spacing for TB (top to bottom) or BT (bottom to top), and the horizontal
     * spacing for LR as well as RL graphs.
     *
     * Default value 50
     */ rankSpacing: 50,
        /**
     * | Parameter | Description                                        | Type   | Required | Values                        |
     * | --------- | -------------------------------------------------- | ------ | -------- | ----------------------------- |
     * | curve     | Defines how mermaid renders curves for flowcharts. | string | Required | 'basis', 'linear', 'cardinal' |
     *
     * **Notes:**
     *
     * Default Value: 'basis'
     */ curve: "basis",
        // Only used in new experimental rendering
        // represents the padding between the labels and the shape
        padding: 15,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | defaultRenderer | See notes   | boolean | 4        | dagre-d3, dagre-wrapper, elk |
     *
     * **Notes:**
     *
     * Decides which rendering engine that is to be used for the rendering. Legal values are:
     * dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid, elk for layout using
     * elkjs
     *
     * Default value: 'dagre-wrapper'
     */ defaultRenderer: "dagre-wrapper",
        /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | wrappingWidth   | See notes   | number  | 4        | width of nodes where text is wrapped |
     *
     * **Notes:**
     *
     * When using markdown strings the text ius wrapped automatically, this
     * value sets the max width of a text before it continues on a new line.
     * Default value: 'dagre-wrapper'
     */ wrappingWidth: 200
    },
    /** The object containing configurations specific for sequence diagrams */ sequence: {
        hideUnusedParticipants: false,
        /**
     * | Parameter       | Description                  | Type    | Required | Values             |
     * | --------------- | ---------------------------- | ------- | -------- | ------------------ |
     * | activationWidth | Width of the activation rect | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value :10
     */ activationWidth: 10,
        /**
     * | Parameter      | Description                                          | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ diagramMarginX: 50,
        /**
     * | Parameter      | Description                                       | Type    | Required | Values             |
     * | -------------- | ------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ diagramMarginY: 10,
        /**
     * | Parameter   | Description           | Type    | Required | Values             |
     * | ----------- | --------------------- | ------- | -------- | ------------------ |
     * | actorMargin | Margin between actors | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ actorMargin: 50,
        /**
     * | Parameter | Description          | Type    | Required | Values             |
     * | --------- | -------------------- | ------- | -------- | ------------------ |
     * | width     | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 150
     */ width: 150,
        /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | height    | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 65
     */ height: 65,
        /**
     * | Parameter | Description              | Type    | Required | Values             |
     * | --------- | ------------------------ | ------- | -------- | ------------------ |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ boxMargin: 10,
        /**
     * | Parameter     | Description                                  | Type    | Required | Values             |
     * | ------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | boxTextMargin | Margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 5
     */ boxTextMargin: 5,
        /**
     * | Parameter  | Description         | Type    | Required | Values             |
     * | ---------- | ------------------- | ------- | -------- | ------------------ |
     * | noteMargin | margin around notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ noteMargin: 10,
        /**
     * | Parameter     | Description            | Type    | Required | Values             |
     * | ------------- | ---------------------- | ------- | -------- | ------------------ |
     * | messageMargin | Space between messages | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 35
     */ messageMargin: 35,
        /**
     * | Parameter    | Description                 | Type   | Required | Values                    |
     * | ------------ | --------------------------- | ------ | -------- | ------------------------- |
     * | messageAlign | Multiline message alignment | string | Required | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */ messageAlign: "center",
        /**
     * | Parameter    | Description                 | Type    | Required | Values      |
     * | ------------ | --------------------------- | ------- | -------- | ----------- |
     * | mirrorActors | Mirror actors under diagram | boolean | Required | true, false |
     *
     * **Notes:** Default value: true
     */ mirrorActors: true,
        /**
     * | Parameter  | Description                                                             | Type    | Required | Values      |
     * | ---------- | ----------------------------------------------------------------------- | ------- | -------- | ----------- |
     * | forceMenus | forces actor popup menus to always be visible (to support E2E testing). | Boolean | Required | True, False |
     *
     * **Notes:**
     *
     * Default value: false.
     */ forceMenus: false,
        /**
     * | Parameter       | Description                                | Type    | Required | Values             |
     * | --------------- | ------------------------------------------ | ------- | -------- | ------------------ |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Depending on css styling this might need adjustment.
     *
     * Default value: 1
     */ bottomMarginAdj: 1,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:** When this flag is set to true, the height and width is set to 100% and is then
     * scaling with the available space. If set to false, the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter   | Description                          | Type    | Required | Values      |
     * | ----------- | ------------------------------------ | ------- | -------- | ----------- |
     * | rightAngles | display curve arrows as right angles | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a
     * curve
     *
     * Default value: false
     */ rightAngles: false,
        /**
     * | Parameter           | Description                     | Type    | Required | Values      |
     * | ------------------- | ------------------------------- | ------- | -------- | ----------- |
     * | showSequenceNumbers | This will show the node numbers | boolean | Required | true, false |
     *
     * **Notes:** Default value: false
     */ showSequenceNumbers: false,
        /**
     * | Parameter     | Description                                        | Type    | Required | Values             |
     * | ------------- | -------------------------------------------------- | ------- | -------- | ------------------ |
     * | actorFontSize | This sets the font size of the actor's description | Integer | Require  | Any Positive Value |
     *
     * **Notes:** **Default value 14**..
     */ actorFontSize: 14,
        /**
     * | Parameter       | Description                                          | Type   | Required | Values                      |
     * | --------------- | ---------------------------------------------------- | ------ | -------- | --------------------------- |
     * | actorFontFamily | This sets the font family of the actor's description | string | Required | Any Possible CSS FontFamily |
     *
     * **Notes:** Default value: "'Open Sans", sans-serif'
     */ actorFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of the actor's description
     *
     * **Notes:** Default value: 400.
     */ actorFontWeight: 400,
        /**
     * | Parameter    | Description                                     | Type    | Required | Values             |
     * | ------------ | ----------------------------------------------- | ------- | -------- | ------------------ |
     * | noteFontSize | This sets the font size of actor-attached notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 14
     */ noteFontSize: 14,
        /**
     * | Parameter      | Description                                        | Type   | Required | Values                      |
     * | -------------- | -------------------------------------------------- | ------ | -------- | --------------------------- |
     * | noteFontFamily | This sets the font family of actor-attached notes. | string | Required | Any Possible CSS FontFamily |
     *
     * **Notes:** Default value: ''"trebuchet ms", verdana, arial, sans-serif'
     */ noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        /**
     * This sets the font weight of the note's description
     *
     * **Notes:** Default value: 400
     */ noteFontWeight: 400,
        /**
     * | Parameter | Description                                          | Type   | Required | Values                    |
     * | --------- | ---------------------------------------------------- | ------ | -------- | ------------------------- |
     * | noteAlign | This sets the text alignment of actor-attached notes | string | required | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */ noteAlign: "center",
        /**
     * | Parameter       | Description                               | Type    | Required | Values              |
     * | --------------- | ----------------------------------------- | ------- | -------- | ------------------- |
     * | messageFontSize | This sets the font size of actor messages | Integer | Required | Any Positive Number |
     *
     * **Notes:** Default value: 16
     */ messageFontSize: 16,
        /**
     * | Parameter         | Description                                 | Type   | Required | Values                      |
     * | ----------------- | ------------------------------------------- | ------ | -------- | --------------------------- |
     * | messageFontFamily | This sets the font family of actor messages | string | Required | Any Possible CSS FontFamily |
     *
     * **Notes:** Default value: '"trebuchet ms", verdana, arial, sans-serif'
     */ messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        /**
     * This sets the font weight of the message's description
     *
     * **Notes:** Default value: 400.
     */ messageFontWeight: 400,
        /**
     * This sets the auto-wrap state for the diagram
     *
     * **Notes:** Default value: false.
     */ wrap: false,
        /**
     * This sets the auto-wrap padding for the diagram (sides only)
     *
     * **Notes:** Default value: 0.
     */ wrapPadding: 10,
        /**
     * This sets the width of the loop-box (loop, alt, opt, par)
     *
     * **Notes:** Default value: 50.
     */ labelBoxWidth: 50,
        /**
     * This sets the height of the loop-box (loop, alt, opt, par)
     *
     * **Notes:** Default value: 20.
     */ labelBoxHeight: 20,
        messageFont: function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        },
        noteFont: function() {
            return {
                fontFamily: this.noteFontFamily,
                fontSize: this.noteFontSize,
                fontWeight: this.noteFontWeight
            };
        },
        actorFont: function() {
            return {
                fontFamily: this.actorFontFamily,
                fontSize: this.actorFontSize,
                fontWeight: this.actorFontWeight
            };
        }
    },
    /** The object containing configurations specific for gantt diagrams */ gantt: {
        /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the gantt diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */ titleTopMargin: 25,
        /**
     * | Parameter | Description                         | Type    | Required | Values             |
     * | --------- | ----------------------------------- | ------- | -------- | ------------------ |
     * | barHeight | The height of the bars in the graph | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 20
     */ barHeight: 20,
        /**
     * | Parameter | Description                                                      | Type    | Required | Values             |
     * | --------- | ---------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | barGap    | The margin between the different activities in the gantt diagram | Integer | Optional | Any Positive Value |
     *
     * **Notes:** Default value: 4
     */ barGap: 4,
        /**
     * | Parameter  | Description                                                                | Type    | Required | Values             |
     * | ---------- | -------------------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | topPadding | Margin between title and gantt diagram and between axis and gantt diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ topPadding: 50,
        /**
     * | Parameter    | Description                                                             | Type    | Required | Values             |
     * | ------------ | ----------------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | rightPadding | The space allocated for the section name to the right of the activities | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 75
     */ rightPadding: 75,
        /**
     * | Parameter   | Description                                                            | Type    | Required | Values             |
     * | ----------- | ---------------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | leftPadding | The space allocated for the section name to the left of the activities | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 75
     */ leftPadding: 75,
        /**
     * | Parameter            | Description                                  | Type    | Required | Values             |
     * | -------------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | gridLineStartPadding | Vertical starting position of the grid lines | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 35
     */ gridLineStartPadding: 35,
        /**
     * | Parameter | Description | Type    | Required | Values             |
     * | --------- | ----------- | ------- | -------- | ------------------ |
     * | fontSize  | Font size   | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 11
     */ fontSize: 11,
        /**
     * | Parameter       | Description            | Type    | Required | Values             |
     * | --------------- | ---------------------- | ------- | -------- | ------------------ |
     * | sectionFontSize | Font size for sections | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 11
     */ sectionFontSize: 11,
        /**
     * | Parameter           | Description                              | Type    | Required | Values             |
     * | ------------------- | ---------------------------------------- | ------- | -------- | ------------------ |
     * | numberSectionStyles | The number of alternating section styles | Integer | 4        | Any Positive Value |
     *
     * **Notes:** Default value: 4
     */ numberSectionStyles: 4,
        /**
     * | Parameter   | Description               | Type   | Required | Values    |
     * | ----------- | ------------------------- | ------ | -------- | --------- |
     * | displayMode | Controls the display mode | string | 4        | 'compact' |
     *
     * **Notes**:
     *
     * - **compact**: Enables displaying multiple tasks on the same row.
     */ displayMode: "",
        /**
     * | Parameter  | Description                  | Type | Required | Values           |
     * | ---------- | ---------------------------- | ---- | -------- | ---------------- |
     * | axisFormat | Date/time format of the axis | 3    | Required | Date in yy-mm-dd |
     *
     * **Notes:**
     *
     * This might need adjustment to match your locale and preferences
     *
     * Default value: '%Y-%m-%d'.
     */ axisFormat: "%Y-%m-%d",
        /**
     * | Parameter    | Description | Type   | Required | Values  |
     * | ------------ | ------------| ------ | -------- | ------- |
     * | tickInterval | axis ticks  | string | Optional | string  |
     *
     * **Notes:**
     *
     * Pattern is /^([1-9][0-9]*)(minute|hour|day|week|month)$/
     *
     * Default value: undefined
     */ tickInterval: void 0,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter | Description | Type    | Required | Values      |
     * | --------- | ----------- | ------- | -------- | ----------- |
     * | topAxis   | See notes   | Boolean | 4        | True, False |
     *
     * **Notes:** when this flag is set date labels will be added to the top of the chart
     *
     * **Default value false**.
     */ topAxis: false,
        useWidth: void 0
    },
    /** The object containing configurations specific for journey diagrams */ journey: {
        /**
     * | Parameter      | Description                                          | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ diagramMarginX: 50,
        /**
     * | Parameter      | Description                                        | Type    | Required | Values             |
     * | -------------- | -------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the sequence diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ diagramMarginY: 10,
        /**
     * | Parameter   | Description           | Type    | Required | Values             |
     * | ----------- | --------------------- | ------- | -------- | ------------------ |
     * | actorMargin | Margin between actors | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ leftMargin: 150,
        /**
     * | Parameter | Description          | Type    | Required | Values             |
     * | --------- | -------------------- | ------- | -------- | ------------------ |
     * | width     | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 150
     */ width: 150,
        /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | height    | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 65
     */ height: 50,
        /**
     * | Parameter | Description              | Type    | Required | Values             |
     * | --------- | ------------------------ | ------- | -------- | ------------------ |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ boxMargin: 10,
        /**
     * | Parameter     | Description                                  | Type    | Required | Values             |
     * | ------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | boxTextMargin | Margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 5
     */ boxTextMargin: 5,
        /**
     * | Parameter  | Description         | Type    | Required | Values             |
     * | ---------- | ------------------- | ------- | -------- | ------------------ |
     * | noteMargin | Margin around notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ noteMargin: 10,
        /**
     * | Parameter     | Description             | Type    | Required | Values             |
     * | ------------- | ----------------------- | ------- | -------- | ------------------ |
     * | messageMargin | Space between messages. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Space between messages.
     *
     * Default value: 35
     */ messageMargin: 35,
        /**
     * | Parameter    | Description                 | Type | Required | Values                    |
     * | ------------ | --------------------------- | ---- | -------- | ------------------------- |
     * | messageAlign | Multiline message alignment | 3    | 4        | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */ messageAlign: "center",
        /**
     * | Parameter       | Description                                | Type    | Required | Values             |
     * | --------------- | ------------------------------------------ | ------- | -------- | ------------------ |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards | Integer | 4        | Any Positive Value |
     *
     * **Notes:**
     *
     * Depending on css styling this might need adjustment.
     *
     * Default value: 1
     */ bottomMarginAdj: 1,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter   | Description                       | Type | Required | Values      |
     * | ----------- | --------------------------------- | ---- | -------- | ----------- |
     * | rightAngles | Curved Arrows become Right Angles | 3    | 4        | true, false |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a
     * curves
     *
     * Default value: false
     */ rightAngles: false,
        taskFontSize: 14,
        taskFontFamily: '"Open Sans", sans-serif',
        taskMargin: 50,
        // width of activation box
        activationWidth: 10,
        // text placement as: tspan | fo | old only text as before
        textPlacement: "fo",
        actorColours: [
            "#8FBC8F",
            "#7CFC00",
            "#00FFFF",
            "#20B2AA",
            "#B0E0E6",
            "#FFFFE0"
        ],
        sectionFills: [
            "#191970",
            "#8B008B",
            "#4B0082",
            "#2F4F4F",
            "#800000",
            "#8B4513",
            "#00008B"
        ],
        sectionColours: [
            "#fff"
        ]
    },
    /** The object containing configurations specific for timeline diagrams */ timeline: {
        /**
     * | Parameter      | Description                                          | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ diagramMarginX: 50,
        /**
     * | Parameter      | Description                                        | Type    | Required | Values             |
     * | -------------- | -------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the sequence diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ diagramMarginY: 10,
        /**
     * | Parameter   | Description           | Type    | Required | Values             |
     * | ----------- | --------------------- | ------- | -------- | ------------------ |
     * | actorMargin | Margin between actors | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ leftMargin: 150,
        /**
     * | Parameter | Description          | Type    | Required | Values             |
     * | --------- | -------------------- | ------- | -------- | ------------------ |
     * | width     | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 150
     */ width: 150,
        /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | height    | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 65
     */ height: 50,
        /**
     * | Parameter | Description              | Type    | Required | Values             |
     * | --------- | ------------------------ | ------- | -------- | ------------------ |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ boxMargin: 10,
        /**
     * | Parameter     | Description                                  | Type    | Required | Values             |
     * | ------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | boxTextMargin | Margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 5
     */ boxTextMargin: 5,
        /**
     * | Parameter  | Description         | Type    | Required | Values             |
     * | ---------- | ------------------- | ------- | -------- | ------------------ |
     * | noteMargin | Margin around notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ noteMargin: 10,
        /**
     * | Parameter     | Description             | Type    | Required | Values             |
     * | ------------- | ----------------------- | ------- | -------- | ------------------ |
     * | messageMargin | Space between messages. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Space between messages.
     *
     * Default value: 35
     */ messageMargin: 35,
        /**
     * | Parameter    | Description                 | Type | Required | Values                    |
     * | ------------ | --------------------------- | ---- | -------- | ------------------------- |
     * | messageAlign | Multiline message alignment | 3    | 4        | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */ messageAlign: "center",
        /**
     * | Parameter       | Description                                | Type    | Required | Values             |
     * | --------------- | ------------------------------------------ | ------- | -------- | ------------------ |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards | Integer | 4        | Any Positive Value |
     *
     * **Notes:**
     *
     * Depending on css styling this might need adjustment.
     *
     * Default value: 1
     */ bottomMarginAdj: 1,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter   | Description                       | Type | Required | Values      |
     * | ----------- | --------------------------------- | ---- | -------- | ----------- |
     * | rightAngles | Curved Arrows become Right Angles | 3    | 4        | true, false |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a
     * curves
     *
     * Default value: false
     */ rightAngles: false,
        taskFontSize: 14,
        taskFontFamily: '"Open Sans", sans-serif',
        taskMargin: 50,
        // width of activation box
        activationWidth: 10,
        // text placement as: tspan | fo | old only text as before
        textPlacement: "fo",
        actorColours: [
            "#8FBC8F",
            "#7CFC00",
            "#00FFFF",
            "#20B2AA",
            "#B0E0E6",
            "#FFFFE0"
        ],
        sectionFills: [
            "#191970",
            "#8B008B",
            "#4B0082",
            "#2F4F4F",
            "#800000",
            "#8B4513",
            "#00008B"
        ],
        sectionColours: [
            "#fff"
        ],
        disableMulticolor: false
    },
    class: {
        /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the class diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */ titleTopMargin: 25,
        arrowMarkerAbsolute: false,
        dividerMargin: 10,
        padding: 5,
        textHeight: 10,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | defaultRenderer | See notes   | boolean | 4        | dagre-d3, dagre-wrapper |
     *
     * **Notes**:
     *
     * Decides which rendering engine that is to be used for the rendering. Legal values are:
     * dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid
     *
     * Default value: 'dagre-d3'
     */ defaultRenderer: "dagre-wrapper"
    },
    state: {
        /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the state diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */ titleTopMargin: 25,
        dividerMargin: 10,
        sizeUnit: 5,
        padding: 8,
        textHeight: 10,
        titleShift: -15,
        noteMargin: 10,
        forkWidth: 70,
        forkHeight: 7,
        // Used
        miniPadding: 2,
        // Font size factor, this is used to guess the width of the edges labels before rendering by dagre
        // layout. This might need updating if/when switching font
        fontSizeFactor: 5.02,
        fontSize: 24,
        labelHeight: 16,
        edgeLengthFactor: "20",
        compositTitleSize: 35,
        radius: 5,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | defaultRenderer | See notes   | boolean | 4        | dagre-d3, dagre-wrapper |
     *
     * **Notes:**
     *
     * Decides which rendering engine that is to be used for the rendering. Legal values are:
     * dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid
     *
     * Default value: 'dagre-d3'
     */ defaultRenderer: "dagre-wrapper"
    },
    /** The object containing configurations specific for entity relationship diagrams */ er: {
        /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the diagram       | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */ titleTopMargin: 25,
        /**
     * | Parameter      | Description                                     | Type    | Required | Values             |
     * | -------------- | ----------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramPadding | Amount of padding around the diagram as a whole | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * The amount of padding around the diagram as a whole so that embedded diagrams have margins,
     * expressed in pixels
     *
     * Default value: 20
     */ diagramPadding: 20,
        /**
     * | Parameter       | Description                              | Type   | Required | Values                 |
     * | --------------- | ---------------------------------------- | ------ | -------- | ---------------------- |
     * | layoutDirection | Directional bias for layout of entities. | string | Required | "TB", "BT", "LR", "RL" |
     *
     * **Notes:**
     *
     * 'TB' for Top-Bottom, 'BT'for Bottom-Top, 'LR' for Left-Right, or 'RL' for Right to Left.
     *
     * T = top, B = bottom, L = left, and R = right.
     *
     * Default value: 'TB'
     */ layoutDirection: "TB",
        /**
     * | Parameter      | Description                        | Type    | Required | Values             |
     * | -------------- | ---------------------------------- | ------- | -------- | ------------------ |
     * | minEntityWidth | The minimum width of an entity box | Integer | Required | Any Positive Value |
     *
     * **Notes:** Expressed in pixels. Default value: 100
     */ minEntityWidth: 100,
        /**
     * | Parameter       | Description                         | Type    | Required | Values             |
     * | --------------- | ----------------------------------- | ------- | -------- | ------------------ |
     * | minEntityHeight | The minimum height of an entity box | Integer | 4        | Any Positive Value |
     *
     * **Notes:** Expressed in pixels Default value: 75
     */ minEntityHeight: 75,
        /**
     * | Parameter     | Description                                                  | Type    | Required | Values             |
     * | ------------- | ------------------------------------------------------------ | ------- | -------- | ------------------ |
     * | entityPadding | Minimum internal padding between text in box and box borders | Integer | 4        | Any Positive Value |
     *
     * **Notes:**
     *
     * The minimum internal padding between text in an entity box and the enclosing box borders,
     * expressed in pixels.
     *
     * Default value: 15
     */ entityPadding: 15,
        /**
     * | Parameter | Description                         | Type   | Required | Values               |
     * | --------- | ----------------------------------- | ------ | -------- | -------------------- |
     * | stroke    | Stroke color of box edges and lines | string | 4        | Any recognized color |
     *
     * **Notes:** Default value: 'gray'
     */ stroke: "gray",
        /**
     * | Parameter | Description                | Type   | Required | Values               |
     * | --------- | -------------------------- | ------ | -------- | -------------------- |
     * | fill      | Fill color of entity boxes | string | 4        | Any recognized color |
     *
     * **Notes:** Default value: 'honeydew'
     */ fill: "honeydew",
        /**
     * | Parameter | Description         | Type    | Required | Values             |
     * | --------- | ------------------- | ------- | -------- | ------------------ |
     * | fontSize  | Font Size in pixels | Integer |          | Any Positive Value |
     *
     * **Notes:**
     *
     * Font size (expressed as an integer representing a number of pixels) Default value: 12
     */ fontSize: 12,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */ useMaxWidth: true
    },
    /** The object containing configurations specific for pie diagrams */ pie: {
        useWidth: void 0,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter    | Description                                                                      | Type    | Required | Values              |
     * | ------------ | -------------------------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | textPosition | Axial position of slice's label from zero at the center to 1 at the outside edge | Number  | Optional | Decimal from 0 to 1 |
     *
     * **Notes:** Default value: 0.75
     */ textPosition: 0.75
    },
    quadrantChart: {
        /**
     * | Parameter       | Description                        | Type    | Required | Values              |
     * | --------------- | ---------------------------------- | ------- | -------- | ------------------- |
     * | chartWidth      | Width of the chart                 | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 500
     */ chartWidth: 500,
        /**
     * | Parameter       | Description                        | Type    | Required | Values              |
     * | --------------- | ---------------------------------- | ------- | -------- | ------------------- |
     * | chartHeight     | Height of the chart                | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 500
     */ chartHeight: 500,
        /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | titlePadding       | Chart title top and bottom padding | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 10
     */ titlePadding: 10,
        /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | titleFontSize      | Chart title font size              | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 20
     */ titleFontSize: 20,
        /**
     * | Parameter       | Description                        | Type    | Required | Values              |
     * | --------------- | ---------------------------------- | ------- | -------- | ------------------- |
     * | quadrantPadding | Padding around the quadrant square | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */ quadrantPadding: 5,
        /**
     * | Parameter              | Description                                                                | Type    | Required | Values              |
     * | ---------------------- | -------------------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | quadrantTextTopPadding | quadrant title padding from top if the quadrant is rendered on top         | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */ quadrantTextTopPadding: 5,
        /**
     * | Parameter             | Description                        | Type    | Required | Values              |
     * | ------------------    | ---------------------------------- | ------- | -------- | ------------------- |
     * | quadrantLabelFontSize | quadrant title font size           | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 16
     */ quadrantLabelFontSize: 16,
        /**
     * | Parameter                         | Description                                                   | Type    | Required | Values              |
     * | --------------------------------- | ------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | quadrantInternalBorderStrokeWidth | stroke width of edges of the box that are inside the quadrant | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 1
     */ quadrantInternalBorderStrokeWidth: 1,
        /**
     * | Parameter                         | Description                                                    | Type    | Required | Values              |
     * | --------------------------------- | -------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | quadrantExternalBorderStrokeWidth | stroke width of edges of the box that are outside the quadrant | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 2
     */ quadrantExternalBorderStrokeWidth: 2,
        /**
     * | Parameter         | Description                        | Type    | Required | Values              |
     * | ---------------   | ---------------------------------- | ------- | -------- | ------------------- |
     * | xAxisLabelPadding | Padding around x-axis labels       | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */ xAxisLabelPadding: 5,
        /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | xAxisLabelFontSize | x-axis label font size             | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 16
     */ xAxisLabelFontSize: 16,
        /**
     * | Parameter     | Description                     | Type    | Required | Values              |
     * | ------------- | ------------------------------- | ------- | -------- | ------------------- |
     * | xAxisPosition | position of x-axis labels       | string  | Optional | 'top' or 'bottom'   |
     *
     * **Notes:**
     * Default value: top
     */ xAxisPosition: "top",
        /**
     * | Parameter         | Description                        | Type    | Required | Values              |
     * | ---------------   | ---------------------------------- | ------- | -------- | ------------------- |
     * | yAxisLabelPadding | Padding around y-axis labels       | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */ yAxisLabelPadding: 5,
        /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | yAxisLabelFontSize | y-axis label font size             | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 16
     */ yAxisLabelFontSize: 16,
        /**
     * | Parameter     | Description                     | Type    | Required | Values              |
     * | ------------- | ------------------------------- | ------- | -------- | ------------------- |
     * | yAxisPosition | position of y-axis labels       | string  | Optional | 'left' or 'right'   |
     *
     * **Notes:**
     * Default value: left
     */ yAxisPosition: "left",
        /**
     * | Parameter              | Description                            | Type    | Required | Values              |
     * | ---------------------- | -------------------------------------- | ------- | -------- | ------------------- |
     * | pointTextPadding       | padding between point and point label  | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */ pointTextPadding: 5,
        /**
     * | Parameter              | Description            | Type    | Required | Values              |
     * | ---------------------- | ---------------------- | ------- | -------- | ------------------- |
     * | pointTextPadding       | point title font size  | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 12
     */ pointLabelFontSize: 12,
        /**
     * | Parameter     | Description                     | Type    | Required | Values              |
     * | ------------- | ------------------------------- | ------- | -------- | ------------------- |
     * | pointRadius   | radius of the point to be drawn | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */ pointRadius: 5,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */ useMaxWidth: true
    },
    /** The object containing configurations specific for req diagrams */ requirement: {
        useWidth: void 0,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */ useMaxWidth: true,
        rect_fill: "#f9f9f9",
        text_color: "#333",
        rect_border_size: "0.5px",
        rect_border_color: "#bbb",
        rect_min_width: 200,
        rect_min_height: 200,
        fontSize: 14,
        rect_padding: 10,
        line_height: 20
    },
    gitGraph: {
        /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the Git diagram   | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */ titleTopMargin: 25,
        diagramPadding: 8,
        nodeLabel: {
            width: 75,
            height: 100,
            x: -25,
            y: 0
        },
        mainBranchName: "main",
        mainBranchOrder: 0,
        showCommitLabel: true,
        showBranches: true,
        rotateCommitLabel: true
    },
    /** The object containing configurations specific for c4 diagrams */ c4: {
        useWidth: void 0,
        /**
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the c4 diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ diagramMarginX: 50,
        /**
     * | Parameter      | Description                                 | Type    | Required | Values             |
     * | -------------- | ------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the c4 diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ diagramMarginY: 10,
        /**
     * | Parameter     | Description           | Type    | Required | Values             |
     * | ------------- | --------------------- | ------- | -------- | ------------------ |
     * | c4ShapeMargin | Margin between shapes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */ c4ShapeMargin: 50,
        /**
     * | Parameter      | Description            | Type    | Required | Values             |
     * | -------------- | ---------------------- | ------- | -------- | ------------------ |
     * | c4ShapePadding | Padding between shapes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 20
     */ c4ShapePadding: 20,
        /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | width     | Width of person boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 216
     */ width: 216,
        /**
     * | Parameter | Description            | Type    | Required | Values             |
     * | --------- | ---------------------- | ------- | -------- | ------------------ |
     * | height    | Height of person boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 60
     */ height: 60,
        /**
     * | Parameter | Description         | Type    | Required | Values             |
     * | --------- | ------------------- | ------- | -------- | ------------------ |
     * | boxMargin | Margin around boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */ boxMargin: 10,
        /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:** When this flag is set to true, the height and width is set to 100% and is then
     * scaling with the available space. If set to false, the absolute space required is used.
     *
     * Default value: true
     */ useMaxWidth: true,
        /**
     * | Parameter    | Description | Type    | Required | Values             |
     * | ------------ | ----------- | ------- | -------- | ------------------ |
     * | c4ShapeInRow | See Notes   | Integer | Required | Any Positive Value |
     *
     * **Notes:** How many shapes to place in each row.
     *
     * Default value: 4
     */ c4ShapeInRow: 4,
        nextLinePaddingX: 0,
        /**
     * | Parameter       | Description | Type    | Required | Values             |
     * | --------------- | ----------- | ------- | -------- | ------------------ |
     * | c4BoundaryInRow | See Notes   | Integer | Required | Any Positive Value |
     *
     * **Notes:** How many boundaries to place in each row.
     *
     * Default value: 2
     */ c4BoundaryInRow: 2,
        /**
     * This sets the font size of Person shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ personFontSize: 14,
        /**
     * This sets the font family of Person shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ personFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Person shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ personFontWeight: "normal",
        /**
     * This sets the font size of External Person shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_personFontSize: 14,
        /**
     * This sets the font family of External Person shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_personFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Person shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_personFontWeight: "normal",
        /**
     * This sets the font size of System shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ systemFontSize: 14,
        /**
     * This sets the font family of System shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ systemFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of System shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ systemFontWeight: "normal",
        /**
     * This sets the font size of External System shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_systemFontSize: 14,
        /**
     * This sets the font family of External System shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_systemFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External System shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_systemFontWeight: "normal",
        /**
     * This sets the font size of System DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ system_dbFontSize: 14,
        /**
     * This sets the font family of System DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ system_dbFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of System DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ system_dbFontWeight: "normal",
        /**
     * This sets the font size of External System DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_system_dbFontSize: 14,
        /**
     * This sets the font family of External System DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_system_dbFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External System DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_system_dbFontWeight: "normal",
        /**
     * This sets the font size of System Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ system_queueFontSize: 14,
        /**
     * This sets the font family of System Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ system_queueFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of System Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ system_queueFontWeight: "normal",
        /**
     * This sets the font size of External System Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_system_queueFontSize: 14,
        /**
     * This sets the font family of External System Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_system_queueFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External System Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_system_queueFontWeight: "normal",
        /**
     * This sets the font size of Boundary shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ boundaryFontSize: 14,
        /**
     * This sets the font family of Boundary shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ boundaryFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Boundary shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ boundaryFontWeight: "normal",
        /**
     * This sets the font size of Message shape for the diagram
     *
     * **Notes:** Default value: 12.
     */ messageFontSize: 12,
        /**
     * This sets the font family of Message shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ messageFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Message shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ messageFontWeight: "normal",
        /**
     * This sets the font size of Container shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ containerFontSize: 14,
        /**
     * This sets the font family of Container shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ containerFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Container shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ containerFontWeight: "normal",
        /**
     * This sets the font size of External Container shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_containerFontSize: 14,
        /**
     * This sets the font family of External Container shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_containerFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Container shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_containerFontWeight: "normal",
        /**
     * This sets the font size of Container DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ container_dbFontSize: 14,
        /**
     * This sets the font family of Container DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ container_dbFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Container DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ container_dbFontWeight: "normal",
        /**
     * This sets the font size of External Container DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_container_dbFontSize: 14,
        /**
     * This sets the font family of External Container DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_container_dbFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Container DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_container_dbFontWeight: "normal",
        /**
     * This sets the font size of Container Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ container_queueFontSize: 14,
        /**
     * This sets the font family of Container Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ container_queueFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Container Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ container_queueFontWeight: "normal",
        /**
     * This sets the font size of External Container Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_container_queueFontSize: 14,
        /**
     * This sets the font family of External Container Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_container_queueFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Container Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_container_queueFontWeight: "normal",
        /**
     * This sets the font size of Component shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ componentFontSize: 14,
        /**
     * This sets the font family of Component shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ componentFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Component shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ componentFontWeight: "normal",
        /**
     * This sets the font size of External Component shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_componentFontSize: 14,
        /**
     * This sets the font family of External Component shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_componentFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Component shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_componentFontWeight: "normal",
        /**
     * This sets the font size of Component DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ component_dbFontSize: 14,
        /**
     * This sets the font family of Component DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ component_dbFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Component DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ component_dbFontWeight: "normal",
        /**
     * This sets the font size of External Component DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_component_dbFontSize: 14,
        /**
     * This sets the font family of External Component DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_component_dbFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Component DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_component_dbFontWeight: "normal",
        /**
     * This sets the font size of Component Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ component_queueFontSize: 14,
        /**
     * This sets the font family of Component Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ component_queueFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of Component Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ component_queueFontWeight: "normal",
        /**
     * This sets the font size of External Component Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */ external_component_queueFontSize: 14,
        /**
     * This sets the font family of External Component Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */ external_component_queueFontFamily: '"Open Sans", sans-serif',
        /**
     * This sets the font weight of External Component Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */ external_component_queueFontWeight: "normal",
        /**
     * This sets the auto-wrap state for the diagram
     *
     * **Notes:** Default value: true.
     */ wrap: true,
        /**
     * This sets the auto-wrap padding for the diagram (sides only)
     *
     * **Notes:** Default value: 0.
     */ wrapPadding: 10,
        personFont: function() {
            return {
                fontFamily: this.personFontFamily,
                fontSize: this.personFontSize,
                fontWeight: this.personFontWeight
            };
        },
        external_personFont: function() {
            return {
                fontFamily: this.external_personFontFamily,
                fontSize: this.external_personFontSize,
                fontWeight: this.external_personFontWeight
            };
        },
        systemFont: function() {
            return {
                fontFamily: this.systemFontFamily,
                fontSize: this.systemFontSize,
                fontWeight: this.systemFontWeight
            };
        },
        external_systemFont: function() {
            return {
                fontFamily: this.external_systemFontFamily,
                fontSize: this.external_systemFontSize,
                fontWeight: this.external_systemFontWeight
            };
        },
        system_dbFont: function() {
            return {
                fontFamily: this.system_dbFontFamily,
                fontSize: this.system_dbFontSize,
                fontWeight: this.system_dbFontWeight
            };
        },
        external_system_dbFont: function() {
            return {
                fontFamily: this.external_system_dbFontFamily,
                fontSize: this.external_system_dbFontSize,
                fontWeight: this.external_system_dbFontWeight
            };
        },
        system_queueFont: function() {
            return {
                fontFamily: this.system_queueFontFamily,
                fontSize: this.system_queueFontSize,
                fontWeight: this.system_queueFontWeight
            };
        },
        external_system_queueFont: function() {
            return {
                fontFamily: this.external_system_queueFontFamily,
                fontSize: this.external_system_queueFontSize,
                fontWeight: this.external_system_queueFontWeight
            };
        },
        containerFont: function() {
            return {
                fontFamily: this.containerFontFamily,
                fontSize: this.containerFontSize,
                fontWeight: this.containerFontWeight
            };
        },
        external_containerFont: function() {
            return {
                fontFamily: this.external_containerFontFamily,
                fontSize: this.external_containerFontSize,
                fontWeight: this.external_containerFontWeight
            };
        },
        container_dbFont: function() {
            return {
                fontFamily: this.container_dbFontFamily,
                fontSize: this.container_dbFontSize,
                fontWeight: this.container_dbFontWeight
            };
        },
        external_container_dbFont: function() {
            return {
                fontFamily: this.external_container_dbFontFamily,
                fontSize: this.external_container_dbFontSize,
                fontWeight: this.external_container_dbFontWeight
            };
        },
        container_queueFont: function() {
            return {
                fontFamily: this.container_queueFontFamily,
                fontSize: this.container_queueFontSize,
                fontWeight: this.container_queueFontWeight
            };
        },
        external_container_queueFont: function() {
            return {
                fontFamily: this.external_container_queueFontFamily,
                fontSize: this.external_container_queueFontSize,
                fontWeight: this.external_container_queueFontWeight
            };
        },
        componentFont: function() {
            return {
                fontFamily: this.componentFontFamily,
                fontSize: this.componentFontSize,
                fontWeight: this.componentFontWeight
            };
        },
        external_componentFont: function() {
            return {
                fontFamily: this.external_componentFontFamily,
                fontSize: this.external_componentFontSize,
                fontWeight: this.external_componentFontWeight
            };
        },
        component_dbFont: function() {
            return {
                fontFamily: this.component_dbFontFamily,
                fontSize: this.component_dbFontSize,
                fontWeight: this.component_dbFontWeight
            };
        },
        external_component_dbFont: function() {
            return {
                fontFamily: this.external_component_dbFontFamily,
                fontSize: this.external_component_dbFontSize,
                fontWeight: this.external_component_dbFontWeight
            };
        },
        component_queueFont: function() {
            return {
                fontFamily: this.component_queueFontFamily,
                fontSize: this.component_queueFontSize,
                fontWeight: this.component_queueFontWeight
            };
        },
        external_component_queueFont: function() {
            return {
                fontFamily: this.external_component_queueFontFamily,
                fontSize: this.external_component_queueFontSize,
                fontWeight: this.external_component_queueFontWeight
            };
        },
        boundaryFont: function() {
            return {
                fontFamily: this.boundaryFontFamily,
                fontSize: this.boundaryFontSize,
                fontWeight: this.boundaryFontWeight
            };
        },
        messageFont: function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        },
        // ' Colors
        // ' ##################################
        person_bg_color: "#08427B",
        person_border_color: "#073B6F",
        external_person_bg_color: "#686868",
        external_person_border_color: "#8A8A8A",
        system_bg_color: "#1168BD",
        system_border_color: "#3C7FC0",
        system_db_bg_color: "#1168BD",
        system_db_border_color: "#3C7FC0",
        system_queue_bg_color: "#1168BD",
        system_queue_border_color: "#3C7FC0",
        external_system_bg_color: "#999999",
        external_system_border_color: "#8A8A8A",
        external_system_db_bg_color: "#999999",
        external_system_db_border_color: "#8A8A8A",
        external_system_queue_bg_color: "#999999",
        external_system_queue_border_color: "#8A8A8A",
        container_bg_color: "#438DD5",
        container_border_color: "#3C7FC0",
        container_db_bg_color: "#438DD5",
        container_db_border_color: "#3C7FC0",
        container_queue_bg_color: "#438DD5",
        container_queue_border_color: "#3C7FC0",
        external_container_bg_color: "#B3B3B3",
        external_container_border_color: "#A6A6A6",
        external_container_db_bg_color: "#B3B3B3",
        external_container_db_border_color: "#A6A6A6",
        external_container_queue_bg_color: "#B3B3B3",
        external_container_queue_border_color: "#A6A6A6",
        component_bg_color: "#85BBF0",
        component_border_color: "#78A8D8",
        component_db_bg_color: "#85BBF0",
        component_db_border_color: "#78A8D8",
        component_queue_bg_color: "#85BBF0",
        component_queue_border_color: "#78A8D8",
        external_component_bg_color: "#CCCCCC",
        external_component_border_color: "#BFBFBF",
        external_component_db_bg_color: "#CCCCCC",
        external_component_db_border_color: "#BFBFBF",
        external_component_queue_bg_color: "#CCCCCC",
        external_component_queue_border_color: "#BFBFBF"
    },
    mindmap: {
        useMaxWidth: true,
        padding: 10,
        maxNodeWidth: 200
    },
    fontSize: 16
};
if ($68d37aac8bca33d7$var$config.class) $68d37aac8bca33d7$var$config.class.arrowMarkerAbsolute = $68d37aac8bca33d7$var$config.arrowMarkerAbsolute;
if ($68d37aac8bca33d7$var$config.gitGraph) $68d37aac8bca33d7$var$config.gitGraph.arrowMarkerAbsolute = $68d37aac8bca33d7$var$config.arrowMarkerAbsolute;
const $68d37aac8bca33d7$var$keyify = (obj, prefix = "")=>Object.keys(obj).reduce((res, el)=>{
        if (Array.isArray(obj[el])) return res;
        else if (typeof obj[el] === "object" && obj[el] !== null) return [
            ...res,
            prefix + el,
            ...$68d37aac8bca33d7$var$keyify(obj[el], "")
        ];
        return [
            ...res,
            prefix + el
        ];
    }, []);
const $68d37aac8bca33d7$var$configKeys = $68d37aac8bca33d7$var$keyify($68d37aac8bca33d7$var$config, "");
const $68d37aac8bca33d7$export$96f57966bedc81b4 = $68d37aac8bca33d7$var$config;
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */ function $68d37aac8bca33d7$var$isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
}
function $68d37aac8bca33d7$var$isObject(subject) {
    return typeof subject === "object" && subject !== null;
}
function $68d37aac8bca33d7$var$toArray(sequence2) {
    if (Array.isArray(sequence2)) return sequence2;
    else if ($68d37aac8bca33d7$var$isNothing(sequence2)) return [];
    return [
        sequence2
    ];
}
function $68d37aac8bca33d7$var$extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
function $68d37aac8bca33d7$var$repeat(string, count) {
    var result = "", cycle;
    for(cycle = 0; cycle < count; cycle += 1)result += string;
    return result;
}
function $68d37aac8bca33d7$var$isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var $68d37aac8bca33d7$var$isNothing_1 = $68d37aac8bca33d7$var$isNothing;
var $68d37aac8bca33d7$var$isObject_1 = $68d37aac8bca33d7$var$isObject;
var $68d37aac8bca33d7$var$toArray_1 = $68d37aac8bca33d7$var$toArray;
var $68d37aac8bca33d7$var$repeat_1 = $68d37aac8bca33d7$var$repeat;
var $68d37aac8bca33d7$var$isNegativeZero_1 = $68d37aac8bca33d7$var$isNegativeZero;
var $68d37aac8bca33d7$var$extend_1 = $68d37aac8bca33d7$var$extend;
var $68d37aac8bca33d7$var$common = {
    isNothing: $68d37aac8bca33d7$var$isNothing_1,
    isObject: $68d37aac8bca33d7$var$isObject_1,
    toArray: $68d37aac8bca33d7$var$toArray_1,
    repeat: $68d37aac8bca33d7$var$repeat_1,
    isNegativeZero: $68d37aac8bca33d7$var$isNegativeZero_1,
    extend: $68d37aac8bca33d7$var$extend_1
};
function $68d37aac8bca33d7$var$formatError(exception2, compact) {
    var where = "", message = exception2.reason || "(unknown reason)";
    if (!exception2.mark) return message;
    if (exception2.mark.name) where += 'in "' + exception2.mark.name + '" ';
    where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
    if (!compact && exception2.mark.snippet) where += "\n\n" + exception2.mark.snippet;
    return message + " " + where;
}
function $68d37aac8bca33d7$var$YAMLException$1(reason, mark) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = $68d37aac8bca33d7$var$formatError(this, false);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack || "";
}
$68d37aac8bca33d7$var$YAMLException$1.prototype = Object.create(Error.prototype);
$68d37aac8bca33d7$var$YAMLException$1.prototype.constructor = $68d37aac8bca33d7$var$YAMLException$1;
$68d37aac8bca33d7$var$YAMLException$1.prototype.toString = function toString(compact) {
    return this.name + ": " + $68d37aac8bca33d7$var$formatError(this, compact);
};
var $68d37aac8bca33d7$var$exception = $68d37aac8bca33d7$var$YAMLException$1;
function $68d37aac8bca33d7$var$getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = "";
    var tail = "";
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
    }
    return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
        pos: position - lineStart + head.length
    };
}
function $68d37aac8bca33d7$var$padStart(string, max) {
    return $68d37aac8bca33d7$var$common.repeat(" ", max - string.length) + string;
}
function $68d37aac8bca33d7$var$makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer) return null;
    if (!options.maxLength) options.maxLength = 79;
    if (typeof options.indent !== "number") options.indent = 1;
    if (typeof options.linesBefore !== "number") options.linesBefore = 3;
    if (typeof options.linesAfter !== "number") options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [
        0
    ];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while(match = re.exec(mark.buffer)){
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) foundLineNo = lineStarts.length - 2;
    }
    if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
    var result = "", i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for(i = 1; i <= options.linesBefore; i++){
        if (foundLineNo - i < 0) break;
        line = $68d37aac8bca33d7$var$getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
        result = $68d37aac8bca33d7$var$common.repeat(" ", options.indent) + $68d37aac8bca33d7$var$padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
    }
    line = $68d37aac8bca33d7$var$getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += $68d37aac8bca33d7$var$common.repeat(" ", options.indent) + $68d37aac8bca33d7$var$padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    result += $68d37aac8bca33d7$var$common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
    for(i = 1; i <= options.linesAfter; i++){
        if (foundLineNo + i >= lineEnds.length) break;
        line = $68d37aac8bca33d7$var$getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
        result += $68d37aac8bca33d7$var$common.repeat(" ", options.indent) + $68d37aac8bca33d7$var$padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    }
    return result.replace(/\n$/, "");
}
var $68d37aac8bca33d7$var$snippet = $68d37aac8bca33d7$var$makeSnippet;
var $68d37aac8bca33d7$var$TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
];
var $68d37aac8bca33d7$var$YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
];
function $68d37aac8bca33d7$var$compileStyleAliases(map2) {
    var result = {};
    if (map2 !== null) Object.keys(map2).forEach(function(style) {
        map2[style].forEach(function(alias) {
            result[String(alias)] = style;
        });
    });
    return result;
}
function $68d37aac8bca33d7$var$Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
        if ($68d37aac8bca33d7$var$TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) throw new $68d37aac8bca33d7$var$exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    });
    this.options = options;
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
        return true;
    };
    this.construct = options["construct"] || function(data) {
        return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.representName = options["representName"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.multi = options["multi"] || false;
    this.styleAliases = $68d37aac8bca33d7$var$compileStyleAliases(options["styleAliases"] || null);
    if ($68d37aac8bca33d7$var$YAML_NODE_KINDS.indexOf(this.kind) === -1) throw new $68d37aac8bca33d7$var$exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
}
var $68d37aac8bca33d7$var$type = $68d37aac8bca33d7$var$Type$1;
function $68d37aac8bca33d7$var$compileList(schema2, name) {
    var result = [];
    schema2[name].forEach(function(currentType) {
        var newIndex = result.length;
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) newIndex = previousIndex;
        });
        result[newIndex] = currentType;
    });
    return result;
}
function $68d37aac8bca33d7$var$compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
        }
    }, index, length;
    function collectType(type2) {
        if (type2.multi) {
            result.multi[type2.kind].push(type2);
            result.multi["fallback"].push(type2);
        } else result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
    for(index = 0, length = arguments.length; index < length; index += 1)arguments[index].forEach(collectType);
    return result;
}
function $68d37aac8bca33d7$var$Schema$1(definition) {
    return this.extend(definition);
}
$68d37aac8bca33d7$var$Schema$1.prototype.extend = function extend2(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof $68d37aac8bca33d7$var$type) explicit.push(definition);
    else if (Array.isArray(definition)) explicit = explicit.concat(definition);
    else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        if (definition.implicit) implicit = implicit.concat(definition.implicit);
        if (definition.explicit) explicit = explicit.concat(definition.explicit);
    } else throw new $68d37aac8bca33d7$var$exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    implicit.forEach(function(type$1) {
        if (!(type$1 instanceof $68d37aac8bca33d7$var$type)) throw new $68d37aac8bca33d7$var$exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        if (type$1.loadKind && type$1.loadKind !== "scalar") throw new $68d37aac8bca33d7$var$exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        if (type$1.multi) throw new $68d37aac8bca33d7$var$exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    });
    explicit.forEach(function(type$1) {
        if (!(type$1 instanceof $68d37aac8bca33d7$var$type)) throw new $68d37aac8bca33d7$var$exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var result = Object.create($68d37aac8bca33d7$var$Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = $68d37aac8bca33d7$var$compileList(result, "implicit");
    result.compiledExplicit = $68d37aac8bca33d7$var$compileList(result, "explicit");
    result.compiledTypeMap = $68d37aac8bca33d7$var$compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
};
var $68d37aac8bca33d7$var$schema = $68d37aac8bca33d7$var$Schema$1;
var $68d37aac8bca33d7$var$str = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
        return data !== null ? data : "";
    }
});
var $68d37aac8bca33d7$var$seq = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
        return data !== null ? data : [];
    }
});
var $68d37aac8bca33d7$var$map = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(data) {
        return data !== null ? data : {};
    }
});
var $68d37aac8bca33d7$var$failsafe = new $68d37aac8bca33d7$var$schema({
    explicit: [
        $68d37aac8bca33d7$var$str,
        $68d37aac8bca33d7$var$seq,
        $68d37aac8bca33d7$var$map
    ]
});
function $68d37aac8bca33d7$var$resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function $68d37aac8bca33d7$var$constructYamlNull() {
    return null;
}
function $68d37aac8bca33d7$var$isNull(object) {
    return object === null;
}
var $68d37aac8bca33d7$var$_null = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlNull,
    construct: $68d37aac8bca33d7$var$constructYamlNull,
    predicate: $68d37aac8bca33d7$var$isNull,
    represent: {
        canonical: function() {
            return "~";
        },
        lowercase: function() {
            return "null";
        },
        uppercase: function() {
            return "NULL";
        },
        camelcase: function() {
            return "Null";
        },
        empty: function() {
            return "";
        }
    },
    defaultStyle: "lowercase"
});
function $68d37aac8bca33d7$var$resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function $68d37aac8bca33d7$var$constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
}
function $68d37aac8bca33d7$var$isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
}
var $68d37aac8bca33d7$var$bool = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlBoolean,
    construct: $68d37aac8bca33d7$var$constructYamlBoolean,
    predicate: $68d37aac8bca33d7$var$isBoolean,
    represent: {
        lowercase: function(object) {
            return object ? "true" : "false";
        },
        uppercase: function(object) {
            return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
            return object ? "True" : "False";
        }
    },
    defaultStyle: "lowercase"
});
function $68d37aac8bca33d7$var$isHexCode(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function $68d37aac8bca33d7$var$isOctCode(c) {
    return 48 <= c && c <= 55;
}
function $68d37aac8bca33d7$var$isDecCode(c) {
    return 48 <= c && c <= 57;
}
function $68d37aac8bca33d7$var$resolveYamlInteger(data) {
    if (data === null) return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) return false;
    ch = data[index];
    if (ch === "-" || ch === "+") ch = data[++index];
    if (ch === "0") {
        if (index + 1 === max) return true;
        ch = data[++index];
        if (ch === "b") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (ch !== "0" && ch !== "1") return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "x") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!$68d37aac8bca33d7$var$isHexCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "o") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!$68d37aac8bca33d7$var$isOctCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
    }
    if (ch === "_") return false;
    for(; index < max; index++){
        ch = data[index];
        if (ch === "_") continue;
        if (!$68d37aac8bca33d7$var$isDecCode(data.charCodeAt(index))) return false;
        hasDigits = true;
    }
    if (!hasDigits || ch === "_") return false;
    return true;
}
function $68d37aac8bca33d7$var$constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf("_") !== -1) value = value.replace(/_/g, "");
    ch = value[0];
    if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === "0") return 0;
    if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
        if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
}
function $68d37aac8bca33d7$var$isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !$68d37aac8bca33d7$var$common.isNegativeZero(object);
}
var $68d37aac8bca33d7$var$int = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlInteger,
    construct: $68d37aac8bca33d7$var$constructYamlInteger,
    predicate: $68d37aac8bca33d7$var$isInteger,
    represent: {
        binary: function(obj) {
            return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
            return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
            return obj.toString(10);
        },
        /* eslint-disable max-len */ hexadecimal: function(obj) {
            return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
});
var $68d37aac8bca33d7$var$YAML_FLOAT_PATTERN = new RegExp(// 2.5e4, 2.5 and integers
"^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function $68d37aac8bca33d7$var$resolveYamlFloat(data) {
    if (data === null) return false;
    if (!$68d37aac8bca33d7$var$YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    data[data.length - 1] === "_") return false;
    return true;
}
function $68d37aac8bca33d7$var$constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    if ("+-".indexOf(value[0]) >= 0) value = value.slice(1);
    if (value === ".inf") return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    else if (value === ".nan") return NaN;
    return sign * parseFloat(value, 10);
}
var $68d37aac8bca33d7$var$SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function $68d37aac8bca33d7$var$representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) switch(style){
        case "lowercase":
            return ".nan";
        case "uppercase":
            return ".NAN";
        case "camelcase":
            return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === object) switch(style){
        case "lowercase":
            return ".inf";
        case "uppercase":
            return ".INF";
        case "camelcase":
            return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === object) switch(style){
        case "lowercase":
            return "-.inf";
        case "uppercase":
            return "-.INF";
        case "camelcase":
            return "-.Inf";
    }
    else if ($68d37aac8bca33d7$var$common.isNegativeZero(object)) return "-0.0";
    res = object.toString(10);
    return $68d37aac8bca33d7$var$SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function $68d37aac8bca33d7$var$isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || $68d37aac8bca33d7$var$common.isNegativeZero(object));
}
var $68d37aac8bca33d7$var$float = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlFloat,
    construct: $68d37aac8bca33d7$var$constructYamlFloat,
    predicate: $68d37aac8bca33d7$var$isFloat,
    represent: $68d37aac8bca33d7$var$representYamlFloat,
    defaultStyle: "lowercase"
});
var $68d37aac8bca33d7$var$json = $68d37aac8bca33d7$var$failsafe.extend({
    implicit: [
        $68d37aac8bca33d7$var$_null,
        $68d37aac8bca33d7$var$bool,
        $68d37aac8bca33d7$var$int,
        $68d37aac8bca33d7$var$float
    ]
});
var $68d37aac8bca33d7$var$core = $68d37aac8bca33d7$var$json;
var $68d37aac8bca33d7$var$YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var $68d37aac8bca33d7$var$YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function $68d37aac8bca33d7$var$resolveYamlTimestamp(data) {
    if (data === null) return false;
    if ($68d37aac8bca33d7$var$YAML_DATE_REGEXP.exec(data) !== null) return true;
    if ($68d37aac8bca33d7$var$YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
function $68d37aac8bca33d7$var$constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = $68d37aac8bca33d7$var$YAML_DATE_REGEXP.exec(data);
    if (match === null) match = $68d37aac8bca33d7$var$YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) throw new Error("Date resolve error");
    year = +match[1];
    month = +match[2] - 1;
    day = +match[3];
    if (!match[4]) return new Date(Date.UTC(year, month, day));
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while(fraction.length < 3)fraction += "0";
        fraction = +fraction;
    }
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-") delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date.setTime(date.getTime() - delta);
    return date;
}
function $68d37aac8bca33d7$var$representYamlTimestamp(object) {
    return object.toISOString();
}
var $68d37aac8bca33d7$var$timestamp = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlTimestamp,
    construct: $68d37aac8bca33d7$var$constructYamlTimestamp,
    instanceOf: Date,
    represent: $68d37aac8bca33d7$var$representYamlTimestamp
});
function $68d37aac8bca33d7$var$resolveYamlMerge(data) {
    return data === "<<" || data === null;
}
var $68d37aac8bca33d7$var$merge = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlMerge
});
var $68d37aac8bca33d7$var$BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function $68d37aac8bca33d7$var$resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map2 = $68d37aac8bca33d7$var$BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        code = map2.indexOf(data.charAt(idx));
        if (code > 64) continue;
        if (code < 0) return false;
        bitlen += 6;
    }
    return bitlen % 8 === 0;
}
function $68d37aac8bca33d7$var$constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = $68d37aac8bca33d7$var$BASE64_MAP, bits = 0, result = [];
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 255);
            result.push(bits >> 8 & 255);
            result.push(bits & 255);
        }
        bits = bits << 6 | map2.indexOf(input.charAt(idx));
    }
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
    } else if (tailbits === 12) result.push(bits >> 4 & 255);
    return new Uint8Array(result);
}
function $68d37aac8bca33d7$var$representYamlBinary(object) {
    var result = "", bits = 0, idx, tail, max = object.length, map2 = $68d37aac8bca33d7$var$BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map2[bits >> 18 & 63];
            result += map2[bits >> 12 & 63];
            result += map2[bits >> 6 & 63];
            result += map2[bits & 63];
        }
        bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
        result += map2[bits >> 18 & 63];
        result += map2[bits >> 12 & 63];
        result += map2[bits >> 6 & 63];
        result += map2[bits & 63];
    } else if (tail === 2) {
        result += map2[bits >> 10 & 63];
        result += map2[bits >> 4 & 63];
        result += map2[bits << 2 & 63];
        result += map2[64];
    } else if (tail === 1) {
        result += map2[bits >> 2 & 63];
        result += map2[bits << 4 & 63];
        result += map2[64];
        result += map2[64];
    }
    return result;
}
function $68d37aac8bca33d7$var$isBinary(obj) {
    return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var $68d37aac8bca33d7$var$binary = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: $68d37aac8bca33d7$var$resolveYamlBinary,
    construct: $68d37aac8bca33d7$var$constructYamlBinary,
    predicate: $68d37aac8bca33d7$var$isBinary,
    represent: $68d37aac8bca33d7$var$representYamlBinary
});
var $68d37aac8bca33d7$var$_hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var $68d37aac8bca33d7$var$_toString$2 = Object.prototype.toString;
function $68d37aac8bca33d7$var$resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        pairHasKey = false;
        if ($68d37aac8bca33d7$var$_toString$2.call(pair) !== "[object Object]") return false;
        for(pairKey in pair)if ($68d37aac8bca33d7$var$_hasOwnProperty$3.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true;
            else return false;
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
function $68d37aac8bca33d7$var$constructYamlOmap(data) {
    return data !== null ? data : [];
}
var $68d37aac8bca33d7$var$omap = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: $68d37aac8bca33d7$var$resolveYamlOmap,
    construct: $68d37aac8bca33d7$var$constructYamlOmap
});
var $68d37aac8bca33d7$var$_toString$1 = Object.prototype.toString;
function $68d37aac8bca33d7$var$resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        if ($68d37aac8bca33d7$var$_toString$1.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
function $68d37aac8bca33d7$var$constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
var $68d37aac8bca33d7$var$pairs = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: $68d37aac8bca33d7$var$resolveYamlPairs,
    construct: $68d37aac8bca33d7$var$constructYamlPairs
});
var $68d37aac8bca33d7$var$_hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function $68d37aac8bca33d7$var$resolveYamlSet(data) {
    if (data === null) return true;
    var key, object = data;
    for(key in object)if ($68d37aac8bca33d7$var$_hasOwnProperty$2.call(object, key)) {
        if (object[key] !== null) return false;
    }
    return true;
}
function $68d37aac8bca33d7$var$constructYamlSet(data) {
    return data !== null ? data : {};
}
var $68d37aac8bca33d7$var$set = new $68d37aac8bca33d7$var$type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: $68d37aac8bca33d7$var$resolveYamlSet,
    construct: $68d37aac8bca33d7$var$constructYamlSet
});
var $68d37aac8bca33d7$var$_default = $68d37aac8bca33d7$var$core.extend({
    implicit: [
        $68d37aac8bca33d7$var$timestamp,
        $68d37aac8bca33d7$var$merge
    ],
    explicit: [
        $68d37aac8bca33d7$var$binary,
        $68d37aac8bca33d7$var$omap,
        $68d37aac8bca33d7$var$pairs,
        $68d37aac8bca33d7$var$set
    ]
});
var $68d37aac8bca33d7$var$_hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var $68d37aac8bca33d7$var$CONTEXT_FLOW_IN = 1;
var $68d37aac8bca33d7$var$CONTEXT_FLOW_OUT = 2;
var $68d37aac8bca33d7$var$CONTEXT_BLOCK_IN = 3;
var $68d37aac8bca33d7$var$CONTEXT_BLOCK_OUT = 4;
var $68d37aac8bca33d7$var$CHOMPING_CLIP = 1;
var $68d37aac8bca33d7$var$CHOMPING_STRIP = 2;
var $68d37aac8bca33d7$var$CHOMPING_KEEP = 3;
var $68d37aac8bca33d7$var$PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var $68d37aac8bca33d7$var$PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var $68d37aac8bca33d7$var$PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var $68d37aac8bca33d7$var$PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var $68d37aac8bca33d7$var$PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function $68d37aac8bca33d7$var$_class(obj) {
    return Object.prototype.toString.call(obj);
}
function $68d37aac8bca33d7$var$is_EOL(c) {
    return c === 10 || c === 13;
}
function $68d37aac8bca33d7$var$is_WHITE_SPACE(c) {
    return c === 9 || c === 32;
}
function $68d37aac8bca33d7$var$is_WS_OR_EOL(c) {
    return c === 9 || c === 32 || c === 10 || c === 13;
}
function $68d37aac8bca33d7$var$is_FLOW_INDICATOR(c) {
    return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function $68d37aac8bca33d7$var$fromHexCode(c) {
    var lc;
    if (48 <= c && c <= 57) return c - 48;
    lc = c | 32;
    if (97 <= lc && lc <= 102) return lc - 97 + 10;
    return -1;
}
function $68d37aac8bca33d7$var$escapedHexLen(c) {
    if (c === 120) return 2;
    if (c === 117) return 4;
    if (c === 85) return 8;
    return 0;
}
function $68d37aac8bca33d7$var$fromDecimalCode(c) {
    if (48 <= c && c <= 57) return c - 48;
    return -1;
}
function $68d37aac8bca33d7$var$simpleEscapeSequence(c) {
    return c === 48 ? "\x00" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1b" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xa0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function $68d37aac8bca33d7$var$charFromCodepoint(c) {
    if (c <= 65535) return String.fromCharCode(c);
    return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
var $68d37aac8bca33d7$var$simpleEscapeCheck = new Array(256);
var $68d37aac8bca33d7$var$simpleEscapeMap = new Array(256);
for(var $68d37aac8bca33d7$var$i = 0; $68d37aac8bca33d7$var$i < 256; $68d37aac8bca33d7$var$i++){
    $68d37aac8bca33d7$var$simpleEscapeCheck[$68d37aac8bca33d7$var$i] = $68d37aac8bca33d7$var$simpleEscapeSequence($68d37aac8bca33d7$var$i) ? 1 : 0;
    $68d37aac8bca33d7$var$simpleEscapeMap[$68d37aac8bca33d7$var$i] = $68d37aac8bca33d7$var$simpleEscapeSequence($68d37aac8bca33d7$var$i);
}
function $68d37aac8bca33d7$var$State$1(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || $68d37aac8bca33d7$var$_default;
    this.onWarning = options["onWarning"] || null;
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
}
function $68d37aac8bca33d7$var$generateError(state2, message) {
    var mark = {
        name: state2.filename,
        buffer: state2.input.slice(0, -1),
        // omit trailing \0
        position: state2.position,
        line: state2.line,
        column: state2.position - state2.lineStart
    };
    mark.snippet = $68d37aac8bca33d7$var$snippet(mark);
    return new $68d37aac8bca33d7$var$exception(message, mark);
}
function $68d37aac8bca33d7$var$throwError(state2, message) {
    throw $68d37aac8bca33d7$var$generateError(state2, message);
}
function $68d37aac8bca33d7$var$throwWarning(state2, message) {
    if (state2.onWarning) state2.onWarning.call(null, $68d37aac8bca33d7$var$generateError(state2, message));
}
var $68d37aac8bca33d7$var$directiveHandlers = {
    YAML: function handleYamlDirective(state2, name, args) {
        var match, major, minor;
        if (state2.version !== null) $68d37aac8bca33d7$var$throwError(state2, "duplication of %YAML directive");
        if (args.length !== 1) $68d37aac8bca33d7$var$throwError(state2, "YAML directive accepts exactly one argument");
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) $68d37aac8bca33d7$var$throwError(state2, "ill-formed argument of the YAML directive");
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) $68d37aac8bca33d7$var$throwError(state2, "unacceptable YAML version of the document");
        state2.version = args[0];
        state2.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) $68d37aac8bca33d7$var$throwWarning(state2, "unsupported YAML version of the document");
    },
    TAG: function handleTagDirective(state2, name, args) {
        var handle, prefix;
        if (args.length !== 2) $68d37aac8bca33d7$var$throwError(state2, "TAG directive accepts exactly two arguments");
        handle = args[0];
        prefix = args[1];
        if (!$68d37aac8bca33d7$var$PATTERN_TAG_HANDLE.test(handle)) $68d37aac8bca33d7$var$throwError(state2, "ill-formed tag handle (first argument) of the TAG directive");
        if ($68d37aac8bca33d7$var$_hasOwnProperty$1.call(state2.tagMap, handle)) $68d37aac8bca33d7$var$throwError(state2, 'there is a previously declared suffix for "' + handle + '" tag handle');
        if (!$68d37aac8bca33d7$var$PATTERN_TAG_URI.test(prefix)) $68d37aac8bca33d7$var$throwError(state2, "ill-formed tag prefix (second argument) of the TAG directive");
        try {
            prefix = decodeURIComponent(prefix);
        } catch (err) {
            $68d37aac8bca33d7$var$throwError(state2, "tag prefix is malformed: " + prefix);
        }
        state2.tagMap[handle] = prefix;
    }
};
function $68d37aac8bca33d7$var$captureSegment(state2, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state2.input.slice(start, end);
        if (checkJson) for(_position = 0, _length = _result.length; _position < _length; _position += 1){
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) $68d37aac8bca33d7$var$throwError(state2, "expected valid JSON character");
        }
        else if ($68d37aac8bca33d7$var$PATTERN_NON_PRINTABLE.test(_result)) $68d37aac8bca33d7$var$throwError(state2, "the stream contains non-printable characters");
        state2.result += _result;
    }
}
function $68d37aac8bca33d7$var$mergeMappings(state2, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!$68d37aac8bca33d7$var$common.isObject(source)) $68d37aac8bca33d7$var$throwError(state2, "cannot merge mappings; the provided source object is unacceptable");
    sourceKeys = Object.keys(source);
    for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
        key = sourceKeys[index];
        if (!$68d37aac8bca33d7$var$_hasOwnProperty$1.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
        }
    }
}
function $68d37aac8bca33d7$var$storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for(index = 0, quantity = keyNode.length; index < quantity; index += 1){
            if (Array.isArray(keyNode[index])) $68d37aac8bca33d7$var$throwError(state2, "nested arrays are not supported inside keys");
            if (typeof keyNode === "object" && $68d37aac8bca33d7$var$_class(keyNode[index]) === "[object Object]") keyNode[index] = "[object Object]";
        }
    }
    if (typeof keyNode === "object" && $68d37aac8bca33d7$var$_class(keyNode) === "[object Object]") keyNode = "[object Object]";
    keyNode = String(keyNode);
    if (_result === null) _result = {};
    if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) for(index = 0, quantity = valueNode.length; index < quantity; index += 1)$68d37aac8bca33d7$var$mergeMappings(state2, _result, valueNode[index], overridableKeys);
        else $68d37aac8bca33d7$var$mergeMappings(state2, _result, valueNode, overridableKeys);
    } else {
        if (!state2.json && !$68d37aac8bca33d7$var$_hasOwnProperty$1.call(overridableKeys, keyNode) && $68d37aac8bca33d7$var$_hasOwnProperty$1.call(_result, keyNode)) {
            state2.line = startLine || state2.line;
            state2.lineStart = startLineStart || state2.lineStart;
            state2.position = startPos || state2.position;
            $68d37aac8bca33d7$var$throwError(state2, "duplicated mapping key");
        }
        if (keyNode === "__proto__") Object.defineProperty(_result, keyNode, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: valueNode
        });
        else _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
    }
    return _result;
}
function $68d37aac8bca33d7$var$readLineBreak(state2) {
    var ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch === 10) state2.position++;
    else if (ch === 13) {
        state2.position++;
        if (state2.input.charCodeAt(state2.position) === 10) state2.position++;
    } else $68d37aac8bca33d7$var$throwError(state2, "a line break is expected");
    state2.line += 1;
    state2.lineStart = state2.position;
    state2.firstTabInLine = -1;
}
function $68d37aac8bca33d7$var$skipSeparationSpace(state2, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state2.input.charCodeAt(state2.position);
    while(ch !== 0){
        while($68d37aac8bca33d7$var$is_WHITE_SPACE(ch)){
            if (ch === 9 && state2.firstTabInLine === -1) state2.firstTabInLine = state2.position;
            ch = state2.input.charCodeAt(++state2.position);
        }
        if (allowComments && ch === 35) do ch = state2.input.charCodeAt(++state2.position);
        while (ch !== 10 && ch !== 13 && ch !== 0);
        if ($68d37aac8bca33d7$var$is_EOL(ch)) {
            $68d37aac8bca33d7$var$readLineBreak(state2);
            ch = state2.input.charCodeAt(state2.position);
            lineBreaks++;
            state2.lineIndent = 0;
            while(ch === 32){
                state2.lineIndent++;
                ch = state2.input.charCodeAt(++state2.position);
            }
        } else break;
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state2.lineIndent < checkIndent) $68d37aac8bca33d7$var$throwWarning(state2, "deficient indentation");
    return lineBreaks;
}
function $68d37aac8bca33d7$var$testDocumentSeparator(state2) {
    var _position = state2.position, ch;
    ch = state2.input.charCodeAt(_position);
    if ((ch === 45 || ch === 46) && ch === state2.input.charCodeAt(_position + 1) && ch === state2.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state2.input.charCodeAt(_position);
        if (ch === 0 || $68d37aac8bca33d7$var$is_WS_OR_EOL(ch)) return true;
    }
    return false;
}
function $68d37aac8bca33d7$var$writeFoldedLines(state2, count) {
    if (count === 1) state2.result += " ";
    else if (count > 1) state2.result += $68d37aac8bca33d7$var$common.repeat("\n", count - 1);
}
function $68d37aac8bca33d7$var$readPlainScalar(state2, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state2.kind, _result = state2.result, ch;
    ch = state2.input.charCodeAt(state2.position);
    if ($68d37aac8bca33d7$var$is_WS_OR_EOL(ch) || $68d37aac8bca33d7$var$is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) return false;
    if (ch === 63 || ch === 45) {
        following = state2.input.charCodeAt(state2.position + 1);
        if ($68d37aac8bca33d7$var$is_WS_OR_EOL(following) || withinFlowCollection && $68d37aac8bca33d7$var$is_FLOW_INDICATOR(following)) return false;
    }
    state2.kind = "scalar";
    state2.result = "";
    captureStart = captureEnd = state2.position;
    hasPendingContent = false;
    while(ch !== 0){
        if (ch === 58) {
            following = state2.input.charCodeAt(state2.position + 1);
            if ($68d37aac8bca33d7$var$is_WS_OR_EOL(following) || withinFlowCollection && $68d37aac8bca33d7$var$is_FLOW_INDICATOR(following)) break;
        } else if (ch === 35) {
            preceding = state2.input.charCodeAt(state2.position - 1);
            if ($68d37aac8bca33d7$var$is_WS_OR_EOL(preceding)) break;
        } else if (state2.position === state2.lineStart && $68d37aac8bca33d7$var$testDocumentSeparator(state2) || withinFlowCollection && $68d37aac8bca33d7$var$is_FLOW_INDICATOR(ch)) break;
        else if ($68d37aac8bca33d7$var$is_EOL(ch)) {
            _line = state2.line;
            _lineStart = state2.lineStart;
            _lineIndent = state2.lineIndent;
            $68d37aac8bca33d7$var$skipSeparationSpace(state2, false, -1);
            if (state2.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state2.input.charCodeAt(state2.position);
                continue;
            } else {
                state2.position = captureEnd;
                state2.line = _line;
                state2.lineStart = _lineStart;
                state2.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            $68d37aac8bca33d7$var$captureSegment(state2, captureStart, captureEnd, false);
            $68d37aac8bca33d7$var$writeFoldedLines(state2, state2.line - _line);
            captureStart = captureEnd = state2.position;
            hasPendingContent = false;
        }
        if (!$68d37aac8bca33d7$var$is_WHITE_SPACE(ch)) captureEnd = state2.position + 1;
        ch = state2.input.charCodeAt(++state2.position);
    }
    $68d37aac8bca33d7$var$captureSegment(state2, captureStart, captureEnd, false);
    if (state2.result) return true;
    state2.kind = _kind;
    state2.result = _result;
    return false;
}
function $68d37aac8bca33d7$var$readSingleQuotedScalar(state2, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state2.input.charCodeAt(state2.position);
    if (ch !== 39) return false;
    state2.kind = "scalar";
    state2.result = "";
    state2.position++;
    captureStart = captureEnd = state2.position;
    while((ch = state2.input.charCodeAt(state2.position)) !== 0){
        if (ch === 39) {
            $68d37aac8bca33d7$var$captureSegment(state2, captureStart, state2.position, true);
            ch = state2.input.charCodeAt(++state2.position);
            if (ch === 39) {
                captureStart = state2.position;
                state2.position++;
                captureEnd = state2.position;
            } else return true;
        } else if ($68d37aac8bca33d7$var$is_EOL(ch)) {
            $68d37aac8bca33d7$var$captureSegment(state2, captureStart, captureEnd, true);
            $68d37aac8bca33d7$var$writeFoldedLines(state2, $68d37aac8bca33d7$var$skipSeparationSpace(state2, false, nodeIndent));
            captureStart = captureEnd = state2.position;
        } else if (state2.position === state2.lineStart && $68d37aac8bca33d7$var$testDocumentSeparator(state2)) $68d37aac8bca33d7$var$throwError(state2, "unexpected end of the document within a single quoted scalar");
        else {
            state2.position++;
            captureEnd = state2.position;
        }
    }
    $68d37aac8bca33d7$var$throwError(state2, "unexpected end of the stream within a single quoted scalar");
}
function $68d37aac8bca33d7$var$readDoubleQuotedScalar(state2, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch !== 34) return false;
    state2.kind = "scalar";
    state2.result = "";
    state2.position++;
    captureStart = captureEnd = state2.position;
    while((ch = state2.input.charCodeAt(state2.position)) !== 0){
        if (ch === 34) {
            $68d37aac8bca33d7$var$captureSegment(state2, captureStart, state2.position, true);
            state2.position++;
            return true;
        } else if (ch === 92) {
            $68d37aac8bca33d7$var$captureSegment(state2, captureStart, state2.position, true);
            ch = state2.input.charCodeAt(++state2.position);
            if ($68d37aac8bca33d7$var$is_EOL(ch)) $68d37aac8bca33d7$var$skipSeparationSpace(state2, false, nodeIndent);
            else if (ch < 256 && $68d37aac8bca33d7$var$simpleEscapeCheck[ch]) {
                state2.result += $68d37aac8bca33d7$var$simpleEscapeMap[ch];
                state2.position++;
            } else if ((tmp = $68d37aac8bca33d7$var$escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for(; hexLength > 0; hexLength--){
                    ch = state2.input.charCodeAt(++state2.position);
                    if ((tmp = $68d37aac8bca33d7$var$fromHexCode(ch)) >= 0) hexResult = (hexResult << 4) + tmp;
                    else $68d37aac8bca33d7$var$throwError(state2, "expected hexadecimal character");
                }
                state2.result += $68d37aac8bca33d7$var$charFromCodepoint(hexResult);
                state2.position++;
            } else $68d37aac8bca33d7$var$throwError(state2, "unknown escape sequence");
            captureStart = captureEnd = state2.position;
        } else if ($68d37aac8bca33d7$var$is_EOL(ch)) {
            $68d37aac8bca33d7$var$captureSegment(state2, captureStart, captureEnd, true);
            $68d37aac8bca33d7$var$writeFoldedLines(state2, $68d37aac8bca33d7$var$skipSeparationSpace(state2, false, nodeIndent));
            captureStart = captureEnd = state2.position;
        } else if (state2.position === state2.lineStart && $68d37aac8bca33d7$var$testDocumentSeparator(state2)) $68d37aac8bca33d7$var$throwError(state2, "unexpected end of the document within a double quoted scalar");
        else {
            state2.position++;
            captureEnd = state2.position;
        }
    }
    $68d37aac8bca33d7$var$throwError(state2, "unexpected end of the stream within a double quoted scalar");
}
function $68d37aac8bca33d7$var$readFlowCollection(state2, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state2.tag, _result, _anchor = state2.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
    } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
    } else return false;
    if (state2.anchor !== null) state2.anchorMap[state2.anchor] = _result;
    ch = state2.input.charCodeAt(++state2.position);
    while(ch !== 0){
        $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, nodeIndent);
        ch = state2.input.charCodeAt(state2.position);
        if (ch === terminator) {
            state2.position++;
            state2.tag = _tag;
            state2.anchor = _anchor;
            state2.kind = isMapping ? "mapping" : "sequence";
            state2.result = _result;
            return true;
        } else if (!readNext) $68d37aac8bca33d7$var$throwError(state2, "missed comma between flow collection entries");
        else if (ch === 44) $68d37aac8bca33d7$var$throwError(state2, "expected the node content, but found ','");
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
            following = state2.input.charCodeAt(state2.position + 1);
            if ($68d37aac8bca33d7$var$is_WS_OR_EOL(following)) {
                isPair = isExplicitPair = true;
                state2.position++;
                $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, nodeIndent);
            }
        }
        _line = state2.line;
        _lineStart = state2.lineStart;
        _pos = state2.position;
        $68d37aac8bca33d7$var$composeNode(state2, nodeIndent, $68d37aac8bca33d7$var$CONTEXT_FLOW_IN, false, true);
        keyTag = state2.tag;
        keyNode = state2.result;
        $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, nodeIndent);
        ch = state2.input.charCodeAt(state2.position);
        if ((isExplicitPair || state2.line === _line) && ch === 58) {
            isPair = true;
            ch = state2.input.charCodeAt(++state2.position);
            $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, nodeIndent);
            $68d37aac8bca33d7$var$composeNode(state2, nodeIndent, $68d37aac8bca33d7$var$CONTEXT_FLOW_IN, false, true);
            valueNode = state2.result;
        }
        if (isMapping) $68d37aac8bca33d7$var$storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        else if (isPair) _result.push($68d37aac8bca33d7$var$storeMappingPair(state2, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        else _result.push(keyNode);
        $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, nodeIndent);
        ch = state2.input.charCodeAt(state2.position);
        if (ch === 44) {
            readNext = true;
            ch = state2.input.charCodeAt(++state2.position);
        } else readNext = false;
    }
    $68d37aac8bca33d7$var$throwError(state2, "unexpected end of the stream within a flow collection");
}
function $68d37aac8bca33d7$var$readBlockScalar(state2, nodeIndent) {
    var captureStart, folding, chomping = $68d37aac8bca33d7$var$CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch === 124) folding = false;
    else if (ch === 62) folding = true;
    else return false;
    state2.kind = "scalar";
    state2.result = "";
    while(ch !== 0){
        ch = state2.input.charCodeAt(++state2.position);
        if (ch === 43 || ch === 45) {
            if ($68d37aac8bca33d7$var$CHOMPING_CLIP === chomping) chomping = ch === 43 ? $68d37aac8bca33d7$var$CHOMPING_KEEP : $68d37aac8bca33d7$var$CHOMPING_STRIP;
            else $68d37aac8bca33d7$var$throwError(state2, "repeat of a chomping mode identifier");
        } else if ((tmp = $68d37aac8bca33d7$var$fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) $68d37aac8bca33d7$var$throwError(state2, "bad explicit indentation width of a block scalar; it cannot be less than one");
            else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else $68d37aac8bca33d7$var$throwError(state2, "repeat of an indentation width identifier");
        } else break;
    }
    if ($68d37aac8bca33d7$var$is_WHITE_SPACE(ch)) {
        do ch = state2.input.charCodeAt(++state2.position);
        while ($68d37aac8bca33d7$var$is_WHITE_SPACE(ch));
        if (ch === 35) do ch = state2.input.charCodeAt(++state2.position);
        while (!$68d37aac8bca33d7$var$is_EOL(ch) && ch !== 0);
    }
    while(ch !== 0){
        $68d37aac8bca33d7$var$readLineBreak(state2);
        state2.lineIndent = 0;
        ch = state2.input.charCodeAt(state2.position);
        while((!detectedIndent || state2.lineIndent < textIndent) && ch === 32){
            state2.lineIndent++;
            ch = state2.input.charCodeAt(++state2.position);
        }
        if (!detectedIndent && state2.lineIndent > textIndent) textIndent = state2.lineIndent;
        if ($68d37aac8bca33d7$var$is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        if (state2.lineIndent < textIndent) {
            if (chomping === $68d37aac8bca33d7$var$CHOMPING_KEEP) state2.result += $68d37aac8bca33d7$var$common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            else if (chomping === $68d37aac8bca33d7$var$CHOMPING_CLIP) {
                if (didReadContent) state2.result += "\n";
            }
            break;
        }
        if (folding) {
            if ($68d37aac8bca33d7$var$is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                state2.result += $68d37aac8bca33d7$var$common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state2.result += $68d37aac8bca33d7$var$common.repeat("\n", emptyLines + 1);
            } else if (emptyLines === 0) {
                if (didReadContent) state2.result += " ";
            } else state2.result += $68d37aac8bca33d7$var$common.repeat("\n", emptyLines);
        } else state2.result += $68d37aac8bca33d7$var$common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state2.position;
        while(!$68d37aac8bca33d7$var$is_EOL(ch) && ch !== 0)ch = state2.input.charCodeAt(++state2.position);
        $68d37aac8bca33d7$var$captureSegment(state2, captureStart, state2.position, false);
    }
    return true;
}
function $68d37aac8bca33d7$var$readBlockSequence(state2, nodeIndent) {
    var _line, _tag = state2.tag, _anchor = state2.anchor, _result = [], following, detected = false, ch;
    if (state2.firstTabInLine !== -1) return false;
    if (state2.anchor !== null) state2.anchorMap[state2.anchor] = _result;
    ch = state2.input.charCodeAt(state2.position);
    while(ch !== 0){
        if (state2.firstTabInLine !== -1) {
            state2.position = state2.firstTabInLine;
            $68d37aac8bca33d7$var$throwError(state2, "tab characters must not be used in indentation");
        }
        if (ch !== 45) break;
        following = state2.input.charCodeAt(state2.position + 1);
        if (!$68d37aac8bca33d7$var$is_WS_OR_EOL(following)) break;
        detected = true;
        state2.position++;
        if ($68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1)) {
            if (state2.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state2.input.charCodeAt(state2.position);
                continue;
            }
        }
        _line = state2.line;
        $68d37aac8bca33d7$var$composeNode(state2, nodeIndent, $68d37aac8bca33d7$var$CONTEXT_BLOCK_IN, false, true);
        _result.push(state2.result);
        $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
        ch = state2.input.charCodeAt(state2.position);
        if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) $68d37aac8bca33d7$var$throwError(state2, "bad indentation of a sequence entry");
        else if (state2.lineIndent < nodeIndent) break;
    }
    if (detected) {
        state2.tag = _tag;
        state2.anchor = _anchor;
        state2.kind = "sequence";
        state2.result = _result;
        return true;
    }
    return false;
}
function $68d37aac8bca33d7$var$readBlockMapping(state2, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state2.tag, _anchor = state2.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state2.firstTabInLine !== -1) return false;
    if (state2.anchor !== null) state2.anchorMap[state2.anchor] = _result;
    ch = state2.input.charCodeAt(state2.position);
    while(ch !== 0){
        if (!atExplicitKey && state2.firstTabInLine !== -1) {
            state2.position = state2.firstTabInLine;
            $68d37aac8bca33d7$var$throwError(state2, "tab characters must not be used in indentation");
        }
        following = state2.input.charCodeAt(state2.position + 1);
        _line = state2.line;
        if ((ch === 63 || ch === 58) && $68d37aac8bca33d7$var$is_WS_OR_EOL(following)) {
            if (ch === 63) {
                if (atExplicitKey) {
                    $68d37aac8bca33d7$var$storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                    keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                atExplicitKey = false;
                allowCompact = true;
            } else $68d37aac8bca33d7$var$throwError(state2, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            state2.position += 1;
            ch = following;
        } else {
            _keyLine = state2.line;
            _keyLineStart = state2.lineStart;
            _keyPos = state2.position;
            if (!$68d37aac8bca33d7$var$composeNode(state2, flowIndent, $68d37aac8bca33d7$var$CONTEXT_FLOW_OUT, false, true)) break;
            if (state2.line === _line) {
                ch = state2.input.charCodeAt(state2.position);
                while($68d37aac8bca33d7$var$is_WHITE_SPACE(ch))ch = state2.input.charCodeAt(++state2.position);
                if (ch === 58) {
                    ch = state2.input.charCodeAt(++state2.position);
                    if (!$68d37aac8bca33d7$var$is_WS_OR_EOL(ch)) $68d37aac8bca33d7$var$throwError(state2, "a whitespace character is expected after the key-value separator within a block mapping");
                    if (atExplicitKey) {
                        $68d37aac8bca33d7$var$storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state2.tag;
                    keyNode = state2.result;
                } else if (detected) $68d37aac8bca33d7$var$throwError(state2, "can not read an implicit mapping pair; a colon is missed");
                else {
                    state2.tag = _tag;
                    state2.anchor = _anchor;
                    return true;
                }
            } else if (detected) $68d37aac8bca33d7$var$throwError(state2, "can not read a block mapping entry; a multiline key may not be an implicit key");
            else {
                state2.tag = _tag;
                state2.anchor = _anchor;
                return true;
            }
        }
        if (state2.line === _line || state2.lineIndent > nodeIndent) {
            if (atExplicitKey) {
                _keyLine = state2.line;
                _keyLineStart = state2.lineStart;
                _keyPos = state2.position;
            }
            if ($68d37aac8bca33d7$var$composeNode(state2, nodeIndent, $68d37aac8bca33d7$var$CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) keyNode = state2.result;
                else valueNode = state2.result;
            }
            if (!atExplicitKey) {
                $68d37aac8bca33d7$var$storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
            }
            $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
            ch = state2.input.charCodeAt(state2.position);
        }
        if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) $68d37aac8bca33d7$var$throwError(state2, "bad indentation of a mapping entry");
        else if (state2.lineIndent < nodeIndent) break;
    }
    if (atExplicitKey) $68d37aac8bca33d7$var$storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    if (detected) {
        state2.tag = _tag;
        state2.anchor = _anchor;
        state2.kind = "mapping";
        state2.result = _result;
    }
    return detected;
}
function $68d37aac8bca33d7$var$readTagProperty(state2) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch !== 33) return false;
    if (state2.tag !== null) $68d37aac8bca33d7$var$throwError(state2, "duplication of a tag property");
    ch = state2.input.charCodeAt(++state2.position);
    if (ch === 60) {
        isVerbatim = true;
        ch = state2.input.charCodeAt(++state2.position);
    } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state2.input.charCodeAt(++state2.position);
    } else tagHandle = "!";
    _position = state2.position;
    if (isVerbatim) {
        do ch = state2.input.charCodeAt(++state2.position);
        while (ch !== 0 && ch !== 62);
        if (state2.position < state2.length) {
            tagName = state2.input.slice(_position, state2.position);
            ch = state2.input.charCodeAt(++state2.position);
        } else $68d37aac8bca33d7$var$throwError(state2, "unexpected end of the stream within a verbatim tag");
    } else {
        while(ch !== 0 && !$68d37aac8bca33d7$var$is_WS_OR_EOL(ch)){
            if (ch === 33) {
                if (!isNamed) {
                    tagHandle = state2.input.slice(_position - 1, state2.position + 1);
                    if (!$68d37aac8bca33d7$var$PATTERN_TAG_HANDLE.test(tagHandle)) $68d37aac8bca33d7$var$throwError(state2, "named tag handle cannot contain such characters");
                    isNamed = true;
                    _position = state2.position + 1;
                } else $68d37aac8bca33d7$var$throwError(state2, "tag suffix cannot contain exclamation marks");
            }
            ch = state2.input.charCodeAt(++state2.position);
        }
        tagName = state2.input.slice(_position, state2.position);
        if ($68d37aac8bca33d7$var$PATTERN_FLOW_INDICATORS.test(tagName)) $68d37aac8bca33d7$var$throwError(state2, "tag suffix cannot contain flow indicator characters");
    }
    if (tagName && !$68d37aac8bca33d7$var$PATTERN_TAG_URI.test(tagName)) $68d37aac8bca33d7$var$throwError(state2, "tag name cannot contain such characters: " + tagName);
    try {
        tagName = decodeURIComponent(tagName);
    } catch (err) {
        $68d37aac8bca33d7$var$throwError(state2, "tag name is malformed: " + tagName);
    }
    if (isVerbatim) state2.tag = tagName;
    else if ($68d37aac8bca33d7$var$_hasOwnProperty$1.call(state2.tagMap, tagHandle)) state2.tag = state2.tagMap[tagHandle] + tagName;
    else if (tagHandle === "!") state2.tag = "!" + tagName;
    else if (tagHandle === "!!") state2.tag = "tag:yaml.org,2002:" + tagName;
    else $68d37aac8bca33d7$var$throwError(state2, 'undeclared tag handle "' + tagHandle + '"');
    return true;
}
function $68d37aac8bca33d7$var$readAnchorProperty(state2) {
    var _position, ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch !== 38) return false;
    if (state2.anchor !== null) $68d37aac8bca33d7$var$throwError(state2, "duplication of an anchor property");
    ch = state2.input.charCodeAt(++state2.position);
    _position = state2.position;
    while(ch !== 0 && !$68d37aac8bca33d7$var$is_WS_OR_EOL(ch) && !$68d37aac8bca33d7$var$is_FLOW_INDICATOR(ch))ch = state2.input.charCodeAt(++state2.position);
    if (state2.position === _position) $68d37aac8bca33d7$var$throwError(state2, "name of an anchor node must contain at least one character");
    state2.anchor = state2.input.slice(_position, state2.position);
    return true;
}
function $68d37aac8bca33d7$var$readAlias(state2) {
    var _position, alias, ch;
    ch = state2.input.charCodeAt(state2.position);
    if (ch !== 42) return false;
    ch = state2.input.charCodeAt(++state2.position);
    _position = state2.position;
    while(ch !== 0 && !$68d37aac8bca33d7$var$is_WS_OR_EOL(ch) && !$68d37aac8bca33d7$var$is_FLOW_INDICATOR(ch))ch = state2.input.charCodeAt(++state2.position);
    if (state2.position === _position) $68d37aac8bca33d7$var$throwError(state2, "name of an alias node must contain at least one character");
    alias = state2.input.slice(_position, state2.position);
    if (!$68d37aac8bca33d7$var$_hasOwnProperty$1.call(state2.anchorMap, alias)) $68d37aac8bca33d7$var$throwError(state2, 'unidentified alias "' + alias + '"');
    state2.result = state2.anchorMap[alias];
    $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
    return true;
}
function $68d37aac8bca33d7$var$composeNode(state2, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
    if (state2.listener !== null) state2.listener("open", state2);
    state2.tag = null;
    state2.anchor = null;
    state2.kind = null;
    state2.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = $68d37aac8bca33d7$var$CONTEXT_BLOCK_OUT === nodeContext || $68d37aac8bca33d7$var$CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
        if ($68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1)) {
            atNewLine = true;
            if (state2.lineIndent > parentIndent) indentStatus = 1;
            else if (state2.lineIndent === parentIndent) indentStatus = 0;
            else if (state2.lineIndent < parentIndent) indentStatus = -1;
        }
    }
    if (indentStatus === 1) {
        while($68d37aac8bca33d7$var$readTagProperty(state2) || $68d37aac8bca33d7$var$readAnchorProperty(state2))if ($68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state2.lineIndent > parentIndent) indentStatus = 1;
            else if (state2.lineIndent === parentIndent) indentStatus = 0;
            else if (state2.lineIndent < parentIndent) indentStatus = -1;
        } else allowBlockCollections = false;
    }
    if (allowBlockCollections) allowBlockCollections = atNewLine || allowCompact;
    if (indentStatus === 1 || $68d37aac8bca33d7$var$CONTEXT_BLOCK_OUT === nodeContext) {
        if ($68d37aac8bca33d7$var$CONTEXT_FLOW_IN === nodeContext || $68d37aac8bca33d7$var$CONTEXT_FLOW_OUT === nodeContext) flowIndent = parentIndent;
        else flowIndent = parentIndent + 1;
        blockIndent = state2.position - state2.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && ($68d37aac8bca33d7$var$readBlockSequence(state2, blockIndent) || $68d37aac8bca33d7$var$readBlockMapping(state2, blockIndent, flowIndent)) || $68d37aac8bca33d7$var$readFlowCollection(state2, flowIndent)) hasContent = true;
            else {
                if (allowBlockScalars && $68d37aac8bca33d7$var$readBlockScalar(state2, flowIndent) || $68d37aac8bca33d7$var$readSingleQuotedScalar(state2, flowIndent) || $68d37aac8bca33d7$var$readDoubleQuotedScalar(state2, flowIndent)) hasContent = true;
                else if ($68d37aac8bca33d7$var$readAlias(state2)) {
                    hasContent = true;
                    if (state2.tag !== null || state2.anchor !== null) $68d37aac8bca33d7$var$throwError(state2, "alias node should not have any properties");
                } else if ($68d37aac8bca33d7$var$readPlainScalar(state2, flowIndent, $68d37aac8bca33d7$var$CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state2.tag === null) state2.tag = "?";
                }
                if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
            }
        } else if (indentStatus === 0) hasContent = allowBlockCollections && $68d37aac8bca33d7$var$readBlockSequence(state2, blockIndent);
    }
    if (state2.tag === null) {
        if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
    } else if (state2.tag === "?") {
        if (state2.result !== null && state2.kind !== "scalar") $68d37aac8bca33d7$var$throwError(state2, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state2.kind + '"');
        for(typeIndex = 0, typeQuantity = state2.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
            type2 = state2.implicitTypes[typeIndex];
            if (type2.resolve(state2.result)) {
                state2.result = type2.construct(state2.result);
                state2.tag = type2.tag;
                if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
                break;
            }
        }
    } else if (state2.tag !== "!") {
        if ($68d37aac8bca33d7$var$_hasOwnProperty$1.call(state2.typeMap[state2.kind || "fallback"], state2.tag)) type2 = state2.typeMap[state2.kind || "fallback"][state2.tag];
        else {
            type2 = null;
            typeList = state2.typeMap.multi[state2.kind || "fallback"];
            for(typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1)if (state2.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                type2 = typeList[typeIndex];
                break;
            }
        }
        if (!type2) $68d37aac8bca33d7$var$throwError(state2, "unknown tag !<" + state2.tag + ">");
        if (state2.result !== null && type2.kind !== state2.kind) $68d37aac8bca33d7$var$throwError(state2, "unacceptable node kind for !<" + state2.tag + '> tag; it should be "' + type2.kind + '", not "' + state2.kind + '"');
        if (!type2.resolve(state2.result, state2.tag)) $68d37aac8bca33d7$var$throwError(state2, "cannot resolve a node with !<" + state2.tag + "> explicit tag");
        else {
            state2.result = type2.construct(state2.result, state2.tag);
            if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
        }
    }
    if (state2.listener !== null) state2.listener("close", state2);
    return state2.tag !== null || state2.anchor !== null || hasContent;
}
function $68d37aac8bca33d7$var$readDocument(state2) {
    var documentStart = state2.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state2.version = null;
    state2.checkLineBreaks = state2.legacy;
    state2.tagMap = /* @__PURE__ */ Object.create(null);
    state2.anchorMap = /* @__PURE__ */ Object.create(null);
    while((ch = state2.input.charCodeAt(state2.position)) !== 0){
        $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
        ch = state2.input.charCodeAt(state2.position);
        if (state2.lineIndent > 0 || ch !== 37) break;
        hasDirectives = true;
        ch = state2.input.charCodeAt(++state2.position);
        _position = state2.position;
        while(ch !== 0 && !$68d37aac8bca33d7$var$is_WS_OR_EOL(ch))ch = state2.input.charCodeAt(++state2.position);
        directiveName = state2.input.slice(_position, state2.position);
        directiveArgs = [];
        if (directiveName.length < 1) $68d37aac8bca33d7$var$throwError(state2, "directive name must not be less than one character in length");
        while(ch !== 0){
            while($68d37aac8bca33d7$var$is_WHITE_SPACE(ch))ch = state2.input.charCodeAt(++state2.position);
            if (ch === 35) {
                do ch = state2.input.charCodeAt(++state2.position);
                while (ch !== 0 && !$68d37aac8bca33d7$var$is_EOL(ch));
                break;
            }
            if ($68d37aac8bca33d7$var$is_EOL(ch)) break;
            _position = state2.position;
            while(ch !== 0 && !$68d37aac8bca33d7$var$is_WS_OR_EOL(ch))ch = state2.input.charCodeAt(++state2.position);
            directiveArgs.push(state2.input.slice(_position, state2.position));
        }
        if (ch !== 0) $68d37aac8bca33d7$var$readLineBreak(state2);
        if ($68d37aac8bca33d7$var$_hasOwnProperty$1.call($68d37aac8bca33d7$var$directiveHandlers, directiveName)) $68d37aac8bca33d7$var$directiveHandlers[directiveName](state2, directiveName, directiveArgs);
        else $68d37aac8bca33d7$var$throwWarning(state2, 'unknown document directive "' + directiveName + '"');
    }
    $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
    if (state2.lineIndent === 0 && state2.input.charCodeAt(state2.position) === 45 && state2.input.charCodeAt(state2.position + 1) === 45 && state2.input.charCodeAt(state2.position + 2) === 45) {
        state2.position += 3;
        $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
    } else if (hasDirectives) $68d37aac8bca33d7$var$throwError(state2, "directives end mark is expected");
    $68d37aac8bca33d7$var$composeNode(state2, state2.lineIndent - 1, $68d37aac8bca33d7$var$CONTEXT_BLOCK_OUT, false, true);
    $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
    if (state2.checkLineBreaks && $68d37aac8bca33d7$var$PATTERN_NON_ASCII_LINE_BREAKS.test(state2.input.slice(documentStart, state2.position))) $68d37aac8bca33d7$var$throwWarning(state2, "non-ASCII line breaks are interpreted as content");
    state2.documents.push(state2.result);
    if (state2.position === state2.lineStart && $68d37aac8bca33d7$var$testDocumentSeparator(state2)) {
        if (state2.input.charCodeAt(state2.position) === 46) {
            state2.position += 3;
            $68d37aac8bca33d7$var$skipSeparationSpace(state2, true, -1);
        }
        return;
    }
    if (state2.position < state2.length - 1) $68d37aac8bca33d7$var$throwError(state2, "end of the stream or a document separator is expected");
    else return;
}
function $68d37aac8bca33d7$var$loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) input += "\n";
        if (input.charCodeAt(0) === 65279) input = input.slice(1);
    }
    var state2 = new $68d37aac8bca33d7$var$State$1(input, options);
    var nullpos = input.indexOf("\x00");
    if (nullpos !== -1) {
        state2.position = nullpos;
        $68d37aac8bca33d7$var$throwError(state2, "null byte is not allowed in input");
    }
    state2.input += "\x00";
    while(state2.input.charCodeAt(state2.position) === 32){
        state2.lineIndent += 1;
        state2.position += 1;
    }
    while(state2.position < state2.length - 1)$68d37aac8bca33d7$var$readDocument(state2);
    return state2.documents;
}
function $68d37aac8bca33d7$var$loadAll$1(input, iterator2, options) {
    if (iterator2 !== null && typeof iterator2 === "object" && typeof options === "undefined") {
        options = iterator2;
        iterator2 = null;
    }
    var documents = $68d37aac8bca33d7$var$loadDocuments(input, options);
    if (typeof iterator2 !== "function") return documents;
    for(var index = 0, length = documents.length; index < length; index += 1)iterator2(documents[index]);
}
function $68d37aac8bca33d7$var$load$1(input, options) {
    var documents = $68d37aac8bca33d7$var$loadDocuments(input, options);
    if (documents.length === 0) return void 0;
    else if (documents.length === 1) return documents[0];
    throw new $68d37aac8bca33d7$var$exception("expected a single document in the stream, but found more");
}
var $68d37aac8bca33d7$var$loadAll_1 = $68d37aac8bca33d7$var$loadAll$1;
var $68d37aac8bca33d7$var$load_1 = $68d37aac8bca33d7$var$load$1;
var $68d37aac8bca33d7$var$loader$j = {
    loadAll: $68d37aac8bca33d7$var$loadAll_1,
    load: $68d37aac8bca33d7$var$load_1
};
var $68d37aac8bca33d7$var$FAILSAFE_SCHEMA = $68d37aac8bca33d7$var$failsafe;
var $68d37aac8bca33d7$var$load = $68d37aac8bca33d7$var$loader$j.load;
const $68d37aac8bca33d7$var$frontMatterRegex = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
function $68d37aac8bca33d7$var$extractFrontMatter(text, db) {
    var _a, _b;
    const matches = text.match($68d37aac8bca33d7$var$frontMatterRegex);
    if (matches) {
        const parsed = $68d37aac8bca33d7$var$load(matches[1], {
            // To keep things simple, only allow strings, arrays, and plain objects.
            // https://www.yaml.org/spec/1.2/spec.html#id2802346
            schema: $68d37aac8bca33d7$var$FAILSAFE_SCHEMA
        });
        if (parsed == null ? void 0 : parsed.title) (_a = db.setDiagramTitle) == null || _a.call(db, parsed.title);
        if (parsed == null ? void 0 : parsed.displayMode) (_b = db.setDisplayMode) == null || _b.call(db, parsed.displayMode);
        return text.slice(matches[0].length);
    } else return text;
}
const $68d37aac8bca33d7$var$assignWithDepth = function(dst, src, config2) {
    const { depth: depth , clobber: clobber  } = Object.assign({
        depth: 2,
        clobber: false
    }, config2);
    if (Array.isArray(src) && !Array.isArray(dst)) {
        src.forEach((s)=>$68d37aac8bca33d7$var$assignWithDepth(dst, s, config2));
        return dst;
    } else if (Array.isArray(src) && Array.isArray(dst)) {
        src.forEach((s)=>{
            if (!dst.includes(s)) dst.push(s);
        });
        return dst;
    }
    if (dst === void 0 || depth <= 0) {
        if (dst !== void 0 && dst !== null && typeof dst === "object" && typeof src === "object") return Object.assign(dst, src);
        else return src;
    }
    if (src !== void 0 && typeof dst === "object" && typeof src === "object") Object.keys(src).forEach((key)=>{
        if (typeof src[key] === "object" && (dst[key] === void 0 || typeof dst[key] === "object")) {
            if (dst[key] === void 0) dst[key] = Array.isArray(src[key]) ? [] : {};
            dst[key] = $68d37aac8bca33d7$var$assignWithDepth(dst[key], src[key], {
                depth: depth - 1,
                clobber: clobber
            });
        } else if (clobber || typeof dst[key] !== "object" && typeof src[key] !== "object") dst[key] = src[key];
    });
    return dst;
};
const $68d37aac8bca33d7$export$2d1720544b23b823 = $68d37aac8bca33d7$var$assignWithDepth;
const $68d37aac8bca33d7$export$2329c99376c9d0a4 = Object.freeze($68d37aac8bca33d7$export$96f57966bedc81b4);
let $68d37aac8bca33d7$var$siteConfig = $68d37aac8bca33d7$export$2d1720544b23b823({}, $68d37aac8bca33d7$export$2329c99376c9d0a4);
let $68d37aac8bca33d7$var$configFromInitialize;
let $68d37aac8bca33d7$var$directives = [];
let $68d37aac8bca33d7$var$currentConfig = $68d37aac8bca33d7$export$2d1720544b23b823({}, $68d37aac8bca33d7$export$2329c99376c9d0a4);
const $68d37aac8bca33d7$var$updateCurrentConfig = (siteCfg, _directives)=>{
    let cfg = $68d37aac8bca33d7$export$2d1720544b23b823({}, siteCfg);
    let sumOfDirectives = {};
    for (const d of _directives){
        $68d37aac8bca33d7$var$sanitize(d);
        sumOfDirectives = $68d37aac8bca33d7$export$2d1720544b23b823(sumOfDirectives, d);
    }
    cfg = $68d37aac8bca33d7$export$2d1720544b23b823(cfg, sumOfDirectives);
    if (sumOfDirectives.theme && sumOfDirectives.theme in $68d37aac8bca33d7$var$theme) {
        const tmpConfigFromInitialize = $68d37aac8bca33d7$export$2d1720544b23b823({}, $68d37aac8bca33d7$var$configFromInitialize);
        const themeVariables = $68d37aac8bca33d7$export$2d1720544b23b823(tmpConfigFromInitialize.themeVariables || {}, sumOfDirectives.themeVariables);
        if (cfg.theme && cfg.theme in $68d37aac8bca33d7$var$theme) cfg.themeVariables = $68d37aac8bca33d7$var$theme[cfg.theme].getThemeVariables(themeVariables);
    }
    $68d37aac8bca33d7$var$currentConfig = cfg;
    $68d37aac8bca33d7$var$checkConfig($68d37aac8bca33d7$var$currentConfig);
    return $68d37aac8bca33d7$var$currentConfig;
};
const $68d37aac8bca33d7$var$setSiteConfig = (conf)=>{
    $68d37aac8bca33d7$var$siteConfig = $68d37aac8bca33d7$export$2d1720544b23b823({}, $68d37aac8bca33d7$export$2329c99376c9d0a4);
    $68d37aac8bca33d7$var$siteConfig = $68d37aac8bca33d7$export$2d1720544b23b823($68d37aac8bca33d7$var$siteConfig, conf);
    if (conf.theme && $68d37aac8bca33d7$var$theme[conf.theme]) $68d37aac8bca33d7$var$siteConfig.themeVariables = $68d37aac8bca33d7$var$theme[conf.theme].getThemeVariables(conf.themeVariables);
    $68d37aac8bca33d7$var$updateCurrentConfig($68d37aac8bca33d7$var$siteConfig, $68d37aac8bca33d7$var$directives);
    return $68d37aac8bca33d7$var$siteConfig;
};
const $68d37aac8bca33d7$var$saveConfigFromInitialize = (conf)=>{
    $68d37aac8bca33d7$var$configFromInitialize = $68d37aac8bca33d7$export$2d1720544b23b823({}, conf);
};
const $68d37aac8bca33d7$var$updateSiteConfig = (conf)=>{
    $68d37aac8bca33d7$var$siteConfig = $68d37aac8bca33d7$export$2d1720544b23b823($68d37aac8bca33d7$var$siteConfig, conf);
    $68d37aac8bca33d7$var$updateCurrentConfig($68d37aac8bca33d7$var$siteConfig, $68d37aac8bca33d7$var$directives);
    return $68d37aac8bca33d7$var$siteConfig;
};
const $68d37aac8bca33d7$var$getSiteConfig = ()=>{
    return $68d37aac8bca33d7$export$2d1720544b23b823({}, $68d37aac8bca33d7$var$siteConfig);
};
const $68d37aac8bca33d7$export$9e5f44173e64f162 = (conf)=>{
    $68d37aac8bca33d7$var$checkConfig(conf);
    $68d37aac8bca33d7$export$2d1720544b23b823($68d37aac8bca33d7$var$currentConfig, conf);
    return $68d37aac8bca33d7$export$db3b6bfb95261072();
};
const $68d37aac8bca33d7$export$db3b6bfb95261072 = ()=>{
    return $68d37aac8bca33d7$export$2d1720544b23b823({}, $68d37aac8bca33d7$var$currentConfig);
};
const $68d37aac8bca33d7$var$sanitize = (options)=>{
    [
        "secure",
        ...$68d37aac8bca33d7$var$siteConfig.secure ?? []
    ].forEach((key)=>{
        if (options[key] !== void 0) {
            $68d37aac8bca33d7$export$882b5998b3b9117c.debug(`Denied attempt to modify a secure key ${key}`, options[key]);
            delete options[key];
        }
    });
    Object.keys(options).forEach((key)=>{
        if (key.indexOf("__") === 0) delete options[key];
    });
    Object.keys(options).forEach((key)=>{
        if (typeof options[key] === "string" && (options[key].includes("<") || options[key].includes(">") || options[key].includes("url(data:"))) delete options[key];
        if (typeof options[key] === "object") $68d37aac8bca33d7$var$sanitize(options[key]);
    });
};
const $68d37aac8bca33d7$var$addDirective = (directive2)=>{
    if (directive2.fontFamily) {
        if (!directive2.themeVariables) directive2.themeVariables = {
            fontFamily: directive2.fontFamily
        };
        else if (!directive2.themeVariables.fontFamily) directive2.themeVariables = {
            fontFamily: directive2.fontFamily
        };
    }
    $68d37aac8bca33d7$var$directives.push(directive2);
    $68d37aac8bca33d7$var$updateCurrentConfig($68d37aac8bca33d7$var$siteConfig, $68d37aac8bca33d7$var$directives);
};
const $68d37aac8bca33d7$var$reset = (config2 = $68d37aac8bca33d7$var$siteConfig)=>{
    $68d37aac8bca33d7$var$directives = [];
    $68d37aac8bca33d7$var$updateCurrentConfig(config2, $68d37aac8bca33d7$var$directives);
};
var $68d37aac8bca33d7$var$ConfigWarning = /* @__PURE__ */ ((ConfigWarning2)=>{
    ConfigWarning2["LAZY_LOAD_DEPRECATED"] = "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.";
    return ConfigWarning2;
})($68d37aac8bca33d7$var$ConfigWarning || {});
const $68d37aac8bca33d7$var$issuedWarnings = {};
const $68d37aac8bca33d7$var$issueWarning = (warning)=>{
    if ($68d37aac8bca33d7$var$issuedWarnings[warning]) return;
    $68d37aac8bca33d7$export$882b5998b3b9117c.warn($68d37aac8bca33d7$var$ConfigWarning[warning]);
    $68d37aac8bca33d7$var$issuedWarnings[warning] = true;
};
const $68d37aac8bca33d7$var$checkConfig = (config2)=>{
    if (!config2) return;
    if (config2.lazyLoadedDiagrams || config2.loadExternalDiagramsAtStartup) $68d37aac8bca33d7$var$issueWarning("LAZY_LOAD_DEPRECATED");
};
const $68d37aac8bca33d7$var$d3Attrs = function(d3Elem, attrs) {
    for (let attr of attrs)d3Elem.attr(attr[0], attr[1]);
};
const $68d37aac8bca33d7$var$calculateSvgSizeAttrs = function(height, width, useMaxWidth) {
    let attrs = /* @__PURE__ */ new Map();
    if (useMaxWidth) {
        attrs.set("width", "100%");
        attrs.set("style", `max-width: ${width}px;`);
    } else {
        attrs.set("height", height);
        attrs.set("width", width);
    }
    return attrs;
};
const $68d37aac8bca33d7$export$23f2a1d2818174ef = function(svgElem, height, width, useMaxWidth) {
    const attrs = $68d37aac8bca33d7$var$calculateSvgSizeAttrs(height, width, useMaxWidth);
    $68d37aac8bca33d7$var$d3Attrs(svgElem, attrs);
};
const $68d37aac8bca33d7$export$ffb5f4729a158638 = function(graph, svgElem, padding, useMaxWidth) {
    const svgBounds = svgElem.node().getBBox();
    const sWidth = svgBounds.width;
    const sHeight = svgBounds.height;
    $68d37aac8bca33d7$export$882b5998b3b9117c.info(`SVG bounds: ${sWidth}x${sHeight}`, svgBounds);
    let width = 0;
    let height = 0;
    $68d37aac8bca33d7$export$882b5998b3b9117c.info(`Graph bounds: ${width}x${height}`, graph);
    width = sWidth + padding * 2;
    height = sHeight + padding * 2;
    $68d37aac8bca33d7$export$882b5998b3b9117c.info(`Calculated bounds: ${width}x${height}`);
    $68d37aac8bca33d7$export$23f2a1d2818174ef(svgElem, height, width, useMaxWidth);
    const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${svgBounds.width + 2 * padding} ${svgBounds.height + 2 * padding}`;
    svgElem.attr("viewBox", vBox);
};
const $68d37aac8bca33d7$var$themes = {};
const $68d37aac8bca33d7$var$getStyles$1 = (type2, userStyles, options)=>{
    let diagramStyles = "";
    if (type2 in $68d37aac8bca33d7$var$themes && $68d37aac8bca33d7$var$themes[type2]) diagramStyles = $68d37aac8bca33d7$var$themes[type2](options);
    else $68d37aac8bca33d7$export$882b5998b3b9117c.warn(`No theme found for ${type2}`);
    return ` & {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
    fill: ${options.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${options.errorBkgColor};
  }
  & .error-text {
    fill: ${options.errorTextColor};
    stroke: ${options.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${options.lineColor};
    stroke: ${options.lineColor};
  }
  & .marker.cross {
    stroke: ${options.lineColor};
  }

  & svg {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
  }

  ${diagramStyles}

  ${userStyles}
`;
};
const $68d37aac8bca33d7$var$addStylesForDiagram = (type2, diagramTheme)=>{
    $68d37aac8bca33d7$var$themes[type2] = diagramTheme;
};
const $68d37aac8bca33d7$var$getStyles$2 = $68d37aac8bca33d7$var$getStyles$1;
let $68d37aac8bca33d7$var$title = "";
let $68d37aac8bca33d7$var$diagramTitle = "";
let $68d37aac8bca33d7$var$description = "";
const $68d37aac8bca33d7$var$sanitizeText$1 = (txt)=>$68d37aac8bca33d7$export$4368d992c4eafac0(txt, $68d37aac8bca33d7$export$db3b6bfb95261072());
const $68d37aac8bca33d7$export$90a7f3efeed30595 = function() {
    $68d37aac8bca33d7$var$title = "";
    $68d37aac8bca33d7$var$description = "";
    $68d37aac8bca33d7$var$diagramTitle = "";
};
const $68d37aac8bca33d7$export$2408f22a0fab9ae5 = function(txt) {
    $68d37aac8bca33d7$var$title = $68d37aac8bca33d7$var$sanitizeText$1(txt).replace(/^\s+/g, "");
};
const $68d37aac8bca33d7$export$39b482c5e57630a8 = function() {
    return $68d37aac8bca33d7$var$title || $68d37aac8bca33d7$var$diagramTitle;
};
const $68d37aac8bca33d7$export$8b22cf2602fb60ce = function(txt) {
    $68d37aac8bca33d7$var$description = $68d37aac8bca33d7$var$sanitizeText$1(txt).replace(/\n\s+/g, "\n");
};
const $68d37aac8bca33d7$export$407448d2b89b1813 = function() {
    return $68d37aac8bca33d7$var$description;
};
const $68d37aac8bca33d7$export$43caf9889c228507 = function(txt) {
    $68d37aac8bca33d7$var$diagramTitle = $68d37aac8bca33d7$var$sanitizeText$1(txt);
};
const $68d37aac8bca33d7$export$625550452a3fa3ec = function() {
    return $68d37aac8bca33d7$var$diagramTitle;
};
const $68d37aac8bca33d7$var$commonDb = {
    getAccTitle: $68d37aac8bca33d7$export$39b482c5e57630a8,
    setAccTitle: $68d37aac8bca33d7$export$2408f22a0fab9ae5,
    getDiagramTitle: $68d37aac8bca33d7$export$625550452a3fa3ec,
    setDiagramTitle: $68d37aac8bca33d7$export$43caf9889c228507,
    getAccDescription: $68d37aac8bca33d7$export$407448d2b89b1813,
    setAccDescription: $68d37aac8bca33d7$export$8b22cf2602fb60ce,
    clear: $68d37aac8bca33d7$export$90a7f3efeed30595
};
const $68d37aac8bca33d7$export$9bb611d729802a56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    clear: $68d37aac8bca33d7$export$90a7f3efeed30595,
    default: $68d37aac8bca33d7$var$commonDb,
    getAccDescription: $68d37aac8bca33d7$export$407448d2b89b1813,
    getAccTitle: $68d37aac8bca33d7$export$39b482c5e57630a8,
    getDiagramTitle: $68d37aac8bca33d7$export$625550452a3fa3ec,
    setAccDescription: $68d37aac8bca33d7$export$8b22cf2602fb60ce,
    setAccTitle: $68d37aac8bca33d7$export$2408f22a0fab9ae5,
    setDiagramTitle: $68d37aac8bca33d7$export$43caf9889c228507
}, Symbol.toStringTag, {
    value: "Module"
}));
let $68d37aac8bca33d7$var$currentDirective = {};
const $68d37aac8bca33d7$export$b4171a6734a65d42 = function(p, statement, context, type2) {
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug("parseDirective is being called", statement, context, type2);
    try {
        if (statement !== void 0) {
            statement = statement.trim();
            switch(context){
                case "open_directive":
                    $68d37aac8bca33d7$var$currentDirective = {};
                    break;
                case "type_directive":
                    if (!$68d37aac8bca33d7$var$currentDirective) throw new Error("currentDirective is undefined");
                    $68d37aac8bca33d7$var$currentDirective.type = statement.toLowerCase();
                    break;
                case "arg_directive":
                    if (!$68d37aac8bca33d7$var$currentDirective) throw new Error("currentDirective is undefined");
                    $68d37aac8bca33d7$var$currentDirective.args = JSON.parse(statement);
                    break;
                case "close_directive":
                    $68d37aac8bca33d7$var$handleDirective(p, $68d37aac8bca33d7$var$currentDirective, type2);
                    $68d37aac8bca33d7$var$currentDirective = void 0;
                    break;
            }
        }
    } catch (error) {
        $68d37aac8bca33d7$export$882b5998b3b9117c.error(`Error while rendering sequenceDiagram directive: ${statement} jison context: ${context}`);
        $68d37aac8bca33d7$export$882b5998b3b9117c.error(error.message);
    }
};
const $68d37aac8bca33d7$var$handleDirective = function(p, directive2, type2) {
    $68d37aac8bca33d7$export$882b5998b3b9117c.info(`Directive type=${directive2.type} with args:`, directive2.args);
    switch(directive2.type){
        case "init":
        case "initialize":
            [
                "config"
            ].forEach((prop)=>{
                if (directive2.args[prop] !== void 0) {
                    if (type2 === "flowchart-v2") type2 = "flowchart";
                    directive2.args[type2] = directive2.args[prop];
                    delete directive2.args[prop];
                }
            });
            $68d37aac8bca33d7$export$882b5998b3b9117c.info("sanitize in handleDirective", directive2.args);
            $68d37aac8bca33d7$var$directiveSanitizer(directive2.args);
            $68d37aac8bca33d7$export$882b5998b3b9117c.info("sanitize in handleDirective (done)", directive2.args);
            $68d37aac8bca33d7$var$addDirective(directive2.args);
            break;
        case "wrap":
        case "nowrap":
            if (p && p["setWrap"]) p.setWrap(directive2.type === "wrap");
            break;
        case "themeCss":
            $68d37aac8bca33d7$export$882b5998b3b9117c.warn("themeCss encountered");
            break;
        default:
            $68d37aac8bca33d7$export$882b5998b3b9117c.warn(`Unhandled directive: source: '%%{${directive2.type}: ${JSON.stringify(directive2.args ? directive2.args : {})}}%%`, directive2);
            break;
    }
};
const $68d37aac8bca33d7$var$log = $68d37aac8bca33d7$export$882b5998b3b9117c;
const $68d37aac8bca33d7$var$setLogLevel = $68d37aac8bca33d7$var$setLogLevel$1;
const $68d37aac8bca33d7$export$df995fae86a55f06 = $68d37aac8bca33d7$export$db3b6bfb95261072;
const $68d37aac8bca33d7$var$sanitizeText = (text)=>$68d37aac8bca33d7$export$4368d992c4eafac0(text, $68d37aac8bca33d7$export$df995fae86a55f06());
const $68d37aac8bca33d7$export$ebd11618f299a286 = $68d37aac8bca33d7$export$ffb5f4729a158638;
const $68d37aac8bca33d7$var$getCommonDb = ()=>{
    return $68d37aac8bca33d7$export$9bb611d729802a56;
};
const $68d37aac8bca33d7$var$parseDirective = (p, statement, context, type2)=>$68d37aac8bca33d7$export$b4171a6734a65d42(p, statement, context, type2);
const $68d37aac8bca33d7$var$diagrams = {};
const $68d37aac8bca33d7$var$registerDiagram = (id2, diagram2, detector2)=>{
    if ($68d37aac8bca33d7$var$diagrams[id2]) throw new Error(`Diagram ${id2} already registered.`);
    $68d37aac8bca33d7$var$diagrams[id2] = diagram2;
    if (detector2) $68d37aac8bca33d7$var$addDetector(id2, detector2);
    $68d37aac8bca33d7$var$addStylesForDiagram(id2, diagram2.styles);
    if (diagram2.injectUtils) diagram2.injectUtils($68d37aac8bca33d7$var$log, $68d37aac8bca33d7$var$setLogLevel, $68d37aac8bca33d7$export$df995fae86a55f06, $68d37aac8bca33d7$var$sanitizeText, $68d37aac8bca33d7$export$ebd11618f299a286, $68d37aac8bca33d7$var$getCommonDb(), $68d37aac8bca33d7$var$parseDirective);
};
const $68d37aac8bca33d7$var$getDiagram = (name)=>{
    if (name in $68d37aac8bca33d7$var$diagrams) return $68d37aac8bca33d7$var$diagrams[name];
    throw new Error(`Diagram ${name} not found.`);
};
class $68d37aac8bca33d7$var$UnknownDiagramError extends Error {
    constructor(message){
        super(message);
        this.name = "UnknownDiagramError";
    }
}
const $68d37aac8bca33d7$var$directive$1 = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const $68d37aac8bca33d7$var$anyComment = /\s*%%.*\n/gm;
const $68d37aac8bca33d7$var$detectors = {};
const $68d37aac8bca33d7$var$detectType = function(text, config2) {
    text = text.replace($68d37aac8bca33d7$var$frontMatterRegex, "").replace($68d37aac8bca33d7$var$directive$1, "").replace($68d37aac8bca33d7$var$anyComment, "\n");
    for (const [key, { detector: detector2  }] of Object.entries($68d37aac8bca33d7$var$detectors)){
        const diagram2 = detector2(text, config2);
        if (diagram2) return key;
    }
    throw new $68d37aac8bca33d7$var$UnknownDiagramError(`No diagram type detected matching given configuration for text: ${text}`);
};
const $68d37aac8bca33d7$var$registerLazyLoadedDiagrams = (...diagrams2)=>{
    for (const { id: id2 , detector: detector2 , loader: loader2  } of diagrams2)$68d37aac8bca33d7$var$addDetector(id2, detector2, loader2);
};
const $68d37aac8bca33d7$var$loadRegisteredDiagrams = async ()=>{
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug(`Loading registered diagrams`);
    const results = await Promise.allSettled(Object.entries($68d37aac8bca33d7$var$detectors).map(async ([key, { detector: detector2 , loader: loader2  }])=>{
        if (loader2) try {
            $68d37aac8bca33d7$var$getDiagram(key);
        } catch (error) {
            try {
                const { diagram: diagram2 , id: id2  } = await loader2();
                $68d37aac8bca33d7$var$registerDiagram(id2, diagram2, detector2);
            } catch (err) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.error(`Failed to load external diagram with key ${key}. Removing from detectors.`);
                delete $68d37aac8bca33d7$var$detectors[key];
                throw err;
            }
        }
    }));
    const failed = results.filter((result)=>result.status === "rejected");
    if (failed.length > 0) {
        $68d37aac8bca33d7$export$882b5998b3b9117c.error(`Failed to load ${failed.length} external diagrams`);
        for (const res of failed)$68d37aac8bca33d7$export$882b5998b3b9117c.error(res);
        throw new Error(`Failed to load ${failed.length} external diagrams`);
    }
};
const $68d37aac8bca33d7$var$addDetector = (key, detector2, loader2)=>{
    if ($68d37aac8bca33d7$var$detectors[key]) $68d37aac8bca33d7$export$882b5998b3b9117c.error(`Detector with key ${key} already exists`);
    else $68d37aac8bca33d7$var$detectors[key] = {
        detector: detector2,
        loader: loader2
    };
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug(`Detector with key ${key} added${loader2 ? " with loader" : ""}`);
};
const $68d37aac8bca33d7$var$getDiagramLoader = (key)=>{
    return $68d37aac8bca33d7$var$detectors[key].loader;
};
const $68d37aac8bca33d7$export$dc98b0b04f4c7758 = "​";
const $68d37aac8bca33d7$var$d3CurveTypes = {
    curveBasis: $1BrvX.default,
    curveBasisClosed: $8US7F.default,
    curveBasisOpen: $3fOcN.default,
    curveBumpX: $kHgim.bumpX,
    curveBumpY: $kHgim.bumpY,
    curveBundle: $bZdBH.default,
    curveCardinalClosed: $642tg.default,
    curveCardinalOpen: $3vYLn.default,
    curveCardinal: $fnxet.default,
    curveCatmullRomClosed: $6TZoA.default,
    curveCatmullRomOpen: $ii7b3.default,
    curveCatmullRom: $2TdSl.default,
    curveLinear: $4KZO1.default,
    curveLinearClosed: $4JsHV.default,
    curveMonotoneX: $3KqRo.monotoneX,
    curveMonotoneY: $3KqRo.monotoneY,
    curveNatural: $3xOzo.default,
    curveStep: $9R5Z3.default,
    curveStepAfter: $9R5Z3.stepAfter,
    curveStepBefore: $9R5Z3.stepBefore
};
const $68d37aac8bca33d7$var$directive = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const $68d37aac8bca33d7$var$directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const $68d37aac8bca33d7$var$detectInit = function(text, config2) {
    const inits = $68d37aac8bca33d7$var$detectDirective(text, /(?:init\b)|(?:initialize\b)/);
    let results = {};
    if (Array.isArray(inits)) {
        const args = inits.map((init2)=>init2.args);
        $68d37aac8bca33d7$var$directiveSanitizer(args);
        results = $68d37aac8bca33d7$export$2d1720544b23b823(results, [
            ...args
        ]);
    } else results = inits.args;
    if (results) {
        let type2 = $68d37aac8bca33d7$var$detectType(text, config2);
        [
            "config"
        ].forEach((prop)=>{
            if (results[prop] !== void 0) {
                if (type2 === "flowchart-v2") type2 = "flowchart";
                results[type2] = results[prop];
                delete results[prop];
            }
        });
    }
    return results;
};
const $68d37aac8bca33d7$var$detectDirective = function(text, type2 = null) {
    try {
        const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${$68d37aac8bca33d7$var$directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
        text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, '"');
        $68d37aac8bca33d7$export$882b5998b3b9117c.debug(`Detecting diagram directive${type2 !== null ? " type:" + type2 : ""} based on the text:${text}`);
        let match;
        const result = [];
        while((match = $68d37aac8bca33d7$var$directive.exec(text)) !== null){
            if (match.index === $68d37aac8bca33d7$var$directive.lastIndex) $68d37aac8bca33d7$var$directive.lastIndex++;
            if (match && !type2 || type2 && match[1] && match[1].match(type2) || type2 && match[2] && match[2].match(type2)) {
                const type22 = match[1] ? match[1] : match[2];
                const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
                result.push({
                    type: type22,
                    args: args
                });
            }
        }
        if (result.length === 0) result.push({
            type: text,
            args: null
        });
        return result.length === 1 ? result[0] : result;
    } catch (error) {
        $68d37aac8bca33d7$export$882b5998b3b9117c.error(`ERROR: ${error.message} - Unable to parse directive
      ${type2 !== null ? " type:" + type2 : ""} based on the text:${text}`);
        return {
            type: null,
            args: null
        };
    }
};
const $68d37aac8bca33d7$var$isSubstringInArray = function(str2, arr) {
    for (const [i, element] of arr.entries()){
        if (element.match(str2)) return i;
    }
    return -1;
};
function $68d37aac8bca33d7$export$ae1af26003f05816(interpolate, defaultCurve) {
    if (!interpolate) return defaultCurve;
    const curveName = `curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`;
    return $68d37aac8bca33d7$var$d3CurveTypes[curveName] || defaultCurve;
}
function $68d37aac8bca33d7$var$formatUrl(linkStr, config2) {
    const url = linkStr.trim();
    if (url) {
        if (config2.securityLevel !== "loose") return (0, $gOlfO.sanitizeUrl)(url);
        return url;
    }
}
const $68d37aac8bca33d7$var$runFunc = (functionName, ...params)=>{
    const arrPaths = functionName.split(".");
    const len = arrPaths.length - 1;
    const fnName = arrPaths[len];
    let obj = window;
    for(let i = 0; i < len; i++){
        obj = obj[arrPaths[i]];
        if (!obj) return;
    }
    obj[fnName](...params);
};
function $68d37aac8bca33d7$var$distance(p1, p2) {
    return p1 && p2 ? Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)) : 0;
}
function $68d37aac8bca33d7$var$traverseEdge(points) {
    let prevPoint;
    let totalDistance = 0;
    points.forEach((point)=>{
        totalDistance += $68d37aac8bca33d7$var$distance(point, prevPoint);
        prevPoint = point;
    });
    let remainingDistance = totalDistance / 2;
    let center = void 0;
    prevPoint = void 0;
    points.forEach((point)=>{
        if (prevPoint && !center) {
            const vectorDistance = $68d37aac8bca33d7$var$distance(point, prevPoint);
            if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
            else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) center = prevPoint;
                if (distanceRatio >= 1) center = {
                    x: point.x,
                    y: point.y
                };
                if (distanceRatio > 0 && distanceRatio < 1) center = {
                    x: (1 - distanceRatio) * prevPoint.x + distanceRatio * point.x,
                    y: (1 - distanceRatio) * prevPoint.y + distanceRatio * point.y
                };
            }
        }
        prevPoint = point;
    });
    return center;
}
function $68d37aac8bca33d7$var$calcLabelPosition(points) {
    if (points.length === 1) return points[0];
    return $68d37aac8bca33d7$var$traverseEdge(points);
}
const $68d37aac8bca33d7$var$calcCardinalityPosition = (isRelationTypePresent, points, initialPosition)=>{
    let prevPoint;
    $68d37aac8bca33d7$export$882b5998b3b9117c.info(`our points ${JSON.stringify(points)}`);
    if (points[0] !== initialPosition) points = points.reverse();
    const distanceToCardinalityPoint = 25;
    let remainingDistance = distanceToCardinalityPoint;
    let center;
    prevPoint = void 0;
    points.forEach((point)=>{
        if (prevPoint && !center) {
            const vectorDistance = $68d37aac8bca33d7$var$distance(point, prevPoint);
            if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
            else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) center = prevPoint;
                if (distanceRatio >= 1) center = {
                    x: point.x,
                    y: point.y
                };
                if (distanceRatio > 0 && distanceRatio < 1) center = {
                    x: (1 - distanceRatio) * prevPoint.x + distanceRatio * point.x,
                    y: (1 - distanceRatio) * prevPoint.y + distanceRatio * point.y
                };
            }
        }
        prevPoint = point;
    });
    const d = isRelationTypePresent ? 10 : 5;
    const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
    const cardinalityPosition = {
        x: 0,
        y: 0
    };
    cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
    return cardinalityPosition;
};
function $68d37aac8bca33d7$var$calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
    let points = JSON.parse(JSON.stringify(_points));
    let prevPoint;
    $68d37aac8bca33d7$export$882b5998b3b9117c.info("our points", points);
    if (position !== "start_left" && position !== "start_right") points = points.reverse();
    points.forEach((point)=>{
        prevPoint = point;
    });
    const distanceToCardinalityPoint = 25 + terminalMarkerSize;
    let remainingDistance = distanceToCardinalityPoint;
    let center;
    prevPoint = void 0;
    points.forEach((point)=>{
        if (prevPoint && !center) {
            const vectorDistance = $68d37aac8bca33d7$var$distance(point, prevPoint);
            if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
            else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) center = prevPoint;
                if (distanceRatio >= 1) center = {
                    x: point.x,
                    y: point.y
                };
                if (distanceRatio > 0 && distanceRatio < 1) center = {
                    x: (1 - distanceRatio) * prevPoint.x + distanceRatio * point.x,
                    y: (1 - distanceRatio) * prevPoint.y + distanceRatio * point.y
                };
            }
        }
        prevPoint = point;
    });
    const d = 10 + terminalMarkerSize * 0.5;
    const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
    const cardinalityPosition = {
        x: 0,
        y: 0
    };
    cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
    if (position === "start_left") {
        cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
        cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
    }
    if (position === "end_right") {
        cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2 - 5;
        cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2 - 5;
    }
    if (position === "end_left") {
        cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2 - 5;
        cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2 - 5;
    }
    return cardinalityPosition;
}
function $68d37aac8bca33d7$export$342063e11d6c3cad(arr) {
    let style = "";
    let labelStyle = "";
    for (const element of arr)if (element !== void 0) {
        if (element.startsWith("color:") || element.startsWith("text-align:")) labelStyle = labelStyle + element + ";";
        else style = style + element + ";";
    }
    return {
        style: style,
        labelStyle: labelStyle
    };
}
let $68d37aac8bca33d7$var$cnt = 0;
const $68d37aac8bca33d7$export$d66501df72047452 = ()=>{
    $68d37aac8bca33d7$var$cnt++;
    return "id-" + Math.random().toString(36).substr(2, 12) + "-" + $68d37aac8bca33d7$var$cnt;
};
function $68d37aac8bca33d7$var$makeid(length) {
    let result = "";
    const characters = "0123456789abcdef";
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
const $68d37aac8bca33d7$export$4a5767248b18ef41 = (options)=>{
    return $68d37aac8bca33d7$var$makeid(options.length);
};
const $68d37aac8bca33d7$var$getTextObj = function() {
    return {
        x: 0,
        y: 0,
        fill: void 0,
        anchor: "start",
        style: "#666",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0,
        valign: void 0
    };
};
const $68d37aac8bca33d7$var$drawSimpleText = function(elem, textData) {
    const nText = textData.text.replace($68d37aac8bca33d7$export$f1e1789686576879.lineBreakRegex, " ");
    const [, _fontSizePx] = $68d37aac8bca33d7$export$ef35774e6d314e91(textData.fontSize);
    const textElem = elem.append("text");
    textElem.attr("x", textData.x);
    textElem.attr("y", textData.y);
    textElem.style("text-anchor", textData.anchor);
    textElem.style("font-family", textData.fontFamily);
    textElem.style("font-size", _fontSizePx);
    textElem.style("font-weight", textData.fontWeight);
    textElem.attr("fill", textData.fill);
    if (textData.class !== void 0) textElem.attr("class", textData.class);
    const span = textElem.append("tspan");
    span.attr("x", textData.x + textData.textMargin * 2);
    span.attr("fill", textData.fill);
    span.text(nText);
    return textElem;
};
const $68d37aac8bca33d7$export$efccba1c4a2ef57b = (0, $14Y92.default)((label, maxWidth, config2)=>{
    if (!label) return label;
    config2 = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        joinWith: "<br/>"
    }, config2);
    if ($68d37aac8bca33d7$export$f1e1789686576879.lineBreakRegex.test(label)) return label;
    const words = label.split(" ");
    const completedLines = [];
    let nextLine = "";
    words.forEach((word, index)=>{
        const wordLength = $68d37aac8bca33d7$export$dda1d9f60106f0e9(`${word} `, config2);
        const nextLineLength = $68d37aac8bca33d7$export$dda1d9f60106f0e9(nextLine, config2);
        if (wordLength > maxWidth) {
            const { hyphenatedStrings: hyphenatedStrings , remainingWord: remainingWord  } = $68d37aac8bca33d7$var$breakString(word, maxWidth, "-", config2);
            completedLines.push(nextLine, ...hyphenatedStrings);
            nextLine = remainingWord;
        } else if (nextLineLength + wordLength >= maxWidth) {
            completedLines.push(nextLine);
            nextLine = word;
        } else nextLine = [
            nextLine,
            word
        ].filter(Boolean).join(" ");
        const currentWord = index + 1;
        const isLastWord = currentWord === words.length;
        if (isLastWord) completedLines.push(nextLine);
    });
    return completedLines.filter((line)=>line !== "").join(config2.joinWith);
}, (label, maxWidth, config2)=>`${label}${maxWidth}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}${config2.joinWith}`);
const $68d37aac8bca33d7$var$breakString = (0, $14Y92.default)((word, maxWidth, hyphenCharacter = "-", config2)=>{
    config2 = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 0
    }, config2);
    const characters = [
        ...word
    ];
    const lines = [];
    let currentLine = "";
    characters.forEach((character, index)=>{
        const nextLine = `${currentLine}${character}`;
        const lineWidth = $68d37aac8bca33d7$export$dda1d9f60106f0e9(nextLine, config2);
        if (lineWidth >= maxWidth) {
            const currentCharacter = index + 1;
            const isLastLine = characters.length === currentCharacter;
            const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
            lines.push(isLastLine ? nextLine : hyphenatedNextLine);
            currentLine = "";
        } else currentLine = nextLine;
    });
    return {
        hyphenatedStrings: lines,
        remainingWord: currentLine
    };
}, (word, maxWidth, hyphenCharacter = "-", config2)=>`${word}${maxWidth}${hyphenCharacter}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}`);
function $68d37aac8bca33d7$export$35e795649ee09318(text, config2) {
    config2 = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 15
    }, config2);
    return $68d37aac8bca33d7$var$calculateTextDimensions(text, config2).height;
}
function $68d37aac8bca33d7$export$dda1d9f60106f0e9(text, config2) {
    config2 = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial"
    }, config2);
    return $68d37aac8bca33d7$var$calculateTextDimensions(text, config2).width;
}
const $68d37aac8bca33d7$var$calculateTextDimensions = (0, $14Y92.default)((text, config2)=>{
    config2 = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial"
    }, config2);
    const { fontSize: fontSize , fontFamily: fontFamily , fontWeight: fontWeight  } = config2;
    if (!text) return {
        width: 0,
        height: 0
    };
    const [, _fontSizePx] = $68d37aac8bca33d7$export$ef35774e6d314e91(fontSize);
    const fontFamilies = [
        "sans-serif",
        fontFamily
    ];
    const lines = text.split($68d37aac8bca33d7$export$f1e1789686576879.lineBreakRegex);
    const dims = [];
    const body = (0, $htTEB.default)("body");
    if (!body.remove) return {
        width: 0,
        height: 0,
        lineHeight: 0
    };
    const g = body.append("svg");
    for (const fontFamily2 of fontFamilies){
        let cheight = 0;
        const dim = {
            width: 0,
            height: 0,
            lineHeight: 0
        };
        for (const line of lines){
            const textObj = $68d37aac8bca33d7$var$getTextObj();
            textObj.text = line || $68d37aac8bca33d7$export$dc98b0b04f4c7758;
            const textElem = $68d37aac8bca33d7$var$drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
            const bBox = (textElem._groups || textElem)[0][0].getBBox();
            if (bBox.width === 0 && bBox.height === 0) throw new Error("svg element not in render tree");
            dim.width = Math.round(Math.max(dim.width, bBox.width));
            cheight = Math.round(bBox.height);
            dim.height += cheight;
            dim.lineHeight = Math.round(Math.max(dim.lineHeight, cheight));
        }
        dims.push(dim);
    }
    g.remove();
    const index = isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1;
    return dims[index];
}, (text, config2)=>`${text}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}`);
const $68d37aac8bca33d7$var$initIdGenerator = class iterator {
    constructor(deterministic, seed){
        this.deterministic = deterministic;
        this.seed = seed;
        this.count = seed ? seed.length : 0;
    }
    next() {
        if (!this.deterministic) return Date.now();
        return this.count++;
    }
};
let $68d37aac8bca33d7$var$decoder;
const $68d37aac8bca33d7$var$entityDecode = function(html) {
    $68d37aac8bca33d7$var$decoder = $68d37aac8bca33d7$var$decoder || document.createElement("div");
    html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
    $68d37aac8bca33d7$var$decoder.innerHTML = html;
    return unescape($68d37aac8bca33d7$var$decoder.textContent);
};
const $68d37aac8bca33d7$var$directiveSanitizer = (args)=>{
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug("directiveSanitizer called with", args);
    if (typeof args === "object") {
        if (args.length) args.forEach((arg)=>$68d37aac8bca33d7$var$directiveSanitizer(arg));
        else Object.keys(args).forEach((key)=>{
            $68d37aac8bca33d7$export$882b5998b3b9117c.debug("Checking key", key);
            if (key.startsWith("__")) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitize deleting __ option", key);
                delete args[key];
            }
            if (key.includes("proto")) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitize deleting proto option", key);
                delete args[key];
            }
            if (key.includes("constr")) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitize deleting constr option", key);
                delete args[key];
            }
            if (key.includes("themeCSS")) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitizing themeCss option");
                args[key] = $68d37aac8bca33d7$var$sanitizeCss(args[key]);
            }
            if (key.includes("fontFamily")) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitizing fontFamily option");
                args[key] = $68d37aac8bca33d7$var$sanitizeCss(args[key]);
            }
            if (key.includes("altFontFamily")) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitizing altFontFamily option");
                args[key] = $68d37aac8bca33d7$var$sanitizeCss(args[key]);
            }
            if (!$68d37aac8bca33d7$var$configKeys.includes(key)) {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitize deleting option", key);
                delete args[key];
            } else if (typeof args[key] === "object") {
                $68d37aac8bca33d7$export$882b5998b3b9117c.debug("sanitize deleting object", key);
                $68d37aac8bca33d7$var$directiveSanitizer(args[key]);
            }
        });
    }
    if (args.themeVariables) {
        const kArr = Object.keys(args.themeVariables);
        for (const k of kArr){
            const val = args.themeVariables[k];
            if (val && val.match && !val.match(/^[\d "#%(),.;A-Za-z]+$/)) args.themeVariables[k] = "";
        }
    }
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug("After sanitization", args);
};
const $68d37aac8bca33d7$var$sanitizeCss = (str2)=>{
    let startCnt = 0;
    let endCnt = 0;
    for (const element of str2){
        if (startCnt < endCnt) return "{ /* ERROR: Unbalanced CSS */ }";
        if (element === "{") startCnt++;
        else if (element === "}") endCnt++;
    }
    if (startCnt !== endCnt) return "{ /* ERROR: Unbalanced CSS */ }";
    return str2;
};
function $68d37aac8bca33d7$var$isDetailedError(error) {
    return "str" in error;
}
function $68d37aac8bca33d7$var$getErrorMessage(error) {
    if (error instanceof Error) return error.message;
    return String(error);
}
const $68d37aac8bca33d7$var$insertTitle = (parent, cssClass, titleTopMargin, title2)=>{
    if (!title2) return;
    const bounds = parent.node().getBBox();
    parent.append("text").text(title2).attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
};
const $68d37aac8bca33d7$export$ef35774e6d314e91 = (fontSize)=>{
    if (typeof fontSize === "number") return [
        fontSize,
        fontSize + "px"
    ];
    const fontSizeNumber = parseInt(fontSize, 10);
    if (Number.isNaN(fontSizeNumber)) return [
        void 0,
        void 0
    ];
    else if (fontSize === String(fontSizeNumber)) return [
        fontSizeNumber,
        fontSize + "px"
    ];
    else return [
        fontSizeNumber,
        fontSize
    ];
};
const $68d37aac8bca33d7$export$3b14a55fb2447963 = {
    assignWithDepth: $68d37aac8bca33d7$export$2d1720544b23b823,
    wrapLabel: $68d37aac8bca33d7$export$efccba1c4a2ef57b,
    calculateTextHeight: $68d37aac8bca33d7$export$35e795649ee09318,
    calculateTextWidth: $68d37aac8bca33d7$export$dda1d9f60106f0e9,
    calculateTextDimensions: $68d37aac8bca33d7$var$calculateTextDimensions,
    detectInit: $68d37aac8bca33d7$var$detectInit,
    detectDirective: $68d37aac8bca33d7$var$detectDirective,
    isSubstringInArray: $68d37aac8bca33d7$var$isSubstringInArray,
    interpolateToCurve: $68d37aac8bca33d7$export$ae1af26003f05816,
    calcLabelPosition: $68d37aac8bca33d7$var$calcLabelPosition,
    calcCardinalityPosition: $68d37aac8bca33d7$var$calcCardinalityPosition,
    calcTerminalLabelPosition: $68d37aac8bca33d7$var$calcTerminalLabelPosition,
    formatUrl: $68d37aac8bca33d7$var$formatUrl,
    getStylesFromArray: $68d37aac8bca33d7$export$342063e11d6c3cad,
    generateId: $68d37aac8bca33d7$export$d66501df72047452,
    random: $68d37aac8bca33d7$export$4a5767248b18ef41,
    runFunc: $68d37aac8bca33d7$var$runFunc,
    entityDecode: $68d37aac8bca33d7$var$entityDecode,
    initIdGenerator: $68d37aac8bca33d7$var$initIdGenerator,
    directiveSanitizer: $68d37aac8bca33d7$var$directiveSanitizer,
    sanitizeCss: $68d37aac8bca33d7$var$sanitizeCss,
    insertTitle: $68d37aac8bca33d7$var$insertTitle,
    parseFontSize: $68d37aac8bca33d7$export$ef35774e6d314e91
};
const $68d37aac8bca33d7$var$version = "10.2.3";
const $68d37aac8bca33d7$var$id$i = "c4";
const $68d37aac8bca33d7$var$detector$i = (txt)=>{
    return txt.match(/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/) !== null;
};

const $68d37aac8bca33d7$var$loader$i = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("bN7TY"));
    return {
        id: $68d37aac8bca33d7$var$id$i,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$i = {
    id: $68d37aac8bca33d7$var$id$i,
    detector: $68d37aac8bca33d7$var$detector$i,
    loader: $68d37aac8bca33d7$var$loader$i
};
const $68d37aac8bca33d7$var$c4 = $68d37aac8bca33d7$var$plugin$i;
const $68d37aac8bca33d7$var$id$h = "flowchart";
const $68d37aac8bca33d7$var$detector$h = (txt, config2)=>{
    var _a, _b;
    if (((_a = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper" || ((_b = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") return false;
    return txt.match(/^\s*graph/) !== null;
};

const $68d37aac8bca33d7$var$loader$h = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("fyRzG"));
    return {
        id: $68d37aac8bca33d7$var$id$h,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$h = {
    id: $68d37aac8bca33d7$var$id$h,
    detector: $68d37aac8bca33d7$var$detector$h,
    loader: $68d37aac8bca33d7$var$loader$h
};
const $68d37aac8bca33d7$var$flowchart = $68d37aac8bca33d7$var$plugin$h;
const $68d37aac8bca33d7$var$id$g = "flowchart-v2";
const $68d37aac8bca33d7$var$detector$g = (txt, config2)=>{
    var _a, _b, _c;
    if (((_a = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a.defaultRenderer) === "dagre-d3" || ((_b = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") return false;
    if (txt.match(/^\s*graph/) !== null && ((_c = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _c.defaultRenderer) === "dagre-wrapper") return true;
    return txt.match(/^\s*flowchart/) !== null;
};

const $68d37aac8bca33d7$var$loader$g = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("8mYAb"));
    return {
        id: $68d37aac8bca33d7$var$id$g,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$g = {
    id: $68d37aac8bca33d7$var$id$g,
    detector: $68d37aac8bca33d7$var$detector$g,
    loader: $68d37aac8bca33d7$var$loader$g
};
const $68d37aac8bca33d7$var$flowchartV2 = $68d37aac8bca33d7$var$plugin$g;
const $68d37aac8bca33d7$var$id$f = "er";
const $68d37aac8bca33d7$var$detector$f = (txt)=>{
    return txt.match(/^\s*erDiagram/) !== null;
};

const $68d37aac8bca33d7$var$loader$f = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("3wpYn"));
    return {
        id: $68d37aac8bca33d7$var$id$f,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$f = {
    id: $68d37aac8bca33d7$var$id$f,
    detector: $68d37aac8bca33d7$var$detector$f,
    loader: $68d37aac8bca33d7$var$loader$f
};
const $68d37aac8bca33d7$var$er = $68d37aac8bca33d7$var$plugin$f;
const $68d37aac8bca33d7$var$id$e = "gitGraph";
const $68d37aac8bca33d7$var$detector$e = (txt)=>{
    return txt.match(/^\s*gitGraph/) !== null;
};

const $68d37aac8bca33d7$var$loader$e = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("gAhAd"));
    return {
        id: $68d37aac8bca33d7$var$id$e,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$e = {
    id: $68d37aac8bca33d7$var$id$e,
    detector: $68d37aac8bca33d7$var$detector$e,
    loader: $68d37aac8bca33d7$var$loader$e
};
const $68d37aac8bca33d7$var$git = $68d37aac8bca33d7$var$plugin$e;
const $68d37aac8bca33d7$var$id$d = "gantt";
const $68d37aac8bca33d7$var$detector$d = (txt)=>{
    return txt.match(/^\s*gantt/) !== null;
};

const $68d37aac8bca33d7$var$loader$d = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("kZGqp"));
    return {
        id: $68d37aac8bca33d7$var$id$d,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$d = {
    id: $68d37aac8bca33d7$var$id$d,
    detector: $68d37aac8bca33d7$var$detector$d,
    loader: $68d37aac8bca33d7$var$loader$d
};
const $68d37aac8bca33d7$var$gantt = $68d37aac8bca33d7$var$plugin$d;
const $68d37aac8bca33d7$var$id$c = "info";
const $68d37aac8bca33d7$var$detector$c = (txt)=>{
    return txt.match(/^\s*info/) !== null;
};

const $68d37aac8bca33d7$var$loader$c = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("c0Ue8"));
    return {
        id: $68d37aac8bca33d7$var$id$c,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$c = {
    id: $68d37aac8bca33d7$var$id$c,
    detector: $68d37aac8bca33d7$var$detector$c,
    loader: $68d37aac8bca33d7$var$loader$c
};
const $68d37aac8bca33d7$var$info = $68d37aac8bca33d7$var$plugin$c;
const $68d37aac8bca33d7$var$id$b = "pie";
const $68d37aac8bca33d7$var$detector$b = (txt)=>{
    return txt.match(/^\s*pie/) !== null;
};

const $68d37aac8bca33d7$var$loader$b = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("3XxEn"));
    return {
        id: $68d37aac8bca33d7$var$id$b,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$b = {
    id: $68d37aac8bca33d7$var$id$b,
    detector: $68d37aac8bca33d7$var$detector$b,
    loader: $68d37aac8bca33d7$var$loader$b
};
const $68d37aac8bca33d7$var$pie = $68d37aac8bca33d7$var$plugin$b;
const $68d37aac8bca33d7$var$id$a = "quadrantChart";
const $68d37aac8bca33d7$var$detector$a = (txt)=>{
    return txt.match(/^\s*quadrantChart/) !== null;
};

const $68d37aac8bca33d7$var$loader$a = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("3N3BA"));
    return {
        id: $68d37aac8bca33d7$var$id$a,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$a = {
    id: $68d37aac8bca33d7$var$id$a,
    detector: $68d37aac8bca33d7$var$detector$a,
    loader: $68d37aac8bca33d7$var$loader$a
};
const $68d37aac8bca33d7$var$quadrantChart = $68d37aac8bca33d7$var$plugin$a;
const $68d37aac8bca33d7$var$id$9 = "requirement";
const $68d37aac8bca33d7$var$detector$9 = (txt)=>{
    return txt.match(/^\s*requirement(Diagram)?/) !== null;
};

const $68d37aac8bca33d7$var$loader$9 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("bWiCT"));
    return {
        id: $68d37aac8bca33d7$var$id$9,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$9 = {
    id: $68d37aac8bca33d7$var$id$9,
    detector: $68d37aac8bca33d7$var$detector$9,
    loader: $68d37aac8bca33d7$var$loader$9
};
const $68d37aac8bca33d7$var$requirement = $68d37aac8bca33d7$var$plugin$9;
const $68d37aac8bca33d7$var$id$8 = "sequence";
const $68d37aac8bca33d7$var$detector$8 = (txt)=>{
    return txt.match(/^\s*sequenceDiagram/) !== null;
};

const $68d37aac8bca33d7$var$loader$8 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("cb1UV"));
    return {
        id: $68d37aac8bca33d7$var$id$8,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$8 = {
    id: $68d37aac8bca33d7$var$id$8,
    detector: $68d37aac8bca33d7$var$detector$8,
    loader: $68d37aac8bca33d7$var$loader$8
};
const $68d37aac8bca33d7$var$sequence = $68d37aac8bca33d7$var$plugin$8;
const $68d37aac8bca33d7$var$id$7 = "class";
const $68d37aac8bca33d7$var$detector$7 = (txt, config2)=>{
    var _a;
    if (((_a = config2 == null ? void 0 : config2.class) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return false;
    return txt.match(/^\s*classDiagram/) !== null;
};

const $68d37aac8bca33d7$var$loader$7 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("9j7Zw"));
    return {
        id: $68d37aac8bca33d7$var$id$7,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$7 = {
    id: $68d37aac8bca33d7$var$id$7,
    detector: $68d37aac8bca33d7$var$detector$7,
    loader: $68d37aac8bca33d7$var$loader$7
};
const $68d37aac8bca33d7$var$classDiagram = $68d37aac8bca33d7$var$plugin$7;
const $68d37aac8bca33d7$var$id$6 = "classDiagram";
const $68d37aac8bca33d7$var$detector$6 = (txt, config2)=>{
    var _a;
    if (txt.match(/^\s*classDiagram/) !== null && ((_a = config2 == null ? void 0 : config2.class) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return true;
    return txt.match(/^\s*classDiagram-v2/) !== null;
};

const $68d37aac8bca33d7$var$loader$6 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("2JBCR"));
    return {
        id: $68d37aac8bca33d7$var$id$6,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$6 = {
    id: $68d37aac8bca33d7$var$id$6,
    detector: $68d37aac8bca33d7$var$detector$6,
    loader: $68d37aac8bca33d7$var$loader$6
};
const $68d37aac8bca33d7$var$classDiagramV2 = $68d37aac8bca33d7$var$plugin$6;
const $68d37aac8bca33d7$var$id$5 = "state";
const $68d37aac8bca33d7$var$detector$5 = (txt, config2)=>{
    var _a;
    if (((_a = config2 == null ? void 0 : config2.state) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return false;
    return txt.match(/^\s*stateDiagram/) !== null;
};

const $68d37aac8bca33d7$var$loader$5 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("1UdKe"));
    return {
        id: $68d37aac8bca33d7$var$id$5,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$5 = {
    id: $68d37aac8bca33d7$var$id$5,
    detector: $68d37aac8bca33d7$var$detector$5,
    loader: $68d37aac8bca33d7$var$loader$5
};
const $68d37aac8bca33d7$var$state = $68d37aac8bca33d7$var$plugin$5;
const $68d37aac8bca33d7$var$id$4 = "stateDiagram";
const $68d37aac8bca33d7$var$detector$4 = (text, config2)=>{
    var _a, _b;
    if (text.match(/^\s*stateDiagram-v2/) !== null) return true;
    if (text.match(/^\s*stateDiagram/) && ((_a = config2 == null ? void 0 : config2.state) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return true;
    if (text.match(/^\s*stateDiagram/) && ((_b = config2 == null ? void 0 : config2.state) == null ? void 0 : _b.defaultRenderer) === "dagre-wrapper") return true;
    return false;
};

const $68d37aac8bca33d7$var$loader$4 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("1bnvs"));
    return {
        id: $68d37aac8bca33d7$var$id$4,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$4 = {
    id: $68d37aac8bca33d7$var$id$4,
    detector: $68d37aac8bca33d7$var$detector$4,
    loader: $68d37aac8bca33d7$var$loader$4
};
const $68d37aac8bca33d7$var$stateV2 = $68d37aac8bca33d7$var$plugin$4;
const $68d37aac8bca33d7$var$id$3 = "journey";
const $68d37aac8bca33d7$var$detector$3 = (txt)=>{
    return txt.match(/^\s*journey/) !== null;
};

const $68d37aac8bca33d7$var$loader$3 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("fJnyl"));
    return {
        id: $68d37aac8bca33d7$var$id$3,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$3 = {
    id: $68d37aac8bca33d7$var$id$3,
    detector: $68d37aac8bca33d7$var$detector$3,
    loader: $68d37aac8bca33d7$var$loader$3
};
const $68d37aac8bca33d7$var$journey = $68d37aac8bca33d7$var$plugin$3;
const $68d37aac8bca33d7$var$getStyles = ()=>``;
const $68d37aac8bca33d7$var$styles = $68d37aac8bca33d7$var$getStyles;
const $68d37aac8bca33d7$var$setConf = function() {};
const $68d37aac8bca33d7$var$draw = (_text, id2, mermaidVersion)=>{
    try {
        $68d37aac8bca33d7$export$882b5998b3b9117c.debug("Renering svg for syntax error\n");
        const svg = (0, $htTEB.default)("#" + id2);
        const g = svg.append("g");
        g.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z");
        g.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z");
        g.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z");
        g.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
        g.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
        g.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z");
        g.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text");
        g.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text("mermaid version " + mermaidVersion);
        svg.attr("height", 100);
        svg.attr("width", 500);
        svg.attr("viewBox", "768 0 912 512");
    } catch (e) {
        $68d37aac8bca33d7$export$882b5998b3b9117c.error("Error while rendering info diagram");
        $68d37aac8bca33d7$export$882b5998b3b9117c.error($68d37aac8bca33d7$var$getErrorMessage(e));
    }
};
const $68d37aac8bca33d7$var$errorRenderer = {
    setConf: $68d37aac8bca33d7$var$setConf,
    draw: $68d37aac8bca33d7$var$draw
};
const $68d37aac8bca33d7$var$diagram = {
    db: {
        clear: ()=>{}
    },
    styles: $68d37aac8bca33d7$var$styles,
    renderer: $68d37aac8bca33d7$var$errorRenderer,
    parser: {
        parser: {
            yy: {}
        },
        parse: ()=>{}
    },
    init: ()=>{}
};
const $68d37aac8bca33d7$var$errorDiagram = $68d37aac8bca33d7$var$diagram;
const $68d37aac8bca33d7$var$id$2 = "flowchart-elk";
const $68d37aac8bca33d7$var$detector$2 = (txt, config2)=>{
    var _a;
    if (// If diagram explicitly states flowchart-elk
    txt.match(/^\s*flowchart-elk/) || // If a flowchart/graph diagram has their default renderer set to elk
    txt.match(/^\s*flowchart|graph/) && ((_a = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a.defaultRenderer) === "elk") return true;
    return false;
};

const $68d37aac8bca33d7$var$loader$2 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("1EOW0"));
    return {
        id: $68d37aac8bca33d7$var$id$2,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$2 = {
    id: $68d37aac8bca33d7$var$id$2,
    detector: $68d37aac8bca33d7$var$detector$2,
    loader: $68d37aac8bca33d7$var$loader$2
};
const $68d37aac8bca33d7$var$flowchartElk = $68d37aac8bca33d7$var$plugin$2;
const $68d37aac8bca33d7$var$id$1 = "timeline";
const $68d37aac8bca33d7$var$detector$1 = (txt)=>{
    return txt.match(/^\s*timeline/) !== null;
};

const $68d37aac8bca33d7$var$loader$1 = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("kramD"));
    return {
        id: $68d37aac8bca33d7$var$id$1,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin$1 = {
    id: $68d37aac8bca33d7$var$id$1,
    detector: $68d37aac8bca33d7$var$detector$1,
    loader: $68d37aac8bca33d7$var$loader$1
};
const $68d37aac8bca33d7$var$timeline = $68d37aac8bca33d7$var$plugin$1;
const $68d37aac8bca33d7$var$id = "mindmap";
const $68d37aac8bca33d7$var$detector = (txt)=>{
    return txt.match(/^\s*mindmap/) !== null;
};

const $68d37aac8bca33d7$var$loader = async ()=>{
    const { diagram: diagram2  } = await (parcelRequire("kiktD"));
    return {
        id: $68d37aac8bca33d7$var$id,
        diagram: diagram2
    };
};
const $68d37aac8bca33d7$var$plugin = {
    id: $68d37aac8bca33d7$var$id,
    detector: $68d37aac8bca33d7$var$detector,
    loader: $68d37aac8bca33d7$var$loader
};
const $68d37aac8bca33d7$var$mindmap = $68d37aac8bca33d7$var$plugin;
let $68d37aac8bca33d7$var$hasLoadedDiagrams = false;
const $68d37aac8bca33d7$var$addDiagrams = ()=>{
    if ($68d37aac8bca33d7$var$hasLoadedDiagrams) return;
    $68d37aac8bca33d7$var$hasLoadedDiagrams = true;
    $68d37aac8bca33d7$var$registerDiagram("error", $68d37aac8bca33d7$var$errorDiagram, (text)=>{
        return text.toLowerCase().trim() === "error";
    });
    $68d37aac8bca33d7$var$registerDiagram("---", // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
        db: {
            clear: ()=>{}
        },
        styles: {},
        // should never be used
        renderer: {},
        // should never be used
        parser: {
            parser: {
                yy: {}
            },
            parse: ()=>{
                throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
            }
        },
        init: ()=>null
    }, (text)=>{
        return text.toLowerCase().trimStart().startsWith("---");
    });
    $68d37aac8bca33d7$var$registerLazyLoadedDiagrams($68d37aac8bca33d7$var$c4, $68d37aac8bca33d7$var$classDiagramV2, $68d37aac8bca33d7$var$classDiagram, $68d37aac8bca33d7$var$er, $68d37aac8bca33d7$var$gantt, $68d37aac8bca33d7$var$info, $68d37aac8bca33d7$var$pie, $68d37aac8bca33d7$var$requirement, $68d37aac8bca33d7$var$sequence, $68d37aac8bca33d7$var$flowchartElk, $68d37aac8bca33d7$var$flowchartV2, $68d37aac8bca33d7$var$flowchart, $68d37aac8bca33d7$var$mindmap, $68d37aac8bca33d7$var$timeline, $68d37aac8bca33d7$var$git, $68d37aac8bca33d7$var$stateV2, $68d37aac8bca33d7$var$state, $68d37aac8bca33d7$var$journey, $68d37aac8bca33d7$var$quadrantChart);
};
const $68d37aac8bca33d7$var$cleanupComments = (text)=>{
    return text.trimStart().replace(/^\s*%%(?!{)[^\n]+\n?/gm, "");
};
class $68d37aac8bca33d7$var$Diagram {
    constructor(text){
        var _a, _b;
        this.text = text;
        this.type = "graph";
        this.text += "\n";
        const cnf = $68d37aac8bca33d7$export$db3b6bfb95261072();
        try {
            this.type = $68d37aac8bca33d7$var$detectType(text, cnf);
        } catch (e) {
            this.type = "error";
            this.detectError = e;
        }
        const diagram2 = $68d37aac8bca33d7$var$getDiagram(this.type);
        $68d37aac8bca33d7$export$882b5998b3b9117c.debug("Type " + this.type);
        this.db = diagram2.db;
        (_b = (_a = this.db).clear) == null || _b.call(_a);
        this.renderer = diagram2.renderer;
        this.parser = diagram2.parser;
        const originalParse = this.parser.parse.bind(this.parser);
        this.parser.parse = (text2)=>originalParse($68d37aac8bca33d7$var$cleanupComments($68d37aac8bca33d7$var$extractFrontMatter(text2, this.db)));
        this.parser.parser.yy = this.db;
        if (diagram2.init) {
            diagram2.init(cnf);
            $68d37aac8bca33d7$export$882b5998b3b9117c.info("Initialized diagram " + this.type, cnf);
        }
        this.parse();
    }
    parse() {
        var _a, _b;
        if (this.detectError) throw this.detectError;
        (_b = (_a = this.db).clear) == null || _b.call(_a);
        this.parser.parse(this.text);
    }
    async render(id2, version2) {
        await this.renderer.draw(this.text, id2, version2, this);
    }
    getParser() {
        return this.parser;
    }
    getType() {
        return this.type;
    }
}
const $68d37aac8bca33d7$var$getDiagramFromText = async (text)=>{
    const type2 = $68d37aac8bca33d7$var$detectType(text, $68d37aac8bca33d7$export$db3b6bfb95261072());
    try {
        $68d37aac8bca33d7$var$getDiagram(type2);
    } catch (error) {
        const loader2 = $68d37aac8bca33d7$var$getDiagramLoader(type2);
        if (!loader2) throw new $68d37aac8bca33d7$var$UnknownDiagramError(`Diagram ${type2} not found.`);
        const { id: id2 , diagram: diagram2  } = await loader2();
        $68d37aac8bca33d7$var$registerDiagram(id2, diagram2);
    }
    return new $68d37aac8bca33d7$var$Diagram(text);
};
let $68d37aac8bca33d7$var$interactionFunctions = [];
const $68d37aac8bca33d7$export$a9c23c6ac3fc3eca = (func)=>{
    $68d37aac8bca33d7$var$interactionFunctions.push(func);
};
const $68d37aac8bca33d7$var$attachFunctions = ()=>{
    $68d37aac8bca33d7$var$interactionFunctions.forEach((f)=>{
        f();
    });
    $68d37aac8bca33d7$var$interactionFunctions = [];
};
const $68d37aac8bca33d7$var$SVG_ROLE = "graphics-document document";
function $68d37aac8bca33d7$var$setA11yDiagramInfo(svg, diagramType) {
    svg.attr("role", $68d37aac8bca33d7$var$SVG_ROLE);
    if (!(0, $kj1eP.default)(diagramType)) svg.attr("aria-roledescription", diagramType);
}
function $68d37aac8bca33d7$var$addSVGa11yTitleDescription(svg, a11yTitle, a11yDesc, baseId) {
    if (svg.insert === void 0) return;
    if (a11yTitle || a11yDesc) {
        if (a11yDesc) {
            const descId = "chart-desc-" + baseId;
            svg.attr("aria-describedby", descId);
            svg.insert("desc", ":first-child").attr("id", descId).text(a11yDesc);
        }
        if (a11yTitle) {
            const titleId = "chart-title-" + baseId;
            svg.attr("aria-labelledby", titleId);
            svg.insert("title", ":first-child").attr("id", titleId).text(a11yTitle);
        }
    } else return;
}
const $68d37aac8bca33d7$var$CLASSDEF_DIAGRAMS = [
    "graph",
    "flowchart",
    "flowchart-v2",
    "flowchart-elk",
    "stateDiagram",
    "stateDiagram-v2"
];
const $68d37aac8bca33d7$var$MAX_TEXTLENGTH = 5e4;
const $68d37aac8bca33d7$var$MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
const $68d37aac8bca33d7$var$SECURITY_LVL_SANDBOX = "sandbox";
const $68d37aac8bca33d7$var$SECURITY_LVL_LOOSE = "loose";
const $68d37aac8bca33d7$var$XMLNS_SVG_STD = "http://www.w3.org/2000/svg";
const $68d37aac8bca33d7$var$XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink";
const $68d37aac8bca33d7$var$XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml";
const $68d37aac8bca33d7$var$IFRAME_WIDTH = "100%";
const $68d37aac8bca33d7$var$IFRAME_HEIGHT = "100%";
const $68d37aac8bca33d7$var$IFRAME_STYLES = "border:0;margin:0;";
const $68d37aac8bca33d7$var$IFRAME_BODY_STYLE = "margin:0";
const $68d37aac8bca33d7$var$IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups";
const $68d37aac8bca33d7$var$IFRAME_NOT_SUPPORTED_MSG = 'The "iframe" tag is not supported by your browser.';
const $68d37aac8bca33d7$var$DOMPURIFY_TAGS = [
    "foreignobject"
];
const $68d37aac8bca33d7$var$DOMPURIFY_ATTR = [
    "dominant-baseline"
];
async function $68d37aac8bca33d7$var$parse$1(text, parseOptions) {
    $68d37aac8bca33d7$var$addDiagrams();
    try {
        const diagram2 = await $68d37aac8bca33d7$var$getDiagramFromText(text);
        diagram2.parse();
    } catch (error) {
        if (parseOptions == null ? void 0 : parseOptions.suppressErrors) return false;
        throw error;
    }
    return true;
}
const $68d37aac8bca33d7$var$encodeEntities = function(text) {
    let txt = text;
    txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
        return s.substring(0, s.length - 1);
    });
    txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
        return s.substring(0, s.length - 1);
    });
    txt = txt.replace(/#\w+;/g, function(s) {
        const innerTxt = s.substring(1, s.length - 1);
        const isInt = /^\+?\d+$/.test(innerTxt);
        if (isInt) return "ﬂ\xb0\xb0" + innerTxt + "\xb6\xdf";
        else return "ﬂ\xb0" + innerTxt + "\xb6\xdf";
    });
    return txt;
};
const $68d37aac8bca33d7$export$7f8ddf7c7c20b3cd = function(text) {
    return text.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
const $68d37aac8bca33d7$var$cssImportantStyles = (cssClass, element, cssClasses = [])=>{
    return `
.${cssClass} ${element} { ${cssClasses.join(" !important; ")} !important; }`;
};
const $68d37aac8bca33d7$var$createCssStyles = (config2, graphType, classDefs = {})=>{
    var _a;
    let cssStyles = "";
    if (config2.themeCSS !== void 0) cssStyles += `
${config2.themeCSS}`;
    if (config2.fontFamily !== void 0) cssStyles += `
:root { --mermaid-font-family: ${config2.fontFamily}}`;
    if (config2.altFontFamily !== void 0) cssStyles += `
:root { --mermaid-alt-font-family: ${config2.altFontFamily}}`;
    if (!(0, $kj1eP.default)(classDefs) && $68d37aac8bca33d7$var$CLASSDEF_DIAGRAMS.includes(graphType)) {
        const htmlLabels = config2.htmlLabels || ((_a = config2.flowchart) == null ? void 0 : _a.htmlLabels);
        const cssHtmlElements = [
            "> *",
            "span"
        ];
        const cssShapeElements = [
            "rect",
            "polygon",
            "ellipse",
            "circle",
            "path"
        ];
        const cssElements = htmlLabels ? cssHtmlElements : cssShapeElements;
        for(const classId in classDefs){
            const styleClassDef = classDefs[classId];
            if (!(0, $kj1eP.default)(styleClassDef.styles)) cssElements.forEach((cssElement)=>{
                cssStyles += $68d37aac8bca33d7$var$cssImportantStyles(styleClassDef.id, cssElement, styleClassDef.styles);
            });
            if (!(0, $kj1eP.default)(styleClassDef.textStyles)) cssStyles += $68d37aac8bca33d7$var$cssImportantStyles(styleClassDef.id, "tspan", styleClassDef.textStyles);
        }
    }
    return cssStyles;
};
const $68d37aac8bca33d7$var$createUserStyles = (config2, graphType, classDefs, svgId)=>{
    const userCSSstyles = $68d37aac8bca33d7$var$createCssStyles(config2, graphType, classDefs);
    const allStyles = $68d37aac8bca33d7$var$getStyles$2(graphType, userCSSstyles, config2.themeVariables);
    return (0, $lKQqi.serialize)((0, $lKQqi.compile)(`${svgId}{${allStyles}}`), (0, $lKQqi.stringify));
};
const $68d37aac8bca33d7$var$cleanUpSvgCode = (svgCode = "", inSandboxMode, useArrowMarkerUrls)=>{
    let cleanedUpSvg = svgCode;
    if (!useArrowMarkerUrls && !inSandboxMode) cleanedUpSvg = cleanedUpSvg.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, 'marker-end="url(#');
    cleanedUpSvg = $68d37aac8bca33d7$export$7f8ddf7c7c20b3cd(cleanedUpSvg);
    cleanedUpSvg = cleanedUpSvg.replace(/<br>/g, "<br/>");
    return cleanedUpSvg;
};
const $68d37aac8bca33d7$var$putIntoIFrame = (svgCode = "", svgElement)=>{
    const height = svgElement ? svgElement.viewBox.baseVal.height + "px" : $68d37aac8bca33d7$var$IFRAME_HEIGHT;
    const base64encodedSrc = btoa('<body style="' + $68d37aac8bca33d7$var$IFRAME_BODY_STYLE + '">' + svgCode + "</body>");
    return `<iframe style="width:${$68d37aac8bca33d7$var$IFRAME_WIDTH};height:${height};${$68d37aac8bca33d7$var$IFRAME_STYLES}" src="data:text/html;base64,${base64encodedSrc}" sandbox="${$68d37aac8bca33d7$var$IFRAME_SANDBOX_OPTS}">
  ${$68d37aac8bca33d7$var$IFRAME_NOT_SUPPORTED_MSG}
</iframe>`;
};
const $68d37aac8bca33d7$var$appendDivSvgG = (parentRoot, id2, enclosingDivId, divStyle, svgXlink)=>{
    const enclosingDiv = parentRoot.append("div");
    enclosingDiv.attr("id", enclosingDivId);
    if (divStyle) enclosingDiv.attr("style", divStyle);
    const svgNode = enclosingDiv.append("svg").attr("id", id2).attr("width", "100%").attr("xmlns", $68d37aac8bca33d7$var$XMLNS_SVG_STD);
    if (svgXlink) svgNode.attr("xmlns:xlink", svgXlink);
    svgNode.append("g");
    return parentRoot;
};
function $68d37aac8bca33d7$var$sandboxedIframe(parentNode, iFrameId) {
    return parentNode.append("iframe").attr("id", iFrameId).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const $68d37aac8bca33d7$var$removeExistingElements = (doc, id2, divId, iFrameId)=>{
    var _a, _b, _c;
    (_a = doc.getElementById(id2)) == null || _a.remove();
    (_b = doc.getElementById(divId)) == null || _b.remove();
    (_c = doc.getElementById(iFrameId)) == null || _c.remove();
};
const $68d37aac8bca33d7$var$render$1 = async function(id2, text, svgContainingElement) {
    var _a, _b, _c, _d;
    $68d37aac8bca33d7$var$addDiagrams();
    $68d37aac8bca33d7$var$reset();
    const graphInit = $68d37aac8bca33d7$export$3b14a55fb2447963.detectInit(text);
    if (graphInit) {
        $68d37aac8bca33d7$var$directiveSanitizer(graphInit);
        $68d37aac8bca33d7$var$addDirective(graphInit);
    }
    const config2 = $68d37aac8bca33d7$export$db3b6bfb95261072();
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug(config2);
    if (text.length > ((config2 == null ? void 0 : config2.maxTextSize) ?? $68d37aac8bca33d7$var$MAX_TEXTLENGTH)) text = $68d37aac8bca33d7$var$MAX_TEXTLENGTH_EXCEEDED_MSG;
    text = text.replace(/\r\n?/g, "\n");
    text = text.replace(/<(\w+)([^>]*)>/g, (match, tag, attributes)=>"<" + tag + attributes.replace(/="([^"]*)"/g, "='$1'") + ">");
    const idSelector = "#" + id2;
    const iFrameID = "i" + id2;
    const iFrameID_selector = "#" + iFrameID;
    const enclosingDivID = "d" + id2;
    const enclosingDivID_selector = "#" + enclosingDivID;
    let root = (0, $htTEB.default)("body");
    const isSandboxed = config2.securityLevel === $68d37aac8bca33d7$var$SECURITY_LVL_SANDBOX;
    const isLooseSecurityLevel = config2.securityLevel === $68d37aac8bca33d7$var$SECURITY_LVL_LOOSE;
    const fontFamily = config2.fontFamily;
    if (svgContainingElement !== void 0) {
        if (svgContainingElement) svgContainingElement.innerHTML = "";
        if (isSandboxed) {
            const iframe = $68d37aac8bca33d7$var$sandboxedIframe((0, $htTEB.default)(svgContainingElement), iFrameID);
            root = (0, $htTEB.default)(iframe.nodes()[0].contentDocument.body);
            root.node().style.margin = 0;
        } else root = (0, $htTEB.default)(svgContainingElement);
        $68d37aac8bca33d7$var$appendDivSvgG(root, id2, enclosingDivID, `font-family: ${fontFamily}`, $68d37aac8bca33d7$var$XMLNS_XLINK_STD);
    } else {
        $68d37aac8bca33d7$var$removeExistingElements(document, id2, enclosingDivID, iFrameID);
        if (isSandboxed) {
            const iframe = $68d37aac8bca33d7$var$sandboxedIframe((0, $htTEB.default)("body"), iFrameID);
            root = (0, $htTEB.default)(iframe.nodes()[0].contentDocument.body);
            root.node().style.margin = 0;
        } else root = (0, $htTEB.default)("body");
        $68d37aac8bca33d7$var$appendDivSvgG(root, id2, enclosingDivID);
    }
    text = $68d37aac8bca33d7$var$encodeEntities(text);
    let diag;
    let parseEncounteredException;
    try {
        diag = await $68d37aac8bca33d7$var$getDiagramFromText(text);
    } catch (error) {
        diag = new $68d37aac8bca33d7$var$Diagram("error");
        parseEncounteredException = error;
    }
    const element = root.select(enclosingDivID_selector).node();
    const graphType = diag.type;
    const svg = element.firstChild;
    const firstChild = svg.firstChild;
    const diagramClassDefs = $68d37aac8bca33d7$var$CLASSDEF_DIAGRAMS.includes(graphType) ? diag.renderer.getClasses(text, diag) : {};
    const rules = $68d37aac8bca33d7$var$createUserStyles(config2, graphType, // @ts-ignore convert renderer to TS.
    diagramClassDefs, idSelector);
    const style1 = document.createElement("style");
    style1.innerHTML = rules;
    svg.insertBefore(style1, firstChild);
    try {
        await diag.renderer.draw(text, id2, $68d37aac8bca33d7$var$version, diag);
    } catch (e) {
        $68d37aac8bca33d7$var$errorRenderer.draw(text, id2, $68d37aac8bca33d7$var$version);
        throw e;
    }
    const svgNode = root.select(`${enclosingDivID_selector} svg`);
    const a11yTitle = (_b = (_a = diag.db).getAccTitle) == null ? void 0 : _b.call(_a);
    const a11yDescr = (_d = (_c = diag.db).getAccDescription) == null ? void 0 : _d.call(_c);
    $68d37aac8bca33d7$var$addA11yInfo(graphType, svgNode, a11yTitle, a11yDescr);
    root.select(`[id="${id2}"]`).selectAll("foreignobject > *").attr("xmlns", $68d37aac8bca33d7$var$XMLNS_XHTML_STD);
    let svgCode = root.select(enclosingDivID_selector).node().innerHTML;
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug("config.arrowMarkerAbsolute", config2.arrowMarkerAbsolute);
    svgCode = $68d37aac8bca33d7$var$cleanUpSvgCode(svgCode, isSandboxed, $68d37aac8bca33d7$export$7ccc53e8f1e7dfc5(config2.arrowMarkerAbsolute));
    if (isSandboxed) {
        const svgEl = root.select(enclosingDivID_selector + " svg").node();
        svgCode = $68d37aac8bca33d7$var$putIntoIFrame(svgCode, svgEl);
    } else if (!isLooseSecurityLevel) svgCode = (0, (/*@__PURE__*/$parcel$interopDefault($aiFbc))).sanitize(svgCode, {
        ADD_TAGS: $68d37aac8bca33d7$var$DOMPURIFY_TAGS,
        ADD_ATTR: $68d37aac8bca33d7$var$DOMPURIFY_ATTR
    });
    $68d37aac8bca33d7$var$attachFunctions();
    if (parseEncounteredException) throw parseEncounteredException;
    const tmpElementSelector = isSandboxed ? iFrameID_selector : enclosingDivID_selector;
    const node = (0, $htTEB.default)(tmpElementSelector).node();
    if (node && "remove" in node) node.remove();
    return {
        svg: svgCode,
        bindFunctions: diag.db.bindFunctions
    };
};
function $68d37aac8bca33d7$var$initialize$1(options = {}) {
    var _a;
    if ((options == null ? void 0 : options.fontFamily) && !((_a = options.themeVariables) == null ? void 0 : _a.fontFamily)) {
        if (!options.themeVariables) options.themeVariables = {};
        options.themeVariables.fontFamily = options.fontFamily;
    }
    $68d37aac8bca33d7$var$saveConfigFromInitialize(options);
    if ((options == null ? void 0 : options.theme) && options.theme in $68d37aac8bca33d7$var$theme) options.themeVariables = $68d37aac8bca33d7$var$theme[options.theme].getThemeVariables(options.themeVariables);
    else if (options) options.themeVariables = $68d37aac8bca33d7$var$theme.default.getThemeVariables(options.themeVariables);
    const config2 = typeof options === "object" ? $68d37aac8bca33d7$var$setSiteConfig(options) : $68d37aac8bca33d7$var$getSiteConfig();
    $68d37aac8bca33d7$var$setLogLevel$1(config2.logLevel);
    $68d37aac8bca33d7$var$addDiagrams();
}
function $68d37aac8bca33d7$var$addA11yInfo(graphType, svgNode, a11yTitle, a11yDescr) {
    $68d37aac8bca33d7$var$setA11yDiagramInfo(svgNode, graphType);
    $68d37aac8bca33d7$var$addSVGa11yTitleDescription(svgNode, a11yTitle, a11yDescr, svgNode.attr("id"));
}
const $68d37aac8bca33d7$export$953cecd6e717a553 = Object.freeze({
    render: $68d37aac8bca33d7$var$render$1,
    parse: $68d37aac8bca33d7$var$parse$1,
    parseDirective: $68d37aac8bca33d7$export$b4171a6734a65d42,
    getDiagramFromText: $68d37aac8bca33d7$var$getDiagramFromText,
    initialize: $68d37aac8bca33d7$var$initialize$1,
    getConfig: $68d37aac8bca33d7$export$db3b6bfb95261072,
    setConfig: $68d37aac8bca33d7$export$9e5f44173e64f162,
    getSiteConfig: $68d37aac8bca33d7$var$getSiteConfig,
    updateSiteConfig: $68d37aac8bca33d7$var$updateSiteConfig,
    reset: ()=>{
        $68d37aac8bca33d7$var$reset();
    },
    globalReset: ()=>{
        $68d37aac8bca33d7$var$reset($68d37aac8bca33d7$export$2329c99376c9d0a4);
    },
    defaultConfig: $68d37aac8bca33d7$export$2329c99376c9d0a4
});
$68d37aac8bca33d7$var$setLogLevel$1($68d37aac8bca33d7$export$db3b6bfb95261072().logLevel);
$68d37aac8bca33d7$var$reset($68d37aac8bca33d7$export$db3b6bfb95261072());
const $68d37aac8bca33d7$var$handleError = (error, errors, parseError)=>{
    $68d37aac8bca33d7$export$882b5998b3b9117c.warn(error);
    if ($68d37aac8bca33d7$var$isDetailedError(error)) {
        if (parseError) parseError(error.str, error.hash);
        errors.push({
            ...error,
            message: error.str,
            error: error
        });
    } else {
        if (parseError) parseError(error);
        if (error instanceof Error) errors.push({
            str: error.message,
            message: error.message,
            hash: error.name,
            error: error
        });
    }
};
const $68d37aac8bca33d7$var$run = async function(options = {
    querySelector: ".mermaid"
}) {
    try {
        await $68d37aac8bca33d7$var$runThrowsErrors(options);
    } catch (e) {
        if ($68d37aac8bca33d7$var$isDetailedError(e)) $68d37aac8bca33d7$export$882b5998b3b9117c.error(e.str);
        if ($68d37aac8bca33d7$export$3466f893ebf79586.parseError) $68d37aac8bca33d7$export$3466f893ebf79586.parseError(e);
        if (!options.suppressErrors) {
            $68d37aac8bca33d7$export$882b5998b3b9117c.error("Use the suppressErrors option to suppress these errors");
            throw e;
        }
    }
};
const $68d37aac8bca33d7$var$runThrowsErrors = async function({ postRenderCallback: postRenderCallback , querySelector: querySelector , nodes: nodes  } = {
    querySelector: ".mermaid"
}) {
    const conf = $68d37aac8bca33d7$export$953cecd6e717a553.getConfig();
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug(`${!postRenderCallback ? "No " : ""}Callback function found`);
    let nodesToProcess;
    if (nodes) nodesToProcess = nodes;
    else if (querySelector) nodesToProcess = document.querySelectorAll(querySelector);
    else throw new Error("Nodes and querySelector are both undefined");
    $68d37aac8bca33d7$export$882b5998b3b9117c.debug(`Found ${nodesToProcess.length} diagrams`);
    if ((conf == null ? void 0 : conf.startOnLoad) !== void 0) {
        $68d37aac8bca33d7$export$882b5998b3b9117c.debug("Start On Load: " + (conf == null ? void 0 : conf.startOnLoad));
        $68d37aac8bca33d7$export$953cecd6e717a553.updateSiteConfig({
            startOnLoad: conf == null ? void 0 : conf.startOnLoad
        });
    }
    const idGenerator = new $68d37aac8bca33d7$export$3b14a55fb2447963.initIdGenerator(conf.deterministicIds, conf.deterministicIDSeed);
    let txt;
    const errors = [];
    for (const element of Array.from(nodesToProcess)){
        $68d37aac8bca33d7$export$882b5998b3b9117c.info("Rendering diagram: " + element.id);
        /*! Check if previously processed */ if (element.getAttribute("data-processed")) continue;
        element.setAttribute("data-processed", "true");
        const id2 = `mermaid-${idGenerator.next()}`;
        txt = element.innerHTML;
        txt = (0, $7Sll6.dedent)($68d37aac8bca33d7$export$3b14a55fb2447963.entityDecode(txt)).trim().replace(/<br\s*\/?>/gi, "<br/>");
        const init2 = $68d37aac8bca33d7$export$3b14a55fb2447963.detectInit(txt);
        if (init2) $68d37aac8bca33d7$export$882b5998b3b9117c.debug("Detected early reinit: ", init2);
        try {
            const { svg: svg , bindFunctions: bindFunctions  } = await $68d37aac8bca33d7$var$render(id2, txt, element);
            element.innerHTML = svg;
            if (postRenderCallback) await postRenderCallback(id2);
            if (bindFunctions) bindFunctions(element);
        } catch (error) {
            $68d37aac8bca33d7$var$handleError(error, errors, $68d37aac8bca33d7$export$3466f893ebf79586.parseError);
        }
    }
    if (errors.length > 0) throw errors[0];
};
const $68d37aac8bca33d7$var$initialize = function(config2) {
    $68d37aac8bca33d7$export$953cecd6e717a553.initialize(config2);
};
const $68d37aac8bca33d7$var$init = async function(config2, nodes, callback) {
    $68d37aac8bca33d7$export$882b5998b3b9117c.warn("mermaid.init is deprecated. Please use run instead.");
    if (config2) $68d37aac8bca33d7$var$initialize(config2);
    const runOptions = {
        postRenderCallback: callback,
        querySelector: ".mermaid"
    };
    if (typeof nodes === "string") runOptions.querySelector = nodes;
    else if (nodes) {
        if (nodes instanceof HTMLElement) runOptions.nodes = [
            nodes
        ];
        else runOptions.nodes = nodes;
    }
    await $68d37aac8bca33d7$var$run(runOptions);
};
const $68d37aac8bca33d7$var$registerExternalDiagrams = async (diagrams2, { lazyLoad: lazyLoad = true  } = {})=>{
    $68d37aac8bca33d7$var$registerLazyLoadedDiagrams(...diagrams2);
    if (lazyLoad === false) await $68d37aac8bca33d7$var$loadRegisteredDiagrams();
};
const $68d37aac8bca33d7$var$contentLoaded = function() {
    if ($68d37aac8bca33d7$export$3466f893ebf79586.startOnLoad) {
        const { startOnLoad: startOnLoad  } = $68d37aac8bca33d7$export$953cecd6e717a553.getConfig();
        if (startOnLoad) $68d37aac8bca33d7$export$3466f893ebf79586.run().catch((err)=>$68d37aac8bca33d7$export$882b5998b3b9117c.error("Mermaid failed to initialize", err));
    }
};
if (typeof document !== "undefined") /*!
   * Wait for document loaded before starting the execution
   */ window.addEventListener("load", $68d37aac8bca33d7$var$contentLoaded, false);
const $68d37aac8bca33d7$var$setParseErrorHandler = function(parseErrorHandler) {
    $68d37aac8bca33d7$export$3466f893ebf79586.parseError = parseErrorHandler;
};
const $68d37aac8bca33d7$var$executionQueue = [];
let $68d37aac8bca33d7$var$executionQueueRunning = false;
const $68d37aac8bca33d7$var$executeQueue = async ()=>{
    if ($68d37aac8bca33d7$var$executionQueueRunning) return;
    $68d37aac8bca33d7$var$executionQueueRunning = true;
    while($68d37aac8bca33d7$var$executionQueue.length > 0){
        const f = $68d37aac8bca33d7$var$executionQueue.shift();
        if (f) try {
            await f();
        } catch (e) {
            $68d37aac8bca33d7$export$882b5998b3b9117c.error("Error executing queue", e);
        }
    }
    $68d37aac8bca33d7$var$executionQueueRunning = false;
};
const $68d37aac8bca33d7$var$parse = async (text, parseOptions)=>{
    return new Promise((resolve, reject)=>{
        const performCall = ()=>new Promise((res, rej)=>{
                $68d37aac8bca33d7$export$953cecd6e717a553.parse(text, parseOptions).then((r)=>{
                    res(r);
                    resolve(r);
                }, (e)=>{
                    var _a;
                    $68d37aac8bca33d7$export$882b5998b3b9117c.error("Error parsing", e);
                    (_a = $68d37aac8bca33d7$export$3466f893ebf79586.parseError) == null || _a.call($68d37aac8bca33d7$export$3466f893ebf79586, e);
                    rej(e);
                    reject(e);
                });
            });
        $68d37aac8bca33d7$var$executionQueue.push(performCall);
        $68d37aac8bca33d7$var$executeQueue().catch(reject);
    });
};
const $68d37aac8bca33d7$var$render = (id2, text, container)=>{
    return new Promise((resolve, reject)=>{
        const performCall = ()=>new Promise((res, rej)=>{
                $68d37aac8bca33d7$export$953cecd6e717a553.render(id2, text, container).then((r)=>{
                    res(r);
                    resolve(r);
                }, (e)=>{
                    var _a;
                    $68d37aac8bca33d7$export$882b5998b3b9117c.error("Error parsing", e);
                    (_a = $68d37aac8bca33d7$export$3466f893ebf79586.parseError) == null || _a.call($68d37aac8bca33d7$export$3466f893ebf79586, e);
                    rej(e);
                    reject(e);
                });
            });
        $68d37aac8bca33d7$var$executionQueue.push(performCall);
        $68d37aac8bca33d7$var$executeQueue().catch(reject);
    });
};
const $68d37aac8bca33d7$export$3466f893ebf79586 = {
    startOnLoad: true,
    mermaidAPI: $68d37aac8bca33d7$export$953cecd6e717a553,
    parse: $68d37aac8bca33d7$var$parse,
    render: $68d37aac8bca33d7$var$render,
    init: $68d37aac8bca33d7$var$init,
    run: $68d37aac8bca33d7$var$run,
    registerExternalDiagrams: $68d37aac8bca33d7$var$registerExternalDiagrams,
    initialize: $68d37aac8bca33d7$var$initialize,
    parseError: void 0,
    contentLoaded: $68d37aac8bca33d7$var$contentLoaded,
    setParseErrorHandler: $68d37aac8bca33d7$var$setParseErrorHandler,
    detectType: $68d37aac8bca33d7$var$detectType
};

});
parcelRequire.register("1rtij", function(module, exports) {
!function(t, e) {
    module.exports = e();
}(module.exports, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: f,
                y: c,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: h
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = function(t) {
        return t instanceof _;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.$x = t.x || {}, this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return O;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!O.u(e) || e, h = O.p(t), l = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(h){
                case c:
                    return r ? l(1, 0) : l(31, 11);
                case f:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === f || o === c) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[O.p(t)]();
        }, m.add = function(r, h) {
            var d, l = this;
            r = Number(r);
            var $ = O.p(h), y = function(t) {
                var e = w(l);
                return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === f) return this.set(f, this.$M + r);
            if ($ === c) return this.set(c, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, f = n.months, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, c = function(t) {
                return O.s(s % 12 || 12, t, "0");
            }, d = n.meridiem || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            }, $ = {
                YY: String(this.$y).slice(-2),
                YYYY: O.s(this.$y, 4, "0"),
                M: a + 1,
                MM: O.s(a + 1, 2, "0"),
                MMM: h(n.monthsShort, a, f, 3),
                MMMM: h(f, a),
                D: this.$D,
                DD: O.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h(n.weekdaysMin, this.$W, o, 2),
                ddd: h(n.weekdaysShort, this.$W, o, 3),
                dddd: o[this.$W],
                H: String(s),
                HH: O.s(s, 2, "0"),
                h: c(1),
                hh: c(2),
                a: d(s, u, !0),
                A: d(s, u, !1),
                m: String(u),
                mm: O.s(u, 2, "0"),
                s: String(this.$s),
                ss: O.s(this.$s, 2, "0"),
                SSS: O.s(this.$ms, 3, "0"),
                Z: i
            };
            return r.replace(y, function(t, e) {
                return e || $[t] || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e, v = this - M, g = O.m(this, M);
            return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
        }, m.daysInMonth = function() {
            return this.endOf(f).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return O.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), T = _.prototype;
    return w.prototype = T, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            f
        ],
        [
            "$y",
            c
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        T[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
});

});

parcelRequire.register("gOlfO", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.sanitizeUrl = void 0;
var $c3d1cd6fdde33d55$var$invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
var $c3d1cd6fdde33d55$var$htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
var $c3d1cd6fdde33d55$var$htmlCtrlEntityRegex = /&(newline|tab);/gi;
var $c3d1cd6fdde33d55$var$ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var $c3d1cd6fdde33d55$var$urlSchemeRegex = /^.+(:|&colon;)/gim;
var $c3d1cd6fdde33d55$var$relativeFirstCharacters = [
    ".",
    "/"
];
function $c3d1cd6fdde33d55$var$isRelativeUrlWithoutProtocol(url) {
    return $c3d1cd6fdde33d55$var$relativeFirstCharacters.indexOf(url[0]) > -1;
}
// adapted from https://stackoverflow.com/a/29824550/2601552
function $c3d1cd6fdde33d55$var$decodeHtmlCharacters(str) {
    return str.replace($c3d1cd6fdde33d55$var$htmlEntitiesRegex, function(match, dec) {
        return String.fromCharCode(dec);
    });
}
function $c3d1cd6fdde33d55$var$sanitizeUrl(url) {
    var sanitizedUrl = $c3d1cd6fdde33d55$var$decodeHtmlCharacters(url || "").replace($c3d1cd6fdde33d55$var$htmlCtrlEntityRegex, "").replace($c3d1cd6fdde33d55$var$ctrlCharactersRegex, "").trim();
    if (!sanitizedUrl) return "about:blank";
    if ($c3d1cd6fdde33d55$var$isRelativeUrlWithoutProtocol(sanitizedUrl)) return sanitizedUrl;
    var urlSchemeParseResults = sanitizedUrl.match($c3d1cd6fdde33d55$var$urlSchemeRegex);
    if (!urlSchemeParseResults) return sanitizedUrl;
    var urlScheme = urlSchemeParseResults[0];
    if ($c3d1cd6fdde33d55$var$invalidProtocolRegex.test(urlScheme)) return "about:blank";
    return sanitizedUrl;
}
module.exports.sanitizeUrl = $c3d1cd6fdde33d55$var$sanitizeUrl;

});

parcelRequire.register("9ONqd", function(module, exports) {
$parcel$export(module.exports, "max", () => (parcelRequire("3xCGM")).default);
$parcel$export(module.exports, "min", () => (parcelRequire("hSebh")).default);
$parcel$export(module.exports, "axisBottom", () => (parcelRequire("cwERQ")).axisBottom);
$parcel$export(module.exports, "axisTop", () => (parcelRequire("cwERQ")).axisTop);
$parcel$export(module.exports, "svg", () => (parcelRequire("bmstC")).svg);
$parcel$export(module.exports, "interpolateHcl", () => (parcelRequire("csRQp")).default);
$parcel$export(module.exports, "scaleLinear", () => (parcelRequire("9BOAO")).default);
$parcel$export(module.exports, "scaleOrdinal", () => (parcelRequire("bDj6E")).default);
$parcel$export(module.exports, "scaleTime", () => (parcelRequire("4K3LS")).default);
$parcel$export(module.exports, "select", () => (parcelRequire("htTEB")).default);
$parcel$export(module.exports, "selectAll", () => (parcelRequire("3zqT7")).default);
$parcel$export(module.exports, "arc", () => (parcelRequire("92bdo")).default);
$parcel$export(module.exports, "curveBasis", () => (parcelRequire("1BrvX")).default);
$parcel$export(module.exports, "curveBasisClosed", () => (parcelRequire("8US7F")).default);
$parcel$export(module.exports, "curveBasisOpen", () => (parcelRequire("3fOcN")).default);
$parcel$export(module.exports, "curveBumpX", () => (parcelRequire("kHgim")).bumpX);
$parcel$export(module.exports, "curveBumpY", () => (parcelRequire("kHgim")).bumpY);
$parcel$export(module.exports, "curveBundle", () => (parcelRequire("bZdBH")).default);
$parcel$export(module.exports, "curveCardinal", () => (parcelRequire("fnxet")).default);
$parcel$export(module.exports, "curveCardinalClosed", () => (parcelRequire("642tg")).default);
$parcel$export(module.exports, "curveCardinalOpen", () => (parcelRequire("3vYLn")).default);
$parcel$export(module.exports, "curveCatmullRom", () => (parcelRequire("2TdSl")).default);
$parcel$export(module.exports, "curveCatmullRomClosed", () => (parcelRequire("6TZoA")).default);
$parcel$export(module.exports, "curveCatmullRomOpen", () => (parcelRequire("ii7b3")).default);
$parcel$export(module.exports, "curveLinear", () => (parcelRequire("4KZO1")).default);
$parcel$export(module.exports, "curveLinearClosed", () => (parcelRequire("4JsHV")).default);
$parcel$export(module.exports, "curveMonotoneX", () => (parcelRequire("3KqRo")).monotoneX);
$parcel$export(module.exports, "curveMonotoneY", () => (parcelRequire("3KqRo")).monotoneY);
$parcel$export(module.exports, "curveNatural", () => (parcelRequire("3xOzo")).default);
$parcel$export(module.exports, "curveStep", () => (parcelRequire("9R5Z3")).default);
$parcel$export(module.exports, "curveStepAfter", () => (parcelRequire("9R5Z3")).stepAfter);
$parcel$export(module.exports, "curveStepBefore", () => (parcelRequire("9R5Z3")).stepBefore);
$parcel$export(module.exports, "line", () => (parcelRequire("feJHx")).default);
$parcel$export(module.exports, "pie", () => (parcelRequire("kC99R")).default);
$parcel$export(module.exports, "timeDay", () => (parcelRequire("5Qaut")).timeDay);
$parcel$export(module.exports, "timeHour", () => (parcelRequire("05bKb")).timeHour);
$parcel$export(module.exports, "timeMinute", () => (parcelRequire("fRNv0")).timeMinute);
$parcel$export(module.exports, "timeMonth", () => (parcelRequire("1oTyM")).timeMonth);
$parcel$export(module.exports, "timeWeek", () => (parcelRequire("4KkLP")).timeSunday);
$parcel$export(module.exports, "timeFormat", () => (parcelRequire("7m7sT")).timeFormat);


parcelRequire("4Hlx6");

























parcelRequire("7wqi6");
parcelRequire("f42ny");

});
parcelRequire.register("h3PTt", function(module, exports) {

$parcel$export(module.exports, "default", () => $c6baf87b76d1189b$export$2e2bcd8739ae039);

var $h2PuQ = parcelRequire("h2PuQ");

var $1ntG2 = parcelRequire("1ntG2");

var $2lvU0 = parcelRequire("2lvU0");
const $c6baf87b76d1189b$var$ascendingBisect = (0, $1ntG2.default)((0, $h2PuQ.default));
const $c6baf87b76d1189b$export$4d945ad3ad5751b0 = $c6baf87b76d1189b$var$ascendingBisect.right;
const $c6baf87b76d1189b$export$df7d25c84ebd12a5 = $c6baf87b76d1189b$var$ascendingBisect.left;
const $c6baf87b76d1189b$export$c1cb828b1117c77b = (0, $1ntG2.default)((0, $2lvU0.default)).center;
var $c6baf87b76d1189b$export$2e2bcd8739ae039 = $c6baf87b76d1189b$export$4d945ad3ad5751b0;

});
parcelRequire.register("h2PuQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $c68a91b20f361908$export$2e2bcd8739ae039);
function $c68a91b20f361908$export$2e2bcd8739ae039(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

});

parcelRequire.register("1ntG2", function(module, exports) {

$parcel$export(module.exports, "default", () => $100ef5a581ce35fe$export$2e2bcd8739ae039);

var $h2PuQ = parcelRequire("h2PuQ");

var $cS6Wy = parcelRequire("cS6Wy");
function $100ef5a581ce35fe$export$2e2bcd8739ae039(f) {
    let compare1, compare2, delta;
    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
        compare1 = (0, $h2PuQ.default);
        compare2 = (d, x)=>(0, $h2PuQ.default)(f(d), x);
        delta = (d, x)=>f(d) - x;
    } else {
        compare1 = f === (0, $h2PuQ.default) || f === (0, $cS6Wy.default) ? f : $100ef5a581ce35fe$var$zero;
        compare2 = f;
        delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left: left,
        center: center,
        right: right
    };
}
function $100ef5a581ce35fe$var$zero() {
    return 0;
}

});
parcelRequire.register("cS6Wy", function(module, exports) {

$parcel$export(module.exports, "default", () => $95efe9fd814c2a9d$export$2e2bcd8739ae039);
function $95efe9fd814c2a9d$export$2e2bcd8739ae039(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

});


parcelRequire.register("2lvU0", function(module, exports) {

$parcel$export(module.exports, "default", () => $1b564a17597d92f6$export$2e2bcd8739ae039);
function $1b564a17597d92f6$export$2e2bcd8739ae039(x) {
    return x === null ? NaN : +x;
}
function* $1b564a17597d92f6$export$1f6c9cc012ebacae(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

});


parcelRequire.register("3xCGM", function(module, exports) {

$parcel$export(module.exports, "default", () => $294276fe443af5f9$export$2e2bcd8739ae039);
function $294276fe443af5f9$export$2e2bcd8739ae039(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}

});

parcelRequire.register("hSebh", function(module, exports) {

$parcel$export(module.exports, "default", () => $d0327ad89fbe8d01$export$2e2bcd8739ae039);
function $d0327ad89fbe8d01$export$2e2bcd8739ae039(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}

});

parcelRequire.register("8nNeJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $61a6aa10219c54a4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "tickIncrement", () => $61a6aa10219c54a4$export$bc64d00cc98e7e95);
$parcel$export(module.exports, "tickStep", () => $61a6aa10219c54a4$export$81087d9b915d4ede);
const $61a6aa10219c54a4$var$e10 = Math.sqrt(50), $61a6aa10219c54a4$var$e5 = Math.sqrt(10), $61a6aa10219c54a4$var$e2 = Math.sqrt(2);
function $61a6aa10219c54a4$var$tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= $61a6aa10219c54a4$var$e10 ? 10 : error >= $61a6aa10219c54a4$var$e5 ? 5 : error >= $61a6aa10219c54a4$var$e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
        inc = Math.pow(10, -power) / factor;
        i1 = Math.round(start * inc);
        i2 = Math.round(stop * inc);
        if (i1 / inc < start) ++i1;
        if (i2 / inc > stop) --i2;
        inc = -inc;
    } else {
        inc = Math.pow(10, power) * factor;
        i1 = Math.round(start / inc);
        i2 = Math.round(stop / inc);
        if (i1 * inc < start) ++i1;
        if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return $61a6aa10219c54a4$var$tickSpec(start, stop, count * 2);
    return [
        i1,
        i2,
        inc
    ];
}
function $61a6aa10219c54a4$export$2e2bcd8739ae039(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [
        start
    ];
    const reverse = stop < start, [i1, i2, inc] = reverse ? $61a6aa10219c54a4$var$tickSpec(stop, start, count) : $61a6aa10219c54a4$var$tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks = new Array(n);
    if (reverse) {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) * inc;
    } else {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) * inc;
    }
    return ticks;
}
function $61a6aa10219c54a4$export$bc64d00cc98e7e95(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return $61a6aa10219c54a4$var$tickSpec(start, stop, count)[2];
}
function $61a6aa10219c54a4$export$81087d9b915d4ede(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse = stop < start, inc = reverse ? $61a6aa10219c54a4$export$bc64d00cc98e7e95(stop, start, count) : $61a6aa10219c54a4$export$bc64d00cc98e7e95(start, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

});

parcelRequire.register("6Mwq4", function(module, exports) {

$parcel$export(module.exports, "InternMap", () => $4f005f9914ec0871$export$dcc6fb7d82b5bc7b);
class $4f005f9914ec0871$export$dcc6fb7d82b5bc7b extends Map {
    constructor(entries, key = $4f005f9914ec0871$var$keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key, value] of entries)this.set(key, value);
    }
    get(key) {
        return super.get($4f005f9914ec0871$var$intern_get(this, key));
    }
    has(key) {
        return super.has($4f005f9914ec0871$var$intern_get(this, key));
    }
    set(key, value) {
        return super.set($4f005f9914ec0871$var$intern_set(this, key), value);
    }
    delete(key) {
        return super.delete($4f005f9914ec0871$var$intern_delete(this, key));
    }
}
class $4f005f9914ec0871$export$55278c3294239828 extends Set {
    constructor(values, key = $4f005f9914ec0871$var$keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has($4f005f9914ec0871$var$intern_get(this, value));
    }
    add(value) {
        return super.add($4f005f9914ec0871$var$intern_set(this, value));
    }
    delete(value) {
        return super.delete($4f005f9914ec0871$var$intern_delete(this, value));
    }
}
function $4f005f9914ec0871$var$intern_get({ _intern: _intern , _key: _key  }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function $4f005f9914ec0871$var$intern_set({ _intern: _intern , _key: _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function $4f005f9914ec0871$var$intern_delete({ _intern: _intern , _key: _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
    }
    return value;
}
function $4f005f9914ec0871$var$keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

});


parcelRequire.register("cwERQ", function(module, exports) {

$parcel$export(module.exports, "axisTop", () => $91e82ca345c58ea6$export$59b8cfab074bdeb1);
$parcel$export(module.exports, "axisBottom", () => $91e82ca345c58ea6$export$e5cb22533a15e72e);

var $gRfJO = parcelRequire("gRfJO");
var $91e82ca345c58ea6$var$top = 1, $91e82ca345c58ea6$var$right = 2, $91e82ca345c58ea6$var$bottom = 3, $91e82ca345c58ea6$var$left = 4, $91e82ca345c58ea6$var$epsilon = 1e-6;
function $91e82ca345c58ea6$var$translateX(x) {
    return "translate(" + x + ",0)";
}
function $91e82ca345c58ea6$var$translateY(y) {
    return "translate(0," + y + ")";
}
function $91e82ca345c58ea6$var$number(scale) {
    return (d)=>+scale(d);
}
function $91e82ca345c58ea6$var$center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round()) offset = Math.round(offset);
    return (d)=>+scale(d) + offset;
}
function $91e82ca345c58ea6$var$entering() {
    return !this.__axis;
}
function $91e82ca345c58ea6$var$axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === $91e82ca345c58ea6$var$top || orient === $91e82ca345c58ea6$var$left ? -1 : 1, x = orient === $91e82ca345c58ea6$var$left || orient === $91e82ca345c58ea6$var$right ? "x" : "y", transform = orient === $91e82ca345c58ea6$var$top || orient === $91e82ca345c58ea6$var$bottom ? $91e82ca345c58ea6$var$translateX : $91e82ca345c58ea6$var$translateY;
    function axis(context) {
        var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : (0, $gRfJO.default) : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? $91e82ca345c58ea6$var$center : $91e82ca345c58ea6$var$number)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([
            null
        ]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
        path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
        text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === $91e82ca345c58ea6$var$top ? "0em" : orient === $91e82ca345c58ea6$var$bottom ? "0.71em" : "0.32em"));
        if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context).attr("opacity", $91e82ca345c58ea6$var$epsilon).attr("transform", function(d) {
                return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
            });
            tickEnter.attr("opacity", $91e82ca345c58ea6$var$epsilon).attr("transform", function(d) {
                var p = this.parentNode.__axis;
                return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
            });
        }
        tickExit.remove();
        path.attr("d", orient === $91e82ca345c58ea6$var$left || orient === $91e82ca345c58ea6$var$right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
        tick.attr("opacity", 1).attr("transform", function(d) {
            return transform(position(d) + offset);
        });
        line.attr(x + "2", k * tickSizeInner);
        text.attr(x, k * spacing).text(format);
        selection.filter($91e82ca345c58ea6$var$entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === $91e82ca345c58ea6$var$right ? "start" : orient === $91e82ca345c58ea6$var$left ? "end" : "middle");
        selection.each(function() {
            this.__axis = position;
        });
    }
    axis.scale = function(_) {
        return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function() {
        return tickArguments = Array.from(arguments), axis;
    };
    axis.tickArguments = function(_) {
        return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function(_) {
        return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function(_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function(_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function(_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function(_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function(_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    axis.offset = function(_) {
        return arguments.length ? (offset = +_, axis) : offset;
    };
    return axis;
}
function $91e82ca345c58ea6$export$59b8cfab074bdeb1(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$top, scale);
}
function $91e82ca345c58ea6$export$b0d2e24dc4f898f0(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$right, scale);
}
function $91e82ca345c58ea6$export$e5cb22533a15e72e(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$bottom, scale);
}
function $91e82ca345c58ea6$export$2749afb169a520d2(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$left, scale);
}

});
parcelRequire.register("gRfJO", function(module, exports) {

$parcel$export(module.exports, "default", () => $c45dcdcb74a5cae3$export$2e2bcd8739ae039);
function $c45dcdcb74a5cae3$export$2e2bcd8739ae039(x) {
    return x;
}

});



parcelRequire.register("4Hlx6", function(module, exports) {

var $f7DP5 = parcelRequire("f7DP5");

});
parcelRequire.register("f7DP5", function(module, exports) {

var $jG4k5 = parcelRequire("jG4k5");

var $jxOqe = parcelRequire("jxOqe");

var $fHuWd = parcelRequire("fHuWd");

var $htTEB = parcelRequire("htTEB");
var $kFrjH = parcelRequire("kFrjH");
parcelRequire("7wqi6");
var $dvn6n = parcelRequire("dvn6n");

var $fkdkb = parcelRequire("fkdkb");

var $ex2C2 = parcelRequire("ex2C2");

var $2L5dX = parcelRequire("2L5dX");
var $b02666738bc96fde$var$MODE_DRAG = {
    name: "drag"
}, $b02666738bc96fde$var$MODE_SPACE = {
    name: "space"
}, $b02666738bc96fde$var$MODE_HANDLE = {
    name: "handle"
}, $b02666738bc96fde$var$MODE_CENTER = {
    name: "center"
};
const { abs: $b02666738bc96fde$var$abs , max: $b02666738bc96fde$var$max , min: $b02666738bc96fde$var$min  } = Math;
function $b02666738bc96fde$var$number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function $b02666738bc96fde$var$number2(e) {
    return [
        $b02666738bc96fde$var$number1(e[0]),
        $b02666738bc96fde$var$number1(e[1])
    ];
}
var $b02666738bc96fde$var$X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map($b02666738bc96fde$var$type),
    input: function(x, e) {
        return x == null ? null : [
            [
                +x[0],
                e[0][1]
            ],
            [
                +x[1],
                e[1][1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var $b02666738bc96fde$var$Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map($b02666738bc96fde$var$type),
    input: function(y, e) {
        return y == null ? null : [
            [
                e[0][0],
                +y[0]
            ],
            [
                e[1][0],
                +y[1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var $b02666738bc96fde$var$XY = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map($b02666738bc96fde$var$type),
    input: function(xy) {
        return xy == null ? null : $b02666738bc96fde$var$number2(xy);
    },
    output: function(xy) {
        return xy;
    }
};
var $b02666738bc96fde$var$cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
};
var $b02666738bc96fde$var$flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var $b02666738bc96fde$var$flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var $b02666738bc96fde$var$signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
};
var $b02666738bc96fde$var$signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
};
function $b02666738bc96fde$var$type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function $b02666738bc96fde$var$defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function $b02666738bc96fde$var$defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
        svg = svg.viewBox.baseVal;
        return [
            [
                svg.x,
                svg.y
            ],
            [
                svg.x + svg.width,
                svg.y + svg.height
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            svg.width.baseVal.value,
            svg.height.baseVal.value
        ]
    ];
}
function $b02666738bc96fde$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function $b02666738bc96fde$var$local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function $b02666738bc96fde$var$empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function $b02666738bc96fde$export$69760394fc76f689(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function $b02666738bc96fde$export$979ace6c88860aa8() {
    return $b02666738bc96fde$var$brush($b02666738bc96fde$var$X);
}
function $b02666738bc96fde$export$468748b530991c54() {
    return $b02666738bc96fde$var$brush($b02666738bc96fde$var$Y);
}
function $b02666738bc96fde$export$2e2bcd8739ae039() {
    return $b02666738bc96fde$var$brush($b02666738bc96fde$var$XY);
}
function $b02666738bc96fde$var$brush(dim) {
    var extent = $b02666738bc96fde$var$defaultExtent, filter = $b02666738bc96fde$var$defaultFilter, touchable = $b02666738bc96fde$var$defaultTouchable, keys = true, listeners = (0, $jG4k5.default)("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            $b02666738bc96fde$var$type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $b02666738bc96fde$var$cursors.overlay).merge(overlay).each(function() {
            var extent = $b02666738bc96fde$var$local(this).extent;
            (0, $htTEB.default)(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            $b02666738bc96fde$var$type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", $b02666738bc96fde$var$cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return $b02666738bc96fde$var$cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection, event) {
        if (group.tween) group.on("start.brush", function(event) {
            emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function(event) {
            emitter(this, arguments).end(event);
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = (0, $fHuWd.default)(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            (0, $dvn6n.default)(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
        });
    };
    brush.clear = function(group, event) {
        brush.move(group, null, event);
    };
    function redraw() {
        var group = (0, $htTEB.default)(this), selection = $b02666738bc96fde$var$local(this).selection;
        if (selection) {
            group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function(d) {
                return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
            }).attr("y", function(d) {
                return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
            }).attr("width", function(d) {
                return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
            }).attr("height", function(d) {
                return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
            });
        } else group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
    function emitter(that, args, clean) {
        var emit = that.__brush.emitter;
        return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
        this.that = that;
        this.args = args;
        this.state = that.__brush;
        this.active = 0;
        this.clean = clean;
    }
    Emitter.prototype = {
        beforestart: function() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function(event, mode) {
            if (this.starting) this.starting = false, this.emit("start", event, mode);
            else this.emit("brush", event);
            return this;
        },
        brush: function(event, mode) {
            this.emit("brush", event, mode);
            return this;
        },
        end: function(event, mode) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
            return this;
        },
        emit: function(type, event, mode) {
            var d = (0, $htTEB.default)(this.that).datum();
            listeners.call(type, this.that, new (0, $ex2C2.default)(type, {
                sourceEvent: event,
                target: brush,
                selection: dim.output(this.state.selection),
                mode: mode,
                dispatch: listeners
            }), d);
        }
    };
    function started(event) {
        if (touchending && !event.touches) return;
        if (!filter.apply(this, arguments)) return;
        var that = this, type = event.target.__data__.type, mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? $b02666738bc96fde$var$MODE_DRAG : keys && event.altKey ? $b02666738bc96fde$var$MODE_CENTER : $b02666738bc96fde$var$MODE_HANDLE, signX = dim === $b02666738bc96fde$var$Y ? null : $b02666738bc96fde$var$signsX[type], signY = dim === $b02666738bc96fde$var$X ? null : $b02666738bc96fde$var$signsY[type], state = $b02666738bc96fde$var$local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [
            event
        ], (t)=>{
            const i = t.identifier;
            t = (0, $kFrjH.default)(t, that);
            t.point0 = t.slice();
            t.identifier = i;
            return t;
        });
        (0, $dvn6n.default)(that);
        var emit = emitter(that, arguments, true).beforestart();
        if (type === "overlay") {
            if (selection) moving = true;
            const pts = [
                points[0],
                points[1] || points[0]
            ];
            state.selection = selection = [
                [
                    w0 = dim === $b02666738bc96fde$var$Y ? W : $b02666738bc96fde$var$min(pts[0][0], pts[1][0]),
                    n0 = dim === $b02666738bc96fde$var$X ? N : $b02666738bc96fde$var$min(pts[0][1], pts[1][1])
                ],
                [
                    e0 = dim === $b02666738bc96fde$var$Y ? E : $b02666738bc96fde$var$max(pts[0][0], pts[1][0]),
                    s0 = dim === $b02666738bc96fde$var$X ? S : $b02666738bc96fde$var$max(pts[0][1], pts[1][1])
                ]
            ];
            if (points.length > 1) move(event);
        } else {
            w0 = selection[0][0];
            n0 = selection[0][1];
            e0 = selection[1][0];
            s0 = selection[1][1];
        }
        w1 = w0;
        n1 = n0;
        e1 = e0;
        s1 = s0;
        var group = (0, $htTEB.default)(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", $b02666738bc96fde$var$cursors[type]);
        if (event.touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = (0, $htTEB.default)(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            (0, $jxOqe.default)(event.view);
        }
        redraw.call(that);
        emit.start(event, mode.name);
        function moved(event) {
            for (const p of event.changedTouches || [
                event
            ]){
                for (const d of points)if (d.identifier === p.identifier) d.cur = (0, $kFrjH.default)(p, that);
            }
            if (shifting && !lockX && !lockY && points.length === 1) {
                const point = points[0];
                if ($b02666738bc96fde$var$abs(point.cur[0] - point[0]) > $b02666738bc96fde$var$abs(point.cur[1] - point[1])) lockY = true;
                else lockX = true;
            }
            for (const point of points)if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
            moving = true;
            (0, $2L5dX.default)(event);
            move(event);
        }
        function move(event) {
            const point = points[0], point0 = point.point0;
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case $b02666738bc96fde$var$MODE_SPACE:
                case $b02666738bc96fde$var$MODE_DRAG:
                    if (signX) dx = $b02666738bc96fde$var$max(W - w0, $b02666738bc96fde$var$min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = $b02666738bc96fde$var$max(N - n0, $b02666738bc96fde$var$min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case $b02666738bc96fde$var$MODE_HANDLE:
                    if (points[1]) {
                        if (signX) w1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, points[0][0])), e1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, points[1][0])), signX = 1;
                        if (signY) n1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, points[0][1])), s1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, points[1][1])), signY = 1;
                    } else {
                        if (signX < 0) dx = $b02666738bc96fde$var$max(W - w0, $b02666738bc96fde$var$min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                        else if (signX > 0) dx = $b02666738bc96fde$var$max(W - e0, $b02666738bc96fde$var$min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                        if (signY < 0) dy = $b02666738bc96fde$var$max(N - n0, $b02666738bc96fde$var$min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                        else if (signY > 0) dy = $b02666738bc96fde$var$max(N - s0, $b02666738bc96fde$var$min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    }
                    break;
                case $b02666738bc96fde$var$MODE_CENTER:
                    if (signX) w1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, w0 - dx * signX)), e1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, e0 + dx * signX));
                    if (signY) n1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, n0 - dy * signY)), s1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (type in $b02666738bc96fde$var$flipX) overlay.attr("cursor", $b02666738bc96fde$var$cursors[type = $b02666738bc96fde$var$flipX[type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (type in $b02666738bc96fde$var$flipY) overlay.attr("cursor", $b02666738bc96fde$var$cursors[type = $b02666738bc96fde$var$flipY[type]]);
            }
            if (state.selection) selection = state.selection; // May be set by brush.move!
            if (lockX) w1 = selection[0][0], e1 = selection[1][0];
            if (lockY) n1 = selection[0][1], s1 = selection[1][1];
            if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
                state.selection = [
                    [
                        w1,
                        n1
                    ],
                    [
                        e1,
                        s1
                    ]
                ];
                redraw.call(that);
                emit.brush(event, mode.name);
            }
        }
        function ended(event) {
            (0, $2L5dX.nopropagation)(event);
            if (event.touches) {
                if (event.touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                (0, $jxOqe.yesdrag)(event.view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", $b02666738bc96fde$var$cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if ($b02666738bc96fde$var$empty(selection)) state.selection = null, redraw.call(that);
            emit.end(event, mode.name);
        }
        function keydowned(event) {
            switch(event.keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === $b02666738bc96fde$var$MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = $b02666738bc96fde$var$MODE_CENTER;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $b02666738bc96fde$var$MODE_HANDLE || mode === $b02666738bc96fde$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = $b02666738bc96fde$var$MODE_SPACE;
                        overlay.attr("cursor", $b02666738bc96fde$var$cursors.selection);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            (0, $2L5dX.default)(event);
        }
        function keyupped(event) {
            switch(event.keyCode){
                case 16:
                    if (shifting) {
                        lockX = lockY = shifting = false;
                        move(event);
                    }
                    break;
                case 18:
                    if (mode === $b02666738bc96fde$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = $b02666738bc96fde$var$MODE_HANDLE;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $b02666738bc96fde$var$MODE_SPACE) {
                        if (event.altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = $b02666738bc96fde$var$MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = $b02666738bc96fde$var$MODE_HANDLE;
                        }
                        overlay.attr("cursor", $b02666738bc96fde$var$cursors[type]);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            (0, $2L5dX.default)(event);
        }
    }
    function touchmoved(event) {
        emitter(this, arguments).moved(event);
    }
    function touchended(event) {
        emitter(this, arguments).ended(event);
    }
    function initialize() {
        var state = this.__brush || {
            selection: null
        };
        state.extent = $b02666738bc96fde$var$number2(extent.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, $fkdkb.default)($b02666738bc96fde$var$number2(_)), brush) : extent;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $fkdkb.default)(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $fkdkb.default)(!!_), brush) : touchable;
    };
    brush.handleSize = function(_) {
        return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function(_) {
        return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? brush : value;
    };
    return brush;
}

});
parcelRequire.register("jG4k5", function(module, exports) {

$parcel$export(module.exports, "default", () => $e5354b03ec801fa9$export$2e2bcd8739ae039);
var $e5354b03ec801fa9$var$noop = {
    value: ()=>{}
};
function $e5354b03ec801fa9$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $e5354b03ec801fa9$var$Dispatch(_);
}
function $e5354b03ec801fa9$var$Dispatch(_) {
    this._ = _;
}
function $e5354b03ec801fa9$var$parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
$e5354b03ec801fa9$var$Dispatch.prototype = $e5354b03ec801fa9$var$dispatch.prototype = {
    constructor: $e5354b03ec801fa9$var$Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = $e5354b03ec801fa9$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $e5354b03ec801fa9$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $e5354b03ec801fa9$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $e5354b03ec801fa9$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new $e5354b03ec801fa9$var$Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $e5354b03ec801fa9$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $e5354b03ec801fa9$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $e5354b03ec801fa9$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $e5354b03ec801fa9$export$2e2bcd8739ae039 = $e5354b03ec801fa9$var$dispatch;

});


parcelRequire.register("jxOqe", function(module, exports) {

$parcel$export(module.exports, "default", () => $03ac00dfa1d6d210$export$2e2bcd8739ae039);
$parcel$export(module.exports, "yesdrag", () => $03ac00dfa1d6d210$export$833237748009e1e1);

var $htTEB = parcelRequire("htTEB");

var $2ytEU = parcelRequire("2ytEU");
function $03ac00dfa1d6d210$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = (0, $htTEB.default)(view).on("dragstart.drag", (0, $2ytEU.default), (0, $2ytEU.nonpassivecapture));
    if ("onselectstart" in root) selection.on("selectstart.drag", (0, $2ytEU.default), (0, $2ytEU.nonpassivecapture));
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $03ac00dfa1d6d210$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = (0, $htTEB.default)(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", (0, $2ytEU.default), (0, $2ytEU.nonpassivecapture));
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}

});
parcelRequire.register("k8Vco", function(module, exports) {

$parcel$export(module.exports, "default", () => $eaa0ec83d721630f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "childMatcher", () => $eaa0ec83d721630f$export$90c2759c036528);
function $eaa0ec83d721630f$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}
function $eaa0ec83d721630f$export$90c2759c036528(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

});

parcelRequire.register("bvCwd", function(module, exports) {

$parcel$export(module.exports, "default", () => $861077efbce665f7$export$2e2bcd8739ae039);

var $ipju6 = parcelRequire("ipju6");
function $861077efbce665f7$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return (0, $ipju6.default).hasOwnProperty(prefix) ? {
        space: (0, $ipju6.default)[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}

});
parcelRequire.register("ipju6", function(module, exports) {

$parcel$export(module.exports, "xhtml", () => $d669ad0760193831$export$201a3f7520ccc326);
$parcel$export(module.exports, "default", () => $d669ad0760193831$export$2e2bcd8739ae039);
var $d669ad0760193831$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $d669ad0760193831$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $d669ad0760193831$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

});


parcelRequire.register("kFrjH", function(module, exports) {

$parcel$export(module.exports, "default", () => $f0bcd38abe17c1e0$export$2e2bcd8739ae039);

var $cM5Mp = parcelRequire("cM5Mp");
function $f0bcd38abe17c1e0$export$2e2bcd8739ae039(event, node) {
    event = (0, $cM5Mp.default)(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}

});
parcelRequire.register("cM5Mp", function(module, exports) {

$parcel$export(module.exports, "default", () => $02666d379292d09d$export$2e2bcd8739ae039);
function $02666d379292d09d$export$2e2bcd8739ae039(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}

});


parcelRequire.register("htTEB", function(module, exports) {

$parcel$export(module.exports, "default", () => $cba050cd9a732395$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");
function $cba050cd9a732395$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new (0, $aK8hP.Selection)([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new (0, $aK8hP.Selection)([
        [
            selector
        ]
    ], (0, $aK8hP.root));
}

});
parcelRequire.register("aK8hP", function(module, exports) {

$parcel$export(module.exports, "root", () => $7d24a0ccddd34d02$export$e8e78c978b129247);
$parcel$export(module.exports, "Selection", () => $7d24a0ccddd34d02$export$52baac22726c72bf);
$parcel$export(module.exports, "default", () => $7d24a0ccddd34d02$export$2e2bcd8739ae039);

var $j1eNY = parcelRequire("j1eNY");

var $hIGCy = parcelRequire("hIGCy");

var $5IR3V = parcelRequire("5IR3V");

var $6wWgP = parcelRequire("6wWgP");

var $bIEKY = parcelRequire("bIEKY");

var $fPkiU = parcelRequire("fPkiU");

var $jfykR = parcelRequire("jfykR");

var $kIaFH = parcelRequire("kIaFH");

var $3pLHN = parcelRequire("3pLHN");

var $hRXQH = parcelRequire("hRXQH");

var $kmvyz = parcelRequire("kmvyz");

var $hZcAd = parcelRequire("hZcAd");

var $8XsWE = parcelRequire("8XsWE");

var $iTHdf = parcelRequire("iTHdf");

var $ioFDK = parcelRequire("ioFDK");

var $7OGxu = parcelRequire("7OGxu");

var $j40FT = parcelRequire("j40FT");

var $3dTBe = parcelRequire("3dTBe");

var $6vvUi = parcelRequire("6vvUi");

var $l8IRR = parcelRequire("l8IRR");

var $5srRG = parcelRequire("5srRG");

var $fXtLf = parcelRequire("fXtLf");

var $4vpjb = parcelRequire("4vpjb");

var $fqD78 = parcelRequire("fqD78");

var $f0OOZ = parcelRequire("f0OOZ");

var $99gcd = parcelRequire("99gcd");

var $igBco = parcelRequire("igBco");

var $fu4KM = parcelRequire("fu4KM");

var $b778i = parcelRequire("b778i");

var $keunA = parcelRequire("keunA");

var $idEev = parcelRequire("idEev");

var $8WXeb = parcelRequire("8WXeb");

var $kZ0yz = parcelRequire("kZ0yz");

var $7AigT = parcelRequire("7AigT");
var $7d24a0ccddd34d02$export$e8e78c978b129247 = [
    null
];
function $7d24a0ccddd34d02$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $7d24a0ccddd34d02$var$selection() {
    return new $7d24a0ccddd34d02$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $7d24a0ccddd34d02$export$e8e78c978b129247);
}
function $7d24a0ccddd34d02$var$selection_selection() {
    return this;
}
$7d24a0ccddd34d02$export$52baac22726c72bf.prototype = $7d24a0ccddd34d02$var$selection.prototype = {
    constructor: $7d24a0ccddd34d02$export$52baac22726c72bf,
    select: (0, $j1eNY.default),
    selectAll: (0, $hIGCy.default),
    selectChild: (0, $5IR3V.default),
    selectChildren: (0, $6wWgP.default),
    filter: (0, $bIEKY.default),
    data: (0, $fPkiU.default),
    enter: (0, $jfykR.default),
    exit: (0, $kIaFH.default),
    join: (0, $3pLHN.default),
    merge: (0, $hRXQH.default),
    selection: $7d24a0ccddd34d02$var$selection_selection,
    order: (0, $kmvyz.default),
    sort: (0, $hZcAd.default),
    call: (0, $8XsWE.default),
    nodes: (0, $iTHdf.default),
    node: (0, $ioFDK.default),
    size: (0, $7OGxu.default),
    empty: (0, $j40FT.default),
    each: (0, $3dTBe.default),
    attr: (0, $6vvUi.default),
    style: (0, $l8IRR.default),
    property: (0, $5srRG.default),
    classed: (0, $fXtLf.default),
    text: (0, $4vpjb.default),
    html: (0, $fqD78.default),
    raise: (0, $f0OOZ.default),
    lower: (0, $99gcd.default),
    append: (0, $igBco.default),
    insert: (0, $fu4KM.default),
    remove: (0, $b778i.default),
    clone: (0, $keunA.default),
    datum: (0, $idEev.default),
    on: (0, $8WXeb.default),
    dispatch: (0, $kZ0yz.default),
    [Symbol.iterator]: (0, $7AigT.default)
};
var $7d24a0ccddd34d02$export$2e2bcd8739ae039 = $7d24a0ccddd34d02$var$selection;

});
parcelRequire.register("j1eNY", function(module, exports) {

$parcel$export(module.exports, "default", () => $dd899846e9437541$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");

var $5ufpt = parcelRequire("5ufpt");
function $dd899846e9437541$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = (0, $5ufpt.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new (0, $aK8hP.Selection)(subgroups, this._parents);
}

});
parcelRequire.register("5ufpt", function(module, exports) {

$parcel$export(module.exports, "default", () => $3febb52ed900509b$export$2e2bcd8739ae039);
function $3febb52ed900509b$var$none() {}
function $3febb52ed900509b$export$2e2bcd8739ae039(selector) {
    return selector == null ? $3febb52ed900509b$var$none : function() {
        return this.querySelector(selector);
    };
}

});


parcelRequire.register("hIGCy", function(module, exports) {

$parcel$export(module.exports, "default", () => $ce679b51bd5464d2$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");

var $d9bit = parcelRequire("d9bit");

var $dm3vU = parcelRequire("dm3vU");
function $ce679b51bd5464d2$var$arrayAll(select) {
    return function() {
        return (0, $d9bit.default)(select.apply(this, arguments));
    };
}
function $ce679b51bd5464d2$export$2e2bcd8739ae039(select) {
    if (typeof select === "function") select = $ce679b51bd5464d2$var$arrayAll(select);
    else select = (0, $dm3vU.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new (0, $aK8hP.Selection)(subgroups, parents);
}

});
parcelRequire.register("d9bit", function(module, exports) {

$parcel$export(module.exports, "default", () => $9924e0fc36ffc89a$export$2e2bcd8739ae039);
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function $9924e0fc36ffc89a$export$2e2bcd8739ae039(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

});

parcelRequire.register("dm3vU", function(module, exports) {

$parcel$export(module.exports, "default", () => $9b900e2cd17f235b$export$2e2bcd8739ae039);
function $9b900e2cd17f235b$var$empty() {
    return [];
}
function $9b900e2cd17f235b$export$2e2bcd8739ae039(selector) {
    return selector == null ? $9b900e2cd17f235b$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}

});


parcelRequire.register("5IR3V", function(module, exports) {

$parcel$export(module.exports, "default", () => $42aa38e209f238c1$export$2e2bcd8739ae039);

var $k8Vco = parcelRequire("k8Vco");
var $42aa38e209f238c1$var$find = Array.prototype.find;
function $42aa38e209f238c1$var$childFind(match) {
    return function() {
        return $42aa38e209f238c1$var$find.call(this.children, match);
    };
}
function $42aa38e209f238c1$var$childFirst() {
    return this.firstElementChild;
}
function $42aa38e209f238c1$export$2e2bcd8739ae039(match) {
    return this.select(match == null ? $42aa38e209f238c1$var$childFirst : $42aa38e209f238c1$var$childFind(typeof match === "function" ? match : (0, $k8Vco.childMatcher)(match)));
}

});

parcelRequire.register("6wWgP", function(module, exports) {

$parcel$export(module.exports, "default", () => $4c12ee8a296f36ec$export$2e2bcd8739ae039);

var $k8Vco = parcelRequire("k8Vco");
var $4c12ee8a296f36ec$var$filter = Array.prototype.filter;
function $4c12ee8a296f36ec$var$children() {
    return Array.from(this.children);
}
function $4c12ee8a296f36ec$var$childrenFilter(match) {
    return function() {
        return $4c12ee8a296f36ec$var$filter.call(this.children, match);
    };
}
function $4c12ee8a296f36ec$export$2e2bcd8739ae039(match) {
    return this.selectAll(match == null ? $4c12ee8a296f36ec$var$children : $4c12ee8a296f36ec$var$childrenFilter(typeof match === "function" ? match : (0, $k8Vco.childMatcher)(match)));
}

});

parcelRequire.register("bIEKY", function(module, exports) {

$parcel$export(module.exports, "default", () => $88836b32e0a275f2$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");

var $k8Vco = parcelRequire("k8Vco");
function $88836b32e0a275f2$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = (0, $k8Vco.default)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, $aK8hP.Selection)(subgroups, this._parents);
}

});

parcelRequire.register("fPkiU", function(module, exports) {

$parcel$export(module.exports, "default", () => $b85b5e6212be4dc5$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");

var $jfykR = parcelRequire("jfykR");

var $9JczI = parcelRequire("9JczI");
function $b85b5e6212be4dc5$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, $jfykR.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $b85b5e6212be4dc5$var$bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new (0, $jfykR.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function $b85b5e6212be4dc5$var$datum(node) {
    return node.__data__;
}
function $b85b5e6212be4dc5$export$2e2bcd8739ae039(value, key) {
    if (!arguments.length) return Array.from(this, $b85b5e6212be4dc5$var$datum);
    var bind = key ? $b85b5e6212be4dc5$var$bindKey : $b85b5e6212be4dc5$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, $9JczI.default)(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = $b85b5e6212be4dc5$var$arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new (0, $aK8hP.Selection)(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function $b85b5e6212be4dc5$var$arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}

});
parcelRequire.register("jfykR", function(module, exports) {

$parcel$export(module.exports, "default", () => $e03a0d5478c8b267$export$2e2bcd8739ae039);
$parcel$export(module.exports, "EnterNode", () => $e03a0d5478c8b267$export$67b01759a14cf6a4);

var $gnhOG = parcelRequire("gnhOG");

var $aK8hP = parcelRequire("aK8hP");
function $e03a0d5478c8b267$export$2e2bcd8739ae039() {
    return new (0, $aK8hP.Selection)(this._enter || this._groups.map((0, $gnhOG.default)), this._parents);
}
function $e03a0d5478c8b267$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$e03a0d5478c8b267$export$67b01759a14cf6a4.prototype = {
    constructor: $e03a0d5478c8b267$export$67b01759a14cf6a4,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

});
parcelRequire.register("gnhOG", function(module, exports) {

$parcel$export(module.exports, "default", () => $bebc9d4ed04eb46b$export$2e2bcd8739ae039);
function $bebc9d4ed04eb46b$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}

});


parcelRequire.register("9JczI", function(module, exports) {

$parcel$export(module.exports, "default", () => $715212283e03896e$export$2e2bcd8739ae039);
function $715212283e03896e$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});


parcelRequire.register("kIaFH", function(module, exports) {

$parcel$export(module.exports, "default", () => $f14031d948e1de43$export$2e2bcd8739ae039);

var $gnhOG = parcelRequire("gnhOG");

var $aK8hP = parcelRequire("aK8hP");
function $f14031d948e1de43$export$2e2bcd8739ae039() {
    return new (0, $aK8hP.Selection)(this._exit || this._groups.map((0, $gnhOG.default)), this._parents);
}

});

parcelRequire.register("3pLHN", function(module, exports) {

$parcel$export(module.exports, "default", () => $27c8b63464c5fccf$export$2e2bcd8739ae039);
function $27c8b63464c5fccf$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}

});

parcelRequire.register("hRXQH", function(module, exports) {

$parcel$export(module.exports, "default", () => $d025cfaea4c02a7b$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");
function $d025cfaea4c02a7b$export$2e2bcd8739ae039(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, $aK8hP.Selection)(merges, this._parents);
}

});

parcelRequire.register("kmvyz", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed2e5735338611eb$export$2e2bcd8739ae039);
function $ed2e5735338611eb$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}

});

parcelRequire.register("hZcAd", function(module, exports) {

$parcel$export(module.exports, "default", () => $d181e4edf656ee7b$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");
function $d181e4edf656ee7b$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $d181e4edf656ee7b$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new (0, $aK8hP.Selection)(sortgroups, this._parents).order();
}
function $d181e4edf656ee7b$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

});

parcelRequire.register("8XsWE", function(module, exports) {

$parcel$export(module.exports, "default", () => $685a4943ecd8030c$export$2e2bcd8739ae039);
function $685a4943ecd8030c$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}

});

parcelRequire.register("iTHdf", function(module, exports) {

$parcel$export(module.exports, "default", () => $dc1ee22dedcc6583$export$2e2bcd8739ae039);
function $dc1ee22dedcc6583$export$2e2bcd8739ae039() {
    return Array.from(this);
}

});

parcelRequire.register("ioFDK", function(module, exports) {

$parcel$export(module.exports, "default", () => $d64ac4b710b2ae64$export$2e2bcd8739ae039);
function $d64ac4b710b2ae64$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}

});

parcelRequire.register("7OGxu", function(module, exports) {

$parcel$export(module.exports, "default", () => $5b0e335430d66e8c$export$2e2bcd8739ae039);
function $5b0e335430d66e8c$export$2e2bcd8739ae039() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}

});

parcelRequire.register("j40FT", function(module, exports) {

$parcel$export(module.exports, "default", () => $de0eea0c2fcc5d98$export$2e2bcd8739ae039);
function $de0eea0c2fcc5d98$export$2e2bcd8739ae039() {
    return !this.node();
}

});

parcelRequire.register("3dTBe", function(module, exports) {

$parcel$export(module.exports, "default", () => $258db6e928338846$export$2e2bcd8739ae039);
function $258db6e928338846$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}

});

parcelRequire.register("6vvUi", function(module, exports) {

$parcel$export(module.exports, "default", () => $4bce6365a3047be4$export$2e2bcd8739ae039);

var $bvCwd = parcelRequire("bvCwd");
function $4bce6365a3047be4$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $4bce6365a3047be4$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $4bce6365a3047be4$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $4bce6365a3047be4$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $4bce6365a3047be4$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $4bce6365a3047be4$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $4bce6365a3047be4$export$2e2bcd8739ae039(name, value) {
    var fullname = (0, $bvCwd.default)(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $4bce6365a3047be4$var$attrRemoveNS : $4bce6365a3047be4$var$attrRemove : typeof value === "function" ? fullname.local ? $4bce6365a3047be4$var$attrFunctionNS : $4bce6365a3047be4$var$attrFunction : fullname.local ? $4bce6365a3047be4$var$attrConstantNS : $4bce6365a3047be4$var$attrConstant)(fullname, value));
}

});

parcelRequire.register("l8IRR", function(module, exports) {

$parcel$export(module.exports, "default", () => $f63d26255e0880d2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "styleValue", () => $f63d26255e0880d2$export$5e3cec964f0b5efd);

var $god6n = parcelRequire("god6n");
function $f63d26255e0880d2$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $f63d26255e0880d2$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $f63d26255e0880d2$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $f63d26255e0880d2$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $f63d26255e0880d2$var$styleRemove : typeof value === "function" ? $f63d26255e0880d2$var$styleFunction : $f63d26255e0880d2$var$styleConstant)(name, value, priority == null ? "" : priority)) : $f63d26255e0880d2$export$5e3cec964f0b5efd(this.node(), name);
}
function $f63d26255e0880d2$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || (0, $god6n.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

});
parcelRequire.register("god6n", function(module, exports) {

$parcel$export(module.exports, "default", () => $bee90cff031655e0$export$2e2bcd8739ae039);
function $bee90cff031655e0$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
}

});


parcelRequire.register("5srRG", function(module, exports) {

$parcel$export(module.exports, "default", () => $3f952ead5b36195b$export$2e2bcd8739ae039);
function $3f952ead5b36195b$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $3f952ead5b36195b$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $3f952ead5b36195b$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $3f952ead5b36195b$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $3f952ead5b36195b$var$propertyRemove : typeof value === "function" ? $3f952ead5b36195b$var$propertyFunction : $3f952ead5b36195b$var$propertyConstant)(name, value)) : this.node()[name];
}

});

parcelRequire.register("fXtLf", function(module, exports) {

$parcel$export(module.exports, "default", () => $b9e3739b3c805413$export$2e2bcd8739ae039);
function $b9e3739b3c805413$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $b9e3739b3c805413$var$classList(node) {
    return node.classList || new $b9e3739b3c805413$var$ClassList(node);
}
function $b9e3739b3c805413$var$ClassList(node) {
    this._node = node;
    this._names = $b9e3739b3c805413$var$classArray(node.getAttribute("class") || "");
}
$b9e3739b3c805413$var$ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $b9e3739b3c805413$var$classedAdd(node, names) {
    var list = $b9e3739b3c805413$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $b9e3739b3c805413$var$classedRemove(node, names) {
    var list = $b9e3739b3c805413$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $b9e3739b3c805413$var$classedTrue(names) {
    return function() {
        $b9e3739b3c805413$var$classedAdd(this, names);
    };
}
function $b9e3739b3c805413$var$classedFalse(names) {
    return function() {
        $b9e3739b3c805413$var$classedRemove(this, names);
    };
}
function $b9e3739b3c805413$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $b9e3739b3c805413$var$classedAdd : $b9e3739b3c805413$var$classedRemove)(this, names);
    };
}
function $b9e3739b3c805413$export$2e2bcd8739ae039(name, value) {
    var names = $b9e3739b3c805413$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $b9e3739b3c805413$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $b9e3739b3c805413$var$classedFunction : value ? $b9e3739b3c805413$var$classedTrue : $b9e3739b3c805413$var$classedFalse)(names, value));
}

});

parcelRequire.register("4vpjb", function(module, exports) {

$parcel$export(module.exports, "default", () => $347db060a8c7c3eb$export$2e2bcd8739ae039);
function $347db060a8c7c3eb$var$textRemove() {
    this.textContent = "";
}
function $347db060a8c7c3eb$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $347db060a8c7c3eb$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $347db060a8c7c3eb$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $347db060a8c7c3eb$var$textRemove : (typeof value === "function" ? $347db060a8c7c3eb$var$textFunction : $347db060a8c7c3eb$var$textConstant)(value)) : this.node().textContent;
}

});

parcelRequire.register("fqD78", function(module, exports) {

$parcel$export(module.exports, "default", () => $b3b79ff9ba1fb838$export$2e2bcd8739ae039);
function $b3b79ff9ba1fb838$var$htmlRemove() {
    this.innerHTML = "";
}
function $b3b79ff9ba1fb838$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $b3b79ff9ba1fb838$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $b3b79ff9ba1fb838$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $b3b79ff9ba1fb838$var$htmlRemove : (typeof value === "function" ? $b3b79ff9ba1fb838$var$htmlFunction : $b3b79ff9ba1fb838$var$htmlConstant)(value)) : this.node().innerHTML;
}

});

parcelRequire.register("f0OOZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $aede47313cb933bf$export$2e2bcd8739ae039);
function $aede47313cb933bf$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $aede47313cb933bf$export$2e2bcd8739ae039() {
    return this.each($aede47313cb933bf$var$raise);
}

});

parcelRequire.register("99gcd", function(module, exports) {

$parcel$export(module.exports, "default", () => $6a91847da45fb5be$export$2e2bcd8739ae039);
function $6a91847da45fb5be$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $6a91847da45fb5be$export$2e2bcd8739ae039() {
    return this.each($6a91847da45fb5be$var$lower);
}

});

parcelRequire.register("igBco", function(module, exports) {

$parcel$export(module.exports, "default", () => $d4c69389a87234ad$export$2e2bcd8739ae039);

var $iU2FH = parcelRequire("iU2FH");
function $d4c69389a87234ad$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : (0, $iU2FH.default)(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}

});
parcelRequire.register("iU2FH", function(module, exports) {

$parcel$export(module.exports, "default", () => $dc2f8779cb428df3$export$2e2bcd8739ae039);

var $bvCwd = parcelRequire("bvCwd");

var $ipju6 = parcelRequire("ipju6");
function $dc2f8779cb428df3$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, $ipju6.xhtml) && document.documentElement.namespaceURI === (0, $ipju6.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $dc2f8779cb428df3$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $dc2f8779cb428df3$export$2e2bcd8739ae039(name) {
    var fullname = (0, $bvCwd.default)(name);
    return (fullname.local ? $dc2f8779cb428df3$var$creatorFixed : $dc2f8779cb428df3$var$creatorInherit)(fullname);
}

});


parcelRequire.register("fu4KM", function(module, exports) {

$parcel$export(module.exports, "default", () => $b45d584a594f366b$export$2e2bcd8739ae039);

var $iU2FH = parcelRequire("iU2FH");

var $5ufpt = parcelRequire("5ufpt");
function $b45d584a594f366b$var$constantNull() {
    return null;
}
function $b45d584a594f366b$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : (0, $iU2FH.default)(name), select = before == null ? $b45d584a594f366b$var$constantNull : typeof before === "function" ? before : (0, $5ufpt.default)(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}

});

parcelRequire.register("b778i", function(module, exports) {

$parcel$export(module.exports, "default", () => $8175e1977c26bbc5$export$2e2bcd8739ae039);
function $8175e1977c26bbc5$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $8175e1977c26bbc5$export$2e2bcd8739ae039() {
    return this.each($8175e1977c26bbc5$var$remove);
}

});

parcelRequire.register("keunA", function(module, exports) {

$parcel$export(module.exports, "default", () => $ebacae28113199b6$export$2e2bcd8739ae039);
function $ebacae28113199b6$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $ebacae28113199b6$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $ebacae28113199b6$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $ebacae28113199b6$var$selection_cloneDeep : $ebacae28113199b6$var$selection_cloneShallow);
}

});

parcelRequire.register("idEev", function(module, exports) {

$parcel$export(module.exports, "default", () => $d438a650732bc4d6$export$2e2bcd8739ae039);
function $d438a650732bc4d6$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

});

parcelRequire.register("8WXeb", function(module, exports) {

$parcel$export(module.exports, "default", () => $6841aee9ad27fb37$export$2e2bcd8739ae039);
function $6841aee9ad27fb37$var$contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function $6841aee9ad27fb37$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $6841aee9ad27fb37$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $6841aee9ad27fb37$var$onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = $6841aee9ad27fb37$var$contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function $6841aee9ad27fb37$export$2e2bcd8739ae039(typename, value, options) {
    var typenames = $6841aee9ad27fb37$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $6841aee9ad27fb37$var$onAdd : $6841aee9ad27fb37$var$onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}

});

parcelRequire.register("kZ0yz", function(module, exports) {

$parcel$export(module.exports, "default", () => $f469efa9a81d117a$export$2e2bcd8739ae039);

var $god6n = parcelRequire("god6n");
function $f469efa9a81d117a$var$dispatchEvent(node, type, params) {
    var window = (0, $god6n.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $f469efa9a81d117a$var$dispatchConstant(type, params) {
    return function() {
        return $f469efa9a81d117a$var$dispatchEvent(this, type, params);
    };
}
function $f469efa9a81d117a$var$dispatchFunction(type, params) {
    return function() {
        return $f469efa9a81d117a$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $f469efa9a81d117a$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $f469efa9a81d117a$var$dispatchFunction : $f469efa9a81d117a$var$dispatchConstant)(type, params));
}

});

parcelRequire.register("7AigT", function(module, exports) {

$parcel$export(module.exports, "default", () => $585a118d7f67559e$export$2e2bcd8739ae039);
function* $585a118d7f67559e$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
}

});



parcelRequire.register("3zqT7", function(module, exports) {

$parcel$export(module.exports, "default", () => $29997f62f51a083b$export$2e2bcd8739ae039);

var $d9bit = parcelRequire("d9bit");

var $aK8hP = parcelRequire("aK8hP");
function $29997f62f51a083b$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new (0, $aK8hP.Selection)([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new (0, $aK8hP.Selection)([
        (0, $d9bit.default)(selector)
    ], (0, $aK8hP.root));
}

});


parcelRequire.register("2ytEU", function(module, exports) {

$parcel$export(module.exports, "nonpassivecapture", () => $1dc5c35c53e70348$export$35431a0e47022de1);
$parcel$export(module.exports, "default", () => $1dc5c35c53e70348$export$2e2bcd8739ae039);
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const $1dc5c35c53e70348$export$524615cd03e458cc = {
    passive: false
};
const $1dc5c35c53e70348$export$35431a0e47022de1 = {
    capture: true,
    passive: false
};
function $1dc5c35c53e70348$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $1dc5c35c53e70348$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}

});



parcelRequire.register("fHuWd", function(module, exports) {

$parcel$export(module.exports, "default", () => $b6e2dec750af77c9$export$2e2bcd8739ae039);

var $gnwtP = parcelRequire("gnwtP");

var $drVmd = parcelRequire("drVmd");

var $7Q1i7 = parcelRequire("7Q1i7");

var $cEFLH = parcelRequire("cEFLH");

var $2bNuI = parcelRequire("2bNuI");

var $eHWYg = parcelRequire("eHWYg");

var $iKZ4H = parcelRequire("iKZ4H");

var $9fEb1 = parcelRequire("9fEb1");

var $kkK17 = parcelRequire("kkK17");
function $b6e2dec750af77c9$export$2e2bcd8739ae039(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, $9fEb1.default)(b) : (t === "number" ? (0, $2bNuI.default) : t === "string" ? (c = (0, $gnwtP.default)(b)) ? (b = c, $drVmd.default) : (0, $iKZ4H.default) : b instanceof (0, $gnwtP.default) ? (0, $drVmd.default) : b instanceof Date ? (0, $cEFLH.default) : (0, $kkK17.isNumberArray)(b) ? (0, $kkK17.default) : Array.isArray(b) ? (0, $7Q1i7.genericArray) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, $eHWYg.default) : (0, $2bNuI.default))(a, b);
}

});
parcelRequire.register("gnwtP", function(module, exports) {

$parcel$export(module.exports, "Color", () => $bec7fd2e9fdc69d8$export$892596cec99bc70e);
$parcel$export(module.exports, "default", () => $bec7fd2e9fdc69d8$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Rgb", () => $bec7fd2e9fdc69d8$export$5e05a94393ac29e3);
$parcel$export(module.exports, "rgbConvert", () => $bec7fd2e9fdc69d8$export$42da0a331c2802f5);
$parcel$export(module.exports, "rgb", () => $bec7fd2e9fdc69d8$export$8972dc0e6ad9238f);

var $fa7EJ = parcelRequire("fa7EJ");
function $bec7fd2e9fdc69d8$export$892596cec99bc70e() {}
var $bec7fd2e9fdc69d8$export$4adafc6ed0600c10 = 0.7;
var $bec7fd2e9fdc69d8$export$9eace2cc0d12c98d = 1 / $bec7fd2e9fdc69d8$export$4adafc6ed0600c10;
var $bec7fd2e9fdc69d8$var$reI = "\\s*([+-]?\\d+)\\s*", $bec7fd2e9fdc69d8$var$reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $bec7fd2e9fdc69d8$var$reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $bec7fd2e9fdc69d8$var$reHex = /^#([0-9a-f]{3,8})$/, $bec7fd2e9fdc69d8$var$reRgbInteger = new RegExp(`^rgb\\(${$bec7fd2e9fdc69d8$var$reI},${$bec7fd2e9fdc69d8$var$reI},${$bec7fd2e9fdc69d8$var$reI}\\)$`), $bec7fd2e9fdc69d8$var$reRgbPercent = new RegExp(`^rgb\\(${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reP}\\)$`), $bec7fd2e9fdc69d8$var$reRgbaInteger = new RegExp(`^rgba\\(${$bec7fd2e9fdc69d8$var$reI},${$bec7fd2e9fdc69d8$var$reI},${$bec7fd2e9fdc69d8$var$reI},${$bec7fd2e9fdc69d8$var$reN}\\)$`), $bec7fd2e9fdc69d8$var$reRgbaPercent = new RegExp(`^rgba\\(${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reN}\\)$`), $bec7fd2e9fdc69d8$var$reHslPercent = new RegExp(`^hsl\\(${$bec7fd2e9fdc69d8$var$reN},${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reP}\\)$`), $bec7fd2e9fdc69d8$var$reHslaPercent = new RegExp(`^hsla\\(${$bec7fd2e9fdc69d8$var$reN},${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reP},${$bec7fd2e9fdc69d8$var$reN}\\)$`);
var $bec7fd2e9fdc69d8$var$named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, $fa7EJ.default)($bec7fd2e9fdc69d8$export$892596cec99bc70e, $bec7fd2e9fdc69d8$export$2e2bcd8739ae039, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: $bec7fd2e9fdc69d8$var$color_formatHex,
    formatHex: $bec7fd2e9fdc69d8$var$color_formatHex,
    formatHex8: $bec7fd2e9fdc69d8$var$color_formatHex8,
    formatHsl: $bec7fd2e9fdc69d8$var$color_formatHsl,
    formatRgb: $bec7fd2e9fdc69d8$var$color_formatRgb,
    toString: $bec7fd2e9fdc69d8$var$color_formatRgb
});
function $bec7fd2e9fdc69d8$var$color_formatHex() {
    return this.rgb().formatHex();
}
function $bec7fd2e9fdc69d8$var$color_formatHex8() {
    return this.rgb().formatHex8();
}
function $bec7fd2e9fdc69d8$var$color_formatHsl() {
    return $bec7fd2e9fdc69d8$export$8133dc3fa904d6d1(this).formatHsl();
}
function $bec7fd2e9fdc69d8$var$color_formatRgb() {
    return this.rgb().formatRgb();
}
function $bec7fd2e9fdc69d8$export$2e2bcd8739ae039(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = $bec7fd2e9fdc69d8$var$reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? $bec7fd2e9fdc69d8$var$rgbn(m) // #ff0000
     : l === 3 ? new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? $bec7fd2e9fdc69d8$var$rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? $bec7fd2e9fdc69d8$var$rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = $bec7fd2e9fdc69d8$var$reRgbInteger.exec(format)) ? new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = $bec7fd2e9fdc69d8$var$reRgbPercent.exec(format)) ? new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = $bec7fd2e9fdc69d8$var$reRgbaInteger.exec(format)) ? $bec7fd2e9fdc69d8$var$rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = $bec7fd2e9fdc69d8$var$reRgbaPercent.exec(format)) ? $bec7fd2e9fdc69d8$var$rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = $bec7fd2e9fdc69d8$var$reHslPercent.exec(format)) ? $bec7fd2e9fdc69d8$var$hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = $bec7fd2e9fdc69d8$var$reHslaPercent.exec(format)) ? $bec7fd2e9fdc69d8$var$hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : $bec7fd2e9fdc69d8$var$named.hasOwnProperty(format) ? $bec7fd2e9fdc69d8$var$rgbn($bec7fd2e9fdc69d8$var$named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(NaN, NaN, NaN, 0) : null;
}
function $bec7fd2e9fdc69d8$var$rgbn(n) {
    return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function $bec7fd2e9fdc69d8$var$rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(r, g, b, a);
}
function $bec7fd2e9fdc69d8$export$42da0a331c2802f5(o) {
    if (!(o instanceof $bec7fd2e9fdc69d8$export$892596cec99bc70e)) o = $bec7fd2e9fdc69d8$export$2e2bcd8739ae039(o);
    if (!o) return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3;
    o = o.rgb();
    return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(o.r, o.g, o.b, o.opacity);
}
function $bec7fd2e9fdc69d8$export$8972dc0e6ad9238f(r, g, b, opacity) {
    return arguments.length === 1 ? $bec7fd2e9fdc69d8$export$42da0a331c2802f5(r) : new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(r, g, b, opacity == null ? 1 : opacity);
}
function $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)($bec7fd2e9fdc69d8$export$5e05a94393ac29e3, $bec7fd2e9fdc69d8$export$8972dc0e6ad9238f, (0, $fa7EJ.extend)($bec7fd2e9fdc69d8$export$892596cec99bc70e, {
    brighter (k) {
        k = k == null ? $bec7fd2e9fdc69d8$export$9eace2cc0d12c98d : Math.pow($bec7fd2e9fdc69d8$export$9eace2cc0d12c98d, k);
        return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? $bec7fd2e9fdc69d8$export$4adafc6ed0600c10 : Math.pow($bec7fd2e9fdc69d8$export$4adafc6ed0600c10, k);
        return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3($bec7fd2e9fdc69d8$var$clampi(this.r), $bec7fd2e9fdc69d8$var$clampi(this.g), $bec7fd2e9fdc69d8$var$clampi(this.b), $bec7fd2e9fdc69d8$var$clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: $bec7fd2e9fdc69d8$var$rgb_formatHex,
    formatHex: $bec7fd2e9fdc69d8$var$rgb_formatHex,
    formatHex8: $bec7fd2e9fdc69d8$var$rgb_formatHex8,
    formatRgb: $bec7fd2e9fdc69d8$var$rgb_formatRgb,
    toString: $bec7fd2e9fdc69d8$var$rgb_formatRgb
}));
function $bec7fd2e9fdc69d8$var$rgb_formatHex() {
    return `#${$bec7fd2e9fdc69d8$var$hex(this.r)}${$bec7fd2e9fdc69d8$var$hex(this.g)}${$bec7fd2e9fdc69d8$var$hex(this.b)}`;
}
function $bec7fd2e9fdc69d8$var$rgb_formatHex8() {
    return `#${$bec7fd2e9fdc69d8$var$hex(this.r)}${$bec7fd2e9fdc69d8$var$hex(this.g)}${$bec7fd2e9fdc69d8$var$hex(this.b)}${$bec7fd2e9fdc69d8$var$hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $bec7fd2e9fdc69d8$var$rgb_formatRgb() {
    const a = $bec7fd2e9fdc69d8$var$clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${$bec7fd2e9fdc69d8$var$clampi(this.r)}, ${$bec7fd2e9fdc69d8$var$clampi(this.g)}, ${$bec7fd2e9fdc69d8$var$clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function $bec7fd2e9fdc69d8$var$clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function $bec7fd2e9fdc69d8$var$clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function $bec7fd2e9fdc69d8$var$hex(value) {
    value = $bec7fd2e9fdc69d8$var$clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function $bec7fd2e9fdc69d8$var$hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new $bec7fd2e9fdc69d8$var$Hsl(h, s, l, a);
}
function $bec7fd2e9fdc69d8$export$8133dc3fa904d6d1(o) {
    if (o instanceof $bec7fd2e9fdc69d8$var$Hsl) return new $bec7fd2e9fdc69d8$var$Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $bec7fd2e9fdc69d8$export$892596cec99bc70e)) o = $bec7fd2e9fdc69d8$export$2e2bcd8739ae039(o);
    if (!o) return new $bec7fd2e9fdc69d8$var$Hsl;
    if (o instanceof $bec7fd2e9fdc69d8$var$Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new $bec7fd2e9fdc69d8$var$Hsl(h, s, l, o.opacity);
}
function $bec7fd2e9fdc69d8$export$8f4a7c0bb78e6ea8(h, s, l, opacity) {
    return arguments.length === 1 ? $bec7fd2e9fdc69d8$export$8133dc3fa904d6d1(h) : new $bec7fd2e9fdc69d8$var$Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function $bec7fd2e9fdc69d8$var$Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)($bec7fd2e9fdc69d8$var$Hsl, $bec7fd2e9fdc69d8$export$8f4a7c0bb78e6ea8, (0, $fa7EJ.extend)($bec7fd2e9fdc69d8$export$892596cec99bc70e, {
    brighter (k) {
        k = k == null ? $bec7fd2e9fdc69d8$export$9eace2cc0d12c98d : Math.pow($bec7fd2e9fdc69d8$export$9eace2cc0d12c98d, k);
        return new $bec7fd2e9fdc69d8$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? $bec7fd2e9fdc69d8$export$4adafc6ed0600c10 : Math.pow($bec7fd2e9fdc69d8$export$4adafc6ed0600c10, k);
        return new $bec7fd2e9fdc69d8$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new $bec7fd2e9fdc69d8$export$5e05a94393ac29e3($bec7fd2e9fdc69d8$var$hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), $bec7fd2e9fdc69d8$var$hsl2rgb(h, m1, m2), $bec7fd2e9fdc69d8$var$hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new $bec7fd2e9fdc69d8$var$Hsl($bec7fd2e9fdc69d8$var$clamph(this.h), $bec7fd2e9fdc69d8$var$clampt(this.s), $bec7fd2e9fdc69d8$var$clampt(this.l), $bec7fd2e9fdc69d8$var$clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = $bec7fd2e9fdc69d8$var$clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${$bec7fd2e9fdc69d8$var$clamph(this.h)}, ${$bec7fd2e9fdc69d8$var$clampt(this.s) * 100}%, ${$bec7fd2e9fdc69d8$var$clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function $bec7fd2e9fdc69d8$var$clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function $bec7fd2e9fdc69d8$var$clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function $bec7fd2e9fdc69d8$var$hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

});
parcelRequire.register("fa7EJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $b09dba7caff40201$export$2e2bcd8739ae039);
$parcel$export(module.exports, "extend", () => $b09dba7caff40201$export$8b58be045bf06082);
function $b09dba7caff40201$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $b09dba7caff40201$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

});


parcelRequire.register("9ZTWm", function(module, exports) {

$parcel$export(module.exports, "hcl", () => $747534271a8a1565$export$d0e870ba50062ff1);

var $fa7EJ = parcelRequire("fa7EJ");

var $gnwtP = parcelRequire("gnwtP");

var $fuows = parcelRequire("fuows");
// https://observablehq.com/@mbostock/lab-and-rgb
const $747534271a8a1565$var$K = 18, $747534271a8a1565$var$Xn = 0.96422, $747534271a8a1565$var$Yn = 1, $747534271a8a1565$var$Zn = 0.82521, $747534271a8a1565$var$t0 = 4 / 29, $747534271a8a1565$var$t1 = 6 / 29, $747534271a8a1565$var$t2 = 3 * $747534271a8a1565$var$t1 * $747534271a8a1565$var$t1, $747534271a8a1565$var$t3 = $747534271a8a1565$var$t1 * $747534271a8a1565$var$t1 * $747534271a8a1565$var$t1;
function $747534271a8a1565$var$labConvert(o) {
    if (o instanceof $747534271a8a1565$export$f2722c70a60257f7) return new $747534271a8a1565$export$f2722c70a60257f7(o.l, o.a, o.b, o.opacity);
    if (o instanceof $747534271a8a1565$export$d9397e094a5fbb9a) return $747534271a8a1565$var$hcl2lab(o);
    if (!(o instanceof (0, $gnwtP.Rgb))) o = (0, $gnwtP.rgbConvert)(o);
    var r = $747534271a8a1565$var$rgb2lrgb(o.r), g = $747534271a8a1565$var$rgb2lrgb(o.g), b = $747534271a8a1565$var$rgb2lrgb(o.b), y = $747534271a8a1565$var$xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / $747534271a8a1565$var$Yn), x, z;
    if (r === g && g === b) x = z = y;
    else {
        x = $747534271a8a1565$var$xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / $747534271a8a1565$var$Xn);
        z = $747534271a8a1565$var$xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / $747534271a8a1565$var$Zn);
    }
    return new $747534271a8a1565$export$f2722c70a60257f7(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function $747534271a8a1565$export$3e2c219d3ab79d01(l, opacity) {
    return new $747534271a8a1565$export$f2722c70a60257f7(l, 0, 0, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$2e2bcd8739ae039(l, a, b, opacity) {
    return arguments.length === 1 ? $747534271a8a1565$var$labConvert(l) : new $747534271a8a1565$export$f2722c70a60257f7(l, a, b, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$f2722c70a60257f7(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)($747534271a8a1565$export$f2722c70a60257f7, $747534271a8a1565$export$2e2bcd8739ae039, (0, $fa7EJ.extend)((0, $gnwtP.Color), {
    brighter (k) {
        return new $747534271a8a1565$export$f2722c70a60257f7(this.l + $747534271a8a1565$var$K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker (k) {
        return new $747534271a8a1565$export$f2722c70a60257f7(this.l - $747534271a8a1565$var$K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb () {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = $747534271a8a1565$var$Xn * $747534271a8a1565$var$lab2xyz(x);
        y = $747534271a8a1565$var$Yn * $747534271a8a1565$var$lab2xyz(y);
        z = $747534271a8a1565$var$Zn * $747534271a8a1565$var$lab2xyz(z);
        return new (0, $gnwtP.Rgb)($747534271a8a1565$var$lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), $747534271a8a1565$var$lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), $747534271a8a1565$var$lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function $747534271a8a1565$var$xyz2lab(t) {
    return t > $747534271a8a1565$var$t3 ? Math.pow(t, 1 / 3) : t / $747534271a8a1565$var$t2 + $747534271a8a1565$var$t0;
}
function $747534271a8a1565$var$lab2xyz(t) {
    return t > $747534271a8a1565$var$t1 ? t * t * t : $747534271a8a1565$var$t2 * (t - $747534271a8a1565$var$t0);
}
function $747534271a8a1565$var$lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function $747534271a8a1565$var$rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function $747534271a8a1565$var$hclConvert(o) {
    if (o instanceof $747534271a8a1565$export$d9397e094a5fbb9a) return new $747534271a8a1565$export$d9397e094a5fbb9a(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof $747534271a8a1565$export$f2722c70a60257f7)) o = $747534271a8a1565$var$labConvert(o);
    if (o.a === 0 && o.b === 0) return new $747534271a8a1565$export$d9397e094a5fbb9a(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * (0, $fuows.degrees);
    return new $747534271a8a1565$export$d9397e094a5fbb9a(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function $747534271a8a1565$export$5a21418738164530(l, c, h, opacity) {
    return arguments.length === 1 ? $747534271a8a1565$var$hclConvert(l) : new $747534271a8a1565$export$d9397e094a5fbb9a(h, c, l, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$d0e870ba50062ff1(h, c, l, opacity) {
    return arguments.length === 1 ? $747534271a8a1565$var$hclConvert(h) : new $747534271a8a1565$export$d9397e094a5fbb9a(h, c, l, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$d9397e094a5fbb9a(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
function $747534271a8a1565$var$hcl2lab(o) {
    if (isNaN(o.h)) return new $747534271a8a1565$export$f2722c70a60257f7(o.l, 0, 0, o.opacity);
    var h = o.h * (0, $fuows.radians);
    return new $747534271a8a1565$export$f2722c70a60257f7(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
(0, $fa7EJ.default)($747534271a8a1565$export$d9397e094a5fbb9a, $747534271a8a1565$export$d0e870ba50062ff1, (0, $fa7EJ.extend)((0, $gnwtP.Color), {
    brighter (k) {
        return new $747534271a8a1565$export$d9397e094a5fbb9a(this.h, this.c, this.l + $747534271a8a1565$var$K * (k == null ? 1 : k), this.opacity);
    },
    darker (k) {
        return new $747534271a8a1565$export$d9397e094a5fbb9a(this.h, this.c, this.l - $747534271a8a1565$var$K * (k == null ? 1 : k), this.opacity);
    },
    rgb () {
        return $747534271a8a1565$var$hcl2lab(this).rgb();
    }
}));

});
parcelRequire.register("fuows", function(module, exports) {

$parcel$export(module.exports, "radians", () => $b46cae0243dc3646$export$8449e153fbd325fc);
$parcel$export(module.exports, "degrees", () => $b46cae0243dc3646$export$41fc368e1a942b97);
const $b46cae0243dc3646$export$8449e153fbd325fc = Math.PI / 180;
const $b46cae0243dc3646$export$41fc368e1a942b97 = 180 / Math.PI;

});



parcelRequire.register("drVmd", function(module, exports) {

$parcel$export(module.exports, "default", () => $9caa49edbd641456$export$2e2bcd8739ae039);

var $gnwtP = parcelRequire("gnwtP");

var $csyvz = parcelRequire("csyvz");

var $jzeGM = parcelRequire("jzeGM");

var $32kOg = parcelRequire("32kOg");
var $9caa49edbd641456$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = (0, $32kOg.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, $gnwtP.rgb)(start)).r, (end = (0, $gnwtP.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, $32kOg.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function $9caa49edbd641456$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, $gnwtP.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var $9caa49edbd641456$export$2c0e28f2e2852d3f = $9caa49edbd641456$var$rgbSpline((0, $csyvz.default));
var $9caa49edbd641456$export$53d5214f625ccd4c = $9caa49edbd641456$var$rgbSpline((0, $jzeGM.default));

});
parcelRequire.register("csyvz", function(module, exports) {

$parcel$export(module.exports, "basis", () => $9122de3154a9264e$export$4e41033bfeec1a4c);
$parcel$export(module.exports, "default", () => $9122de3154a9264e$export$2e2bcd8739ae039);
function $9122de3154a9264e$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $9122de3154a9264e$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $9122de3154a9264e$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}

});

parcelRequire.register("jzeGM", function(module, exports) {

$parcel$export(module.exports, "default", () => $e3ecae20e036876f$export$2e2bcd8739ae039);

var $csyvz = parcelRequire("csyvz");
function $e3ecae20e036876f$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, $csyvz.basis)((t - i / n) * n, v0, v1, v2, v3);
    };
}

});

parcelRequire.register("32kOg", function(module, exports) {

$parcel$export(module.exports, "hue", () => $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf);
$parcel$export(module.exports, "gamma", () => $2361b35e2e9e8f0b$export$a7ebe8cc6aaf8d37);
$parcel$export(module.exports, "default", () => $2361b35e2e9e8f0b$export$2e2bcd8739ae039);

var $9fEb1 = parcelRequire("9fEb1");
function $2361b35e2e9e8f0b$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $2361b35e2e9e8f0b$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $2361b35e2e9e8f0b$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, $9fEb1.default)(isNaN(a) ? b : a);
}
function $2361b35e2e9e8f0b$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $2361b35e2e9e8f0b$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $2361b35e2e9e8f0b$var$exponential(a, b, y) : (0, $9fEb1.default)(isNaN(a) ? b : a);
    };
}
function $2361b35e2e9e8f0b$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $2361b35e2e9e8f0b$var$linear(a, d) : (0, $9fEb1.default)(isNaN(a) ? b : a);
}

});
parcelRequire.register("9fEb1", function(module, exports) {

$parcel$export(module.exports, "default", () => $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039);
var $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039 = (x)=>()=>x;

});



parcelRequire.register("7Q1i7", function(module, exports) {

$parcel$export(module.exports, "genericArray", () => $5b4e642470afdee0$export$15d09067c6a5ee49);

var $fHuWd = parcelRequire("fHuWd");

var $kkK17 = parcelRequire("kkK17");
function $5b4e642470afdee0$export$2e2bcd8739ae039(a, b) {
    return ((0, $kkK17.isNumberArray)(b) ? (0, $kkK17.default) : $5b4e642470afdee0$export$15d09067c6a5ee49)(a, b);
}
function $5b4e642470afdee0$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, $fHuWd.default)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

});
parcelRequire.register("kkK17", function(module, exports) {

$parcel$export(module.exports, "default", () => $ecd95ef43299cd25$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isNumberArray", () => $ecd95ef43299cd25$export$5cd576d1827d40c8);
function $ecd95ef43299cd25$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $ecd95ef43299cd25$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

});


parcelRequire.register("cEFLH", function(module, exports) {

$parcel$export(module.exports, "default", () => $93699ec421e96d53$export$2e2bcd8739ae039);
function $93699ec421e96d53$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}

});

parcelRequire.register("2bNuI", function(module, exports) {

$parcel$export(module.exports, "default", () => $198300671d1ae521$export$2e2bcd8739ae039);
function $198300671d1ae521$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}

});

parcelRequire.register("eHWYg", function(module, exports) {

$parcel$export(module.exports, "default", () => $ab52d33e87c67a57$export$2e2bcd8739ae039);

var $fHuWd = parcelRequire("fHuWd");
function $ab52d33e87c67a57$export$2e2bcd8739ae039(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = (0, $fHuWd.default)(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}

});

parcelRequire.register("iKZ4H", function(module, exports) {

$parcel$export(module.exports, "default", () => $da7be60f84908e05$export$2e2bcd8739ae039);

var $2bNuI = parcelRequire("2bNuI");
var $da7be60f84908e05$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $da7be60f84908e05$var$reB = new RegExp($da7be60f84908e05$var$reA.source, "g");
function $da7be60f84908e05$var$zero(b) {
    return function() {
        return b;
    };
}
function $da7be60f84908e05$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $da7be60f84908e05$export$2e2bcd8739ae039(a, b) {
    var bi = $da7be60f84908e05$var$reA.lastIndex = $da7be60f84908e05$var$reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $da7be60f84908e05$var$reA.exec(a)) && (bm = $da7be60f84908e05$var$reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, $2bNuI.default)(am, bm)
            });
        }
        bi = $da7be60f84908e05$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $da7be60f84908e05$var$one(q[0].x) : $da7be60f84908e05$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}

});


parcelRequire.register("eKtsx", function(module, exports) {

$parcel$export(module.exports, "default", () => $abcc3697e9133f9f$export$2e2bcd8739ae039);
function $abcc3697e9133f9f$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
}

});

parcelRequire.register("7ARJz", function(module, exports) {

$parcel$export(module.exports, "interpolateTransformCss", () => $587593a2c8eab706$export$56bec7123bb3589a);
$parcel$export(module.exports, "interpolateTransformSvg", () => $587593a2c8eab706$export$da8cba906d64c082);

var $2bNuI = parcelRequire("2bNuI");

var $kimpQ = parcelRequire("kimpQ");
function $587593a2c8eab706$var$interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, $2bNuI.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, $2bNuI.default)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, $2bNuI.default)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, $2bNuI.default)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, $2bNuI.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, $2bNuI.default)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var $587593a2c8eab706$export$56bec7123bb3589a = $587593a2c8eab706$var$interpolateTransform((0, $kimpQ.parseCss), "px, ", "px)", "deg)");
var $587593a2c8eab706$export$da8cba906d64c082 = $587593a2c8eab706$var$interpolateTransform((0, $kimpQ.parseSvg), ", ", ")", ")");

});
parcelRequire.register("kimpQ", function(module, exports) {

$parcel$export(module.exports, "parseCss", () => $ec66e06cd712857c$export$59ad369bf4938177);
$parcel$export(module.exports, "parseSvg", () => $ec66e06cd712857c$export$f9ef43f9a1d89a18);

var $6gYLo = parcelRequire("6gYLo");
var $ec66e06cd712857c$var$svgNode;
function $ec66e06cd712857c$export$59ad369bf4938177(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? (0, $6gYLo.identity) : (0, $6gYLo.default)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function $ec66e06cd712857c$export$f9ef43f9a1d89a18(value) {
    if (value == null) return 0, $6gYLo.identity;
    if (!$ec66e06cd712857c$var$svgNode) $ec66e06cd712857c$var$svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    $ec66e06cd712857c$var$svgNode.setAttribute("transform", value);
    if (!(value = $ec66e06cd712857c$var$svgNode.transform.baseVal.consolidate())) return 0, $6gYLo.identity;
    value = value.matrix;
    return (0, $6gYLo.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

});
parcelRequire.register("6gYLo", function(module, exports) {

$parcel$export(module.exports, "identity", () => $49135f07666a9139$export$f0954fd7d5368655);
$parcel$export(module.exports, "default", () => $49135f07666a9139$export$2e2bcd8739ae039);
var $49135f07666a9139$var$degrees = 180 / Math.PI;
var $49135f07666a9139$export$f0954fd7d5368655 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function $49135f07666a9139$export$2e2bcd8739ae039(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * $49135f07666a9139$var$degrees,
        skewX: Math.atan(skewX) * $49135f07666a9139$var$degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}

});



parcelRequire.register("5svYz", function(module, exports) {

$parcel$export(module.exports, "default", () => $3f985f05a3a921d2$export$2e2bcd8739ae039);
var $3f985f05a3a921d2$var$epsilon2 = 1e-12;
function $3f985f05a3a921d2$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $3f985f05a3a921d2$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $3f985f05a3a921d2$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var $3f985f05a3a921d2$export$2e2bcd8739ae039 = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < $3f985f05a3a921d2$var$epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = $3f985f05a3a921d2$var$cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * $3f985f05a3a921d2$var$tanh(rho * s + r0) - $3f985f05a3a921d2$var$sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / $3f985f05a3a921d2$var$cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);

});

parcelRequire.register("csRQp", function(module, exports) {

$parcel$export(module.exports, "default", () => $9131ddedd9dbc8f9$export$2e2bcd8739ae039);

var $9ZTWm = parcelRequire("9ZTWm");

var $32kOg = parcelRequire("32kOg");
function $9131ddedd9dbc8f9$var$hcl(hue) {
    return function(start, end) {
        var h = hue((start = (0, $9ZTWm.hcl)(start)).h, (end = (0, $9ZTWm.hcl)(end)).h), c = (0, $32kOg.default)(start.c, end.c), l = (0, $32kOg.default)(start.l, end.l), opacity = (0, $32kOg.default)(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $9131ddedd9dbc8f9$export$2e2bcd8739ae039 = $9131ddedd9dbc8f9$var$hcl((0, $32kOg.hue));
var $9131ddedd9dbc8f9$export$5aaa50f7615f9b70 = $9131ddedd9dbc8f9$var$hcl((0, $32kOg.default));

});


parcelRequire.register("7wqi6", function(module, exports) {

$parcel$export(module.exports, "interrupt", () => (parcelRequire("dvn6n")).default);
parcelRequire("ETQec");



var $dvn6n = parcelRequire("dvn6n");

});
parcelRequire.register("ETQec", function(module, exports) {

var $aK8hP = parcelRequire("aK8hP");

var $5sBvi = parcelRequire("5sBvi");

var $lBD5w = parcelRequire("lBD5w");
(0, $aK8hP.default).prototype.interrupt = (0, $5sBvi.default);
(0, $aK8hP.default).prototype.transition = (0, $lBD5w.default);

});
parcelRequire.register("5sBvi", function(module, exports) {

$parcel$export(module.exports, "default", () => $3f9ca8bc79a65f2c$export$2e2bcd8739ae039);

var $dvn6n = parcelRequire("dvn6n");
function $3f9ca8bc79a65f2c$export$2e2bcd8739ae039(name) {
    return this.each(function() {
        (0, $dvn6n.default)(this, name);
    });
}

});
parcelRequire.register("dvn6n", function(module, exports) {

$parcel$export(module.exports, "default", () => $9d50172395a2d838$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $9d50172395a2d838$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > (0, $91YjZ.STARTING) && schedule.state < (0, $91YjZ.ENDING);
        schedule.state = (0, $91YjZ.ENDED);
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}

});
parcelRequire.register("91YjZ", function(module, exports) {

$parcel$export(module.exports, "STARTING", () => $6932ffa19d32f77c$export$a5d151aee16efd42);
$parcel$export(module.exports, "ENDING", () => $6932ffa19d32f77c$export$a2e792214ded83b2);
$parcel$export(module.exports, "ENDED", () => $6932ffa19d32f77c$export$9d38167254403955);
$parcel$export(module.exports, "default", () => $6932ffa19d32f77c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "init", () => $6932ffa19d32f77c$export$2cd8252107eb640b);
$parcel$export(module.exports, "get", () => $6932ffa19d32f77c$export$3988ae62b71be9a3);
$parcel$export(module.exports, "set", () => $6932ffa19d32f77c$export$adaa4cf7ef1b65be);

var $jG4k5 = parcelRequire("jG4k5");

var $kLQ4N = parcelRequire("kLQ4N");
var $gLHjm = parcelRequire("gLHjm");
var $6932ffa19d32f77c$var$emptyOn = (0, $jG4k5.default)("start", "end", "cancel", "interrupt");
var $6932ffa19d32f77c$var$emptyTween = [];
var $6932ffa19d32f77c$export$ff39ebd4bb12b718 = 0;
var $6932ffa19d32f77c$export$584530fe98d14a84 = 1;
var $6932ffa19d32f77c$export$a5d151aee16efd42 = 2;
var $6932ffa19d32f77c$export$fb935ab5849a0db9 = 3;
var $6932ffa19d32f77c$export$1573e22b087389af = 4;
var $6932ffa19d32f77c$export$a2e792214ded83b2 = 5;
var $6932ffa19d32f77c$export$9d38167254403955 = 6;
function $6932ffa19d32f77c$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    $6932ffa19d32f77c$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $6932ffa19d32f77c$var$emptyOn,
        tween: $6932ffa19d32f77c$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $6932ffa19d32f77c$export$ff39ebd4bb12b718
    });
}
function $6932ffa19d32f77c$export$2cd8252107eb640b(node, id) {
    var schedule = $6932ffa19d32f77c$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $6932ffa19d32f77c$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $6932ffa19d32f77c$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $6932ffa19d32f77c$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $6932ffa19d32f77c$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $6932ffa19d32f77c$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $6932ffa19d32f77c$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, $kLQ4N.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $6932ffa19d32f77c$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $6932ffa19d32f77c$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $6932ffa19d32f77c$export$fb935ab5849a0db9) return (0, $gLHjm.default)(start);
            // Interrupt the active transition, if any.
            if (o.state === $6932ffa19d32f77c$export$1573e22b087389af) {
                o.state = $6932ffa19d32f77c$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $6932ffa19d32f77c$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, $gLHjm.default)(function() {
            if (self.state === $6932ffa19d32f77c$export$fb935ab5849a0db9) {
                self.state = $6932ffa19d32f77c$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $6932ffa19d32f77c$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $6932ffa19d32f77c$export$a5d151aee16efd42) return; // interrupted
        self.state = $6932ffa19d32f77c$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $6932ffa19d32f77c$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $6932ffa19d32f77c$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $6932ffa19d32f77c$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

});
parcelRequire.register("kLQ4N", function(module, exports) {

$parcel$export(module.exports, "now", () => $f1f097b5a7611f55$export$461939dd4422153);
$parcel$export(module.exports, "Timer", () => $f1f097b5a7611f55$export$c57e9b2d8b9e4de);
$parcel$export(module.exports, "timer", () => $f1f097b5a7611f55$export$9dc4ecf953986f04);
var $f1f097b5a7611f55$var$frame = 0, $f1f097b5a7611f55$var$timeout = 0, $f1f097b5a7611f55$var$interval = 0, $f1f097b5a7611f55$var$pokeDelay = 1000, $f1f097b5a7611f55$var$taskHead, $f1f097b5a7611f55$var$taskTail, $f1f097b5a7611f55$var$clockLast = 0, $f1f097b5a7611f55$var$clockNow = 0, $f1f097b5a7611f55$var$clockSkew = 0, $f1f097b5a7611f55$var$clock = typeof performance === "object" && performance.now ? performance : Date, $f1f097b5a7611f55$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function $f1f097b5a7611f55$export$461939dd4422153() {
    return $f1f097b5a7611f55$var$clockNow || ($f1f097b5a7611f55$var$setFrame($f1f097b5a7611f55$var$clearNow), $f1f097b5a7611f55$var$clockNow = $f1f097b5a7611f55$var$clock.now() + $f1f097b5a7611f55$var$clockSkew);
}
function $f1f097b5a7611f55$var$clearNow() {
    $f1f097b5a7611f55$var$clockNow = 0;
}
function $f1f097b5a7611f55$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$f1f097b5a7611f55$export$c57e9b2d8b9e4de.prototype = $f1f097b5a7611f55$export$9dc4ecf953986f04.prototype = {
    constructor: $f1f097b5a7611f55$export$c57e9b2d8b9e4de,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $f1f097b5a7611f55$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $f1f097b5a7611f55$var$taskTail !== this) {
            if ($f1f097b5a7611f55$var$taskTail) $f1f097b5a7611f55$var$taskTail._next = this;
            else $f1f097b5a7611f55$var$taskHead = this;
            $f1f097b5a7611f55$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $f1f097b5a7611f55$var$sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $f1f097b5a7611f55$var$sleep();
        }
    }
};
function $f1f097b5a7611f55$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $f1f097b5a7611f55$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $f1f097b5a7611f55$export$d60154c1d7f3990e() {
    $f1f097b5a7611f55$export$461939dd4422153(); // Get the current time, if not already set.
    ++$f1f097b5a7611f55$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $f1f097b5a7611f55$var$taskHead, e;
    while(t){
        if ((e = $f1f097b5a7611f55$var$clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --$f1f097b5a7611f55$var$frame;
}
function $f1f097b5a7611f55$var$wake() {
    $f1f097b5a7611f55$var$clockNow = ($f1f097b5a7611f55$var$clockLast = $f1f097b5a7611f55$var$clock.now()) + $f1f097b5a7611f55$var$clockSkew;
    $f1f097b5a7611f55$var$frame = $f1f097b5a7611f55$var$timeout = 0;
    try {
        $f1f097b5a7611f55$export$d60154c1d7f3990e();
    } finally{
        $f1f097b5a7611f55$var$frame = 0;
        $f1f097b5a7611f55$var$nap();
        $f1f097b5a7611f55$var$clockNow = 0;
    }
}
function $f1f097b5a7611f55$var$poke() {
    var now = $f1f097b5a7611f55$var$clock.now(), delay = now - $f1f097b5a7611f55$var$clockLast;
    if (delay > $f1f097b5a7611f55$var$pokeDelay) $f1f097b5a7611f55$var$clockSkew -= delay, $f1f097b5a7611f55$var$clockLast = now;
}
function $f1f097b5a7611f55$var$nap() {
    var t0, t1 = $f1f097b5a7611f55$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $f1f097b5a7611f55$var$taskHead = t2;
    }
    $f1f097b5a7611f55$var$taskTail = t0;
    $f1f097b5a7611f55$var$sleep(time);
}
function $f1f097b5a7611f55$var$sleep(time) {
    if ($f1f097b5a7611f55$var$frame) return; // Soonest alarm already set, or will be.
    if ($f1f097b5a7611f55$var$timeout) $f1f097b5a7611f55$var$timeout = clearTimeout($f1f097b5a7611f55$var$timeout);
    var delay = time - $f1f097b5a7611f55$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $f1f097b5a7611f55$var$timeout = setTimeout($f1f097b5a7611f55$var$wake, time - $f1f097b5a7611f55$var$clock.now() - $f1f097b5a7611f55$var$clockSkew);
        if ($f1f097b5a7611f55$var$interval) $f1f097b5a7611f55$var$interval = clearInterval($f1f097b5a7611f55$var$interval);
    } else {
        if (!$f1f097b5a7611f55$var$interval) $f1f097b5a7611f55$var$clockLast = $f1f097b5a7611f55$var$clock.now(), $f1f097b5a7611f55$var$interval = setInterval($f1f097b5a7611f55$var$poke, $f1f097b5a7611f55$var$pokeDelay);
        $f1f097b5a7611f55$var$frame = 1, $f1f097b5a7611f55$var$setFrame($f1f097b5a7611f55$var$wake);
    }
}

});

parcelRequire.register("gLHjm", function(module, exports) {

$parcel$export(module.exports, "default", () => $c352a1d9fdabab23$export$2e2bcd8739ae039);

var $kLQ4N = parcelRequire("kLQ4N");
function $c352a1d9fdabab23$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new (0, $kLQ4N.Timer);
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}

});





parcelRequire.register("lBD5w", function(module, exports) {

$parcel$export(module.exports, "default", () => $fbab5fbb61d37a42$export$2e2bcd8739ae039);

var $bLkdN = parcelRequire("bLkdN");

var $91YjZ = parcelRequire("91YjZ");

var $jjxiy = parcelRequire("jjxiy");

var $kLQ4N = parcelRequire("kLQ4N");
var $fbab5fbb61d37a42$var$defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, $jjxiy.cubicInOut)
};
function $fbab5fbb61d37a42$var$inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
function $fbab5fbb61d37a42$export$2e2bcd8739ae039(name) {
    var id, timing;
    if (name instanceof (0, $bLkdN.Transition)) id = name._id, name = name._name;
    else id = (0, $bLkdN.newId)(), (timing = $fbab5fbb61d37a42$var$defaultTiming).time = (0, $kLQ4N.now)(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, $91YjZ.default)(node, name, id, i, group, timing || $fbab5fbb61d37a42$var$inherit(node, id));
    }
    return new (0, $bLkdN.Transition)(groups, this._parents, name, id);
}

});
parcelRequire.register("bLkdN", function(module, exports) {

$parcel$export(module.exports, "Transition", () => $8903c5148cd9b6a2$export$be58926105124dd4);
$parcel$export(module.exports, "newId", () => $8903c5148cd9b6a2$export$9ffd10a3fbdc175b);

var $aK8hP = parcelRequire("aK8hP");

var $eCUHA = parcelRequire("eCUHA");

var $7wRWP = parcelRequire("7wRWP");

var $4IcAe = parcelRequire("4IcAe");

var $dxppi = parcelRequire("dxppi");

var $aiBub = parcelRequire("aiBub");

var $iWOjN = parcelRequire("iWOjN");

var $7aAAE = parcelRequire("7aAAE");

var $fUhqd = parcelRequire("fUhqd");

var $4ftdg = parcelRequire("4ftdg");

var $1r9Ep = parcelRequire("1r9Ep");

var $HRvt4 = parcelRequire("HRvt4");

var $caseU = parcelRequire("caseU");

var $5LNsv = parcelRequire("5LNsv");

var $56ygM = parcelRequire("56ygM");

var $eeZof = parcelRequire("eeZof");

var $dWXIP = parcelRequire("dWXIP");

var $klfNo = parcelRequire("klfNo");

var $6zVen = parcelRequire("6zVen");

var $lVJ5s = parcelRequire("lVJ5s");

var $bZGyS = parcelRequire("bZGyS");
var $8903c5148cd9b6a2$var$id = 0;
function $8903c5148cd9b6a2$export$be58926105124dd4(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function $8903c5148cd9b6a2$export$2e2bcd8739ae039(name) {
    return (0, $aK8hP.default)().transition(name);
}
function $8903c5148cd9b6a2$export$9ffd10a3fbdc175b() {
    return ++$8903c5148cd9b6a2$var$id;
}
var $8903c5148cd9b6a2$var$selection_prototype = (0, $aK8hP.default).prototype;
$8903c5148cd9b6a2$export$be58926105124dd4.prototype = $8903c5148cd9b6a2$export$2e2bcd8739ae039.prototype = {
    constructor: $8903c5148cd9b6a2$export$be58926105124dd4,
    select: (0, $HRvt4.default),
    selectAll: (0, $caseU.default),
    selectChild: $8903c5148cd9b6a2$var$selection_prototype.selectChild,
    selectChildren: $8903c5148cd9b6a2$var$selection_prototype.selectChildren,
    filter: (0, $7aAAE.default),
    merge: (0, $fUhqd.default),
    selection: (0, $5LNsv.default),
    transition: (0, $6zVen.default),
    call: $8903c5148cd9b6a2$var$selection_prototype.call,
    nodes: $8903c5148cd9b6a2$var$selection_prototype.nodes,
    node: $8903c5148cd9b6a2$var$selection_prototype.node,
    size: $8903c5148cd9b6a2$var$selection_prototype.size,
    empty: $8903c5148cd9b6a2$var$selection_prototype.empty,
    each: $8903c5148cd9b6a2$var$selection_prototype.each,
    on: (0, $4ftdg.default),
    attr: (0, $eCUHA.default),
    attrTween: (0, $7wRWP.default),
    style: (0, $56ygM.default),
    styleTween: (0, $eeZof.default),
    text: (0, $dWXIP.default),
    textTween: (0, $klfNo.default),
    remove: (0, $1r9Ep.default),
    tween: (0, $lVJ5s.default),
    delay: (0, $4IcAe.default),
    duration: (0, $dxppi.default),
    ease: (0, $aiBub.default),
    easeVarying: (0, $iWOjN.default),
    end: (0, $bZGyS.default),
    [Symbol.iterator]: $8903c5148cd9b6a2$var$selection_prototype[Symbol.iterator]
};

});
parcelRequire.register("eCUHA", function(module, exports) {

$parcel$export(module.exports, "default", () => $aa6099204515e47b$export$2e2bcd8739ae039);

var $7ARJz = parcelRequire("7ARJz");

var $bvCwd = parcelRequire("bvCwd");

var $lVJ5s = parcelRequire("lVJ5s");

var $cu6z9 = parcelRequire("cu6z9");
function $aa6099204515e47b$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $aa6099204515e47b$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $aa6099204515e47b$var$attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $aa6099204515e47b$var$attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $aa6099204515e47b$var$attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $aa6099204515e47b$var$attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $aa6099204515e47b$export$2e2bcd8739ae039(name, value) {
    var fullname = (0, $bvCwd.default)(name), i = fullname === "transform" ? (0, $7ARJz.interpolateTransformSvg) : (0, $cu6z9.default);
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? $aa6099204515e47b$var$attrFunctionNS : $aa6099204515e47b$var$attrFunction)(fullname, i, (0, $lVJ5s.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? $aa6099204515e47b$var$attrRemoveNS : $aa6099204515e47b$var$attrRemove)(fullname) : (fullname.local ? $aa6099204515e47b$var$attrConstantNS : $aa6099204515e47b$var$attrConstant)(fullname, i, value));
}

});
parcelRequire.register("lVJ5s", function(module, exports) {

$parcel$export(module.exports, "default", () => $ff71e52c327b19a3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "tweenValue", () => $ff71e52c327b19a3$export$f78ce6ab10405d82);

var $91YjZ = parcelRequire("91YjZ");
function $ff71e52c327b19a3$var$tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, $91YjZ.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function $ff71e52c327b19a3$var$tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, $91YjZ.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function $ff71e52c327b19a3$export$2e2bcd8739ae039(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, $91YjZ.get)(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? $ff71e52c327b19a3$var$tweenRemove : $ff71e52c327b19a3$var$tweenFunction)(id, name, value));
}
function $ff71e52c327b19a3$export$f78ce6ab10405d82(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, $91YjZ.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, $91YjZ.get)(node, id).value[name];
    };
}

});

parcelRequire.register("cu6z9", function(module, exports) {

$parcel$export(module.exports, "default", () => $916d61421042cf35$export$2e2bcd8739ae039);

var $gnwtP = parcelRequire("gnwtP");

var $2bNuI = parcelRequire("2bNuI");
var $drVmd = parcelRequire("drVmd");
var $iKZ4H = parcelRequire("iKZ4H");
function $916d61421042cf35$export$2e2bcd8739ae039(a, b) {
    var c;
    return (typeof b === "number" ? (0, $2bNuI.default) : b instanceof (0, $gnwtP.default) ? (0, $drVmd.default) : (c = (0, $gnwtP.default)(b)) ? (b = c, $drVmd.default) : (0, $iKZ4H.default))(a, b);
}

});


parcelRequire.register("7wRWP", function(module, exports) {

$parcel$export(module.exports, "default", () => $57b55e7d990c1d9e$export$2e2bcd8739ae039);

var $bvCwd = parcelRequire("bvCwd");
function $57b55e7d990c1d9e$var$attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function $57b55e7d990c1d9e$var$attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function $57b55e7d990c1d9e$var$attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $57b55e7d990c1d9e$var$attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $57b55e7d990c1d9e$var$attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $57b55e7d990c1d9e$var$attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $57b55e7d990c1d9e$export$2e2bcd8739ae039(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, $bvCwd.default)(name);
    return this.tween(key, (fullname.local ? $57b55e7d990c1d9e$var$attrTweenNS : $57b55e7d990c1d9e$var$attrTween)(fullname, value));
}

});

parcelRequire.register("4IcAe", function(module, exports) {

$parcel$export(module.exports, "default", () => $36e5084d34193f2b$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $36e5084d34193f2b$var$delayFunction(id, value) {
    return function() {
        (0, $91YjZ.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function $36e5084d34193f2b$var$delayConstant(id, value) {
    return value = +value, function() {
        (0, $91YjZ.init)(this, id).delay = value;
    };
}
function $36e5084d34193f2b$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $36e5084d34193f2b$var$delayFunction : $36e5084d34193f2b$var$delayConstant)(id, value)) : (0, $91YjZ.get)(this.node(), id).delay;
}

});

parcelRequire.register("dxppi", function(module, exports) {

$parcel$export(module.exports, "default", () => $9db210c00a1cb3bd$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $9db210c00a1cb3bd$var$durationFunction(id, value) {
    return function() {
        (0, $91YjZ.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function $9db210c00a1cb3bd$var$durationConstant(id, value) {
    return value = +value, function() {
        (0, $91YjZ.set)(this, id).duration = value;
    };
}
function $9db210c00a1cb3bd$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $9db210c00a1cb3bd$var$durationFunction : $9db210c00a1cb3bd$var$durationConstant)(id, value)) : (0, $91YjZ.get)(this.node(), id).duration;
}

});

parcelRequire.register("aiBub", function(module, exports) {

$parcel$export(module.exports, "default", () => $77f8a9b4952c1103$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $77f8a9b4952c1103$var$easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, $91YjZ.set)(this, id).ease = value;
    };
}
function $77f8a9b4952c1103$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each($77f8a9b4952c1103$var$easeConstant(id, value)) : (0, $91YjZ.get)(this.node(), id).ease;
}

});

parcelRequire.register("iWOjN", function(module, exports) {

$parcel$export(module.exports, "default", () => $dcb4acf3c2b94777$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $dcb4acf3c2b94777$var$easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, $91YjZ.set)(this, id).ease = v;
    };
}
function $dcb4acf3c2b94777$export$2e2bcd8739ae039(value) {
    if (typeof value !== "function") throw new Error;
    return this.each($dcb4acf3c2b94777$var$easeVarying(this._id, value));
}

});

parcelRequire.register("7aAAE", function(module, exports) {

$parcel$export(module.exports, "default", () => $5385d99add49b88e$export$2e2bcd8739ae039);

var $k8Vco = parcelRequire("k8Vco");

var $bLkdN = parcelRequire("bLkdN");
function $5385d99add49b88e$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = (0, $k8Vco.default)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, $bLkdN.Transition)(subgroups, this._parents, this._name, this._id);
}

});

parcelRequire.register("fUhqd", function(module, exports) {

$parcel$export(module.exports, "default", () => $b94999971c646dd3$export$2e2bcd8739ae039);

var $bLkdN = parcelRequire("bLkdN");
function $b94999971c646dd3$export$2e2bcd8739ae039(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, $bLkdN.Transition)(merges, this._parents, this._name, this._id);
}

});

parcelRequire.register("4ftdg", function(module, exports) {

$parcel$export(module.exports, "default", () => $317f39322da00c24$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $317f39322da00c24$var$start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function $317f39322da00c24$var$onFunction(id, name, listener) {
    var on0, on1, sit = $317f39322da00c24$var$start(name) ? (0, $91YjZ.init) : (0, $91YjZ.set);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function $317f39322da00c24$export$2e2bcd8739ae039(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, $91YjZ.get)(this.node(), id).on.on(name) : this.each($317f39322da00c24$var$onFunction(id, name, listener));
}

});

parcelRequire.register("1r9Ep", function(module, exports) {

$parcel$export(module.exports, "default", () => $10bfcc7fdd547fef$export$2e2bcd8739ae039);
function $10bfcc7fdd547fef$var$removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function $10bfcc7fdd547fef$export$2e2bcd8739ae039() {
    return this.on("end.remove", $10bfcc7fdd547fef$var$removeFunction(this._id));
}

});

parcelRequire.register("HRvt4", function(module, exports) {

$parcel$export(module.exports, "default", () => $083d858d7e781ce2$export$2e2bcd8739ae039);

var $5ufpt = parcelRequire("5ufpt");

var $bLkdN = parcelRequire("bLkdN");

var $91YjZ = parcelRequire("91YjZ");
function $083d858d7e781ce2$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, $5ufpt.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            (0, $91YjZ.default)(subgroup[i], name, id, i, subgroup, (0, $91YjZ.get)(node, id));
        }
    }
    return new (0, $bLkdN.Transition)(subgroups, this._parents, name, id);
}

});

parcelRequire.register("caseU", function(module, exports) {

$parcel$export(module.exports, "default", () => $8dbc52fb106abc17$export$2e2bcd8739ae039);

var $dm3vU = parcelRequire("dm3vU");

var $bLkdN = parcelRequire("bLkdN");

var $91YjZ = parcelRequire("91YjZ");
function $8dbc52fb106abc17$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, $dm3vU.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, $91YjZ.get)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, $91YjZ.default)(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new (0, $bLkdN.Transition)(subgroups, parents, name, id);
}

});

parcelRequire.register("5LNsv", function(module, exports) {

$parcel$export(module.exports, "default", () => $4337b508dae82fdc$export$2e2bcd8739ae039);

var $aK8hP = parcelRequire("aK8hP");
var $4337b508dae82fdc$var$Selection = (0, $aK8hP.default).prototype.constructor;
function $4337b508dae82fdc$export$2e2bcd8739ae039() {
    return new $4337b508dae82fdc$var$Selection(this._groups, this._parents);
}

});

parcelRequire.register("56ygM", function(module, exports) {

$parcel$export(module.exports, "default", () => $3b78188d34b28d5f$export$2e2bcd8739ae039);

var $7ARJz = parcelRequire("7ARJz");

var $l8IRR = parcelRequire("l8IRR");

var $91YjZ = parcelRequire("91YjZ");

var $lVJ5s = parcelRequire("lVJ5s");

var $cu6z9 = parcelRequire("cu6z9");
function $3b78188d34b28d5f$var$styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, $l8IRR.styleValue)(this, name), string1 = (this.style.removeProperty(name), (0, $l8IRR.styleValue)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function $3b78188d34b28d5f$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $3b78188d34b28d5f$var$styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, $l8IRR.styleValue)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $3b78188d34b28d5f$var$styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, $l8IRR.styleValue)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, $l8IRR.styleValue)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $3b78188d34b28d5f$var$styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, $91YjZ.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = $3b78188d34b28d5f$var$styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function $3b78188d34b28d5f$export$2e2bcd8739ae039(name, value, priority) {
    var i = (name += "") === "transform" ? (0, $7ARJz.interpolateTransformCss) : (0, $cu6z9.default);
    return value == null ? this.styleTween(name, $3b78188d34b28d5f$var$styleNull(name, i)).on("end.style." + name, $3b78188d34b28d5f$var$styleRemove(name)) : typeof value === "function" ? this.styleTween(name, $3b78188d34b28d5f$var$styleFunction(name, i, (0, $lVJ5s.tweenValue)(this, "style." + name, value))).each($3b78188d34b28d5f$var$styleMaybeRemove(this._id, name)) : this.styleTween(name, $3b78188d34b28d5f$var$styleConstant(name, i, value), priority).on("end.style." + name, null);
}

});

parcelRequire.register("eeZof", function(module, exports) {

$parcel$export(module.exports, "default", () => $a5e1fe4d25f36dfe$export$2e2bcd8739ae039);
function $a5e1fe4d25f36dfe$var$styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function $a5e1fe4d25f36dfe$var$styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && $a5e1fe4d25f36dfe$var$styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function $a5e1fe4d25f36dfe$export$2e2bcd8739ae039(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $a5e1fe4d25f36dfe$var$styleTween(name, value, priority == null ? "" : priority));
}

});

parcelRequire.register("dWXIP", function(module, exports) {

$parcel$export(module.exports, "default", () => $a27f04ace08aa278$export$2e2bcd8739ae039);

var $lVJ5s = parcelRequire("lVJ5s");
function $a27f04ace08aa278$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $a27f04ace08aa278$var$textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function $a27f04ace08aa278$export$2e2bcd8739ae039(value) {
    return this.tween("text", typeof value === "function" ? $a27f04ace08aa278$var$textFunction((0, $lVJ5s.tweenValue)(this, "text", value)) : $a27f04ace08aa278$var$textConstant(value == null ? "" : value + ""));
}

});

parcelRequire.register("klfNo", function(module, exports) {

$parcel$export(module.exports, "default", () => $ecf20585fc9ee577$export$2e2bcd8739ae039);
function $ecf20585fc9ee577$var$textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function $ecf20585fc9ee577$var$textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $ecf20585fc9ee577$var$textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $ecf20585fc9ee577$export$2e2bcd8739ae039(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $ecf20585fc9ee577$var$textTween(value));
}

});

parcelRequire.register("6zVen", function(module, exports) {

$parcel$export(module.exports, "default", () => $4ca267cf162e1313$export$2e2bcd8739ae039);

var $bLkdN = parcelRequire("bLkdN");

var $91YjZ = parcelRequire("91YjZ");
function $4ca267cf162e1313$export$2e2bcd8739ae039() {
    var name = this._name, id0 = this._id, id1 = (0, $bLkdN.newId)();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = (0, $91YjZ.get)(node, id0);
            (0, $91YjZ.default)(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new (0, $bLkdN.Transition)(groups, this._parents, name, id1);
}

});

parcelRequire.register("bZGyS", function(module, exports) {

$parcel$export(module.exports, "default", () => $8bb6680985b00187$export$2e2bcd8739ae039);

var $91YjZ = parcelRequire("91YjZ");
function $8bb6680985b00187$export$2e2bcd8739ae039() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, $91YjZ.set)(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}

});


parcelRequire.register("jjxiy", function(module, exports) {

$parcel$export(module.exports, "cubicInOut", () => $e0f99efc6a5b6b82$export$89238d3bc79d3ada);
function $e0f99efc6a5b6b82$export$b1a09cb1b71f86aa(t) {
    return t * t * t;
}
function $e0f99efc6a5b6b82$export$68d528839c701b6(t) {
    return --t * t * t + 1;
}
function $e0f99efc6a5b6b82$export$89238d3bc79d3ada(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

});





parcelRequire.register("fkdkb", function(module, exports) {

$parcel$export(module.exports, "default", () => $b2830f40aabafde2$export$2e2bcd8739ae039);
var $b2830f40aabafde2$export$2e2bcd8739ae039 = (x)=>()=>x;

});

parcelRequire.register("ex2C2", function(module, exports) {

$parcel$export(module.exports, "default", () => $a9462c89148412c0$export$2e2bcd8739ae039);
function $a9462c89148412c0$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , selection: selection , mode: mode , dispatch: dispatch  }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        selection: {
            value: selection,
            enumerable: true,
            configurable: true
        },
        mode: {
            value: mode,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}

});

parcelRequire.register("2L5dX", function(module, exports) {

$parcel$export(module.exports, "nopropagation", () => $202405f8e5f03d79$export$2e2561858db9bf47);
$parcel$export(module.exports, "default", () => $202405f8e5f03d79$export$2e2bcd8739ae039);
function $202405f8e5f03d79$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $202405f8e5f03d79$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}

});



parcelRequire.register("bmstC", function(module, exports) {

$parcel$export(module.exports, "svg", () => $8457d6ade3d1a149$export$7ed1367e7fa1ad68);

var $bFVdw = parcelRequire("bFVdw");
function $8457d6ade3d1a149$var$parser(type) {
    return (input, init)=>(0, $bFVdw.default)(input, init).then((text)=>(new DOMParser).parseFromString(text, type));
}
var $8457d6ade3d1a149$export$2e2bcd8739ae039 = $8457d6ade3d1a149$var$parser("application/xml");
var $8457d6ade3d1a149$export$c0bb0b647f701bb5 = $8457d6ade3d1a149$var$parser("text/html");
var $8457d6ade3d1a149$export$7ed1367e7fa1ad68 = $8457d6ade3d1a149$var$parser("image/svg+xml");

});
parcelRequire.register("bFVdw", function(module, exports) {

$parcel$export(module.exports, "default", () => $87ffe82740c8d951$export$2e2bcd8739ae039);
function $87ffe82740c8d951$var$responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
}
function $87ffe82740c8d951$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($87ffe82740c8d951$var$responseText);
}

});



parcelRequire.register("9BOAO", function(module, exports) {

$parcel$export(module.exports, "default", () => $6feed068debd21fb$export$2e2bcd8739ae039);

var $8nNeJ = parcelRequire("8nNeJ");

var $fs1DP = parcelRequire("fs1DP");

var $3QHcG = parcelRequire("3QHcG");

var $4KZks = parcelRequire("4KZks");
function $6feed068debd21fb$export$16a5d4b4a61a274d(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, $8nNeJ.default)(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, $4KZks.default)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = (0, $8nNeJ.tickIncrement)(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function $6feed068debd21fb$export$2e2bcd8739ae039() {
    var scale = (0, $fs1DP.default)();
    scale.copy = function() {
        return (0, $fs1DP.copy)(scale, $6feed068debd21fb$export$2e2bcd8739ae039());
    };
    (0, $3QHcG.initRange).apply(scale, arguments);
    return $6feed068debd21fb$export$16a5d4b4a61a274d(scale);
}

});
parcelRequire.register("fs1DP", function(module, exports) {

$parcel$export(module.exports, "copy", () => $b3fabe7b2dfe3262$export$784d13d8ee351f07);
$parcel$export(module.exports, "default", () => $b3fabe7b2dfe3262$export$2e2bcd8739ae039);

var $h3PTt = parcelRequire("h3PTt");

var $fHuWd = parcelRequire("fHuWd");
var $2bNuI = parcelRequire("2bNuI");
var $eKtsx = parcelRequire("eKtsx");

var $1pByo = parcelRequire("1pByo");

var $lBsaW = parcelRequire("lBsaW");
var $b3fabe7b2dfe3262$var$unit = [
    0,
    1
];
function $b3fabe7b2dfe3262$export$f0954fd7d5368655(x) {
    return x;
}
function $b3fabe7b2dfe3262$var$normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, $1pByo.default)(isNaN(b) ? NaN : 0.5);
}
function $b3fabe7b2dfe3262$var$clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function $b3fabe7b2dfe3262$var$bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = $b3fabe7b2dfe3262$var$normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = $b3fabe7b2dfe3262$var$normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function $b3fabe7b2dfe3262$var$polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = $b3fabe7b2dfe3262$var$normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, $h3PTt.default)(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function $b3fabe7b2dfe3262$export$784d13d8ee351f07(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function $b3fabe7b2dfe3262$export$6b468dcfb64c653c() {
    var domain = $b3fabe7b2dfe3262$var$unit, range = $b3fabe7b2dfe3262$var$unit, interpolate = (0, $fHuWd.default), transform, untransform, unknown, clamp = $b3fabe7b2dfe3262$export$f0954fd7d5368655, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== $b3fabe7b2dfe3262$export$f0954fd7d5368655) clamp = $b3fabe7b2dfe3262$var$clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? $b3fabe7b2dfe3262$var$polymap : $b3fabe7b2dfe3262$var$bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), (0, $2bNuI.default))))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, (0, $lBsaW.default)), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = (0, $eKtsx.default), rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : $b3fabe7b2dfe3262$export$f0954fd7d5368655, rescale()) : clamp !== $b3fabe7b2dfe3262$export$f0954fd7d5368655;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function $b3fabe7b2dfe3262$export$2e2bcd8739ae039() {
    return $b3fabe7b2dfe3262$export$6b468dcfb64c653c()($b3fabe7b2dfe3262$export$f0954fd7d5368655, $b3fabe7b2dfe3262$export$f0954fd7d5368655);
}

});
parcelRequire.register("1pByo", function(module, exports) {

$parcel$export(module.exports, "default", () => $1075419c505a1ba9$export$2e2bcd8739ae039);
function $1075419c505a1ba9$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRequire.register("lBsaW", function(module, exports) {

$parcel$export(module.exports, "default", () => $fba2e8bbd8c1f530$export$2e2bcd8739ae039);
function $fba2e8bbd8c1f530$export$2e2bcd8739ae039(x) {
    return +x;
}

});


parcelRequire.register("3QHcG", function(module, exports) {

$parcel$export(module.exports, "initRange", () => $2cd7bdc78666648b$export$23c7bb9e6558da2a);
function $2cd7bdc78666648b$export$23c7bb9e6558da2a(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function $2cd7bdc78666648b$export$7d6b419e59e83f3d(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}

});

parcelRequire.register("4KZks", function(module, exports) {

$parcel$export(module.exports, "default", () => $376b07f19e5dfcfe$export$2e2bcd8739ae039);

var $8nNeJ = parcelRequire("8nNeJ");

var $9iUCE = parcelRequire("9iUCE");
var $gFphd = parcelRequire("gFphd");
var $eQZrB = parcelRequire("eQZrB");
var $4k9qi = parcelRequire("4k9qi");
var $a77vi = parcelRequire("a77vi");
function $376b07f19e5dfcfe$export$2e2bcd8739ae039(start, stop, count, specifier) {
    var step = (0, $8nNeJ.tickStep)(start, stop, count), precision;
    specifier = (0, $9iUCE.default)(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = (0, $gFphd.default)(step, value))) specifier.precision = precision;
            return (0, $eQZrB.formatPrefix)(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = (0, $4k9qi.default)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = (0, $a77vi.default)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return (0, $eQZrB.format)(specifier);
}

});
parcelRequire.register("eQZrB", function(module, exports) {

$parcel$export(module.exports, "format", () => $ad0595948e0b2f09$export$d9468344d3651243);
$parcel$export(module.exports, "formatPrefix", () => $ad0595948e0b2f09$export$8d85692a469dde6f);

var $g9Qfs = parcelRequire("g9Qfs");
var $ad0595948e0b2f09$var$locale;
var $ad0595948e0b2f09$export$d9468344d3651243;
var $ad0595948e0b2f09$export$8d85692a469dde6f;
$ad0595948e0b2f09$export$2e2bcd8739ae039({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function $ad0595948e0b2f09$export$2e2bcd8739ae039(definition) {
    $ad0595948e0b2f09$var$locale = (0, $g9Qfs.default)(definition);
    $ad0595948e0b2f09$export$d9468344d3651243 = $ad0595948e0b2f09$var$locale.format;
    $ad0595948e0b2f09$export$8d85692a469dde6f = $ad0595948e0b2f09$var$locale.formatPrefix;
    return $ad0595948e0b2f09$var$locale;
}

});
parcelRequire.register("g9Qfs", function(module, exports) {

$parcel$export(module.exports, "default", () => $bc36040bd58f8f35$export$2e2bcd8739ae039);

var $4zEo9 = parcelRequire("4zEo9");

var $1PDGQ = parcelRequire("1PDGQ");

var $1QZye = parcelRequire("1QZye");

var $9iUCE = parcelRequire("9iUCE");

var $20dw0 = parcelRequire("20dw0");

var $aqoEg = parcelRequire("aqoEg");

var $jNlbH = parcelRequire("jNlbH");

var $il7NN = parcelRequire("il7NN");
var $bc36040bd58f8f35$var$map = Array.prototype.map, $bc36040bd58f8f35$var$prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xb5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function $bc36040bd58f8f35$export$2e2bcd8739ae039(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? (0, $il7NN.default) : (0, $1PDGQ.default)($bc36040bd58f8f35$var$map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? (0, $il7NN.default) : (0, $1QZye.default)($bc36040bd58f8f35$var$map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = (0, $9iUCE.default)(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!(0, $aqoEg.default)[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = (0, $aqoEg.default)[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = (0, $20dw0.default)(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? $bc36040bd58f8f35$var$prefixes[8 + (0, $jNlbH.prefixExponent) / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = (0, $9iUCE.default)(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, $4zEo9.default)(value) / 3))) * 3, k = Math.pow(10, -e), prefix = $bc36040bd58f8f35$var$prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}

});
parcelRequire.register("4zEo9", function(module, exports) {

$parcel$export(module.exports, "default", () => $3549c29bbb979bd6$export$2e2bcd8739ae039);

var $9LTVi = parcelRequire("9LTVi");
function $3549c29bbb979bd6$export$2e2bcd8739ae039(x) {
    return x = (0, $9LTVi.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;
}

});
parcelRequire.register("9LTVi", function(module, exports) {

$parcel$export(module.exports, "default", () => $71d3e206e38be17c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "formatDecimalParts", () => $71d3e206e38be17c$export$8f8e23dd27dc19f5);
function $71d3e206e38be17c$export$2e2bcd8739ae039(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function $71d3e206e38be17c$export$8f8e23dd27dc19f5(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}

});


parcelRequire.register("1PDGQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $15595778491b2c66$export$2e2bcd8739ae039);
function $15595778491b2c66$export$2e2bcd8739ae039(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}

});

parcelRequire.register("1QZye", function(module, exports) {

$parcel$export(module.exports, "default", () => $159a648ba748ed7b$export$2e2bcd8739ae039);
function $159a648ba748ed7b$export$2e2bcd8739ae039(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
}

});

parcelRequire.register("9iUCE", function(module, exports) {

$parcel$export(module.exports, "default", () => $6c61b78b0e12530a$export$2e2bcd8739ae039);
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var $6c61b78b0e12530a$var$re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $6c61b78b0e12530a$export$2e2bcd8739ae039(specifier) {
    if (!(match = $6c61b78b0e12530a$var$re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new $6c61b78b0e12530a$export$963aac351db36ed4({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
$6c61b78b0e12530a$export$2e2bcd8739ae039.prototype = $6c61b78b0e12530a$export$963aac351db36ed4.prototype; // instanceof
function $6c61b78b0e12530a$export$963aac351db36ed4(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
$6c61b78b0e12530a$export$963aac351db36ed4.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

});

parcelRequire.register("20dw0", function(module, exports) {

$parcel$export(module.exports, "default", () => $175610b4804d1dc6$export$2e2bcd8739ae039);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function $175610b4804d1dc6$export$2e2bcd8739ae039(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

});

parcelRequire.register("aqoEg", function(module, exports) {

$parcel$export(module.exports, "default", () => $796f73bd4d54868e$export$2e2bcd8739ae039);

var $9LTVi = parcelRequire("9LTVi");

var $jNlbH = parcelRequire("jNlbH");

var $fK3Tw = parcelRequire("fK3Tw");
var $796f73bd4d54868e$export$2e2bcd8739ae039 = {
    "%": (x, p)=>(x * 100).toFixed(p),
    "b": (x)=>Math.round(x).toString(2),
    "c": (x)=>x + "",
    "d": (0, $9LTVi.default),
    "e": (x, p)=>x.toExponential(p),
    "f": (x, p)=>x.toFixed(p),
    "g": (x, p)=>x.toPrecision(p),
    "o": (x)=>Math.round(x).toString(8),
    "p": (x, p)=>(0, $fK3Tw.default)(x * 100, p),
    "r": (0, $fK3Tw.default),
    "s": (0, $jNlbH.default),
    "X": (x)=>Math.round(x).toString(16).toUpperCase(),
    "x": (x)=>Math.round(x).toString(16)
};

});
parcelRequire.register("jNlbH", function(module, exports) {

$parcel$export(module.exports, "prefixExponent", () => $e693075d65fe7764$export$6863724d9a42263);
$parcel$export(module.exports, "default", () => $e693075d65fe7764$export$2e2bcd8739ae039);

var $9LTVi = parcelRequire("9LTVi");
var $e693075d65fe7764$export$6863724d9a42263;
function $e693075d65fe7764$export$2e2bcd8739ae039(x, p) {
    var d = (0, $9LTVi.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - ($e693075d65fe7764$export$6863724d9a42263 = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, $9LTVi.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

});

parcelRequire.register("fK3Tw", function(module, exports) {

$parcel$export(module.exports, "default", () => $b75e2c45d28a7bd1$export$2e2bcd8739ae039);

var $9LTVi = parcelRequire("9LTVi");
function $b75e2c45d28a7bd1$export$2e2bcd8739ae039(x, p) {
    var d = (0, $9LTVi.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

});


parcelRequire.register("il7NN", function(module, exports) {

$parcel$export(module.exports, "default", () => $d5a03d7dd352ee71$export$2e2bcd8739ae039);
function $d5a03d7dd352ee71$export$2e2bcd8739ae039(x) {
    return x;
}

});



parcelRequire.register("a77vi", function(module, exports) {

$parcel$export(module.exports, "default", () => $75d060ea554f56fe$export$2e2bcd8739ae039);

var $4zEo9 = parcelRequire("4zEo9");
function $75d060ea554f56fe$export$2e2bcd8739ae039(step) {
    return Math.max(0, -(0, $4zEo9.default)(Math.abs(step)));
}

});

parcelRequire.register("gFphd", function(module, exports) {

$parcel$export(module.exports, "default", () => $c2241512881c0f9b$export$2e2bcd8739ae039);

var $4zEo9 = parcelRequire("4zEo9");
function $c2241512881c0f9b$export$2e2bcd8739ae039(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, $4zEo9.default)(value) / 3))) * 3 - (0, $4zEo9.default)(Math.abs(step)));
}

});

parcelRequire.register("4k9qi", function(module, exports) {

$parcel$export(module.exports, "default", () => $326056e829ddcbb9$export$2e2bcd8739ae039);

var $4zEo9 = parcelRequire("4zEo9");
function $326056e829ddcbb9$export$2e2bcd8739ae039(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, (0, $4zEo9.default)(max) - (0, $4zEo9.default)(step)) + 1;
}

});




parcelRequire.register("bDj6E", function(module, exports) {

$parcel$export(module.exports, "default", () => $022f84c797360b68$export$2e2bcd8739ae039);

var $6Mwq4 = parcelRequire("6Mwq4");

var $3QHcG = parcelRequire("3QHcG");
const $022f84c797360b68$export$e4f898ab14d9d460 = Symbol("implicit");
function $022f84c797360b68$export$2e2bcd8739ae039() {
    var index = new (0, $6Mwq4.InternMap)(), domain = [], range = [], unknown = $022f84c797360b68$export$e4f898ab14d9d460;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== $022f84c797360b68$export$e4f898ab14d9d460) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new (0, $6Mwq4.InternMap)();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $022f84c797360b68$export$2e2bcd8739ae039(domain, range).unknown(unknown);
    };
    (0, $3QHcG.initRange).apply(scale, arguments);
    return scale;
}

});

parcelRequire.register("4K3LS", function(module, exports) {

$parcel$export(module.exports, "default", () => $373e622e81809fb2$export$2e2bcd8739ae039);

var $5fDCf = parcelRequire("5fDCf");
var $aSDVC = parcelRequire("aSDVC");
var $1oTyM = parcelRequire("1oTyM");
var $4KkLP = parcelRequire("4KkLP");
var $5Qaut = parcelRequire("5Qaut");
var $05bKb = parcelRequire("05bKb");
var $fRNv0 = parcelRequire("fRNv0");
var $254th = parcelRequire("254th");

var $7m7sT = parcelRequire("7m7sT");

var $fs1DP = parcelRequire("fs1DP");

var $3QHcG = parcelRequire("3QHcG");

var $9zdE8 = parcelRequire("9zdE8");
function $373e622e81809fb2$var$date(t) {
    return new Date(t);
}
function $373e622e81809fb2$var$number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function $373e622e81809fb2$export$56bbcdb8aca31149(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = (0, $fs1DP.default)(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain(Array.from(_, $373e622e81809fb2$var$number)) : domain().map($373e622e81809fb2$var$date);
    };
    scale.ticks = function(interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain((0, $9zdE8.default)(d, interval)) : scale;
    };
    scale.copy = function() {
        return (0, $fs1DP.copy)(scale, $373e622e81809fb2$export$56bbcdb8aca31149(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
}
function $373e622e81809fb2$export$2e2bcd8739ae039() {
    return (0, $3QHcG.initRange).apply($373e622e81809fb2$export$56bbcdb8aca31149((0, $5fDCf.timeTicks), (0, $5fDCf.timeTickInterval), (0, $aSDVC.timeYear), (0, $1oTyM.timeMonth), (0, $4KkLP.timeSunday), (0, $5Qaut.timeDay), (0, $05bKb.timeHour), (0, $fRNv0.timeMinute), (0, $254th.second), (0, $7m7sT.timeFormat)).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}

});
parcelRequire.register("254th", function(module, exports) {

$parcel$export(module.exports, "second", () => $183f8449d1fe2a51$export$3d3c77ce7df7d30d);

var $3M2e9 = parcelRequire("3M2e9");

var $aV8oI = parcelRequire("aV8oI");
const $183f8449d1fe2a51$export$3d3c77ce7df7d30d = (0, $3M2e9.timeInterval)((date)=>{
    date.setTime(date - date.getMilliseconds());
}, (date, step)=>{
    date.setTime(+date + step * (0, $aV8oI.durationSecond));
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationSecond);
}, (date)=>{
    return date.getUTCSeconds();
});
const $183f8449d1fe2a51$export$4792e48abc550fa1 = $183f8449d1fe2a51$export$3d3c77ce7df7d30d.range;

});
parcelRequire.register("3M2e9", function(module, exports) {

$parcel$export(module.exports, "timeInterval", () => $2bf79513bffd6706$export$1a539c8b2950ab40);
const $2bf79513bffd6706$var$t0 = new Date, $2bf79513bffd6706$var$t1 = new Date;
function $2bf79513bffd6706$export$1a539c8b2950ab40(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = (date)=>{
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = (date)=>{
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = (date)=>{
        const d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = (date, step)=>{
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = (start, stop, step)=>{
        const range = [];
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        let previous;
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
    };
    interval.filter = (test)=>{
        return $2bf79513bffd6706$export$1a539c8b2950ab40((date)=>{
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, (date, step)=>{
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)); // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, 1), !test(date)); // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = (start, end)=>{
            $2bf79513bffd6706$var$t0.setTime(+start), $2bf79513bffd6706$var$t1.setTime(+end);
            floori($2bf79513bffd6706$var$t0), floori($2bf79513bffd6706$var$t1);
            return Math.floor(count($2bf79513bffd6706$var$t0, $2bf79513bffd6706$var$t1));
        };
        interval.every = (step)=>{
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d)=>field(d) % step === 0 : (d)=>interval.count(0, d) % step === 0);
        };
    }
    return interval;
}

});

parcelRequire.register("aV8oI", function(module, exports) {

$parcel$export(module.exports, "durationSecond", () => $7f35bdd33c787c64$export$79ef0e34099623dc);
$parcel$export(module.exports, "durationMinute", () => $7f35bdd33c787c64$export$683905d551c33fa9);
$parcel$export(module.exports, "durationHour", () => $7f35bdd33c787c64$export$4157bf0c8e241659);
$parcel$export(module.exports, "durationDay", () => $7f35bdd33c787c64$export$353686095f4fbf45);
$parcel$export(module.exports, "durationWeek", () => $7f35bdd33c787c64$export$c241eb88520d5016);
$parcel$export(module.exports, "durationMonth", () => $7f35bdd33c787c64$export$ab95684df7020b26);
$parcel$export(module.exports, "durationYear", () => $7f35bdd33c787c64$export$61f8ee2d834c6959);
const $7f35bdd33c787c64$export$79ef0e34099623dc = 1000;
const $7f35bdd33c787c64$export$683905d551c33fa9 = $7f35bdd33c787c64$export$79ef0e34099623dc * 60;
const $7f35bdd33c787c64$export$4157bf0c8e241659 = $7f35bdd33c787c64$export$683905d551c33fa9 * 60;
const $7f35bdd33c787c64$export$353686095f4fbf45 = $7f35bdd33c787c64$export$4157bf0c8e241659 * 24;
const $7f35bdd33c787c64$export$c241eb88520d5016 = $7f35bdd33c787c64$export$353686095f4fbf45 * 7;
const $7f35bdd33c787c64$export$ab95684df7020b26 = $7f35bdd33c787c64$export$353686095f4fbf45 * 30;
const $7f35bdd33c787c64$export$61f8ee2d834c6959 = $7f35bdd33c787c64$export$353686095f4fbf45 * 365;

});


parcelRequire.register("fRNv0", function(module, exports) {

$parcel$export(module.exports, "timeMinute", () => $b8d233baf96c62cb$export$a7e4c34a52f0576);
$parcel$export(module.exports, "utcMinute", () => $b8d233baf96c62cb$export$efe6712d6003761b);

var $3M2e9 = parcelRequire("3M2e9");

var $aV8oI = parcelRequire("aV8oI");
const $b8d233baf96c62cb$export$a7e4c34a52f0576 = (0, $3M2e9.timeInterval)((date)=>{
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, $aV8oI.durationSecond));
}, (date, step)=>{
    date.setTime(+date + step * (0, $aV8oI.durationMinute));
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationMinute);
}, (date)=>{
    return date.getMinutes();
});
const $b8d233baf96c62cb$export$186d65358374c0a2 = $b8d233baf96c62cb$export$a7e4c34a52f0576.range;
const $b8d233baf96c62cb$export$efe6712d6003761b = (0, $3M2e9.timeInterval)((date)=>{
    date.setUTCSeconds(0, 0);
}, (date, step)=>{
    date.setTime(+date + step * (0, $aV8oI.durationMinute));
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationMinute);
}, (date)=>{
    return date.getUTCMinutes();
});
const $b8d233baf96c62cb$export$cedd563624e8ee50 = $b8d233baf96c62cb$export$efe6712d6003761b.range;

});

parcelRequire.register("05bKb", function(module, exports) {

$parcel$export(module.exports, "timeHour", () => $00f993d5e60ac102$export$46c68a5833bc315b);
$parcel$export(module.exports, "utcHour", () => $00f993d5e60ac102$export$31f6f2b3c63ac75e);

var $3M2e9 = parcelRequire("3M2e9");

var $aV8oI = parcelRequire("aV8oI");
const $00f993d5e60ac102$export$46c68a5833bc315b = (0, $3M2e9.timeInterval)((date)=>{
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, $aV8oI.durationSecond) - date.getMinutes() * (0, $aV8oI.durationMinute));
}, (date, step)=>{
    date.setTime(+date + step * (0, $aV8oI.durationHour));
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationHour);
}, (date)=>{
    return date.getHours();
});
const $00f993d5e60ac102$export$fb843f9087cd5235 = $00f993d5e60ac102$export$46c68a5833bc315b.range;
const $00f993d5e60ac102$export$31f6f2b3c63ac75e = (0, $3M2e9.timeInterval)((date)=>{
    date.setUTCMinutes(0, 0, 0);
}, (date, step)=>{
    date.setTime(+date + step * (0, $aV8oI.durationHour));
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationHour);
}, (date)=>{
    return date.getUTCHours();
});
const $00f993d5e60ac102$export$6e7a76cd5f50b719 = $00f993d5e60ac102$export$31f6f2b3c63ac75e.range;

});

parcelRequire.register("5Qaut", function(module, exports) {

$parcel$export(module.exports, "timeDay", () => $4409f242a2e3a2a1$export$8888529b966033e5);
$parcel$export(module.exports, "utcDay", () => $4409f242a2e3a2a1$export$c8cbc42cefd47140);
$parcel$export(module.exports, "unixDay", () => $4409f242a2e3a2a1$export$fb065be2d7ea4a71);

var $3M2e9 = parcelRequire("3M2e9");

var $aV8oI = parcelRequire("aV8oI");
const $4409f242a2e3a2a1$export$8888529b966033e5 = (0, $3M2e9.timeInterval)((date)=>date.setHours(0, 0, 0, 0), (date, step)=>date.setDate(date.getDate() + step), (start, end)=>(end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, $aV8oI.durationMinute)) / (0, $aV8oI.durationDay), (date)=>date.getDate() - 1);
const $4409f242a2e3a2a1$export$6657a54f3034cf45 = $4409f242a2e3a2a1$export$8888529b966033e5.range;
const $4409f242a2e3a2a1$export$c8cbc42cefd47140 = (0, $3M2e9.timeInterval)((date)=>{
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCDate(date.getUTCDate() + step);
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationDay);
}, (date)=>{
    return date.getUTCDate() - 1;
});
const $4409f242a2e3a2a1$export$d277e198508549a1 = $4409f242a2e3a2a1$export$c8cbc42cefd47140.range;
const $4409f242a2e3a2a1$export$fb065be2d7ea4a71 = (0, $3M2e9.timeInterval)((date)=>{
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCDate(date.getUTCDate() + step);
}, (start, end)=>{
    return (end - start) / (0, $aV8oI.durationDay);
}, (date)=>{
    return Math.floor(date / (0, $aV8oI.durationDay));
});
const $4409f242a2e3a2a1$export$a491caaf5e9481aa = $4409f242a2e3a2a1$export$fb065be2d7ea4a71.range;

});

parcelRequire.register("4KkLP", function(module, exports) {

$parcel$export(module.exports, "timeSunday", () => $374b91dc1c90dd87$export$22ee6205b762968c);
$parcel$export(module.exports, "timeMonday", () => $374b91dc1c90dd87$export$e79bbe0177cf1b01);
$parcel$export(module.exports, "timeThursday", () => $374b91dc1c90dd87$export$608689422d5cf9f4);
$parcel$export(module.exports, "utcSunday", () => $374b91dc1c90dd87$export$4898b06303a92011);
$parcel$export(module.exports, "utcMonday", () => $374b91dc1c90dd87$export$9cfc53b9cfafd080);
$parcel$export(module.exports, "utcThursday", () => $374b91dc1c90dd87$export$1db08111baec2f53);

var $3M2e9 = parcelRequire("3M2e9");

var $aV8oI = parcelRequire("aV8oI");
function $374b91dc1c90dd87$var$timeWeekday(i) {
    return (0, $3M2e9.timeInterval)((date)=>{
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setDate(date.getDate() + step * 7);
    }, (start, end)=>{
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, $aV8oI.durationMinute)) / (0, $aV8oI.durationWeek);
    });
}
const $374b91dc1c90dd87$export$22ee6205b762968c = $374b91dc1c90dd87$var$timeWeekday(0);
const $374b91dc1c90dd87$export$e79bbe0177cf1b01 = $374b91dc1c90dd87$var$timeWeekday(1);
const $374b91dc1c90dd87$export$57c0658c29f77708 = $374b91dc1c90dd87$var$timeWeekday(2);
const $374b91dc1c90dd87$export$3fbeef226c256e43 = $374b91dc1c90dd87$var$timeWeekday(3);
const $374b91dc1c90dd87$export$608689422d5cf9f4 = $374b91dc1c90dd87$var$timeWeekday(4);
const $374b91dc1c90dd87$export$548e5227aa183dca = $374b91dc1c90dd87$var$timeWeekday(5);
const $374b91dc1c90dd87$export$c56a3ad248908e19 = $374b91dc1c90dd87$var$timeWeekday(6);
const $374b91dc1c90dd87$export$eac514c8a8674eba = $374b91dc1c90dd87$export$22ee6205b762968c.range;
const $374b91dc1c90dd87$export$f7219b1481948356 = $374b91dc1c90dd87$export$e79bbe0177cf1b01.range;
const $374b91dc1c90dd87$export$77e22b12c5bed05b = $374b91dc1c90dd87$export$57c0658c29f77708.range;
const $374b91dc1c90dd87$export$b85d407a471809e8 = $374b91dc1c90dd87$export$3fbeef226c256e43.range;
const $374b91dc1c90dd87$export$c1bc1c49254c8855 = $374b91dc1c90dd87$export$608689422d5cf9f4.range;
const $374b91dc1c90dd87$export$3691a1557fff46f1 = $374b91dc1c90dd87$export$548e5227aa183dca.range;
const $374b91dc1c90dd87$export$b755452d02cba8d2 = $374b91dc1c90dd87$export$c56a3ad248908e19.range;
function $374b91dc1c90dd87$var$utcWeekday(i) {
    return (0, $3M2e9.timeInterval)((date)=>{
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, (start, end)=>{
        return (end - start) / (0, $aV8oI.durationWeek);
    });
}
const $374b91dc1c90dd87$export$4898b06303a92011 = $374b91dc1c90dd87$var$utcWeekday(0);
const $374b91dc1c90dd87$export$9cfc53b9cfafd080 = $374b91dc1c90dd87$var$utcWeekday(1);
const $374b91dc1c90dd87$export$2a6d545f77eceb15 = $374b91dc1c90dd87$var$utcWeekday(2);
const $374b91dc1c90dd87$export$a5c25d8ed64433c4 = $374b91dc1c90dd87$var$utcWeekday(3);
const $374b91dc1c90dd87$export$1db08111baec2f53 = $374b91dc1c90dd87$var$utcWeekday(4);
const $374b91dc1c90dd87$export$29265e34dd5921f7 = $374b91dc1c90dd87$var$utcWeekday(5);
const $374b91dc1c90dd87$export$85b74dad05049604 = $374b91dc1c90dd87$var$utcWeekday(6);
const $374b91dc1c90dd87$export$6f3e1c2b0f7d7880 = $374b91dc1c90dd87$export$4898b06303a92011.range;
const $374b91dc1c90dd87$export$1d2d8b858bb366f9 = $374b91dc1c90dd87$export$9cfc53b9cfafd080.range;
const $374b91dc1c90dd87$export$1d5f6785fc7f30f8 = $374b91dc1c90dd87$export$2a6d545f77eceb15.range;
const $374b91dc1c90dd87$export$7a75faf0e37ef4af = $374b91dc1c90dd87$export$a5c25d8ed64433c4.range;
const $374b91dc1c90dd87$export$417eb959611b2f2f = $374b91dc1c90dd87$export$1db08111baec2f53.range;
const $374b91dc1c90dd87$export$59d308db7af08c64 = $374b91dc1c90dd87$export$29265e34dd5921f7.range;
const $374b91dc1c90dd87$export$a124108a0a7f34c8 = $374b91dc1c90dd87$export$85b74dad05049604.range;

});

parcelRequire.register("1oTyM", function(module, exports) {

$parcel$export(module.exports, "timeMonth", () => $10532164eb1568d5$export$7e1084fb688591c1);
$parcel$export(module.exports, "utcMonth", () => $10532164eb1568d5$export$cd49b3d2bcfe50d5);

var $3M2e9 = parcelRequire("3M2e9");
const $10532164eb1568d5$export$7e1084fb688591c1 = (0, $3M2e9.timeInterval)((date)=>{
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setMonth(date.getMonth() + step);
}, (start, end)=>{
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date)=>{
    return date.getMonth();
});
const $10532164eb1568d5$export$3e24aa839cd0f1c4 = $10532164eb1568d5$export$7e1084fb688591c1.range;
const $10532164eb1568d5$export$cd49b3d2bcfe50d5 = (0, $3M2e9.timeInterval)((date)=>{
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end)=>{
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date)=>{
    return date.getUTCMonth();
});
const $10532164eb1568d5$export$49159f585997498 = $10532164eb1568d5$export$cd49b3d2bcfe50d5.range;

});

parcelRequire.register("aSDVC", function(module, exports) {

$parcel$export(module.exports, "timeYear", () => $7ebdeb72f8eadd37$export$cd17cfe45df0c046);
$parcel$export(module.exports, "utcYear", () => $7ebdeb72f8eadd37$export$d5c3802e389714c4);

var $3M2e9 = parcelRequire("3M2e9");
const $7ebdeb72f8eadd37$export$cd17cfe45df0c046 = (0, $3M2e9.timeInterval)((date)=>{
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setFullYear(date.getFullYear() + step);
}, (start, end)=>{
    return end.getFullYear() - start.getFullYear();
}, (date)=>{
    return date.getFullYear();
});
// An optimized implementation for this simple case.
$7ebdeb72f8eadd37$export$cd17cfe45df0c046.every = (k)=>{
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, $3M2e9.timeInterval)((date)=>{
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setFullYear(date.getFullYear() + step * k);
    });
};
const $7ebdeb72f8eadd37$export$69a4e90dd2cc3bd1 = $7ebdeb72f8eadd37$export$cd17cfe45df0c046.range;
const $7ebdeb72f8eadd37$export$d5c3802e389714c4 = (0, $3M2e9.timeInterval)((date)=>{
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end)=>{
    return end.getUTCFullYear() - start.getUTCFullYear();
}, (date)=>{
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
$7ebdeb72f8eadd37$export$d5c3802e389714c4.every = (k)=>{
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, $3M2e9.timeInterval)((date)=>{
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
const $7ebdeb72f8eadd37$export$3e24d311e17f5802 = $7ebdeb72f8eadd37$export$d5c3802e389714c4.range;

});

parcelRequire.register("5fDCf", function(module, exports) {

$parcel$export(module.exports, "timeTicks", () => $3d2d1560e489ccaa$export$60c76498552d28a6);
$parcel$export(module.exports, "timeTickInterval", () => $3d2d1560e489ccaa$export$69511150134dd174);

var $1ntG2 = parcelRequire("1ntG2");
var $8nNeJ = parcelRequire("8nNeJ");

var $aV8oI = parcelRequire("aV8oI");

var $92PIr = parcelRequire("92PIr");

var $254th = parcelRequire("254th");

var $fRNv0 = parcelRequire("fRNv0");

var $05bKb = parcelRequire("05bKb");

var $5Qaut = parcelRequire("5Qaut");

var $4KkLP = parcelRequire("4KkLP");

var $1oTyM = parcelRequire("1oTyM");

var $aSDVC = parcelRequire("aSDVC");
function $3d2d1560e489ccaa$var$ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
        [
            (0, $254th.second),
            1,
            (0, $aV8oI.durationSecond)
        ],
        [
            (0, $254th.second),
            5,
            5 * (0, $aV8oI.durationSecond)
        ],
        [
            (0, $254th.second),
            15,
            15 * (0, $aV8oI.durationSecond)
        ],
        [
            (0, $254th.second),
            30,
            30 * (0, $aV8oI.durationSecond)
        ],
        [
            minute,
            1,
            (0, $aV8oI.durationMinute)
        ],
        [
            minute,
            5,
            5 * (0, $aV8oI.durationMinute)
        ],
        [
            minute,
            15,
            15 * (0, $aV8oI.durationMinute)
        ],
        [
            minute,
            30,
            30 * (0, $aV8oI.durationMinute)
        ],
        [
            hour,
            1,
            (0, $aV8oI.durationHour)
        ],
        [
            hour,
            3,
            3 * (0, $aV8oI.durationHour)
        ],
        [
            hour,
            6,
            6 * (0, $aV8oI.durationHour)
        ],
        [
            hour,
            12,
            12 * (0, $aV8oI.durationHour)
        ],
        [
            day,
            1,
            (0, $aV8oI.durationDay)
        ],
        [
            day,
            2,
            2 * (0, $aV8oI.durationDay)
        ],
        [
            week,
            1,
            (0, $aV8oI.durationWeek)
        ],
        [
            month,
            1,
            (0, $aV8oI.durationMonth)
        ],
        [
            month,
            3,
            3 * (0, $aV8oI.durationMonth)
        ],
        [
            year,
            1,
            (0, $aV8oI.durationYear)
        ]
    ];
    function ticks(start, stop, count) {
        const reverse = stop < start;
        if (reverse) [start, stop] = [
            stop,
            start
        ];
        const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
        const target = Math.abs(stop - start) / count;
        const i = (0, $1ntG2.default)(([, , step])=>step).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every((0, $8nNeJ.tickStep)(start / (0, $aV8oI.durationYear), stop / (0, $aV8oI.durationYear), count));
        if (i === 0) return (0, $92PIr.millisecond).every(Math.max((0, $8nNeJ.tickStep)(start, stop, count), 1));
        const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step);
    }
    return [
        ticks,
        tickInterval
    ];
}
const [$3d2d1560e489ccaa$export$826ba5ae907e9767, $3d2d1560e489ccaa$export$6262d8d056ea44c4] = $3d2d1560e489ccaa$var$ticker((0, $aSDVC.utcYear), (0, $1oTyM.utcMonth), (0, $4KkLP.utcSunday), (0, $5Qaut.unixDay), (0, $05bKb.utcHour), (0, $fRNv0.utcMinute));
const [$3d2d1560e489ccaa$export$60c76498552d28a6, $3d2d1560e489ccaa$export$69511150134dd174] = $3d2d1560e489ccaa$var$ticker((0, $aSDVC.timeYear), (0, $1oTyM.timeMonth), (0, $4KkLP.timeSunday), (0, $5Qaut.timeDay), (0, $05bKb.timeHour), (0, $fRNv0.timeMinute));

});
parcelRequire.register("92PIr", function(module, exports) {

$parcel$export(module.exports, "millisecond", () => $695c6a9dcf1e3327$export$edc5e5cb87280477);

var $3M2e9 = parcelRequire("3M2e9");
const $695c6a9dcf1e3327$export$edc5e5cb87280477 = (0, $3M2e9.timeInterval)(()=>{
// noop
}, (date, step)=>{
    date.setTime(+date + step);
}, (start, end)=>{
    return end - start;
});
// An optimized implementation for this simple case.
$695c6a9dcf1e3327$export$edc5e5cb87280477.every = (k)=>{
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return $695c6a9dcf1e3327$export$edc5e5cb87280477;
    return (0, $3M2e9.timeInterval)((date)=>{
        date.setTime(Math.floor(date / k) * k);
    }, (date, step)=>{
        date.setTime(+date + step * k);
    }, (start, end)=>{
        return (end - start) / k;
    });
};
const $695c6a9dcf1e3327$export$9a27fac83d67afd3 = $695c6a9dcf1e3327$export$edc5e5cb87280477.range;

});



parcelRequire.register("7m7sT", function(module, exports) {

$parcel$export(module.exports, "timeFormat", () => $55b060da6b737205$export$94f4d87fad5dcf9a);

var $aDiTI = parcelRequire("aDiTI");
var $55b060da6b737205$var$locale;
var $55b060da6b737205$export$94f4d87fad5dcf9a;
var $55b060da6b737205$export$32b9cd16e1b8c8d2;
var $55b060da6b737205$export$1a08fe38f63ebbbb;
var $55b060da6b737205$export$3edae9cf8e233729;
$55b060da6b737205$export$2e2bcd8739ae039({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function $55b060da6b737205$export$2e2bcd8739ae039(definition) {
    $55b060da6b737205$var$locale = (0, $aDiTI.default)(definition);
    $55b060da6b737205$export$94f4d87fad5dcf9a = $55b060da6b737205$var$locale.format;
    $55b060da6b737205$export$32b9cd16e1b8c8d2 = $55b060da6b737205$var$locale.parse;
    $55b060da6b737205$export$1a08fe38f63ebbbb = $55b060da6b737205$var$locale.utcFormat;
    $55b060da6b737205$export$3edae9cf8e233729 = $55b060da6b737205$var$locale.utcParse;
    return $55b060da6b737205$var$locale;
}

});
parcelRequire.register("aDiTI", function(module, exports) {

$parcel$export(module.exports, "default", () => $7bdc349069fba8bd$export$2e2bcd8739ae039);

var $4KkLP = parcelRequire("4KkLP");
var $5Qaut = parcelRequire("5Qaut");
var $aSDVC = parcelRequire("aSDVC");
function $7bdc349069fba8bd$var$localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function $7bdc349069fba8bd$var$utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function $7bdc349069fba8bd$var$newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function $7bdc349069fba8bd$export$2e2bcd8739ae039(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = $7bdc349069fba8bd$var$formatRe(locale_periods), periodLookup = $7bdc349069fba8bd$var$formatLookup(locale_periods), weekdayRe = $7bdc349069fba8bd$var$formatRe(locale_weekdays), weekdayLookup = $7bdc349069fba8bd$var$formatLookup(locale_weekdays), shortWeekdayRe = $7bdc349069fba8bd$var$formatRe(locale_shortWeekdays), shortWeekdayLookup = $7bdc349069fba8bd$var$formatLookup(locale_shortWeekdays), monthRe = $7bdc349069fba8bd$var$formatRe(locale_months), monthLookup = $7bdc349069fba8bd$var$formatLookup(locale_months), shortMonthRe = $7bdc349069fba8bd$var$formatRe(locale_shortMonths), shortMonthLookup = $7bdc349069fba8bd$var$formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": $7bdc349069fba8bd$var$formatDayOfMonth,
        "e": $7bdc349069fba8bd$var$formatDayOfMonth,
        "f": $7bdc349069fba8bd$var$formatMicroseconds,
        "g": $7bdc349069fba8bd$var$formatYearISO,
        "G": $7bdc349069fba8bd$var$formatFullYearISO,
        "H": $7bdc349069fba8bd$var$formatHour24,
        "I": $7bdc349069fba8bd$var$formatHour12,
        "j": $7bdc349069fba8bd$var$formatDayOfYear,
        "L": $7bdc349069fba8bd$var$formatMilliseconds,
        "m": $7bdc349069fba8bd$var$formatMonthNumber,
        "M": $7bdc349069fba8bd$var$formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": $7bdc349069fba8bd$var$formatUnixTimestamp,
        "s": $7bdc349069fba8bd$var$formatUnixTimestampSeconds,
        "S": $7bdc349069fba8bd$var$formatSeconds,
        "u": $7bdc349069fba8bd$var$formatWeekdayNumberMonday,
        "U": $7bdc349069fba8bd$var$formatWeekNumberSunday,
        "V": $7bdc349069fba8bd$var$formatWeekNumberISO,
        "w": $7bdc349069fba8bd$var$formatWeekdayNumberSunday,
        "W": $7bdc349069fba8bd$var$formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": $7bdc349069fba8bd$var$formatYear,
        "Y": $7bdc349069fba8bd$var$formatFullYear,
        "Z": $7bdc349069fba8bd$var$formatZone,
        "%": $7bdc349069fba8bd$var$formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": $7bdc349069fba8bd$var$formatUTCDayOfMonth,
        "e": $7bdc349069fba8bd$var$formatUTCDayOfMonth,
        "f": $7bdc349069fba8bd$var$formatUTCMicroseconds,
        "g": $7bdc349069fba8bd$var$formatUTCYearISO,
        "G": $7bdc349069fba8bd$var$formatUTCFullYearISO,
        "H": $7bdc349069fba8bd$var$formatUTCHour24,
        "I": $7bdc349069fba8bd$var$formatUTCHour12,
        "j": $7bdc349069fba8bd$var$formatUTCDayOfYear,
        "L": $7bdc349069fba8bd$var$formatUTCMilliseconds,
        "m": $7bdc349069fba8bd$var$formatUTCMonthNumber,
        "M": $7bdc349069fba8bd$var$formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": $7bdc349069fba8bd$var$formatUnixTimestamp,
        "s": $7bdc349069fba8bd$var$formatUnixTimestampSeconds,
        "S": $7bdc349069fba8bd$var$formatUTCSeconds,
        "u": $7bdc349069fba8bd$var$formatUTCWeekdayNumberMonday,
        "U": $7bdc349069fba8bd$var$formatUTCWeekNumberSunday,
        "V": $7bdc349069fba8bd$var$formatUTCWeekNumberISO,
        "w": $7bdc349069fba8bd$var$formatUTCWeekdayNumberSunday,
        "W": $7bdc349069fba8bd$var$formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": $7bdc349069fba8bd$var$formatUTCYear,
        "Y": $7bdc349069fba8bd$var$formatUTCFullYear,
        "Z": $7bdc349069fba8bd$var$formatUTCZone,
        "%": $7bdc349069fba8bd$var$formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": $7bdc349069fba8bd$var$parseDayOfMonth,
        "e": $7bdc349069fba8bd$var$parseDayOfMonth,
        "f": $7bdc349069fba8bd$var$parseMicroseconds,
        "g": $7bdc349069fba8bd$var$parseYear,
        "G": $7bdc349069fba8bd$var$parseFullYear,
        "H": $7bdc349069fba8bd$var$parseHour24,
        "I": $7bdc349069fba8bd$var$parseHour24,
        "j": $7bdc349069fba8bd$var$parseDayOfYear,
        "L": $7bdc349069fba8bd$var$parseMilliseconds,
        "m": $7bdc349069fba8bd$var$parseMonthNumber,
        "M": $7bdc349069fba8bd$var$parseMinutes,
        "p": parsePeriod,
        "q": $7bdc349069fba8bd$var$parseQuarter,
        "Q": $7bdc349069fba8bd$var$parseUnixTimestamp,
        "s": $7bdc349069fba8bd$var$parseUnixTimestampSeconds,
        "S": $7bdc349069fba8bd$var$parseSeconds,
        "u": $7bdc349069fba8bd$var$parseWeekdayNumberMonday,
        "U": $7bdc349069fba8bd$var$parseWeekNumberSunday,
        "V": $7bdc349069fba8bd$var$parseWeekNumberISO,
        "w": $7bdc349069fba8bd$var$parseWeekdayNumberSunday,
        "W": $7bdc349069fba8bd$var$parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": $7bdc349069fba8bd$var$parseYear,
        "Y": $7bdc349069fba8bd$var$parseFullYear,
        "Z": $7bdc349069fba8bd$var$parseZone,
        "%": $7bdc349069fba8bd$var$parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = $7bdc349069fba8bd$var$pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = $7bdc349069fba8bd$var$newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = $7bdc349069fba8bd$var$utcDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? (0, $4KkLP.utcMonday).ceil(week) : (0, $4KkLP.utcMonday)(week);
                    week = (0, $5Qaut.utcDay).offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = $7bdc349069fba8bd$var$localDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? (0, $4KkLP.timeMonday).ceil(week) : (0, $4KkLP.timeMonday)(week);
                    week = (0, $5Qaut.timeDay).offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? $7bdc349069fba8bd$var$utcDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)).getUTCDay() : $7bdc349069fba8bd$var$localDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return $7bdc349069fba8bd$var$utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return $7bdc349069fba8bd$var$localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in $7bdc349069fba8bd$var$pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) return -1;
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
var $7bdc349069fba8bd$var$pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, $7bdc349069fba8bd$var$numberRe = /^\s*\d+/, $7bdc349069fba8bd$var$percentRe = /^%/, $7bdc349069fba8bd$var$requoteRe = /[\\^$*+?|[\]().{}]/g;
function $7bdc349069fba8bd$var$pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function $7bdc349069fba8bd$var$requote(s) {
    return s.replace($7bdc349069fba8bd$var$requoteRe, "\\$&");
}
function $7bdc349069fba8bd$var$formatRe(names) {
    return new RegExp("^(?:" + names.map($7bdc349069fba8bd$var$requote).join("|") + ")", "i");
}
function $7bdc349069fba8bd$var$formatLookup(names) {
    return new Map(names.map((name, i)=>[
            name.toLowerCase(),
            i
        ]));
}
function $7bdc349069fba8bd$var$parseWeekdayNumberSunday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekdayNumberMonday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekNumberSunday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekNumberISO(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekNumberMonday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseFullYear(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseYear(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseQuarter(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMonthNumber(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseDayOfMonth(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseDayOfYear(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseHour24(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMinutes(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseSeconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMilliseconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMicroseconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseLiteralPercent(d, string, i) {
    var n = $7bdc349069fba8bd$var$percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function $7bdc349069fba8bd$var$parseUnixTimestamp(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseUnixTimestampSeconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$formatDayOfMonth(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getDate(), p, 2);
}
function $7bdc349069fba8bd$var$formatHour24(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getHours(), p, 2);
}
function $7bdc349069fba8bd$var$formatHour12(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getHours() % 12 || 12, p, 2);
}
function $7bdc349069fba8bd$var$formatDayOfYear(d, p) {
    return $7bdc349069fba8bd$var$pad(1 + (0, $5Qaut.timeDay).count((0, $aSDVC.timeYear)(d), d), p, 3);
}
function $7bdc349069fba8bd$var$formatMilliseconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getMilliseconds(), p, 3);
}
function $7bdc349069fba8bd$var$formatMicroseconds(d, p) {
    return $7bdc349069fba8bd$var$formatMilliseconds(d, p) + "000";
}
function $7bdc349069fba8bd$var$formatMonthNumber(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getMonth() + 1, p, 2);
}
function $7bdc349069fba8bd$var$formatMinutes(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getMinutes(), p, 2);
}
function $7bdc349069fba8bd$var$formatSeconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getSeconds(), p, 2);
}
function $7bdc349069fba8bd$var$formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function $7bdc349069fba8bd$var$formatWeekNumberSunday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $4KkLP.timeSunday).count((0, $aSDVC.timeYear)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? (0, $4KkLP.timeThursday)(d) : (0, $4KkLP.timeThursday).ceil(d);
}
function $7bdc349069fba8bd$var$formatWeekNumberISO(d, p) {
    d = $7bdc349069fba8bd$var$dISO(d);
    return $7bdc349069fba8bd$var$pad((0, $4KkLP.timeThursday).count((0, $aSDVC.timeYear)(d), d) + ((0, $aSDVC.timeYear)(d).getDay() === 4), p, 2);
}
function $7bdc349069fba8bd$var$formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function $7bdc349069fba8bd$var$formatWeekNumberMonday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $4KkLP.timeMonday).count((0, $aSDVC.timeYear)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$formatYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatYearISO(d, p) {
    d = $7bdc349069fba8bd$var$dISO(d);
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatFullYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? (0, $4KkLP.timeThursday)(d) : (0, $4KkLP.timeThursday).ceil(d);
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + $7bdc349069fba8bd$var$pad(z / 60 | 0, "0", 2) + $7bdc349069fba8bd$var$pad(z % 60, "0", 2);
}
function $7bdc349069fba8bd$var$formatUTCDayOfMonth(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCDate(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCHour24(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCHours(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCHour12(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCHours() % 12 || 12, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCDayOfYear(d, p) {
    return $7bdc349069fba8bd$var$pad(1 + (0, $5Qaut.utcDay).count((0, $aSDVC.utcYear)(d), d), p, 3);
}
function $7bdc349069fba8bd$var$formatUTCMilliseconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCMilliseconds(), p, 3);
}
function $7bdc349069fba8bd$var$formatUTCMicroseconds(d, p) {
    return $7bdc349069fba8bd$var$formatUTCMilliseconds(d, p) + "000";
}
function $7bdc349069fba8bd$var$formatUTCMonthNumber(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCMonth() + 1, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCMinutes(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCMinutes(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCSeconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCSeconds(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function $7bdc349069fba8bd$var$formatUTCWeekNumberSunday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $4KkLP.utcSunday).count((0, $aSDVC.utcYear)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? (0, $4KkLP.utcThursday)(d) : (0, $4KkLP.utcThursday).ceil(d);
}
function $7bdc349069fba8bd$var$formatUTCWeekNumberISO(d, p) {
    d = $7bdc349069fba8bd$var$UTCdISO(d);
    return $7bdc349069fba8bd$var$pad((0, $4KkLP.utcThursday).count((0, $aSDVC.utcYear)(d), d) + ((0, $aSDVC.utcYear)(d).getUTCDay() === 4), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function $7bdc349069fba8bd$var$formatUTCWeekNumberMonday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $4KkLP.utcMonday).count((0, $aSDVC.utcYear)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCYearISO(d, p) {
    d = $7bdc349069fba8bd$var$UTCdISO(d);
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCFullYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? (0, $4KkLP.utcThursday)(d) : (0, $4KkLP.utcThursday).ceil(d);
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatUTCZone() {
    return "+0000";
}
function $7bdc349069fba8bd$var$formatLiteralPercent() {
    return "%";
}
function $7bdc349069fba8bd$var$formatUnixTimestamp(d) {
    return +d;
}
function $7bdc349069fba8bd$var$formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}

});



parcelRequire.register("9zdE8", function(module, exports) {

$parcel$export(module.exports, "default", () => $6f71f7d57b1895e1$export$2e2bcd8739ae039);
function $6f71f7d57b1895e1$export$2e2bcd8739ae039(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}

});



parcelRequire.register("92bdo", function(module, exports) {

$parcel$export(module.exports, "default", () => $693d000215afaae2$export$2e2bcd8739ae039);

var $5Gl4W = parcelRequire("5Gl4W");

var $cugGf = parcelRequire("cugGf");

var $bATOW = parcelRequire("bATOW");
function $693d000215afaae2$var$arcInnerRadius(d) {
    return d.innerRadius;
}
function $693d000215afaae2$var$arcOuterRadius(d) {
    return d.outerRadius;
}
function $693d000215afaae2$var$arcStartAngle(d) {
    return d.startAngle;
}
function $693d000215afaae2$var$arcEndAngle(d) {
    return d.endAngle;
}
function $693d000215afaae2$var$arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function $693d000215afaae2$var$intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < (0, $cugGf.epsilon)) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [
        x0 + t * x10,
        y0 + t * y10
    ];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function $693d000215afaae2$var$cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / (0, $cugGf.sqrt)(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * (0, $cugGf.sqrt)((0, $cugGf.max)(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
    };
}
function $693d000215afaae2$export$2e2bcd8739ae039() {
    var innerRadius = $693d000215afaae2$var$arcInnerRadius, outerRadius = $693d000215afaae2$var$arcOuterRadius, cornerRadius = (0, $5Gl4W.default)(0), padRadius = null, startAngle = $693d000215afaae2$var$arcStartAngle, endAngle = $693d000215afaae2$var$arcEndAngle, padAngle = $693d000215afaae2$var$arcPadAngle, context = null, path = (0, $bATOW.withPath)(arc);
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - (0, $cugGf.halfPi), a1 = endAngle.apply(this, arguments) - (0, $cugGf.halfPi), da = (0, $cugGf.abs)(a1 - a0), cw = a1 > a0;
        if (!context) context = buffer = path();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > (0, $cugGf.epsilon))) context.moveTo(0, 0);
        else if (da > (0, $cugGf.tau) - (0, $cugGf.epsilon)) {
            context.moveTo(r1 * (0, $cugGf.cos)(a0), r1 * (0, $cugGf.sin)(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > (0, $cugGf.epsilon)) {
                context.moveTo(r0 * (0, $cugGf.cos)(a1), r0 * (0, $cugGf.sin)(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        } else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > (0, $cugGf.epsilon) && (padRadius ? +padRadius.apply(this, arguments) : (0, $cugGf.sqrt)(r0 * r0 + r1 * r1)), rc = (0, $cugGf.min)((0, $cugGf.abs)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > (0, $cugGf.epsilon)) {
                var p0 = (0, $cugGf.asin)(rp / r0 * (0, $cugGf.sin)(ap)), p1 = (0, $cugGf.asin)(rp / r1 * (0, $cugGf.sin)(ap));
                if ((da0 -= p0 * 2) > (0, $cugGf.epsilon)) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
                else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > (0, $cugGf.epsilon)) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
                else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * (0, $cugGf.cos)(a01), y01 = r1 * (0, $cugGf.sin)(a01), x10 = r0 * (0, $cugGf.cos)(a10), y10 = r0 * (0, $cugGf.sin)(a10);
            // Apply rounded corners?
            if (rc > (0, $cugGf.epsilon)) {
                var x11 = r1 * (0, $cugGf.cos)(a11), y11 = r1 * (0, $cugGf.sin)(a11), x00 = r0 * (0, $cugGf.cos)(a00), y00 = r0 * (0, $cugGf.sin)(a00), oc;
                // Restrict the corner radius according to the sector angle. If this
                // intersection fails, it’s probably because the arc is too small, so
                // disable the corner radius entirely.
                if (da < (0, $cugGf.pi)) {
                    if (oc = $693d000215afaae2$var$intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
                        var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / (0, $cugGf.sin)((0, $cugGf.acos)((ax * bx + ay * by) / ((0, $cugGf.sqrt)(ax * ax + ay * ay) * (0, $cugGf.sqrt)(bx * bx + by * by))) / 2), lc = (0, $cugGf.sqrt)(oc[0] * oc[0] + oc[1] * oc[1]);
                        rc0 = (0, $cugGf.min)(rc, (r0 - lc) / (kc - 1));
                        rc1 = (0, $cugGf.min)(rc, (r1 - lc) / (kc + 1));
                    } else rc0 = rc1 = 0;
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > (0, $cugGf.epsilon))) context.moveTo(x01, y01);
            else if (rc1 > (0, $cugGf.epsilon)) {
                t0 = $693d000215afaae2$var$cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = $693d000215afaae2$var$cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc1, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, (0, $cugGf.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, $cugGf.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, (0, $cugGf.atan2)(t1.y11, t1.x11), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > (0, $cugGf.epsilon)) || !(da0 > (0, $cugGf.epsilon))) context.lineTo(x10, y10);
            else if (rc0 > (0, $cugGf.epsilon)) {
                t0 = $693d000215afaae2$var$cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = $693d000215afaae2$var$cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc0, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, (0, $cugGf.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, $cugGf.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, (0, $cugGf.atan2)(t1.y11, t1.x11), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                }
            } else context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - (0, $cugGf.pi) / 2;
        return [
            (0, $cugGf.cos)(a) * r,
            (0, $cugGf.sin)(a) * r
        ];
    };
    arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), arc) : padAngle;
    };
    arc.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
}

});
parcelRequire.register("5Gl4W", function(module, exports) {

$parcel$export(module.exports, "default", () => $423139cc125b403c$export$2e2bcd8739ae039);
function $423139cc125b403c$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}

});

parcelRequire.register("cugGf", function(module, exports) {

$parcel$export(module.exports, "abs", () => $917539beb16edf84$export$2335f513bbd82c6d);
$parcel$export(module.exports, "atan2", () => $917539beb16edf84$export$b8b770ee6a0d9760);
$parcel$export(module.exports, "cos", () => $917539beb16edf84$export$50d414a77b60d802);
$parcel$export(module.exports, "max", () => $917539beb16edf84$export$8960430cfd85939f);
$parcel$export(module.exports, "min", () => $917539beb16edf84$export$96ec731ed4dcb222);
$parcel$export(module.exports, "sin", () => $917539beb16edf84$export$5de3937cb4b592ed);
$parcel$export(module.exports, "sqrt", () => $917539beb16edf84$export$eba8049fb5020b81);
$parcel$export(module.exports, "epsilon", () => $917539beb16edf84$export$6c421550c66a327d);
$parcel$export(module.exports, "pi", () => $917539beb16edf84$export$18c7bea995a110f);
$parcel$export(module.exports, "halfPi", () => $917539beb16edf84$export$e51408a300e8929a);
$parcel$export(module.exports, "tau", () => $917539beb16edf84$export$a4b4b4d4d776fe92);
$parcel$export(module.exports, "acos", () => $917539beb16edf84$export$fd6306be3fde5b04);
$parcel$export(module.exports, "asin", () => $917539beb16edf84$export$41726bdb1fc63f);
const $917539beb16edf84$export$2335f513bbd82c6d = Math.abs;
const $917539beb16edf84$export$b8b770ee6a0d9760 = Math.atan2;
const $917539beb16edf84$export$50d414a77b60d802 = Math.cos;
const $917539beb16edf84$export$8960430cfd85939f = Math.max;
const $917539beb16edf84$export$96ec731ed4dcb222 = Math.min;
const $917539beb16edf84$export$5de3937cb4b592ed = Math.sin;
const $917539beb16edf84$export$eba8049fb5020b81 = Math.sqrt;
const $917539beb16edf84$export$6c421550c66a327d = 1e-12;
const $917539beb16edf84$export$18c7bea995a110f = Math.PI;
const $917539beb16edf84$export$e51408a300e8929a = $917539beb16edf84$export$18c7bea995a110f / 2;
const $917539beb16edf84$export$a4b4b4d4d776fe92 = 2 * $917539beb16edf84$export$18c7bea995a110f;
function $917539beb16edf84$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $917539beb16edf84$export$18c7bea995a110f : Math.acos(x);
}
function $917539beb16edf84$export$41726bdb1fc63f(x) {
    return x >= 1 ? $917539beb16edf84$export$e51408a300e8929a : x <= -1 ? -$917539beb16edf84$export$e51408a300e8929a : Math.asin(x);
}

});

parcelRequire.register("bATOW", function(module, exports) {

$parcel$export(module.exports, "withPath", () => $870e5b57a9fe27e6$export$fb6e83118a5dcd45);

var $1DGEA = parcelRequire("1DGEA");
function $870e5b57a9fe27e6$export$fb6e83118a5dcd45(shape) {
    let digits = 3;
    shape.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) digits = null;
        else {
            const d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
            digits = d;
        }
        return shape;
    };
    return ()=>new (0, $1DGEA.Path)(digits);
}

});
parcelRequire.register("1DGEA", function(module, exports) {

$parcel$export(module.exports, "Path", () => $131a8512ae592f4d$export$4b2950bdac9b6ee9);
const $131a8512ae592f4d$var$pi = Math.PI, $131a8512ae592f4d$var$tau = 2 * $131a8512ae592f4d$var$pi, $131a8512ae592f4d$var$epsilon = 1e-6, $131a8512ae592f4d$var$tauEpsilon = $131a8512ae592f4d$var$tau - $131a8512ae592f4d$var$epsilon;
function $131a8512ae592f4d$var$append(strings) {
    this._ += strings[0];
    for(let i = 1, n = strings.length; i < n; ++i)this._ += arguments[i] + strings[i];
}
function $131a8512ae592f4d$var$appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return $131a8512ae592f4d$var$append;
    const k = 10 ** d;
    return function(strings) {
        this._ += strings[0];
        for(let i = 1, n = strings.length; i < n; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
    };
}
class $131a8512ae592f4d$export$4b2950bdac9b6ee9 {
    constructor(digits){
        this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
        this._append = digits == null ? $131a8512ae592f4d$var$append : $131a8512ae592f4d$var$appendRound(digits);
    }
    moveTo(x, y) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._append`Z`;
        }
    }
    lineTo(x, y) {
        this._append`L${this._x1 = +x},${this._y1 = +y}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
        this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
    }
    arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._append`M${this._x1 = x1},${this._y1 = y1}`;
        else if (!(l01_2 > $131a8512ae592f4d$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $131a8512ae592f4d$var$epsilon) || !r) this._append`L${this._x1 = x1},${this._y1 = y1}`;
        else {
            let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($131a8512ae592f4d$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $131a8512ae592f4d$var$epsilon) this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
            this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
        }
    }
    arc(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._append`M${x0},${y0}`;
        else if (Math.abs(this._x1 - x0) > $131a8512ae592f4d$var$epsilon || Math.abs(this._y1 - y0) > $131a8512ae592f4d$var$epsilon) this._append`L${x0},${y0}`;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $131a8512ae592f4d$var$tau + $131a8512ae592f4d$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $131a8512ae592f4d$var$tauEpsilon) this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
        else if (da > $131a8512ae592f4d$var$epsilon) this._append`A${r},${r},0,${+(da >= $131a8512ae592f4d$var$pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
    rect(x, y, w, h) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
        return this._;
    }
}
function $131a8512ae592f4d$export$bb654e07daaf8c3a() {
    return new $131a8512ae592f4d$export$4b2950bdac9b6ee9;
}
// Allow instanceof d3.path
$131a8512ae592f4d$export$bb654e07daaf8c3a.prototype = $131a8512ae592f4d$export$4b2950bdac9b6ee9.prototype;
function $131a8512ae592f4d$export$e181c6ece8d9cc5f(digits = 3) {
    return new $131a8512ae592f4d$export$4b2950bdac9b6ee9(+digits);
}

});




parcelRequire.register("feJHx", function(module, exports) {

$parcel$export(module.exports, "default", () => $b17b9d20ce229ebe$export$2e2bcd8739ae039);

var $2IE1w = parcelRequire("2IE1w");

var $5Gl4W = parcelRequire("5Gl4W");

var $4KZO1 = parcelRequire("4KZO1");

var $bATOW = parcelRequire("bATOW");

var $iWjYw = parcelRequire("iWjYw");
function $b17b9d20ce229ebe$export$2e2bcd8739ae039(x, y) {
    var defined = (0, $5Gl4W.default)(true), context = null, curve = (0, $4KZO1.default), output = null, path = (0, $bATOW.withPath)(line);
    x = typeof x === "function" ? x : x === undefined ? (0, $iWjYw.x) : (0, $5Gl4W.default)(x);
    y = typeof y === "function" ? y : y === undefined ? (0, $iWjYw.y) : (0, $5Gl4W.default)(y);
    function line(data) {
        var i, n = (data = (0, $2IE1w.default)(data)).length, d, defined0 = false, buffer;
        if (context == null) output = curve(buffer = path());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) output.lineStart();
                else output.lineEnd();
            }
            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), line) : x;
    };
    line.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), line) : y;
    };
    line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, $5Gl4W.default)(!!_), line) : defined;
    };
    line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
}

});
parcelRequire.register("2IE1w", function(module, exports) {

$parcel$export(module.exports, "default", () => $1faebcae8b69a45b$export$2e2bcd8739ae039);
var $1faebcae8b69a45b$export$58adb3bec8346d0f = Array.prototype.slice;
function $1faebcae8b69a45b$export$2e2bcd8739ae039(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}

});

parcelRequire.register("4KZO1", function(module, exports) {

$parcel$export(module.exports, "default", () => $376b66ab5ebb2301$export$2e2bcd8739ae039);
function $376b66ab5ebb2301$var$Linear(context) {
    this._context = context;
}
$376b66ab5ebb2301$var$Linear.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function $376b66ab5ebb2301$export$2e2bcd8739ae039(context) {
    return new $376b66ab5ebb2301$var$Linear(context);
}

});

parcelRequire.register("iWjYw", function(module, exports) {

$parcel$export(module.exports, "x", () => $dc9d2366e295a716$export$d141bba7fdc215a3);
$parcel$export(module.exports, "y", () => $dc9d2366e295a716$export$4a5767248b18ef41);
function $dc9d2366e295a716$export$d141bba7fdc215a3(p) {
    return p[0];
}
function $dc9d2366e295a716$export$4a5767248b18ef41(p) {
    return p[1];
}

});


parcelRequire.register("kC99R", function(module, exports) {

$parcel$export(module.exports, "default", () => $f01e75d67f263f2b$export$2e2bcd8739ae039);

var $2IE1w = parcelRequire("2IE1w");

var $5Gl4W = parcelRequire("5Gl4W");

var $8Vg3d = parcelRequire("8Vg3d");

var $7DVPL = parcelRequire("7DVPL");

var $cugGf = parcelRequire("cugGf");
function $f01e75d67f263f2b$export$2e2bcd8739ae039() {
    var value = (0, $7DVPL.default), sortValues = (0, $8Vg3d.default), sort = null, startAngle = (0, $5Gl4W.default)(0), endAngle = (0, $5Gl4W.default)((0, $cugGf.tau)), padAngle = (0, $5Gl4W.default)(0);
    function pie(data) {
        var i, n = (data = (0, $2IE1w.default)(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min((0, $cugGf.tau), Math.max(-(0, $cugGf.tau), endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
        for(i = 0; i < n; ++i)if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) sum += v;
        // Optionally sort the arcs by previously-computed values or by data.
        if (sortValues != null) index.sort(function(i, j) {
            return sortValues(arcs[i], arcs[j]);
        });
        else if (sort != null) index.sort(function(i, j) {
            return sort(data[i], data[j]);
        });
        // Compute the arcs! They are stored in the original data's order.
        for(i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1)j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
            data: data[j],
            index: i,
            value: v,
            startAngle: a0,
            endAngle: a1,
            padAngle: p
        };
        return arcs;
    }
    pie.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), pie) : value;
    };
    pie.sortValues = function(_) {
        return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
    pie.sort = function(_) {
        return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
    pie.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), pie) : startAngle;
    };
    pie.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), pie) : endAngle;
    };
    pie.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $5Gl4W.default)(+_), pie) : padAngle;
    };
    return pie;
}

});
parcelRequire.register("8Vg3d", function(module, exports) {

$parcel$export(module.exports, "default", () => $67f018fd145fba88$export$2e2bcd8739ae039);
function $67f018fd145fba88$export$2e2bcd8739ae039(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

});

parcelRequire.register("7DVPL", function(module, exports) {

$parcel$export(module.exports, "default", () => $5909098779c28c4f$export$2e2bcd8739ae039);
function $5909098779c28c4f$export$2e2bcd8739ae039(d) {
    return d;
}

});


parcelRequire.register("8US7F", function(module, exports) {

$parcel$export(module.exports, "default", () => $67dd894ef45dd03b$export$2e2bcd8739ae039);

var $7IEPx = parcelRequire("7IEPx");

var $1BrvX = parcelRequire("1BrvX");
function $67dd894ef45dd03b$var$BasisClosed(context) {
    this._context = context;
}
$67dd894ef45dd03b$var$BasisClosed.prototype = {
    areaStart: (0, $7IEPx.default),
    areaEnd: (0, $7IEPx.default),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x2, this._y2);
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x2 = x, this._y2 = y;
                break;
            case 1:
                this._point = 2;
                this._x3 = x, this._y3 = y;
                break;
            case 2:
                this._point = 3;
                this._x4 = x, this._y4 = y;
                this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
                break;
            default:
                (0, $1BrvX.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $67dd894ef45dd03b$export$2e2bcd8739ae039(context) {
    return new $67dd894ef45dd03b$var$BasisClosed(context);
}

});
parcelRequire.register("7IEPx", function(module, exports) {

$parcel$export(module.exports, "default", () => $59ec507c353b2795$export$2e2bcd8739ae039);
function $59ec507c353b2795$export$2e2bcd8739ae039() {}

});

parcelRequire.register("1BrvX", function(module, exports) {

$parcel$export(module.exports, "point", () => $12ae96f3046263e2$export$105684a3041cb6f3);
$parcel$export(module.exports, "Basis", () => $12ae96f3046263e2$export$957f7263e89bedd2);
$parcel$export(module.exports, "default", () => $12ae96f3046263e2$export$2e2bcd8739ae039);
function $12ae96f3046263e2$export$105684a3041cb6f3(that, x, y) {
    that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function $12ae96f3046263e2$export$957f7263e89bedd2(context) {
    this._context = context;
}
$12ae96f3046263e2$export$957f7263e89bedd2.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 3:
                $12ae96f3046263e2$export$105684a3041cb6f3(this, this._x1, this._y1); // falls through
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
            default:
                $12ae96f3046263e2$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $12ae96f3046263e2$export$2e2bcd8739ae039(context) {
    return new $12ae96f3046263e2$export$957f7263e89bedd2(context);
}

});


parcelRequire.register("3fOcN", function(module, exports) {

$parcel$export(module.exports, "default", () => $25e9b78984c1db6f$export$2e2bcd8739ae039);

var $1BrvX = parcelRequire("1BrvX");
function $25e9b78984c1db6f$var$BasisOpen(context) {
    this._context = context;
}
$25e9b78984c1db6f$var$BasisOpen.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
                this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
                break;
            case 3:
                this._point = 4; // falls through
            default:
                (0, $1BrvX.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $25e9b78984c1db6f$export$2e2bcd8739ae039(context) {
    return new $25e9b78984c1db6f$var$BasisOpen(context);
}

});

parcelRequire.register("kHgim", function(module, exports) {

$parcel$export(module.exports, "bumpX", () => $f11476ab3bfc0da0$export$2c099b5096f70ce6);
$parcel$export(module.exports, "bumpY", () => $f11476ab3bfc0da0$export$908da9dfa54cbed6);

var $4ydtU = parcelRequire("4ydtU");
class $f11476ab3bfc0da0$var$Bump {
    constructor(context, x){
        this._context = context;
        this._x = x;
    }
    areaStart() {
        this._line = 0;
    }
    areaEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    }
    point(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) this._context.lineTo(x, y);
                else this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
                else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
                break;
        }
        this._x0 = x, this._y0 = y;
    }
}
class $f11476ab3bfc0da0$var$BumpRadial {
    constructor(context){
        this._context = context;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {}
    point(x, y) {
        x = +x, y = +y;
        if (this._point === 0) this._point = 1;
        else {
            const p0 = (0, $4ydtU.default)(this._x0, this._y0);
            const p1 = (0, $4ydtU.default)(this._x0, this._y0 = (this._y0 + y) / 2);
            const p2 = (0, $4ydtU.default)(x, this._y0);
            const p3 = (0, $4ydtU.default)(x, y);
            this._context.moveTo(...p0);
            this._context.bezierCurveTo(...p1, ...p2, ...p3);
        }
        this._x0 = x, this._y0 = y;
    }
}
function $f11476ab3bfc0da0$export$2c099b5096f70ce6(context) {
    return new $f11476ab3bfc0da0$var$Bump(context, true);
}
function $f11476ab3bfc0da0$export$908da9dfa54cbed6(context) {
    return new $f11476ab3bfc0da0$var$Bump(context, false);
}
function $f11476ab3bfc0da0$export$8c82a77a5061b331(context) {
    return new $f11476ab3bfc0da0$var$BumpRadial(context);
}

});
parcelRequire.register("4ydtU", function(module, exports) {

$parcel$export(module.exports, "default", () => $3504cb8bdc4d7a5e$export$2e2bcd8739ae039);
function $3504cb8bdc4d7a5e$export$2e2bcd8739ae039(x, y) {
    return [
        (y = +y) * Math.cos(x -= Math.PI / 2),
        y * Math.sin(x)
    ];
}

});


parcelRequire.register("bZdBH", function(module, exports) {

$parcel$export(module.exports, "default", () => $8b9ff247be85c8ec$export$2e2bcd8739ae039);

var $1BrvX = parcelRequire("1BrvX");
function $8b9ff247be85c8ec$var$Bundle(context, beta) {
    this._basis = new (0, $1BrvX.Basis)(context);
    this._beta = beta;
}
$8b9ff247be85c8ec$var$Bundle.prototype = {
    lineStart: function() {
        this._x = [];
        this._y = [];
        this._basis.lineStart();
    },
    lineEnd: function() {
        var x = this._x, y = this._y, j = x.length - 1;
        if (j > 0) {
            var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
            while(++i <= j){
                t = i / j;
                this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
            }
        }
        this._x = this._y = null;
        this._basis.lineEnd();
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
var $8b9ff247be85c8ec$export$2e2bcd8739ae039 = function custom(beta) {
    function bundle(context) {
        return beta === 1 ? new (0, $1BrvX.Basis)(context) : new $8b9ff247be85c8ec$var$Bundle(context, beta);
    }
    bundle.beta = function(beta) {
        return custom(+beta);
    };
    return bundle;
}(0.85);

});

parcelRequire.register("642tg", function(module, exports) {

$parcel$export(module.exports, "CardinalClosed", () => $46a50880c0319f7f$export$da3940d7e9162858);
$parcel$export(module.exports, "default", () => $46a50880c0319f7f$export$2e2bcd8739ae039);

var $7IEPx = parcelRequire("7IEPx");

var $fnxet = parcelRequire("fnxet");
function $46a50880c0319f7f$export$da3940d7e9162858(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$46a50880c0319f7f$export$da3940d7e9162858.prototype = {
    areaStart: (0, $7IEPx.default),
    areaEnd: (0, $7IEPx.default),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = x, this._y3 = y;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = x, this._y4 = y);
                break;
            case 2:
                this._point = 3;
                this._x5 = x, this._y5 = y;
                break;
            default:
                (0, $fnxet.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $46a50880c0319f7f$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $46a50880c0319f7f$export$da3940d7e9162858(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});
parcelRequire.register("fnxet", function(module, exports) {

$parcel$export(module.exports, "point", () => $b322c846f4262d51$export$105684a3041cb6f3);
$parcel$export(module.exports, "Cardinal", () => $b322c846f4262d51$export$ee51ff373511cbeb);
$parcel$export(module.exports, "default", () => $b322c846f4262d51$export$2e2bcd8739ae039);
function $b322c846f4262d51$export$105684a3041cb6f3(that, x, y) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function $b322c846f4262d51$export$ee51ff373511cbeb(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$b322c846f4262d51$export$ee51ff373511cbeb.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                $b322c846f4262d51$export$105684a3041cb6f3(this, this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                this._x1 = x, this._y1 = y;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                $b322c846f4262d51$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $b322c846f4262d51$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $b322c846f4262d51$export$ee51ff373511cbeb(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});


parcelRequire.register("3vYLn", function(module, exports) {

$parcel$export(module.exports, "CardinalOpen", () => $28f366a2c0840f32$export$cd7d1a617282f2f1);
$parcel$export(module.exports, "default", () => $28f366a2c0840f32$export$2e2bcd8739ae039);

var $fnxet = parcelRequire("fnxet");
function $28f366a2c0840f32$export$cd7d1a617282f2f1(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$28f366a2c0840f32$export$cd7d1a617282f2f1.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4; // falls through
            default:
                (0, $fnxet.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $28f366a2c0840f32$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $28f366a2c0840f32$export$cd7d1a617282f2f1(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});

parcelRequire.register("6TZoA", function(module, exports) {

$parcel$export(module.exports, "default", () => $506780ff99c00318$export$2e2bcd8739ae039);

var $642tg = parcelRequire("642tg");

var $7IEPx = parcelRequire("7IEPx");

var $2TdSl = parcelRequire("2TdSl");
function $506780ff99c00318$var$CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$506780ff99c00318$var$CatmullRomClosed.prototype = {
    areaStart: (0, $7IEPx.default),
    areaEnd: (0, $7IEPx.default),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = x, this._y3 = y;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = x, this._y4 = y);
                break;
            case 2:
                this._point = 3;
                this._x5 = x, this._y5 = y;
                break;
            default:
                (0, $2TdSl.point)(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $506780ff99c00318$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $506780ff99c00318$var$CatmullRomClosed(context, alpha) : new (0, $642tg.CardinalClosed)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});
parcelRequire.register("2TdSl", function(module, exports) {

$parcel$export(module.exports, "point", () => $21ab7b38b0bd553c$export$105684a3041cb6f3);
$parcel$export(module.exports, "default", () => $21ab7b38b0bd553c$export$2e2bcd8739ae039);

var $cugGf = parcelRequire("cugGf");

var $fnxet = parcelRequire("fnxet");
function $21ab7b38b0bd553c$export$105684a3041cb6f3(that, x, y) {
    var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
    if (that._l01_a > (0, $cugGf.epsilon)) {
        var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
        x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
        y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > (0, $cugGf.epsilon)) {
        var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
        x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
        y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function $21ab7b38b0bd553c$var$CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$21ab7b38b0bd553c$var$CatmullRom.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                $21ab7b38b0bd553c$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $21ab7b38b0bd553c$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $21ab7b38b0bd553c$var$CatmullRom(context, alpha) : new (0, $fnxet.Cardinal)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});


parcelRequire.register("ii7b3", function(module, exports) {

$parcel$export(module.exports, "default", () => $d50f79aee6d1db61$export$2e2bcd8739ae039);

var $3vYLn = parcelRequire("3vYLn");

var $2TdSl = parcelRequire("2TdSl");
function $d50f79aee6d1db61$var$CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$d50f79aee6d1db61$var$CatmullRomOpen.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4; // falls through
            default:
                (0, $2TdSl.point)(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $d50f79aee6d1db61$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $d50f79aee6d1db61$var$CatmullRomOpen(context, alpha) : new (0, $3vYLn.CardinalOpen)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});

parcelRequire.register("4JsHV", function(module, exports) {

$parcel$export(module.exports, "default", () => $3721a21b90f7c149$export$2e2bcd8739ae039);

var $7IEPx = parcelRequire("7IEPx");
function $3721a21b90f7c149$var$LinearClosed(context) {
    this._context = context;
}
$3721a21b90f7c149$var$LinearClosed.prototype = {
    areaStart: (0, $7IEPx.default),
    areaEnd: (0, $7IEPx.default),
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._point) this._context.closePath();
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) this._context.lineTo(x, y);
        else this._point = 1, this._context.moveTo(x, y);
    }
};
function $3721a21b90f7c149$export$2e2bcd8739ae039(context) {
    return new $3721a21b90f7c149$var$LinearClosed(context);
}

});

parcelRequire.register("3KqRo", function(module, exports) {

$parcel$export(module.exports, "monotoneX", () => $2baa80d9d433735d$export$99563b5420dbdc55);
$parcel$export(module.exports, "monotoneY", () => $2baa80d9d433735d$export$8b5360456d6bdb88);
function $2baa80d9d433735d$var$sign(x) {
    return x < 0 ? -1 : 1;
}
// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function $2baa80d9d433735d$var$slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return ($2baa80d9d433735d$var$sign(s0) + $2baa80d9d433735d$var$sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
// Calculate a one-sided slope.
function $2baa80d9d433735d$var$slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function $2baa80d9d433735d$var$point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function $2baa80d9d433735d$var$MonotoneX(context) {
    this._context = context;
}
$2baa80d9d433735d$var$MonotoneX.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                $2baa80d9d433735d$var$point(this, this._t0, $2baa80d9d433735d$var$slope2(this, this._t0));
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        var t1 = NaN;
        x = +x, y = +y;
        if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                $2baa80d9d433735d$var$point(this, $2baa80d9d433735d$var$slope2(this, t1 = $2baa80d9d433735d$var$slope3(this, x, y)), t1);
                break;
            default:
                $2baa80d9d433735d$var$point(this, this._t0, t1 = $2baa80d9d433735d$var$slope3(this, x, y));
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
    }
};
function $2baa80d9d433735d$var$MonotoneY(context) {
    this._context = new $2baa80d9d433735d$var$ReflectContext(context);
}
($2baa80d9d433735d$var$MonotoneY.prototype = Object.create($2baa80d9d433735d$var$MonotoneX.prototype)).point = function(x, y) {
    $2baa80d9d433735d$var$MonotoneX.prototype.point.call(this, y, x);
};
function $2baa80d9d433735d$var$ReflectContext(context) {
    this._context = context;
}
$2baa80d9d433735d$var$ReflectContext.prototype = {
    moveTo: function(x, y) {
        this._context.moveTo(y, x);
    },
    closePath: function() {
        this._context.closePath();
    },
    lineTo: function(x, y) {
        this._context.lineTo(y, x);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
    }
};
function $2baa80d9d433735d$export$99563b5420dbdc55(context) {
    return new $2baa80d9d433735d$var$MonotoneX(context);
}
function $2baa80d9d433735d$export$8b5360456d6bdb88(context) {
    return new $2baa80d9d433735d$var$MonotoneY(context);
}

});

parcelRequire.register("3xOzo", function(module, exports) {

$parcel$export(module.exports, "default", () => $294bae45c0b0abb6$export$2e2bcd8739ae039);
function $294bae45c0b0abb6$var$Natural(context) {
    this._context = context;
}
$294bae45c0b0abb6$var$Natural.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = [];
        this._y = [];
    },
    lineEnd: function() {
        var x = this._x, y = this._y, n = x.length;
        if (n) {
            this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
            if (n === 2) this._context.lineTo(x[1], y[1]);
            else {
                var px = $294bae45c0b0abb6$var$controlPoints(x), py = $294bae45c0b0abb6$var$controlPoints(y);
                for(var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1)this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
            }
        }
        if (this._line || this._line !== 0 && n === 1) this._context.closePath();
        this._line = 1 - this._line;
        this._x = this._y = null;
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function $294bae45c0b0abb6$var$controlPoints(x) {
    var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
    for(i = 1; i < n - 1; ++i)a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
    for(i = 1; i < n; ++i)m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a[n - 1] = r[n - 1] / b[n - 1];
    for(i = n - 2; i >= 0; --i)a[i] = (r[i] - a[i + 1]) / b[i];
    b[n - 1] = (x[n] + a[n - 1]) / 2;
    for(i = 0; i < n - 1; ++i)b[i] = 2 * x[i + 1] - a[i + 1];
    return [
        a,
        b
    ];
}
function $294bae45c0b0abb6$export$2e2bcd8739ae039(context) {
    return new $294bae45c0b0abb6$var$Natural(context);
}

});

parcelRequire.register("9R5Z3", function(module, exports) {

$parcel$export(module.exports, "default", () => $72cdb48bfe4699b0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "stepBefore", () => $72cdb48bfe4699b0$export$10eafa5b7478b343);
$parcel$export(module.exports, "stepAfter", () => $72cdb48bfe4699b0$export$793b3db073781cbb);
function $72cdb48bfe4699b0$var$Step(context, t) {
    this._context = context;
    this._t = t;
}
$72cdb48bfe4699b0$var$Step.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = this._y = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                if (this._t <= 0) {
                    this._context.lineTo(this._x, y);
                    this._context.lineTo(x, y);
                } else {
                    var x1 = this._x * (1 - this._t) + x * this._t;
                    this._context.lineTo(x1, this._y);
                    this._context.lineTo(x1, y);
                }
                break;
        }
        this._x = x, this._y = y;
    }
};
function $72cdb48bfe4699b0$export$2e2bcd8739ae039(context) {
    return new $72cdb48bfe4699b0$var$Step(context, 0.5);
}
function $72cdb48bfe4699b0$export$10eafa5b7478b343(context) {
    return new $72cdb48bfe4699b0$var$Step(context, 0);
}
function $72cdb48bfe4699b0$export$793b3db073781cbb(context) {
    return new $72cdb48bfe4699b0$var$Step(context, 1);
}

});


parcelRequire.register("f42ny", function(module, exports) {

var $dzTi1 = parcelRequire("dzTi1");

var $j5w54 = parcelRequire("j5w54");

});
parcelRequire.register("dzTi1", function(module, exports) {

var $jG4k5 = parcelRequire("jG4k5");

var $jxOqe = parcelRequire("jxOqe");

var $5svYz = parcelRequire("5svYz");

var $htTEB = parcelRequire("htTEB");
var $kFrjH = parcelRequire("kFrjH");
parcelRequire("7wqi6");
var $dvn6n = parcelRequire("dvn6n");

var $3cBPv = parcelRequire("3cBPv");

var $8uJSc = parcelRequire("8uJSc");

var $j5w54 = parcelRequire("j5w54");

var $ga7n9 = parcelRequire("ga7n9");
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function $9e296e9f9c998da1$var$defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function $9e296e9f9c998da1$var$defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function $9e296e9f9c998da1$var$defaultTransform() {
    return this.__zoom || (0, $j5w54.identity);
}
function $9e296e9f9c998da1$var$defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function $9e296e9f9c998da1$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $9e296e9f9c998da1$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $9e296e9f9c998da1$export$2e2bcd8739ae039() {
    var filter = $9e296e9f9c998da1$var$defaultFilter, extent = $9e296e9f9c998da1$var$defaultExtent, constrain = $9e296e9f9c998da1$var$defaultConstrain, wheelDelta = $9e296e9f9c998da1$var$defaultWheelDelta, touchable = $9e296e9f9c998da1$var$defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = (0, $5svYz.default), listeners = (0, $jG4k5.default)("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", $9e296e9f9c998da1$var$defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $9e296e9f9c998da1$var$defaultTransform);
        if (collection !== selection) schedule(collection, transform, point, event);
        else selection.interrupt().each(function() {
            gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain((0, $j5w54.identity).translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new (0, $j5w54.Transform)(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new (0, $j5w54.Transform)(transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new (0, $j5w54.Transform)(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = (0, $htTEB.default)(this.that).datum();
            listeners.call(type, this.that, new (0, $8uJSc.default)(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type: type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, $kFrjH.default)(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, $dvn6n.default)(this);
            g.start();
        }
        (0, $ga7n9.default)(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0, $htTEB.default)(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, $kFrjH.default)(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
        (0, $jxOqe.default)(event.view);
        (0, $ga7n9.nopropagation)(event);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, $dvn6n.default)(this);
        g.start();
        function mousemoved(event) {
            (0, $ga7n9.default)(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, $kFrjH.default)(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, $jxOqe.yesdrag)(event.view, g.moved);
            (0, $ga7n9.default)(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, $kFrjH.default)(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0, $ga7n9.default)(event);
        if (duration > 0) (0, $htTEB.default)(this).transition().duration(duration).call(schedule, t1, p0, event);
        else (0, $htTEB.default)(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0, $ga7n9.nopropagation)(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, $kFrjH.default)(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, $dvn6n.default)(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0, $ga7n9.default)(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, $kFrjH.default)(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0, $ga7n9.nopropagation)(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = (0, $kFrjH.default)(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0, $htTEB.default)(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, $3cBPv.default)(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $3cBPv.default)(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $3cBPv.default)(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, $3cBPv.default)([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}

});
parcelRequire.register("3cBPv", function(module, exports) {

$parcel$export(module.exports, "default", () => $254fd64edb9057e6$export$2e2bcd8739ae039);
var $254fd64edb9057e6$export$2e2bcd8739ae039 = (x)=>()=>x;

});

parcelRequire.register("8uJSc", function(module, exports) {

$parcel$export(module.exports, "default", () => $62f4b58afb3e30f4$export$2e2bcd8739ae039);
function $62f4b58afb3e30f4$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , transform: transform , dispatch: dispatch  }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}

});

parcelRequire.register("j5w54", function(module, exports) {

$parcel$export(module.exports, "Transform", () => $de575e8833e6b55f$export$563a914cafbdc389);
$parcel$export(module.exports, "identity", () => $de575e8833e6b55f$export$f0954fd7d5368655);
function $de575e8833e6b55f$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$de575e8833e6b55f$export$563a914cafbdc389.prototype = {
    constructor: $de575e8833e6b55f$export$563a914cafbdc389,
    scale: function(k) {
        return k === 1 ? this : new $de575e8833e6b55f$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new $de575e8833e6b55f$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $de575e8833e6b55f$export$f0954fd7d5368655 = new $de575e8833e6b55f$export$563a914cafbdc389(1, 0, 0);
$de575e8833e6b55f$export$2e2bcd8739ae039.prototype = $de575e8833e6b55f$export$563a914cafbdc389.prototype;
function $de575e8833e6b55f$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $de575e8833e6b55f$export$f0954fd7d5368655;
    return node.__zoom;
}

});

parcelRequire.register("ga7n9", function(module, exports) {

$parcel$export(module.exports, "nopropagation", () => $bc434c8574512a26$export$2e2561858db9bf47);
$parcel$export(module.exports, "default", () => $bc434c8574512a26$export$2e2bcd8739ae039);
function $bc434c8574512a26$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $bc434c8574512a26$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}

});




parcelRequire.register("aiFbc", function(module, exports) {
/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */ (function(global, factory) {
    module.exports = factory();
})(module.exports, function() {
    "use strict";
    const { entries: entries , setPrototypeOf: setPrototypeOf , isFrozen: isFrozen , getPrototypeOf: getPrototypeOf , getOwnPropertyDescriptor: getOwnPropertyDescriptor  } = Object;
    let { freeze: freeze , seal: seal , create: create  } = Object; // eslint-disable-line import/no-mutable-exports
    let { apply: apply , construct: construct  } = typeof Reflect !== "undefined" && Reflect;
    if (!apply) apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
    if (!freeze) freeze = function freeze(x) {
        return x;
    };
    if (!seal) seal = function seal(x) {
        return x;
    };
    if (!construct) construct = function construct(Func, args) {
        return new Func(...args);
    };
    const arrayForEach = unapply(Array.prototype.forEach);
    const arrayPop = unapply(Array.prototype.pop);
    const arrayPush = unapply(Array.prototype.push);
    const stringToLowerCase = unapply(String.prototype.toLowerCase);
    const stringToString = unapply(String.prototype.toString);
    const stringMatch = unapply(String.prototype.match);
    const stringReplace = unapply(String.prototype.replace);
    const stringIndexOf = unapply(String.prototype.indexOf);
    const stringTrim = unapply(String.prototype.trim);
    const regExpTest = unapply(RegExp.prototype.test);
    const typeErrorCreate = unconstruct(TypeError);
    function unapply(func) {
        return function(thisArg) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            return apply(func, thisArg, args);
        };
    }
    function unconstruct(func) {
        return function() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            return construct(func, args);
        };
    }
    /* Add properties to a lookup table */ function addToSet(set, array, transformCaseFunc) {
        var _transformCaseFunc;
        transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
        if (setPrototypeOf) // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
        let l = array.length;
        while(l--){
            let element = array[l];
            if (typeof element === "string") {
                const lcElement = transformCaseFunc(element);
                if (lcElement !== element) {
                    // Config presets (e.g. tags.js, attrs.js) are immutable.
                    if (!isFrozen(array)) array[l] = lcElement;
                    element = lcElement;
                }
            }
            set[element] = true;
        }
        return set;
    }
    /* Shallow clone an object */ function clone(object) {
        const newObject = create(null);
        for (const [property, value] of entries(object))newObject[property] = value;
        return newObject;
    }
    /* This method automatically checks if the prop is function
   * or getter and behaves accordingly. */ function lookupGetter(object, prop) {
        while(object !== null){
            const desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
                if (desc.get) return unapply(desc.get);
                if (typeof desc.value === "function") return unapply(desc.value);
            }
            object = getPrototypeOf(object);
        }
        function fallbackValue(element) {
            console.warn("fallback value for", element);
            return null;
        }
        return fallbackValue;
    }
    const html$1 = freeze([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "select",
        "shadow",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr"
    ]); // SVG
    const svg$1 = freeze([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern"
    ]);
    const svgFilters = freeze([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence"
    ]); // List of SVG elements that are disallowed by default.
    // We still need to know them so that we can do namespace
    // checks properly in case one wants to add them to
    // allow-list.
    const svgDisallowed = freeze([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use"
    ]);
    const mathMl$1 = freeze([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover",
        "mprescripts"
    ]); // Similarly to SVG, we want to know all MathML elements,
    // even those that we disallow by default.
    const mathMlDisallowed = freeze([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none"
    ]);
    const text = freeze([
        "#text"
    ]);
    const html = freeze([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "pattern",
        "placeholder",
        "playsinline",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "xmlns",
        "slot"
    ]);
    const svg = freeze([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan"
    ]);
    const mathMl = freeze([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnsalign",
        "columnlines",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lspace",
        "lquote",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns"
    ]);
    const xml = freeze([
        "xlink:href",
        "xml:id",
        "xlink:title",
        "xml:space",
        "xmlns:xlink"
    ]);
    const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
    const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
    const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
    const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
    const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
    );
    const DOCTYPE_NAME = seal(/^html$/i);
    var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR: MUSTACHE_EXPR,
        ERB_EXPR: ERB_EXPR,
        TMPLIT_EXPR: TMPLIT_EXPR,
        DATA_ATTR: DATA_ATTR,
        ARIA_ATTR: ARIA_ATTR,
        IS_ALLOWED_URI: IS_ALLOWED_URI,
        IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE: ATTR_WHITESPACE,
        DOCTYPE_NAME: DOCTYPE_NAME
    });
    const getGlobal = ()=>typeof window === "undefined" ? null : window;
    /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */ const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
        if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
         // Allow the callers to control the unique policy name
        // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
        // Policy creation with duplicate names throws in Trusted Types.
        let suffix = null;
        const ATTR_NAME = "data-tt-policy-suffix";
        if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
        const policyName = "dompurify" + (suffix ? "#" + suffix : "");
        try {
            return trustedTypes.createPolicy(policyName, {
                createHTML (html) {
                    return html;
                },
                createScriptURL (scriptUrl) {
                    return scriptUrl;
                }
            });
        } catch (_) {
            // Policy creation failed (most likely another DOMPurify script has
            // already run). Skip creating the policy, as this will only cause errors
            // if TT are enforced.
            console.warn("TrustedTypes policy " + policyName + " could not be created.");
            return null;
        }
    };
    function createDOMPurify() {
        let window1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
        const DOMPurify = (root)=>createDOMPurify(root);
        /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */ DOMPurify.version = "3.0.3";
        /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */ DOMPurify.removed = [];
        if (!window1 || !window1.document || window1.document.nodeType !== 9) {
            // Not running in a browser, provide a factory function
            // so that you can pass your own Window
            DOMPurify.isSupported = false;
            return DOMPurify;
        }
        const originalDocument = window1.document;
        const currentScript = originalDocument.currentScript;
        let { document: document  } = window1;
        const { DocumentFragment: DocumentFragment , HTMLTemplateElement: HTMLTemplateElement , Node: Node , Element: Element , NodeFilter: NodeFilter , NamedNodeMap: NamedNodeMap = window1.NamedNodeMap || window1.MozNamedAttrMap , HTMLFormElement: HTMLFormElement , DOMParser: DOMParser , trustedTypes: trustedTypes  } = window1;
        const ElementPrototype = Element.prototype;
        const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
        const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
        const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
        const getParentNode = lookupGetter(ElementPrototype, "parentNode"); // As per issue #47, the web-components registry is inherited by a
        // new document created via createHTMLDocument. As per the spec
        // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
        // a new empty registry is used when creating a template contents owner
        // document, so we use that as our parent document to ensure nothing
        // is inherited.
        if (typeof HTMLTemplateElement === "function") {
            const template = document.createElement("template");
            if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
        }
        let trustedTypesPolicy;
        let emptyHTML = "";
        const { implementation: implementation , createNodeIterator: createNodeIterator , createDocumentFragment: createDocumentFragment , getElementsByTagName: getElementsByTagName  } = document;
        const { importNode: importNode  } = originalDocument;
        let hooks = {};
        /**
     * Expose whether this browser supports running the full DOMPurify.
     */ DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== undefined;
        const { MUSTACHE_EXPR: MUSTACHE_EXPR , ERB_EXPR: ERB_EXPR , TMPLIT_EXPR: TMPLIT_EXPR , DATA_ATTR: DATA_ATTR , ARIA_ATTR: ARIA_ATTR , IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA , ATTR_WHITESPACE: ATTR_WHITESPACE  } = EXPRESSIONS;
        let { IS_ALLOWED_URI: IS_ALLOWED_URI$1  } = EXPRESSIONS;
        /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */ /* allowed element names */ let ALLOWED_TAGS = null;
        const DEFAULT_ALLOWED_TAGS = addToSet({}, [
            ...html$1,
            ...svg$1,
            ...svgFilters,
            ...mathMl$1,
            ...text
        ]);
        /* Allowed attribute names */ let ALLOWED_ATTR = null;
        const DEFAULT_ALLOWED_ATTR = addToSet({}, [
            ...html,
            ...svg,
            ...mathMl,
            ...xml
        ]);
        /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */ let CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
            tagNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            attributeNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: false
            }
        }));
        /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ let FORBID_TAGS = null;
        /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ let FORBID_ATTR = null;
        /* Decide if ARIA attributes are okay */ let ALLOW_ARIA_ATTR = true;
        /* Decide if custom data attributes are okay */ let ALLOW_DATA_ATTR = true;
        /* Decide if unknown protocols are okay */ let ALLOW_UNKNOWN_PROTOCOLS = false;
        /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */ let ALLOW_SELF_CLOSE_IN_ATTR = true;
        /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */ let SAFE_FOR_TEMPLATES = false;
        /* Decide if document with <html>... should be returned */ let WHOLE_DOCUMENT = false;
        /* Track whether config is already set on this instance of DOMPurify. */ let SET_CONFIG = false;
        /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */ let FORCE_BODY = false;
        /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */ let RETURN_DOM = false;
        /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */ let RETURN_DOM_FRAGMENT = false;
        /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */ let RETURN_TRUSTED_TYPE = false;
        /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */ let SANITIZE_DOM = true;
        /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */ let SANITIZE_NAMED_PROPS = false;
        const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
        /* Keep element content when removing element? */ let KEEP_CONTENT = true;
        /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */ let IN_PLACE = false;
        /* Allow usage of profiles like html, svg and mathMl */ let USE_PROFILES = {};
        /* Tags to ignore content of when KEEP_CONTENT is true */ let FORBID_CONTENTS = null;
        const DEFAULT_FORBID_CONTENTS = addToSet({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp"
        ]);
        /* Tags that are safe for data: URIs */ let DATA_URI_TAGS = null;
        const DEFAULT_DATA_URI_TAGS = addToSet({}, [
            "audio",
            "video",
            "img",
            "source",
            "image",
            "track"
        ]);
        /* Attributes safe for values like "javascript:" */ let URI_SAFE_ATTRIBUTES = null;
        const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns"
        ]);
        const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        /* Document namespace */ let NAMESPACE = HTML_NAMESPACE;
        let IS_EMPTY_INPUT = false;
        /* Allowed XHTML+XML namespaces */ let ALLOWED_NAMESPACES = null;
        const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
            MATHML_NAMESPACE,
            SVG_NAMESPACE,
            HTML_NAMESPACE
        ], stringToString);
        /* Parsing of strict XHTML documents */ let PARSER_MEDIA_TYPE;
        const SUPPORTED_PARSER_MEDIA_TYPES = [
            "application/xhtml+xml",
            "text/html"
        ];
        const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
        let transformCaseFunc;
        /* Keep a reference to config to pass to hooks */ let CONFIG = null;
        /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ const formElement = document.createElement("form");
        const isRegexOrFunction = function isRegexOrFunction(testValue) {
            return testValue instanceof RegExp || testValue instanceof Function;
        };
        /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */ // eslint-disable-next-line complexity
        const _parseConfig = function _parseConfig(cfg) {
            if (CONFIG && CONFIG === cfg) return;
            /* Shield configuration object from tampering */ if (!cfg || typeof cfg !== "object") cfg = {};
            /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
            PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
            transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
            /* Set configuration parameters */ ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
            ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
            URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc // eslint-disable-line indent
            ) // eslint-disable-line indent
             : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc // eslint-disable-line indent
            ) // eslint-disable-line indent
             : DEFAULT_DATA_URI_TAGS;
            FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
            FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
            FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
            USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
            ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
            RETURN_DOM = cfg.RETURN_DOM || false; // Default false
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
            FORCE_BODY = cfg.FORCE_BODY || false; // Default false
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
            SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
            IN_PLACE = cfg.IN_PLACE || false; // Default false
            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
            if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
            /* Parse profile info */ if (USE_PROFILES) {
                ALLOWED_TAGS = addToSet({}, [
                    ...text
                ]);
                ALLOWED_ATTR = [];
                if (USE_PROFILES.html === true) {
                    addToSet(ALLOWED_TAGS, html$1);
                    addToSet(ALLOWED_ATTR, html);
                }
                if (USE_PROFILES.svg === true) {
                    addToSet(ALLOWED_TAGS, svg$1);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.svgFilters === true) {
                    addToSet(ALLOWED_TAGS, svgFilters);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.mathMl === true) {
                    addToSet(ALLOWED_TAGS, mathMl$1);
                    addToSet(ALLOWED_ATTR, mathMl);
                    addToSet(ALLOWED_ATTR, xml);
                }
            }
            /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
            if (cfg.ADD_ATTR) {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
            if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
            if (cfg.FORBID_CONTENTS) {
                if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
                addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
            }
            /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
            /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
                "html",
                "head",
                "body"
            ]);
            /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
                addToSet(ALLOWED_TAGS, [
                    "tbody"
                ]);
                delete FORBID_TAGS.tbody;
            }
            if (cfg.TRUSTED_TYPES_POLICY) {
                if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                 // Overwrite existing TrustedTypes policy.
                trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY; // Sign local variables required by `sanitize`.
                emptyHTML = trustedTypesPolicy.createHTML("");
            } else {
                // Uninitialized policy, attempt to initialize the internal dompurify policy.
                if (trustedTypesPolicy === undefined) trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
                 // If creating the internal policy succeeded sign internal variables.
                if (trustedTypesPolicy !== null && typeof emptyHTML === "string") emptyHTML = trustedTypesPolicy.createHTML("");
            } // Prevent further manipulation of configuration.
            // Not available in IE8, Safari 5, etc.
            if (freeze) freeze(cfg);
            CONFIG = cfg;
        };
        const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
            "mi",
            "mo",
            "mn",
            "ms",
            "mtext"
        ]);
        const HTML_INTEGRATION_POINTS = addToSet({}, [
            "foreignobject",
            "desc",
            "title",
            "annotation-xml"
        ]); // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erroneously deleted from
        // HTML namespace.
        const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
            "title",
            "style",
            "font",
            "a",
            "script"
        ]);
        /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */ const ALL_SVG_TAGS = addToSet({}, svg$1);
        addToSet(ALL_SVG_TAGS, svgFilters);
        addToSet(ALL_SVG_TAGS, svgDisallowed);
        const ALL_MATHML_TAGS = addToSet({}, mathMl$1);
        addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
        /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */ const _checkValidNamespace = function _checkValidNamespace(element) {
            let parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
            // can be null. We just simulate parent in this case.
            if (!parent || !parent.tagName) parent = {
                namespaceURI: NAMESPACE,
                tagName: "template"
            };
            const tagName = stringToLowerCase(element.tagName);
            const parentTagName = stringToLowerCase(parent.tagName);
            if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
            if (element.namespaceURI === SVG_NAMESPACE) {
                // The only way to switch from HTML namespace to SVG
                // is via <svg>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
                 // The only way to switch from MathML to SVG is via`
                // svg if parent is either <annotation-xml> or MathML
                // text integration points.
                if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
                 // We only allow elements that are defined in SVG
                // spec. All others are disallowed in SVG namespace.
                return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
                // The only way to switch from HTML namespace to MathML
                // is via <math>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
                 // The only way to switch from SVG to MathML is via
                // <math> and HTML integration points
                if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
                 // We only allow elements that are defined in MathML
                // spec. All others are disallowed in MathML namespace.
                return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
                // The only way to switch from SVG to HTML is via
                // HTML integration points, and from MathML to HTML
                // is via MathML text integration points
                if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
                if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
                 // We disallow tags that are specific for MathML
                // or SVG and should never appear in HTML namespace
                return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
            } // For XHTML and XML documents that support custom namespaces
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
             // The code should never reach this place (this means
            // that the element somehow got namespace that is not
            // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
            // Return false just in case.
            return false;
        };
        /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */ const _forceRemove = function _forceRemove(node) {
            arrayPush(DOMPurify.removed, {
                element: node
            });
            try {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                node.parentNode.removeChild(node);
            } catch (_) {
                node.remove();
            }
        };
        /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */ const _removeAttribute = function _removeAttribute(name, node) {
            try {
                arrayPush(DOMPurify.removed, {
                    attribute: node.getAttributeNode(name),
                    from: node
                });
            } catch (_) {
                arrayPush(DOMPurify.removed, {
                    attribute: null,
                    from: node
                });
            }
            node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes
            if (name === "is" && !ALLOWED_ATTR[name]) {
                if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
                    _forceRemove(node);
                } catch (_) {}
                else try {
                    node.setAttribute(name, "");
                } catch (_) {}
            }
        };
        /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */ const _initDocument = function _initDocument(dirty) {
            /* Create a HTML document */ let doc;
            let leadingWhitespace;
            if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
            else {
                /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ const matches = stringMatch(dirty, /^[\r\n\t ]+/);
                leadingWhitespace = matches && matches[0];
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
            const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */ if (NAMESPACE === HTML_NAMESPACE) try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
            /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
                doc = implementation.createDocument(NAMESPACE, "template", null);
                try {
                    doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
                } catch (_) {}
            }
            const body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
            return WHOLE_DOCUMENT ? doc.documentElement : body;
        };
        /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */ const _createIterator = function _createIterator(root) {
            return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
        };
        /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */ const _isClobbered = function _isClobbered(elm) {
            return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
        };
        /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */ const _isNode = function _isNode(object) {
            return typeof Node === "object" ? object instanceof Node : object && typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
        };
        /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */ const _executeHook = function _executeHook(entryPoint, currentNode, data) {
            if (!hooks[entryPoint]) return;
            arrayForEach(hooks[entryPoint], (hook)=>{
                hook.call(DOMPurify, currentNode, data, CONFIG);
            });
        };
        /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */ const _sanitizeElements = function _sanitizeElements(currentNode) {
            let content;
            /* Execute a hook if present */ _executeHook("beforeSanitizeElements", currentNode, null);
            /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Now let's check the element's type and name */ const tagName = transformCaseFunc(currentNode.nodeName);
            /* Execute a hook if present */ _executeHook("uponSanitizeElement", currentNode, {
                tagName: tagName,
                allowedTags: ALLOWED_TAGS
            });
            /* Detect mXSS attempts abusing namespace confusion */ if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Remove element if anything forbids its presence */ if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
                }
                /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                    const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                    const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                    if (childNodes && parentNode) {
                        const childCount = childNodes.length;
                        for(let i = childCount - 1; i >= 0; --i)parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                    }
                }
                _forceRemove(currentNode);
                return true;
            }
            /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Make sure that older browsers don't get noscript mXSS */ if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
                /* Get the element's text content */ content = currentNode.textContent;
                content = stringReplace(content, MUSTACHE_EXPR, " ");
                content = stringReplace(content, ERB_EXPR, " ");
                content = stringReplace(content, TMPLIT_EXPR, " ");
                if (currentNode.textContent !== content) {
                    arrayPush(DOMPurify.removed, {
                        element: currentNode.cloneNode()
                    });
                    currentNode.textContent = content;
                }
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeElements", currentNode, null);
            return false;
        };
        /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */ // eslint-disable-next-line complexity
        const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
            /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
            /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                if (// b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
                else return false;
            /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
            else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ""))) ;
            else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ""))) ;
            else if (value) return false;
            return true;
        };
        /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */ const _basicCustomElementTest = function _basicCustomElementTest(tagName) {
            return tagName.indexOf("-") > 0;
        };
        /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */ const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
            let attr;
            let value;
            let lcName;
            let l;
            /* Execute a hook if present */ _executeHook("beforeSanitizeAttributes", currentNode, null);
            const { attributes: attributes  } = currentNode;
            /* Check if we have attributes; if not we might have a text node */ if (!attributes) return;
            const hookEvent = {
                attrName: "",
                attrValue: "",
                keepAttr: true,
                allowedAttributes: ALLOWED_ATTR
            };
            l = attributes.length;
            /* Go backwards over all attributes; safely remove bad ones */ while(l--){
                attr = attributes[l];
                const { name: name , namespaceURI: namespaceURI  } = attr;
                value = name === "value" ? attr.value : stringTrim(attr.value);
                lcName = transformCaseFunc(name);
                /* Execute a hook if present */ hookEvent.attrName = lcName;
                hookEvent.attrValue = value;
                hookEvent.keepAttr = true;
                hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
                _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
                value = hookEvent.attrValue;
                /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) continue;
                /* Remove attribute */ _removeAttribute(name, currentNode);
                /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) continue;
                /* Work around a security issue in jQuery 3.0 */ if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) {
                    value = stringReplace(value, MUSTACHE_EXPR, " ");
                    value = stringReplace(value, ERB_EXPR, " ");
                    value = stringReplace(value, TMPLIT_EXPR, " ");
                }
                /* Is `value` valid for this attribute? */ const lcTag = transformCaseFunc(currentNode.nodeName);
                if (!_isValidAttribute(lcTag, lcName, value)) continue;
                /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */ if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
                    // Remove the attribute with this value
                    _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value
                    value = SANITIZE_NAMED_PROPS_PREFIX + value;
                }
                /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
                    if (namespaceURI) ;
                    else switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case "TrustedHTML":
                            value = trustedTypesPolicy.createHTML(value);
                            break;
                        case "TrustedScriptURL":
                            value = trustedTypesPolicy.createScriptURL(value);
                            break;
                    }
                }
                /* Handle invalid data-* attribute set by try-catching it */ try {
                    if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
                    else /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                    arrayPop(DOMPurify.removed);
                } catch (_) {}
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeAttributes", currentNode, null);
        };
        /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */ const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
            let shadowNode;
            const shadowIterator = _createIterator(fragment);
            /* Execute a hook if present */ _executeHook("beforeSanitizeShadowDOM", fragment, null);
            while(shadowNode = shadowIterator.nextNode()){
                /* Execute a hook if present */ _executeHook("uponSanitizeShadowNode", shadowNode, null);
                /* Sanitize tags and elements */ if (_sanitizeElements(shadowNode)) continue;
                /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
                /* Check attributes, sanitize if necessary */ _sanitizeAttributes(shadowNode);
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeShadowDOM", fragment, null);
        };
        /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */ // eslint-disable-next-line complexity
        DOMPurify.sanitize = function(dirty) {
            let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            let body;
            let importedNode;
            let currentNode;
            let returnNode;
            /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) dirty = "<!-->";
            /* Stringify, in case dirty is an object */ if (typeof dirty !== "string" && !_isNode(dirty)) {
                if (typeof dirty.toString === "function") {
                    dirty = dirty.toString();
                    if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
                } else throw typeErrorCreate("toString is not a function");
            }
            /* Return dirty HTML if DOMPurify cannot run */ if (!DOMPurify.isSupported) return dirty;
            /* Assign config vars */ if (!SET_CONFIG) _parseConfig(cfg);
            /* Clean up removed elements */ DOMPurify.removed = [];
            /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === "string") IN_PLACE = false;
            if (IN_PLACE) /* Do some early pre-sanitization to avoid unsafe root nodes */ {
                if (dirty.nodeName) {
                    const tagName = transformCaseFunc(dirty.nodeName);
                    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
                }
            } else if (dirty instanceof Node) {
                /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */ body = _initDocument("<!---->");
                importedNode = body.ownerDocument.importNode(dirty, true);
                if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") /* Node is already a body, use as is */ body = importedNode;
                else if (importedNode.nodeName === "HTML") body = importedNode;
                else // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            } else {
                /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
                dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
                /* Initialize the document to work on */ body = _initDocument(dirty);
                /* Check we have a DOM node from the data */ if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
            }
            /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) _forceRemove(body.firstChild);
            /* Get node iterator */ const nodeIterator = _createIterator(IN_PLACE ? dirty : body);
            /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
                /* Sanitize tags and elements */ if (_sanitizeElements(currentNode)) continue;
                /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
                /* Check attributes, sanitize if necessary */ _sanitizeAttributes(currentNode);
            }
            /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) return dirty;
            /* Return sanitized string or DOM */ if (RETURN_DOM) {
                if (RETURN_DOM_FRAGMENT) {
                    returnNode = createDocumentFragment.call(body.ownerDocument);
                    while(body.firstChild)// eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                } else returnNode = body;
                if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */ returnNode = importNode.call(originalDocument, returnNode, true);
                return returnNode;
            }
            let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
            /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) {
                serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR, " ");
                serializedHTML = stringReplace(serializedHTML, ERB_EXPR, " ");
                serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR, " ");
            }
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
        };
        /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */ DOMPurify.setConfig = function(cfg) {
            _parseConfig(cfg);
            SET_CONFIG = true;
        };
        /**
     * Public method to remove the configuration
     * clearConfig
     *
     */ DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
        };
        /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */ DOMPurify.isValidAttribute = function(tag, attr, value) {
            /* Initialize shared config vars if necessary. */ if (!CONFIG) _parseConfig({});
            const lcTag = transformCaseFunc(tag);
            const lcName = transformCaseFunc(attr);
            return _isValidAttribute(lcTag, lcName, value);
        };
        /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */ DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== "function") return;
            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
        };
        /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */ DOMPurify.removeHook = function(entryPoint) {
            if (hooks[entryPoint]) return arrayPop(hooks[entryPoint]);
        };
        /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */ DOMPurify.removeHooks = function(entryPoint) {
            if (hooks[entryPoint]) hooks[entryPoint] = [];
        };
        /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */ DOMPurify.removeAllHooks = function() {
            hooks = {};
        };
        return DOMPurify;
    }
    var purify = createDOMPurify();
    return purify;
});

});

parcelRequire.register("87kMk", function(module, exports) {
$parcel$export(module.exports, "adjust", () => (parcelRequire("tDZs9")).default);
$parcel$export(module.exports, "channel", () => (parcelRequire("2KsMZ")).default);
$parcel$export(module.exports, "darken", () => (parcelRequire("9KWq0")).default);
$parcel$export(module.exports, "invert", () => (parcelRequire("9O8cC")).default);
$parcel$export(module.exports, "isDark", () => (parcelRequire("9iz3d")).default);
$parcel$export(module.exports, "lighten", () => (parcelRequire("8syuv")).default);
$parcel$export(module.exports, "rgba", () => (parcelRequire("42Ff1")).default);
/* EXPORT */ 

});
parcelRequire.register("42Ff1", function(module, exports) {

$parcel$export(module.exports, "default", () => $2f1756fef9be79ed$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $4c7tE = parcelRequire("4c7tE");

var $eF8YF = parcelRequire("eF8YF");

var $8WcnQ = parcelRequire("8WcnQ");
/* MAIN */ const $2f1756fef9be79ed$var$rgba = (r, g, b = 0, a = 1)=>{
    if (typeof r !== "number") return (0, $8WcnQ.default)(r, {
        a: g
    });
    const channels = (0, $4c7tE.default).set({
        r: (0, $2UY5X.default).channel.clamp.r(r),
        g: (0, $2UY5X.default).channel.clamp.g(g),
        b: (0, $2UY5X.default).channel.clamp.b(b),
        a: (0, $2UY5X.default).channel.clamp.a(a)
    });
    return (0, $eF8YF.default).stringify(channels);
};
var /* EXPORT */ $2f1756fef9be79ed$export$2e2bcd8739ae039 = $2f1756fef9be79ed$var$rgba;

});
parcelRequire.register("2UY5X", function(module, exports) {

$parcel$export(module.exports, "default", () => $21ff6d5f97f50c6a$export$2e2bcd8739ae039);
/* IMPORT */ 
var $39iVR = parcelRequire("39iVR");

var $iUeLp = parcelRequire("iUeLp");

var $6TJTe = parcelRequire("6TJTe");
/* MAIN */ const $21ff6d5f97f50c6a$var$Utils = {
    channel: $39iVR.default,
    lang: $iUeLp.default,
    unit: $6TJTe.default
};
var /* EXPORT */ $21ff6d5f97f50c6a$export$2e2bcd8739ae039 = $21ff6d5f97f50c6a$var$Utils;

});
parcelRequire.register("39iVR", function(module, exports) {

$parcel$export(module.exports, "default", () => $24b0e5eba9fb7e8c$export$2e2bcd8739ae039);
/* IMPORT */ /* MAIN */ const $24b0e5eba9fb7e8c$var$Channel = {
    /* CLAMP */ min: {
        r: 0,
        g: 0,
        b: 0,
        s: 0,
        l: 0,
        a: 0
    },
    max: {
        r: 255,
        g: 255,
        b: 255,
        h: 360,
        s: 100,
        l: 100,
        a: 1
    },
    clamp: {
        r: (r)=>r >= 255 ? 255 : r < 0 ? 0 : r,
        g: (g)=>g >= 255 ? 255 : g < 0 ? 0 : g,
        b: (b)=>b >= 255 ? 255 : b < 0 ? 0 : b,
        h: (h)=>h % 360,
        s: (s)=>s >= 100 ? 100 : s < 0 ? 0 : s,
        l: (l)=>l >= 100 ? 100 : l < 0 ? 0 : l,
        a: (a)=>a >= 1 ? 1 : a < 0 ? 0 : a
    },
    /* CONVERSION */ //SOURCE: https://planetcalc.com/7779
    toLinear: (c)=>{
        const n = c / 255;
        return c > .03928 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
    },
    //SOURCE: https://gist.github.com/mjackson/5311256
    hue2rgb: (p, q, t)=>{
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 0.5) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    },
    hsl2rgb: ({ h: h , s: s , l: l  }, channel)=>{
        if (!s) return l * 2.55; // Achromatic
        h /= 360;
        s /= 100;
        l /= 100;
        const q = l < .5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        switch(channel){
            case "r":
                return $24b0e5eba9fb7e8c$var$Channel.hue2rgb(p, q, h + 1 / 3) * 255;
            case "g":
                return $24b0e5eba9fb7e8c$var$Channel.hue2rgb(p, q, h) * 255;
            case "b":
                return $24b0e5eba9fb7e8c$var$Channel.hue2rgb(p, q, h - 1 / 3) * 255;
        }
    },
    rgb2hsl: ({ r: r , g: g , b: b  }, channel)=>{
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2;
        if (channel === "l") return l * 100;
        if (max === min) return 0; // Achromatic
        const d = max - min;
        const s = l > .5 ? d / (2 - max - min) : d / (max + min);
        if (channel === "s") return s * 100;
        switch(max){
            case r:
                return ((g - b) / d + (g < b ? 6 : 0)) * 60;
            case g:
                return ((b - r) / d + 2) * 60;
            case b:
                return ((r - g) / d + 4) * 60;
            default:
                return -1; //TSC: TypeScript is stupid and complains if there isn't this useless default statement
        }
    }
};
var /* EXPORT */ $24b0e5eba9fb7e8c$export$2e2bcd8739ae039 = $24b0e5eba9fb7e8c$var$Channel;

});

parcelRequire.register("iUeLp", function(module, exports) {

$parcel$export(module.exports, "default", () => $dc38e8b2d1afff43$export$2e2bcd8739ae039);
/* MAIN */ const $dc38e8b2d1afff43$var$Lang = {
    /* API */ clamp: (number, lower, upper)=>{
        if (lower > upper) return Math.min(lower, Math.max(upper, number));
        return Math.min(upper, Math.max(lower, number));
    },
    round: (number)=>{
        return Math.round(number * 10000000000) / 10000000000;
    }
};
var /* EXPORT */ $dc38e8b2d1afff43$export$2e2bcd8739ae039 = $dc38e8b2d1afff43$var$Lang;

});

parcelRequire.register("6TJTe", function(module, exports) {

$parcel$export(module.exports, "default", () => $505b79e411d6924b$export$2e2bcd8739ae039);
/* MAIN */ const $505b79e411d6924b$var$Unit = {
    /* API */ dec2hex: (dec)=>{
        const hex = Math.round(dec).toString(16);
        return hex.length > 1 ? hex : `0${hex}`;
    }
};
var /* EXPORT */ $505b79e411d6924b$export$2e2bcd8739ae039 = $505b79e411d6924b$var$Unit;

});


parcelRequire.register("4c7tE", function(module, exports) {

$parcel$export(module.exports, "default", () => $30de153b65659a9f$export$2e2bcd8739ae039);
/* IMPORT */ 
var $6Mwjn = parcelRequire("6Mwjn");
/* MAIN */ const $30de153b65659a9f$var$channels = new (0, $6Mwjn.default)({
    r: 0,
    g: 0,
    b: 0,
    a: 0
}, "transparent");
var /* EXPORT */ $30de153b65659a9f$export$2e2bcd8739ae039 = $30de153b65659a9f$var$channels;

});
parcelRequire.register("6Mwjn", function(module, exports) {

$parcel$export(module.exports, "default", () => $4f004a2f938679c2$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $7YYMx = parcelRequire("7YYMx");

var $atGMM = parcelRequire("atGMM");
/* MAIN */ class $4f004a2f938679c2$var$Channels {
    /* CONSTRUCTOR */ constructor(data, color){
        this.color = color;
        this.changed = false;
        this.data = data; //TSC
        this.type = new (0, $7YYMx.default)();
    }
    /* API */ set(data, color) {
        this.color = color;
        this.changed = false;
        this.data = data; //TSC
        this.type.type = (0, $atGMM.TYPE).ALL;
        return this;
    }
    /* HELPERS */ _ensureHSL() {
        const data = this.data;
        const { h: h , s: s , l: l  } = data;
        if (h === undefined) data.h = (0, $2UY5X.default).channel.rgb2hsl(data, "h");
        if (s === undefined) data.s = (0, $2UY5X.default).channel.rgb2hsl(data, "s");
        if (l === undefined) data.l = (0, $2UY5X.default).channel.rgb2hsl(data, "l");
    }
    _ensureRGB() {
        const data = this.data;
        const { r: r , g: g , b: b  } = data;
        if (r === undefined) data.r = (0, $2UY5X.default).channel.hsl2rgb(data, "r");
        if (g === undefined) data.g = (0, $2UY5X.default).channel.hsl2rgb(data, "g");
        if (b === undefined) data.b = (0, $2UY5X.default).channel.hsl2rgb(data, "b");
    }
    /* GETTERS */ get r() {
        const data = this.data;
        const r = data.r;
        if (!this.type.is((0, $atGMM.TYPE).HSL) && r !== undefined) return r;
        this._ensureHSL();
        return (0, $2UY5X.default).channel.hsl2rgb(data, "r");
    }
    get g() {
        const data = this.data;
        const g = data.g;
        if (!this.type.is((0, $atGMM.TYPE).HSL) && g !== undefined) return g;
        this._ensureHSL();
        return (0, $2UY5X.default).channel.hsl2rgb(data, "g");
    }
    get b() {
        const data = this.data;
        const b = data.b;
        if (!this.type.is((0, $atGMM.TYPE).HSL) && b !== undefined) return b;
        this._ensureHSL();
        return (0, $2UY5X.default).channel.hsl2rgb(data, "b");
    }
    get h() {
        const data = this.data;
        const h = data.h;
        if (!this.type.is((0, $atGMM.TYPE).RGB) && h !== undefined) return h;
        this._ensureRGB();
        return (0, $2UY5X.default).channel.rgb2hsl(data, "h");
    }
    get s() {
        const data = this.data;
        const s = data.s;
        if (!this.type.is((0, $atGMM.TYPE).RGB) && s !== undefined) return s;
        this._ensureRGB();
        return (0, $2UY5X.default).channel.rgb2hsl(data, "s");
    }
    get l() {
        const data = this.data;
        const l = data.l;
        if (!this.type.is((0, $atGMM.TYPE).RGB) && l !== undefined) return l;
        this._ensureRGB();
        return (0, $2UY5X.default).channel.rgb2hsl(data, "l");
    }
    get a() {
        return this.data.a;
    }
    /* SETTERS */ set r(r) {
        this.type.set((0, $atGMM.TYPE).RGB);
        this.changed = true;
        this.data.r = r;
    }
    set g(g) {
        this.type.set((0, $atGMM.TYPE).RGB);
        this.changed = true;
        this.data.g = g;
    }
    set b(b) {
        this.type.set((0, $atGMM.TYPE).RGB);
        this.changed = true;
        this.data.b = b;
    }
    set h(h) {
        this.type.set((0, $atGMM.TYPE).HSL);
        this.changed = true;
        this.data.h = h;
    }
    set s(s) {
        this.type.set((0, $atGMM.TYPE).HSL);
        this.changed = true;
        this.data.s = s;
    }
    set l(l) {
        this.type.set((0, $atGMM.TYPE).HSL);
        this.changed = true;
        this.data.l = l;
    }
    set a(a) {
        this.changed = true;
        this.data.a = a;
    }
}
var /* EXPORT */ $4f004a2f938679c2$export$2e2bcd8739ae039 = $4f004a2f938679c2$var$Channels;

});
parcelRequire.register("7YYMx", function(module, exports) {

$parcel$export(module.exports, "default", () => $5cfd4901433f9a2c$export$2e2bcd8739ae039);
/* IMPORT */ 
var $atGMM = parcelRequire("atGMM");
/* MAIN */ class $5cfd4901433f9a2c$var$Type {
    constructor(){
        /* VARIABLES */ this.type = (0, $atGMM.TYPE).ALL;
    }
    /* API */ get() {
        return this.type;
    }
    set(type) {
        if (this.type && this.type !== type) throw new Error("Cannot change both RGB and HSL channels at the same time");
        this.type = type;
    }
    reset() {
        this.type = (0, $atGMM.TYPE).ALL;
    }
    is(type) {
        return this.type === type;
    }
}
var /* EXPORT */ $5cfd4901433f9a2c$export$2e2bcd8739ae039 = $5cfd4901433f9a2c$var$Type;

});
parcelRequire.register("atGMM", function(module, exports) {

$parcel$export(module.exports, "DEC2HEX", () => $7a0dcd2a6a880a98$export$ad5283b633ba7d15);
$parcel$export(module.exports, "TYPE", () => $7a0dcd2a6a880a98$export$b87f371cbc396fcf);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");
/* MAIN */ const $7a0dcd2a6a880a98$export$ad5283b633ba7d15 = {};
for(let i = 0; i <= 255; i++)$7a0dcd2a6a880a98$export$ad5283b633ba7d15[i] = (0, $2UY5X.default).unit.dec2hex(i); // Populating dynamically, striking a balance between code size and performance
const $7a0dcd2a6a880a98$export$b87f371cbc396fcf = {
    ALL: 0,
    RGB: 1,
    HSL: 2
};

});




parcelRequire.register("eF8YF", function(module, exports) {

$parcel$export(module.exports, "default", () => $aacbdbbe949346b7$export$2e2bcd8739ae039);
/* IMPORT */ 

var $1MyL9 = parcelRequire("1MyL9");

var $5mFlE = parcelRequire("5mFlE");

var $9L59Q = parcelRequire("9L59Q");

var $1aPh4 = parcelRequire("1aPh4");

var $atGMM = parcelRequire("atGMM");
/* MAIN */ const $aacbdbbe949346b7$var$Color = {
    /* VARIABLES */ format: {
        keyword: (0, $9L59Q.default),
        hex: (0, $1MyL9.default),
        rgb: (0, $1aPh4.default),
        rgba: (0, $1aPh4.default),
        hsl: (0, $5mFlE.default),
        hsla: (0, $5mFlE.default)
    },
    /* API */ parse: (color)=>{
        if (typeof color !== "string") return color;
        const channels = (0, $1MyL9.default).parse(color) || (0, $1aPh4.default).parse(color) || (0, $5mFlE.default).parse(color) || (0, $9L59Q.default).parse(color); // Color providers ordered with performance in mind
        if (channels) return channels;
        throw new Error(`Unsupported color format: "${color}"`);
    },
    stringify: (channels)=>{
        // SASS returns a keyword if possible, but we avoid doing that as it's slower and doesn't really add any value
        if (!channels.changed && channels.color) return channels.color;
        if (channels.type.is((0, $atGMM.TYPE).HSL) || channels.data.r === undefined) return (0, $5mFlE.default).stringify(channels);
        else if (channels.a < 1 || !Number.isInteger(channels.r) || !Number.isInteger(channels.g) || !Number.isInteger(channels.b)) return (0, $1aPh4.default).stringify(channels);
        else return (0, $1MyL9.default).stringify(channels);
    }
};
var /* EXPORT */ $aacbdbbe949346b7$export$2e2bcd8739ae039 = $aacbdbbe949346b7$var$Color;

});
parcelRequire.register("1MyL9", function(module, exports) {

$parcel$export(module.exports, "default", () => $14c53cacdb6ab479$export$2e2bcd8739ae039);
/* IMPORT */ 

var $4c7tE = parcelRequire("4c7tE");

var $atGMM = parcelRequire("atGMM");
/* MAIN */ const $14c53cacdb6ab479$var$Hex = {
    /* VARIABLES */ re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    /* API */ parse: (color)=>{
        if (color.charCodeAt(0) !== 35) return; // '#'
        const match = color.match($14c53cacdb6ab479$var$Hex.re);
        if (!match) return;
        const hex = match[1];
        const dec = parseInt(hex, 16);
        const length = hex.length;
        const hasAlpha = length % 4 === 0;
        const isFullLength = length > 4;
        const multiplier = isFullLength ? 1 : 17;
        const bits = isFullLength ? 8 : 4;
        const bitsOffset = hasAlpha ? 0 : -1;
        const mask = isFullLength ? 255 : 15;
        return (0, $4c7tE.default).set({
            r: (dec >> bits * (bitsOffset + 3) & mask) * multiplier,
            g: (dec >> bits * (bitsOffset + 2) & mask) * multiplier,
            b: (dec >> bits * (bitsOffset + 1) & mask) * multiplier,
            a: hasAlpha ? (dec & mask) * multiplier / 255 : 1
        }, color);
    },
    stringify: (channels)=>{
        const { r: r , g: g , b: b , a: a  } = channels;
        if (a < 1) return `#${(0, $atGMM.DEC2HEX)[Math.round(r)]}${(0, $atGMM.DEC2HEX)[Math.round(g)]}${(0, $atGMM.DEC2HEX)[Math.round(b)]}${(0, $atGMM.DEC2HEX)[Math.round(a * 255)]}`;
        else return `#${(0, $atGMM.DEC2HEX)[Math.round(r)]}${(0, $atGMM.DEC2HEX)[Math.round(g)]}${(0, $atGMM.DEC2HEX)[Math.round(b)]}`;
    }
};
var /* EXPORT */ $14c53cacdb6ab479$export$2e2bcd8739ae039 = $14c53cacdb6ab479$var$Hex;

});

parcelRequire.register("5mFlE", function(module, exports) {

$parcel$export(module.exports, "default", () => $3e7f14b6cc9c385b$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $4c7tE = parcelRequire("4c7tE");
/* MAIN */ const $3e7f14b6cc9c385b$var$HSL = {
    /* VARIABLES */ re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    /* HELPERS */ _hue2deg: (hue)=>{
        const match = hue.match($3e7f14b6cc9c385b$var$HSL.hueRe);
        if (match) {
            const [, number, unit] = match;
            switch(unit){
                case "grad":
                    return (0, $2UY5X.default).channel.clamp.h(parseFloat(number) * .9);
                case "rad":
                    return (0, $2UY5X.default).channel.clamp.h(parseFloat(number) * 180 / Math.PI);
                case "turn":
                    return (0, $2UY5X.default).channel.clamp.h(parseFloat(number) * 360);
            }
        }
        return (0, $2UY5X.default).channel.clamp.h(parseFloat(hue));
    },
    /* API */ parse: (color)=>{
        const charCode = color.charCodeAt(0);
        if (charCode !== 104 && charCode !== 72) return; // 'h'/'H'
        const match = color.match($3e7f14b6cc9c385b$var$HSL.re);
        if (!match) return;
        const [, h, s, l, a, isAlphaPercentage] = match;
        return (0, $4c7tE.default).set({
            h: $3e7f14b6cc9c385b$var$HSL._hue2deg(h),
            s: (0, $2UY5X.default).channel.clamp.s(parseFloat(s)),
            l: (0, $2UY5X.default).channel.clamp.l(parseFloat(l)),
            a: a ? (0, $2UY5X.default).channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
        }, color);
    },
    stringify: (channels)=>{
        const { h: h , s: s , l: l , a: a  } = channels;
        if (a < 1) return `hsla(${(0, $2UY5X.default).lang.round(h)}, ${(0, $2UY5X.default).lang.round(s)}%, ${(0, $2UY5X.default).lang.round(l)}%, ${a})`;
        else return `hsl(${(0, $2UY5X.default).lang.round(h)}, ${(0, $2UY5X.default).lang.round(s)}%, ${(0, $2UY5X.default).lang.round(l)}%)`;
    }
};
var /* EXPORT */ $3e7f14b6cc9c385b$export$2e2bcd8739ae039 = $3e7f14b6cc9c385b$var$HSL;

});

parcelRequire.register("9L59Q", function(module, exports) {

$parcel$export(module.exports, "default", () => $71ac810c768d9f75$export$2e2bcd8739ae039);
/* IMPORT */ 
var $1MyL9 = parcelRequire("1MyL9");
/* MAIN */ const $71ac810c768d9f75$var$Keyword = {
    /* VARIABLES */ colors: {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyanaqua: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        transparent: "#00000000",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    },
    /* API */ parse: (color)=>{
        color = color.toLowerCase();
        const hex = $71ac810c768d9f75$var$Keyword.colors[color];
        if (!hex) return;
        return (0, $1MyL9.default).parse(hex);
    },
    stringify: (channels)=>{
        const hex = (0, $1MyL9.default).stringify(channels);
        for(const name in $71ac810c768d9f75$var$Keyword.colors){
            if ($71ac810c768d9f75$var$Keyword.colors[name] === hex) return name;
        }
        return;
    }
};
var /* EXPORT */ $71ac810c768d9f75$export$2e2bcd8739ae039 = $71ac810c768d9f75$var$Keyword;

});

parcelRequire.register("1aPh4", function(module, exports) {

$parcel$export(module.exports, "default", () => $0dae7fa2c6e1a5e2$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $4c7tE = parcelRequire("4c7tE");
/* MAIN */ const $0dae7fa2c6e1a5e2$var$RGB = {
    /* VARIABLES */ re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    /* API */ parse: (color)=>{
        const charCode = color.charCodeAt(0);
        if (charCode !== 114 && charCode !== 82) return; // 'r'/'R'
        const match = color.match($0dae7fa2c6e1a5e2$var$RGB.re);
        if (!match) return;
        const [, r, isRedPercentage, g, isGreenPercentage, b, isBluePercentage, a, isAlphaPercentage] = match;
        return (0, $4c7tE.default).set({
            r: (0, $2UY5X.default).channel.clamp.r(isRedPercentage ? parseFloat(r) * 2.55 : parseFloat(r)),
            g: (0, $2UY5X.default).channel.clamp.g(isGreenPercentage ? parseFloat(g) * 2.55 : parseFloat(g)),
            b: (0, $2UY5X.default).channel.clamp.b(isBluePercentage ? parseFloat(b) * 2.55 : parseFloat(b)),
            a: a ? (0, $2UY5X.default).channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
        }, color);
    },
    stringify: (channels)=>{
        const { r: r , g: g , b: b , a: a  } = channels;
        if (a < 1) return `rgba(${(0, $2UY5X.default).lang.round(r)}, ${(0, $2UY5X.default).lang.round(g)}, ${(0, $2UY5X.default).lang.round(b)}, ${(0, $2UY5X.default).lang.round(a)})`;
        else return `rgb(${(0, $2UY5X.default).lang.round(r)}, ${(0, $2UY5X.default).lang.round(g)}, ${(0, $2UY5X.default).lang.round(b)})`;
    }
};
var /* EXPORT */ $0dae7fa2c6e1a5e2$export$2e2bcd8739ae039 = $0dae7fa2c6e1a5e2$var$RGB;

});


parcelRequire.register("8WcnQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $681d58a0e91a0eb8$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $eF8YF = parcelRequire("eF8YF");
/* MAIN */ const $681d58a0e91a0eb8$var$change = (color, channels)=>{
    const ch = (0, $eF8YF.default).parse(color);
    for(const c in channels)ch[c] = (0, $2UY5X.default).channel.clamp[c](channels[c]);
    return (0, $eF8YF.default).stringify(ch);
};
var /* EXPORT */ $681d58a0e91a0eb8$export$2e2bcd8739ae039 = $681d58a0e91a0eb8$var$change;

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

parcelRequire.register("9iz3d", function(module, exports) {

$parcel$export(module.exports, "default", () => $6c50fbda794c7c75$export$2e2bcd8739ae039);
/* IMPORT */ 
var $7Nx4Z = parcelRequire("7Nx4Z");
/* MAIN */ const $6c50fbda794c7c75$var$isDark = (color)=>{
    return !(0, $7Nx4Z.default)(color);
};
var /* EXPORT */ $6c50fbda794c7c75$export$2e2bcd8739ae039 = $6c50fbda794c7c75$var$isDark;

});
parcelRequire.register("7Nx4Z", function(module, exports) {

$parcel$export(module.exports, "default", () => $5ad6c4e94cb022a3$export$2e2bcd8739ae039);
/* IMPORT */ 
var $6fqon = parcelRequire("6fqon");
/* MAIN */ const $5ad6c4e94cb022a3$var$isLight = (color)=>{
    return (0, $6fqon.default)(color) >= .5;
};
var /* EXPORT */ $5ad6c4e94cb022a3$export$2e2bcd8739ae039 = $5ad6c4e94cb022a3$var$isLight;

});
parcelRequire.register("6fqon", function(module, exports) {

$parcel$export(module.exports, "default", () => $48c89db731ae462d$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $eF8YF = parcelRequire("eF8YF");
/* MAIN */ //SOURCE: https://planetcalc.com/7779
const $48c89db731ae462d$var$luminance = (color)=>{
    const { r: r , g: g , b: b  } = (0, $eF8YF.default).parse(color);
    const luminance = .2126 * (0, $2UY5X.default).channel.toLinear(r) + .7152 * (0, $2UY5X.default).channel.toLinear(g) + .0722 * (0, $2UY5X.default).channel.toLinear(b);
    return (0, $2UY5X.default).lang.round(luminance);
};
var /* EXPORT */ $48c89db731ae462d$export$2e2bcd8739ae039 = $48c89db731ae462d$var$luminance;

});



parcelRequire.register("8syuv", function(module, exports) {

$parcel$export(module.exports, "default", () => $628bb174afe0fb96$export$2e2bcd8739ae039);
/* IMPORT */ 
var $1Z4Y6 = parcelRequire("1Z4Y6");
/* MAIN */ const $628bb174afe0fb96$var$lighten = (color, amount)=>{
    return (0, $1Z4Y6.default)(color, "l", amount);
};
var /* EXPORT */ $628bb174afe0fb96$export$2e2bcd8739ae039 = $628bb174afe0fb96$var$lighten;

});
parcelRequire.register("1Z4Y6", function(module, exports) {

$parcel$export(module.exports, "default", () => $171f578ff8f90de3$export$2e2bcd8739ae039);
/* IMPORT */ 
var $2UY5X = parcelRequire("2UY5X");

var $eF8YF = parcelRequire("eF8YF");
/* MAIN */ const $171f578ff8f90de3$var$adjustChannel = (color, channel, amount)=>{
    const channels = (0, $eF8YF.default).parse(color);
    const amountCurrent = channels[channel];
    const amountNext = (0, $2UY5X.default).channel.clamp[channel](amountCurrent + amount);
    if (amountCurrent !== amountNext) channels[channel] = amountNext;
    return (0, $eF8YF.default).stringify(channels);
};
var /* EXPORT */ $171f578ff8f90de3$export$2e2bcd8739ae039 = $171f578ff8f90de3$var$adjustChannel;

});


parcelRequire.register("9KWq0", function(module, exports) {

$parcel$export(module.exports, "default", () => $71a5b9988f315aa0$export$2e2bcd8739ae039);
/* IMPORT */ 
var $1Z4Y6 = parcelRequire("1Z4Y6");
/* MAIN */ const $71a5b9988f315aa0$var$darken = (color, amount)=>{
    return (0, $1Z4Y6.default)(color, "l", -amount);
};
var /* EXPORT */ $71a5b9988f315aa0$export$2e2bcd8739ae039 = $71a5b9988f315aa0$var$darken;

});

parcelRequire.register("tDZs9", function(module, exports) {

$parcel$export(module.exports, "default", () => $0591bac3a8177185$export$2e2bcd8739ae039);
/* IMPORT */ 
var $eF8YF = parcelRequire("eF8YF");

var $8WcnQ = parcelRequire("8WcnQ");
/* MAIN */ const $0591bac3a8177185$var$adjust = (color, channels)=>{
    const ch = (0, $eF8YF.default).parse(color);
    const changes = {};
    for(const c in channels){
        if (!channels[c]) continue;
        changes[c] = ch[c] + channels[c];
    }
    return (0, $8WcnQ.default)(color, changes);
};
var /* EXPORT */ $0591bac3a8177185$export$2e2bcd8739ae039 = $0591bac3a8177185$var$adjust;

});

parcelRequire.register("9O8cC", function(module, exports) {

$parcel$export(module.exports, "default", () => $723f256eb194d076$export$2e2bcd8739ae039);
/* IMPORT */ 
var $eF8YF = parcelRequire("eF8YF");

var $hd5iK = parcelRequire("hd5iK");
/* MAIN */ const $723f256eb194d076$var$invert = (color, weight = 100)=>{
    const inverse = (0, $eF8YF.default).parse(color);
    inverse.r = 255 - inverse.r;
    inverse.g = 255 - inverse.g;
    inverse.b = 255 - inverse.b;
    return (0, $hd5iK.default)(inverse, color, weight);
};
var /* EXPORT */ $723f256eb194d076$export$2e2bcd8739ae039 = $723f256eb194d076$var$invert;

});
parcelRequire.register("hd5iK", function(module, exports) {

$parcel$export(module.exports, "default", () => $c877c3501c371edb$export$2e2bcd8739ae039);
/* IMPORT */ 
var $eF8YF = parcelRequire("eF8YF");

var $42Ff1 = parcelRequire("42Ff1");
/* MAIN */ //SOURCE: https://github.com/sass/dart-sass/blob/7457d2e9e7e623d9844ffd037a070cf32d39c348/lib/src/functions/color.dart#L718-L756
const $c877c3501c371edb$var$mix = (color1, color2, weight = 50)=>{
    const { r: r1 , g: g1 , b: b1 , a: a1  } = (0, $eF8YF.default).parse(color1);
    const { r: r2 , g: g2 , b: b2 , a: a2  } = (0, $eF8YF.default).parse(color2);
    const weightScale = weight / 100;
    const weightNormalized = weightScale * 2 - 1;
    const alphaDelta = a1 - a2;
    const weight1combined = weightNormalized * alphaDelta === -1 ? weightNormalized : (weightNormalized + alphaDelta) / (1 + weightNormalized * alphaDelta);
    const weight1 = (weight1combined + 1) / 2;
    const weight2 = 1 - weight1;
    const r = r1 * weight1 + r2 * weight2;
    const g = g1 * weight1 + g2 * weight2;
    const b = b1 * weight1 + b2 * weight2;
    const a = a1 * weightScale + a2 * (1 - weightScale);
    return (0, $42Ff1.default)(r, g, b, a);
};
var /* EXPORT */ $c877c3501c371edb$export$2e2bcd8739ae039 = $c877c3501c371edb$var$mix;

});




parcelRequire.register("14Y92", function(module, exports) {

$parcel$export(module.exports, "default", () => $0c94d1ae158948ca$export$2e2bcd8739ae039);

var $c27UE = parcelRequire("c27UE");
/** Error message constants. */ var $0c94d1ae158948ca$var$FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function $0c94d1ae158948ca$var$memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError($0c94d1ae158948ca$var$FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new ($0c94d1ae158948ca$var$memoize.Cache || (0, $c27UE.default));
    return memoized;
}
// Expose `MapCache`.
$0c94d1ae158948ca$var$memoize.Cache = (0, $c27UE.default);
var $0c94d1ae158948ca$export$2e2bcd8739ae039 = $0c94d1ae158948ca$var$memoize;

});
parcelRequire.register("c27UE", function(module, exports) {

$parcel$export(module.exports, "default", () => $8c2bcf3b3e5702ee$export$2e2bcd8739ae039);

var $eUnQV = parcelRequire("eUnQV");

var $7evkF = parcelRequire("7evkF");

var $8ew5E = parcelRequire("8ew5E");

var $cZnmL = parcelRequire("cZnmL");

var $3Djqm = parcelRequire("3Djqm");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $8c2bcf3b3e5702ee$var$MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
$8c2bcf3b3e5702ee$var$MapCache.prototype.clear = (0, $eUnQV.default);
$8c2bcf3b3e5702ee$var$MapCache.prototype["delete"] = (0, $7evkF.default);
$8c2bcf3b3e5702ee$var$MapCache.prototype.get = (0, $8ew5E.default);
$8c2bcf3b3e5702ee$var$MapCache.prototype.has = (0, $cZnmL.default);
$8c2bcf3b3e5702ee$var$MapCache.prototype.set = (0, $3Djqm.default);
var $8c2bcf3b3e5702ee$export$2e2bcd8739ae039 = $8c2bcf3b3e5702ee$var$MapCache;

});
parcelRequire.register("eUnQV", function(module, exports) {

$parcel$export(module.exports, "default", () => $ada8cc464edd9c92$export$2e2bcd8739ae039);

var $lc70E = parcelRequire("lc70E");

var $g3QCx = parcelRequire("g3QCx");

var $8huh4 = parcelRequire("8huh4");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function $ada8cc464edd9c92$var$mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new (0, $lc70E.default),
        "map": new ((0, $8huh4.default) || (0, $g3QCx.default)),
        "string": new (0, $lc70E.default)
    };
}
var $ada8cc464edd9c92$export$2e2bcd8739ae039 = $ada8cc464edd9c92$var$mapCacheClear;

});
parcelRequire.register("lc70E", function(module, exports) {

$parcel$export(module.exports, "default", () => $f6e027e72fcc18f8$export$2e2bcd8739ae039);

var $6cMrI = parcelRequire("6cMrI");

var $750j6 = parcelRequire("750j6");

var $bQhmy = parcelRequire("bQhmy");

var $27rdE = parcelRequire("27rdE");

var $hvXgn = parcelRequire("hvXgn");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $f6e027e72fcc18f8$var$Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
$f6e027e72fcc18f8$var$Hash.prototype.clear = (0, $6cMrI.default);
$f6e027e72fcc18f8$var$Hash.prototype["delete"] = (0, $750j6.default);
$f6e027e72fcc18f8$var$Hash.prototype.get = (0, $bQhmy.default);
$f6e027e72fcc18f8$var$Hash.prototype.has = (0, $27rdE.default);
$f6e027e72fcc18f8$var$Hash.prototype.set = (0, $hvXgn.default);
var $f6e027e72fcc18f8$export$2e2bcd8739ae039 = $f6e027e72fcc18f8$var$Hash;

});
parcelRequire.register("6cMrI", function(module, exports) {

$parcel$export(module.exports, "default", () => $4849717679dd8fa1$export$2e2bcd8739ae039);

var $cKUJA = parcelRequire("cKUJA");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function $4849717679dd8fa1$var$hashClear() {
    this.__data__ = (0, $cKUJA.default) ? (0, $cKUJA.default)(null) : {};
    this.size = 0;
}
var $4849717679dd8fa1$export$2e2bcd8739ae039 = $4849717679dd8fa1$var$hashClear;

});
parcelRequire.register("cKUJA", function(module, exports) {

$parcel$export(module.exports, "default", () => $9495ca2c6efc2c12$export$2e2bcd8739ae039);

var $4JYFm = parcelRequire("4JYFm");
/* Built-in method references that are verified to be native. */ var $9495ca2c6efc2c12$var$nativeCreate = (0, $4JYFm.default)(Object, "create");
var $9495ca2c6efc2c12$export$2e2bcd8739ae039 = $9495ca2c6efc2c12$var$nativeCreate;

});
parcelRequire.register("4JYFm", function(module, exports) {

$parcel$export(module.exports, "default", () => $373a6c71023a0d8a$export$2e2bcd8739ae039);

var $h5SgW = parcelRequire("h5SgW");

var $85ayK = parcelRequire("85ayK");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function $373a6c71023a0d8a$var$getNative(object, key) {
    var value = (0, $85ayK.default)(object, key);
    return (0, $h5SgW.default)(value) ? value : undefined;
}
var $373a6c71023a0d8a$export$2e2bcd8739ae039 = $373a6c71023a0d8a$var$getNative;

});
parcelRequire.register("h5SgW", function(module, exports) {

$parcel$export(module.exports, "default", () => $c71d009f46ed53ea$export$2e2bcd8739ae039);

var $75Ujj = parcelRequire("75Ujj");

var $cAJkr = parcelRequire("cAJkr");

var $j5nkf = parcelRequire("j5nkf");

var $lSWIU = parcelRequire("lSWIU");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var $c71d009f46ed53ea$var$reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var $c71d009f46ed53ea$var$reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var $c71d009f46ed53ea$var$funcProto = Function.prototype, $c71d009f46ed53ea$var$objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var $c71d009f46ed53ea$var$funcToString = $c71d009f46ed53ea$var$funcProto.toString;
/** Used to check objects for own properties. */ var $c71d009f46ed53ea$var$hasOwnProperty = $c71d009f46ed53ea$var$objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var $c71d009f46ed53ea$var$reIsNative = RegExp("^" + $c71d009f46ed53ea$var$funcToString.call($c71d009f46ed53ea$var$hasOwnProperty).replace($c71d009f46ed53ea$var$reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function $c71d009f46ed53ea$var$baseIsNative(value) {
    if (!(0, $j5nkf.default)(value) || (0, $cAJkr.default)(value)) return false;
    var pattern = (0, $75Ujj.default)(value) ? $c71d009f46ed53ea$var$reIsNative : $c71d009f46ed53ea$var$reIsHostCtor;
    return pattern.test((0, $lSWIU.default)(value));
}
var $c71d009f46ed53ea$export$2e2bcd8739ae039 = $c71d009f46ed53ea$var$baseIsNative;

});
parcelRequire.register("75Ujj", function(module, exports) {

$parcel$export(module.exports, "default", () => $52a4ae1afa35dbcc$export$2e2bcd8739ae039);

var $6AgQp = parcelRequire("6AgQp");

var $j5nkf = parcelRequire("j5nkf");
/** `Object#toString` result references. */ var $52a4ae1afa35dbcc$var$asyncTag = "[object AsyncFunction]", $52a4ae1afa35dbcc$var$funcTag = "[object Function]", $52a4ae1afa35dbcc$var$genTag = "[object GeneratorFunction]", $52a4ae1afa35dbcc$var$proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function $52a4ae1afa35dbcc$var$isFunction(value) {
    if (!(0, $j5nkf.default)(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, $6AgQp.default)(value);
    return tag == $52a4ae1afa35dbcc$var$funcTag || tag == $52a4ae1afa35dbcc$var$genTag || tag == $52a4ae1afa35dbcc$var$asyncTag || tag == $52a4ae1afa35dbcc$var$proxyTag;
}
var $52a4ae1afa35dbcc$export$2e2bcd8739ae039 = $52a4ae1afa35dbcc$var$isFunction;

});
parcelRequire.register("6AgQp", function(module, exports) {

$parcel$export(module.exports, "default", () => $4cb32bd1ced4d992$export$2e2bcd8739ae039);

var $eKY16 = parcelRequire("eKY16");

var $dNOr8 = parcelRequire("dNOr8");

var $aDYSd = parcelRequire("aDYSd");
/** `Object#toString` result references. */ var $4cb32bd1ced4d992$var$nullTag = "[object Null]", $4cb32bd1ced4d992$var$undefinedTag = "[object Undefined]";
/** Built-in value references. */ var $4cb32bd1ced4d992$var$symToStringTag = (0, $eKY16.default) ? (0, $eKY16.default).toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function $4cb32bd1ced4d992$var$baseGetTag(value) {
    if (value == null) return value === undefined ? $4cb32bd1ced4d992$var$undefinedTag : $4cb32bd1ced4d992$var$nullTag;
    return $4cb32bd1ced4d992$var$symToStringTag && $4cb32bd1ced4d992$var$symToStringTag in Object(value) ? (0, $dNOr8.default)(value) : (0, $aDYSd.default)(value);
}
var $4cb32bd1ced4d992$export$2e2bcd8739ae039 = $4cb32bd1ced4d992$var$baseGetTag;

});
parcelRequire.register("eKY16", function(module, exports) {

$parcel$export(module.exports, "default", () => $abe3eaac5374ad1a$export$2e2bcd8739ae039);

var $dxa8D = parcelRequire("dxa8D");
/** Built-in value references. */ var $abe3eaac5374ad1a$var$Symbol = (0, $dxa8D.default).Symbol;
var $abe3eaac5374ad1a$export$2e2bcd8739ae039 = $abe3eaac5374ad1a$var$Symbol;

});
parcelRequire.register("dxa8D", function(module, exports) {

$parcel$export(module.exports, "default", () => $9da638a85e03eb0e$export$2e2bcd8739ae039);

var $cSVE3 = parcelRequire("cSVE3");
/** Detect free variable `self`. */ var $9da638a85e03eb0e$var$freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var $9da638a85e03eb0e$var$root = (0, $cSVE3.default) || $9da638a85e03eb0e$var$freeSelf || Function("return this")();
var $9da638a85e03eb0e$export$2e2bcd8739ae039 = $9da638a85e03eb0e$var$root;

});
parcelRequire.register("cSVE3", function(module, exports) {

$parcel$export(module.exports, "default", () => $96173e485f6a75ed$export$2e2bcd8739ae039);
/** Detect free variable `global` from Node.js. */ var $96173e485f6a75ed$var$freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
var $96173e485f6a75ed$export$2e2bcd8739ae039 = $96173e485f6a75ed$var$freeGlobal;

});



parcelRequire.register("dNOr8", function(module, exports) {

$parcel$export(module.exports, "default", () => $a0c6f9a1c451b40e$export$2e2bcd8739ae039);

var $eKY16 = parcelRequire("eKY16");
/** Used for built-in method references. */ var $a0c6f9a1c451b40e$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $a0c6f9a1c451b40e$var$hasOwnProperty = $a0c6f9a1c451b40e$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $a0c6f9a1c451b40e$var$nativeObjectToString = $a0c6f9a1c451b40e$var$objectProto.toString;
/** Built-in value references. */ var $a0c6f9a1c451b40e$var$symToStringTag = (0, $eKY16.default) ? (0, $eKY16.default).toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function $a0c6f9a1c451b40e$var$getRawTag(value) {
    var isOwn = $a0c6f9a1c451b40e$var$hasOwnProperty.call(value, $a0c6f9a1c451b40e$var$symToStringTag), tag = value[$a0c6f9a1c451b40e$var$symToStringTag];
    try {
        value[$a0c6f9a1c451b40e$var$symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = $a0c6f9a1c451b40e$var$nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[$a0c6f9a1c451b40e$var$symToStringTag] = tag;
        else delete value[$a0c6f9a1c451b40e$var$symToStringTag];
    }
    return result;
}
var $a0c6f9a1c451b40e$export$2e2bcd8739ae039 = $a0c6f9a1c451b40e$var$getRawTag;

});

parcelRequire.register("aDYSd", function(module, exports) {

$parcel$export(module.exports, "default", () => $7bfcc418f458b549$export$2e2bcd8739ae039);
/** Used for built-in method references. */ var $7bfcc418f458b549$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var $7bfcc418f458b549$var$nativeObjectToString = $7bfcc418f458b549$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function $7bfcc418f458b549$var$objectToString(value) {
    return $7bfcc418f458b549$var$nativeObjectToString.call(value);
}
var $7bfcc418f458b549$export$2e2bcd8739ae039 = $7bfcc418f458b549$var$objectToString;

});


parcelRequire.register("j5nkf", function(module, exports) {

$parcel$export(module.exports, "default", () => $de5093e8d831f5d0$export$2e2bcd8739ae039);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function $de5093e8d831f5d0$var$isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
var $de5093e8d831f5d0$export$2e2bcd8739ae039 = $de5093e8d831f5d0$var$isObject;

});


parcelRequire.register("cAJkr", function(module, exports) {

$parcel$export(module.exports, "default", () => $92ac022bea3ac404$export$2e2bcd8739ae039);

var $iX2wC = parcelRequire("iX2wC");
/** Used to detect methods masquerading as native. */ var $92ac022bea3ac404$var$maskSrcKey = function() {
    var uid = /[^.]+$/.exec((0, $iX2wC.default) && (0, $iX2wC.default).keys && (0, $iX2wC.default).keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function $92ac022bea3ac404$var$isMasked(func) {
    return !!$92ac022bea3ac404$var$maskSrcKey && $92ac022bea3ac404$var$maskSrcKey in func;
}
var $92ac022bea3ac404$export$2e2bcd8739ae039 = $92ac022bea3ac404$var$isMasked;

});
parcelRequire.register("iX2wC", function(module, exports) {

$parcel$export(module.exports, "default", () => $dcbfb223b0b0875e$export$2e2bcd8739ae039);

var $dxa8D = parcelRequire("dxa8D");
/** Used to detect overreaching core-js shims. */ var $dcbfb223b0b0875e$var$coreJsData = (0, $dxa8D.default)["__core-js_shared__"];
var $dcbfb223b0b0875e$export$2e2bcd8739ae039 = $dcbfb223b0b0875e$var$coreJsData;

});


parcelRequire.register("lSWIU", function(module, exports) {

$parcel$export(module.exports, "default", () => $feec315fabfaaf17$export$2e2bcd8739ae039);
/** Used for built-in method references. */ var $feec315fabfaaf17$var$funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var $feec315fabfaaf17$var$funcToString = $feec315fabfaaf17$var$funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function $feec315fabfaaf17$var$toSource(func) {
    if (func != null) {
        try {
            return $feec315fabfaaf17$var$funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
var $feec315fabfaaf17$export$2e2bcd8739ae039 = $feec315fabfaaf17$var$toSource;

});


parcelRequire.register("85ayK", function(module, exports) {

$parcel$export(module.exports, "default", () => $5e26fb3dad6c73bc$export$2e2bcd8739ae039);
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function $5e26fb3dad6c73bc$var$getValue(object, key) {
    return object == null ? undefined : object[key];
}
var $5e26fb3dad6c73bc$export$2e2bcd8739ae039 = $5e26fb3dad6c73bc$var$getValue;

});




parcelRequire.register("750j6", function(module, exports) {

$parcel$export(module.exports, "default", () => $52793d00591efa93$export$2e2bcd8739ae039);
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $52793d00591efa93$var$hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
var $52793d00591efa93$export$2e2bcd8739ae039 = $52793d00591efa93$var$hashDelete;

});

parcelRequire.register("bQhmy", function(module, exports) {

$parcel$export(module.exports, "default", () => $89f204ed3692a3d9$export$2e2bcd8739ae039);

var $cKUJA = parcelRequire("cKUJA");
/** Used to stand-in for `undefined` hash values. */ var $89f204ed3692a3d9$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var $89f204ed3692a3d9$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $89f204ed3692a3d9$var$hasOwnProperty = $89f204ed3692a3d9$var$objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $89f204ed3692a3d9$var$hashGet(key) {
    var data = this.__data__;
    if (0, $cKUJA.default) {
        var result = data[key];
        return result === $89f204ed3692a3d9$var$HASH_UNDEFINED ? undefined : result;
    }
    return $89f204ed3692a3d9$var$hasOwnProperty.call(data, key) ? data[key] : undefined;
}
var $89f204ed3692a3d9$export$2e2bcd8739ae039 = $89f204ed3692a3d9$var$hashGet;

});

parcelRequire.register("27rdE", function(module, exports) {

$parcel$export(module.exports, "default", () => $18b1595b563b16de$export$2e2bcd8739ae039);

var $cKUJA = parcelRequire("cKUJA");
/** Used for built-in method references. */ var $18b1595b563b16de$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $18b1595b563b16de$var$hasOwnProperty = $18b1595b563b16de$var$objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $18b1595b563b16de$var$hashHas(key) {
    var data = this.__data__;
    return (0, $cKUJA.default) ? data[key] !== undefined : $18b1595b563b16de$var$hasOwnProperty.call(data, key);
}
var $18b1595b563b16de$export$2e2bcd8739ae039 = $18b1595b563b16de$var$hashHas;

});

parcelRequire.register("hvXgn", function(module, exports) {

$parcel$export(module.exports, "default", () => $034a6037115f9af6$export$2e2bcd8739ae039);

var $cKUJA = parcelRequire("cKUJA");
/** Used to stand-in for `undefined` hash values. */ var $034a6037115f9af6$var$HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function $034a6037115f9af6$var$hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (0, $cKUJA.default) && value === undefined ? $034a6037115f9af6$var$HASH_UNDEFINED : value;
    return this;
}
var $034a6037115f9af6$export$2e2bcd8739ae039 = $034a6037115f9af6$var$hashSet;

});


parcelRequire.register("g3QCx", function(module, exports) {

$parcel$export(module.exports, "default", () => $bb15be8562a7ed1f$export$2e2bcd8739ae039);

var $aa2KP = parcelRequire("aa2KP");

var $jVasv = parcelRequire("jVasv");

var $hxgSd = parcelRequire("hxgSd");

var $iHI0o = parcelRequire("iHI0o");

var $2UpvC = parcelRequire("2UpvC");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function $bb15be8562a7ed1f$var$ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
$bb15be8562a7ed1f$var$ListCache.prototype.clear = (0, $aa2KP.default);
$bb15be8562a7ed1f$var$ListCache.prototype["delete"] = (0, $jVasv.default);
$bb15be8562a7ed1f$var$ListCache.prototype.get = (0, $hxgSd.default);
$bb15be8562a7ed1f$var$ListCache.prototype.has = (0, $iHI0o.default);
$bb15be8562a7ed1f$var$ListCache.prototype.set = (0, $2UpvC.default);
var $bb15be8562a7ed1f$export$2e2bcd8739ae039 = $bb15be8562a7ed1f$var$ListCache;

});
parcelRequire.register("aa2KP", function(module, exports) {

$parcel$export(module.exports, "default", () => $765cf9807bc57b83$export$2e2bcd8739ae039);
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function $765cf9807bc57b83$var$listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
var $765cf9807bc57b83$export$2e2bcd8739ae039 = $765cf9807bc57b83$var$listCacheClear;

});

parcelRequire.register("jVasv", function(module, exports) {

$parcel$export(module.exports, "default", () => $e80b741c13923a38$export$2e2bcd8739ae039);

var $aydWr = parcelRequire("aydWr");
/** Used for built-in method references. */ var $e80b741c13923a38$var$arrayProto = Array.prototype;
/** Built-in value references. */ var $e80b741c13923a38$var$splice = $e80b741c13923a38$var$arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $e80b741c13923a38$var$listCacheDelete(key) {
    var data = this.__data__, index = (0, $aydWr.default)(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else $e80b741c13923a38$var$splice.call(data, index, 1);
    --this.size;
    return true;
}
var $e80b741c13923a38$export$2e2bcd8739ae039 = $e80b741c13923a38$var$listCacheDelete;

});
parcelRequire.register("aydWr", function(module, exports) {

$parcel$export(module.exports, "default", () => $7ae7e4e212a29398$export$2e2bcd8739ae039);

var $9U6xl = parcelRequire("9U6xl");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function $7ae7e4e212a29398$var$assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ((0, $9U6xl.default)(array[length][0], key)) return length;
    }
    return -1;
}
var $7ae7e4e212a29398$export$2e2bcd8739ae039 = $7ae7e4e212a29398$var$assocIndexOf;

});
parcelRequire.register("9U6xl", function(module, exports) {

$parcel$export(module.exports, "default", () => $735e6a159b1a9e8d$export$2e2bcd8739ae039);
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function $735e6a159b1a9e8d$var$eq(value, other) {
    return value === other || value !== value && other !== other;
}
var $735e6a159b1a9e8d$export$2e2bcd8739ae039 = $735e6a159b1a9e8d$var$eq;

});



parcelRequire.register("hxgSd", function(module, exports) {

$parcel$export(module.exports, "default", () => $cc429b79815aa424$export$2e2bcd8739ae039);

var $aydWr = parcelRequire("aydWr");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $cc429b79815aa424$var$listCacheGet(key) {
    var data = this.__data__, index = (0, $aydWr.default)(data, key);
    return index < 0 ? undefined : data[index][1];
}
var $cc429b79815aa424$export$2e2bcd8739ae039 = $cc429b79815aa424$var$listCacheGet;

});

parcelRequire.register("iHI0o", function(module, exports) {

$parcel$export(module.exports, "default", () => $d9de60b4f8f4414e$export$2e2bcd8739ae039);

var $aydWr = parcelRequire("aydWr");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $d9de60b4f8f4414e$var$listCacheHas(key) {
    return (0, $aydWr.default)(this.__data__, key) > -1;
}
var $d9de60b4f8f4414e$export$2e2bcd8739ae039 = $d9de60b4f8f4414e$var$listCacheHas;

});

parcelRequire.register("2UpvC", function(module, exports) {

$parcel$export(module.exports, "default", () => $21e499483f4362c2$export$2e2bcd8739ae039);

var $aydWr = parcelRequire("aydWr");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function $21e499483f4362c2$var$listCacheSet(key, value) {
    var data = this.__data__, index = (0, $aydWr.default)(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
var $21e499483f4362c2$export$2e2bcd8739ae039 = $21e499483f4362c2$var$listCacheSet;

});


parcelRequire.register("8huh4", function(module, exports) {

$parcel$export(module.exports, "default", () => $6077651b14ac10c7$export$2e2bcd8739ae039);

var $4JYFm = parcelRequire("4JYFm");

var $dxa8D = parcelRequire("dxa8D");
/* Built-in method references that are verified to be native. */ var $6077651b14ac10c7$var$Map = (0, $4JYFm.default)((0, $dxa8D.default), "Map");
var $6077651b14ac10c7$export$2e2bcd8739ae039 = $6077651b14ac10c7$var$Map;

});


parcelRequire.register("7evkF", function(module, exports) {

$parcel$export(module.exports, "default", () => $54422525604e6468$export$2e2bcd8739ae039);

var $1PMDC = parcelRequire("1PMDC");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function $54422525604e6468$var$mapCacheDelete(key) {
    var result = (0, $1PMDC.default)(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
var $54422525604e6468$export$2e2bcd8739ae039 = $54422525604e6468$var$mapCacheDelete;

});
parcelRequire.register("1PMDC", function(module, exports) {

$parcel$export(module.exports, "default", () => $1560485f2d76349f$export$2e2bcd8739ae039);

var $5ihfW = parcelRequire("5ihfW");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function $1560485f2d76349f$var$getMapData(map, key) {
    var data = map.__data__;
    return (0, $5ihfW.default)(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var $1560485f2d76349f$export$2e2bcd8739ae039 = $1560485f2d76349f$var$getMapData;

});
parcelRequire.register("5ihfW", function(module, exports) {

$parcel$export(module.exports, "default", () => $3dac04e1daa78f41$export$2e2bcd8739ae039);
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function $3dac04e1daa78f41$var$isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var $3dac04e1daa78f41$export$2e2bcd8739ae039 = $3dac04e1daa78f41$var$isKeyable;

});



parcelRequire.register("8ew5E", function(module, exports) {

$parcel$export(module.exports, "default", () => $5fe885f9796584a1$export$2e2bcd8739ae039);

var $1PMDC = parcelRequire("1PMDC");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function $5fe885f9796584a1$var$mapCacheGet(key) {
    return (0, $1PMDC.default)(this, key).get(key);
}
var $5fe885f9796584a1$export$2e2bcd8739ae039 = $5fe885f9796584a1$var$mapCacheGet;

});

parcelRequire.register("cZnmL", function(module, exports) {

$parcel$export(module.exports, "default", () => $974d4e95140726db$export$2e2bcd8739ae039);

var $1PMDC = parcelRequire("1PMDC");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function $974d4e95140726db$var$mapCacheHas(key) {
    return (0, $1PMDC.default)(this, key).has(key);
}
var $974d4e95140726db$export$2e2bcd8739ae039 = $974d4e95140726db$var$mapCacheHas;

});

parcelRequire.register("3Djqm", function(module, exports) {

$parcel$export(module.exports, "default", () => $2a5414d792c38312$export$2e2bcd8739ae039);

var $1PMDC = parcelRequire("1PMDC");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function $2a5414d792c38312$var$mapCacheSet(key, value) {
    var data = (0, $1PMDC.default)(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
var $2a5414d792c38312$export$2e2bcd8739ae039 = $2a5414d792c38312$var$mapCacheSet;

});



parcelRequire.register("lKQqi", function(module, exports) {

$parcel$export(module.exports, "compile", () => $49c0f7d58998f387$export$ef7acd7185315e22);
$parcel$export(module.exports, "serialize", () => $49c0f7d58998f387$export$dfdc1655ccc5b9cb);
$parcel$export(module.exports, "stringify", () => $49c0f7d58998f387$export$fac44ee5b035f737);
var $49c0f7d58998f387$export$71ad59f2e432cfe8 = "-ms-";
var $49c0f7d58998f387$export$2c0f367103c8d01c = "-moz-";
var $49c0f7d58998f387$export$39dfd62a25e0fe93 = "-webkit-";
var $49c0f7d58998f387$export$a29989082612d0d9 = "comm";
var $49c0f7d58998f387$export$aa3a2e812ca8570d = "rule";
var $49c0f7d58998f387$export$527d108ccf083c2b = "decl";
var $49c0f7d58998f387$export$d3d35020fa5b54f0 = "@page";
var $49c0f7d58998f387$export$500415a86c544f73 = "@media";
var $49c0f7d58998f387$export$a763edbf796b780a = "@import";
var $49c0f7d58998f387$export$2790aeb8b4e5c826 = "@charset";
var $49c0f7d58998f387$export$1cc683e23b84b133 = "@viewport";
var $49c0f7d58998f387$export$9447a5efea57e862 = "@supports";
var $49c0f7d58998f387$export$ef011b4e114b1fba = "@document";
var $49c0f7d58998f387$export$6aad947bda0f3f46 = "@namespace";
var $49c0f7d58998f387$export$b44a8529a35fcb60 = "@keyframes";
var $49c0f7d58998f387$export$2c16de31893252e6 = "@font-face";
var $49c0f7d58998f387$export$3d846dd52e150c6f = "@counter-style";
var $49c0f7d58998f387$export$22314bfbb57653fe = "@font-feature-values";
var $49c0f7d58998f387$export$d773506282b3cfe6 = "@layer";
var $49c0f7d58998f387$export$2335f513bbd82c6d = Math.abs;
var $49c0f7d58998f387$export$6788812c4e6611e6 = String.fromCharCode;
var $49c0f7d58998f387$export$e6e34fd1f2686227 = Object.assign;
function $49c0f7d58998f387$export$d6af199866bfb566(e, r) {
    return $49c0f7d58998f387$export$a9db5e087081082d(e, 0) ^ 45 ? (((r << 2 ^ $49c0f7d58998f387$export$a9db5e087081082d(e, 0)) << 2 ^ $49c0f7d58998f387$export$a9db5e087081082d(e, 1)) << 2 ^ $49c0f7d58998f387$export$a9db5e087081082d(e, 2)) << 2 ^ $49c0f7d58998f387$export$a9db5e087081082d(e, 3) : 0;
}
function $49c0f7d58998f387$export$87c2784dc9fc4ab(e) {
    return e.trim();
}
function $49c0f7d58998f387$export$4659b591c19bdf3d(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
}
function $49c0f7d58998f387$export$77ad94ebf1c2b9ed(e, r, a) {
    return e.replace(r, a);
}
function $49c0f7d58998f387$export$f8e21b1e77979a08(e, r) {
    return e.indexOf(r);
}
function $49c0f7d58998f387$export$a9db5e087081082d(e, r) {
    return e.charCodeAt(r) | 0;
}
function $49c0f7d58998f387$export$2f35ab04d2335697(e, r, a) {
    return e.slice(r, a);
}
function $49c0f7d58998f387$export$36776f635604f274(e) {
    return e.length;
}
function $49c0f7d58998f387$export$f9084667e487ed46(e) {
    return e.length;
}
function $49c0f7d58998f387$export$10d8903dec122b9d(e, r) {
    return r.push(e), e;
}
function $49c0f7d58998f387$export$1be1fc439b849fdf(e, r) {
    return e.map(r).join("");
}
var $49c0f7d58998f387$export$53f1d5ea8de3d7c = 1;
var $49c0f7d58998f387$export$4e0c71f277ca26b3 = 1;
var $49c0f7d58998f387$export$f24224f1c91d8156 = 0;
var $49c0f7d58998f387$export$5880b8b5730aff45 = 0;
var $49c0f7d58998f387$export$c0306caf338ac095 = 0;
var $49c0f7d58998f387$export$30a86d91af8ff6e6 = "";
function $49c0f7d58998f387$export$35059013cd4a06db(e, r, a, n, c, s, t) {
    return {
        value: e,
        root: r,
        parent: a,
        type: n,
        props: c,
        children: s,
        line: $49c0f7d58998f387$export$53f1d5ea8de3d7c,
        column: $49c0f7d58998f387$export$4e0c71f277ca26b3,
        length: t,
        return: ""
    };
}
function $49c0f7d58998f387$export$784d13d8ee351f07(e, r) {
    return $49c0f7d58998f387$export$e6e34fd1f2686227($49c0f7d58998f387$export$35059013cd4a06db("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, r);
}
function $49c0f7d58998f387$export$eba6f6f03b0a92e7() {
    return $49c0f7d58998f387$export$c0306caf338ac095;
}
function $49c0f7d58998f387$export$232faf9add678146() {
    $49c0f7d58998f387$export$c0306caf338ac095 = $49c0f7d58998f387$export$5880b8b5730aff45 > 0 ? $49c0f7d58998f387$export$a9db5e087081082d($49c0f7d58998f387$export$30a86d91af8ff6e6, --$49c0f7d58998f387$export$5880b8b5730aff45) : 0;
    if ($49c0f7d58998f387$export$4e0c71f277ca26b3--, $49c0f7d58998f387$export$c0306caf338ac095 === 10) $49c0f7d58998f387$export$4e0c71f277ca26b3 = 1, $49c0f7d58998f387$export$53f1d5ea8de3d7c--;
    return $49c0f7d58998f387$export$c0306caf338ac095;
}
function $49c0f7d58998f387$export$48cfd1e771a65c4f() {
    $49c0f7d58998f387$export$c0306caf338ac095 = $49c0f7d58998f387$export$5880b8b5730aff45 < $49c0f7d58998f387$export$f24224f1c91d8156 ? $49c0f7d58998f387$export$a9db5e087081082d($49c0f7d58998f387$export$30a86d91af8ff6e6, $49c0f7d58998f387$export$5880b8b5730aff45++) : 0;
    if ($49c0f7d58998f387$export$4e0c71f277ca26b3++, $49c0f7d58998f387$export$c0306caf338ac095 === 10) $49c0f7d58998f387$export$4e0c71f277ca26b3 = 1, $49c0f7d58998f387$export$53f1d5ea8de3d7c++;
    return $49c0f7d58998f387$export$c0306caf338ac095;
}
function $49c0f7d58998f387$export$4d3fb11e950abb9e() {
    return $49c0f7d58998f387$export$a9db5e087081082d($49c0f7d58998f387$export$30a86d91af8ff6e6, $49c0f7d58998f387$export$5880b8b5730aff45);
}
function $49c0f7d58998f387$export$e88cb2efb12ae807() {
    return $49c0f7d58998f387$export$5880b8b5730aff45;
}
function $49c0f7d58998f387$export$58adb3bec8346d0f(e, r) {
    return $49c0f7d58998f387$export$2f35ab04d2335697($49c0f7d58998f387$export$30a86d91af8ff6e6, e, r);
}
function $49c0f7d58998f387$export$9e1725a4cfeada27(e) {
    switch(e){
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function $49c0f7d58998f387$export$2de70f21292aac9e(e) {
    return $49c0f7d58998f387$export$53f1d5ea8de3d7c = $49c0f7d58998f387$export$4e0c71f277ca26b3 = 1, $49c0f7d58998f387$export$f24224f1c91d8156 = $49c0f7d58998f387$export$36776f635604f274($49c0f7d58998f387$export$30a86d91af8ff6e6 = e), $49c0f7d58998f387$export$5880b8b5730aff45 = 0, [];
}
function $49c0f7d58998f387$export$45918ac1574455b1(e) {
    return $49c0f7d58998f387$export$30a86d91af8ff6e6 = "", e;
}
function $49c0f7d58998f387$export$410ac95b9ec204b8(e) {
    return $49c0f7d58998f387$export$87c2784dc9fc4ab($49c0f7d58998f387$export$58adb3bec8346d0f($49c0f7d58998f387$export$5880b8b5730aff45 - 1, $49c0f7d58998f387$export$c889f2fcc19dbf12(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $49c0f7d58998f387$export$660b2ee2d4fb4eff(e) {
    return $49c0f7d58998f387$export$45918ac1574455b1($49c0f7d58998f387$export$5f8c09e3ae6f64e1($49c0f7d58998f387$export$2de70f21292aac9e(e)));
}
function $49c0f7d58998f387$export$7af1228ff777d175(e) {
    while($49c0f7d58998f387$export$c0306caf338ac095 = $49c0f7d58998f387$export$4d3fb11e950abb9e())if ($49c0f7d58998f387$export$c0306caf338ac095 < 33) $49c0f7d58998f387$export$48cfd1e771a65c4f();
    else break;
    return $49c0f7d58998f387$export$9e1725a4cfeada27(e) > 2 || $49c0f7d58998f387$export$9e1725a4cfeada27($49c0f7d58998f387$export$c0306caf338ac095) > 3 ? "" : " ";
}
function $49c0f7d58998f387$export$5f8c09e3ae6f64e1(e) {
    while($49c0f7d58998f387$export$48cfd1e771a65c4f())switch($49c0f7d58998f387$export$9e1725a4cfeada27($49c0f7d58998f387$export$c0306caf338ac095)){
        case 0:
            $49c0f7d58998f387$export$10d8903dec122b9d($49c0f7d58998f387$export$c2ab62c7bf24634($49c0f7d58998f387$export$5880b8b5730aff45 - 1), e);
            break;
        case 2:
            $49c0f7d58998f387$export$10d8903dec122b9d($49c0f7d58998f387$export$410ac95b9ec204b8($49c0f7d58998f387$export$c0306caf338ac095), e);
            break;
        default:
            $49c0f7d58998f387$export$10d8903dec122b9d($49c0f7d58998f387$export$6788812c4e6611e6($49c0f7d58998f387$export$c0306caf338ac095), e);
    }
    return e;
}
function $49c0f7d58998f387$export$955ba06d119e085e(e, r) {
    while(--r && $49c0f7d58998f387$export$48cfd1e771a65c4f())if ($49c0f7d58998f387$export$c0306caf338ac095 < 48 || $49c0f7d58998f387$export$c0306caf338ac095 > 102 || $49c0f7d58998f387$export$c0306caf338ac095 > 57 && $49c0f7d58998f387$export$c0306caf338ac095 < 65 || $49c0f7d58998f387$export$c0306caf338ac095 > 70 && $49c0f7d58998f387$export$c0306caf338ac095 < 97) break;
    return $49c0f7d58998f387$export$58adb3bec8346d0f(e, $49c0f7d58998f387$export$e88cb2efb12ae807() + (r < 6 && $49c0f7d58998f387$export$4d3fb11e950abb9e() == 32 && $49c0f7d58998f387$export$48cfd1e771a65c4f() == 32));
}
function $49c0f7d58998f387$export$c889f2fcc19dbf12(e) {
    while($49c0f7d58998f387$export$48cfd1e771a65c4f())switch($49c0f7d58998f387$export$c0306caf338ac095){
        case e:
            return $49c0f7d58998f387$export$5880b8b5730aff45;
        case 34:
        case 39:
            if (e !== 34 && e !== 39) $49c0f7d58998f387$export$c889f2fcc19dbf12($49c0f7d58998f387$export$c0306caf338ac095);
            break;
        case 40:
            if (e === 41) $49c0f7d58998f387$export$c889f2fcc19dbf12(e);
            break;
        case 92:
            $49c0f7d58998f387$export$48cfd1e771a65c4f();
            break;
    }
    return $49c0f7d58998f387$export$5880b8b5730aff45;
}
function $49c0f7d58998f387$export$4254d4e2b3745c4c(e, r) {
    while($49c0f7d58998f387$export$48cfd1e771a65c4f())if (e + $49c0f7d58998f387$export$c0306caf338ac095 === 57) break;
    else if (e + $49c0f7d58998f387$export$c0306caf338ac095 === 84 && $49c0f7d58998f387$export$4d3fb11e950abb9e() === 47) break;
    return "/*" + $49c0f7d58998f387$export$58adb3bec8346d0f(r, $49c0f7d58998f387$export$5880b8b5730aff45 - 1) + "*" + $49c0f7d58998f387$export$6788812c4e6611e6(e === 47 ? e : $49c0f7d58998f387$export$48cfd1e771a65c4f());
}
function $49c0f7d58998f387$export$c2ab62c7bf24634(e) {
    while(!$49c0f7d58998f387$export$9e1725a4cfeada27($49c0f7d58998f387$export$4d3fb11e950abb9e()))$49c0f7d58998f387$export$48cfd1e771a65c4f();
    return $49c0f7d58998f387$export$58adb3bec8346d0f(e, $49c0f7d58998f387$export$5880b8b5730aff45);
}
function $49c0f7d58998f387$export$ef7acd7185315e22(e) {
    return $49c0f7d58998f387$export$45918ac1574455b1($49c0f7d58998f387$export$98e6a39c04603d36("", null, null, null, [
        ""
    ], e = $49c0f7d58998f387$export$2de70f21292aac9e(e), 0, [
        0
    ], e));
}
function $49c0f7d58998f387$export$98e6a39c04603d36(e, r, a, n, c, s, t, u, i) {
    var f = 0;
    var o = 0;
    var l = t;
    var v = 0;
    var p = 0;
    var h = 0;
    var b = 1;
    var w = 1;
    var d = 1;
    var $ = 0;
    var g = "";
    var m = c;
    var x = s;
    var y = n;
    var j = g;
    while(w)switch(h = $, $ = $49c0f7d58998f387$export$48cfd1e771a65c4f()){
        case 40:
            if (h != 108 && $49c0f7d58998f387$export$a9db5e087081082d(j, l - 1) == 58) {
                if ($49c0f7d58998f387$export$f8e21b1e77979a08(j += $49c0f7d58998f387$export$77ad94ebf1c2b9ed($49c0f7d58998f387$export$410ac95b9ec204b8($), "&", "&\f"), "&\f") != -1) d = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            j += $49c0f7d58998f387$export$410ac95b9ec204b8($);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            j += $49c0f7d58998f387$export$7af1228ff777d175(h);
            break;
        case 92:
            j += $49c0f7d58998f387$export$955ba06d119e085e($49c0f7d58998f387$export$e88cb2efb12ae807() - 1, 7);
            continue;
        case 47:
            switch($49c0f7d58998f387$export$4d3fb11e950abb9e()){
                case 42:
                case 47:
                    $49c0f7d58998f387$export$10d8903dec122b9d($49c0f7d58998f387$export$4a34f930e789283c($49c0f7d58998f387$export$4254d4e2b3745c4c($49c0f7d58998f387$export$48cfd1e771a65c4f(), $49c0f7d58998f387$export$e88cb2efb12ae807()), r, a), i);
                    break;
                default:
                    j += "/";
            }
            break;
        case 123 * b:
            u[f++] = $49c0f7d58998f387$export$36776f635604f274(j) * d;
        case 125 * b:
        case 59:
        case 0:
            switch($){
                case 0:
                case 125:
                    w = 0;
                case 59 + o:
                    if (d == -1) j = $49c0f7d58998f387$export$77ad94ebf1c2b9ed(j, /\f/g, "");
                    if (p > 0 && $49c0f7d58998f387$export$36776f635604f274(j) - l) $49c0f7d58998f387$export$10d8903dec122b9d(p > 32 ? $49c0f7d58998f387$export$f8483753829ec8f3(j + ";", n, a, l - 1) : $49c0f7d58998f387$export$f8483753829ec8f3($49c0f7d58998f387$export$77ad94ebf1c2b9ed(j, " ", "") + ";", n, a, l - 2), i);
                    break;
                case 59:
                    j += ";";
                default:
                    $49c0f7d58998f387$export$10d8903dec122b9d(y = $49c0f7d58998f387$export$3307ffa7023ede1e(j, r, a, f, o, c, u, g, m = [], x = [], l), s);
                    if ($ === 123) {
                        if (o === 0) $49c0f7d58998f387$export$98e6a39c04603d36(j, r, y, y, m, s, l, u, x);
                        else switch(v === 99 && $49c0f7d58998f387$export$a9db5e087081082d(j, 3) === 110 ? 100 : v){
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                $49c0f7d58998f387$export$98e6a39c04603d36(e, y, y, n && $49c0f7d58998f387$export$10d8903dec122b9d($49c0f7d58998f387$export$3307ffa7023ede1e(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
                                break;
                            default:
                                $49c0f7d58998f387$export$98e6a39c04603d36(j, y, y, y, [
                                    ""
                                ], x, 0, u, x);
                        }
                    }
            }
            f = o = p = 0, b = d = 1, g = j = "", l = t;
            break;
        case 58:
            l = 1 + $49c0f7d58998f387$export$36776f635604f274(j), p = h;
        default:
            if (b < 1) {
                if ($ == 123) --b;
                else if ($ == 125 && b++ == 0 && $49c0f7d58998f387$export$232faf9add678146() == 125) continue;
            }
            switch(j += $49c0f7d58998f387$export$6788812c4e6611e6($), $ * b){
                case 38:
                    d = o > 0 ? 1 : (j += "\f", -1);
                    break;
                case 44:
                    u[f++] = ($49c0f7d58998f387$export$36776f635604f274(j) - 1) * d, d = 1;
                    break;
                case 64:
                    if ($49c0f7d58998f387$export$4d3fb11e950abb9e() === 45) j += $49c0f7d58998f387$export$410ac95b9ec204b8($49c0f7d58998f387$export$48cfd1e771a65c4f());
                    v = $49c0f7d58998f387$export$4d3fb11e950abb9e(), o = l = $49c0f7d58998f387$export$36776f635604f274(g = j += $49c0f7d58998f387$export$c2ab62c7bf24634($49c0f7d58998f387$export$e88cb2efb12ae807())), $++;
                    break;
                case 45:
                    if (h === 45 && $49c0f7d58998f387$export$36776f635604f274(j) == 2) b = 0;
            }
    }
    return s;
}
function $49c0f7d58998f387$export$3307ffa7023ede1e(e, r, a, n, s, t, u, i, f, o, l) {
    var v = s - 1;
    var p = s === 0 ? t : [
        ""
    ];
    var h = $49c0f7d58998f387$export$f9084667e487ed46(p);
    for(var b = 0, w = 0, d = 0; b < n; ++b)for(var $ = 0, k = $49c0f7d58998f387$export$2f35ab04d2335697(e, v + 1, v = $49c0f7d58998f387$export$2335f513bbd82c6d(w = u[b])), m = e; $ < h; ++$)if (m = $49c0f7d58998f387$export$87c2784dc9fc4ab(w > 0 ? p[$] + " " + k : $49c0f7d58998f387$export$77ad94ebf1c2b9ed(k, /&\f/g, p[$]))) f[d++] = m;
    return $49c0f7d58998f387$export$35059013cd4a06db(e, r, a, s === 0 ? $49c0f7d58998f387$export$aa3a2e812ca8570d : i, f, o, l);
}
function $49c0f7d58998f387$export$4a34f930e789283c(e, r, a) {
    return $49c0f7d58998f387$export$35059013cd4a06db(e, r, a, $49c0f7d58998f387$export$a29989082612d0d9, $49c0f7d58998f387$export$6788812c4e6611e6($49c0f7d58998f387$export$eba6f6f03b0a92e7()), $49c0f7d58998f387$export$2f35ab04d2335697(e, 2, -2), 0);
}
function $49c0f7d58998f387$export$f8483753829ec8f3(e, r, a, n) {
    return $49c0f7d58998f387$export$35059013cd4a06db(e, r, a, $49c0f7d58998f387$export$527d108ccf083c2b, $49c0f7d58998f387$export$2f35ab04d2335697(e, 0, n), $49c0f7d58998f387$export$2f35ab04d2335697(e, n + 1, -1), n);
}
function $49c0f7d58998f387$export$82e9f45cca5ba907(n, c, s) {
    switch($49c0f7d58998f387$export$d6af199866bfb566(n, c)){
        case 5103:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + "print-" + n + n;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + n;
        case 4789:
            return $49c0f7d58998f387$export$2c0f367103c8d01c + n + n;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$2c0f367103c8d01c + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + n + n;
        case 5936:
            switch($49c0f7d58998f387$export$a9db5e087081082d(n, c + 11)){
                case 114:
                    return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
                case 108:
                    return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
                case 45:
                    return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
            }
        case 6828:
        case 4268:
        case 2903:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + n + n;
        case 6165:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "flex-" + n + n;
        case 5187:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(\w+).+(:[^]+)/, $49c0f7d58998f387$export$39dfd62a25e0fe93 + "box-$1$2" + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "flex-$1$2") + n;
        case 5443:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "flex-item-" + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /flex-|-self/g, "") + (!$49c0f7d58998f387$export$4659b591c19bdf3d(n, /flex-|baseline/) ? $49c0f7d58998f387$export$71ad59f2e432cfe8 + "grid-row-" + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /flex-|-self/g, "") : "") + n;
        case 4675:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "flex-line-pack" + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /align-content|flex-|-self/g, "") + n;
        case 5548:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "shrink", "negative") + n;
        case 5292:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "basis", "preferred-size") + n;
        case 6060:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + "box-" + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "-grow", "") + $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "grow", "positive") + n;
        case 4554:
            return $49c0f7d58998f387$export$39dfd62a25e0fe93 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /([^-])(transform)/g, "$1" + $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$2") + n;
        case 6187:
            return $49c0f7d58998f387$export$77ad94ebf1c2b9ed($49c0f7d58998f387$export$77ad94ebf1c2b9ed($49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(zoom-|grab)/, $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$1"), /(image-set)/, $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$1"), n, "") + n;
        case 5495:
        case 3959:
            return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(image-set\([^]*)/, $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$1" + "$`$1");
        case 4968:
            return $49c0f7d58998f387$export$77ad94ebf1c2b9ed($49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(.+:)(flex-)?(.*)/, $49c0f7d58998f387$export$39dfd62a25e0fe93 + "box-pack:$3" + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $49c0f7d58998f387$export$39dfd62a25e0fe93 + n + n;
        case 4200:
            if (!$49c0f7d58998f387$export$4659b591c19bdf3d(n, /flex-|baseline/)) return $49c0f7d58998f387$export$71ad59f2e432cfe8 + "grid-column-align" + $49c0f7d58998f387$export$2f35ab04d2335697(n, c) + n;
            break;
        case 2592:
        case 3360:
            return $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "template-", "") + n;
        case 4384:
        case 3616:
            if (s && s.some(function(e, r) {
                return c = r, $49c0f7d58998f387$export$4659b591c19bdf3d(e.props, /grid-\w+-end/);
            })) return ~$49c0f7d58998f387$export$f8e21b1e77979a08(n + (s = s[c].value), "span") ? n : $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "-start", "") + n + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "grid-row-span:" + (~$49c0f7d58998f387$export$f8e21b1e77979a08(s, "span") ? $49c0f7d58998f387$export$4659b591c19bdf3d(s, /\d+/) : +$49c0f7d58998f387$export$4659b591c19bdf3d(s, /\d+/) - +$49c0f7d58998f387$export$4659b591c19bdf3d(n, /\d+/)) + ";";
            return $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "-start", "") + n;
        case 4896:
        case 4128:
            return s && s.some(function(e) {
                return $49c0f7d58998f387$export$4659b591c19bdf3d(e.props, /grid-\w+-start/);
            }) ? n : $49c0f7d58998f387$export$71ad59f2e432cfe8 + $49c0f7d58998f387$export$77ad94ebf1c2b9ed($49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "-end", "-span"), "span ", "") + n;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(.+)-inline(.+)/, $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$1$2") + n;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if ($49c0f7d58998f387$export$36776f635604f274(n) - 1 - c > 6) switch($49c0f7d58998f387$export$a9db5e087081082d(n, c + 1)){
                case 109:
                    if ($49c0f7d58998f387$export$a9db5e087081082d(n, c + 4) !== 45) break;
                case 102:
                    return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(.+:)(.+)-([^]+)/, "$1" + $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$2-$3" + "$1" + $49c0f7d58998f387$export$2c0f367103c8d01c + ($49c0f7d58998f387$export$a9db5e087081082d(n, c + 3) == 108 ? "$3" : "$2-$3")) + n;
                case 115:
                    return ~$49c0f7d58998f387$export$f8e21b1e77979a08(n, "stretch") ? $49c0f7d58998f387$export$82e9f45cca5ba907($49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "stretch", "fill-available"), c, s) + n : n;
            }
            break;
        case 5152:
        case 5920:
            return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, a, c, s, t, u, i) {
                return $49c0f7d58998f387$export$71ad59f2e432cfe8 + a + ":" + c + i + (s ? $49c0f7d58998f387$export$71ad59f2e432cfe8 + a + "-span:" + (t ? u : +u - +c) + i : "") + n;
            });
        case 4949:
            if ($49c0f7d58998f387$export$a9db5e087081082d(n, c + 6) === 121) return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, ":", ":" + $49c0f7d58998f387$export$39dfd62a25e0fe93) + n;
            break;
        case 6444:
            switch($49c0f7d58998f387$export$a9db5e087081082d(n, $49c0f7d58998f387$export$a9db5e087081082d(n, 14) === 45 ? 18 : 11)){
                case 120:
                    return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $49c0f7d58998f387$export$39dfd62a25e0fe93 + ($49c0f7d58998f387$export$a9db5e087081082d(n, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + $49c0f7d58998f387$export$39dfd62a25e0fe93 + "$2$3" + "$1" + $49c0f7d58998f387$export$71ad59f2e432cfe8 + "$2box$3") + n;
                case 100:
                    return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, ":", ":" + $49c0f7d58998f387$export$71ad59f2e432cfe8) + n;
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n, "scroll-", "scroll-snap-") + n;
    }
    return n;
}
function $49c0f7d58998f387$export$dfdc1655ccc5b9cb(e, r) {
    var a = "";
    var n = $49c0f7d58998f387$export$f9084667e487ed46(e);
    for(var c = 0; c < n; c++)a += r(e[c], c, e, r) || "";
    return a;
}
function $49c0f7d58998f387$export$fac44ee5b035f737(e, r, a, t) {
    switch(e.type){
        case $49c0f7d58998f387$export$d773506282b3cfe6:
            if (e.children.length) break;
        case $49c0f7d58998f387$export$a763edbf796b780a:
        case $49c0f7d58998f387$export$527d108ccf083c2b:
            return e.return = e.return || e.value;
        case $49c0f7d58998f387$export$a29989082612d0d9:
            return "";
        case $49c0f7d58998f387$export$b44a8529a35fcb60:
            return e.return = e.value + "{" + $49c0f7d58998f387$export$dfdc1655ccc5b9cb(e.children, t) + "}";
        case $49c0f7d58998f387$export$aa3a2e812ca8570d:
            e.value = e.props.join(",");
    }
    return $49c0f7d58998f387$export$36776f635604f274(a = $49c0f7d58998f387$export$dfdc1655ccc5b9cb(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function $49c0f7d58998f387$export$5a7767152ae0305f(e) {
    var r = $49c0f7d58998f387$export$f9084667e487ed46(e);
    return function(a, n, c, s) {
        var t = "";
        for(var u = 0; u < r; u++)t += e[u](a, n, c, s) || "";
        return t;
    };
}
function $49c0f7d58998f387$export$38bcb760f1d4871c(e) {
    return function(r) {
        if (!r.root) {
            if (r = r.return) e(r);
        }
    };
}
function $49c0f7d58998f387$export$e08c7d021b829b7a(n, t, u, i) {
    if (n.length > -1) {
        if (!n.return) switch(n.type){
            case $49c0f7d58998f387$export$527d108ccf083c2b:
                n.return = $49c0f7d58998f387$export$82e9f45cca5ba907(n.value, n.length, u);
                return;
            case $49c0f7d58998f387$export$b44a8529a35fcb60:
                return $49c0f7d58998f387$export$dfdc1655ccc5b9cb([
                    $49c0f7d58998f387$export$784d13d8ee351f07(n, {
                        value: $49c0f7d58998f387$export$77ad94ebf1c2b9ed(n.value, "@", "@" + $49c0f7d58998f387$export$39dfd62a25e0fe93)
                    })
                ], i);
            case $49c0f7d58998f387$export$aa3a2e812ca8570d:
                if (n.length) return $49c0f7d58998f387$export$1be1fc439b849fdf(n.props, function(c) {
                    switch($49c0f7d58998f387$export$4659b591c19bdf3d(c, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return $49c0f7d58998f387$export$dfdc1655ccc5b9cb([
                                $49c0f7d58998f387$export$784d13d8ee351f07(n, {
                                    props: [
                                        $49c0f7d58998f387$export$77ad94ebf1c2b9ed(c, /:(read-\w+)/, ":" + $49c0f7d58998f387$export$2c0f367103c8d01c + "$1")
                                    ]
                                })
                            ], i);
                        case "::placeholder":
                            return $49c0f7d58998f387$export$dfdc1655ccc5b9cb([
                                $49c0f7d58998f387$export$784d13d8ee351f07(n, {
                                    props: [
                                        $49c0f7d58998f387$export$77ad94ebf1c2b9ed(c, /:(plac\w+)/, ":" + $49c0f7d58998f387$export$39dfd62a25e0fe93 + "input-$1")
                                    ]
                                }),
                                $49c0f7d58998f387$export$784d13d8ee351f07(n, {
                                    props: [
                                        $49c0f7d58998f387$export$77ad94ebf1c2b9ed(c, /:(plac\w+)/, ":" + $49c0f7d58998f387$export$2c0f367103c8d01c + "$1")
                                    ]
                                }),
                                $49c0f7d58998f387$export$784d13d8ee351f07(n, {
                                    props: [
                                        $49c0f7d58998f387$export$77ad94ebf1c2b9ed(c, /:(plac\w+)/, $49c0f7d58998f387$export$71ad59f2e432cfe8 + "input-$1")
                                    ]
                                })
                            ], i);
                    }
                    return "";
                });
        }
    }
}
function $49c0f7d58998f387$export$76a88f7de6507443(e) {
    switch(e.type){
        case $49c0f7d58998f387$export$aa3a2e812ca8570d:
            e.props = e.props.map(function(r) {
                return $49c0f7d58998f387$export$1be1fc439b849fdf($49c0f7d58998f387$export$660b2ee2d4fb4eff(r), function(r, a, n) {
                    switch($49c0f7d58998f387$export$a9db5e087081082d(r, 0)){
                        case 12:
                            return $49c0f7d58998f387$export$2f35ab04d2335697(r, 1, $49c0f7d58998f387$export$36776f635604f274(r));
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return r;
                        case 58:
                            if (n[++a] === "global") n[a] = "", n[++a] = "\f" + $49c0f7d58998f387$export$2f35ab04d2335697(n[a], a = 1, -1);
                        case 32:
                            return a === 1 ? "" : r;
                        default:
                            switch(a){
                                case 0:
                                    e = r;
                                    return $49c0f7d58998f387$export$f9084667e487ed46(n) > 1 ? "" : r;
                                case a = $49c0f7d58998f387$export$f9084667e487ed46(n) - 1:
                                case 2:
                                    return a === 2 ? r + e + e : r + e;
                                default:
                                    return r;
                            }
                    }
                });
            });
    }
}

});

parcelRequire.register("kj1eP", function(module, exports) {

$parcel$export(module.exports, "default", () => $ec868adc3541b52b$export$2e2bcd8739ae039);

var $dQAcw = parcelRequire("dQAcw");

var $lfXim = parcelRequire("lfXim");

var $lvYIa = parcelRequire("lvYIa");

var $jL8wv = parcelRequire("jL8wv");

var $lF56f = parcelRequire("lF56f");

var $fgGs9 = parcelRequire("fgGs9");

var $1PJSF = parcelRequire("1PJSF");

var $estf3 = parcelRequire("estf3");
/** `Object#toString` result references. */ var $ec868adc3541b52b$var$mapTag = "[object Map]", $ec868adc3541b52b$var$setTag = "[object Set]";
/** Used for built-in method references. */ var $ec868adc3541b52b$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $ec868adc3541b52b$var$hasOwnProperty = $ec868adc3541b52b$var$objectProto.hasOwnProperty;
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */ function $ec868adc3541b52b$var$isEmpty(value) {
    if (value == null) return true;
    if ((0, $lF56f.default)(value) && ((0, $jL8wv.default)(value) || typeof value == "string" || typeof value.splice == "function" || (0, $fgGs9.default)(value) || (0, $estf3.default)(value) || (0, $lvYIa.default)(value))) return !value.length;
    var tag = (0, $lfXim.default)(value);
    if (tag == $ec868adc3541b52b$var$mapTag || tag == $ec868adc3541b52b$var$setTag) return !value.size;
    if ((0, $1PJSF.default)(value)) return !(0, $dQAcw.default)(value).length;
    for(var key in value){
        if ($ec868adc3541b52b$var$hasOwnProperty.call(value, key)) return false;
    }
    return true;
}
var $ec868adc3541b52b$export$2e2bcd8739ae039 = $ec868adc3541b52b$var$isEmpty;

});
parcelRequire.register("dQAcw", function(module, exports) {

$parcel$export(module.exports, "default", () => $a14c366ee5db6ed4$export$2e2bcd8739ae039);

var $1PJSF = parcelRequire("1PJSF");

var $4mrht = parcelRequire("4mrht");
/** Used for built-in method references. */ var $a14c366ee5db6ed4$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $a14c366ee5db6ed4$var$hasOwnProperty = $a14c366ee5db6ed4$var$objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function $a14c366ee5db6ed4$var$baseKeys(object) {
    if (!(0, $1PJSF.default)(object)) return (0, $4mrht.default)(object);
    var result = [];
    for(var key in Object(object))if ($a14c366ee5db6ed4$var$hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
var $a14c366ee5db6ed4$export$2e2bcd8739ae039 = $a14c366ee5db6ed4$var$baseKeys;

});
parcelRequire.register("1PJSF", function(module, exports) {

$parcel$export(module.exports, "default", () => $155e24d218024a52$export$2e2bcd8739ae039);
/** Used for built-in method references. */ var $155e24d218024a52$var$objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function $155e24d218024a52$var$isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || $155e24d218024a52$var$objectProto;
    return value === proto;
}
var $155e24d218024a52$export$2e2bcd8739ae039 = $155e24d218024a52$var$isPrototype;

});

parcelRequire.register("4mrht", function(module, exports) {

$parcel$export(module.exports, "default", () => $32ce60eb07e7363d$export$2e2bcd8739ae039);

var $fcUED = parcelRequire("fcUED");
/* Built-in method references for those with the same name as other `lodash` methods. */ var $32ce60eb07e7363d$var$nativeKeys = (0, $fcUED.default)(Object.keys, Object);
var $32ce60eb07e7363d$export$2e2bcd8739ae039 = $32ce60eb07e7363d$var$nativeKeys;

});
parcelRequire.register("fcUED", function(module, exports) {

$parcel$export(module.exports, "default", () => $b123ec645d0738d2$export$2e2bcd8739ae039);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function $b123ec645d0738d2$var$overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
var $b123ec645d0738d2$export$2e2bcd8739ae039 = $b123ec645d0738d2$var$overArg;

});



parcelRequire.register("lfXim", function(module, exports) {

$parcel$export(module.exports, "default", () => $f798fe73a7a0eca9$export$2e2bcd8739ae039);

var $hvARf = parcelRequire("hvARf");

var $8huh4 = parcelRequire("8huh4");

var $eEOTM = parcelRequire("eEOTM");

var $kb9XV = parcelRequire("kb9XV");

var $1tGwH = parcelRequire("1tGwH");

var $6AgQp = parcelRequire("6AgQp");

var $lSWIU = parcelRequire("lSWIU");
/** `Object#toString` result references. */ var $f798fe73a7a0eca9$var$mapTag = "[object Map]", $f798fe73a7a0eca9$var$objectTag = "[object Object]", $f798fe73a7a0eca9$var$promiseTag = "[object Promise]", $f798fe73a7a0eca9$var$setTag = "[object Set]", $f798fe73a7a0eca9$var$weakMapTag = "[object WeakMap]";
var $f798fe73a7a0eca9$var$dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var $f798fe73a7a0eca9$var$dataViewCtorString = (0, $lSWIU.default)((0, $hvARf.default)), $f798fe73a7a0eca9$var$mapCtorString = (0, $lSWIU.default)((0, $8huh4.default)), $f798fe73a7a0eca9$var$promiseCtorString = (0, $lSWIU.default)((0, $eEOTM.default)), $f798fe73a7a0eca9$var$setCtorString = (0, $lSWIU.default)((0, $kb9XV.default)), $f798fe73a7a0eca9$var$weakMapCtorString = (0, $lSWIU.default)((0, $1tGwH.default));
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var $f798fe73a7a0eca9$var$getTag = (0, $6AgQp.default);
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((0, $hvARf.default) && $f798fe73a7a0eca9$var$getTag(new (0, $hvARf.default)(new ArrayBuffer(1))) != $f798fe73a7a0eca9$var$dataViewTag || (0, $8huh4.default) && $f798fe73a7a0eca9$var$getTag(new (0, $8huh4.default)) != $f798fe73a7a0eca9$var$mapTag || (0, $eEOTM.default) && $f798fe73a7a0eca9$var$getTag((0, $eEOTM.default).resolve()) != $f798fe73a7a0eca9$var$promiseTag || (0, $kb9XV.default) && $f798fe73a7a0eca9$var$getTag(new (0, $kb9XV.default)) != $f798fe73a7a0eca9$var$setTag || (0, $1tGwH.default) && $f798fe73a7a0eca9$var$getTag(new (0, $1tGwH.default)) != $f798fe73a7a0eca9$var$weakMapTag) $f798fe73a7a0eca9$var$getTag = function(value) {
    var result = (0, $6AgQp.default)(value), Ctor = result == $f798fe73a7a0eca9$var$objectTag ? value.constructor : undefined, ctorString = Ctor ? (0, $lSWIU.default)(Ctor) : "";
    if (ctorString) switch(ctorString){
        case $f798fe73a7a0eca9$var$dataViewCtorString:
            return $f798fe73a7a0eca9$var$dataViewTag;
        case $f798fe73a7a0eca9$var$mapCtorString:
            return $f798fe73a7a0eca9$var$mapTag;
        case $f798fe73a7a0eca9$var$promiseCtorString:
            return $f798fe73a7a0eca9$var$promiseTag;
        case $f798fe73a7a0eca9$var$setCtorString:
            return $f798fe73a7a0eca9$var$setTag;
        case $f798fe73a7a0eca9$var$weakMapCtorString:
            return $f798fe73a7a0eca9$var$weakMapTag;
    }
    return result;
};
var $f798fe73a7a0eca9$export$2e2bcd8739ae039 = $f798fe73a7a0eca9$var$getTag;

});
parcelRequire.register("hvARf", function(module, exports) {

$parcel$export(module.exports, "default", () => $cbf1ec18e981fc93$export$2e2bcd8739ae039);

var $4JYFm = parcelRequire("4JYFm");

var $dxa8D = parcelRequire("dxa8D");
/* Built-in method references that are verified to be native. */ var $cbf1ec18e981fc93$var$DataView = (0, $4JYFm.default)((0, $dxa8D.default), "DataView");
var $cbf1ec18e981fc93$export$2e2bcd8739ae039 = $cbf1ec18e981fc93$var$DataView;

});

parcelRequire.register("eEOTM", function(module, exports) {

$parcel$export(module.exports, "default", () => $aabc48890b92f4ba$export$2e2bcd8739ae039);

var $4JYFm = parcelRequire("4JYFm");

var $dxa8D = parcelRequire("dxa8D");
/* Built-in method references that are verified to be native. */ var $aabc48890b92f4ba$var$Promise = (0, $4JYFm.default)((0, $dxa8D.default), "Promise");
var $aabc48890b92f4ba$export$2e2bcd8739ae039 = $aabc48890b92f4ba$var$Promise;

});

parcelRequire.register("kb9XV", function(module, exports) {

$parcel$export(module.exports, "default", () => $eb0c90ac63b58089$export$2e2bcd8739ae039);

var $4JYFm = parcelRequire("4JYFm");

var $dxa8D = parcelRequire("dxa8D");
/* Built-in method references that are verified to be native. */ var $eb0c90ac63b58089$var$Set = (0, $4JYFm.default)((0, $dxa8D.default), "Set");
var $eb0c90ac63b58089$export$2e2bcd8739ae039 = $eb0c90ac63b58089$var$Set;

});

parcelRequire.register("1tGwH", function(module, exports) {

$parcel$export(module.exports, "default", () => $11397cba313964fd$export$2e2bcd8739ae039);

var $4JYFm = parcelRequire("4JYFm");

var $dxa8D = parcelRequire("dxa8D");
/* Built-in method references that are verified to be native. */ var $11397cba313964fd$var$WeakMap = (0, $4JYFm.default)((0, $dxa8D.default), "WeakMap");
var $11397cba313964fd$export$2e2bcd8739ae039 = $11397cba313964fd$var$WeakMap;

});


parcelRequire.register("lvYIa", function(module, exports) {

$parcel$export(module.exports, "default", () => $fa9b963749568d5c$export$2e2bcd8739ae039);

var $9FBpt = parcelRequire("9FBpt");

var $f1man = parcelRequire("f1man");
/** Used for built-in method references. */ var $fa9b963749568d5c$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */ var $fa9b963749568d5c$var$hasOwnProperty = $fa9b963749568d5c$var$objectProto.hasOwnProperty;
/** Built-in value references. */ var $fa9b963749568d5c$var$propertyIsEnumerable = $fa9b963749568d5c$var$objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var $fa9b963749568d5c$var$isArguments = (0, $9FBpt.default)(function() {
    return arguments;
}()) ? (0, $9FBpt.default) : function(value) {
    return (0, $f1man.default)(value) && $fa9b963749568d5c$var$hasOwnProperty.call(value, "callee") && !$fa9b963749568d5c$var$propertyIsEnumerable.call(value, "callee");
};
var $fa9b963749568d5c$export$2e2bcd8739ae039 = $fa9b963749568d5c$var$isArguments;

});
parcelRequire.register("9FBpt", function(module, exports) {

$parcel$export(module.exports, "default", () => $70a4f639ec7379b6$export$2e2bcd8739ae039);

var $6AgQp = parcelRequire("6AgQp");

var $f1man = parcelRequire("f1man");
/** `Object#toString` result references. */ var $70a4f639ec7379b6$var$argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function $70a4f639ec7379b6$var$baseIsArguments(value) {
    return (0, $f1man.default)(value) && (0, $6AgQp.default)(value) == $70a4f639ec7379b6$var$argsTag;
}
var $70a4f639ec7379b6$export$2e2bcd8739ae039 = $70a4f639ec7379b6$var$baseIsArguments;

});
parcelRequire.register("f1man", function(module, exports) {

$parcel$export(module.exports, "default", () => $aef824c4544b0d3b$export$2e2bcd8739ae039);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function $aef824c4544b0d3b$var$isObjectLike(value) {
    return value != null && typeof value == "object";
}
var $aef824c4544b0d3b$export$2e2bcd8739ae039 = $aef824c4544b0d3b$var$isObjectLike;

});



parcelRequire.register("jL8wv", function(module, exports) {

$parcel$export(module.exports, "default", () => $e62904a8ba7d8b04$export$2e2bcd8739ae039);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var $e62904a8ba7d8b04$var$isArray = Array.isArray;
var $e62904a8ba7d8b04$export$2e2bcd8739ae039 = $e62904a8ba7d8b04$var$isArray;

});

parcelRequire.register("lF56f", function(module, exports) {

$parcel$export(module.exports, "default", () => $fc51620a403fd9d6$export$2e2bcd8739ae039);

var $75Ujj = parcelRequire("75Ujj");

var $bTgYY = parcelRequire("bTgYY");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function $fc51620a403fd9d6$var$isArrayLike(value) {
    return value != null && (0, $bTgYY.default)(value.length) && !(0, $75Ujj.default)(value);
}
var $fc51620a403fd9d6$export$2e2bcd8739ae039 = $fc51620a403fd9d6$var$isArrayLike;

});
parcelRequire.register("bTgYY", function(module, exports) {

$parcel$export(module.exports, "default", () => $8a820126080bc49e$export$2e2bcd8739ae039);
/** Used as references for various `Number` constants. */ var $8a820126080bc49e$var$MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function $8a820126080bc49e$var$isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= $8a820126080bc49e$var$MAX_SAFE_INTEGER;
}
var $8a820126080bc49e$export$2e2bcd8739ae039 = $8a820126080bc49e$var$isLength;

});


parcelRequire.register("fgGs9", function(module, exports) {

$parcel$export(module.exports, "default", () => $b1d947ed32abc6e0$export$2e2bcd8739ae039);

var $dxa8D = parcelRequire("dxa8D");

var $cvCAj = parcelRequire("cvCAj");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? (0, $dxa8D.default).Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || (0, $cvCAj.default);
var $b1d947ed32abc6e0$export$2e2bcd8739ae039 = isBuffer;

});
parcelRequire.register("cvCAj", function(module, exports) {

$parcel$export(module.exports, "default", () => $91b64f6504bac45d$export$2e2bcd8739ae039);
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function $91b64f6504bac45d$var$stubFalse() {
    return false;
}
var $91b64f6504bac45d$export$2e2bcd8739ae039 = $91b64f6504bac45d$var$stubFalse;

});


parcelRequire.register("estf3", function(module, exports) {

$parcel$export(module.exports, "default", () => $a86a5d09d333f5ef$export$2e2bcd8739ae039);

var $3DEE9 = parcelRequire("3DEE9");

var $7ZGLx = parcelRequire("7ZGLx");

var $hRR3s = parcelRequire("hRR3s");
/* Node.js helper references. */ var $a86a5d09d333f5ef$var$nodeIsTypedArray = (0, $hRR3s.default) && (0, $hRR3s.default).isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var $a86a5d09d333f5ef$var$isTypedArray = $a86a5d09d333f5ef$var$nodeIsTypedArray ? (0, $7ZGLx.default)($a86a5d09d333f5ef$var$nodeIsTypedArray) : (0, $3DEE9.default);
var $a86a5d09d333f5ef$export$2e2bcd8739ae039 = $a86a5d09d333f5ef$var$isTypedArray;

});
parcelRequire.register("3DEE9", function(module, exports) {

$parcel$export(module.exports, "default", () => $2a648b2d8925a455$export$2e2bcd8739ae039);

var $6AgQp = parcelRequire("6AgQp");

var $bTgYY = parcelRequire("bTgYY");

var $f1man = parcelRequire("f1man");
/** `Object#toString` result references. */ var $2a648b2d8925a455$var$argsTag = "[object Arguments]", $2a648b2d8925a455$var$arrayTag = "[object Array]", $2a648b2d8925a455$var$boolTag = "[object Boolean]", $2a648b2d8925a455$var$dateTag = "[object Date]", $2a648b2d8925a455$var$errorTag = "[object Error]", $2a648b2d8925a455$var$funcTag = "[object Function]", $2a648b2d8925a455$var$mapTag = "[object Map]", $2a648b2d8925a455$var$numberTag = "[object Number]", $2a648b2d8925a455$var$objectTag = "[object Object]", $2a648b2d8925a455$var$regexpTag = "[object RegExp]", $2a648b2d8925a455$var$setTag = "[object Set]", $2a648b2d8925a455$var$stringTag = "[object String]", $2a648b2d8925a455$var$weakMapTag = "[object WeakMap]";
var $2a648b2d8925a455$var$arrayBufferTag = "[object ArrayBuffer]", $2a648b2d8925a455$var$dataViewTag = "[object DataView]", $2a648b2d8925a455$var$float32Tag = "[object Float32Array]", $2a648b2d8925a455$var$float64Tag = "[object Float64Array]", $2a648b2d8925a455$var$int8Tag = "[object Int8Array]", $2a648b2d8925a455$var$int16Tag = "[object Int16Array]", $2a648b2d8925a455$var$int32Tag = "[object Int32Array]", $2a648b2d8925a455$var$uint8Tag = "[object Uint8Array]", $2a648b2d8925a455$var$uint8ClampedTag = "[object Uint8ClampedArray]", $2a648b2d8925a455$var$uint16Tag = "[object Uint16Array]", $2a648b2d8925a455$var$uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var $2a648b2d8925a455$var$typedArrayTags = {};
$2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$float32Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$float64Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$int8Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$int16Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$int32Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$uint8Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$uint8ClampedTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$uint16Tag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$uint32Tag] = true;
$2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$argsTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$arrayTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$arrayBufferTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$boolTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$dataViewTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$dateTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$errorTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$funcTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$mapTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$numberTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$objectTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$regexpTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$setTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$stringTag] = $2a648b2d8925a455$var$typedArrayTags[$2a648b2d8925a455$var$weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function $2a648b2d8925a455$var$baseIsTypedArray(value) {
    return (0, $f1man.default)(value) && (0, $bTgYY.default)(value.length) && !!$2a648b2d8925a455$var$typedArrayTags[(0, $6AgQp.default)(value)];
}
var $2a648b2d8925a455$export$2e2bcd8739ae039 = $2a648b2d8925a455$var$baseIsTypedArray;

});

parcelRequire.register("7ZGLx", function(module, exports) {

$parcel$export(module.exports, "default", () => $5d1f6745c28be40d$export$2e2bcd8739ae039);
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function $5d1f6745c28be40d$var$baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
var $5d1f6745c28be40d$export$2e2bcd8739ae039 = $5d1f6745c28be40d$var$baseUnary;

});

parcelRequire.register("hRR3s", function(module, exports) {

$parcel$export(module.exports, "default", () => $d0208a79bba7e62a$export$2e2bcd8739ae039);

var $cSVE3 = parcelRequire("cSVE3");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && (0, $cSVE3.default).process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
var $d0208a79bba7e62a$export$2e2bcd8739ae039 = nodeUtil;

});



parcelRequire.register("bN7TY", function(module, exports) {
module.exports = import("./c4Diagram-9cddb37f.c7856419.js?" + Date.now()).then(()=>parcelRequire("aMoWQ"));

});

parcelRequire.register("fyRzG", function(module, exports) {
module.exports = import("./flowDiagram-93327f21.80561407.js?" + Date.now()).then(()=>parcelRequire("6kmY3"));

});

parcelRequire.register("8mYAb", function(module, exports) {
module.exports = import("./flowDiagram-v2-476db779.74a5ad5c.js?" + Date.now()).then(()=>parcelRequire("1V2Fn"));

});

parcelRequire.register("3wpYn", function(module, exports) {
module.exports = import("./erDiagram-f6946109.1cc198fb.js?" + Date.now()).then(()=>parcelRequire("kNm1C"));

});

parcelRequire.register("gAhAd", function(module, exports) {
module.exports = import("./gitGraphDiagram-1e960c50.6fdb0156.js?" + Date.now()).then(()=>parcelRequire("5otX2"));

});

parcelRequire.register("kZGqp", function(module, exports) {
module.exports = import("./ganttDiagram-7ce12d6b.7b5c5376.js?" + Date.now()).then(()=>parcelRequire("lD8tM"));

});

parcelRequire.register("c0Ue8", function(module, exports) {
module.exports = import("./infoDiagram-264bed3e.1dfdf299.js?" + Date.now()).then(()=>parcelRequire("dZApk"));

});

parcelRequire.register("3XxEn", function(module, exports) {
module.exports = import("./pieDiagram-157505fe.dfc6cc8b.js?" + Date.now()).then(()=>parcelRequire("f6im4"));

});

parcelRequire.register("3N3BA", function(module, exports) {
module.exports = import("./quadrantDiagram-fd70f2d0.553a050e.js?" + Date.now()).then(()=>parcelRequire("14pgl"));

});

parcelRequire.register("bWiCT", function(module, exports) {
module.exports = import("./requirementDiagram-19c99588.2df6cc25.js?" + Date.now()).then(()=>parcelRequire("ksroC"));

});

parcelRequire.register("cb1UV", function(module, exports) {
module.exports = import("./sequenceDiagram-5dfd0049.5c33b87e.js?" + Date.now()).then(()=>parcelRequire("i1sYb"));

});

parcelRequire.register("9j7Zw", function(module, exports) {
module.exports = import("./classDiagram-bc733c3b.03bfd90c.js?" + Date.now()).then(()=>parcelRequire("eIqV6"));

});

parcelRequire.register("2JBCR", function(module, exports) {
module.exports = import("./classDiagram-v2-8931bdaf.264e4f58.js?" + Date.now()).then(()=>parcelRequire("a3I97"));

});

parcelRequire.register("1UdKe", function(module, exports) {
module.exports = import("./stateDiagram-133e3642.1a82be12.js?" + Date.now()).then(()=>parcelRequire("2hUlv"));

});

parcelRequire.register("1bnvs", function(module, exports) {
module.exports = import("./stateDiagram-v2-6371a76b.549dc894.js?" + Date.now()).then(()=>parcelRequire("9VdJZ"));

});

parcelRequire.register("fJnyl", function(module, exports) {
module.exports = import("./journeyDiagram-31be0096.84793103.js?" + Date.now()).then(()=>parcelRequire("bkSb0"));

});

parcelRequire.register("1EOW0", function(module, exports) {
module.exports = import("./flowchart-elk-definition-5082a990.6095167c.js?" + Date.now()).then(()=>parcelRequire("gPrIh"));

});

parcelRequire.register("kramD", function(module, exports) {
module.exports = import("./timeline-definition-5ed366f4.17633109.js?" + Date.now()).then(()=>parcelRequire("Zvkr6"));

});

parcelRequire.register("kiktD", function(module, exports) {
module.exports = import("./mindmap-definition-4fc2557c.69b14e74.js?" + Date.now()).then(()=>parcelRequire("huyU8"));

});


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = window, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$n = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(n, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, n)=>{
    $def2de46b9306e8a$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $19fe8e3abedf4df0$var$s;
const $19fe8e3abedf4df0$var$e = window, $19fe8e3abedf4df0$var$r = $19fe8e3abedf4df0$var$e.trustedTypes, $19fe8e3abedf4df0$var$h = $19fe8e3abedf4df0$var$r ? $19fe8e3abedf4df0$var$r.emptyScript : "", $19fe8e3abedf4df0$var$o = $19fe8e3abedf4df0$var$e.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $19fe8e3abedf4df0$var$l = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
}, $19fe8e3abedf4df0$var$d = "finalized";
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $19fe8e3abedf4df0$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $19fe8e3abedf4df0$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d)) return !1;
        this[$19fe8e3abedf4df0$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $19fe8e3abedf4df0$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d] = !0, $19fe8e3abedf4df0$export$c7c07a37856565d.elementProperties = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $19fe8e3abedf4df0$var$o || $19fe8e3abedf4df0$var$o({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), (null !== ($19fe8e3abedf4df0$var$s = $19fe8e3abedf4df0$var$e.reactiveElementVersions) && void 0 !== $19fe8e3abedf4df0$var$s ? $19fe8e3abedf4df0$var$s : $19fe8e3abedf4df0$var$e.reactiveElementVersions = []).push("1.6.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $f58f44579a4747ac$var$t;
const $f58f44579a4747ac$var$i = window, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$o = "$lit$", $f58f44579a4747ac$var$n = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$l = "?" + $f58f44579a4747ac$var$n, $f58f44579a4747ac$var$h = `<${$f58f44579a4747ac$var$l}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$d = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$u = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$c = Array.isArray, $f58f44579a4747ac$var$v = (t)=>$f58f44579a4747ac$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $f58f44579a4747ac$var$a = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$a}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$a}*=${$f58f44579a4747ac$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$w(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$w(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$E = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129, null, !1), $f58f44579a4747ac$var$P = (t, i)=>{
    const s = t.length - 1, l = [];
    let r, d = 2 === i ? "<svg>" : "", u = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let e, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $f58f44579a4747ac$var$f ? "!--" === c[1] ? u = $f58f44579a4747ac$var$_ : void 0 !== c[1] ? u = $f58f44579a4747ac$var$m : void 0 !== c[2] ? ($f58f44579a4747ac$var$y.test(c[2]) && (r = RegExp("</" + c[2], "g")), u = $f58f44579a4747ac$var$p) : void 0 !== c[3] && (u = $f58f44579a4747ac$var$p) : u === $f58f44579a4747ac$var$p ? ">" === c[0] ? (u = null != r ? r : $f58f44579a4747ac$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, e = c[1], u = void 0 === c[3] ? $f58f44579a4747ac$var$p : '"' === c[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : u === $f58f44579a4747ac$var$$ || u === $f58f44579a4747ac$var$g ? u = $f58f44579a4747ac$var$p : u === $f58f44579a4747ac$var$_ || u === $f58f44579a4747ac$var$m ? u = $f58f44579a4747ac$var$f : (u = $f58f44579a4747ac$var$p, r = void 0);
        const w = u === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        d += u === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$h : v >= 0 ? (l.push(e), s.slice(0, v) + $f58f44579a4747ac$var$o + s.slice(v) + $f58f44579a4747ac$var$n + w) : s + $f58f44579a4747ac$var$n + (-2 === v ? (l.push(void 0), i) : w);
    }
    const c = d + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(c) : c,
        l
    ];
};
class $f58f44579a4747ac$var$V {
    constructor({ strings: t , _$litType$: i  }, e){
        let h;
        this.parts = [];
        let r = 0, u = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $f58f44579a4747ac$var$P(t, i);
        if (this.el = $f58f44579a4747ac$var$V.createElement(a, e), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $f58f44579a4747ac$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($f58f44579a4747ac$var$o) || i.startsWith($f58f44579a4747ac$var$n)) {
                        const s = f[u++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $f58f44579a4747ac$var$o).split($f58f44579a4747ac$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $f58f44579a4747ac$var$k : "?" === i[1] ? $f58f44579a4747ac$var$I : "@" === i[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$R
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($f58f44579a4747ac$var$y.test(h.tagName)) {
                    const t = h.textContent.split($f58f44579a4747ac$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $f58f44579a4747ac$var$d()), $f58f44579a4747ac$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $f58f44579a4747ac$var$d());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $f58f44579a4747ac$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($f58f44579a4747ac$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $f58f44579a4747ac$var$n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$N(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const d = $f58f44579a4747ac$var$u(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== d && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === d ? r = void 0 : (r = new d(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $f58f44579a4747ac$var$N(t, r._$AS(t, i.values), r, e)), i;
}
class $f58f44579a4747ac$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $f58f44579a4747ac$var$r).importNode(s, !0);
        $f58f44579a4747ac$var$C.currentNode = o;
        let n = $f58f44579a4747ac$var$C.nextNode(), l = 0, h = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i;
                2 === d.type ? i = new $f58f44579a4747ac$var$M(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new $f58f44579a4747ac$var$z(n, this, t)), this._$AV.push(i), d = e[++h];
            }
            l !== (null == d ? void 0 : d.index) && (n = $f58f44579a4747ac$var$C.nextNode(), l++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$M {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$N(this, t, i), $f58f44579a4747ac$var$u(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $f58f44579a4747ac$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$u(this._$AH) ? this._$AA.nextSibling.data = t : this.$($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $f58f44579a4747ac$var$V.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $f58f44579a4747ac$var$S(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$E.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$E.set(t.strings, i = new $f58f44579a4747ac$var$V(t)), i;
    }
    T(t) {
        $f58f44579a4747ac$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$M(this.k($f58f44579a4747ac$var$d()), this.k($f58f44579a4747ac$var$d()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $f58f44579a4747ac$var$R {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $f58f44579a4747ac$var$N(this, t, i, 0), n = !$f58f44579a4747ac$var$u(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $f58f44579a4747ac$var$N(this, e[s + l], i, l), h === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$f58f44579a4747ac$var$u(h) || h !== this._$AH[l]), h === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $f58f44579a4747ac$var$k extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $f58f44579a4747ac$var$H = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $f58f44579a4747ac$var$H) : this.element.removeAttribute(this.name);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$R {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $f58f44579a4747ac$var$N(this, t, i, 0)) && void 0 !== s ? s : $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $f58f44579a4747ac$export$45b790e32b2810ee && e !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (e === $f58f44579a4747ac$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$N(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    O: $f58f44579a4747ac$var$o,
    P: $f58f44579a4747ac$var$n,
    A: $f58f44579a4747ac$var$l,
    C: 1,
    M: $f58f44579a4747ac$var$P,
    L: $f58f44579a4747ac$var$S,
    D: $f58f44579a4747ac$var$v,
    R: $f58f44579a4747ac$var$N,
    I: $f58f44579a4747ac$var$M,
    V: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$I,
    N: $f58f44579a4747ac$var$L,
    U: $f58f44579a4747ac$var$k,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$i.litHtmlPolyfillSupport;
null == $f58f44579a4747ac$var$j || $f58f44579a4747ac$var$j($f58f44579a4747ac$var$V, $f58f44579a4747ac$var$M), (null !== ($f58f44579a4747ac$var$t = $f58f44579a4747ac$var$i.litHtmlVersions) && void 0 !== $f58f44579a4747ac$var$t ? $f58f44579a4747ac$var$t : $f58f44579a4747ac$var$i.litHtmlVersions = []).push("2.7.4");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $f58f44579a4747ac$var$M(i.insertBefore($f58f44579a4747ac$var$d(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $ab210b2da7b39b9d$var$l, $ab210b2da7b39b9d$var$o;
const $ab210b2da7b39b9d$export$8bf27daf9e8907c9 = (0, $19fe8e3abedf4df0$export$c7c07a37856565d);
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157.finalized = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, null === ($ab210b2da7b39b9d$var$l = globalThis.litElementHydrateSupport) || void 0 === $ab210b2da7b39b9d$var$l || $ab210b2da7b39b9d$var$l.call(globalThis, {
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$n = globalThis.litElementPolyfillSupport;
null == $ab210b2da7b39b9d$var$n || $ab210b2da7b39b9d$var$n({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($ab210b2da7b39b9d$var$o = globalThis.litElementVersions) && void 0 !== $ab210b2da7b39b9d$var$o ? $ab210b2da7b39b9d$var$o : globalThis.litElementVersions = []).push("3.3.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





var $040001cdf6cad6dd$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
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




var $8ZZbk = parcelRequire("8ZZbk");
class $bf513b85805031e6$export$510e2443662e7f2e extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    // private property
    _hass;
    // internal reactive states
    static get properties() {
        return {
            _header: {
                state: true
            },
            _mermaid: {
                state: true
            }
        };
    }
    // lifecycle interface
    setConfig(config) {
        this._header = config.header === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : config.header;
        this._mermaid = config.mermaid === "" ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : config.mermaid;
        // call set hass() to immediately adjust to a changed entity
        // while editing the entity in the card editor
        if (this._hass) this.hass = this._hass;
    }
    set hass(hass) {
        this._hass = hass;
    }
    updated() {
        const output = this.shadowRoot.getElementById("output");
        console.log(this._mermaid);
        (0, $8ZZbk.K).render("theGraph", this._mermaid).then((result)=>{
            output.innerHTML = result.svg;
            // 获取渲染后的SVG元素
            const svg = output.querySelector("svg");
            if (svg) {
                // 确保SVG有合适的viewBox
                if (!svg.hasAttribute("viewBox") && svg.hasAttribute("width") && svg.hasAttribute("height")) {
                    const width = parseFloat(svg.getAttribute("width"));
                    const height = parseFloat(svg.getAttribute("height"));
                    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
                }
                // 增加一点额外空间以适应下降字母
                svg.style.paddingBottom = "10px";
                // 找到所有文本元素并优化显示
                const textElements = svg.querySelectorAll("text");
                textElements.forEach((text)=>{
                    // 确保文本有适当的定位
                    if (!text.hasAttribute("dy")) text.setAttribute("dy", "0.3em");
                });
            }
        });
    }
    // declarative part
    static styles = (0, $040001cdf6cad6dd$export$2e2bcd8739ae039);
    render() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
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



class $fc7d6e547b6fcb14$export$85f4c027c39643a6 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            // hass: {},
            _config: {
                state: true
            }
        };
    }
    setConfig(config) {
        this._config = config;
    }
    static styles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
            .table {
                display: table;
            }
            .row {
                display: table-row;
            }
            .cell {
                display: table-cell;
                padding: 0.5em;
            }
        `;
    render() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <form class="table">
                <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="mermaid">Mermaid code:</label>
                    <textarea
                        @change="${this.handleChangedEvent}"
                        rows="10" class="value cell" id="mermaid"
                        >${this._config.mermaid}</textarea>
                </div>
            </form>
        `;
    }
    handleChangedEvent(changedEvent) {
        // this._config is readonly, copy needed
        var newConfig = Object.assign({}, this._config);
        if (changedEvent.target.id == "header") newConfig.header = changedEvent.target.value;
        else if (changedEvent.target.id == "mermaid") newConfig.mermaid = changedEvent.target.value;
        const messageEvent = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);
    }
}


customElements.define("mermaid-card", (0, $bf513b85805031e6$export$510e2443662e7f2e));
customElements.define("mermaid-card-editor", (0, $fc7d6e547b6fcb14$export$85f4c027c39643a6));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "mermaid-card",
    name: "Mermaid card",
    description: "Charts and diagrams"
});


//# sourceMappingURL=card.js.map
