"use strict";
var RootComponentRegistry_1 = require("./RootComponentRegistry");
var WrapperFactory_1 = require("./component/WrapperFactory");
var ComponentRegistry = (function () {
    function ComponentRegistry(mapping) {
        this.mappings = [];
        this.mapping = mapping;
    }
    ComponentRegistry.prototype.register = function (componentClass) {
        /* tslint:disable:no-string-literal */
        var componentClassName = componentClass["name"];
        /* tsslint:enable:no-string-literal */
        var resourceType = this.mapToResourceType(componentClassName);
        this.mappings.push(new RootComponentRegistry_1.Mapping(resourceType, componentClass, null));
    };
    ComponentRegistry.prototype.registerVanilla = function (config) {
        /* tslint:disable:no-string-literal */
        var componentClassName = config.component["name"];
        /* tsslint:enable:no-string-literal */
        var resourceType = this.mapToResourceType(componentClassName);
        var wrapperClass = WrapperFactory_1.default.createWrapper(config, resourceType);
        this.mappings.push(new RootComponentRegistry_1.Mapping(resourceType, wrapperClass, config.component));
    };
    ComponentRegistry.prototype.mapToResourceType = function (componentClassName) {
        var resourceType = null;
        if (typeof this.mapping === "function") {
            resourceType = this.mapping(componentClassName);
        }
        else if (typeof this.mapping === "string") {
            resourceType = this.mapping + "/" + this.mapClassToResourceType(componentClassName);
        }
        else {
            resourceType = this.mapClassToResourceType(componentClassName);
        }
        return resourceType;
    };
    ComponentRegistry.prototype.mapClassToResourceType = function (componentClassName) {
        var parts = componentClassName.match(/([A-Z][a-z0-9]*)/);
        if (parts) {
            var resourceType = parts[0].toLocaleLowerCase();
            var rest = componentClassName.substring(parts[0].length);
            if (rest.length > 0) {
                resourceType += "-" + this.mapClassToResourceType(rest);
            }
            return resourceType;
        }
    };
    return ComponentRegistry;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentRegistry;
//# sourceMappingURL=ComponentRegistry.js.map