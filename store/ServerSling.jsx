"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sling_1 = require("./Sling");
var ServerSling = (function (_super) {
    __extends(ServerSling, _super);
    function ServerSling(cache, sling) {
        var _this = _super.call(this) || this;
        _this.cache = cache;
        _this.sling = sling;
        return _this;
    }
    ServerSling.prototype.subscribe = function (listener, path, options) {
        var depth = !options || typeof options.depth !== "number" ? -1 : options.depth;
        var resource = this.cache.get(path, depth);
        if (!resource) {
            console.log(" ServerSling has no resource" + path);
            resource = JSON.parse(this.sling.getResource(path, depth));
            if (!resource) {
                resource = {};
            }
            this.cache.put(path, resource, depth);
        }
        console.log(" ServerSling resource is loaded " + path + "   " + resource);
        listener.changedResource(path, resource);
    };
    ServerSling.prototype.renderDialogScript = function (path, resourceType) {
        var script = this.sling.renderDialogScript(path, resourceType);
        var dialog = null;
        if (script) {
            dialog = JSON.parse(script);
        }
        this.cache.putScript(path, dialog);
        return dialog;
    };
    ServerSling.prototype.includeResource = function (path, resourceType) {
        var included = this.sling.includeResource(path, resourceType);
        this.cache.putIncluded(path, included);
        return included;
    };
    ServerSling.prototype.getRequestPath = function () {
        return this.sling.getPagePath();
    };
    return ServerSling;
}(Sling_1.AbstractSling));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServerSling;
