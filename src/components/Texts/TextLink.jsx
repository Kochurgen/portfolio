import styled from "styled-components";
import Text from "./Text";

export default styled(Text)`
    font-size: 40px;
    line-height: 58px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    
    @media (width:1000px){
        max-width: 440px;
    }
`;