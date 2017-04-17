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
var AemLink = (function (_super) {
    __extends(AemLink, _super);
    function AemLink() {
        return _super.apply(this, arguments) || this;
    }
    AemLink.prototype.isWcmEnabled = function () {
        return !this.context.wcmmode || this.context.wcmmode !== "disabled";
    };
    AemLink.prototype.isClickable = function (targetLocation, router) {
        return targetLocation.pathname !== window.location.pathname;
    };
    AemLink.prototype.handleClick = function (event) {
        var router = this.context.router;
        var history = this.context.aemContext.container.get("history");
        var targetLocation = history.createLocation(this.props.to);
        if (router && !this.isClickable(targetLocation, router)) {
            event.preventDefault();
        }
        if (this.isWcmEnabled()) {
            event.preventDefault();
        }
    };
    AemLink.prototype.render = function () {
        var _this = this;
        var myProps = this.props;
        var handleClick = function (event) {
            _this.handleClick(event);
        };
        return (React.createElement(react_router_1.Link, __assign({}, myProps, { onClick: handleClick }), this.props.children));
    };
    return AemLink;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AemLink;
AemLink.contextTypes = {
    aemContext: React.PropTypes.any,
    history: React.PropTypes.any,
    router: React.PropTypes.any,
    wcmmode: React.PropTypes.string,
};
//# sourceMappingURL=AemLink.js.map