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
parcelRequire.register("80tQT", function(module, exports) {

$parcel$export(module.exports, "c", () => $5d457ad1337dc442$export$db3b6bfb95261072);

var $8ZZbk = parcelRequire("8ZZbk");

var $jxLpw = parcelRequire("jxLpw");

var $7Sll6 = parcelRequire("7Sll6");
function $5d457ad1337dc442$var$preprocessMarkdown(markdown) {
    const withoutMultipleNewlines = markdown.replace(/\n{2,}/g, "\n");
    const withoutExtraSpaces = (0, $7Sll6.dedent)(withoutMultipleNewlines);
    return withoutExtraSpaces;
}
function $5d457ad1337dc442$var$markdownToLines(markdown) {
    const preprocessedMarkdown = $5d457ad1337dc442$var$preprocessMarkdown(markdown);
    const { children: children  } = (0, $jxLpw.fromMarkdown)(preprocessedMarkdown);
    const lines = [
        []
    ];
    let currentLine = 0;
    function processNode(node, parentType = "normal") {
        if (node.type === "text") {
            const textLines = node.value.split("\n");
            textLines.forEach((textLine, index)=>{
                if (index !== 0) {
                    currentLine++;
                    lines.push([]);
                }
                textLine.split(" ").forEach((word)=>{
                    if (word) lines[currentLine].push({
                        content: word,
                        type: parentType
                    });
                });
            });
        } else if (node.type === "strong" || node.type === "emphasis") node.children.forEach((contentNode)=>{
            processNode(contentNode, node.type);
        });
    }
    children.forEach((treeNode)=>{
        if (treeNode.type === "paragraph") treeNode.children.forEach((contentNode)=>{
            processNode(contentNode);
        });
    });
    return lines;
}
function $5d457ad1337dc442$var$markdownToHTML(markdown) {
    const { children: children  } = (0, $jxLpw.fromMarkdown)(markdown);
    function output(node) {
        if (node.type === "text") return node.value.replace(/\n/g, "<br/>");
        else if (node.type === "strong") return `<strong>${node.children.map(output).join("")}</strong>`;
        else if (node.type === "emphasis") return `<em>${node.children.map(output).join("")}</em>`;
        else if (node.type === "paragraph") return `<p>${node.children.map(output).join("")}</p>`;
        return `Unsupported markdown: ${node.type}`;
    }
    return children.map(output).join("");
}
function $5d457ad1337dc442$var$applyStyle(dom, styleFn) {
    if (styleFn) dom.attr("style", styleFn);
}
function $5d457ad1337dc442$var$addHtmlSpan(element, node, width, classes, addBackground = false) {
    const fo = element.append("foreignObject");
    const div = fo.append("xhtml:div");
    const label = node.label;
    const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
    div.html(`
    <span class="${labelClass} ${classes}" ` + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>");
    $5d457ad1337dc442$var$applyStyle(div, node.labelStyle);
    div.style("display", "table-cell");
    div.style("white-space", "nowrap");
    div.style("max-width", width + "px");
    div.attr("xmlns", "http://www.w3.org/1999/xhtml");
    if (addBackground) div.attr("class", "labelBkg");
    let bbox = div.node().getBoundingClientRect();
    if (bbox.width === width) {
        div.style("display", "table");
        div.style("white-space", "break-spaces");
        div.style("width", width + "px");
        bbox = div.node().getBoundingClientRect();
    }
    fo.style("width", bbox.width);
    fo.style("height", bbox.height);
    return fo.node();
}
function $5d457ad1337dc442$var$createTspan(textElement, lineIndex, lineHeight) {
    return textElement.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", lineIndex * lineHeight - 0.1 + "em").attr("dy", lineHeight + "em");
}
function $5d457ad1337dc442$var$computeWidthOfText(parentNode, lineHeight, text) {
    const testElement = parentNode.append("text");
    const testSpan = $5d457ad1337dc442$var$createTspan(testElement, 1, lineHeight);
    $5d457ad1337dc442$var$updateTextContentAndStyles(testSpan, [
        {
            content: text,
            type: "normal"
        }
    ]);
    const textLength = testSpan.node().getComputedTextLength();
    testElement.remove();
    return textLength;
}
function $5d457ad1337dc442$var$createFormattedText(width, g, structuredText, addBackground = false) {
    const lineHeight = 1.1;
    const labelGroup = g.append("g");
    let bkg = labelGroup.insert("rect").attr("class", "background");
    const textElement = labelGroup.append("text").attr("y", "-10.1");
    let lineIndex = 0;
    structuredText.forEach((line)=>{
        let fullStr = line.map((data)=>data.content).join(" ");
        let tempStr = "";
        let linesUnderWidth = [];
        let prevIndex = 0;
        if ($5d457ad1337dc442$var$computeWidthOfText(labelGroup, lineHeight, fullStr) <= width) linesUnderWidth.push(fullStr);
        else {
            for(let i = 0; i <= fullStr.length; i++){
                tempStr = fullStr.slice(prevIndex, i);
                (0, $8ZZbk.l).info(tempStr, prevIndex, i);
                if ($5d457ad1337dc442$var$computeWidthOfText(labelGroup, lineHeight, tempStr) > width) {
                    const subStr = fullStr.slice(prevIndex, i);
                    const lastSpaceIndex = subStr.lastIndexOf(" ");
                    if (lastSpaceIndex > -1) i = prevIndex + lastSpaceIndex + 1;
                    linesUnderWidth.push(fullStr.slice(prevIndex, i).trim());
                    prevIndex = i;
                    tempStr = null;
                }
            }
            if (tempStr != null) linesUnderWidth.push(tempStr);
        }
        const preparedLines = linesUnderWidth.map((w)=>({
                content: w,
                type: line.type
            }));
        for (const preparedLine of preparedLines){
            let tspan = $5d457ad1337dc442$var$createTspan(textElement, lineIndex, lineHeight);
            $5d457ad1337dc442$var$updateTextContentAndStyles(tspan, [
                preparedLine
            ]);
            lineIndex++;
        }
    });
    if (addBackground) {
        const bbox = textElement.node().getBBox();
        const padding = 2;
        bkg.attr("x", -padding).attr("y", -padding).attr("width", bbox.width + 2 * padding).attr("height", bbox.height + 2 * padding);
        return labelGroup.node();
    } else return textElement.node();
}
function $5d457ad1337dc442$var$updateTextContentAndStyles(tspan, wrappedLine) {
    tspan.text("");
    wrappedLine.forEach((word, index)=>{
        const innerTspan = tspan.append("tspan").attr("font-style", word.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", word.type === "strong" ? "bold" : "normal");
        if (index === 0) innerTspan.text(word.content);
        else innerTspan.text(" " + word.content);
    });
}
const $5d457ad1337dc442$export$db3b6bfb95261072 = (el, text = "", { style: style = "" , isTitle: isTitle = false , classes: classes = "" , useHtmlLabels: useHtmlLabels = true , isNode: isNode = true , width: width , addSvgBackground: addSvgBackground = false  } = {})=>{
    (0, $8ZZbk.l).info("createText", text, style, isTitle, classes, useHtmlLabels, isNode, addSvgBackground);
    if (useHtmlLabels) {
        const htmlText = $5d457ad1337dc442$var$markdownToHTML(text);
        const node = {
            isNode: isNode,
            label: (0, $8ZZbk.H)(htmlText).replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`),
            labelStyle: style.replace("fill:", "color:")
        };
        let vertexNode = $5d457ad1337dc442$var$addHtmlSpan(el, node, width, classes, addSvgBackground);
        return vertexNode;
    } else {
        const structuredText = $5d457ad1337dc442$var$markdownToLines(text);
        const svgLabel = $5d457ad1337dc442$var$createFormattedText(width, el, structuredText, addSvgBackground);
        return svgLabel;
    }
};

});
parcelRequire.register("jxLpw", function(module, exports) {

$parcel$export(module.exports, "fromMarkdown", () => $e3a5e027199d6c5f$export$d744d789c09bfde6);
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 *
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('mdast').ReferenceType} ReferenceType
 * @typedef {import('../index.js').CompileData} CompileData
 */ /**
 * @typedef {Root | Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 *
 * @typedef {Omit<UnistParent, 'type' | 'children'> & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 */ /**
 * @callback Transform
 *   Extra transform, to change the AST afterwards.
 * @param {Root} tree
 *   Tree to transform.
 * @returns {Root | undefined | null | void}
 *   New tree or nothing (in which case the current tree is used).
 *
 * @callback Handle
 *   Handle a token.
 * @param {CompileContext} this
 *   Context.
 * @param {Token} token
 *   Current token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 *
 * @callback OnEnterError
 *   Handle the case where the `right` token is open, but it is closed (by the
 *   `left` token) or because we reached the end of the document.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token | undefined} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @callback OnExitError
 *   Handle the case where the `right` token is open but it is closed by
 *   exiting the `left` token.
 * @param {Omit<CompileContext, 'sliceSerialize'>} this
 *   Context.
 * @param {Token} left
 *   Left token.
 * @param {Token} right
 *   Right token.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {[Token, OnEnterError | undefined]} TokenTuple
 *   Open token on the stack, with an optional error handler for when
 *   that token isn’t closed properly.
 */ /**
 * @typedef Config
 *   Configuration.
 *
 *   We have our defaults, but extensions will add more.
 * @property {Array<string>} canContainEols
 *   Token types where line endings are used.
 * @property {Handles} enter
 *   Opening handles.
 * @property {Handles} exit
 *   Closing handles.
 * @property {Array<Transform>} transforms
 *   Tree transforms.
 *
 * @typedef {Partial<Config>} Extension
 *   Change how markdown tokens from micromark are turned into mdast.
 *
 * @typedef CompileContext
 *   mdast compiler context.
 * @property {Array<Node | Fragment>} stack
 *   Stack of nodes.
 * @property {Array<TokenTuple>} tokenStack
 *   Stack of tokens.
 * @property {<Key extends keyof CompileData>(key: Key) => CompileData[Key]} getData
 *   Get data from the key/value store.
 * @property {<Key extends keyof CompileData>(key: Key, value?: CompileData[Key]) => void} setData
 *   Set data into the key/value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<Kind extends Node>(this: CompileContext, node: Kind, token: Token, onError?: OnEnterError) => Kind} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {Config} config
 *   Configuration.
 *
 * @typedef FromMarkdownOptions
 *   Configuration for how to build mdast.
 * @property {Array<Extension | Array<Extension>> | null | undefined} [mdastExtensions]
 *   Extensions for this utility to change how tokens are turned into a tree.
 *
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 *   Configuration.
 */ // To do: micromark: create a registry of tokens?
// To do: next major: don’t return given `Node` from `enter`.
// To do: next major: remove setter/getter.

var $2V7Cl = parcelRequire("2V7Cl");

var $cBokv = parcelRequire("cBokv");

var $6rOie = parcelRequire("6rOie");

var $lWHbp = parcelRequire("lWHbp");

var $g2Top = parcelRequire("g2Top");

var $fppVA = parcelRequire("fppVA");

var $dVUv9 = parcelRequire("dVUv9");

var $3f4Qu = parcelRequire("3f4Qu");

var $jz0iK = parcelRequire("jz0iK");
const $e3a5e027199d6c5f$var$own = {}.hasOwnProperty;
const $e3a5e027199d6c5f$export$d744d789c09bfde6 = /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */ /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */ function(value, encoding, options) {
    if (typeof encoding !== "string") {
        options = encoding;
        encoding = undefined;
    }
    return $e3a5e027199d6c5f$var$compiler(options)((0, $lWHbp.postprocess)((0, $cBokv.parse)(options).document().write((0, $6rOie.preprocess)()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */ function $e3a5e027199d6c5f$var$compiler(options) {
    /** @type {Config} */ const config = {
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    };
    $e3a5e027199d6c5f$var$configure(config, (options || {}).mdastExtensions || []);
    /** @type {CompileData} */ const data = {};
    return compile;
    /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: "root",
            children: []
        };
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack: [
                tree
            ],
            tokenStack: [],
            config: config,
            enter: enter,
            exit: exit,
            buffer: buffer,
            resume: resume,
            setData: setData,
            getData: getData
        };
        /** @type {Array<number>} */ const listStack = [];
        let index = -1;
        while(++index < events.length)// We preprocess lists to add `listItem` tokens, and to infer whether
        // items the list itself are spread out.
        if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
            if (events[index][0] === "enter") listStack.push(index);
            else {
                const tail = listStack.pop();
                index = prepareList(events, tail, index);
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if ($e3a5e027199d6c5f$var$own.call(handler, events[index][1].type)) handler[events[index][1].type].call(Object.assign({
                sliceSerialize: events[index][2].sliceSerialize
            }, context), events[index][1]);
        }
        // Handle tokens still being open.
        if (context.tokenStack.length > 0) {
            const tail = context.tokenStack[context.tokenStack.length - 1];
            const handler = tail[1] || $e3a5e027199d6c5f$var$defaultOnError;
            handler.call(context, undefined, tail[0]);
        }
        // Figure out `root` position.
        tree.position = {
            start: $e3a5e027199d6c5f$var$point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: $e3a5e027199d6c5f$var$point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        // Call transforms.
        index = -1;
        while(++index < config.transforms.length)tree = config.transforms[index](tree) || tree;
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token | undefined} */ let listItem;
        /** @type {number | undefined} */ let lineIndex;
        /** @type {number | undefined} */ let firstBlankLineIndex;
        /** @type {boolean | undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
                if (event[0] === "enter") containerBalance++;
                else containerBalance--;
                atMarker = undefined;
            } else if (event[1].type === "lineEndingBlank") {
                if (event[0] === "enter") {
                    if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) firstBlankLineIndex = index;
                    atMarker = undefined;
                }
            } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") ;
            else atMarker = undefined;
            if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                            if (tailEvent[0] === "exit") continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = "lineEndingBlank";
                                listSpread = true;
                            }
                            tailEvent[1].type = "lineEnding";
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") ;
                        else break;
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) listItem._spread = true;
                    // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        "exit",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                }
                // Create a new list item.
                if (event[1].type === "listItemPrefix") {
                    listItem = {
                        type: "listItem",
                        _spread: false,
                        start: Object.assign({}, event[1].start),
                        // @ts-expect-error: we’ll add `end` in a second.
                        end: undefined
                    };
                    // @ts-expect-error: `listItem` is most definitely defined, TS...
                    events.splice(index, 0, [
                        "enter",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        }
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * Set data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @param {CompileData[Key]} [value]
   *   New value.
   * @returns {void}
   *   Nothing.
   */ function setData(key, value) {
        data[key] = value;
    }
    /**
   * Get data.
   *
   * @template {keyof CompileData} Key
   *   Field type.
   * @param {Key} key
   *   Key of field.
   * @returns {CompileData[Key]}
   *   Value.
   */ function getData(key) {
        return data[key];
    }
    /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Node} create
   *   Create a node.
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function opener(create, and) {
        return open;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @returns {void}
   */ function buffer() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    /**
   * @template {Node} Kind
   *   Node type.
   * @this {CompileContext}
   *   Context.
   * @param {Kind} node
   *   Node to enter.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnEnterError | undefined} [errorHandler]
   *   Handle the case where this token is open, but it is closed by something else.
   * @returns {Kind}
   *   The given node.
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
        parent.children.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler
        ]);
        // @ts-expect-error: `end` will be patched later.
        node.position = {
            start: $e3a5e027199d6c5f$var$point(token.start)
        };
        return node;
    }
    /**
   * Create a closer handle.
   *
   * @param {Handle} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function closer(and) {
        return close;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   *   Context.
   * @param {Token} token
   *   Corresponding token.
   * @param {OnExitError | undefined} [onExitError]
   *   Handle the case where another token is open.
   * @returns {Node}
   *   The closed node.
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        const open = this.tokenStack.pop();
        if (!open) throw new Error("Cannot close `" + token.type + "` (" + (0, $jz0iK.stringifyPosition)({
            start: token.start,
            end: token.end
        }) + "): it’s not open");
        else if (open[0].type !== token.type) {
            if (onExitError) onExitError.call(this, token, open[0]);
            else {
                const handler = open[1] || $e3a5e027199d6c5f$var$defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        node.position.end = $e3a5e027199d6c5f$var$point(token.end);
        return node;
    }
    /**
   * @this {CompileContext}
   * @returns {string}
   */ function resume() {
        return (0, $2V7Cl.toString)(this.stack.pop());
    }
    //
    // Handlers.
    //
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
            const ancestor = this.stack[this.stack.length - 2];
            ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
            setData("expectingFirstListItemValue");
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.lang = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.meta = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (getData("flowCodeInside")) return;
        this.buffer();
        setData("flowCodeInside", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefenced() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodeindented() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data.replace(/(\r?\n|\r)$/g, "");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitionlabelstring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = (0, $dVUv9.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitatxheadingsequence(token) {
        const node = this.stack[this.stack.length - 1];
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            node.depth = depth;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadinglinesequence(token) {
        const node = this.stack[this.stack.length - 1];
        node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterdata(token) {
        const node = this.stack[this.stack.length - 1];
        let tail = node.children[node.children.length - 1];
        if (!tail || tail.type !== "text") {
            // Add a new text node.
            tail = text();
            // @ts-expect-error: we’ll add `end` later.
            tail.position = {
                start: $e3a5e027199d6c5f$var$point(token.start)
            };
            // @ts-expect-error: Assume `parent` accepts `text`.
            node.children.push(tail);
        }
        this.stack.push(tail);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdata(token) {
        const tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = $e3a5e027199d6c5f$var$point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        // If we’re at a hard break, include the line ending in there.
        if (getData("atHardBreak")) {
            const tail = context.children[context.children.length - 1];
            tail.position.end = $e3a5e027199d6c5f$var$point(token.end);
            setData("atHardBreak");
            return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithardbreak() {
        setData("atHardBreak", true);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmlflow() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmltext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodetext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlink() {
        const node = this.stack[this.stack.length - 1];
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (getData("inReference")) {
            /** @type {ReferenceType} */ const referenceType = getData("referenceType") || "shortcut";
            node.type += "Reference";
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        setData("referenceType");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitimage() {
        const node = this.stack[this.stack.length - 1];
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (getData("inReference")) {
            /** @type {ReferenceType} */ const referenceType = getData("referenceType") || "shortcut";
            node.type += "Reference";
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        setData("referenceType");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabeltext(token) {
        const string = this.sliceSerialize(token);
        const ancestor = this.stack[this.stack.length - 2];
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        ancestor.label = (0, $fppVA.decodeString)(string);
        // @ts-expect-error: same as above.
        ancestor.identifier = (0, $dVUv9.normalizeIdentifier)(string).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        const value = this.resume();
        const node = this.stack[this.stack.length - 1];
        // Assume a reference.
        setData("inReference", true);
        if (node.type === "link") {
            /** @type {Array<StaticPhrasingContent>} */ // @ts-expect-error: Assume static phrasing content.
            const children = fragment.children;
            node.children = children;
        } else node.alt = value;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresource() {
        setData("inReference");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterreference() {
        setData("referenceType", "collapsed");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        node.label = label;
        // @ts-expect-error: same as above.
        node.identifier = (0, $dVUv9.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();
        setData("referenceType", "full");
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = getData("characterReferenceType");
        /** @type {string} */ let value;
        if (type) {
            value = (0, $g2Top.decodeNumericCharacterReference)(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
            setData("characterReferenceType");
        } else {
            const result = (0, $3f4Qu.decodeNamedCharacterReference)(data);
            value = result;
        }
        const tail = this.stack.pop();
        tail.value += value;
        tail.position.end = $e3a5e027199d6c5f$var$point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        node.url = this.sliceSerialize(token);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        node.url = "mailto:" + this.sliceSerialize(token);
    }
    //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: "blockquote",
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: "emphasis",
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        // @ts-expect-error `depth` will be set later.
        return {
            type: "heading",
            depth: undefined,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: "break"
        };
    }
    /** @returns {HTML} */ function html() {
        return {
            type: "html",
            value: ""
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: "list",
            ordered: token.type === "listOrdered",
            start: null,
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem(token) {
        return {
            type: "listItem",
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: "paragraph",
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: "strong",
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: "text",
            value: ""
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: "thematicBreak"
        };
    }
}
/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */ function $e3a5e027199d6c5f$var$point(d) {
    return {
        line: d.line,
        column: d.column,
        offset: d.offset
    };
}
/**
 * @param {Config} combined
 * @param {Array<Extension | Array<Extension>>} extensions
 * @returns {void}
 */ function $e3a5e027199d6c5f$var$configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) $e3a5e027199d6c5f$var$configure(combined, value);
        else $e3a5e027199d6c5f$var$extension(combined, value);
    }
}
/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {void}
 */ function $e3a5e027199d6c5f$var$extension(combined, extension) {
    /** @type {keyof Extension} */ let key;
    for(key in extension)if ($e3a5e027199d6c5f$var$own.call(extension, key)) {
        if (key === "canContainEols") {
            const right = extension[key];
            if (right) combined[key].push(...right);
        } else if (key === "transforms") {
            const right = extension[key];
            if (right) combined[key].push(...right);
        } else if (key === "enter" || key === "exit") {
            const right = extension[key];
            if (right) Object.assign(combined[key], right);
        }
    }
}
/** @type {OnEnterError} */ function $e3a5e027199d6c5f$var$defaultOnError(left, right) {
    if (left) throw new Error("Cannot close `" + left.type + "` (" + (0, $jz0iK.stringifyPosition)({
        start: left.start,
        end: left.end
    }) + "): a different token (`" + right.type + "`, " + (0, $jz0iK.stringifyPosition)({
        start: right.start,
        end: right.end
    }) + ") is open");
    else throw new Error("Cannot close document, a token (`" + right.type + "`, " + (0, $jz0iK.stringifyPosition)({
        start: right.start,
        end: right.end
    }) + ") is still open");
}

});
parcelRequire.register("2V7Cl", function(module, exports) {

$parcel$export(module.exports, "toString", () => $2206d0553a4ecf7d$export$f84e8e69fd4488a5);
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s.
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML.
 */ /** @type {Options} */ const $2206d0553a4ecf7d$var$emptyOptions = {};
function $2206d0553a4ecf7d$export$f84e8e69fd4488a5(value, options) {
    const settings = options || $2206d0553a4ecf7d$var$emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
    return $2206d0553a4ecf7d$var$one(value, includeImageAlt, includeHtml);
}
/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */ function $2206d0553a4ecf7d$var$one(value, includeImageAlt, includeHtml) {
    if ($2206d0553a4ecf7d$var$node(value)) {
        if ("value" in value) return value.type === "html" && !includeHtml ? "" : value.value;
        if (includeImageAlt && "alt" in value && value.alt) return value.alt;
        if ("children" in value) return $2206d0553a4ecf7d$var$all(value.children, includeImageAlt, includeHtml);
    }
    if (Array.isArray(value)) return $2206d0553a4ecf7d$var$all(value, includeImageAlt, includeHtml);
    return "";
}
/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */ function $2206d0553a4ecf7d$var$all(values, includeImageAlt, includeHtml) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    while(++index < values.length)result[index] = $2206d0553a4ecf7d$var$one(values[index], includeImageAlt, includeHtml);
    return result.join("");
}
/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Node}
 *   Whether `value` is a node.
 */ function $2206d0553a4ecf7d$var$node(value) {
    return Boolean(value && typeof value === "object");
}

});

parcelRequire.register("cBokv", function(module, exports) {

$parcel$export(module.exports, "parse", () => $92cbd020c63078c8$export$98e6a39c04603d36);
/**
 * @typedef {import('micromark-util-types').Create} Create
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 */ 
var $8jj26 = parcelRequire("8jj26");

var $gE8nV = parcelRequire("gE8nV");

var $aszG9 = parcelRequire("aszG9");

var $apDSH = parcelRequire("apDSH");

var $8dU0z = parcelRequire("8dU0z");

var $cLUhI = parcelRequire("cLUhI");

var $3YcMp = parcelRequire("3YcMp");
function $92cbd020c63078c8$export$98e6a39c04603d36(options) {
    const settings = options || {};
    const constructs = /** @type {FullNormalizedExtension} */ (0, $8jj26.combineExtensions)([
        $3YcMp,
        ...settings.extensions || []
    ]);
    /** @type {ParseContext} */ const parser = {
        defined: [],
        lazy: {},
        constructs: constructs,
        content: create((0, $gE8nV.content)),
        document: create((0, $aszG9.document)),
        flow: create((0, $apDSH.flow)),
        string: create((0, $8dU0z.string)),
        text: create((0, $8dU0z.text))
    };
    return parser;
    /**
   * @param {InitialConstruct} initial
   */ function create(initial) {
        return creator;
        /** @type {Create} */ function creator(from) {
            return (0, $cLUhI.createTokenizer)(parser, initial, from);
        }
    }
}

});
parcelRequire.register("8jj26", function(module, exports) {

$parcel$export(module.exports, "combineExtensions", () => $60cedca323306e9a$export$86a865d89ef3c690);
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Handles} Handles
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 */ 
var $eImyu = parcelRequire("eImyu");
const $60cedca323306e9a$var$hasOwnProperty = {}.hasOwnProperty;
function $60cedca323306e9a$export$86a865d89ef3c690(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length)$60cedca323306e9a$var$syntaxExtension(all, extensions[index]);
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {void}
 */ function $60cedca323306e9a$var$syntaxExtension(all, extension) {
    /** @type {keyof Extension} */ let hook;
    for(hook in extension){
        const maybe = $60cedca323306e9a$var$hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});
        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];
        /** @type {string} */ let code;
        if (right) for(code in right){
            if (!$60cedca323306e9a$var$hasOwnProperty.call(left, code)) left[code] = [];
            const value = right[code];
            $60cedca323306e9a$var$constructs(// @ts-expect-error Looks like a list.
            left[code], Array.isArray(value) ? value : value ? [
                value
            ] : []);
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 * @param {Array<unknown>} list
 * @returns {void}
 */ function $60cedca323306e9a$var$constructs(existing, list) {
    let index = -1;
    /** @type {Array<unknown>} */ const before = [];
    while(++index < list.length)(list[index].add === "after" ? existing : before).push(list[index]);
    (0, $eImyu.splice)(existing, 0, 0, before);
}
function $60cedca323306e9a$export$eaf8c406dfb0a620(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length)$60cedca323306e9a$var$htmlExtension(handlers, htmlExtensions[index]);
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {void}
 */ function $60cedca323306e9a$var$htmlExtension(all, extension) {
    /** @type {keyof HtmlExtension} */ let hook;
    for(hook in extension){
        const maybe = $60cedca323306e9a$var$hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {keyof Handles} */ let type;
        if (right) for(type in right)// @ts-expect-error assume document vs regular handler are managed correctly.
        left[type] = right[type];
    }
}

});
parcelRequire.register("eImyu", function(module, exports) {

$parcel$export(module.exports, "splice", () => $ab66abc3e77b25d2$export$869882364835d202);
$parcel$export(module.exports, "push", () => $ab66abc3e77b25d2$export$4cbf152802aa238);
/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {number} start
 *   Index to remove/insert at (can be negative).
 * @param {number} remove
 *   Number of items to remove.
 * @param {Array<T>} items
 *   Items to inject into `list`.
 * @returns {void}
 *   Nothing.
 */ function $ab66abc3e77b25d2$export$869882364835d202(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {Array<unknown>} */ let parameters;
    // Make start between zero and `end` (included).
    if (start < 0) start = -start > end ? 0 : end + start;
    else start = start > end ? end : start;
    remove = remove > 0 ? remove : 0;
    // No need to chunk the items if there’s only a couple (10k) items.
    if (items.length < 10000) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        // @ts-expect-error Hush, it’s fine.
        list.splice(...parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) list.splice(start, remove);
        // Insert the items in chunks to not cause stack overflows.
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + 10000);
            parameters.unshift(start, 0);
            // @ts-expect-error Hush, it’s fine.
            list.splice(...parameters);
            chunkStart += 10000;
            start += 10000;
        }
    }
}
function $ab66abc3e77b25d2$export$4cbf152802aa238(list, items) {
    if (list.length > 0) {
        $ab66abc3e77b25d2$export$869882364835d202(list, list.length, 0, items);
        return list;
    }
    return items;
}

});


parcelRequire.register("gE8nV", function(module, exports) {

$parcel$export(module.exports, "content", () => $c1e6e2d1efeb3809$export$a7db06668cad9adb);
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $c1e6e2d1efeb3809$export$a7db06668cad9adb = {
    tokenize: $c1e6e2d1efeb3809$var$initializeContent
};
/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */ function $c1e6e2d1efeb3809$var$initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    /** @type {Token} */ let previous;
    return contentStart;
    /** @type {State} */ function afterContentStartConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $k9KEM.factorySpace)(effects, contentStart, "linePrefix");
    }
    /** @type {State} */ function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
    }
    /** @type {State} */ function lineStart(code) {
        const token = effects.enter("chunkText", {
            contentType: "text",
            previous: previous
        });
        if (previous) previous.next = token;
        previous = token;
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            effects.exit("chunkText");
            effects.exit("paragraph");
            effects.consume(code);
            return;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.consume(code);
            effects.exit("chunkText");
            return lineStart;
        }
        // Data.
        effects.consume(code);
        return data;
    }
}

});
parcelRequire.register("k9KEM", function(module, exports) {

$parcel$export(module.exports, "factorySpace", () => $eac8d6fc3dedca65$export$ae105c1eb063a0a2);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */ 
var $eeqNr = parcelRequire("eeqNr");
function $eac8d6fc3dedca65$export$ae105c1eb063a0a2(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, $eeqNr.markdownSpace)(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}

});
parcelRequire.register("eeqNr", function(module, exports) {

$parcel$export(module.exports, "asciiAlpha", () => $a5c728b6f8a0f27e$export$d65d6b62c24d5436);
$parcel$export(module.exports, "asciiAlphanumeric", () => $a5c728b6f8a0f27e$export$75c76db11865a9f4);
$parcel$export(module.exports, "asciiAtext", () => $a5c728b6f8a0f27e$export$4397998b34fe597d);
$parcel$export(module.exports, "asciiControl", () => $a5c728b6f8a0f27e$export$67dbf494fc8394df);
$parcel$export(module.exports, "asciiDigit", () => $a5c728b6f8a0f27e$export$ca8b5b1a6c320e6e);
$parcel$export(module.exports, "asciiHexDigit", () => $a5c728b6f8a0f27e$export$eca2752363989806);
$parcel$export(module.exports, "asciiPunctuation", () => $a5c728b6f8a0f27e$export$35794a7d1db99380);
$parcel$export(module.exports, "markdownLineEnding", () => $a5c728b6f8a0f27e$export$34a1dff1c0936953);
$parcel$export(module.exports, "markdownLineEndingOrSpace", () => $a5c728b6f8a0f27e$export$a30284361b3814b7);
$parcel$export(module.exports, "markdownSpace", () => $a5c728b6f8a0f27e$export$2c6cf65c1127992a);
$parcel$export(module.exports, "unicodePunctuation", () => $a5c728b6f8a0f27e$export$aa04114dd888a7a0);
$parcel$export(module.exports, "unicodeWhitespace", () => $a5c728b6f8a0f27e$export$a0ff789c034ffdf4);
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ 
var $6ApPa = parcelRequire("6ApPa");
const $a5c728b6f8a0f27e$export$d65d6b62c24d5436 = $a5c728b6f8a0f27e$var$regexCheck(/[A-Za-z]/);
const $a5c728b6f8a0f27e$export$75c76db11865a9f4 = $a5c728b6f8a0f27e$var$regexCheck(/[\dA-Za-z]/);
const $a5c728b6f8a0f27e$export$4397998b34fe597d = $a5c728b6f8a0f27e$var$regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function $a5c728b6f8a0f27e$export$67dbf494fc8394df(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127));
}
const $a5c728b6f8a0f27e$export$ca8b5b1a6c320e6e = $a5c728b6f8a0f27e$var$regexCheck(/\d/);
const $a5c728b6f8a0f27e$export$eca2752363989806 = $a5c728b6f8a0f27e$var$regexCheck(/[\dA-Fa-f]/);
const $a5c728b6f8a0f27e$export$35794a7d1db99380 = $a5c728b6f8a0f27e$var$regexCheck(/[!-/:-@[-`{-~]/);
function $a5c728b6f8a0f27e$export$34a1dff1c0936953(code) {
    return code !== null && code < -2;
}
function $a5c728b6f8a0f27e$export$a30284361b3814b7(code) {
    return code !== null && (code < 0 || code === 32);
}
function $a5c728b6f8a0f27e$export$2c6cf65c1127992a(code) {
    return code === -2 || code === -1 || code === 32;
}
const $a5c728b6f8a0f27e$export$aa04114dd888a7a0 = $a5c728b6f8a0f27e$var$regexCheck((0, $6ApPa.unicodePunctuationRegex));
const $a5c728b6f8a0f27e$export$a0ff789c034ffdf4 = $a5c728b6f8a0f27e$var$regexCheck(/\s/);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => boolean}
 */ function $a5c728b6f8a0f27e$var$regexCheck(regex) {
    return check;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */ function check(code) {
        return code !== null && regex.test(String.fromCharCode(code));
    }
}

});
parcelRequire.register("6ApPa", function(module, exports) {

$parcel$export(module.exports, "unicodePunctuationRegex", () => $4cba230c019de263$export$85b5101f24802e8c);
// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
/**
 * Regular expression that matches a unicode punctuation character.
 */ const $4cba230c019de263$export$85b5101f24802e8c = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

});




parcelRequire.register("aszG9", function(module, exports) {

$parcel$export(module.exports, "document", () => $79d831fa549b5e8e$export$5a7bfc01df82fcd1);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ /**
 * @typedef {[Construct, ContainerState]} StackItem
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");

var $eImyu = parcelRequire("eImyu");
const $79d831fa549b5e8e$export$5a7bfc01df82fcd1 = {
    tokenize: $79d831fa549b5e8e$var$initializeDocument
};
/** @type {Construct} */ const $79d831fa549b5e8e$var$containerConstruct = {
    tokenize: $79d831fa549b5e8e$var$tokenizeContainer
};
/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */ function $79d831fa549b5e8e$var$initializeDocument(effects) {
    const self = this;
    /** @type {Array<StackItem>} */ const stack = [];
    let continued = 0;
    /** @type {TokenizeContext | undefined} */ let childFlow;
    /** @type {Token | undefined} */ let childToken;
    /** @type {number} */ let lineStartOffset;
    return start;
    /** @type {State} */ function start(code) {
        // First we iterate through the open blocks, starting with the root
        // document, and descending through last children down to the last open
        // block.
        // Each block imposes a condition that the line must satisfy if the block is
        // to remain open.
        // For example, a block quote requires a `>` character.
        // A paragraph requires a non-blank line.
        // In this phase we may match all or just some of the open blocks.
        // But we cannot close unmatched blocks yet, because we may have a lazy
        // continuation line.
        if (continued < stack.length) {
            const item = stack[continued];
            self.containerState = item[1];
            return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
        }
        // Done.
        return checkNewContainers(code);
    }
    /** @type {State} */ function documentContinue(code) {
        continued++;
        // Note: this field is called `_closeFlow` but it also closes containers.
        // Perhaps a good idea to rename it but it’s already used in the wild by
        // extensions.
        if (self.containerState._closeFlow) {
            self.containerState._closeFlow = undefined;
            if (childFlow) closeFlow();
            // Note: this algorithm for moving events around is similar to the
            // algorithm when dealing with lazy lines in `writeToChild`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {Point | undefined} */ let point;
            // Find the flow chunk.
            while(indexBeforeFlow--)if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                point = self.events[indexBeforeFlow][1].end;
                break;
            }
            exitContainers(continued);
            // Fix positions.
            let index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            }
            // Inject the exits earlier (they’re still also at the end).
            (0, $eImyu.splice)(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
            // Discard the duplicate exits.
            self.events.length = index;
            return checkNewContainers(code);
        }
        return start(code);
    }
    /** @type {State} */ function checkNewContainers(code) {
        // Next, after consuming the continuation markers for existing blocks, we
        // look for new block starts (e.g. `>` for a block quote).
        // If we encounter a new block start, we close any blocks unmatched in
        // step 1 before creating the new block as a child of the last matched
        // block.
        if (continued === stack.length) {
            // No need to `check` whether there’s a container, of `exitContainers`
            // would be moot.
            // We can instead immediately `attempt` to parse one.
            if (!childFlow) return documentContinued(code);
            // If we have concrete content, such as block HTML or fenced code,
            // we can’t have containers “pierce” into them, so we can immediately
            // start.
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) return flowStart(code);
            // If we do have flow, it could still be a blank line,
            // but we’d be interrupting it w/ a new container if there’s a current
            // construct.
            // To do: next major: remove `_gfmTableDynamicInterruptHack` (no longer
            // needed in micromark-extension-gfm-table@1.0.6).
            self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
        }
        // Check if there is a new container.
        self.containerState = {};
        return effects.check($79d831fa549b5e8e$var$containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
    }
    /** @type {State} */ function thereIsANewContainer(code) {
        if (childFlow) closeFlow();
        exitContainers(continued);
        return documentContinued(code);
    }
    /** @type {State} */ function thereIsNoNewContainer(code) {
        self.parser.lazy[self.now().line] = continued !== stack.length;
        lineStartOffset = self.now().offset;
        return flowStart(code);
    }
    /** @type {State} */ function documentContinued(code) {
        // Try new containers.
        self.containerState = {};
        return effects.attempt($79d831fa549b5e8e$var$containerConstruct, containerContinue, flowStart)(code);
    }
    /** @type {State} */ function containerContinue(code) {
        continued++;
        stack.push([
            self.currentConstruct,
            self.containerState
        ]);
        // Try another.
        return documentContinued(code);
    }
    /** @type {State} */ function flowStart(code) {
        if (code === null) {
            if (childFlow) closeFlow();
            exitContainers(0);
            effects.consume(code);
            return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
            contentType: "flow",
            previous: childToken,
            _tokenizer: childFlow
        });
        return flowContinue(code);
    }
    /** @type {State} */ function flowContinue(code) {
        if (code === null) {
            writeToChild(effects.exit("chunkFlow"), true);
            exitContainers(0);
            effects.consume(code);
            return;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.consume(code);
            writeToChild(effects.exit("chunkFlow"));
            // Get ready for the next line.
            continued = 0;
            self.interrupt = undefined;
            return start;
        }
        effects.consume(code);
        return flowContinue;
    }
    /**
   * @param {Token} token
   * @param {boolean | undefined} [eof]
   * @returns {void}
   */ function writeToChild(token, eof) {
        const stream = self.sliceStream(token);
        if (eof) stream.push(null);
        token.previous = childToken;
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.defineSkip(token.start);
        childFlow.write(stream);
        // Alright, so we just added a lazy line:
        //
        // ```markdown
        // > a
        // b.
        //
        // Or:
        //
        // > ~~~c
        // d
        //
        // Or:
        //
        // > | e |
        // f
        // ```
        //
        // The construct in the second example (fenced code) does not accept lazy
        // lines, so it marked itself as done at the end of its first line, and
        // then the content construct parses `d`.
        // Most constructs in markdown match on the first line: if the first line
        // forms a construct, a non-lazy line can’t “unmake” it.
        //
        // The construct in the third example is potentially a GFM table, and
        // those are *weird*.
        // It *could* be a table, from the first line, if the following line
        // matches a condition.
        // In this case, that second line is lazy, which “unmakes” the first line
        // and turns the whole into one content block.
        //
        // We’ve now parsed the non-lazy and the lazy line, and can figure out
        // whether the lazy line started a new flow block.
        // If it did, we exit the current containers between the two flow blocks.
        if (self.parser.lazy[token.start.line]) {
            let index = childFlow.events.length;
            while(index--){
                if (// The token starts before the line ending…
                childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
                (!childFlow.events[index][1].end || // …or ends after it.
                childFlow.events[index][1].end.offset > lineStartOffset)) // Exit: there’s still something open, which means it’s a lazy line
                // part of something.
                return;
            }
            // Note: this algorithm for moving events around is similar to the
            // algorithm when closing flow in `documentContinue`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {boolean | undefined} */ let seen;
            /** @type {Point | undefined} */ let point;
            // Find the previous chunk (the one before the lazy line).
            while(indexBeforeFlow--)if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                if (seen) {
                    point = self.events[indexBeforeFlow][1].end;
                    break;
                }
                seen = true;
            }
            exitContainers(continued);
            // Fix positions.
            index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            }
            // Inject the exits earlier (they’re still also at the end).
            (0, $eImyu.splice)(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
            // Discard the duplicate exits.
            self.events.length = index;
        }
    }
    /**
   * @param {number} size
   * @returns {void}
   */ function exitContainers(size) {
        let index = stack.length;
        // Exit open containers.
        while(index-- > size){
            const entry = stack[index];
            self.containerState = entry[1];
            entry[0].exit.call(self, effects);
        }
        stack.length = size;
    }
    function closeFlow() {
        childFlow.write([
            null
        ]);
        childToken = undefined;
        childFlow = undefined;
        self.containerState._closeFlow = undefined;
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $79d831fa549b5e8e$var$tokenizeContainer(effects, ok, nok) {
    // Always populated by defaults.
    return (0, $k9KEM.factorySpace)(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}

});

parcelRequire.register("apDSH", function(module, exports) {

$parcel$export(module.exports, "flow", () => $794b2cca543ee5da$export$ccc7b0636abaffc3);
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */ 
var $eFC4k = parcelRequire("eFC4k");
var $6jFrU = parcelRequire("6jFrU");

var $k9KEM = parcelRequire("k9KEM");

const $794b2cca543ee5da$export$ccc7b0636abaffc3 = {
    tokenize: $794b2cca543ee5da$var$initializeFlow
};
/**
 * @this {TokenizeContext}
 * @type {Initializer}
 */ function $794b2cca543ee5da$var$initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(// Try to parse a blank line.
    (0, $eFC4k.blankLine), atBlankEnding, // Try to parse initial flow (essentially, only code).
    effects.attempt(this.parser.constructs.flowInitial, afterConstruct, (0, $k9KEM.factorySpace)(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt((0, $6jFrU.content), afterConstruct)), "linePrefix")));
    return initial;
    /** @type {State} */ function atBlankEnding(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = undefined;
        return initial;
    }
    /** @type {State} */ function afterConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = undefined;
        return initial;
    }
}

});
parcelRequire.register("eFC4k", function(module, exports) {

$parcel$export(module.exports, "blankLine", () => $aae26cae80eb134b$export$d50d28ce3ab2a612);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $aae26cae80eb134b$export$d50d28ce3ab2a612 = {
    tokenize: $aae26cae80eb134b$var$tokenizeBlankLine,
    partial: true
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $aae26cae80eb134b$var$tokenizeBlankLine(effects, ok, nok) {
    return start;
    /**
   * Start of blank line.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *     ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, after, "linePrefix")(code) : after(code);
    }
    /**
   * At eof/eol, after optional whitespace.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *       ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        return code === null || (0, $eeqNr.markdownLineEnding)(code) ? ok(code) : nok(code);
    }
}

});

parcelRequire.register("6jFrU", function(module, exports) {

$parcel$export(module.exports, "content", () => $4994ab62f349d73b$export$a7db06668cad9adb);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");

var $dmJYE = parcelRequire("dmJYE");
const $4994ab62f349d73b$export$a7db06668cad9adb = {
    tokenize: $4994ab62f349d73b$var$tokenizeContent,
    resolve: $4994ab62f349d73b$var$resolveContent
};
/** @type {Construct} */ const $4994ab62f349d73b$var$continuationConstruct = {
    tokenize: $4994ab62f349d73b$var$tokenizeContinuation,
    partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */ function $4994ab62f349d73b$var$resolveContent(events) {
    (0, $dmJYE.subtokenize)(events);
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $4994ab62f349d73b$var$tokenizeContent(effects, ok) {
    /** @type {Token | undefined} */ let previous;
    return chunkStart;
    /**
   * Before a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^
   * ```
   *
   * @type {State}
   */ function chunkStart(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
            contentType: "content"
        });
        return chunkInside(code);
    }
    /**
   * In a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^^^
   * ```
   *
   * @type {State}
   */ function chunkInside(code) {
        if (code === null) return contentEnd(code);
        // To do: in `markdown-rs`, each line is parsed on its own, and everything
        // is stitched together resolving.
        if ((0, $eeqNr.markdownLineEnding)(code)) return effects.check($4994ab62f349d73b$var$continuationConstruct, contentContinue, contentEnd)(code);
        // Data.
        effects.consume(code);
        return chunkInside;
    }
    /**
   *
   *
   * @type {State}
   */ function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
    }
    /**
   *
   *
   * @type {State}
   */ function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous.next = effects.enter("chunkContent", {
            contentType: "content",
            previous: previous
        });
        previous = previous.next;
        return chunkInside;
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $4994ab62f349d73b$var$tokenizeContinuation(effects, ok, nok) {
    const self = this;
    return startLookahead;
    /**
   *
   *
   * @type {State}
   */ function startLookahead(code) {
        effects.exit("chunkContent");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $k9KEM.factorySpace)(effects, prefixed, "linePrefix");
    }
    /**
   *
   *
   * @type {State}
   */ function prefixed(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) return nok(code);
        // Always populated by defaults.
        const tail = self.events[self.events.length - 1];
        if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) return ok(code);
        return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
    }
}

});
parcelRequire.register("dmJYE", function(module, exports) {

$parcel$export(module.exports, "subtokenize", () => $9bb0fe8cbe1f9f4d$export$12949d1dd00fddf4);
/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 */ 
var $eImyu = parcelRequire("eImyu");
function $9bb0fe8cbe1f9f4d$export$12949d1dd00fddf4(events) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number | undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Array<Event>} */ let parameters;
    /** @type {Array<Event>} */ let subevents;
    /** @type {boolean | undefined} */ let more;
    while(++index < events.length){
        while(index in jumps)index = jumps[index];
        event = events[index];
        // Add a hook for the GFM tasklist extension, which needs to know if text
        // is in the first content of a list item.
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") otherIndex += 2;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") while(++otherIndex < subevents.length){
                if (subevents[otherIndex][1].type === "content") break;
                if (subevents[otherIndex][1].type === "chunkText") {
                    subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                    otherIndex++;
                }
            }
        }
        // Enter.
        if (event[0] === "enter") {
            if (event[1].contentType) {
                Object.assign(jumps, $9bb0fe8cbe1f9f4d$var$subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events[otherIndex];
                if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
                    if (otherEvent[0] === "enter") {
                        if (lineIndex) events[lineIndex][1].type = "lineEndingBlank";
                        otherEvent[1].type = "lineEnding";
                        lineIndex = otherIndex;
                    }
                } else break;
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = Object.assign({}, events[lineIndex][1].start);
                // Switch container exit w/ line endings.
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                (0, $eImyu.splice)(events, lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Array<Event>} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */ function $9bb0fe8cbe1f9f4d$var$subcontent(events, eventIndex) {
    const token = events[eventIndex][1];
    const context = events[eventIndex][2];
    let startPosition = eventIndex - 1;
    /** @type {Array<number>} */ const startPositions = [];
    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    /** @type {Array<[number, number]>} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Array<Chunk>} */ let stream;
    /** @type {Token | undefined} */ let previous;
    let index = -1;
    /** @type {Token | undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ];
    // Loop forward through the linked tokens to pass them in order to the
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events[++startPosition][1] !== current);
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) stream.push(null);
            if (previous) tokenizer.defineSkip(current.start);
            if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = true;
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = undefined;
        }
        // Unravel the next token.
        previous = current;
        current = current.next;
    }
    // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length)if (// Find a void token that includes a break.
    childEvents[index][0] === "exit" && childEvents[index - 1][0] === "enter" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
        start = index + 1;
        breaks.push(start);
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
        current = current.next;
    }
    // Help GC.
    tokenizer.events = [];
    // If there’s one more token (which is the cases for lines that end in an
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
    } else breaks.pop();
    // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        jumps.unshift([
            start,
            start + slice.length - 1
        ]);
        (0, $eImyu.splice)(events, start, 2, slice);
    }
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}

});



parcelRequire.register("8dU0z", function(module, exports) {

$parcel$export(module.exports, "resolver", () => $5fcafbad9674595f$export$50397835cbfdbc24);
$parcel$export(module.exports, "string", () => $5fcafbad9674595f$export$22b082955e083ec3);
$parcel$export(module.exports, "text", () => $5fcafbad9674595f$export$6f093cfa640b7166);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */ const $5fcafbad9674595f$export$50397835cbfdbc24 = {
    resolveAll: $5fcafbad9674595f$var$createResolver()
};
const $5fcafbad9674595f$export$22b082955e083ec3 = $5fcafbad9674595f$var$initializeFactory("string");
const $5fcafbad9674595f$export$6f093cfa640b7166 = $5fcafbad9674595f$var$initializeFactory("text");
/**
 * @param {'string' | 'text'} field
 * @returns {InitialConstruct}
 */ function $5fcafbad9674595f$var$initializeFactory(field) {
    return {
        tokenize: initializeText,
        resolveAll: $5fcafbad9674595f$var$createResolver(field === "text" ? $5fcafbad9674595f$var$resolveAllLineSuffixes : undefined)
    };
    /**
   * @this {TokenizeContext}
   * @type {Initializer}
   */ function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const text = effects.attempt(constructs, start, notText);
        return start;
        /** @type {State} */ function start(code) {
            return atBreak(code) ? text(code) : notText(code);
        }
        /** @type {State} */ function notText(code) {
            if (code === null) {
                effects.consume(code);
                return;
            }
            effects.enter("data");
            effects.consume(code);
            return data;
        }
        /** @type {State} */ function data(code) {
            if (atBreak(code)) {
                effects.exit("data");
                return text(code);
            }
            // Data.
            effects.consume(code);
            return data;
        }
        /**
     * @param {Code} code
     * @returns {boolean}
     */ function atBreak(code) {
            if (code === null) return true;
            const list = constructs[code];
            let index = -1;
            if (list) // Always populated by defaults.
            while(++index < list.length){
                const item = list[index];
                if (!item.previous || item.previous.call(self, self.previous)) return true;
            }
            return false;
        }
    }
}
/**
 * @param {Resolver | undefined} [extraResolver]
 * @returns {Resolver}
 */ function $5fcafbad9674595f$var$createResolver(extraResolver) {
    return resolveAllText;
    /** @type {Resolver} */ function resolveAllText(events, context) {
        let index = -1;
        /** @type {number | undefined} */ let enter;
        // A rather boring computation (to merge adjacent `data` events) which
        // improves mm performance by 29%.
        while(++index <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === "data") {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== "data") {
                // Don’t do anything if there is one data token.
                if (index !== enter + 2) {
                    events[enter][1].end = events[index - 1][1].end;
                    events.splice(enter + 2, index - enter - 2);
                    index = enter + 2;
                }
                enter = undefined;
            }
        }
        return extraResolver ? extraResolver(events, context) : events;
    }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */ function $5fcafbad9674595f$var$resolveAllLineSuffixes(events, context) {
    let eventIndex = 0 // Skip first.
    ;
    while(++eventIndex <= events.length)if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        /** @type {boolean | undefined} */ let tabs;
        while(index--){
            const chunk = chunks[index];
            if (typeof chunk === "string") {
                bufferIndex = chunk.length;
                while(chunk.charCodeAt(bufferIndex - 1) === 32){
                    size++;
                    bufferIndex--;
                }
                if (bufferIndex) break;
                bufferIndex = -1;
            } else if (chunk === -2) {
                tabs = true;
                size++;
            } else if (chunk === -1) ;
            else {
                // Replacement character, exit.
                index++;
                break;
            }
        }
        if (size) {
            const token = {
                type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
                start: {
                    line: data.end.line,
                    column: data.end.column - size,
                    offset: data.end.offset - size,
                    _index: data.start._index + index,
                    _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
                },
                end: Object.assign({}, data.end)
            };
            data.end = Object.assign({}, token.start);
            if (data.start.offset === data.end.offset) Object.assign(data, token);
            else {
                events.splice(eventIndex, 0, [
                    "enter",
                    token,
                    context
                ], [
                    "exit",
                    token,
                    context
                ]);
                eventIndex += 2;
            }
        }
        eventIndex++;
    }
    return events;
}

});

