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
parcelRequire.register("kdbIU", function(module, exports) {

$parcel$export(module.exports, "r", () => $eb6e1d93796c8911$export$43caf9889c228507);

var $5Nl7d = parcelRequire("5Nl7d");

var $lDnUH = parcelRequire("lDnUH");

var $exbDv = parcelRequire("exbDv");

var $8ZZbk = parcelRequire("8ZZbk");

var $hp6PI = parcelRequire("hp6PI");

var $80tQT = parcelRequire("80tQT");

var $9ONqd = parcelRequire("9ONqd");
let $eb6e1d93796c8911$var$clusterDb = {};
let $eb6e1d93796c8911$var$descendants = {};
let $eb6e1d93796c8911$var$parents = {};
const $eb6e1d93796c8911$var$clear$1 = ()=>{
    $eb6e1d93796c8911$var$descendants = {};
    $eb6e1d93796c8911$var$parents = {};
    $eb6e1d93796c8911$var$clusterDb = {};
};
const $eb6e1d93796c8911$var$isDescendant = (id, ancenstorId)=>{
    (0, $8ZZbk.l).trace("In isDecendant", ancenstorId, " ", id, " = ", $eb6e1d93796c8911$var$descendants[ancenstorId].includes(id));
    if ($eb6e1d93796c8911$var$descendants[ancenstorId].includes(id)) return true;
    return false;
};
const $eb6e1d93796c8911$var$edgeInCluster = (edge, clusterId)=>{
    (0, $8ZZbk.l).info("Decendants of ", clusterId, " is ", $eb6e1d93796c8911$var$descendants[clusterId]);
    (0, $8ZZbk.l).info("Edge is ", edge);
    if (edge.v === clusterId) return false;
    if (edge.w === clusterId) return false;
    if (!$eb6e1d93796c8911$var$descendants[clusterId]) {
        (0, $8ZZbk.l).debug("Tilt, ", clusterId, ",not in decendants");
        return false;
    }
    return $eb6e1d93796c8911$var$descendants[clusterId].includes(edge.v) || $eb6e1d93796c8911$var$isDescendant(edge.v, clusterId) || $eb6e1d93796c8911$var$isDescendant(edge.w, clusterId) || $eb6e1d93796c8911$var$descendants[clusterId].includes(edge.w);
};
const $eb6e1d93796c8911$var$copy = (clusterId, graph, newGraph, rootId)=>{
    (0, $8ZZbk.l).warn("Copying children of ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
    const nodes = graph.children(clusterId) || [];
    if (clusterId !== rootId) nodes.push(clusterId);
    (0, $8ZZbk.l).warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
    nodes.forEach((node)=>{
        if (graph.children(node).length > 0) $eb6e1d93796c8911$var$copy(node, graph, newGraph, rootId);
        else {
            const data = graph.node(node);
            (0, $8ZZbk.l).info("cp ", node, " to ", rootId, " with parent ", clusterId);
            newGraph.setNode(node, data);
            if (rootId !== graph.parent(node)) {
                (0, $8ZZbk.l).warn("Setting parent", node, graph.parent(node));
                newGraph.setParent(node, graph.parent(node));
            }
            if (clusterId !== rootId && node !== clusterId) {
                (0, $8ZZbk.l).debug("Setting parent", node, clusterId);
                newGraph.setParent(node, clusterId);
            } else {
                (0, $8ZZbk.l).info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
                (0, $8ZZbk.l).debug("Not Setting parent for node=", node, "cluster!==rootId", clusterId !== rootId, "node!==clusterId", node !== clusterId);
            }
            const edges = graph.edges(node);
            (0, $8ZZbk.l).debug("Copying Edges", edges);
            edges.forEach((edge)=>{
                (0, $8ZZbk.l).info("Edge", edge);
                const data2 = graph.edge(edge.v, edge.w, edge.name);
                (0, $8ZZbk.l).info("Edge data", data2, rootId);
                try {
                    if ($eb6e1d93796c8911$var$edgeInCluster(edge, rootId)) {
                        (0, $8ZZbk.l).info("Copying as ", edge.v, edge.w, data2, edge.name);
                        newGraph.setEdge(edge.v, edge.w, data2, edge.name);
                        (0, $8ZZbk.l).info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
                    } else (0, $8ZZbk.l).info("Skipping copy of edge ", edge.v, "-->", edge.w, " rootId: ", rootId, " clusterId:", clusterId);
                } catch (e) {
                    (0, $8ZZbk.l).error(e);
                }
            });
        }
        (0, $8ZZbk.l).debug("Removing node", node);
        graph.removeNode(node);
    });
};
const $eb6e1d93796c8911$var$extractDescendants = (id, graph)=>{
    const children = graph.children(id);
    let res = [
        ...children
    ];
    for (const child of children){
        $eb6e1d93796c8911$var$parents[child] = id;
        res = [
            ...res,
            ...$eb6e1d93796c8911$var$extractDescendants(child, graph)
        ];
    }
    return res;
};
const $eb6e1d93796c8911$var$findNonClusterChild = (id, graph)=>{
    (0, $8ZZbk.l).trace("Searching", id);
    const children = graph.children(id);
    (0, $8ZZbk.l).trace("Searching children of id ", id, children);
    if (children.length < 1) {
        (0, $8ZZbk.l).trace("This is a valid node", id);
        return id;
    }
    for (const child of children){
        const _id = $eb6e1d93796c8911$var$findNonClusterChild(child, graph);
        if (_id) {
            (0, $8ZZbk.l).trace("Found replacement for", id, " => ", _id);
            return _id;
        }
    }
};
const $eb6e1d93796c8911$var$getAnchorId = (id)=>{
    if (!$eb6e1d93796c8911$var$clusterDb[id]) return id;
    if (!$eb6e1d93796c8911$var$clusterDb[id].externalConnections) return id;
    if ($eb6e1d93796c8911$var$clusterDb[id]) return $eb6e1d93796c8911$var$clusterDb[id].id;
    return id;
};
const $eb6e1d93796c8911$var$adjustClustersAndEdges = (graph, depth)=>{
    if (!graph || depth > 10) {
        (0, $8ZZbk.l).debug("Opting out, no graph ");
        return;
    } else (0, $8ZZbk.l).debug("Opting in, graph ");
    graph.nodes().forEach(function(id) {
        const children = graph.children(id);
        if (children.length > 0) {
            (0, $8ZZbk.l).warn("Cluster identified", id, " Replacement id in edges: ", $eb6e1d93796c8911$var$findNonClusterChild(id, graph));
            $eb6e1d93796c8911$var$descendants[id] = $eb6e1d93796c8911$var$extractDescendants(id, graph);
            $eb6e1d93796c8911$var$clusterDb[id] = {
                id: $eb6e1d93796c8911$var$findNonClusterChild(id, graph),
                clusterData: graph.node(id)
            };
        }
    });
    graph.nodes().forEach(function(id) {
        const children = graph.children(id);
        const edges = graph.edges();
        if (children.length > 0) {
            (0, $8ZZbk.l).debug("Cluster identified", id, $eb6e1d93796c8911$var$descendants);
            edges.forEach((edge)=>{
                if (edge.v !== id && edge.w !== id) {
                    const d1 = $eb6e1d93796c8911$var$isDescendant(edge.v, id);
                    const d2 = $eb6e1d93796c8911$var$isDescendant(edge.w, id);
                    if (d1 ^ d2) {
                        (0, $8ZZbk.l).warn("Edge: ", edge, " leaves cluster ", id);
                        (0, $8ZZbk.l).warn("Decendants of XXX ", id, ": ", $eb6e1d93796c8911$var$descendants[id]);
                        $eb6e1d93796c8911$var$clusterDb[id].externalConnections = true;
                    }
                }
            });
        } else (0, $8ZZbk.l).debug("Not a cluster ", id, $eb6e1d93796c8911$var$descendants);
    });
    graph.edges().forEach(function(e) {
        const edge = graph.edge(e);
        (0, $8ZZbk.l).warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
        (0, $8ZZbk.l).warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
        let v = e.v;
        let w = e.w;
        (0, $8ZZbk.l).warn("Fix XXX", $eb6e1d93796c8911$var$clusterDb, "ids:", e.v, e.w, "Translating: ", $eb6e1d93796c8911$var$clusterDb[e.v], " --- ", $eb6e1d93796c8911$var$clusterDb[e.w]);
        if ($eb6e1d93796c8911$var$clusterDb[e.v] && $eb6e1d93796c8911$var$clusterDb[e.w] && $eb6e1d93796c8911$var$clusterDb[e.v] === $eb6e1d93796c8911$var$clusterDb[e.w]) {
            (0, $8ZZbk.l).warn("Fixing and trixing link to self - removing XXX", e.v, e.w, e.name);
            (0, $8ZZbk.l).warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
            v = $eb6e1d93796c8911$var$getAnchorId(e.v);
            w = $eb6e1d93796c8911$var$getAnchorId(e.w);
            graph.removeEdge(e.v, e.w, e.name);
            const specialId = e.w + "---" + e.v;
            graph.setNode(specialId, {
                domId: specialId,
                id: specialId,
                labelStyle: "",
                labelText: edge.label,
                padding: 0,
                shape: "labelRect",
                style: ""
            });
            const edge1 = JSON.parse(JSON.stringify(edge));
            const edge2 = JSON.parse(JSON.stringify(edge));
            edge1.label = "";
            edge1.arrowTypeEnd = "none";
            edge2.label = "";
            edge1.fromCluster = e.v;
            edge2.toCluster = e.v;
            graph.setEdge(v, specialId, edge1, e.name + "-cyclic-special");
            graph.setEdge(specialId, w, edge2, e.name + "-cyclic-special");
        } else if ($eb6e1d93796c8911$var$clusterDb[e.v] || $eb6e1d93796c8911$var$clusterDb[e.w]) {
            (0, $8ZZbk.l).warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
            v = $eb6e1d93796c8911$var$getAnchorId(e.v);
            w = $eb6e1d93796c8911$var$getAnchorId(e.w);
            graph.removeEdge(e.v, e.w, e.name);
            if (v !== e.v) edge.fromCluster = e.v;
            if (w !== e.w) edge.toCluster = e.w;
            (0, $8ZZbk.l).warn("Fix Replacing with XXX", v, w, e.name);
            graph.setEdge(v, w, edge, e.name);
        }
    });
    (0, $8ZZbk.l).warn("Adjusted Graph", $lDnUH.write(graph));
    $eb6e1d93796c8911$var$extractor(graph, 0);
    (0, $8ZZbk.l).trace($eb6e1d93796c8911$var$clusterDb);
};
const $eb6e1d93796c8911$var$extractor = (graph, depth)=>{
    (0, $8ZZbk.l).warn("extractor - ", depth, $lDnUH.write(graph), graph.children("D"));
    if (depth > 10) {
        (0, $8ZZbk.l).error("Bailing out");
        return;
    }
    let nodes = graph.nodes();
    let hasChildren = false;
    for (const node of nodes){
        const children = graph.children(node);
        hasChildren = hasChildren || children.length > 0;
    }
    if (!hasChildren) {
        (0, $8ZZbk.l).debug("Done, no node has children", graph.nodes());
        return;
    }
    (0, $8ZZbk.l).debug("Nodes = ", nodes, depth);
    for (const node of nodes){
        (0, $8ZZbk.l).debug("Extracting node", node, $eb6e1d93796c8911$var$clusterDb, $eb6e1d93796c8911$var$clusterDb[node] && !$eb6e1d93796c8911$var$clusterDb[node].externalConnections, !graph.parent(node), graph.node(node), graph.children("D"), " Depth ", depth);
        if (!$eb6e1d93796c8911$var$clusterDb[node]) (0, $8ZZbk.l).debug("Not a cluster", node, depth);
        else if (!$eb6e1d93796c8911$var$clusterDb[node].externalConnections && // !graph.parent(node) &&
        graph.children(node) && graph.children(node).length > 0) {
            (0, $8ZZbk.l).warn("Cluster without external connections, without a parent and with children", node, depth);
            const graphSettings = graph.graph();
            let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
            if ($eb6e1d93796c8911$var$clusterDb[node] && $eb6e1d93796c8911$var$clusterDb[node].clusterData && $eb6e1d93796c8911$var$clusterDb[node].clusterData.dir) {
                dir = $eb6e1d93796c8911$var$clusterDb[node].clusterData.dir;
                (0, $8ZZbk.l).warn("Fixing dir", $eb6e1d93796c8911$var$clusterDb[node].clusterData.dir, dir);
            }
            const clusterGraph = new $hp6PI.Graph({
                multigraph: true,
                compound: true
            }).setGraph({
                rankdir: dir,
                // Todo: set proper spacing
                nodesep: 50,
                ranksep: 50,
                marginx: 8,
                marginy: 8
            }).setDefaultEdgeLabel(function() {
                return {};
            });
            (0, $8ZZbk.l).warn("Old graph before copy", $lDnUH.write(graph));
            $eb6e1d93796c8911$var$copy(node, graph, clusterGraph, node);
            graph.setNode(node, {
                clusterNode: true,
                id: node,
                clusterData: $eb6e1d93796c8911$var$clusterDb[node].clusterData,
                labelText: $eb6e1d93796c8911$var$clusterDb[node].labelText,
                graph: clusterGraph
            });
            (0, $8ZZbk.l).warn("New graph after copy node: (", node, ")", $lDnUH.write(clusterGraph));
            (0, $8ZZbk.l).debug("Old graph after copy", $lDnUH.write(graph));
        } else {
            (0, $8ZZbk.l).warn("Cluster ** ", node, " **not meeting the criteria !externalConnections:", !$eb6e1d93796c8911$var$clusterDb[node].externalConnections, " no parent: ", !graph.parent(node), " children ", graph.children(node) && graph.children(node).length > 0, graph.children("D"), depth);
            (0, $8ZZbk.l).debug($eb6e1d93796c8911$var$clusterDb);
        }
    }
    nodes = graph.nodes();
    (0, $8ZZbk.l).warn("New list of nodes", nodes);
    for (const node of nodes){
        const data = graph.node(node);
        (0, $8ZZbk.l).warn(" Now next level", node, data);
        if (data.clusterNode) $eb6e1d93796c8911$var$extractor(data.graph, depth + 1);
    }
};
const $eb6e1d93796c8911$var$sorter = (graph, nodes)=>{
    if (nodes.length === 0) return [];
    let result = Object.assign(nodes);
    nodes.forEach((node)=>{
        const children = graph.children(node);
        const sorted = $eb6e1d93796c8911$var$sorter(graph, children);
        result = [
            ...result,
            ...sorted
        ];
    });
    return result;
};
const $eb6e1d93796c8911$var$sortNodesByHierarchy = (graph)=>$eb6e1d93796c8911$var$sorter(graph, graph.children());
const $eb6e1d93796c8911$var$rect = (parent, node)=>{
    (0, $8ZZbk.l).info("Creating subgraph rect for ", node.id, node);
    const shapeSvg = parent.insert("g").attr("class", "cluster" + (node.class ? " " + node.class : "")).attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const useHtmlLabels = (0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels);
    const label = shapeSvg.insert("g").attr("class", "cluster-label");
    const text = node.labelType === "markdown" ? (0, $80tQT.c)(label, node.labelText, {
        style: node.labelStyle,
        useHtmlLabels: useHtmlLabels
    }) : label.node().appendChild((0, $exbDv.c)(node.labelText, node.labelStyle, void 0, true));
    let bbox = text.getBBox();
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, $9ONqd.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    const width = node.width <= bbox.width + padding ? bbox.width + padding : node.width;
    if (node.width <= bbox.width + padding) node.diff = (bbox.width - node.width) / 2 - node.padding / 2;
    else node.diff = -node.padding / 2;
    (0, $8ZZbk.l).trace("Data ", node, JSON.stringify(node));
    rect2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - width / 2).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width).attr("height", node.height + padding);
    if (useHtmlLabels) label.attr("transform", // This puts the labal on top of the box instead of inside it
    "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2) + ")");
    else label.attr("transform", // This puts the labal on top of the box instead of inside it
    "translate(" + node.x + ", " + (node.y - node.height / 2) + ")");
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.intersect = function(point) {
        return (0, $exbDv.i)(node, point);
    };
    return shapeSvg;
};
const $eb6e1d93796c8911$var$noteGroup = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.intersect = function(point) {
        return (0, $exbDv.i)(node, point);
    };
    return shapeSvg;
};
const $eb6e1d93796c8911$var$roundedWithTitle = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const label = shapeSvg.insert("g").attr("class", "cluster-label");
    const innerRect = shapeSvg.append("rect");
    const text = label.node().appendChild((0, $exbDv.c)(node.labelText, node.labelStyle, void 0, true));
    let bbox = text.getBBox();
    if ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, $9ONqd.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    bbox = text.getBBox();
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
    if (node.width <= bbox.width + node.padding) node.diff = (bbox.width + node.padding * 0 - node.width) / 2;
    else node.diff = -node.padding / 2;
    rect2.attr("class", "outer").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width + padding).attr("height", node.height + padding);
    innerRect.attr("class", "inner").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding + bbox.height - 1).attr("width", width + padding).attr("height", node.height + padding - bbox.height - 3);
    label.attr("transform", "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2 - node.padding / 3 + ((0, $8ZZbk.n)((0, $8ZZbk.c)().flowchart.htmlLabels) ? 5 : 3)) + ")");
    const rectBox = rect2.node().getBBox();
    node.height = rectBox.height;
    node.intersect = function(point) {
        return (0, $exbDv.i)(node, point);
    };
    return shapeSvg;
};
const $eb6e1d93796c8911$var$divider = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    rect2.attr("class", "divider").attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2).attr("width", node.width + padding).attr("height", node.height + padding);
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.diff = -node.padding / 2;
    node.intersect = function(point) {
        return (0, $exbDv.i)(node, point);
    };
    return shapeSvg;
};
const $eb6e1d93796c8911$var$shapes = {
    rect: $eb6e1d93796c8911$var$rect,
    roundedWithTitle: $eb6e1d93796c8911$var$roundedWithTitle,
    noteGroup: $eb6e1d93796c8911$var$noteGroup,
    divider: $eb6e1d93796c8911$var$divider
};
let $eb6e1d93796c8911$var$clusterElems = {};
const $eb6e1d93796c8911$var$insertCluster = (elem, node)=>{
    (0, $8ZZbk.l).trace("Inserting cluster");
    const shape = node.shape || "rect";
    $eb6e1d93796c8911$var$clusterElems[node.id] = $eb6e1d93796c8911$var$shapes[shape](elem, node);
};
const $eb6e1d93796c8911$var$clear = ()=>{
    $eb6e1d93796c8911$var$clusterElems = {};
};
const $eb6e1d93796c8911$var$recursiveRender = async (_elem, graph, diagramtype, parentCluster)=>{
    (0, $8ZZbk.l).info("Graph in recursive render: XXX", $lDnUH.write(graph), parentCluster);
    const dir = graph.graph().rankdir;
    (0, $8ZZbk.l).trace("Dir in recursive render - dir:", dir);
    const elem = _elem.insert("g").attr("class", "root");
    if (!graph.nodes()) (0, $8ZZbk.l).info("No nodes found for", graph);
    else (0, $8ZZbk.l).info("Recursive render XXX", graph.nodes());
    if (graph.edges().length > 0) (0, $8ZZbk.l).trace("Recursive edges", graph.edge(graph.edges()[0]));
    const clusters = elem.insert("g").attr("class", "clusters");
    const edgePaths = elem.insert("g").attr("class", "edgePaths");
    const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
    const nodes = elem.insert("g").attr("class", "nodes");
    await Promise.all(graph.nodes().map(async function(v) {
        const node = graph.node(v);
        if (parentCluster !== void 0) {
            const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
            (0, $8ZZbk.l).info("Setting data for cluster XXX (", v, ") ", data, parentCluster);
            graph.setNode(parentCluster.id, data);
            if (!graph.parent(v)) {
                (0, $8ZZbk.l).trace("Setting parent", v, parentCluster.id);
                graph.setParent(v, parentCluster.id, data);
            }
        }
        (0, $8ZZbk.l).info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
        if (node && node.clusterNode) {
            (0, $8ZZbk.l).info("Cluster identified", v, node.width, graph.node(v));
            const o = await $eb6e1d93796c8911$var$recursiveRender(nodes, node.graph, diagramtype, graph.node(v));
            const newEl = o.elem;
            (0, $exbDv.u)(node, newEl);
            node.diff = o.diff || 0;
            (0, $8ZZbk.l).info("Node bounds (abc123)", v, node, node.width, node.x, node.y);
            (0, $exbDv.s)(newEl, node);
            (0, $8ZZbk.l).warn("Recursive render complete ", newEl, node);
        } else if (graph.children(v).length > 0) {
            (0, $8ZZbk.l).info("Cluster - the non recursive path XXX", v, node.id, node, graph);
            (0, $8ZZbk.l).info($eb6e1d93796c8911$var$findNonClusterChild(node.id, graph));
            $eb6e1d93796c8911$var$clusterDb[node.id] = {
                id: $eb6e1d93796c8911$var$findNonClusterChild(node.id, graph),
                node: node
            };
        } else {
            (0, $8ZZbk.l).info("Node - the non recursive path", v, node.id, node);
            await (0, $exbDv.e)(nodes, graph.node(v), dir);
        }
    }));
    graph.edges().forEach(function(e) {
        const edge = graph.edge(e.v, e.w, e.name);
        (0, $8ZZbk.l).info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
        (0, $8ZZbk.l).info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
        (0, $8ZZbk.l).info("Fix", $eb6e1d93796c8911$var$clusterDb, "ids:", e.v, e.w, "Translateing: ", $eb6e1d93796c8911$var$clusterDb[e.v], $eb6e1d93796c8911$var$clusterDb[e.w]);
        (0, $exbDv.f)(edgeLabels, edge);
    });
    graph.edges().forEach(function(e) {
        (0, $8ZZbk.l).info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    });
    (0, $8ZZbk.l).info("#############################################");
    (0, $8ZZbk.l).info("###                Layout                 ###");
    (0, $8ZZbk.l).info("#############################################");
    (0, $8ZZbk.l).info(graph);
    (0, $5Nl7d.layout)(graph);
    (0, $8ZZbk.l).info("Graph after layout:", $lDnUH.write(graph));
    let diff = 0;
    $eb6e1d93796c8911$var$sortNodesByHierarchy(graph).forEach(function(v) {
        const node = graph.node(v);
        (0, $8ZZbk.l).info("Position " + v + ": " + JSON.stringify(graph.node(v)));
        (0, $8ZZbk.l).info("Position " + v + ": (" + node.x, "," + node.y, ") width: ", node.width, " height: ", node.height);
        if (node && node.clusterNode) (0, $exbDv.p)(node);
        else if (graph.children(v).length > 0) {
            $eb6e1d93796c8911$var$insertCluster(clusters, node);
            $eb6e1d93796c8911$var$clusterDb[node.id].node = node;
        } else (0, $exbDv.p)(node);
    });
    graph.edges().forEach(function(e) {
        const edge = graph.edge(e);
        (0, $8ZZbk.l).info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
        const paths = (0, $exbDv.g)(edgePaths, e, edge, $eb6e1d93796c8911$var$clusterDb, diagramtype, graph);
        (0, $exbDv.h)(edge, paths);
    });
    graph.nodes().forEach(function(v) {
        const n = graph.node(v);
        (0, $8ZZbk.l).info(v, n.type, n.diff);
        if (n.type === "group") diff = n.diff;
    });
    return {
        elem: elem,
        diff: diff
    };
};
const $eb6e1d93796c8911$export$43caf9889c228507 = async (elem, graph, markers, diagramtype, id)=>{
    (0, $exbDv.a)(elem, markers, diagramtype, id);
    (0, $exbDv.b)();
    (0, $exbDv.d)();
    $eb6e1d93796c8911$var$clear();
    $eb6e1d93796c8911$var$clear$1();
    (0, $8ZZbk.l).warn("Graph at first:", $lDnUH.write(graph));
    $eb6e1d93796c8911$var$adjustClustersAndEdges(graph);
    (0, $8ZZbk.l).warn("Graph after:", $lDnUH.write(graph));
    await $eb6e1d93796c8911$var$recursiveRender(elem, graph, diagramtype);
};

});
parcelRequire.register("lDnUH", function(module, exports) {

$parcel$export(module.exports, "write", () => $fbffca33d59fb9aa$export$68d8715fc104d294);

var $hhtPF = parcelRequire("hhtPF");
var $jA7ZH = parcelRequire("jA7ZH");
var $8kIEM = parcelRequire("8kIEM");
var $4sKtG = parcelRequire("4sKtG");

var $8ZhJ2 = parcelRequire("8ZhJ2");
function $fbffca33d59fb9aa$export$68d8715fc104d294(g) {
    var json = {
        options: {
            directed: g.isDirected(),
            multigraph: g.isMultigraph(),
            compound: g.isCompound()
        },
        nodes: $fbffca33d59fb9aa$var$writeNodes(g),
        edges: $fbffca33d59fb9aa$var$writeEdges(g)
    };
    if (!$8kIEM.default(g.graph())) json.value = $hhtPF.default(g.graph());
    return json;
}
function $fbffca33d59fb9aa$var$writeNodes(g) {
    return $4sKtG.default(g.nodes(), function(v) {
        var nodeValue = g.node(v);
        var parent = g.parent(v);
        var node = {
            v: v
        };
        if (!$8kIEM.default(nodeValue)) node.value = nodeValue;
        if (!$8kIEM.default(parent)) node.parent = parent;
        return node;
    });
}
function $fbffca33d59fb9aa$var$writeEdges(g) {
    return $4sKtG.default(g.edges(), function(e) {
        var edgeValue = g.edge(e);
        var edge = {
            v: e.v,
            w: e.w
        };
        if (!$8kIEM.default(e.name)) edge.name = e.name;
        if (!$8kIEM.default(edgeValue)) edge.value = edgeValue;
        return edge;
    });
}
function $fbffca33d59fb9aa$export$aafa59e2e03f2942(json) {
    var g = new (0, $8ZhJ2.Graph)(json.options).setGraph(json.value);
    $jA7ZH.default(json.nodes, function(entry) {
        g.setNode(entry.v, entry.value);
        if (entry.parent) g.setParent(entry.v, entry.parent);
    });
    $jA7ZH.default(json.edges, function(entry) {
        g.setEdge({
            v: entry.v,
            w: entry.w,
            name: entry.name
        }, entry.value);
    });
    return g;
}

});
parcelRequire.register("hhtPF", function(module, exports) {

$parcel$export(module.exports, "default", () => $c94b2a4add74a850$export$2e2bcd8739ae039);

var $9xGVf = parcelRequire("9xGVf");
/** Used to compose bitmasks for cloning. */ var $c94b2a4add74a850$var$CLONE_SYMBOLS_FLAG = 4;
/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */ function $c94b2a4add74a850$var$clone(value) {
    return (0, $9xGVf.default)(value, $c94b2a4add74a850$var$CLONE_SYMBOLS_FLAG);
}
var $c94b2a4add74a850$export$2e2bcd8739ae039 = $c94b2a4add74a850$var$clone;

});




//# sourceMappingURL=flowDiagram-93327f21.1bb329b0.js.map
