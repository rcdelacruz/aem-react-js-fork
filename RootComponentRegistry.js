"use strict";
var React = require("react");
var Mapping = (function () {
    function Mapping(resourceType, componentClass, vanillaClass) {
        this.resourceType = resourceType;
        this.componentClass = componentClass;
        this.vanillaClass = vanillaClass;
    }
    return Mapping;
}());
exports.Mapping = Mapping;
var RootComponentRegistry = (function () {
    function RootComponentRegistry() {
        this.resourceTypeToComponent = {};
        this.componentToResourceType = {};
        this.vanillaToWrapper = {};
        this.registries = [];
    }
    RootComponentRegistry.prototype.add = function (registry) {
        this.registries.push(registry);
    };
    RootComponentRegistry.prototype.getResourceType = function (component) {
        if (component instanceof React.Component) {
            var componentClassName = Object.getPrototypeOf(component).constructor.name;
            return this.componentToResourceType[componentClassName];
        }
        else {
            var componentClassName = component.name;
            return this.componentToResourceType[componentClassName];
        }
    };
    RootComponentRegistry.prototype.getComponent = function (resourceType) {
        return this.resourceTypeToComponent[resourceType];
    };
    RootComponentRegistry.prototype.register = function (mapping) {
        /* tslint:disable:no-string-literal */
        var componentClassName = mapping.componentClass["name"];
        /* tsslint:enable:no-string-literal */
        if (!mapping.vanillaClass) {
            // vanilla component's class all have the same name
            this.componentToResourceType[componentClassName] = mapping.resourceType;
        }
        else {
            var vanillaClassName = mapping.vanillaClass["name"];
            this.vanillaToWrapper[vanillaClassName] = mapping.componentClass;
        }
        this.resourceTypeToComponent[mapping.resourceType] = mapping.componentClass;
    };
    RootComponentRegistry.prototype.init = function () {
        var _this = this;
        this.registries.forEach(function (registry) {
            registry.mappings.forEach(function (mapping) {
                _this.register(mapping);
            }, _this);
        }, this);
    };
    RootComponentRegistry.prototype.getVanillaWrapper = function (component) {
        var name = component["name"];
        return this.vanillaToWrapper[name];
    };
    return RootComponentRegistry;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootComponentRegistry;
//# sourceMappingURL=RootComponentRegistry.js.map