parcelRequire.register("cLUhI", function(module, exports) {

$parcel$export(module.exports, "createTokenizer", () => $94c588c643b31122$export$ae34f10ee4b29837);
/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenType} TokenType
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */ /**
 * @callback Restore
 * @returns {void}
 *
 * @typedef Info
 * @property {Restore} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */ 
var $eeqNr = parcelRequire("eeqNr");

var $eImyu = parcelRequire("eImyu");

var $exed5 = parcelRequire("exed5");
function $94c588c643b31122$export$ae34f10ee4b29837(parser, initialize, from) {
    /** @type {Point} */ let point = Object.assign(from ? Object.assign({}, from) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    /** @type {Record<string, number>} */ const columnStart = {};
    /** @type {Array<Construct>} */ const resolveAllConstructs = [];
    /** @type {Array<Chunk>} */ let chunks = [];
    /** @type {Array<Token>} */ let stack = [];
    /** @type {boolean | undefined} */ let consumed = true;
    /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */ const effects = {
        consume: consume,
        enter: enter,
        exit: exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
            interrupt: true
        })
    };
    /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */ const context = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser: parser,
        sliceStream: sliceStream,
        sliceSerialize: sliceSerialize,
        now: now,
        defineSkip: defineSkip,
        write: write
    };
    /**
   * The state function.
   *
   * @type {State | void}
   */ let state = initialize.tokenize.call(context, effects);
    /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */ let expectedCode;
    if (initialize.resolveAll) resolveAllConstructs.push(initialize);
    return context;
    /** @type {TokenizeContext['write']} */ function write(slice) {
        chunks = (0, $eImyu.push)(chunks, slice);
        main();
        // Exit if we’re not done, resolve might change stuff.
        if (chunks[chunks.length - 1] !== null) return [];
        addResult(initialize, 0);
        // Otherwise, resolve, and exit.
        context.events = (0, $exed5.resolveAll)(resolveAllConstructs, context.events, context);
        return context.events;
    }
    //
    // Tools.
    //
    /** @type {TokenizeContext['sliceSerialize']} */ function sliceSerialize(token, expandTabs) {
        return $94c588c643b31122$var$serializeChunks(sliceStream(token), expandTabs);
    }
    /** @type {TokenizeContext['sliceStream']} */ function sliceStream(token) {
        return $94c588c643b31122$var$sliceChunks(chunks, token);
    }
    /** @type {TokenizeContext['now']} */ function now() {
        // This is a hot path, so we clone manually instead of `Object.assign({}, point)`
        const { line: line , column: column , offset: offset , _index: _index , _bufferIndex: _bufferIndex  } = point;
        return {
            line: line,
            column: column,
            offset: offset,
            _index: _index,
            _bufferIndex: _bufferIndex
        };
    }
    /** @type {TokenizeContext['defineSkip']} */ function defineSkip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
    }
    //
    // State management.
    //
    /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */ function main() {
        /** @type {number} */ let chunkIndex;
        while(point._index < chunks.length){
            const chunk = chunks[point._index];
            // If we’re in a buffer chunk, loop through it.
            if (typeof chunk === "string") {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) point._bufferIndex = 0;
                while(point._index === chunkIndex && point._bufferIndex < chunk.length)go(chunk.charCodeAt(point._bufferIndex));
            } else go(chunk);
        }
    }
    /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */ function go(code) {
        consumed = undefined;
        expectedCode = code;
        state = state(code);
    }
    /** @type {Effects['consume']} */ function consume(code) {
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === -3 ? 2 : 1;
            accountForPotentialSkip();
        } else if (code !== -1) {
            point.column++;
            point.offset++;
        }
        // Not in a string chunk.
        if (point._bufferIndex < 0) point._index++;
        else {
            point._bufferIndex++;
            // At end of string chunk.
            // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
            // strings.
            if (point._bufferIndex === chunks[point._index].length) {
                point._bufferIndex = -1;
                point._index++;
            }
        }
        // Expose the previous character.
        context.previous = code;
        // Mark as consumed.
        consumed = true;
    }
    /** @type {Effects['enter']} */ function enter(type, fields) {
        /** @type {Token} */ // @ts-expect-error Patch instead of assign required fields to help GC.
        const token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push([
            "enter",
            token,
            context
        ]);
        stack.push(token);
        return token;
    }
    /** @type {Effects['exit']} */ function exit(type) {
        const token = stack.pop();
        token.end = now();
        context.events.push([
            "exit",
            token,
            context
        ]);
        return token;
    }
    /**
   * Use results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
    }
    /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulcheck(_, info) {
        info.restore();
    }
    /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {{interrupt?: boolean | undefined} | undefined} [fields]
   */ function constructFactory(onreturn, fields) {
        return hook;
        /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Array<Construct> | Construct | ConstructRecord} constructs
     * @param {State} returnState
     * @param {State | undefined} [bogusState]
     * @returns {State}
     */ function hook(constructs, returnState, bogusState) {
            /** @type {Array<Construct>} */ let listOfConstructs;
            /** @type {number} */ let constructIndex;
            /** @type {Construct} */ let currentConstruct;
            /** @type {Info} */ let info;
            return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([
                constructs
            ]) : handleMapOfConstructs(constructs);
            /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */ function handleMapOfConstructs(map) {
                return start;
                /** @type {State} */ function start(code) {
                    const def = code !== null && map[code];
                    const all = code !== null && map.null;
                    const list = [
                        // To do: add more extension tests.
                        /* c8 ignore next 2 */ ...Array.isArray(def) ? def : def ? [
                            def
                        ] : [],
                        ...Array.isArray(all) ? all : all ? [
                            all
                        ] : []
                    ];
                    return handleListOfConstructs(list)(code);
                }
            }
            /**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */ function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                if (list.length === 0) return bogusState;
                return handleConstruct(list[constructIndex]);
            }
            /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */ function handleConstruct(construct) {
                return start;
                /** @type {State} */ function start(code) {
                    // To do: not needed to store if there is no bogus state, probably?
                    // Currently doesn’t work because `inspect` in document does a check
                    // w/o a bogus, which doesn’t make sense. But it does seem to help perf
                    // by not storing.
                    info = store();
                    currentConstruct = construct;
                    if (!construct.partial) context.currentConstruct = construct;
                    // Always populated by defaults.
                    if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) return nok(code);
                    return construct.tokenize.call(// If we do have fields, create an object w/ `context` as its
                    // prototype.
                    // This allows a “live binding”, which is needed for `interrupt`.
                    fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
                }
            }
            /** @type {State} */ function ok(code) {
                consumed = true;
                onreturn(currentConstruct, info);
                return returnState;
            }
            /** @type {State} */ function nok(code) {
                consumed = true;
                info.restore();
                if (++constructIndex < listOfConstructs.length) return handleConstruct(listOfConstructs[constructIndex]);
                return bogusState;
            }
        }
    }
    /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */ function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) resolveAllConstructs.push(construct);
        if (construct.resolve) (0, $eImyu.splice)(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
        if (construct.resolveTo) context.events = construct.resolveTo(context.events, context);
    }
    /**
   * Store state.
   *
   * @returns {Info}
   */ function store() {
        const startPoint = now();
        const startPrevious = context.previous;
        const startCurrentConstruct = context.currentConstruct;
        const startEventsIndex = context.events.length;
        const startStack = Array.from(stack);
        return {
            restore: restore,
            from: startEventsIndex
        };
        /**
     * Restore state.
     *
     * @returns {void}
     */ function restore() {
            point = startPoint;
            context.previous = startPrevious;
            context.currentConstruct = startCurrentConstruct;
            context.events.length = startEventsIndex;
            stack = startStack;
            accountForPotentialSkip();
        }
    }
    /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */ function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
            point.column = columnStart[point.line];
            point.offset += columnStart[point.line] - 1;
        }
    }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'end' | 'start'>} token
 * @returns {Array<Chunk>}
 */ function $94c588c643b31122$var$sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Array<Chunk>} */ let view;
    if (startIndex === endIndex) // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [
        chunks[startIndex].slice(startBufferIndex, endBufferIndex)
    ];
    else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
            const head = view[0];
            if (typeof head === "string") view[0] = head.slice(startBufferIndex);
            else view.shift();
        }
        if (endBufferIndex > 0) // @ts-expect-error `_bufferIndex` is used on string chunks.
        view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
    return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean | undefined} [expandTabs=false]
 * @returns {string}
 */ function $94c588c643b31122$var$serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {Array<string>} */ const result = [];
    /** @type {boolean | undefined} */ let atTab;
    while(++index < chunks.length){
        const chunk = chunks[index];
        /** @type {string} */ let value;
        if (typeof chunk === "string") value = chunk;
        else switch(chunk){
            case -5:
                value = "\r";
                break;
            case -4:
                value = "\n";
                break;
            case -3:
                value = "\r\n";
                break;
            case -2:
                value = expandTabs ? " " : "	";
                break;
            case -1:
                if (!expandTabs && atTab) continue;
                value = " ";
                break;
            default:
                // Currently only replacement character.
                value = String.fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
    }
    return result.join("");
}

});
parcelRequire.register("exed5", function(module, exports) {

$parcel$export(module.exports, "resolveAll", () => $a94f2b91fe6bfcf3$export$3ff61ec196ff408b);
/**
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {Array<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */ function $a94f2b91fe6bfcf3$export$3ff61ec196ff408b(constructs, events, context) {
    /** @type {Array<Resolver>} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}

});


parcelRequire.register("3YcMp", function(module, exports) {

$parcel$export(module.exports, "document", () => $2e40e37d3e07fd76$export$5a7bfc01df82fcd1);
$parcel$export(module.exports, "contentInitial", () => $2e40e37d3e07fd76$export$5a2181fb44b58173);
$parcel$export(module.exports, "flowInitial", () => $2e40e37d3e07fd76$export$cf8bead395eff824);
$parcel$export(module.exports, "flow", () => $2e40e37d3e07fd76$export$ccc7b0636abaffc3);
$parcel$export(module.exports, "string", () => $2e40e37d3e07fd76$export$22b082955e083ec3);
$parcel$export(module.exports, "text", () => $2e40e37d3e07fd76$export$6f093cfa640b7166);
$parcel$export(module.exports, "insideSpan", () => $2e40e37d3e07fd76$export$d44f260a3f9b69f5);
$parcel$export(module.exports, "attentionMarkers", () => $2e40e37d3e07fd76$export$b9c0b60d74426aea);
$parcel$export(module.exports, "disable", () => $2e40e37d3e07fd76$export$e20fbacbb41798b);
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */ 
var $iCicA = parcelRequire("iCicA");
var $7oOJa = parcelRequire("7oOJa");
var $liNGY = parcelRequire("liNGY");
var $45JcU = parcelRequire("45JcU");
var $4aUVC = parcelRequire("4aUVC");
var $hxTgh = parcelRequire("hxTgh");
var $iUumc = parcelRequire("iUumc");
var $a57EM = parcelRequire("a57EM");
var $jwUQm = parcelRequire("jwUQm");
var $jyqsZ = parcelRequire("jyqsZ");
var $8d7jd = parcelRequire("8d7jd");
var $g6Xr1 = parcelRequire("g6Xr1");
var $9tdOP = parcelRequire("9tdOP");
var $7hihe = parcelRequire("7hihe");
var $866gi = parcelRequire("866gi");
var $ey0XF = parcelRequire("ey0XF");
var $841hT = parcelRequire("841hT");
var $f3Hwx = parcelRequire("f3Hwx");
var $74Njy = parcelRequire("74Njy");
var $9XmeN = parcelRequire("9XmeN");

var $8dU0z = parcelRequire("8dU0z");
const $2e40e37d3e07fd76$export$5a7bfc01df82fcd1 = {
    [42]: (0, $f3Hwx.list),
    [43]: (0, $f3Hwx.list),
    [45]: (0, $f3Hwx.list),
    [48]: (0, $f3Hwx.list),
    [49]: (0, $f3Hwx.list),
    [50]: (0, $f3Hwx.list),
    [51]: (0, $f3Hwx.list),
    [52]: (0, $f3Hwx.list),
    [53]: (0, $f3Hwx.list),
    [54]: (0, $f3Hwx.list),
    [55]: (0, $f3Hwx.list),
    [56]: (0, $f3Hwx.list),
    [57]: (0, $f3Hwx.list),
    [62]: (0, $liNGY.blockQuote)
};
const $2e40e37d3e07fd76$export$5a2181fb44b58173 = {
    [91]: (0, $jwUQm.definition)
};
const $2e40e37d3e07fd76$export$cf8bead395eff824 = {
    [-2]: (0, $iUumc.codeIndented),
    [-1]: (0, $iUumc.codeIndented),
    [32]: (0, $iUumc.codeIndented)
};
const $2e40e37d3e07fd76$export$ccc7b0636abaffc3 = {
    [35]: (0, $8d7jd.headingAtx),
    [42]: (0, $9XmeN.thematicBreak),
    [45]: [
        (0, $74Njy.setextUnderline),
        (0, $9XmeN.thematicBreak)
    ],
    [60]: (0, $g6Xr1.htmlFlow),
    [61]: (0, $74Njy.setextUnderline),
    [95]: (0, $9XmeN.thematicBreak),
    [96]: (0, $hxTgh.codeFenced),
    [126]: (0, $hxTgh.codeFenced)
};
const $2e40e37d3e07fd76$export$22b082955e083ec3 = {
    [38]: (0, $4aUVC.characterReference),
    [92]: (0, $45JcU.characterEscape)
};
const $2e40e37d3e07fd76$export$6f093cfa640b7166 = {
    [-5]: (0, $841hT.lineEnding),
    [-4]: (0, $841hT.lineEnding),
    [-3]: (0, $841hT.lineEnding),
    [33]: (0, $866gi.labelStartImage),
    [38]: (0, $4aUVC.characterReference),
    [42]: (0, $iCicA.attention),
    [60]: [
        (0, $7oOJa.autolink),
        (0, $9tdOP.htmlText)
    ],
    [91]: (0, $ey0XF.labelStartLink),
    [92]: [
        (0, $jyqsZ.hardBreakEscape),
        (0, $45JcU.characterEscape)
    ],
    [93]: (0, $7hihe.labelEnd),
    [95]: (0, $iCicA.attention),
    [96]: (0, $a57EM.codeText)
};
const $2e40e37d3e07fd76$export$d44f260a3f9b69f5 = {
    null: [
        (0, $iCicA.attention),
        (0, $8dU0z.resolver)
    ]
};
const $2e40e37d3e07fd76$export$b9c0b60d74426aea = {
    null: [
        42,
        95
    ]
};
const $2e40e37d3e07fd76$export$e20fbacbb41798b = {
    null: []
};

});
parcelRequire.register("iCicA", function(module, exports) {

$parcel$export(module.exports, "attention", () => $d8d9e51e8ec48408$export$45b92471da762af7);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $eImyu = parcelRequire("eImyu");

var $g866F = parcelRequire("g866F");

var $exed5 = parcelRequire("exed5");
const $d8d9e51e8ec48408$export$45b92471da762af7 = {
    name: "attention",
    tokenize: $d8d9e51e8ec48408$var$tokenizeAttention,
    resolveAll: $d8d9e51e8ec48408$var$resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */ function $d8d9e51e8ec48408$var$resolveAllAttention(events, context) {
    let index = -1;
    /** @type {number} */ let open;
    /** @type {Token} */ let group;
    /** @type {Token} */ let text;
    /** @type {Token} */ let openingSequence;
    /** @type {Token} */ let closingSequence;
    /** @type {number} */ let use;
    /** @type {Array<Event>} */ let nextEvents;
    /** @type {number} */ let offset;
    // Walk through all events.
    //
    // Note: performance of this is fine on an mb of normal markdown, but it’s
    // a bottleneck for malicious stuff.
    while(++index < events.length)// Find a token that can close.
    if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
        open = index;
        // Now walk back to find an opener.
        while(open--)// Find a token that can open the closer.
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
            // If the opening can close or the closing can open,
            // and the close size *is not* a multiple of three,
            // but the sum of the opening and closing size *is* multiple of three,
            // then don’t match.
            if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) continue;
            // Number of markers to use from the sequence.
            use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
            const start = Object.assign({}, events[open][1].end);
            const end = Object.assign({}, events[index][1].start);
            $d8d9e51e8ec48408$var$movePoint(start, -use);
            $d8d9e51e8ec48408$var$movePoint(end, use);
            openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: start,
                end: Object.assign({}, events[open][1].end)
            };
            closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, events[index][1].start),
                end: end
            };
            text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index][1].start)
            };
            group = {
                type: use > 1 ? "strong" : "emphasis",
                start: Object.assign({}, openingSequence.start),
                end: Object.assign({}, closingSequence.end)
            };
            events[open][1].end = Object.assign({}, openingSequence.start);
            events[index][1].start = Object.assign({}, closingSequence.end);
            nextEvents = [];
            // If there are more markers in the opening, add them before.
            if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = (0, $eImyu.push)(nextEvents, [
                [
                    "enter",
                    events[open][1],
                    context
                ],
                [
                    "exit",
                    events[open][1],
                    context
                ]
            ]);
            // Opening.
            nextEvents = (0, $eImyu.push)(nextEvents, [
                [
                    "enter",
                    group,
                    context
                ],
                [
                    "enter",
                    openingSequence,
                    context
                ],
                [
                    "exit",
                    openingSequence,
                    context
                ],
                [
                    "enter",
                    text,
                    context
                ]
            ]);
            // Always populated by defaults.
            // Between.
            nextEvents = (0, $eImyu.push)(nextEvents, (0, $exed5.resolveAll)(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
            // Closing.
            nextEvents = (0, $eImyu.push)(nextEvents, [
                [
                    "exit",
                    text,
                    context
                ],
                [
                    "enter",
                    closingSequence,
                    context
                ],
                [
                    "exit",
                    closingSequence,
                    context
                ],
                [
                    "exit",
                    group,
                    context
                ]
            ]);
            // If there are more markers in the closing, add them after.
            if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = (0, $eImyu.push)(nextEvents, [
                    [
                        "enter",
                        events[index][1],
                        context
                    ],
                    [
                        "exit",
                        events[index][1],
                        context
                    ]
                ]);
            } else offset = 0;
            (0, $eImyu.splice)(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - offset - 2;
            break;
        }
    }
    // Remove remaining sequences.
    index = -1;
    while(++index < events.length)if (events[index][1].type === "attentionSequence") events[index][1].type = "data";
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $d8d9e51e8ec48408$var$tokenizeAttention(effects, ok) {
    const attentionMarkers = this.parser.constructs.attentionMarkers.null;
    const previous = this.previous;
    const before = (0, $g866F.classifyCharacter)(previous);
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /**
   * Before a sequence.
   *
   * ```markdown
   * > | **
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        marker = code;
        effects.enter("attentionSequence");
        return inside(code);
    }
    /**
   * In a sequence.
   *
   * ```markdown
   * > | **
   *     ^^
   * ```
   *
   * @type {State}
   */ function inside(code) {
        if (code === marker) {
            effects.consume(code);
            return inside;
        }
        const token = effects.exit("attentionSequence");
        // To do: next major: move this to resolver, just like `markdown-rs`.
        const after = (0, $g866F.classifyCharacter)(code);
        // Always populated by defaults.
        const open = !after || after === 2 && before || attentionMarkers.includes(code);
        const close = !before || before === 2 && after || attentionMarkers.includes(previous);
        token._open = Boolean(marker === 42 ? open : open && (before || !close));
        token._close = Boolean(marker === 42 ? close : close && (after || !open));
        return ok(code);
    }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */ function $d8d9e51e8ec48408$var$movePoint(point, offset) {
    point.column += offset;
    point.offset += offset;
    point._bufferIndex += offset;
}

});
parcelRequire.register("g866F", function(module, exports) {

$parcel$export(module.exports, "classifyCharacter", () => $bbe22150c0a3adc4$export$e3902bc0d835cad0);
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ 
var $eeqNr = parcelRequire("eeqNr");
function $bbe22150c0a3adc4$export$e3902bc0d835cad0(code) {
    if (code === null || (0, $eeqNr.markdownLineEndingOrSpace)(code) || (0, $eeqNr.unicodeWhitespace)(code)) return 1;
    if ((0, $eeqNr.unicodePunctuation)(code)) return 2;
}

});


