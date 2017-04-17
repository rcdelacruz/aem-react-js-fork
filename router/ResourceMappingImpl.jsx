"use strict";
/**
 * Trivial implementation for resource mapping.
 * It adds and removes an extension to convert from url path to resource path.
 *
 *
 */
var ResourceMappingImpl = (function () {
    function ResourceMappingImpl(extension) {
        this.extension = ".html";
        if (extension) {
            this.extension = extension;
        }
    }
    ResourceMappingImpl.prototype.resolve = function (path) {
        return path.substring(0, path.length - this.extension.length);
    };
    ResourceMappingImpl.prototype.map = function (path) {
        return path + this.extension;
    };
    return ResourceMappingImpl;
}());
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Trivial implementation for resource mapping.
 * It adds and removes an extension to convert from url path to resource path.
 *
 *
 */
exports.default = ResourceMappingImpl;
