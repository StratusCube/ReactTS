"use strict";
/// <reference path="../../../typings/index.d.ts" />
const React = require("react");
class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.message}</div>;
    }
}
module.exports = HelloMessage;