parcelRequire.register("7oOJa", function(module, exports) {

$parcel$export(module.exports, "autolink", () => $56321fb5ff34d3b4$export$17ddf85e4c916ad6);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $eeqNr = parcelRequire("eeqNr");
const $56321fb5ff34d3b4$export$17ddf85e4c916ad6 = {
    name: "autolink",
    tokenize: $56321fb5ff34d3b4$var$tokenizeAutolink
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $56321fb5ff34d3b4$var$tokenizeAutolink(effects, ok, nok) {
    let size = 0;
    return start;
    /**
   * Start of an autolink.
   *
   * ```markdown
   * > | a<https://example.com>b
   *      ^
   * > | a<user@example.com>b
   *      ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
    }
    /**
   * After `<`, at protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *       ^
   * > | a<user@example.com>b
   *       ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            return schemeOrEmailAtext;
        }
        return emailAtext(code);
    }
    /**
   * At second byte of protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */ function schemeOrEmailAtext(code) {
        // ASCII alphanumeric and `+`, `-`, and `.`.
        if (code === 43 || code === 45 || code === 46 || (0, $eeqNr.asciiAlphanumeric)(code)) {
            // Count the previous alphabetical from `open` too.
            size = 1;
            return schemeInsideOrEmailAtext(code);
        }
        return emailAtext(code);
    }
    /**
   * In ambiguous protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */ function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
            effects.consume(code);
            size = 0;
            return urlInside;
        }
        // ASCII alphanumeric and `+`, `-`, and `.`.
        if ((code === 43 || code === 45 || code === 46 || (0, $eeqNr.asciiAlphanumeric)(code)) && size++ < 32) {
            effects.consume(code);
            return schemeInsideOrEmailAtext;
        }
        size = 0;
        return emailAtext(code);
    }
    /**
   * After protocol, in URL.
   *
   * ```markdown
   * > | a<https://example.com>b
   *             ^
   * ```
   *
   * @type {State}
   */ function urlInside(code) {
        if (code === 62) {
            effects.exit("autolinkProtocol");
            effects.enter("autolinkMarker");
            effects.consume(code);
            effects.exit("autolinkMarker");
            effects.exit("autolink");
            return ok;
        }
        // ASCII control, space, or `<`.
        if (code === null || code === 32 || code === 60 || (0, $eeqNr.asciiControl)(code)) return nok(code);
        effects.consume(code);
        return urlInside;
    }
    /**
   * In email atext.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *              ^
   * ```
   *
   * @type {State}
   */ function emailAtext(code) {
        if (code === 64) {
            effects.consume(code);
            return emailAtSignOrDot;
        }
        if ((0, $eeqNr.asciiAtext)(code)) {
            effects.consume(code);
            return emailAtext;
        }
        return nok(code);
    }
    /**
   * In label, after at-sign or dot.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                 ^       ^
   * ```
   *
   * @type {State}
   */ function emailAtSignOrDot(code) {
        return (0, $eeqNr.asciiAlphanumeric)(code) ? emailLabel(code) : nok(code);
    }
    /**
   * In label, where `.` and `>` are allowed.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                   ^
   * ```
   *
   * @type {State}
   */ function emailLabel(code) {
        if (code === 46) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (code === 62) {
            // Exit, then change the token type.
            effects.exit("autolinkProtocol").type = "autolinkEmail";
            effects.enter("autolinkMarker");
            effects.consume(code);
            effects.exit("autolinkMarker");
            effects.exit("autolink");
            return ok;
        }
        return emailValue(code);
    }
    /**
   * In label, where `.` and `>` are *not* allowed.
   *
   * Though, this is also used in `emailLabel` to parse other values.
   *
   * ```markdown
   * > | a<user.name@ex-ample.com>b
   *                    ^
   * ```
   *
   * @type {State}
   */ function emailValue(code) {
        // ASCII alphanumeric or `-`.
        if ((code === 45 || (0, $eeqNr.asciiAlphanumeric)(code)) && size++ < 63) {
            const next = code === 45 ? emailValue : emailLabel;
            effects.consume(code);
            return next;
        }
        return nok(code);
    }
}

});

