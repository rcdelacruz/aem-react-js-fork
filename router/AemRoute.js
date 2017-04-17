"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var react_router_1 = require("react-router");
var AemRoute = (function (_super) {
    __extends(AemRoute, _super);
    function AemRoute() {
        return _super.apply(this, arguments) || this;
    }
    AemRoute.prototype.render = function () {
        var props = this.props;
        return (React.createElement(react_router_1.Route, __assign({}, props),
            " ",
            this.props.children,
            " "));
    };
    return AemRoute;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AemRoute;
//# sourceMappingURL=AemRoute.js.map