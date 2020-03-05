import styled from "styled-components";

export default styled.div`
    left: ${props=>props.left? props.left: '0'};
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: rgba(145, 13, 13, 1);
    z-index: 9999999;
    transition-property: -webkit-transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transition-delay: 0.3s;
`;