parcelRequire.register("liNGY", function(module, exports) {

$parcel$export(module.exports, "blockQuote", () => $f821d338fdc53d63$export$200dcd0a5903c968);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $f821d338fdc53d63$export$200dcd0a5903c968 = {
    name: "blockQuote",
    tokenize: $f821d338fdc53d63$var$tokenizeBlockQuoteStart,
    continuation: {
        tokenize: $f821d338fdc53d63$var$tokenizeBlockQuoteContinuation
    },
    exit: $f821d338fdc53d63$var$exit
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $f821d338fdc53d63$var$tokenizeBlockQuoteStart(effects, ok, nok) {
    const self = this;
    return start;
    /**
   * Start of block quote.
   *
   * ```markdown
   * > | > a
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === 62) {
            const state = self.containerState;
            if (!state.open) {
                effects.enter("blockQuote", {
                    _container: true
                });
                state.open = true;
            }
            effects.enter("blockQuotePrefix");
            effects.enter("blockQuoteMarker");
            effects.consume(code);
            effects.exit("blockQuoteMarker");
            return after;
        }
        return nok(code);
    }
    /**
   * After `>`, before optional whitespace.
   *
   * ```markdown
   * > | > a
   *      ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.enter("blockQuotePrefixWhitespace");
            effects.consume(code);
            effects.exit("blockQuotePrefixWhitespace");
            effects.exit("blockQuotePrefix");
            return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
    }
}
/**
 * Start of block quote continuation.
 *
 * ```markdown
 *   | > a
 * > | > b
 *     ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $f821d338fdc53d63$var$tokenizeBlockQuoteContinuation(effects, ok, nok) {
    const self = this;
    return contStart;
    /**
   * Start of block quote continuation.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */ function contStart(code) {
        if ((0, $eeqNr.markdownSpace)(code)) // Always populated by defaults.
        return (0, $k9KEM.factorySpace)(effects, contBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code);
        return contBefore(code);
    }
    /**
   * At `>`, after optional whitespace.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */ function contBefore(code) {
        return effects.attempt($f821d338fdc53d63$export$200dcd0a5903c968, ok, nok)(code);
    }
}
/** @type {Exiter} */ function $f821d338fdc53d63$var$exit(effects) {
    effects.exit("blockQuote");
}

});

parcelRequire.register("45JcU", function(module, exports) {

$parcel$export(module.exports, "characterEscape", () => $2faab23f8aa6e733$export$2005478564e78d96);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $eeqNr = parcelRequire("eeqNr");
const $2faab23f8aa6e733$export$2005478564e78d96 = {
    name: "characterEscape",
    tokenize: $2faab23f8aa6e733$var$tokenizeCharacterEscape
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $2faab23f8aa6e733$var$tokenizeCharacterEscape(effects, ok, nok) {
    return start;
    /**
   * Start of character escape.
   *
   * ```markdown
   * > | a\*b
   *      ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return inside;
    }
    /**
   * After `\`, at punctuation.
   *
   * ```markdown
   * > | a\*b
   *       ^
   * ```
   *
   * @type {State}
   */ function inside(code) {
        // ASCII punctuation.
        if ((0, $eeqNr.asciiPunctuation)(code)) {
            effects.enter("characterEscapeValue");
            effects.consume(code);
            effects.exit("characterEscapeValue");
            effects.exit("characterEscape");
            return ok;
        }
        return nok(code);
    }
}

});

parcelRequire.register("4aUVC", function(module, exports) {

$parcel$export(module.exports, "characterReference", () => $30a441624c1cd85c$export$e31905600aaf3d8e);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $3f4Qu = parcelRequire("3f4Qu");

var $eeqNr = parcelRequire("eeqNr");
const $30a441624c1cd85c$export$e31905600aaf3d8e = {
    name: "characterReference",
    tokenize: $30a441624c1cd85c$var$tokenizeCharacterReference
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $30a441624c1cd85c$var$tokenizeCharacterReference(effects, ok, nok) {
    const self = this;
    let size = 0;
    /** @type {number} */ let max;
    /** @type {(code: Code) => boolean} */ let test;
    return start;
    /**
   * Start of character reference.
   *
   * ```markdown
   * > | a&amp;b
   *      ^
   * > | a&#123;b
   *      ^
   * > | a&#x9;b
   *      ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
    }
    /**
   * After `&`, at `#` for numeric references or alphanumeric for named
   * references.
   *
   * ```markdown
   * > | a&amp;b
   *       ^
   * > | a&#123;b
   *       ^
   * > | a&#x9;b
   *       ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        if (code === 35) {
            effects.enter("characterReferenceMarkerNumeric");
            effects.consume(code);
            effects.exit("characterReferenceMarkerNumeric");
            return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = (0, $eeqNr.asciiAlphanumeric);
        return value(code);
    }
    /**
   * After `#`, at `x` for hexadecimals or digit for decimals.
   *
   * ```markdown
   * > | a&#123;b
   *        ^
   * > | a&#x9;b
   *        ^
   * ```
   *
   * @type {State}
   */ function numeric(code) {
        if (code === 88 || code === 120) {
            effects.enter("characterReferenceMarkerHexadecimal");
            effects.consume(code);
            effects.exit("characterReferenceMarkerHexadecimal");
            effects.enter("characterReferenceValue");
            max = 6;
            test = (0, $eeqNr.asciiHexDigit);
            return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = (0, $eeqNr.asciiDigit);
        return value(code);
    }
    /**
   * After markers (`&#x`, `&#`, or `&`), in value, before `;`.
   *
   * The character reference kind defines what and how many characters are
   * allowed.
   *
   * ```markdown
   * > | a&amp;b
   *       ^^^
   * > | a&#123;b
   *        ^^^
   * > | a&#x9;b
   *         ^
   * ```
   *
   * @type {State}
   */ function value(code) {
        if (code === 59 && size) {
            const token = effects.exit("characterReferenceValue");
            if (test === (0, $eeqNr.asciiAlphanumeric) && !(0, $3f4Qu.decodeNamedCharacterReference)(self.sliceSerialize(token))) return nok(code);
            // To do: `markdown-rs` uses a different name:
            // `CharacterReferenceMarkerSemi`.
            effects.enter("characterReferenceMarker");
            effects.consume(code);
            effects.exit("characterReferenceMarker");
            effects.exit("characterReference");
            return ok;
        }
        if (test(code) && size++ < max) {
            effects.consume(code);
            return value;
        }
        return nok(code);
    }
}

});
parcelRequire.register("3f4Qu", function(module, exports) {

$parcel$export(module.exports, "decodeNamedCharacterReference", () => $25c6880e571792bd$export$289b6a6320f709b4);

var $b9QOo = parcelRequire("b9QOo");
const $25c6880e571792bd$var$own = {}.hasOwnProperty;
function $25c6880e571792bd$export$289b6a6320f709b4(value) {
    return $25c6880e571792bd$var$own.call((0, $b9QOo.characterEntities), value) ? (0, $b9QOo.characterEntities)[value] : false;
}

});
parcelRequire.register("b9QOo", function(module, exports) {

$parcel$export(module.exports, "characterEntities", () => $81f9804e5f340f40$export$ec810d1aafce79a7);
/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */ const $81f9804e5f340f40$export$ec810d1aafce79a7 = {
    AElig: "\xc6",
    AMP: "&",
    Aacute: "\xc1",
    Abreve: "Ă",
    Acirc: "\xc2",
    Acy: "А",
    Afr: "\uD835\uDD04",
    Agrave: "\xc0",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "\uD835\uDD38",
    ApplyFunction: "⁡",
    Aring: "\xc5",
    Ascr: "\uD835\uDC9C",
    Assign: "≔",
    Atilde: "\xc3",
    Auml: "\xc4",
    Backslash: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    Bcy: "Б",
    Because: "∵",
    Bernoullis: "ℬ",
    Beta: "Β",
    Bfr: "\uD835\uDD05",
    Bopf: "\uD835\uDD39",
    Breve: "˘",
    Bscr: "ℬ",
    Bumpeq: "≎",
    CHcy: "Ч",
    COPY: "\xa9",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    Cayleys: "ℭ",
    Ccaron: "Č",
    Ccedil: "\xc7",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "\xb8",
    CenterDot: "\xb7",
    Cfr: "ℭ",
    Chi: "Χ",
    CircleDot: "⊙",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    Colon: "∷",
    Colone: "⩴",
    Congruent: "≡",
    Conint: "∯",
    ContourIntegral: "∮",
    Copf: "ℂ",
    Coproduct: "∐",
    CounterClockwiseContourIntegral: "∳",
    Cross: "⨯",
    Cscr: "\uD835\uDC9E",
    Cup: "⋓",
    CupCap: "≍",
    DD: "ⅅ",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    Delta: "Δ",
    Dfr: "\uD835\uDD07",
    DiacriticalAcute: "\xb4",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    Diamond: "⋄",
    DifferentialD: "ⅆ",
    Dopf: "\uD835\uDD3B",
    Dot: "\xa8",
    DotDot: "⃜",
    DotEqual: "≐",
    DoubleContourIntegral: "∯",
    DoubleDot: "\xa8",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    Downarrow: "⇓",
    Dscr: "\uD835\uDC9F",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "\xd0",
    Eacute: "\xc9",
    Ecaron: "Ě",
    Ecirc: "\xca",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "\uD835\uDD08",
    Egrave: "\xc8",
    Element: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "\uD835\uDD3C",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    Equilibrium: "⇌",
    Escr: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "\xcb",
    Exists: "∃",
    ExponentialE: "ⅇ",
    Fcy: "Ф",
    Ffr: "\uD835\uDD09",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    Fopf: "\uD835\uDD3D",
    ForAll: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "\uD835\uDD0A",
    Gg: "⋙",
    Gopf: "\uD835\uDD3E",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "\uD835\uDCA2",
    Gt: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    Hopf: "ℍ",
    HorizontalLine: "─",
    Hscr: "ℋ",
    Hstrok: "Ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "\xcd",
    Icirc: "\xce",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Igrave: "\xcc",
    Im: "ℑ",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    Implies: "⇒",
    Int: "∬",
    Integral: "∫",
    Intersection: "⋂",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    Iogon: "Į",
    Iopf: "\uD835\uDD40",
    Iota: "Ι",
    Iscr: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "\xcf",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "\uD835\uDD0D",
    Jopf: "\uD835\uDD41",
    Jscr: "\uD835\uDCA5",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "\uD835\uDD0E",
    Kopf: "\uD835\uDD42",
    Kscr: "\uD835\uDCA6",
    LJcy: "Љ",
    LT: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Larr: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    LeftRightArrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    Leftarrow: "⇐",
    Leftrightarrow: "⇔",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    Lfr: "\uD835\uDD0F",
    Ll: "⋘",
    Lleftarrow: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    LongLeftRightArrow: "⟷",
    LongRightArrow: "⟶",
    Longleftarrow: "⟸",
    Longleftrightarrow: "⟺",
    Longrightarrow: "⟹",
    Lopf: "\uD835\uDD43",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    Lscr: "ℒ",
    Lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "\uD835\uDD10",
    MinusPlus: "∓",
    Mopf: "\uD835\uDD44",
    Mscr: "ℳ",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: "\n",
    Nfr: "\uD835\uDD11",
    NoBreak: "⁠",
    NonBreakingSpace: "\xa0",
    Nopf: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    Nscr: "\uD835\uDCA9",
    Ntilde: "\xd1",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "\uD835\uDD12",
    Ograve: "\xd2",
    Omacr: "Ō",
    Omega: "Ω",
    Omicron: "Ο",
    Oopf: "\uD835\uDD46",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    Or: "⩔",
    Oscr: "\uD835\uDCAA",
    Oslash: "\xd8",
    Otilde: "\xd5",
    Otimes: "⨷",
    Ouml: "\xd6",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    Pcy: "П",
    Pfr: "\uD835\uDD13",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "\xb1",
    Poincareplane: "ℌ",
    Popf: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    Prime: "″",
    Product: "∏",
    Proportion: "∷",
    Proportional: "∝",
    Pscr: "\uD835\uDCAB",
    Psi: "Ψ",
    QUOT: '"',
    Qfr: "\uD835\uDD14",
    Qopf: "ℚ",
    Qscr: "\uD835\uDCAC",
    RBarr: "⤐",
    REG: "\xae",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    Rfr: "ℜ",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    Rightarrow: "⇒",
    Ropf: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    Rscr: "ℛ",
    Rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "\uD835\uDD16",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    Sopf: "\uD835\uDD4A",
    Sqrt: "√",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    Sscr: "\uD835\uDCAE",
    Star: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    SuchThat: "∋",
    Sum: "∑",
    Sup: "⋑",
    Superset: "⊃",
    SupersetEqual: "⊇",
    Supset: "⋑",
    THORN: "\xde",
    TRADE: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "	",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "\uD835\uDD17",
    Therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    Topf: "\uD835\uDD4B",
    TripleDot: "⃛",
    Tscr: "\uD835\uDCAF",
    Tstrok: "Ŧ",
    Uacute: "\xda",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "\xdb",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "\uD835\uDD18",
    Ugrave: "\xd9",
    Umacr: "Ū",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    Uopf: "\uD835\uDD4C",
    UpArrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    UpEquilibrium: "⥮",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    Uparrow: "⇑",
    Updownarrow: "⇕",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "\uD835\uDCB0",
    Utilde: "Ũ",
    Uuml: "\xdc",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "\uD835\uDD19",
    Vopf: "\uD835\uDD4D",
    Vscr: "\uD835\uDCB1",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    Wfr: "\uD835\uDD1A",
    Wopf: "\uD835\uDD4E",
    Wscr: "\uD835\uDCB2",
    Xfr: "\uD835\uDD1B",
    Xi: "Ξ",
    Xopf: "\uD835\uDD4F",
    Xscr: "\uD835\uDCB3",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "\xdd",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "\uD835\uDD1C",
    Yopf: "\uD835\uDD50",
    Yscr: "\uD835\uDCB4",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    Zfr: "ℨ",
    Zopf: "ℤ",
    Zscr: "\uD835\uDCB5",
    aacute: "\xe1",
    abreve: "ă",
    ac: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "\xe2",
    acute: "\xb4",
    acy: "а",
    aelig: "\xe6",
    af: "⁡",
    afr: "\uD835\uDD1E",
    agrave: "\xe0",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "\xc5",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "\uD835\uDD52",
    ap: "≈",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    apid: "≋",
    apos: "'",
    approx: "≈",
    approxeq: "≊",
    aring: "\xe5",
    ascr: "\uD835\uDCB6",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    atilde: "\xe3",
    auml: "\xe4",
    awconint: "∳",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    bfr: "\uD835\uDD1F",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "\uD835\uDD53",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxh: "─",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    bprime: "‵",
    breve: "˘",
    brvbar: "\xa6",
    bscr: "\uD835\uDCB7",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    bumpeq: "≏",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "\xe7",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cedil: "\xb8",
    cemptyv: "⦲",
    cent: "\xa2",
    centerdot: "\xb7",
    cfr: "\uD835\uDD20",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledR: "\xae",
    circledS: "Ⓢ",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    conint: "∮",
    copf: "\uD835\uDD54",
    coprod: "∐",
    copy: "\xa9",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "\uD835\uDCB8",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "\xa4",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dArr: "⇓",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    darr: "↓",
    dash: "‐",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    dcaron: "ď",
    dcy: "д",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    ddotseq: "⩷",
    deg: "\xb0",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "\uD835\uDD21",
    dharl: "⇃",
    dharr: "⇂",
    diam: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "\xa8",
    digamma: "ϝ",
    disin: "⋲",
    div: "\xf7",
    divide: "\xf7",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "\uD835\uDD55",
    dot: "˙",
    doteq: "≐",
    doteqdot: "≑",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    downarrow: "↓",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    dscr: "\uD835\uDCB9",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eDDot: "⩷",
    eDot: "≑",
    eacute: "\xe9",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    ecirc: "\xea",
    ecolon: "≕",
    ecy: "э",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    efr: "\uD835\uDD22",
    eg: "⪚",
    egrave: "\xe8",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "\uD835\uDD56",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    equals: "=",
    equest: "≟",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    erarr: "⥱",
    escr: "ℯ",
    esdot: "≐",
    esim: "≂",
    eta: "η",
    eth: "\xf0",
    euml: "\xeb",
    euro: "€",
    excl: "!",
    exist: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "\uD835\uDD23",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "\uD835\uDD57",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "\xbd",
    frac13: "⅓",
    frac14: "\xbc",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "\xbe",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "\uD835\uDCBB",
    gE: "≧",
    gEl: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gammad: "ϝ",
    gap: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    ge: "≥",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "\uD835\uDD24",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    gjcy: "ѓ",
    gl: "≷",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    gopf: "\uD835\uDD58",
    grave: "`",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hArr: "⇔",
    hairsp: " ",
    half: "\xbd",
    hamilt: "ℋ",
    hardcy: "ъ",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    hbar: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "\uD835\uDD25",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "\uD835\uDD59",
    horbar: "―",
    hscr: "\uD835\uDCBD",
    hslash: "ℏ",
    hstrok: "ħ",
    hybull: "⁃",
    hyphen: "‐",
    iacute: "\xed",
    ic: "⁣",
    icirc: "\xee",
    icy: "и",
    iecy: "е",
    iexcl: "\xa1",
    iff: "⇔",
    ifr: "\uD835\uDD26",
    igrave: "\xec",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    image: "ℑ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "\uD835\uDD5A",
    iota: "ι",
    iprod: "⨼",
    iquest: "\xbf",
    iscr: "\uD835\uDCBE",
    isin: "∈",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "\xef",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "\uD835\uDD27",
    jmath: "ȷ",
    jopf: "\uD835\uDD5B",
    jscr: "\uD835\uDCBF",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "\uD835\uDD28",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "\uD835\uDD5C",
    kscr: "\uD835\uDCC0",
    lAarr: "⇚",
    lArr: "⇐",
    lAtail: "⤛",
    lBarr: "⤎",
    lE: "≦",
    lEg: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    lambda: "λ",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    laquo: "\xab",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leftarrow: "←",
    leftarrowtail: "↢",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    leftthreetimes: "⋋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    lessgtr: "≶",
    lesssim: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    lfr: "\uD835\uDD29",
    lg: "≶",
    lgE: "⪑",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    lopf: "\uD835\uDD5D",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "\uD835\uDCC1",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    lstrok: "ł",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "\xaf",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    measuredangle: "∡",
    mfr: "\uD835\uDD2A",
    mho: "℧",
    micro: "\xb5",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "\xb7",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    mopf: "\uD835\uDD5E",
    mp: "∓",
    mscr: "\uD835\uDCC2",
    mstpos: "∾",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nGtv: "≫̸",
    nLeftarrow: "⇍",
    nLeftrightarrow: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nLtv: "≪̸",
    nRightarrow: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nabla: "∇",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: "\xa0",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    neArr: "⇗",
    nearhk: "⤤",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    nexist: "∄",
    nexists: "∄",
    nfr: "\uD835\uDD2B",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    ngsim: "≵",
    ngt: "≯",
    ngtr: "≯",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    njcy: "њ",
    nlArr: "⇍",
    nlE: "≦̸",
    nlarr: "↚",
    nldr: "‥",
    nle: "≰",
    nleftarrow: "↚",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nlsim: "≴",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nmid: "∤",
    nopf: "\uD835\uDD5F",
    not: "\xac",
    notin: "∉",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    nscr: "\uD835\uDCC3",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    ntilde: "\xf1",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    oS: "Ⓢ",
    oacute: "\xf3",
    oast: "⊛",
    ocir: "⊚",
    ocirc: "\xf4",
    ocy: "о",
    odash: "⊝",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "\uD835\uDD2C",
    ogon: "˛",
    ograve: "\xf2",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    oopf: "\uD835\uDD60",
    opar: "⦷",
    operp: "⦹",
    oplus: "⊕",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "\xaa",
    ordm: "\xba",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oscr: "ℴ",
    oslash: "\xf8",
    osol: "⊘",
    otilde: "\xf5",
    otimes: "⊗",
    otimesas: "⨶",
    ouml: "\xf6",
    ovbar: "⌽",
    par: "∥",
    para: "\xb6",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    pfr: "\uD835\uDD2D",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    plusmn: "\xb1",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "\xb1",
    pointint: "⨕",
    popf: "\uD835\uDD61",
    pound: "\xa3",
    pr: "≺",
    prE: "⪳",
    prap: "⪷",
    prcue: "≼",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    prime: "′",
    primes: "ℙ",
    prnE: "⪵",
    prnap: "⪹",
    prnsim: "⋨",
    prod: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    pscr: "\uD835\uDCC5",
    psi: "ψ",
    puncsp: " ",
    qfr: "\uD835\uDD2E",
    qint: "⨌",
    qopf: "\uD835\uDD62",
    qprime: "⁗",
    qscr: "\uD835\uDCC6",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    rAarr: "⇛",
    rArr: "⇒",
    rAtail: "⤜",
    rBarr: "⤏",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "\xbb",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    reg: "\xae",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "\uD835\uDD2F",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    rightarrow: "→",
    rightarrowtail: "↣",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    rightthreetimes: "⋌",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "\uD835\uDD63",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    rsaquo: "›",
    rscr: "\uD835\uDCC7",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    sbquo: "‚",
    sc: "≻",
    scE: "⪴",
    scap: "⪸",
    scaron: "š",
    sccue: "≽",
    sce: "⪰",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    scnap: "⪺",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    seArr: "⇘",
    searhk: "⤥",
    searr: "↘",
    searrow: "↘",
    sect: "\xa7",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    sfr: "\uD835\uDD30",
    sfrown: "⌢",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shortmid: "∣",
    shortparallel: "∥",
    shy: "\xad",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "\uD835\uDD64",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    square: "□",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    sscr: "\uD835\uDCC8",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "\xaf",
    sub: "⊂",
    subE: "⫅",
    subdot: "⪽",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    sum: "∑",
    sung: "♪",
    sup1: "\xb9",
    sup2: "\xb2",
    sup3: "\xb3",
    sup: "⊃",
    supE: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supe: "⊇",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swarhk: "⤦",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "\xdf",
    target: "⌖",
    tau: "τ",
    tbrk: "⎴",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    tfr: "\uD835\uDD31",
    there4: "∴",
    therefore: "∴",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    thorn: "\xfe",
    tilde: "˜",
    times: "\xd7",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    topf: "\uD835\uDD65",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "\uD835\uDCC9",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    uArr: "⇑",
    uHar: "⥣",
    uacute: "\xfa",
    uarr: "↑",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "\xfb",
    ucy: "у",
    udarr: "⇅",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    ufr: "\uD835\uDD32",
    ugrave: "\xf9",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uml: "\xa8",
    uogon: "ų",
    uopf: "\uD835\uDD66",
    uparrow: "↑",
    updownarrow: "↕",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    upsi: "υ",
    upsih: "ϒ",
    upsilon: "υ",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "\uD835\uDCCA",
    utdot: "⋰",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    uuml: "\xfc",
    uwangle: "⦧",
    vArr: "⇕",
    vBar: "⫨",
    vBarv: "⫩",
    vDash: "⊨",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vcy: "в",
    vdash: "⊢",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    vert: "|",
    vfr: "\uD835\uDD33",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    vopf: "\uD835\uDD67",
    vprop: "∝",
    vrtri: "⊳",
    vscr: "\uD835\uDCCB",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    wfr: "\uD835\uDD34",
    wopf: "\uD835\uDD68",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    wscr: "\uD835\uDCCC",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    xfr: "\uD835\uDD35",
    xhArr: "⟺",
    xharr: "⟷",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    xopf: "\uD835\uDD69",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    xscr: "\uD835\uDCCD",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    yacute: "\xfd",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "\xa5",
    yfr: "\uD835\uDD36",
    yicy: "ї",
    yopf: "\uD835\uDD6A",
    yscr: "\uD835\uDCCE",
    yucy: "ю",
    yuml: "\xff",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeetrf: "ℨ",
    zeta: "ζ",
    zfr: "\uD835\uDD37",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "\uD835\uDD6B",
    zscr: "\uD835\uDCCF",
    zwj: "‍",
    zwnj: "‌"
};

});



parcelRequire.register("hxTgh", function(module, exports) {

$parcel$export(module.exports, "codeFenced", () => $cc60628ee9eac6b6$export$c23e4921f8d87e7c);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
/** @type {Construct} */ const $cc60628ee9eac6b6$var$nonLazyContinuation = {
    tokenize: $cc60628ee9eac6b6$var$tokenizeNonLazyContinuation,
    partial: true
};
const $cc60628ee9eac6b6$export$c23e4921f8d87e7c = {
    name: "codeFenced",
    tokenize: $cc60628ee9eac6b6$var$tokenizeCodeFenced,
    concrete: true
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $cc60628ee9eac6b6$var$tokenizeCodeFenced(effects, ok, nok) {
    const self = this;
    /** @type {Construct} */ const closeStart = {
        tokenize: tokenizeCloseStart,
        partial: true
    };
    let initialPrefix = 0;
    let sizeOpen = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /**
   * Start of code.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function start(code) {
        // To do: parse whitespace like `markdown-rs`.
        return beforeSequenceOpen(code);
    }
    /**
   * In opening fence, after prefix, at sequence.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function beforeSequenceOpen(code) {
        const tail = self.events[self.events.length - 1];
        initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
        marker = code;
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        return sequenceOpen(code);
    }
    /**
   * In opening fence sequence.
   *
   * ```markdown
   * > | ~~~js
   *      ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function sequenceOpen(code) {
        if (code === marker) {
            sizeOpen++;
            effects.consume(code);
            return sequenceOpen;
        }
        if (sizeOpen < 3) return nok(code);
        effects.exit("codeFencedFenceSequence");
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, infoBefore, "whitespace")(code) : infoBefore(code);
    }
    /**
   * In opening fence, after the sequence (and optional whitespace), before info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function infoBefore(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("codeFencedFence");
            return self.interrupt ? ok(code) : effects.check($cc60628ee9eac6b6$var$nonLazyContinuation, atNonLazyBreak, after)(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return info(code);
    }
    /**
   * In info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function info(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceInfo");
            return infoBefore(code);
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceInfo");
            return (0, $k9KEM.factorySpace)(effects, metaBefore, "whitespace")(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return info;
    }
    /**
   * In opening fence, after info and whitespace, before meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function metaBefore(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) return infoBefore(code);
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return meta(code);
    }
    /**
   * In meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function meta(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceMeta");
            return infoBefore(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return meta;
    }
    /**
   * At eol/eof in code, before a non-lazy closing fence or content.
   *
   * ```markdown
   * > | ~~~js
   *          ^
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function atNonLazyBreak(code) {
        return effects.attempt(closeStart, after, contentBefore)(code);
    }
    /**
   * Before code content, not a closing fence, at eol.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function contentBefore(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return contentStart;
    }
    /**
   * Before code content, not a closing fence.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function contentStart(code) {
        return initialPrefix > 0 && (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code) : beforeContentChunk(code);
    }
    /**
   * Before code content, after optional prefix.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function beforeContentChunk(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) return effects.check($cc60628ee9eac6b6$var$nonLazyContinuation, atNonLazyBreak, after)(code);
        effects.enter("codeFlowValue");
        return contentChunk(code);
    }
    /**
   * In code content.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^^^^^^^^
   *   | ~~~
   * ```
   *
   * @type {State}
   */ function contentChunk(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("codeFlowValue");
            return beforeContentChunk(code);
        }
        effects.consume(code);
        return contentChunk;
    }
    /**
   * After code.
   *
   * ```markdown
   *   | ~~~js
   *   | alert(1)
   * > | ~~~
   *        ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        effects.exit("codeFenced");
        return ok(code);
    }
    /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */ function tokenizeCloseStart(effects, ok, nok) {
        let size = 0;
        return startBefore;
        /**
     *
     *
     * @type {State}
     */ function startBefore(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return start;
        }
        /**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */ function start(code) {
            // Always populated by defaults.
            // To do: `enter` here or in next state?
            effects.enter("codeFencedFence");
            return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code) : beforeSequenceClose(code);
        }
        /**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */ function beforeSequenceClose(code) {
            if (code === marker) {
                effects.enter("codeFencedFenceSequence");
                return sequenceClose(code);
            }
            return nok(code);
        }
        /**
     * In closing fence sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */ function sequenceClose(code) {
            if (code === marker) {
                size++;
                effects.consume(code);
                return sequenceClose;
            }
            if (size >= sizeOpen) {
                effects.exit("codeFencedFenceSequence");
                return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, sequenceCloseAfter, "whitespace")(code) : sequenceCloseAfter(code);
            }
            return nok(code);
        }
        /**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *        ^
     * ```
     *
     * @type {State}
     */ function sequenceCloseAfter(code) {
            if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
                effects.exit("codeFencedFence");
                return ok(code);
            }
            return nok(code);
        }
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $cc60628ee9eac6b6$var$tokenizeNonLazyContinuation(effects, ok, nok) {
    const self = this;
    return start;
    /**
   *
   *
   * @type {State}
   */ function start(code) {
        if (code === null) return nok(code);
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return lineStart;
    }
    /**
   *
   *
   * @type {State}
   */ function lineStart(code) {
        return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
}

});

parcelRequire.register("iUumc", function(module, exports) {

$parcel$export(module.exports, "codeIndented", () => $dc45013c5a9390f5$export$47910b7ab28d1853);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $dc45013c5a9390f5$export$47910b7ab28d1853 = {
    name: "codeIndented",
    tokenize: $dc45013c5a9390f5$var$tokenizeCodeIndented
};
/** @type {Construct} */ const $dc45013c5a9390f5$var$furtherStart = {
    tokenize: $dc45013c5a9390f5$var$tokenizeFurtherStart,
    partial: true
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $dc45013c5a9390f5$var$tokenizeCodeIndented(effects, ok, nok) {
    const self = this;
    return start;
    /**
   * Start of code (indented).
   *
   * > **Parsing note**: it is not needed to check if this first line is a
   * > filled line (that it has a non-whitespace character), because blank lines
   * > are parsed already, so we never run into that.
   *
   * ```markdown
   * > |     aaa
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        // To do: manually check if interrupting like `markdown-rs`.
        effects.enter("codeIndented");
        // To do: use an improved `space_or_tab` function like `markdown-rs`,
        // so that we can drop the next state.
        return (0, $k9KEM.factorySpace)(effects, afterPrefix, "linePrefix", 5)(code);
    }
    /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code) : nok(code);
    }
    /**
   * At a break.
   *
   * ```markdown
   * > |     aaa
   *         ^  ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === null) return after(code);
        if ((0, $eeqNr.markdownLineEnding)(code)) return effects.attempt($dc45013c5a9390f5$var$furtherStart, atBreak, after)(code);
        effects.enter("codeFlowValue");
        return inside(code);
    }
    /**
   * In code content.
   *
   * ```markdown
   * > |     aaa
   *         ^^^^
   * ```
   *
   * @type {State}
   */ function inside(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("codeFlowValue");
            return atBreak(code);
        }
        effects.consume(code);
        return inside;
    }
    /** @type {State} */ function after(code) {
        effects.exit("codeIndented");
        // To do: allow interrupting like `markdown-rs`.
        // Feel free to interrupt.
        // tokenizer.interrupt = false
        return ok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $dc45013c5a9390f5$var$tokenizeFurtherStart(effects, ok, nok) {
    const self = this;
    return furtherStart;
    /**
   * At eol, trying to parse another indent.
   *
   * ```markdown
   * > |     aaa
   *            ^
   *   |     bbb
   * ```
   *
   * @type {State}
   */ function furtherStart(code) {
        // To do: improve `lazy` / `pierce` handling.
        // If this is a lazy line, it can’t be code.
        if (self.parser.lazy[self.now().line]) return nok(code);
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return furtherStart;
        }
        // To do: the code here in `micromark-js` is a bit different from
        // `markdown-rs` because there it can attempt spaces.
        // We can’t yet.
        //
        // To do: use an improved `space_or_tab` function like `markdown-rs`,
        // so that we can drop the next state.
        return (0, $k9KEM.factorySpace)(effects, afterPrefix, "linePrefix", 5)(code);
    }
    /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : (0, $eeqNr.markdownLineEnding)(code) ? furtherStart(code) : nok(code);
    }
}

});

parcelRequire.register("a57EM", function(module, exports) {

$parcel$export(module.exports, "codeText", () => $75704f7ae299fbcd$export$d24f93e715f9df88);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $eeqNr = parcelRequire("eeqNr");
const $75704f7ae299fbcd$export$d24f93e715f9df88 = {
    name: "codeText",
    tokenize: $75704f7ae299fbcd$var$tokenizeCodeText,
    resolve: $75704f7ae299fbcd$var$resolveCodeText,
    previous: $75704f7ae299fbcd$var$previous
};
// To do: next major: don’t resolve, like `markdown-rs`.
/** @type {Resolver} */ function $75704f7ae299fbcd$var$resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    /** @type {number} */ let index;
    /** @type {number | undefined} */ let enter;
    // If we start and end with an EOL or a space.
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex;
        // And we have data.
        while(++index < tailExitIndex)if (events[index][1].type === "codeTextData") {
            // Then we have padding.
            events[headEnterIndex][1].type = "codeTextPadding";
            events[tailExitIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
        }
    }
    // Merge adjacent spaces and data.
    index = headEnterIndex - 1;
    tailExitIndex++;
    while(++index <= tailExitIndex){
        if (enter === undefined) {
            if (index !== tailExitIndex && events[index][1].type !== "lineEnding") enter = index;
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
            events[enter][1].type = "codeTextData";
            if (index !== enter + 2) {
                events[enter][1].end = events[index - 1][1].end;
                events.splice(enter + 2, index - enter - 2);
                tailExitIndex -= index - enter - 2;
                index = enter + 2;
            }
            enter = undefined;
        }
    }
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Previous}
 */ function $75704f7ae299fbcd$var$previous(code) {
    // If there is a previous code, there will always be a tail.
    return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $75704f7ae299fbcd$var$tokenizeCodeText(effects, ok, nok) {
    const self = this;
    let sizeOpen = 0;
    /** @type {number} */ let size;
    /** @type {Token} */ let token;
    return start;
    /**
   * Start of code (text).
   *
   * ```markdown
   * > | `a`
   *     ^
   * > | \`a`
   *      ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return sequenceOpen(code);
    }
    /**
   * In opening sequence.
   *
   * ```markdown
   * > | `a`
   *     ^
   * ```
   *
   * @type {State}
   */ function sequenceOpen(code) {
        if (code === 96) {
            effects.consume(code);
            sizeOpen++;
            return sequenceOpen;
        }
        effects.exit("codeTextSequence");
        return between(code);
    }
    /**
   * Between something and something else.
   *
   * ```markdown
   * > | `a`
   *      ^^
   * ```
   *
   * @type {State}
   */ function between(code) {
        // EOF.
        if (code === null) return nok(code);
        // To do: next major: don’t do spaces in resolve, but when compiling,
        // like `markdown-rs`.
        // Tabs don’t work, and virtual spaces don’t make sense.
        if (code === 32) {
            effects.enter("space");
            effects.consume(code);
            effects.exit("space");
            return between;
        }
        // Closing fence? Could also be data.
        if (code === 96) {
            token = effects.enter("codeTextSequence");
            size = 0;
            return sequenceClose(code);
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return between;
        }
        // Data.
        effects.enter("codeTextData");
        return data(code);
    }
    /**
   * In data.
   *
   * ```markdown
   * > | `a`
   *      ^
   * ```
   *
   * @type {State}
   */ function data(code) {
        if (code === null || code === 32 || code === 96 || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("codeTextData");
            return between(code);
        }
        effects.consume(code);
        return data;
    }
    /**
   * In closing sequence.
   *
   * ```markdown
   * > | `a`
   *       ^
   * ```
   *
   * @type {State}
   */ function sequenceClose(code) {
        // More.
        if (code === 96) {
            effects.consume(code);
            size++;
            return sequenceClose;
        }
        // Done!
        if (size === sizeOpen) {
            effects.exit("codeTextSequence");
            effects.exit("codeText");
            return ok(code);
        }
        // More or less accents: mark as data.
        token.type = "codeTextData";
        return data(code);
    }
}

});

parcelRequire.register("jwUQm", function(module, exports) {

$parcel$export(module.exports, "definition", () => $e37d1970c99aeeb6$export$69f215ed977cdb73);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $hidRE = parcelRequire("hidRE");

var $HtJnB = parcelRequire("HtJnB");

var $k9KEM = parcelRequire("k9KEM");

var $4wEcs = parcelRequire("4wEcs");

var $82mod = parcelRequire("82mod");

var $eeqNr = parcelRequire("eeqNr");

var $dVUv9 = parcelRequire("dVUv9");
const $e37d1970c99aeeb6$export$69f215ed977cdb73 = {
    name: "definition",
    tokenize: $e37d1970c99aeeb6$var$tokenizeDefinition
};
/** @type {Construct} */ const $e37d1970c99aeeb6$var$titleBefore = {
    tokenize: $e37d1970c99aeeb6$var$tokenizeTitleBefore,
    partial: true
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $e37d1970c99aeeb6$var$tokenizeDefinition(effects, ok, nok) {
    const self = this;
    /** @type {string} */ let identifier;
    return start;
    /**
   * At start of a definition.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        // Do not interrupt paragraphs (but do follow definitions).
        // To do: do `interrupt` the way `markdown-rs` does.
        // To do: parse whitespace the way `markdown-rs` does.
        effects.enter("definition");
        return before(code);
    }
    /**
   * After optional whitespace, at `[`.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */ function before(code) {
        // To do: parse whitespace the way `markdown-rs` does.
        return (0, $HtJnB.factoryLabel).call(self, effects, labelAfter, // Note: we don’t need to reset the way `markdown-rs` does.
        nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
    }
    /**
   * After label.
   *
   * ```markdown
   * > | [a]: b "c"
   *        ^
   * ```
   *
   * @type {State}
   */ function labelAfter(code) {
        identifier = (0, $dVUv9.normalizeIdentifier)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
            effects.enter("definitionMarker");
            effects.consume(code);
            effects.exit("definitionMarker");
            return markerAfter;
        }
        return nok(code);
    }
    /**
   * After marker.
   *
   * ```markdown
   * > | [a]: b "c"
   *         ^
   * ```
   *
   * @type {State}
   */ function markerAfter(code) {
        // Note: whitespace is optional.
        return (0, $eeqNr.markdownLineEndingOrSpace)(code) ? (0, $82mod.factoryWhitespace)(effects, destinationBefore)(code) : destinationBefore(code);
    }
    /**
   * Before destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *          ^
   * ```
   *
   * @type {State}
   */ function destinationBefore(code) {
        return (0, $hidRE.factoryDestination)(effects, destinationAfter, // Note: we don’t need to reset the way `markdown-rs` does.
        nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(code);
    }
    /**
   * After destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */ function destinationAfter(code) {
        return effects.attempt($e37d1970c99aeeb6$var$titleBefore, after, after)(code);
    }
    /**
   * After definition.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, afterWhitespace, "whitespace")(code) : afterWhitespace(code);
    }
    /**
   * After definition, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */ function afterWhitespace(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("definition");
            // Note: we don’t care about uniqueness.
            // It’s likely that that doesn’t happen very frequently.
            // It is more likely that it wastes precious time.
            self.parser.defined.push(identifier);
            // To do: `markdown-rs` interrupt.
            // // You’d be interrupting.
            // tokenizer.interrupt = true
            return ok(code);
        }
        return nok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $e37d1970c99aeeb6$var$tokenizeTitleBefore(effects, ok, nok) {
    return titleBefore;
    /**
   * After destination, at whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */ function titleBefore(code) {
        return (0, $eeqNr.markdownLineEndingOrSpace)(code) ? (0, $82mod.factoryWhitespace)(effects, beforeMarker)(code) : nok(code);
    }
    /**
   * At title.
   *
   * ```markdown
   *   | [a]: b
   * > | "c"
   *     ^
   * ```
   *
   * @type {State}
   */ function beforeMarker(code) {
        return (0, $4wEcs.factoryTitle)(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
    }
    /**
   * After title.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */ function titleAfter(code) {
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, titleAfterOptionalWhitespace, "whitespace")(code) : titleAfterOptionalWhitespace(code);
    }
    /**
   * After title, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */ function titleAfterOptionalWhitespace(code) {
        return code === null || (0, $eeqNr.markdownLineEnding)(code) ? ok(code) : nok(code);
    }
}

});
parcelRequire.register("hidRE", function(module, exports) {

$parcel$export(module.exports, "factoryDestination", () => $c96edf474e83472f$export$2e6c8deaa96af245);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */ 
var $eeqNr = parcelRequire("eeqNr");
function $c96edf474e83472f$export$2e6c8deaa96af245(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === 60) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return enclosedBefore;
        }
        // ASCII control, space, closing paren.
        if (code === null || code === 32 || code === 41 || (0, $eeqNr.asciiControl)(code)) return nok(code);
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return raw(code);
    }
    /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosedBefore(code) {
        if (code === 62) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return enclosed(code);
    }
    /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosed(code) {
        if (code === 62) {
            effects.exit("chunkString");
            effects.exit(stringType);
            return enclosedBefore(code);
        }
        if (code === null || code === 60 || (0, $eeqNr.markdownLineEnding)(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? enclosedEscape : enclosed;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */ function enclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
            effects.consume(code);
            return enclosed;
        }
        return enclosed(code);
    }
    /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function raw(code) {
        if (!balance && (code === null || code === 41 || (0, $eeqNr.markdownLineEndingOrSpace)(code))) {
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if (balance < limit && code === 40) {
            effects.consume(code);
            balance++;
            return raw;
        }
        if (code === 41) {
            effects.consume(code);
            balance--;
            return raw;
        }
        // ASCII control (but *not* `\0`) and space and `(`.
        // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
        // doesn’t.
        if (code === null || code === 32 || code === 40 || (0, $eeqNr.asciiControl)(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? rawEscape : raw;
    }
    /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */ function rawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
            effects.consume(code);
            return raw;
        }
        return raw(code);
    }
}

});

parcelRequire.register("HtJnB", function(module, exports) {

$parcel$export(module.exports, "factoryLabel", () => $082b1435f2288a79$export$7b768614d8ba97a7);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */ 
var $eeqNr = parcelRequire("eeqNr");
function $082b1435f2288a79$export$7b768614d8ba97a7(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let seen;
    return start;
    /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (size > 999 || code === null || code === 91 || code === 93 && !seen || // To do: remove in the future once we’ve switched from
        // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
        // which doesn’t need this.
        // Hidden footnotes hook.
        /* c8 ignore next 3 */ code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) return nok(code);
        if (code === 93) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        // To do: indent? Link chunks and EOLs together?
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return atBreak;
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return labelInside(code);
    }
    /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function labelInside(code) {
        if (code === null || code === 91 || code === 93 || (0, $eeqNr.markdownLineEnding)(code) || size++ > 999) {
            effects.exit("chunkString");
            return atBreak(code);
        }
        effects.consume(code);
        if (!seen) seen = !(0, $eeqNr.markdownSpace)(code);
        return code === 92 ? labelEscape : labelInside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */ function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return labelInside;
        }
        return labelInside(code);
    }
}

});

parcelRequire.register("4wEcs", function(module, exports) {

$parcel$export(module.exports, "factoryTitle", () => $34b955784aa00e32$export$f970569cc855e483);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenType} TokenType
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
function $34b955784aa00e32$export$f970569cc855e483(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === 34 || code === 39 || code === 40) {
            effects.enter(type);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            marker = code === 40 ? 41 : code;
            return begin;
        }
        return nok(code);
    }
    /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function begin(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atBreak(code);
    }
    /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return begin(marker);
        }
        if (code === null) return nok(code);
        // Note: blank lines can’t exist in content.
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            // To do: use `space_or_tab_eol_with_options`, connect.
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return (0, $k9KEM.factorySpace)(effects, atBreak, "linePrefix");
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return inside(code);
    }
    /**
   *
   *
   * @type {State}
   */ function inside(code) {
        if (code === marker || code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("chunkString");
            return atBreak(code);
        }
        effects.consume(code);
        return code === 92 ? escape : inside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */ function escape(code) {
        if (code === marker || code === 92) {
            effects.consume(code);
            return inside;
        }
        return inside(code);
    }
}

});

