"use strict";
var React = require("react");
var RootComponent_1 = require("./component/RootComponent");
var ReactDom = require("react-dom/server");
var ServerRenderer = (function () {
    function ServerRenderer(registry, container) {
        this.registry = registry;
        this.container = container;
    }
    /* render component as string.
     * @param component
     * @param props
     * @returns {string}
     */
    ServerRenderer.prototype.renderReactComponent = function (path, resourceType, wcmmode, renderRootDialog) {
        console.log("render react on path " + path);
        console.log("render react component " + resourceType);
        var comp = this.registry.getComponent(resourceType);
        if (!comp) {
            throw new Error("cannot find component for resourceType " + resourceType);
        }
        var ctx = { registry: this.registry, container: this.container };
        console.log("render root dialog " + renderRootDialog);
        var html = ReactDom.renderToString(React.createElement(RootComponent_1.default, { aemContext: ctx, comp: comp, path: path, wcmmode: wcmmode, renderRootDialog: !!renderRootDialog }));
        var cache = this.container.get("cache");
        return { html: html, state: JSON.stringify(cache.getFullState()) };
    };
    return ServerRenderer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServerRenderer;
//# sourceMappingURL=ServerRenderer.js.map