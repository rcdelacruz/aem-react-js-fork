"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sling_1 = require("./Sling");
/**
 * ClientSling gets all data from the cache. If the data is not available then it will get
 * the part of the cache which corresponds to the given component from the server.
 */
var ClientSling = (function (_super) {
    __extends(ClientSling, _super);
    function ClientSling(cache, origin, fetch) {
        var _this = _super.call(this) || this;
        _this.cache = cache;
        _this.origin = origin;
        if (!fetch) {
            _this.fetch = window;
        }
        else {
            _this.fetch = fetch;
        }
        return _this;
    }
    ClientSling.prototype.subscribe = function (listener, path, options) {
        var _this = this;
        //
        var depth;
        if (!options || typeof options.depth === "undefined" || options.depth === null) {
            depth = 0;
        }
        else {
            depth = options.depth;
        }
        var resource = this.cache.get(path, depth);
        if (resource === null || typeof resource === "undefined") {
            var depthAsString = void 0;
            if (depth < 0) {
                depthAsString = "infinity";
            }
            else {
                depthAsString = options.depth + "";
            }
            // TODO what about depth as string??
            var url = this.origin + path + ".json.html"; // + depthAsString + ".json";
            var serverRenderingParam = "serverRendering=disabled";
            var serverRendering = window.location.search.indexOf(serverRenderingParam) >= 0;
            if (serverRendering) {
                url += "?" + serverRenderingParam;
            }
            return this.fetch.fetch(url, { credentials: "same-origin" }).then(function (response) {
                if (response.status === 404) {
                    return {};
                }
                else {
                    return response.json();
                }
            }).then(function (json) {
                _this.cache.mergeCache(json);
                listener.changedResource(path, _this.cache.get(path, depth));
            });
        }
        else {
            listener.changedResource(path, resource);
        }
    };
    ClientSling.prototype.renderDialogScript = function (path, resourceType) {
        // TODO Can we get the script from the server too?. This will probably not work as the returned script is
        // not executed as in the initial server rendering case. For react router we need to do a reload anyways.
        return this.cache.getScript(path);
    };
    ClientSling.prototype.includeResource = function (path, resourceType) {
        // Currently cannot be loaded from server alone.
        return this.cache.getIncluded(path);
    };
    ClientSling.prototype.getRequestPath = function () {
        return window.location.pathname;
    };
    return ClientSling;
}(Sling_1.AbstractSling));
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ClientSling gets all data from the cache. If the data is not available then it will get
 * the part of the cache which corresponds to the given component from the server.
 */
exports.default = ClientSling;
