import styled from "styled-components";

export default styled.div`
    left: ${props=>props.left? props.left: '0'};
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: rgba(145,13,13,.8);
    z-index: 9999999;
`;