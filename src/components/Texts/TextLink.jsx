import styled from "styled-components";
import Text from "./Text";

export default styled(Text)`
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
        @media (max-width:400px){
            max-width: 400px;
        }
        @media (width:1000px){
            max-width: 440px;
        }
`;