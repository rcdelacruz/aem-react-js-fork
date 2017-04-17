"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
        return (<react_router_1.Route {...props}>{this.props.children}</react_router_1.Route>);
    };
    return AemRoute;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AemRoute;
