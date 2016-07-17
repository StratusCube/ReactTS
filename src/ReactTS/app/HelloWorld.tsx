/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";
//import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface HelloWorldProps extends React.Props<any> {
    message: string;
}

class HelloMessage extends React.Component<HelloWorldProps, {}> {
    render() {
        return (
            //<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
                <div>{this.props.message}</div>
            //</ReactCSSTransitionGroup>
        );
    }
}

export = HelloMessage;