parcelRequire.register("82mod", function(module, exports) {

$parcel$export(module.exports, "factoryWhitespace", () => $5d9fe0bf8c9cdd18$export$1f27bd1aa33ce173);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
function $5d9fe0bf8c9cdd18$export$1f27bd1aa33ce173(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    /** @type {State} */ function start(code) {
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            seen = true;
            return start;
        }
        if ((0, $eeqNr.markdownSpace)(code)) return (0, $k9KEM.factorySpace)(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        return ok(code);
    }
}

});

parcelRequire.register("dVUv9", function(module, exports) {

$parcel$export(module.exports, "normalizeIdentifier", () => $a24c6d3b3c4e282c$export$806d55e226cfcd08);
/**
 * Normalize an identifier (as found in references, definitions).
 *
 * Collapses markdown whitespace, trim, and then lower- and uppercase.
 *
 * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their
 * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different
 * uppercase character (U+0398 (`Θ`)).
 * So, to get a canonical form, we perform both lower- and uppercase.
 *
 * Using uppercase last makes sure keys will never interact with default
 * prototypal values (such as `constructor`): nothing in the prototype of
 * `Object` is uppercase.
 *
 * @param {string} value
 *   Identifier to normalize.
 * @returns {string}
 *   Normalized identifier.
 */ function $a24c6d3b3c4e282c$export$806d55e226cfcd08(value) {
    return value// Collapse markdown whitespace.
    .replace(/[\t\n\r ]+/g, " ")// Trim.
    .replace(/^ | $/g, "")// Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}

});


parcelRequire.register("jyqsZ", function(module, exports) {

$parcel$export(module.exports, "hardBreakEscape", () => $e3c5b8fc233426d6$export$86c573ab9e06f418);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $eeqNr = parcelRequire("eeqNr");
const $e3c5b8fc233426d6$export$86c573ab9e06f418 = {
    name: "hardBreakEscape",
    tokenize: $e3c5b8fc233426d6$var$tokenizeHardBreakEscape
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $e3c5b8fc233426d6$var$tokenizeHardBreakEscape(effects, ok, nok) {
    return start;
    /**
   * Start of a hard break (escape).
   *
   * ```markdown
   * > | a\
   *      ^
   *   | b
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("hardBreakEscape");
        effects.consume(code);
        return after;
    }
    /**
   * After `\`, at eol.
   *
   * ```markdown
   * > | a\
   *       ^
   *   | b
   * ```
   *
   *  @type {State}
   */ function after(code) {
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("hardBreakEscape");
            return ok(code);
        }
        return nok(code);
    }
}

});

parcelRequire.register("8d7jd", function(module, exports) {

$parcel$export(module.exports, "headingAtx", () => $5fa535089e9391cd$export$3871e9deb360695c);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");

var $eImyu = parcelRequire("eImyu");
const $5fa535089e9391cd$export$3871e9deb360695c = {
    name: "headingAtx",
    tokenize: $5fa535089e9391cd$var$tokenizeHeadingAtx,
    resolve: $5fa535089e9391cd$var$resolveHeadingAtx
};
/** @type {Resolver} */ function $5fa535089e9391cd$var$resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    /** @type {Token} */ let content;
    /** @type {Token} */ let text;
    // Prefix whitespace, part of the opening.
    if (events[contentStart][1].type === "whitespace") contentStart += 2;
    // Suffix whitespace, part of the closing.
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") contentEnd -= 2;
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    if (contentEnd > contentStart) {
        content = {
            type: "atxHeadingText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
        };
        text = {
            type: "chunkText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end,
            contentType: "text"
        };
        (0, $eImyu.splice)(events, contentStart, contentEnd - contentStart + 1, [
            [
                "enter",
                content,
                context
            ],
            [
                "enter",
                text,
                context
            ],
            [
                "exit",
                text,
                context
            ],
            [
                "exit",
                content,
                context
            ]
        ]);
    }
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $5fa535089e9391cd$var$tokenizeHeadingAtx(effects, ok, nok) {
    let size = 0;
    return start;
    /**
   * Start of a heading (atx).
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        // To do: parse indent like `markdown-rs`.
        effects.enter("atxHeading");
        return before(code);
    }
    /**
   * After optional whitespace, at `#`.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */ function before(code) {
        effects.enter("atxHeadingSequence");
        return sequenceOpen(code);
    }
    /**
   * In opening sequence.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */ function sequenceOpen(code) {
        if (code === 35 && size++ < 6) {
            effects.consume(code);
            return sequenceOpen;
        }
        // Always at least one `#`.
        if (code === null || (0, $eeqNr.markdownLineEndingOrSpace)(code)) {
            effects.exit("atxHeadingSequence");
            return atBreak(code);
        }
        return nok(code);
    }
    /**
   * After something, before something else.
   *
   * ```markdown
   * > | ## aa
   *       ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === 35) {
            effects.enter("atxHeadingSequence");
            return sequenceFurther(code);
        }
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("atxHeading");
            // To do: interrupt like `markdown-rs`.
            // // Feel free to interrupt.
            // tokenizer.interrupt = false
            return ok(code);
        }
        if ((0, $eeqNr.markdownSpace)(code)) return (0, $k9KEM.factorySpace)(effects, atBreak, "whitespace")(code);
        // To do: generate `data` tokens, add the `text` token later.
        // Needs edit map, see: `markdown.rs`.
        effects.enter("atxHeadingText");
        return data(code);
    }
    /**
   * In further sequence (after whitespace).
   *
   * Could be normal “visible” hashes in the heading or a final sequence.
   *
   * ```markdown
   * > | ## aa ##
   *           ^
   * ```
   *
   * @type {State}
   */ function sequenceFurther(code) {
        if (code === 35) {
            effects.consume(code);
            return sequenceFurther;
        }
        effects.exit("atxHeadingSequence");
        return atBreak(code);
    }
    /**
   * In text.
   *
   * ```markdown
   * > | ## aa
   *        ^
   * ```
   *
   * @type {State}
   */ function data(code) {
        if (code === null || code === 35 || (0, $eeqNr.markdownLineEndingOrSpace)(code)) {
            effects.exit("atxHeadingText");
            return atBreak(code);
        }
        effects.consume(code);
        return data;
    }
}

});

parcelRequire.register("g6Xr1", function(module, exports) {

$parcel$export(module.exports, "htmlFlow", () => $bbab4f62e22a2987$export$476ac411cb7d0d8f);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $eeqNr = parcelRequire("eeqNr");

var $6Jjok = parcelRequire("6Jjok");

var $eFC4k = parcelRequire("eFC4k");
const $bbab4f62e22a2987$export$476ac411cb7d0d8f = {
    name: "htmlFlow",
    tokenize: $bbab4f62e22a2987$var$tokenizeHtmlFlow,
    resolveTo: $bbab4f62e22a2987$var$resolveToHtmlFlow,
    concrete: true
};
/** @type {Construct} */ const $bbab4f62e22a2987$var$blankLineBefore = {
    tokenize: $bbab4f62e22a2987$var$tokenizeBlankLineBefore,
    partial: true
};
const $bbab4f62e22a2987$var$nonLazyContinuationStart = {
    tokenize: $bbab4f62e22a2987$var$tokenizeNonLazyContinuationStart,
    partial: true
};
/** @type {Resolver} */ function $bbab4f62e22a2987$var$resolveToHtmlFlow(events) {
    let index = events.length;
    while(index--){
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") break;
    }
    if (index > 1 && events[index - 2][1].type === "linePrefix") {
        // Add the prefix start to the HTML token.
        events[index][1].start = events[index - 2][1].start;
        // Add the prefix start to the HTML line token.
        events[index + 1][1].start = events[index - 2][1].start;
        // Remove the line prefix.
        events.splice(index - 2, 2);
    }
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $bbab4f62e22a2987$var$tokenizeHtmlFlow(effects, ok, nok) {
    const self = this;
    /** @type {number} */ let marker;
    /** @type {boolean} */ let closingTag;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {Code} */ let markerB;
    return start;
    /**
   * Start of HTML (flow).
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        // To do: parse indent like `markdown-rs`.
        return before(code);
    }
    /**
   * At `<`, after optional whitespace.
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */ function before(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
    }
    /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | <x />
   *      ^
   * > | <!doctype>
   *      ^
   * > | <!--xxx-->
   *      ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationOpen;
        }
        if (code === 47) {
            effects.consume(code);
            closingTag = true;
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            marker = 3;
            // To do:
            // tokenizer.concrete = true
            // To do: use `markdown-rs` style interrupt.
            // While we’re in an instruction instead of a declaration, we’re on a `?`
            // right now, so we do need to search for `>`, similar to declarations.
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        // ASCII alphabetical.
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            // @ts-expect-error: not null.
            buffer = String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | <!doctype>
   *       ^
   * > | <!--xxx-->
   *       ^
   * > | <![CDATA[>&<]]>
   *       ^
   * ```
   *
   * @type {State}
   */ function declarationOpen(code) {
        if (code === 45) {
            effects.consume(code);
            marker = 2;
            return commentOpenInside;
        }
        if (code === 91) {
            effects.consume(code);
            marker = 5;
            index = 0;
            return cdataOpenInside;
        }
        // ASCII alphabetical.
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            marker = 4;
            // // Do not form containers.
            // tokenizer.concrete = true
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    /**
   * After `<!-`, inside a comment, at another `-`.
   *
   * ```markdown
   * > | <!--xxx-->
   *        ^
   * ```
   *
   * @type {State}
   */ function commentOpenInside(code) {
        if (code === 45) {
            effects.consume(code);
            // // Do not form containers.
            // tokenizer.concrete = true
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    /**
   * After `<![`, inside CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *        ^^^^^^
   * ```
   *
   * @type {State}
   */ function cdataOpenInside(code) {
        const value = "CDATA[";
        if (code === value.charCodeAt(index++)) {
            effects.consume(code);
            if (index === value.length) // // Do not form containers.
            // tokenizer.concrete = true
            return self.interrupt ? ok : continuation;
            return cdataOpenInside;
        }
        return nok(code);
    }
    /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | </x>
   *       ^
   * ```
   *
   * @type {State}
   */ function tagCloseStart(code) {
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            // @ts-expect-error: not null.
            buffer = String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /**
   * In tag name.
   *
   * ```markdown
   * > | <ab>
   *      ^^
   * > | </ab>
   *       ^^
   * ```
   *
   * @type {State}
   */ function tagName(code) {
        if (code === null || code === 47 || code === 62 || (0, $eeqNr.markdownLineEndingOrSpace)(code)) {
            const slash = code === 47;
            const name = buffer.toLowerCase();
            if (!slash && !closingTag && (0, $6Jjok.htmlRawNames).includes(name)) {
                marker = 1;
                // // Do not form containers.
                // tokenizer.concrete = true
                return self.interrupt ? ok(code) : continuation(code);
            }
            if ((0, $6Jjok.htmlBlockNames).includes(buffer.toLowerCase())) {
                marker = 6;
                if (slash) {
                    effects.consume(code);
                    return basicSelfClosing;
                }
                // // Do not form containers.
                // tokenizer.concrete = true
                return self.interrupt ? ok(code) : continuation(code);
            }
            marker = 7;
            // Do not support complete HTML when interrupting.
            return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : closingTag ? completeClosingTagAfter(code) : completeAttributeNameBefore(code);
        }
        // ASCII alphanumerical and `-`.
        if (code === 45 || (0, $eeqNr.asciiAlphanumeric)(code)) {
            effects.consume(code);
            buffer += String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /**
   * After closing slash of a basic tag name.
   *
   * ```markdown
   * > | <div/>
   *          ^
   * ```
   *
   * @type {State}
   */ function basicSelfClosing(code) {
        if (code === 62) {
            effects.consume(code);
            // // Do not form containers.
            // tokenizer.concrete = true
            return self.interrupt ? ok : continuation;
        }
        return nok(code);
    }
    /**
   * After closing slash of a complete tag name.
   *
   * ```markdown
   * > | <x/>
   *        ^
   * ```
   *
   * @type {State}
   */ function completeClosingTagAfter(code) {
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return completeClosingTagAfter;
        }
        return completeEnd(code);
    }
    /**
   * At an attribute name.
   *
   * At first, this state is used after a complete tag name, after whitespace,
   * where it expects optional attributes or the end of the tag.
   * It is also reused after attributes, when expecting more optional
   * attributes.
   *
   * ```markdown
   * > | <a />
   *        ^
   * > | <a :b>
   *        ^
   * > | <a _b>
   *        ^
   * > | <a b>
   *        ^
   * > | <a >
   *        ^
   * ```
   *
   * @type {State}
   */ function completeAttributeNameBefore(code) {
        if (code === 47) {
            effects.consume(code);
            return completeEnd;
        }
        // ASCII alphanumerical and `:` and `_`.
        if (code === 58 || code === 95 || (0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return completeAttributeNameBefore;
        }
        return completeEnd(code);
    }
    /**
   * In attribute name.
   *
   * ```markdown
   * > | <a :b>
   *         ^
   * > | <a _b>
   *         ^
   * > | <a b>
   *         ^
   * ```
   *
   * @type {State}
   */ function completeAttributeName(code) {
        // ASCII alphanumerical and `-`, `.`, `:`, and `_`.
        if (code === 45 || code === 46 || code === 58 || code === 95 || (0, $eeqNr.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
    }
    /**
   * After attribute name, at an optional initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | <a b>
   *         ^
   * > | <a b=c>
   *         ^
   * ```
   *
   * @type {State}
   */ function completeAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
    }
    /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * > | <a b="c">
   *          ^
   * ```
   *
   * @type {State}
   */ function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
        if (code === 34 || code === 39) {
            effects.consume(code);
            markerB = code;
            return completeAttributeValueQuoted;
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        return completeAttributeValueUnquoted(code);
    }
    /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | <a b="c">
   *           ^
   * > | <a b='c'>
   *           ^
   * ```
   *
   * @type {State}
   */ function completeAttributeValueQuoted(code) {
        if (code === markerB) {
            effects.consume(code);
            markerB = null;
            return completeAttributeValueQuotedAfter;
        }
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) return nok(code);
        effects.consume(code);
        return completeAttributeValueQuoted;
    }
    /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * ```
   *
   * @type {State}
   */ function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 47 || code === 60 || code === 61 || code === 62 || code === 96 || (0, $eeqNr.markdownLineEndingOrSpace)(code)) return completeAttributeNameAfter(code);
        effects.consume(code);
        return completeAttributeValueUnquoted;
    }
    /**
   * After double or single quoted attribute value, before whitespace or the
   * end of the tag.
   *
   * ```markdown
   * > | <a b="c">
   *            ^
   * ```
   *
   * @type {State}
   */ function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || (0, $eeqNr.markdownSpace)(code)) return completeAttributeNameBefore(code);
        return nok(code);
    }
    /**
   * In certain circumstances of a complete tag where only an `>` is allowed.
   *
   * ```markdown
   * > | <a b="c">
   *             ^
   * ```
   *
   * @type {State}
   */ function completeEnd(code) {
        if (code === 62) {
            effects.consume(code);
            return completeAfter;
        }
        return nok(code);
    }
    /**
   * After `>` in a complete tag.
   *
   * ```markdown
   * > | <x>
   *        ^
   * ```
   *
   * @type {State}
   */ function completeAfter(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) // // Do not form containers.
        // tokenizer.concrete = true
        return continuation(code);
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return completeAfter;
        }
        return nok(code);
    }
    /**
   * In continuation of any HTML kind.
   *
   * ```markdown
   * > | <!--xxx-->
   *          ^
   * ```
   *
   * @type {State}
   */ function continuation(code) {
        if (code === 45 && marker === 2) {
            effects.consume(code);
            return continuationCommentInside;
        }
        if (code === 60 && marker === 1) {
            effects.consume(code);
            return continuationRawTagOpen;
        }
        if (code === 62 && marker === 4) {
            effects.consume(code);
            return continuationClose;
        }
        if (code === 63 && marker === 3) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        if (code === 93 && marker === 5) {
            effects.consume(code);
            return continuationCdataInside;
        }
        if ((0, $eeqNr.markdownLineEnding)(code) && (marker === 6 || marker === 7)) {
            effects.exit("htmlFlowData");
            return effects.check($bbab4f62e22a2987$var$blankLineBefore, continuationAfter, continuationStart)(code);
        }
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("htmlFlowData");
            return continuationStart(code);
        }
        effects.consume(code);
        return continuation;
    }
    /**
   * In continuation, at eol.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */ function continuationStart(code) {
        return effects.check($bbab4f62e22a2987$var$nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code);
    }
    /**
   * In continuation, at eol, before non-lazy content.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */ function continuationStartNonLazy(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return continuationBefore;
    }
    /**
   * In continuation, before non-lazy content.
   *
   * ```markdown
   *   | <x>
   * > | asd
   *     ^
   * ```
   *
   * @type {State}
   */ function continuationBefore(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) return continuationStart(code);
        effects.enter("htmlFlowData");
        return continuation(code);
    }
    /**
   * In comment continuation, after one `-`, expecting another.
   *
   * ```markdown
   * > | <!--xxx-->
   *             ^
   * ```
   *
   * @type {State}
   */ function continuationCommentInside(code) {
        if (code === 45) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /**
   * In raw continuation, after `<`, at `/`.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                            ^
   * ```
   *
   * @type {State}
   */ function continuationRawTagOpen(code) {
        if (code === 47) {
            effects.consume(code);
            buffer = "";
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /**
   * In raw continuation, after `</`, in a raw tag name.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                             ^^^^^^
   * ```
   *
   * @type {State}
   */ function continuationRawEndTag(code) {
        if (code === 62) {
            const name = buffer.toLowerCase();
            if ((0, $6Jjok.htmlRawNames).includes(name)) {
                effects.consume(code);
                return continuationClose;
            }
            return continuation(code);
        }
        if ((0, $eeqNr.asciiAlpha)(code) && buffer.length < 8) {
            effects.consume(code);
            // @ts-expect-error: not null.
            buffer += String.fromCharCode(code);
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /**
   * In cdata continuation, after `]`, expecting `]>`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *                  ^
   * ```
   *
   * @type {State}
   */ function continuationCdataInside(code) {
        if (code === 93) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /**
   * In declaration or instruction continuation, at `>`.
   *
   * ```markdown
   * > | <!-->
   *         ^
   * > | <?>
   *       ^
   * > | <!q>
   *        ^
   * > | <!--ab-->
   *             ^
   * > | <![CDATA[>&<]]>
   *                   ^
   * ```
   *
   * @type {State}
   */ function continuationDeclarationInside(code) {
        if (code === 62) {
            effects.consume(code);
            return continuationClose;
        }
        // More dashes.
        if (code === 45 && marker === 2) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /**
   * In closed continuation: everything we get until the eol/eof is part of it.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */ function continuationClose(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("htmlFlowData");
            return continuationAfter(code);
        }
        effects.consume(code);
        return continuationClose;
    }
    /**
   * Done.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */ function continuationAfter(code) {
        effects.exit("htmlFlow");
        // // Feel free to interrupt.
        // tokenizer.interrupt = false
        // // No longer concrete.
        // tokenizer.concrete = false
        return ok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $bbab4f62e22a2987$var$tokenizeNonLazyContinuationStart(effects, ok, nok) {
    const self = this;
    return start;
    /**
   * At eol, before continuation.
   *
   * ```markdown
   * > | * ```js
   *            ^
   *   | b
   * ```
   *
   * @type {State}
   */ function start(code) {
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return after;
        }
        return nok(code);
    }
    /**
   * A continuation.
   *
   * ```markdown
   *   | * ```js
   * > | b
   *     ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $bbab4f62e22a2987$var$tokenizeBlankLineBefore(effects, ok, nok) {
    return start;
    /**
   * Before eol, expecting blank line.
   *
   * ```markdown
   * > | <div>
   *          ^
   *   |
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return effects.attempt((0, $eFC4k.blankLine), ok, nok);
    }
}

});
parcelRequire.register("6Jjok", function(module, exports) {

$parcel$export(module.exports, "htmlBlockNames", () => $4e65fcc97edb4c91$export$7364aee1c59d1879);
$parcel$export(module.exports, "htmlRawNames", () => $4e65fcc97edb4c91$export$948e66da505d080);
/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */ const $4e65fcc97edb4c91$export$7364aee1c59d1879 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];
const $4e65fcc97edb4c91$export$948e66da505d080 = [
    "pre",
    "script",
    "style",
    "textarea"
];

});


parcelRequire.register("9tdOP", function(module, exports) {

$parcel$export(module.exports, "htmlText", () => $6e518aa1e9273ac9$export$398af27f284914fe);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $6e518aa1e9273ac9$export$398af27f284914fe = {
    name: "htmlText",
    tokenize: $6e518aa1e9273ac9$var$tokenizeHtmlText
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $6e518aa1e9273ac9$var$tokenizeHtmlText(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code> | undefined} */ let marker;
    /** @type {number} */ let index;
    /** @type {State} */ let returnState;
    return start;
    /**
   * Start of HTML (text).
   *
   * ```markdown
   * > | a <b> c
   *       ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
    }
    /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | a <b> c
   *        ^
   * > | a <!doctype> c
   *        ^
   * > | a <!--b--> c
   *        ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationOpen;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            return instruction;
        }
        // ASCII alphabetical.
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            return tagOpen;
        }
        return nok(code);
    }
    /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | a <!doctype> c
   *         ^
   * > | a <!--b--> c
   *         ^
   * > | a <![CDATA[>&<]]> c
   *         ^
   * ```
   *
   * @type {State}
   */ function declarationOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentOpenInside;
        }
        if (code === 91) {
            effects.consume(code);
            index = 0;
            return cdataOpenInside;
        }
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            return declaration;
        }
        return nok(code);
    }
    /**
   * In a comment, after `<!-`, at another `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *          ^
   * ```
   *
   * @type {State}
   */ function commentOpenInside(code) {
        if (code === 45) {
            effects.consume(code);
            return commentEnd;
        }
        return nok(code);
    }
    /**
   * In comment.
   *
   * ```markdown
   * > | a <!--b--> c
   *           ^
   * ```
   *
   * @type {State}
   */ function comment(code) {
        if (code === null) return nok(code);
        if (code === 45) {
            effects.consume(code);
            return commentClose;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = comment;
            return lineEndingBefore(code);
        }
        effects.consume(code);
        return comment;
    }
    /**
   * In comment, after `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *             ^
   * ```
   *
   * @type {State}
   */ function commentClose(code) {
        if (code === 45) {
            effects.consume(code);
            return commentEnd;
        }
        return comment(code);
    }
    /**
   * In comment, after `--`.
   *
   * ```markdown
   * > | a <!--b--> c
   *              ^
   * ```
   *
   * @type {State}
   */ function commentEnd(code) {
        return code === 62 ? end(code) : code === 45 ? commentClose(code) : comment(code);
    }
    /**
   * After `<![`, in CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *          ^^^^^^
   * ```
   *
   * @type {State}
   */ function cdataOpenInside(code) {
        const value = "CDATA[";
        if (code === value.charCodeAt(index++)) {
            effects.consume(code);
            return index === value.length ? cdata : cdataOpenInside;
        }
        return nok(code);
    }
    /**
   * In CDATA.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                ^^^
   * ```
   *
   * @type {State}
   */ function cdata(code) {
        if (code === null) return nok(code);
        if (code === 93) {
            effects.consume(code);
            return cdataClose;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = cdata;
            return lineEndingBefore(code);
        }
        effects.consume(code);
        return cdata;
    }
    /**
   * In CDATA, after `]`, at another `]`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                    ^
   * ```
   *
   * @type {State}
   */ function cdataClose(code) {
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /**
   * In CDATA, after `]]`, at `>`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                     ^
   * ```
   *
   * @type {State}
   */ function cdataEnd(code) {
        if (code === 62) return end(code);
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /**
   * In declaration.
   *
   * ```markdown
   * > | a <!b> c
   *          ^
   * ```
   *
   * @type {State}
   */ function declaration(code) {
        if (code === null || code === 62) return end(code);
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = declaration;
            return lineEndingBefore(code);
        }
        effects.consume(code);
        return declaration;
    }
    /**
   * In instruction.
   *
   * ```markdown
   * > | a <?b?> c
   *         ^
   * ```
   *
   * @type {State}
   */ function instruction(code) {
        if (code === null) return nok(code);
        if (code === 63) {
            effects.consume(code);
            return instructionClose;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = instruction;
            return lineEndingBefore(code);
        }
        effects.consume(code);
        return instruction;
    }
    /**
   * In instruction, after `?`, at `>`.
   *
   * ```markdown
   * > | a <?b?> c
   *           ^
   * ```
   *
   * @type {State}
   */ function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
    }
    /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | a </b> c
   *         ^
   * ```
   *
   * @type {State}
   */ function tagCloseStart(code) {
        // ASCII alphabetical.
        if ((0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            return tagClose;
        }
        return nok(code);
    }
    /**
   * After `</x`, in a tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */ function tagClose(code) {
        // ASCII alphanumerical and `-`.
        if (code === 45 || (0, $eeqNr.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return tagClose;
        }
        return tagCloseBetween(code);
    }
    /**
   * In closing tag, after tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */ function tagCloseBetween(code) {
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = tagCloseBetween;
            return lineEndingBefore(code);
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return tagCloseBetween;
        }
        return end(code);
    }
    /**
   * After `<x`, in opening tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */ function tagOpen(code) {
        // ASCII alphanumerical and `-`.
        if (code === 45 || (0, $eeqNr.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return tagOpen;
        }
        if (code === 47 || code === 62 || (0, $eeqNr.markdownLineEndingOrSpace)(code)) return tagOpenBetween(code);
        return nok(code);
    }
    /**
   * In opening tag, after tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */ function tagOpenBetween(code) {
        if (code === 47) {
            effects.consume(code);
            return end;
        }
        // ASCII alphabetical and `:` and `_`.
        if (code === 58 || code === 95 || (0, $eeqNr.asciiAlpha)(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = tagOpenBetween;
            return lineEndingBefore(code);
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return tagOpenBetween;
        }
        return end(code);
    }
    /**
   * In attribute name.
   *
   * ```markdown
   * > | a <b c> d
   *          ^
   * ```
   *
   * @type {State}
   */ function tagOpenAttributeName(code) {
        // ASCII alphabetical and `-`, `.`, `:`, and `_`.
        if (code === 45 || code === 46 || code === 58 || code === 95 || (0, $eeqNr.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
    }
    /**
   * After attribute name, before initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | a <b c> d
   *           ^
   * ```
   *
   * @type {State}
   */ function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = tagOpenAttributeNameAfter;
            return lineEndingBefore(code);
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
    }
    /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */ function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return tagOpenAttributeValueQuoted;
        }
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = tagOpenAttributeValueBefore;
            return lineEndingBefore(code);
        }
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    }
    /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | a <b c="d"> e
   *             ^
   * ```
   *
   * @type {State}
   */ function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
            effects.consume(code);
            marker = undefined;
            return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) return nok(code);
        if ((0, $eeqNr.markdownLineEnding)(code)) {
            returnState = tagOpenAttributeValueQuoted;
            return lineEndingBefore(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
    }
    /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */ function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) return nok(code);
        if (code === 47 || code === 62 || (0, $eeqNr.markdownLineEndingOrSpace)(code)) return tagOpenBetween(code);
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    }
    /**
   * After double or single quoted attribute value, before whitespace or the end
   * of the tag.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */ function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || (0, $eeqNr.markdownLineEndingOrSpace)(code)) return tagOpenBetween(code);
        return nok(code);
    }
    /**
   * In certain circumstances of a tag where only an `>` is allowed.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */ function end(code) {
        if (code === 62) {
            effects.consume(code);
            effects.exit("htmlTextData");
            effects.exit("htmlText");
            return ok;
        }
        return nok(code);
    }
    /**
   * At eol.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   * > | a <!--a
   *            ^
   *   | b-->
   * ```
   *
   * @type {State}
   */ function lineEndingBefore(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return lineEndingAfter;
    }
    /**
   * After eol, at optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */ function lineEndingAfter(code) {
        // Always populated by defaults.
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, lineEndingAfterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code) : lineEndingAfterPrefix(code);
    }
    /**
   * After eol, after optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */ function lineEndingAfterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
    }
}

});

