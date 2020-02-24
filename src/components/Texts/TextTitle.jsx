import styled from "styled-components";

export default styled.h2`
    text-align: center;
    color:${(props)=>props.color? props.color:''};
    font-size:${(props)=>props.size? props.size:'22px'};
`;