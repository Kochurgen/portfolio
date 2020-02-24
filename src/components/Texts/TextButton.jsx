import styled from "styled-components";
import Text from "./Text";

export default styled(Text)`
    text-align: left;
    color:${(props)=>props.color? props.color:''};
    font-size:${(props)=>props.size? props.size:'22px'};
`;