parcelRequire.register("7hihe", function(module, exports) {

$parcel$export(module.exports, "labelEnd", () => $54c84c5587594001$export$470a5dafbbf62654);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $hidRE = parcelRequire("hidRE");

var $HtJnB = parcelRequire("HtJnB");

var $4wEcs = parcelRequire("4wEcs");

var $82mod = parcelRequire("82mod");

var $eeqNr = parcelRequire("eeqNr");

var $eImyu = parcelRequire("eImyu");

var $dVUv9 = parcelRequire("dVUv9");

var $exed5 = parcelRequire("exed5");
const $54c84c5587594001$export$470a5dafbbf62654 = {
    name: "labelEnd",
    tokenize: $54c84c5587594001$var$tokenizeLabelEnd,
    resolveTo: $54c84c5587594001$var$resolveToLabelEnd,
    resolveAll: $54c84c5587594001$var$resolveAllLabelEnd
};
/** @type {Construct} */ const $54c84c5587594001$var$resourceConstruct = {
    tokenize: $54c84c5587594001$var$tokenizeResource
};
/** @type {Construct} */ const $54c84c5587594001$var$referenceFullConstruct = {
    tokenize: $54c84c5587594001$var$tokenizeReferenceFull
};
/** @type {Construct} */ const $54c84c5587594001$var$referenceCollapsedConstruct = {
    tokenize: $54c84c5587594001$var$tokenizeReferenceCollapsed
};
/** @type {Resolver} */ function $54c84c5587594001$var$resolveAllLabelEnd(events) {
    let index = -1;
    while(++index < events.length){
        const token = events[index][1];
        if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
            // Remove the marker.
            events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
            token.type = "data";
            index++;
        }
    }
    return events;
}
/** @type {Resolver} */ function $54c84c5587594001$var$resolveToLabelEnd(events, context) {
    let index = events.length;
    let offset = 0;
    /** @type {Token} */ let token;
    /** @type {number | undefined} */ let open;
    /** @type {number | undefined} */ let close;
    /** @type {Array<Event>} */ let media;
    // Find an opening.
    while(index--){
        token = events[index][1];
        if (open) {
            // If we see another link, or inactive link label, we’ve been here before.
            if (token.type === "link" || token.type === "labelLink" && token._inactive) break;
            // Mark other link openings as inactive, as we can’t have links in
            // links.
            if (events[index][0] === "enter" && token.type === "labelLink") token._inactive = true;
        } else if (close) {
            if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
                open = index;
                if (token.type !== "labelLink") {
                    offset = 2;
                    break;
                }
            }
        } else if (token.type === "labelEnd") close = index;
    }
    const group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
        type: "label",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[close][1].end)
    };
    const text = {
        type: "labelText",
        start: Object.assign({}, events[open + offset + 2][1].end),
        end: Object.assign({}, events[close - 2][1].start)
    };
    media = [
        [
            "enter",
            group,
            context
        ],
        [
            "enter",
            label,
            context
        ]
    ];
    // Opening marker.
    media = (0, $eImyu.push)(media, events.slice(open + 1, open + offset + 3));
    // Text open.
    media = (0, $eImyu.push)(media, [
        [
            "enter",
            text,
            context
        ]
    ]);
    // Always populated by defaults.
    // Between.
    media = (0, $eImyu.push)(media, (0, $exed5.resolveAll)(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
    // Text close, marker close, label close.
    media = (0, $eImyu.push)(media, [
        [
            "exit",
            text,
            context
        ],
        events[close - 2],
        events[close - 1],
        [
            "exit",
            label,
            context
        ]
    ]);
    // Reference, resource, or so.
    media = (0, $eImyu.push)(media, events.slice(close + 1));
    // Media close.
    media = (0, $eImyu.push)(media, [
        [
            "exit",
            group,
            context
        ]
    ]);
    (0, $eImyu.splice)(events, open, events.length, media);
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $54c84c5587594001$var$tokenizeLabelEnd(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Token} */ let labelStart;
    /** @type {boolean} */ let defined;
    // Find an opening.
    while(index--)if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
        labelStart = self.events[index][1];
        break;
    }
    return start;
    /**
   * Start of label end.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   * ```
   *
   * @type {State}
   */ function start(code) {
        // If there is not an okay opening.
        if (!labelStart) return nok(code);
        // If the corresponding label (link) start is marked as inactive,
        // it means we’d be wrapping a link, like this:
        //
        // ```markdown
        // > | a [b [c](d) e](f) g.
        //                  ^
        // ```
        //
        // We can’t have that, so it’s just balanced brackets.
        if (labelStart._inactive) return labelEndNok(code);
        defined = self.parser.defined.includes((0, $dVUv9.normalizeIdentifier)(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        })));
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return after;
    }
    /**
   * After `]`.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   *       ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        // Note: `markdown-rs` also parses GFM footnotes here, which for us is in
        // an extension.
        // Resource (`[asd](fgh)`)?
        if (code === 40) return effects.attempt($54c84c5587594001$var$resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code);
        // Full (`[asd][fgh]`) or collapsed (`[asd][]`) reference?
        if (code === 91) return effects.attempt($54c84c5587594001$var$referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code);
        // Shortcut (`[asd]`) reference?
        return defined ? labelEndOk(code) : labelEndNok(code);
    }
    /**
   * After `]`, at `[`, but not at a full reference.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] b
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */ function referenceNotFull(code) {
        return effects.attempt($54c84c5587594001$var$referenceCollapsedConstruct, labelEndOk, labelEndNok)(code);
    }
    /**
   * Done, we found something.
   *
   * ```markdown
   * > | [a](b) c
   *           ^
   * > | [a][b] c
   *           ^
   * > | [a][] b
   *          ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */ function labelEndOk(code) {
        // Note: `markdown-rs` does a bunch of stuff here.
        return ok(code);
    }
    /**
   * Done, it’s nothing.
   *
   * There was an okay opening, but we didn’t match anything.
   *
   * ```markdown
   * > | [a](b c
   *        ^
   * > | [a][b c
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */ function labelEndNok(code) {
        labelStart._balanced = true;
        return nok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $54c84c5587594001$var$tokenizeResource(effects, ok, nok) {
    return resourceStart;
    /**
   * At a resource.
   *
   * ```markdown
   * > | [a](b) c
   *        ^
   * ```
   *
   * @type {State}
   */ function resourceStart(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return resourceBefore;
    }
    /**
   * In resource, after `(`, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */ function resourceBefore(code) {
        return (0, $eeqNr.markdownLineEndingOrSpace)(code) ? (0, $82mod.factoryWhitespace)(effects, resourceOpen)(code) : resourceOpen(code);
    }
    /**
   * In resource, after optional whitespace, at `)` or a destination.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */ function resourceOpen(code) {
        if (code === 41) return resourceEnd(code);
        return (0, $hidRE.factoryDestination)(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
    }
    /**
   * In resource, after destination, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *          ^
   * ```
   *
   * @type {State}
   */ function resourceDestinationAfter(code) {
        return (0, $eeqNr.markdownLineEndingOrSpace)(code) ? (0, $82mod.factoryWhitespace)(effects, resourceBetween)(code) : resourceEnd(code);
    }
    /**
   * At invalid destination.
   *
   * ```markdown
   * > | [a](<<) b
   *         ^
   * ```
   *
   * @type {State}
   */ function resourceDestinationMissing(code) {
        return nok(code);
    }
    /**
   * In resource, after destination and whitespace, at `(` or title.
   *
   * ```markdown
   * > | [a](b ) c
   *           ^
   * ```
   *
   * @type {State}
   */ function resourceBetween(code) {
        if (code === 34 || code === 39 || code === 40) return (0, $4wEcs.factoryTitle)(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        return resourceEnd(code);
    }
    /**
   * In resource, after title, at optional whitespace.
   *
   * ```markdown
   * > | [a](b "c") d
   *              ^
   * ```
   *
   * @type {State}
   */ function resourceTitleAfter(code) {
        return (0, $eeqNr.markdownLineEndingOrSpace)(code) ? (0, $82mod.factoryWhitespace)(effects, resourceEnd)(code) : resourceEnd(code);
    }
    /**
   * In resource, at `)`.
   *
   * ```markdown
   * > | [a](b) d
   *          ^
   * ```
   *
   * @type {State}
   */ function resourceEnd(code) {
        if (code === 41) {
            effects.enter("resourceMarker");
            effects.consume(code);
            effects.exit("resourceMarker");
            effects.exit("resource");
            return ok;
        }
        return nok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $54c84c5587594001$var$tokenizeReferenceFull(effects, ok, nok) {
    const self = this;
    return referenceFull;
    /**
   * In a reference (full), at the `[`.
   *
   * ```markdown
   * > | [a][b] d
   *        ^
   * ```
   *
   * @type {State}
   */ function referenceFull(code) {
        return (0, $HtJnB.factoryLabel).call(self, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code);
    }
    /**
   * In a reference (full), after `]`.
   *
   * ```markdown
   * > | [a][b] d
   *          ^
   * ```
   *
   * @type {State}
   */ function referenceFullAfter(code) {
        return self.parser.defined.includes((0, $dVUv9.normalizeIdentifier)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
    }
    /**
   * In reference (full) that was missing.
   *
   * ```markdown
   * > | [a][b d
   *        ^
   * ```
   *
   * @type {State}
   */ function referenceFullMissing(code) {
        return nok(code);
    }
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $54c84c5587594001$var$tokenizeReferenceCollapsed(effects, ok, nok) {
    return referenceCollapsedStart;
    /**
   * In reference (collapsed), at `[`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *        ^
   * ```
   *
   * @type {State}
   */ function referenceCollapsedStart(code) {
        // We only attempt a collapsed label if there’s a `[`.
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return referenceCollapsedOpen;
    }
    /**
   * In reference (collapsed), at `]`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *         ^
   * ```
   *
   *  @type {State}
   */ function referenceCollapsedOpen(code) {
        if (code === 93) {
            effects.enter("referenceMarker");
            effects.consume(code);
            effects.exit("referenceMarker");
            effects.exit("reference");
            return ok;
        }
        return nok(code);
    }
}

});

parcelRequire.register("866gi", function(module, exports) {

$parcel$export(module.exports, "labelStartImage", () => $5e53bdbddbaf69ad$export$3d754936e25aa5f5);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $7hihe = parcelRequire("7hihe");
const $5e53bdbddbaf69ad$export$3d754936e25aa5f5 = {
    name: "labelStartImage",
    tokenize: $5e53bdbddbaf69ad$var$tokenizeLabelStartImage,
    resolveAll: (0, $7hihe.labelEnd).resolveAll
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $5e53bdbddbaf69ad$var$tokenizeLabelStartImage(effects, ok, nok) {
    const self = this;
    return start;
    /**
   * Start of label (image) start.
   *
   * ```markdown
   * > | a ![b] c
   *       ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
    }
    /**
   * After `!`, at `[`.
   *
   * ```markdown
   * > | a ![b] c
   *        ^
   * ```
   *
   * @type {State}
   */ function open(code) {
        if (code === 91) {
            effects.enter("labelMarker");
            effects.consume(code);
            effects.exit("labelMarker");
            effects.exit("labelImage");
            return after;
        }
        return nok(code);
    }
    /**
   * After `![`.
   *
   * ```markdown
   * > | a ![b] c
   *         ^
   * ```
   *
   * This is needed in because, when GFM footnotes are enabled, images never
   * form when started with a `^`.
   * Instead, links form:
   *
   * ```markdown
   * ![^a](b)
   *
   * ![^a][b]
   *
   * [b]: c
   * ```
   *
   * ```html
   * <p>!<a href=\"b\">^a</a></p>
   * <p>!<a href=\"c\">^a</a></p>
   * ```
   *
   * @type {State}
   */ function after(code) {
        // To do: use a new field to do this, this is still needed for
        // `micromark-extension-gfm-footnote`, but the `label-start-link`
        // behavior isn’t.
        // Hidden footnotes hook.
        /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

});

parcelRequire.register("ey0XF", function(module, exports) {

$parcel$export(module.exports, "labelStartLink", () => $a974fc8ca8715565$export$5c0cee0701a3b584);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $7hihe = parcelRequire("7hihe");
const $a974fc8ca8715565$export$5c0cee0701a3b584 = {
    name: "labelStartLink",
    tokenize: $a974fc8ca8715565$var$tokenizeLabelStartLink,
    resolveAll: (0, $7hihe.labelEnd).resolveAll
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $a974fc8ca8715565$var$tokenizeLabelStartLink(effects, ok, nok) {
    const self = this;
    return start;
    /**
   * Start of label (link) start.
   *
   * ```markdown
   * > | a [b] c
   *       ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
    }
    /** @type {State} */ function after(code) {
        // To do: this isn’t needed in `micromark-extension-gfm-footnote`,
        // remove.
        // Hidden footnotes hook.
        /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

});

parcelRequire.register("841hT", function(module, exports) {

$parcel$export(module.exports, "lineEnding", () => $5defb223a5cad8e0$export$8e62e0ad51c97b2);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

const $5defb223a5cad8e0$export$8e62e0ad51c97b2 = {
    name: "lineEnding",
    tokenize: $5defb223a5cad8e0$var$tokenizeLineEnding
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $5defb223a5cad8e0$var$tokenizeLineEnding(effects, ok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, $k9KEM.factorySpace)(effects, ok, "linePrefix");
    }
}

});

parcelRequire.register("f3Hwx", function(module, exports) {

$parcel$export(module.exports, "list", () => $af68e5c5cff3ad16$export$8837f4fc672e936d);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').ContainerState} ContainerState
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");

var $eFC4k = parcelRequire("eFC4k");

var $9XmeN = parcelRequire("9XmeN");
const $af68e5c5cff3ad16$export$8837f4fc672e936d = {
    name: "list",
    tokenize: $af68e5c5cff3ad16$var$tokenizeListStart,
    continuation: {
        tokenize: $af68e5c5cff3ad16$var$tokenizeListContinuation
    },
    exit: $af68e5c5cff3ad16$var$tokenizeListEnd
};
/** @type {Construct} */ const $af68e5c5cff3ad16$var$listItemPrefixWhitespaceConstruct = {
    tokenize: $af68e5c5cff3ad16$var$tokenizeListItemPrefixWhitespace,
    partial: true
};
/** @type {Construct} */ const $af68e5c5cff3ad16$var$indentConstruct = {
    tokenize: $af68e5c5cff3ad16$var$tokenizeIndent,
    partial: true
};
// To do: `markdown-rs` parses list items on their own and later stitches them
// together.
/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */ function $af68e5c5cff3ad16$var$tokenizeListStart(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : (0, $eeqNr.asciiDigit)(code)) {
            if (!self.containerState.type) {
                self.containerState.type = kind;
                effects.enter(kind, {
                    _container: true
                });
            }
            if (kind === "listUnordered") {
                effects.enter("listItemPrefix");
                return code === 42 || code === 45 ? effects.check((0, $9XmeN.thematicBreak), nok, atMarker)(code) : atMarker(code);
            }
            if (!self.interrupt || code === 49) {
                effects.enter("listItemPrefix");
                effects.enter("listItemValue");
                return inside(code);
            }
        }
        return nok(code);
    }
    /** @type {State} */ function inside(code) {
        if ((0, $eeqNr.asciiDigit)(code) && ++size < 10) {
            effects.consume(code);
            return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
            effects.exit("listItemValue");
            return atMarker(code);
        }
        return nok(code);
    }
    /**
   * @type {State}
   **/ function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check((0, $eFC4k.blankLine), // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank, effects.attempt($af68e5c5cff3ad16$var$listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
    }
    /** @type {State} */ function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
    }
    /** @type {State} */ function otherPrefix(code) {
        if ((0, $eeqNr.markdownSpace)(code)) {
            effects.enter("listItemPrefixWhitespace");
            effects.consume(code);
            effects.exit("listItemPrefixWhitespace");
            return endOfPrefix;
        }
        return nok(code);
    }
    /** @type {State} */ function endOfPrefix(code) {
        self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
        return ok(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */ function $af68e5c5cff3ad16$var$tokenizeListContinuation(effects, ok, nok) {
    const self = this;
    self.containerState._closeFlow = undefined;
    return effects.check((0, $eFC4k.blankLine), onBlank, notBlank);
    /** @type {State} */ function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
        // We have a blank line.
        // Still, try to consume at most the items size.
        return (0, $k9KEM.factorySpace)(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
    }
    /** @type {State} */ function notBlank(code) {
        if (self.containerState.furtherBlankLines || !(0, $eeqNr.markdownSpace)(code)) {
            self.containerState.furtherBlankLines = undefined;
            self.containerState.initialBlankLine = undefined;
            return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = undefined;
        self.containerState.initialBlankLine = undefined;
        return effects.attempt($af68e5c5cff3ad16$var$indentConstruct, ok, notInCurrentItem)(code);
    }
    /** @type {State} */ function notInCurrentItem(code) {
        // While we do continue, we signal that the flow should be closed.
        self.containerState._closeFlow = true;
        // As we’re closing flow, we’re no longer interrupting.
        self.interrupt = undefined;
        // Always populated by defaults.
        return (0, $k9KEM.factorySpace)(effects, effects.attempt($af68e5c5cff3ad16$export$8837f4fc672e936d, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */ function $af68e5c5cff3ad16$var$tokenizeIndent(effects, ok, nok) {
    const self = this;
    return (0, $k9KEM.factorySpace)(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
    }
}
/**
 * @type {Exiter}
 * @this {TokenizeContext}
 */ function $af68e5c5cff3ad16$var$tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContext}
 */ function $af68e5c5cff3ad16$var$tokenizeListItemPrefixWhitespace(effects, ok, nok) {
    const self = this;
    // Always populated by defaults.
    return (0, $k9KEM.factorySpace)(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return !(0, $eeqNr.markdownSpace)(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
    }
}

});
parcelRequire.register("9XmeN", function(module, exports) {

$parcel$export(module.exports, "thematicBreak", () => $73fadfaf795a9c9b$export$ba7b13e047416c03);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $73fadfaf795a9c9b$export$ba7b13e047416c03 = {
    name: "thematicBreak",
    tokenize: $73fadfaf795a9c9b$var$tokenizeThematicBreak
};
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $73fadfaf795a9c9b$var$tokenizeThematicBreak(effects, ok, nok) {
    let size = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /**
   * Start of thematic break.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        effects.enter("thematicBreak");
        // To do: parse indent like `markdown-rs`.
        return before(code);
    }
    /**
   * After optional whitespace, at marker.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */ function before(code) {
        marker = code;
        return atBreak(code);
    }
    /**
   * After something, before something else.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === marker) {
            effects.enter("thematicBreakSequence");
            return sequence(code);
        }
        if (size >= 3 && (code === null || (0, $eeqNr.markdownLineEnding)(code))) {
            effects.exit("thematicBreak");
            return ok(code);
        }
        return nok(code);
    }
    /**
   * In sequence.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            size++;
            return sequence;
        }
        effects.exit("thematicBreakSequence");
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, atBreak, "whitespace")(code) : atBreak(code);
    }
}

});


parcelRequire.register("74Njy", function(module, exports) {

$parcel$export(module.exports, "setextUnderline", () => $526f28f5742f659e$export$e104e2de391dfde9);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 */ 
var $k9KEM = parcelRequire("k9KEM");

var $eeqNr = parcelRequire("eeqNr");
const $526f28f5742f659e$export$e104e2de391dfde9 = {
    name: "setextUnderline",
    tokenize: $526f28f5742f659e$var$tokenizeSetextUnderline,
    resolveTo: $526f28f5742f659e$var$resolveToSetextUnderline
};
/** @type {Resolver} */ function $526f28f5742f659e$var$resolveToSetextUnderline(events, context) {
    // To do: resolve like `markdown-rs`.
    let index = events.length;
    /** @type {number | undefined} */ let content;
    /** @type {number | undefined} */ let text;
    /** @type {number | undefined} */ let definition;
    // Find the opening of the content.
    // It’ll always exist: we don’t tokenize if it isn’t there.
    while(index--)if (events[index][0] === "enter") {
        if (events[index][1].type === "content") {
            content = index;
            break;
        }
        if (events[index][1].type === "paragraph") text = index;
    } else {
        if (events[index][1].type === "content") // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
        if (!definition && events[index][1].type === "definition") definition = index;
    }
    const heading = {
        type: "setextHeading",
        start: Object.assign({}, events[text][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    // Change the paragraph to setext heading text.
    events[text][1].type = "setextHeadingText";
    // If we have definitions in the content, we’ll keep on having content,
    // but we need move it.
    if (definition) {
        events.splice(text, 0, [
            "enter",
            heading,
            context
        ]);
        events.splice(definition + 1, 0, [
            "exit",
            events[content][1],
            context
        ]);
        events[content][1].end = Object.assign({}, events[definition][1].end);
    } else events[content][1] = heading;
    // Add the heading exit at the end.
    events.push([
        "exit",
        heading,
        context
    ]);
    return events;
}
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */ function $526f28f5742f659e$var$tokenizeSetextUnderline(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /**
   * At start of heading (setext) underline.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        let index = self.events.length;
        /** @type {boolean | undefined} */ let paragraph;
        // Find an opening.
        while(index--)// Skip enter/exit of line ending, line prefix, and content.
        // We can now either have a definition or a paragraph.
        if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
            paragraph = self.events[index][1].type === "paragraph";
            break;
        }
        // To do: handle lazy/pierce like `markdown-rs`.
        // To do: parse indent like `markdown-rs`.
        if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
            effects.enter("setextHeadingLine");
            marker = code;
            return before(code);
        }
        return nok(code);
    }
    /**
   * After optional whitespace, at `-` or `=`.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */ function before(code) {
        effects.enter("setextHeadingLineSequence");
        return inside(code);
    }
    /**
   * In sequence.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */ function inside(code) {
        if (code === marker) {
            effects.consume(code);
            return inside;
        }
        effects.exit("setextHeadingLineSequence");
        return (0, $eeqNr.markdownSpace)(code) ? (0, $k9KEM.factorySpace)(effects, after, "lineSuffix")(code) : after(code);
    }
    /**
   * After sequence, after optional whitespace.
   *
   * ```markdown
   *   | aa
   * > | ==
   *       ^
   * ```
   *
   * @type {State}
   */ function after(code) {
        if (code === null || (0, $eeqNr.markdownLineEnding)(code)) {
            effects.exit("setextHeadingLine");
            return ok(code);
        }
        return nok(code);
    }
}

});



parcelRequire.register("6rOie", function(module, exports) {

$parcel$export(module.exports, "preprocess", () => $4b1c46d44f5fbb37$export$fc37fe19dfda43ee);
/**
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 */ /**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding | null | undefined} [encoding]
 * @param {boolean | null | undefined} [end=false]
 * @returns {Array<Chunk>}
 */ const $4b1c46d44f5fbb37$var$search = /[\0\t\n\r]/g;
function $4b1c46d44f5fbb37$export$fc37fe19dfda43ee() {
    let column = 1;
    let buffer = "";
    /** @type {boolean | undefined} */ let start = true;
    /** @type {boolean | undefined} */ let atCarriageReturn;
    return preprocessor;
    /** @type {Preprocessor} */ function preprocessor(value, encoding, end) {
        /** @type {Array<Chunk>} */ const chunks = [];
        /** @type {RegExpMatchArray | null} */ let match;
        /** @type {number} */ let next;
        /** @type {number} */ let startPosition;
        /** @type {number} */ let endPosition;
        /** @type {Code} */ let code;
        // @ts-expect-error `Buffer` does allow an encoding.
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
            // To do: `markdown-rs` actually parses BOMs (byte order mark).
            if (value.charCodeAt(0) === 65279) startPosition++;
            start = undefined;
        }
        while(startPosition < value.length){
            $4b1c46d44f5fbb37$var$search.lastIndex = startPosition;
            match = $4b1c46d44f5fbb37$var$search.exec(value);
            endPosition = match && match.index !== undefined ? match.index : value.length;
            code = value.charCodeAt(endPosition);
            if (!match) {
                buffer = value.slice(startPosition);
                break;
            }
            if (code === 10 && startPosition === endPosition && atCarriageReturn) {
                chunks.push(-3);
                atCarriageReturn = undefined;
            } else {
                if (atCarriageReturn) {
                    chunks.push(-5);
                    atCarriageReturn = undefined;
                }
                if (startPosition < endPosition) {
                    chunks.push(value.slice(startPosition, endPosition));
                    column += endPosition - startPosition;
                }
                switch(code){
                    case 0:
                        chunks.push(65533);
                        column++;
                        break;
                    case 9:
                        next = Math.ceil(column / 4) * 4;
                        chunks.push(-2);
                        while(column++ < next)chunks.push(-1);
                        break;
                    case 10:
                        chunks.push(-4);
                        column = 1;
                        break;
                    default:
                        atCarriageReturn = true;
                        column = 1;
                }
            }
            startPosition = endPosition + 1;
        }
        if (end) {
            if (atCarriageReturn) chunks.push(-5);
            if (buffer) chunks.push(buffer);
            chunks.push(null);
        }
        return chunks;
    }
}

});

parcelRequire.register("lWHbp", function(module, exports) {

$parcel$export(module.exports, "postprocess", () => $ffa08304e3819ecb$export$bd0e6e1378a871d7);
/**
 * @typedef {import('micromark-util-types').Event} Event
 */ 
var $dmJYE = parcelRequire("dmJYE");
function $ffa08304e3819ecb$export$bd0e6e1378a871d7(events) {
    while(!(0, $dmJYE.subtokenize)(events));
    return events;
}

});

parcelRequire.register("g2Top", function(module, exports) {

$parcel$export(module.exports, "decodeNumericCharacterReference", () => $bae7cd13ab8c5c7c$export$15a69557afac2c20);
/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * Sort of like `String.fromCharCode(Number.parseInt(value, base))`, but makes
 * non-characters and control characters safe.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 *   Character.
 */ function $bae7cd13ab8c5c7c$export$15a69557afac2c20(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space.
    code < 9 || code === 11 || code > 13 && code < 32 || // Control character (DEL) of C0, and C1 controls.
    code > 126 && code < 160 || // Lone high surrogates and low surrogates.
    code > 55295 && code < 57344 || // Noncharacters.
    code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 /* eslint-enable no-bitwise */  || // Out of range
    code > 1114111) return "�";
    return String.fromCharCode(code);
}

});

parcelRequire.register("fppVA", function(module, exports) {

$parcel$export(module.exports, "decodeString", () => $b37d4d87746ab19f$export$a0fb664af7d0cc44);

var $3f4Qu = parcelRequire("3f4Qu");

var $g2Top = parcelRequire("g2Top");
const $b37d4d87746ab19f$var$characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $b37d4d87746ab19f$export$a0fb664af7d0cc44(value) {
    return value.replace($b37d4d87746ab19f$var$characterEscapeOrReference, $b37d4d87746ab19f$var$decode);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */ function $b37d4d87746ab19f$var$decode($0, $1, $2) {
    if ($1) // Escape.
    return $1;
    // Reference.
    const head = $2.charCodeAt(0);
    if (head === 35) {
        const head = $2.charCodeAt(1);
        const hex = head === 120 || head === 88;
        return (0, $g2Top.decodeNumericCharacterReference)($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return (0, $3f4Qu.decodeNamedCharacterReference)($2) || $0;
}

});

parcelRequire.register("jz0iK", function(module, exports) {

$parcel$export(module.exports, "stringifyPosition", () => $e3e1851460b67548$export$c304dd45fe166145);
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */ /**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Position | PositionLike | Point | PointLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */ function $e3e1851460b67548$export$c304dd45fe166145(value) {
    // Nothing.
    if (!value || typeof value !== "object") return "";
    // Node.
    if ("position" in value || "type" in value) return $e3e1851460b67548$var$position(value.position);
    // Position.
    if ("start" in value || "end" in value) return $e3e1851460b67548$var$position(value);
    // Point.
    if ("line" in value || "column" in value) return $e3e1851460b67548$var$point(value);
    // ?
    return "";
}
/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */ function $e3e1851460b67548$var$point(point) {
    return $e3e1851460b67548$var$index(point && point.line) + ":" + $e3e1851460b67548$var$index(point && point.column);
}
/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */ function $e3e1851460b67548$var$position(pos) {
    return $e3e1851460b67548$var$point(pos && pos.start) + "-" + $e3e1851460b67548$var$point(pos && pos.end);
}
/**
 * @param {number | null | undefined} value
 * @returns {number}
 */ function $e3e1851460b67548$var$index(value) {
    return value && typeof value === "number" ? value : 1;
}

});




//# sourceMappingURL=flowDiagram-93327f21.f1c41c8f.js.map
