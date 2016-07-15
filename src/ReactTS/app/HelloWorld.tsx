/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface HelloWorldProps extends React.Props<any> {
    message: string;
}

class HelloMessage extends React.Component<HelloWorldProps, {}> {
    render() {
        return <div>Hello {this.props.message}</div>;
    }
}

export = HelloMessage;