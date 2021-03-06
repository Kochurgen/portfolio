import React from "react";
import styled from "styled-components";
import {TextContent} from "../../components/Texts";

const Wrapper = styled.div`
    width: 300px;
    height: 64px;
    line-height: 64px;
    border: 0 solid;
    border-radius: 40px;
    display: inline-block;
    background: rgba(226, 43, 43, 0.5);
    margin: 15px;
    box-shadow: 5px 10px 18px #888888;
    position: relative;
        &:active{
            background: rgba(226, 43, 43, 0.8);
        }
`;

const Link = styled.a`
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export default React.memo(
    ({text, link})=>{
        return(<Wrapper onClick={()=>{
            window.open(link,'_blank');
        }}>
            <Link><TextContent color={"white"}>{text}</TextContent></Link>
        </Wrapper>)
    })