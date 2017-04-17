"use strict";
var React = require("react");
var ReactDom = require("react-dom");
var RootComponent_1 = require("./component/RootComponent");
/**
 * The Component
 */
var ComponentManager = (function () {
    function ComponentManager(registry, container, aDocument) {
        this.container = container;
        this.registry = registry;
        this.document = aDocument || document;
    }
    /**
     * initialize react component in dom.
     * @param item
     */
    ComponentManager.prototype.initReactComponent = function (item) {
        var textarea = this.document.getElementById(item.getAttribute("data-react-id"));
        if (textarea) {
            var props = JSON.parse(textarea.value);
            if (props.wcmmode === "disabled") {
                var comp = this.registry.getComponent(props.resourceType);
                if (comp === null) {
                    console.error("React component '" + props.resourceType + "' does not exist in component list.");
                }
                else {
                    var cache = this.container.get("cache");
                    cache.mergeCache(props.cache);
                    var ctx = { registry: this.registry, componentManager: this, container: this.container };
                    ReactDom.render(<RootComponent_1.default aemContext={ctx} comp={comp} path={props.path} wcmmode={props.wcmmode}/>, item);
                }
            }
        }
        else {
            console.error("React config with id '" + item.getAttribute("data-react-id") + "' has no corresponding textarea element.");
        }
    };
    ComponentManager.prototype.getResourceType = function (component) {
        return this.registry.getResourceType(component);
    };
    ComponentManager.prototype.getComponent = function (resourceType) {
        return this.registry.getComponent(resourceType);
    };
    /**
     * find all root elements and initialize the react components
     */
    ComponentManager.prototype.initReactComponents = function () {
        var items = [].slice.call(this.document.querySelectorAll("[data-react]"));
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.initReactComponent(item);
        }
        return items.length;
    };
    return ComponentManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Component
 */
exports.default = ComponentManager;
