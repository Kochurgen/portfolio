import React from "react";
import {TextTechnology} from "../../components/Texts/"

export default React.memo(({image, name}) => {
        return (
            <span style={{display: "inline-flex", margin: "0 10px", width: '180px'}}>
                <img style={
                    {
                        width: '36px',
                        height: '36px'
                    }
                } src={image}/>
                <TextTechnology color={"white"}> {name} </TextTechnology>
            </span>
        )
    }
)