import styled from "styled-components";
import React from "react"
import {ImageRectangle} from "../../Images";
import {TextLink, TextTechnology} from "../../Texts";

const Item = styled.li`
    text-decoration: none;
    color: cadetblue;
`;

export default React.memo(()=>{
    return (
        <Item>
            <ImageRectangle/>
            <TextLink/>
            <TextLink/>
            <TextLink/>
            <TextTechnology/>
        </Item>
    )
})