import React from "react";
import {ConsumerContext} from "./ConsumerContext";
import {Button} from "react-bootstrap";

function ColorUpdateButton() {
    return (
        <ConsumerContext.Consumer>
            {
                ({updateColor}) => (
                    <div>
                        <Button value={"primary"} onClick={() => updateColor("red")}>Update Color</Button>
                        <Button value={"primary"} onClick={() => updateColor("Blue")}>Update Color</Button>
                    </div>
                )
            }
        </ConsumerContext.Consumer>
    )
}

export default ColorUpdateButton