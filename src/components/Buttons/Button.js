import React, {PureComponent} from "react";
export default class extends PureComponent {
    render() {
        return React.createElement("button", {
            onClick: this.props.onButtonClick
        }, "Click me to increment");
    }
}