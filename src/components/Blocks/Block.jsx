import styled from "styled-components";

export default styled.div`
    width: ${props=>props.width? props.width: '100%'};
    height: ${props=>props.height? props.height: '100%'};
    background-color: ${props=>props.color? props.color: ''};
`