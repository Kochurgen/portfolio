import styled from "styled-components";
import React from "react"
import {ImageRectangle} from "../../Images";
import {TextContent, TextLink, TextTechnology} from "../../Texts";
import {FaGooglePlay, FaAppStore} from "react-icons/fa";

const Item = styled.li`
    text-decoration: none;
    color: cadetblue;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    height: 260px;
`;

const LineWrapper = styled.div`
    height: 3rem;
    width: 90%;
    margin: 10px;
    float: left;
`;

const TextDiscription = styled(TextContent)`
    color: black;
    font-family: PT Sans,system,sans-serif;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
`;

const TextWrapper = styled.div`
    width: 70%;
    max-width: 70%;
    height: 300px;
    float: left;
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
                    <TextDiscription size={"1rem"}>Technology: {description}</TextDiscription>
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