"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AemComponent_1 = require("./AemComponent");
var VanillaInclude = (function (_super) {
    __extends(VanillaInclude, _super);
    function VanillaInclude() {
        return _super.apply(this, arguments) || this;
    }
    VanillaInclude.prototype.render = function () {
        var componentClass = this.getRegistry().getVanillaWrapper(this.props.component);
        return React.createElement(componentClass, { path: this.props.path });
    };
    return VanillaInclude;
}(AemComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VanillaInclude;
//# sourceMappingURL=VanillaInclude.js.map