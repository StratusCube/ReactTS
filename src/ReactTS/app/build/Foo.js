/// <reference path="../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo(props) {
        _super.call(this, props);
        this.state = {
            title: this.props.title
        };
        this.Titles = ["Foo", "Bar", "Biz", "Bash"];
    }
    Foo.prototype.click = function (event) {
        this.state.title = this.Titles[Math.floor(Math.random() * 4)];
        this.setState(this.state);
    };
    Foo.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("h1", null, this.props.userName), React.createElement("h2", null, this.state.title), React.createElement("br", null), React.createElement("button", {className: "btn btn-primary", onClick: function (e) { return _this.click(e); }}, "Click me!")));
    };
    return Foo;
}(React.Component));
module.exports = Foo;
