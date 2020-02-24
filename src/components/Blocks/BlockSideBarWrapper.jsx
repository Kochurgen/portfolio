import styled from "styled-components";
import Block from "./Block"

export default styled(Block)`
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 2;
    width: 27%;
    font-size: 14px;
    color: #fff;
    text-align: left;
    background-color: rgba(145,13,13,.8);
    
    @media(max-width: 1500px) {
        top: auto;
        bottom: auto;
        left: auto;
        right: auto;
        position: relative;
        width: auto;
        padding-top: 40px;
        padding-bottom: 0;
    }
`;