"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AemComponent_1 = require("./AemComponent");
var EditMarker = (function (_super) {
    __extends(EditMarker, _super);
    function EditMarker() {
        return _super.apply(this, arguments) || this;
    }
    EditMarker.prototype.render = function () {
        if (this.getWcmmode() === "edit") {
            return React.createElement("h3", { className: "placeholder" }, this.props.label);
        }
        else {
            return null;
        }
    };
    return EditMarker;
}(AemComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditMarker;
//# sourceMappingURL=EditMarker.js.map