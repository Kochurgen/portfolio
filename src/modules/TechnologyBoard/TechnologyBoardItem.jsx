import React from "react";
import {TextTechnology} from "../../components/Texts/"

export default React.memo(({image, name}) => {
        return (
            <span style={{display: "inline-flex", margin: "0 10px", width: '110px'}}>
                <img style={
                    {
                        width: '25px',
                        height: '35px'
                    }
                } src={image}/>
                <TextTechnology color={"white"}> {name} </TextTechnology>
            </span>
        )
    }
)