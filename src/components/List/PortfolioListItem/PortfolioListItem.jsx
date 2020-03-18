import styled from "styled-components";
import React from "react"
import {ImageRectangle} from "../../Images";
import {TextContent, TextLink, TextTechnology} from "../../Texts";
import {FaGooglePlay, FaAppStore} from "react-icons/fa";

const Item = styled.li`
    text-decoration: none;
    color: cadetblue;
    height: 110px;
    line-height: 110px;
`;

export default React.memo(({image, appName, iosLink, androidLink})=>{
    return (
        <Item>
            <ImageRectangle width={"100px"} height={"100px"} image={image}/>
            <TextLink size={"2.2rem"}> {appName} </TextLink>
            {iosLink ? <a href={iosLink}><FaAppStore size={"64px"}
                                                     style={{padding: "10px",
                                                         marginTop: "10px"}}/></a> : ""}
            {androidLink ? <a href={androidLink}><FaGooglePlay size={"64px"}
                                                               style={{padding: "10px",
                                                                   marginTop: "10px"}}/></a>: ""}
            <TextContent size={"2.2rem"}></TextContent>
        </Item>
    )
})