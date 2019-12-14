import React from "react";

function ColorBox(props) {
    const style = {
        backgroundColor: props.hex || "#000000",
        height: "100px",
        width: "100px"
    };

    return (
        <div>
            <div style={style}>

            </div>
            {props.name}
        </div>
    );
}

export default ColorBox;