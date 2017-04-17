"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AemComponent_1 = require("./component/AemComponent");
var ResourceUtils_1 = require("./ResourceUtils");
var ResourceInclude = (function (_super) {
    __extends(ResourceInclude, _super);
    function ResourceInclude() {
        return _super.apply(this, arguments) || this;
    }
    ResourceInclude.prototype.render = function () {
        var innerHTML;
        var path = ResourceUtils_1.default.isAbsolutePath(this.props.path) ? this.props.path : this.getPath() + "/" + this.props.path;
        var sling = this.context.aemContext.container.get("sling");
        innerHTML = sling.includeResource(path, this.props.resourceType);
        return React.createElement(this.props.element || "div", {
            dangerouslySetInnerHTML: { __html: innerHTML },
            hidden: !!this.props.hidden,
        });
    };
    return ResourceInclude;
}(AemComponent_1.default));
exports.ResourceInclude = ResourceInclude;
//# sourceMappingURL=include.js.map