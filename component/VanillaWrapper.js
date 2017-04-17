"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ResourceComponent_1 = require("./ResourceComponent");
var VanillaWrapper = (function (_super) {
    __extends(VanillaWrapper, _super);
    function VanillaWrapper() {
        return _super.apply(this, arguments) || this;
    }
    VanillaWrapper.prototype.renderBody = function () {
        var componentClass = this.props.component;
        return React.createElement(componentClass, this.getResource());
    };
    VanillaWrapper.prototype.getDepth = function () {
        return this.props.depth;
    };
    return VanillaWrapper;
}(ResourceComponent_1.ResourceComponent));
exports.VanillaWrapper = VanillaWrapper;
//# sourceMappingURL=VanillaWrapper.js.map