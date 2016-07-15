/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";

interface FooProps extends React.Props<any> {
    userName: string;
    title: string;
}

interface FooState {
    title: string
}

class Foo extends React.Component<FooProps, FooState> {
    Titles: ["Foo", "Bar", "Biz", "Bash"];
    constructor(props: FooProps) {
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
    render(): JSX.Element {
        return (
            <div>
                <h1>{this.props.userName}</h1>
                <h2>{this.state.title}</h2>
                <br />
                <button className="btn btn-primary" onClick={ e => this.click(e) }>Click me!</button>
            </div>
        );
    }
}

export = Foo;