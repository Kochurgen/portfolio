import styled from "styled-components";

export default styled.span`
    color:${(props)=>props.color? props.color:''};
    font-size:${(props)=>props.size? props.size:'22px'};
    font-family: sans-serif;
`;