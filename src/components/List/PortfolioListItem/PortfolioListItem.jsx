import styled from "styled-components";
import React from "react"
import {ImageRectangle} from "../../Images";
import {TextContent, TextLink, Text} from "../../Texts";
import {FaGooglePlay, FaAppStore} from "react-icons/fa";

const Item = styled.li`
    text-decoration: none;
    color: cadetblue;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    position: relative;
    display: inline-block;
    max-width: 400px;
`;

const LineWrapper = styled.div`
    width: 90%;
    margin-left: 10px;
    float: left;
`;

const TextDiscription = styled(TextContent)`
    color: black;
    font-family: PT Sans,system,sans-serif;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: right;
`;

const TextWrapper = styled.div`
    width: 79%;
    max-width: 79%;
    float: left;
`;

const TextContentDescription = styled(Text)`
    float: left;
    text-align: left;
`;

export default React.memo(({image, appName, appLink, description, iosLink, androidLink}) => {
    return (
        <Item>
            <ImageRectangle width={"2em"} height={"2em"} image={image}/>
            <TextWrapper>
                <LineWrapper>
                    <TextLink color={"black"} size={"1.5rem"}><a href={appLink}>
                        <strong>{appName}</strong></a></TextLink>
                </LineWrapper>
                <LineWrapper>
                    <TextContentDescription color={"black"} size={"1.2rem"}>Technology: {description}</TextContentDescription>
                </LineWrapper>
                    {iosLink ? <TextDiscription><a href={iosLink}><FaAppStore size={"64px"}
                                                             style={{
                                                                 padding: "10px",
                                                                 marginTop: "10px"
                                                             }}/></a></TextDiscription> : ""}
                    {androidLink ? <TextDiscription><a href={androidLink}><FaGooglePlay size={"64px"}
                                                                       style={{
                                                                           padding: "10px",
                                                                           marginTop: "10px"
                                                                       }}/></a></TextDiscription> : ""}
            </TextWrapper>
        </Item>
    )
})