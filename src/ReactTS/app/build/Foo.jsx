/// <reference path="../../../typings/index.d.ts" />
"use strict";
const React = require("react");
class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        };
        this.Titles = ["Foo", "Bar", "Biz", "Bash"];
    }
    click(event) {
        this.state.title = this.Titles[Math.floor(Math.random() * 4)];
        this.setState(this.state);
    }
    render() {
        return (<div>
                <h1>{this.props.userName}</h1>
                <h2>{this.state.title}</h2>
                <br />
                <button className="btn btn-primary" onClick={e => this.click(e)}>Click me!</button>
            </div>);
    }
}
module.exports = Foo;
